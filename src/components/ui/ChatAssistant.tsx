"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { recognizeIntent, updateContext, generateProactiveSuggestions, ConversationContext, Intent } from '@/utils/nlu';
import { ConversationStorage } from '@/utils/conversationStorage';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  intent?: string;
  confidence?: number;
  options?: string[];
  entities?: Array<{type: string; value: string; confidence?: number}>;
}

interface AssistantStatus {
  online: boolean;
  typing: boolean;
  thinking: boolean;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [assistantStatus, setAssistantStatus] = useState<AssistantStatus>({
    online: true,
    typing: false,
    thinking: false
  });
  const [proactiveSuggestions, setProactiveSuggestions] = useState<string[]>([]);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();

  // Função para converter markdown básico para HTML
  const formatMarkdownText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **texto** para <strong>texto</strong>
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // *texto* para <em>texto</em>
      .replace(/\n/g, '<br/>'); // quebras de linha
  };

  const content = currentLanguage === 'PT' ? {
    title: 'Clara Assis',
    subtitle: 'Assistente Virtual • Online',
    placeholder: 'Digite sua mensagem...',
    send: 'Enviar',
    close: 'Fechar',
    initialMessage: 'Olá! Eu sou a Clara, assistente virtual da Martins Regina Advocacia. Como posso ajudá-lo hoje?',
    welcomeBackMessage: 'Que bom te ver de novo! Como posso ajudar hoje?',
    typing: 'Clara está digitando...',
    thinking: 'Clara está pensando...',
    online: 'Online',
    offline: 'Offline',
    options: [
      'Áreas de atuação',
      'Agendar consulta',
      'Sobre o escritório',
      'Contato',
      'Localização'
    ]
  } : {
    title: 'Clara Assis',
    subtitle: 'Virtual Assistant • Online',
    placeholder: 'Type your message...',
    send: 'Send',
    close: 'Close',
    initialMessage: 'Hello! I am Clara, virtual assistant of Martins Regina Advocacia. How can I help you today?',
    welcomeBackMessage: 'Good to see you again! How can I help today?',
    typing: 'Clara is typing...',
    thinking: 'Clara is thinking...',
    online: 'Online',
    offline: 'Offline',
    options: [
      'Practice areas',
      'Schedule consultation',
      'About the firm',
      'Contact',
      'Location'
    ]
  };

  // Respostas inteligentes baseadas em intenções
  const getSmartResponse = useCallback((intent: Intent, userMessage: string) => {
    const responses = currentLanguage === 'PT' ? {
      agendar_consulta: {
        text: `Perfeito! Vou te ajudar a agendar uma consulta. 📅\n\n**Opções disponíveis:**\n• 📞 **Rio de Janeiro:** +55 21 2532-7311\n• 📞 **São Paulo:** +55 11 5504-1962\n• 💬 **WhatsApp RJ:** +55 21 98777-1186\n• 💬 **WhatsApp Campinas:** +55 19 9.9186-6133\n• 📧 **E-mail:** contato@martinsregina.com\n\nNossa equipe entrará em contato para agendar o melhor horário. A primeira consulta é **gratuita**!\n\n🕒 **Horário:** Segunda a Sexta, 9h às 18h`,
        options: ['Direito Empresarial', 'Planejamento Sucessório', 'Outras áreas']
      },
      areas_atuacao: {
        text: `Excelente pergunta! Atuamos em diversas áreas jurídicas especializadas: ⚖️\n\nEscolha o tipo de cliente para ver nossas especialidades:`,
        options: ['Pessoa Jurídica', 'Pessoa Física', 'Todas as áreas', 'Agendar consulta']
      },
      'pessoa juridica': {
        text: `🏢 **Áreas de Atuação - Pessoa Jurídica**\n\n**Principais Especialidades:**\n\n• **Direito Empresarial** - Estruturação e assessoria completa\n• **Contratos Empresariais** - Elaboração e revisão especializada\n• **Fusões e Aquisições** - Assessoria estratégica em M&A\n• **Direito Tributário** - Planejamento tributário estratégico\n• **Direito Trabalhista** - Prevenção de passivos trabalhistas\n• **Direito Digital** - Assessoria em tecnologia e dados\n• **Direito Bancário** - Operações financeiras complexas\n• **Recuperação Judicial** - Soluções para empresas em dificuldade\n\nSobre qual área gostaria de saber mais detalhes?`,
        options: ['Direito Empresarial', 'Contratos Empresariais', 'Fusões e Aquisições', 'Direito Tributário', 'Outras áreas PJ']
      },
      'pessoa fisica': {
        text: `👥 **Áreas de Atuação - Pessoa Física**\n\n**Principais Especialidades:**\n\n• **Planejamento Sucessório** - Estruturação de heranças e sucessões\n• **Direito de Família** - Orientação especializada em questões familiares\n• **Planejamento Tributário PF** - Otimização da carga tributária\n• **Direito Imobiliário** - Assessoria completa em transações\n• **Direito Previdenciário** - Maximização de benefícios\n• **Proteção de Dados** - Conformidade com LGPD\n\nSobre qual área gostaria de saber mais detalhes?`,
        options: ['Planejamento Sucessório', 'Direito de Família', 'Direito Imobiliário', 'Planejamento Tributário PF', 'Outras áreas PF']
      },
      'todas as areas': {
        text: `⚖️ **Todas as Nossas Áreas de Atuação**\n\n🏢 **Pessoa Jurídica:**\n• Direito Empresarial • Contratos Empresariais\n• Fusões e Aquisições • Direito Tributário\n• Direito Trabalhista • Direito Digital\n• Direito Bancário • Recuperação Judicial\n\n👥 **Pessoa Física:**\n• Planejamento Sucessório • Direito de Família\n• Planejamento Tributário PF • Direito Imobiliário\n• Direito Previdenciário • Proteção de Dados\n\n**30 anos de experiência** atendendo clientes de todos os perfis com excelência e inovação.\n\nQue área específica te interessa mais?`,
        options: ['Pessoa Jurídica', 'Pessoa Física', 'Agendar consulta', 'Sobre o escritório']
      },
      informacoes_escritorio: {
        text: `🏆 **Martins Regina Advocacia - 30 Anos de Excelência**\n\n✨ **Nossa História:**\n• **Fundado em 1994** por Regina Martins\n• **1.000+ clientes** atendidos com sucesso\n• **13 cidades** de atuação global\n• **157 profissionais** especializados\n• **16 áreas** de especialização jurídica\n\n🎯 **Nossa Missão:**\nOferecer soluções jurídicas inovadoras com excelência técnica e atendimento personalizado, combinando visão corporativa com expertise jurídica tradicional.\n\n🏅 **Reconhecimento:**\nReconhecidos pelos principais rankings jurídicos do país e certificados ISO 37001.`,
        options: ['Áreas de atuação', 'Presença global', 'Agendar consulta']
      },
      contato: {
        text: `📍 **Entre em contato conosco:**\n\n🏢 **Escritórios Principais:**\n• **Rio de Janeiro:** Av. das Américas, 4200 - Barra da Tijuca\n• **São Paulo:** Av. Paulista, 1106 - Bela Vista\n\n📞 **Telefones:**\n• Rio de Janeiro: +55 21 2532-7311\n• São Paulo: +55 11 5504-1962\n\n💬 **WhatsApp:**\n• Rio de Janeiro: +55 21 98777-1186\n• Campinas: +55 19 9.9186-6133\n• Portugal: +351 913 049 169\n\n📧 **E-mail:** contato@martinsregina.com\n\n🕒 **Horário:** Segunda a Sexta, 9h às 18h`,
        options: ['Agendar consulta', 'Outros escritórios', 'Horários especiais']
      },
      'presenca global': {
        text: `🌍 **Presença Global - 13 Localidades**\n\n🇧🇷 **Brasil:**\n• **Rio de Janeiro** - Sede principal\n• **São Paulo** - Escritório estratégico\n• **Campinas** - Região metropolitana\n• **Brasília** - Capital federal\n• **Belo Horizonte** - Minas Gerais\n• **Salvador** - Bahia\n• **Recife** - Pernambuco\n• **Fortaleza** - Ceará\n• **Porto Alegre** - Rio Grande do Sul\n• **Curitiba** - Paraná\n• **Goiânia** - Goiás\n• **Vitória** - Espírito Santo\n\n🌍 **Internacional:**\n• **Lisboa** - Portugal (Escritório europeu)\n\n**Cobertura Nacional Completa:**\n✈️ Atendimento presencial em todas as localidades\n📱 Suporte digital 24/7\n🤝 Equipe local especializada`,
        options: ['Escritório mais próximo', 'Atendimento digital', 'Agendar consulta']
      },
      'outros escritorios': {
        text: `🏢 **Nossos Escritórios**\n\n📍 **Principais Localidades:**\n\n🏙️ **Rio de Janeiro** (Sede)\nAv. das Américas, 4200 - Barra da Tijuca\n📞 +55 21 2532-7311\n💬 WhatsApp: +55 21 98777-1186\n\n🏙️ **São Paulo**\nAv. Paulista, 1106 - Bela Vista\n📞 +55 11 5504-1962\n\n🏙️ **Campinas**\n💬 WhatsApp: +55 19 9.9186-6133\n\n🌍 **Lisboa - Portugal**\n💬 WhatsApp: +351 913 049 169\n\n**Outras Cidades:**\nBrasília • Belo Horizonte • Salvador • Recife\nFortaleza • Porto Alegre • Curitiba • Goiânia • Vitória\n\n🕒 **Horário:** Segunda a Sexta, 9h às 18h`,
        options: ['Agendar em RJ', 'Agendar em SP', 'Outras cidades', 'Atendimento online']
      },
      'horarios especiais': {
        text: `🕒 **Horários de Atendimento**\n\n**Horário Padrão:**\n🕘 Segunda a Sexta: 9h às 18h\n🕘 Sábados: Apenas emergências (sob consulta)\n\n⚡ **Atendimento Urgente:**\n• **24 horas** - Casos emergenciais\n• **WhatsApp** - Resposta rápida\n• **E-mail** - Resposta em até 2 horas úteis\n\n🌍 **Fuso Horário:**\n• **Brasil:** Horário de Brasília (GMT-3)\n• **Portugal:** Horário de Lisboa (GMT+1)\n\n📅 **Agendamento Flexível:**\n• Reuniões matutinas (8h)\n• Reuniões noturnas (até 20h - sob consulta)\n• Fins de semana (casos especiais)\n• Videoconferência (qualquer horário)\n\n💼 **Atendimento Executivo:**\nHorários diferenciados para grandes clientes`,
        options: ['Agendar urgente', 'Reunião executiva', 'Atendimento online']
      },
      urgencia: {
        text: `⚡ **Atendimento Urgente**\n\nEntendo que sua situação é urgente! Para casos que requerem atenção imediata:\n\n📞 **Rio de Janeiro:** +55 21 2532-7311\n📞 **São Paulo:** +55 11 5504-1962\n💬 **WhatsApp RJ:** +55 21 98777-1186\n💬 **WhatsApp Campinas:** +55 19 9.9186-6133\n📧 **E-mail:** contato@martinsregina.com\n\nNossa equipe está preparada para atendimentos emergenciais e pode avaliar seu caso no mesmo dia.`,
        options: ['Ligar Rio', 'Ligar São Paulo', 'WhatsApp urgente']
      },
      saudacao: {
        text: `Olá! 😊 É um prazer falar com você!\n\nSou a Clara, sua assistente virtual aqui na Martins Regina Advocacia. Estou aqui para ajudar com informações sobre nossos serviços, agendar consultas ou esclarecer dúvidas jurídicas.\n\nComo posso tornar seu dia melhor?`,
        options: content.options
      },
      orcamento: {
        text: `💰 **Informações sobre Honorários**\n\nNossos honorários são personalizados conforme:\n• Complexidade do caso\n• Tempo estimado\n• Área de atuação\n• Urgência\n\n🆓 **Primeira consulta gratuita** para avaliarmos seu caso!\n\nApós a análise inicial, apresentamos uma proposta transparente e justa.`,
        options: ['Agendar consulta gratuita', 'Áreas de atuação', 'Falar com especialista']
      },
      // Áreas específicas de atuação - Pessoa Jurídica
      'direito empresarial': {
        text: `🏢 **Direito Empresarial - Nossa Especialidade**\n\n**Serviços Oferecidos:**\n• **Constituição de Empresas** - Assessoria completa para abertura\n• **Governança Corporativa** - Estruturação de conselhos e diretorias\n• **Compliance Empresarial** - Programas de integridade\n• **Reestruturações Societárias** - Reorganização de capital\n• **Due Diligence** - Auditoria jurídica para M&A\n• **Contratos Empresariais** - Elaboração e revisão\n\n**Diferencial:**\n✅ Mais de 500 empresas constituídas\n✅ Experiência em startups e grandes corporações\n✅ Acompanhamento pós-constituição\n\n**Casos de Sucesso:**\nAuxiliamos na estruturação de holdings familiares com patrimônio superior a R$ 100 milhões.`,
        options: ['Agendar consulta', 'Outras áreas PJ', 'Casos práticos']
      },
      'contratos': {
        text: `📋 **Contratos e Negociações**\n\n**Tipos de Contratos:**\n• **Contratos Comerciais** - Compra, venda, distribuição\n• **Contratos de Prestação de Serviços** - B2B e B2C\n• **Contratos Internacionais** - Import/export\n• **Contratos de Tecnologia** - Licenciamento, SaaS\n• **Joint Ventures** - Parcerias estratégicas\n• **Franquias** - Estruturação completa\n\n**Nossa Abordagem:**\n🎯 **Análise de Riscos** - Identificação de cláusulas críticas\n🛡️ **Proteção Jurídica** - Blindagem contra litígios\n⚖️ **Negociação Estratégica** - Equilibrio de interesses\n\n**Garantias:**\n• Revisão gratuita por 30 dias\n• Suporte para esclarecimentos\n• Modelos personalizados`,
        options: ['Solicitar proposta', 'Ver modelos', 'Agendar reunião']
      },
      'fusoes e aquisicoes': {
        text: `🤝 **Fusões e Aquisições (M&A)**\n\n**Operações que Conduzimos:**\n• **Aquisições Estratégicas** - Compra de concorrentes\n• **Fusões Horizontais** - União de empresas do mesmo setor\n• **Incorporações** - Absorção de subsidiárias\n• **Joint Ventures** - Parcerias para novos mercados\n• **Spin-offs** - Separação de unidades de negócio\n• **LBOs** - Aquisições alavancadas\n\n**Processo Completo:**\n🔍 **Due Diligence** - Auditoria jurídica, fiscal e trabalhista\n📊 **Valuation** - Avaliação econômico-financeira\n📋 **Estruturação** - Modelagem da operação\n⚖️ **Negociação** - Condições e garantias\n📝 **Documentação** - Contratos e atos societários\n🏛️ **Aprovações** - CADE, CVM, órgãos reguladores\n\n**Experiência:**\n• R$ 2,5 bilhões em operações conduzidas\n• 150+ transações concluídas`,
        options: ['Casos de sucesso', 'Processo detalhado', 'Agendar consulta']
      },
      'direito tributario': {
        text: `💰 **Direito Tributário**\n\n**Serviços Especializados:**\n• **Planejamento Tributário** - Otimização da carga fiscal\n• **Elisão Fiscal** - Redução legal de impostos\n• **Defesas Administrativas** - Contestação de autuações\n• **Recursos ao CARF** - Tribunal administrativo federal\n• **Ações Judiciais** - Recuperação de tributos pagos indevidamente\n• **Compliance Tributário** - Adequação às obrigações\n\n**Áreas de Atuação:**\n🏛️ **Impostos Federais** - IR, CSLL, PIS, COFINS, IPI\n🏢 **Tributos Estaduais** - ICMS, ITCMD\n🏘️ **Impostos Municipais** - ISS, IPTU, ITBI\n\n**Resultados Obtidos:**\n• R$ 50 milhões recuperados para clientes\n• 85% de êxito em defesas administrativas\n• Redução média de 30% na carga tributária\n\n**Diferencial:**\nEquipe com ex-auditores da Receita Federal`,
        options: ['Calcular economia', 'Casos práticos', 'Agendar análise']
      },
      'compliance': {
        text: `🛡️ **Compliance e Integridade**\n\n**Programas que Desenvolvemos:**\n• **Compliance Anticorrupção** - Lei 12.846/2013\n• **LGPD** - Adequação à proteção de dados\n• **Compliance Trabalhista** - Prevenção de passivos\n• **Compliance Tributário** - Gestão de riscos fiscais\n• **ESG** - Governança ambiental e social\n• **Compliance Setorial** - Regulamentações específicas\n\n**Metodologia:**\n🔍 **Diagnóstico** - Mapeamento de riscos atuais\n📋 **Estruturação** - Políticas e procedimentos\n🎓 **Treinamento** - Capacitação de equipes\n📊 **Monitoramento** - Auditoria e controles\n🔄 **Melhoria Contínua** - Atualização constante\n\n**Benefícios:**\n• Redução de multas e sanções\n• Melhoria da reputação corporativa\n• Acesso a financiamentos preferenciais\n• Proteção em licitações públicas\n\n**Certificações:**\nPrograma certificado ISO 37001`,
        options: ['Diagnóstico gratuito', 'Metodologia', 'Casos de sucesso']
      },
      // Áreas específicas - Pessoa Física
      'planejamento sucessorio': {
        text: `👨‍👩‍👧‍👦 **Planejamento Sucessório**\n\n**Serviços Especializados:**\n• **Holdings Familiares** - Estruturação patrimonial\n• **Testamentos** - Elaboração e registro\n• **Doações Estratégicas** - Antecipação da herança\n• **Blindagem Patrimonial** - Proteção contra credores\n• **Inventários** - Judicial e extrajudicial\n• **Pactos Antenupciais** - Proteção matrimonial\n\n**Estratégias Utilizadas:**\n🏢 **Holding Familiar** - Redução de até 70% nos impostos\n📋 **Testamento** - Garantia da vontade do testador\n💝 **Doação com Reserva** - Manutenção do controle\n🛡️ **Trust Brasileiro** - Proteção avançada\n⚖️ **Arbitragem** - Resolução privada de conflitos\n\n**Benefícios Fiscais:**\n• ITCMD: Redução significativa\n• Imposto de Renda: Otimização na transmissão\n• Custos de Inventário: Eliminação de taxas judiciais\n\n**Patrimônios Protegidos:**\n• R$ 500 milhões em estruturações realizadas\n• 200+ famílias assessoradas\n• 95% de economia tributária obtida`,
        options: ['Simular economia', 'Estruturas disponíveis', 'Agendar consulta']
      },
      'direito de familia': {
        text: `👨‍👩‍👧‍👦 **Direito de Família**\n\n**Áreas de Atuação:**\n• **Divórcio Consensual** - Procedimento extrajudicial\n• **Divórcio Litigioso** - Defesa de interesses\n• **Guarda de Filhos** - Compartilhada ou unilateral\n• **Pensão Alimentícia** - Fixação e revisão\n• **União Estável** - Reconhecimento e dissolução\n• **Adoção** - Nacional e internacional\n\n**Especialidades:**\n💰 **Partilha de Bens** - Regimes matrimoniais complexos\n🏠 **Bens Imóveis** - Divisão e avaliação\n💼 **Empresas Familiares** - Participação societária\n🌍 **Casos Internacionais** - Divórcios com bens no exterior\n👶 **Direitos da Criança** - Proteção integral\n\n**Abordagem Diferenciada:**\n🤝 **Mediação Familiar** - Resolução pacífica\n👥 **Equipe Multidisciplinar** - Psicólogos e assistentes sociais\n📱 **Atendimento Digital** - Consultoria online\n⚡ **Urgência** - Medidas protetivas em 24h\n\n**Resultados:**\n• 80% dos casos resolvidos por acordo\n• Redução de 60% no tempo de processo`,
        options: ['Mediação familiar', 'Urgência 24h', 'Agendar consulta']
      },
      'direito imobiliario': {
        text: `🏠 **Direito Imobiliário**\n\n**Serviços Oferecidos:**\n• **Compra e Venda** - Due diligence imobiliária\n• **Financiamento Imobiliário** - Análise de contratos\n• **Incorporações** - Lançamentos imobiliários\n• **Locação** - Contratos residenciais e comerciais\n• **Condomínios** - Assessoria jurídica completa\n• **Regularização** - Documentação e registros\n\n**Especialidades:**\n🏗️ **Incorporações** - Da concepção à entrega\n🏢 **Empreendimentos Comerciais** - Shopping centers, escritórios\n🌊 **Imóveis Rurais** - Fazendas e propriedades agrícolas\n🏖️ **Imóveis de Luxo** - Residências de alto padrão\n🌍 **Investimentos Estrangeiros** - Compra por não residentes\n\n**Due Diligence Completa:**\n📋 **Documentação** - Certidões e registros\n⚖️ **Aspectos Legais** - Ônus e gravames\n🏛️ **Questões Municipais** - Zoneamento e licenças\n💰 **Aspectos Fiscais** - ITBI, IPTU, IR\n🌱 **Questões Ambientais** - Licenças e restrições\n\n**Volume de Transações:**\n• R$ 800 milhões em negócios assessorados\n• 1.500+ transações concluídas\n• 0% de problemas pós-transação`,
        options: ['Verificar imóvel', 'Tipos de contrato', 'Agendar análise']
      },
      'protecao patrimonial': {
        text: `🛡️ **Proteção Patrimonial**\n\n**Estratégias de Proteção:**\n• **Blindagem Empresarial** - Separação patrimonial\n• **Holdings de Proteção** - Estruturas societárias\n• **Seguros Especializados** - D&O, E&O, Cyber\n• **Offshore Legal** - Jurisdições favoráveis\n• **Trusts Brasileiros** - Patrimônio de afetação\n• **Impenhorabilidade** - Bem de família ampliado\n\n**Riscos Protegidos:**\n⚖️ **Ações Judiciais** - Credores e processos\n💼 **Responsabilidade Civil** - Danos a terceiros\n🏛️ **Questões Tributárias** - Execuções fiscais\n👥 **Sócios e Acionistas** - Conflitos societários\n💔 **Divórcio** - Partilha de bens\n🏥 **Problemas de Saúde** - Custos médicos elevados\n\n**Instrumentos Utilizados:**\n🏢 **Holding Familiar** - Controle e proteção\n📋 **Pacto Antenupcial** - Regime de bens\n🏠 **Bem de Família** - Impenhorabilidade\n💰 **Seguro de Vida** - Proteção familiar\n🌍 **Estruturas Internacionais** - Diversificação\n\n**Patrimônios Protegidos:**\n• R$ 2 bilhões em ativos protegidos\n• 300+ estruturas implementadas\n• 100% de eficácia nas proteções`,
        options: ['Análise de riscos', 'Estruturas disponíveis', 'Casos de sucesso']
      },
      // Novas áreas específicas - Pessoa Jurídica
      'contratos empresariais': {
        text: `📋 **Contratos Empresariais**\n\n**Especialização Completa:**\n• **Contratos Comerciais** - Compra, venda, distribuição\n• **Parcerias Estratégicas** - Joint ventures e alianças\n• **Fornecimento** - Contratos de longo prazo\n• **Licenciamento** - Propriedade intelectual\n• **Franchising** - Estruturação completa\n• **Contratos Internacionais** - Import/export\n\n**Diferencial:**\n🎯 Elaboração e revisão com foco na mitigação de riscos\n🛡️ Proteção jurídica contra litígios\n⚖️ Negociação estratégica equilibrada\n\n**Garantias:**\n• Revisão gratuita por 30 dias\n• Modelos personalizados\n• Suporte pós-assinatura`,
        options: ['Solicitar proposta', 'Ver modelos', 'Agendar reunião']
      },
      'direito trabalhista': {
        text: `👷 **Direito Trabalhista**\n\n**Prevenção e Assessoria:**\n• **Compliance Trabalhista** - Prevenção de passivos\n• **Contratos de Trabalho** - Todas as modalidades\n• **Demissões** - Procedimentos seguros\n• **Acordos Trabalhistas** - Negociação estratégica\n• **Auditoria Trabalhista** - Identificação de riscos\n• **Relações Sindicais** - Negociação coletiva\n\n**Áreas de Atuação:**\n⚖️ **Contencioso** - Defesa em ações trabalhistas\n🛡️ **Preventivo** - Políticas e procedimentos\n📊 **Consultivo** - Orientação estratégica\n🎓 **Treinamentos** - Capacitação de equipes\n\n**Resultados:**\n• 90% de redução em passivos trabalhistas\n• Economia média de 40% em custos trabalhistas`,
        options: ['Auditoria trabalhista', 'Compliance trabalhista', 'Agendar consulta']
      },
      'direito digital': {
        text: `💻 **Direito Digital**\n\n**Assessoria Especializada:**\n• **LGPD** - Adequação completa à proteção de dados\n• **Marco Civil** - Conformidade com regulamentação\n• **E-commerce** - Estruturação de lojas virtuais\n• **Contratos Digitais** - Termos de uso e privacidade\n• **Propriedade Intelectual** - Proteção de ativos digitais\n• **Crimes Cibernéticos** - Prevenção e defesa\n\n**Especialidades:**\n🔒 **Proteção de Dados** - LGPD e regulamentações\n🌐 **Transformação Digital** - Adequação jurídica\n📱 **Apps e Plataformas** - Estruturação legal\n🛡️ **Cybersecurity** - Aspectos jurídicos\n⚖️ **Litígios Digitais** - Resolução de conflitos\n\n**Certificações:**\n• Especialistas certificados em LGPD\n• Parcerias com empresas de tecnologia`,
        options: ['Adequação LGPD', 'E-commerce', 'Agendar consulta']
      },
      'direito bancario': {
        text: `🏦 **Direito Bancário**\n\n**Operações Financeiras Complexas:**\n• **Operações de Crédito** - Estruturação e garantias\n• **Garantias** - Constituição e execução\n• **Renegociações** - Reestruturação de dívidas\n• **Contratos Bancários** - Elaboração especializada\n• **Compliance Bancário** - Adequação regulatória\n• **Relacionamento Bancário** - Otimização de condições\n\n**Áreas de Atuação:**\n💰 **Financiamentos** - Imobiliário, rural, empresarial\n📊 **Mercado de Capitais** - Emissões e investimentos\n🏛️ **Regulatório** - BACEN, CVM, SUSEP\n⚖️ **Contencioso** - Ações bancárias\n🌍 **Internacional** - Operações cross-border\n\n**Experiência:**\n• R$ 5 bilhões em operações estruturadas\n• 25 anos de relacionamento bancário\n• Expertise em grandes financiamentos`,
        options: ['Operações de crédito', 'Renegociações', 'Agendar consulta']
      },
      'recuperacao judicial': {
        text: `⚖️ **Recuperação Judicial**\n\n**Soluções para Empresas em Dificuldade:**\n• **Recuperação Judicial** - Reestruturação completa\n• **Recuperação Extrajudicial** - Acordos privados\n• **Falências** - Administração e liquidação\n• **Reestruturação de Dívidas** - Negociação estratégica\n• **Acordos com Credores** - Soluções consensuais\n• **Distressed M&A** - Aquisições especiais\n\n**Processo Completo:**\n🔍 **Diagnóstico** - Análise da viabilidade\n📋 **Planejamento** - Estratégia de recuperação\n⚖️ **Judicial** - Acompanhamento processual\n🤝 **Negociação** - Acordos com credores\n📊 **Monitoramento** - Cumprimento do plano\n\n**Resultados:**\n• 85% de aprovação em planos de recuperação\n• R$ 800 milhões em dívidas reestruturadas\n• 200+ empresas recuperadas com sucesso`,
        options: ['Diagnóstico gratuito', 'Casos de sucesso', 'Agendar consulta']
      },
      // Novas áreas específicas - Pessoa Física
      'planejamento tributario pf': {
        text: `💰 **Planejamento Tributário - Pessoa Física**\n\n**Otimização da Carga Tributária:**\n• **Imposto de Renda** - Estratégias de otimização\n• **Investimentos** - Estruturação tributária eficiente\n• **Receita Federal** - Regularização e defesas\n• **Ganhos de Capital** - Planejamento de vendas\n• **Doações** - Estruturação tributária\n• **Heranças** - Otimização do ITCMD\n\n**Estratégias Utilizadas:**\n📊 **Análise Patrimonial** - Mapeamento completo\n🏢 **Holding Familiar** - Estruturação tributária\n💼 **Investimentos** - Otimização de portfólio\n📋 **Declarações** - IR e obrigações acessórias\n⚖️ **Defesas** - Contestação de autuações\n\n**Economia Obtida:**\n• Redução média de 40% na carga tributária\n• R$ 20 milhões em economia para clientes\n• 95% de êxito em defesas administrativas`,
        options: ['Calcular economia', 'Holding familiar', 'Agendar análise']
      },
      'direito previdenciario': {
        text: `👴 **Direito Previdenciário**\n\n**Maximização de Benefícios:**\n• **INSS** - Aposentadorias e pensões\n• **Aposentadorias** - Tempo, idade, especial\n• **Benefícios** - Auxílios e pensões\n• **Revisões** - Aumento de benefícios\n• **Planejamento** - Estratégia previdenciária\n• **Previdência Privada** - Estruturação de planos\n\n**Especialidades:**\n⏰ **Tempo de Contribuição** - Contagem especializada\n🏭 **Aposentadoria Especial** - Atividades insalubres\n👥 **Pensão por Morte** - Direitos dos dependentes\n💰 **Revisão de Benefícios** - Aumento de valores\n📊 **Planejamento** - Otimização de aposentadoria\n\n**Resultados Obtidos:**\n• R$ 15 milhões recuperados em revisões\n• 90% de êxito em concessões de benefícios\n• Aumento médio de 35% nos valores\n• 1.500+ aposentadorias concedidas`,
        options: ['Revisar benefício', 'Planejar aposentadoria', 'Agendar consulta']
      },
      'protecao de dados': {
        text: `🔒 **Proteção de Dados - LGPD**\n\n**Conformidade Completa:**\n• **LGPD** - Adequação à Lei Geral de Proteção de Dados\n• **Privacidade** - Políticas e procedimentos\n• **Dados Pessoais** - Tratamento e proteção\n• **Consentimento** - Gestão adequada\n• **Incidentes** - Resposta e notificação\n• **DPO** - Data Protection Officer\n\n**Serviços Oferecidos:**\n🔍 **Diagnóstico** - Mapeamento de dados\n📋 **Adequação** - Implementação da LGPD\n🎓 **Treinamentos** - Capacitação de equipes\n📊 **Monitoramento** - Compliance contínuo\n⚖️ **Defesas** - Recursos administrativos\n\n**Proteção Garantida:**\n• Conformidade 100% com LGPD\n• Redução de riscos de multas\n• Melhoria da reputação digital\n• Proteção da privacidade pessoal`,
        options: ['Diagnóstico LGPD', 'Adequação completa', 'Agendar consulta']
      },
      'outras areas pj': {
        text: `🏢 **Outras Áreas - Pessoa Jurídica**\n\n**Especialidades Adicionais:**\n\n• **Direito Societário** - Alterações contratuais, assembleia\n• **Propriedade Intelectual** - Marcas, patentes, direitos autorais\n• **Direito Ambiental** - Licenciamento e compliance ambiental\n• **Direito Internacional** - Contratos e operações cross-border\n• **Arbitragem** - Resolução alternativa de conflitos\n• **Direito Regulatório** - Agências reguladoras\n• **Direito da Concorrência** - Antitruste e CADE\n• **Direito Administrativo** - Licitações e contratos públicos\n\n**Assessoria Completa:**\n⚖️ Todas as áreas do direito empresarial\n🌍 Visão internacional e comparada\n📊 Soluções integradas e multidisciplinares\n\nQual área específica te interessa?`,
        options: ['Propriedade Intelectual', 'Direito Ambiental', 'Arbitragem', 'Voltar às principais']
      },
      'outras areas pf': {
        text: `👥 **Outras Áreas - Pessoa Física**\n\n**Especialidades Adicionais:**\n\n• **Direito do Consumidor** - Defesa de direitos e reparações\n• **Direito Criminal** - Defesa em processos penais\n• **Direito Médico** - Erro médico e responsabilidade\n• **Direito Desportivo** - Atletas e entidades esportivas\n• **Direito Autoral** - Proteção de obras intelectuais\n• **Direito Internacional** - Questões transnacionais\n• **Direito Administrativo** - Relação com poder público\n• **Inventários e Arrolamentos** - Sucessões judiciais\n\n**Atendimento Personalizado:**\n👤 Foco na pessoa e suas necessidades\n🏠 Proteção do patrimônio familiar\n⚖️ Defesa de direitos fundamentais\n\nQual área específica te interessa?`,
        options: ['Direito do Consumidor', 'Direito Criminal', 'Inventários', 'Voltar às principais']
      }
    } : {
      agendar_consulta: {
        text: `Perfect! I'll help you schedule a consultation. 📅\n\n**Available options:**\n• 📞 Call: (11) 99999-9999\n• 📧 Email: contato@martinsregina.com.br\n• 💬 WhatsApp: Click the floating button\n\nOur team will contact you to schedule the best time. The first consultation is **free**!`,
        options: ['Corporate Law', 'Estate Planning', 'Other areas']
      },
      areas_atuacao: {
        text: `Excellent question! We operate in various legal areas: ⚖️\n\n🏢 **Corporate:**\n• Corporate Law\n• Contracts & Negotiations\n• M&A\n• Tax Law\n• Compliance\n\n👥 **Individuals:**\n• Estate Planning\n• Family Law\n• Real Estate\n• Asset Protection\n\nWhich area would you like to know more about?`,
        options: ['Corporate Law', 'Estate Planning', 'Schedule consultation']
      },
      informacoes_escritorio: {
        text: `🏆 **Martins Regina Advocacia - 30 Years of Excellence**\n\n✨ **Our History:**\n• Founded in 1994 by Regina Martins\n• Over 1,000 clients served\n• Presence in 14 locations\n• Specialization in large estates\n\n🎯 **Our Mission:**\nProvide innovative legal solutions with technical excellence and personalized service.\n\nRecognized by major legal rankings!`,
        options: ['Practice areas', 'Our partners', 'Schedule consultation']
      },
      contato: {
        text: `📍 **Contact us:**\n\n🏢 **Main Office:**\nAv. Paulista, 1000 - São Paulo/SP\nZIP: 01310-100\n\n📞 **Contacts:**\n• Phone: (11) 99999-9999\n• Email: contato@martinsregina.com.br\n• WhatsApp: (11) 99999-9999\n\n🌐 **Digital:**\n• Website: www.martinsregina.com.br\n• LinkedIn: Martins Regina Advocacia\n• Instagram: @martinsregina`,
        options: ['Agendar consulta', 'Localização', 'Outras informações']
      },
      urgencia: {
        text: `⚡ **Urgent Service**\n\nI understand your situation is urgent! For cases requiring immediate attention:\n\n📞 **Call now:** (11) 99999-9999\n💬 **WhatsApp:** Response in minutes\n📧 **Email:** contato@martinsregina.com.br\n\nOur team is prepared for emergency cases and can evaluate your case the same day.`,
        options: ['Call now', 'Send WhatsApp', 'Schedule for today']
      },
      saudacao: {
        text: `Hello! 😊 It's a pleasure to talk with you!\n\nI'm Clara, your virtual assistant here at Martins Regina Advocacia. I'm here to help with information about our services, schedule consultations or clarify legal questions.\n\nHow can I make your day better?`,
        options: content.options
      },
      orcamento: {
        text: `💰 **Fee Information**\n\nOur fees are customized according to:\n• Case complexity\n• Estimated time\n• Practice area\n• Urgency\n\n🆓 **First consultation free** to evaluate your case!\n\nAfter initial analysis, we present a transparent and fair proposal.`,
        options: ['Schedule free consultation', 'Practice areas', 'Talk to specialist']
      },
      // Specific practice areas - Corporate
      'corporate law': {
        text: `🏢 **Corporate Law - Our Specialty**\n\n**Services Offered:**\n• **Company Formation** - Complete incorporation assistance\n• **Corporate Governance** - Board and management structuring\n• **Business Compliance** - Integrity programs\n• **Corporate Restructuring** - Capital reorganization\n• **Due Diligence** - Legal audit for M&A\n• **Business Contracts** - Drafting and review\n\n**Differentials:**\n✅ Over 500 companies incorporated\n✅ Experience with startups and large corporations\n✅ Post-incorporation support\n\n**Success Cases:**\nWe assisted in structuring family holdings with assets exceeding R$ 100 million.`,
        options: ['Schedule consultation', 'Other corporate areas', 'Practical cases']
      },
      'contracts': {
        text: `📋 **Contracts and Negotiations**\n\n**Contract Types:**\n• **Commercial Contracts** - Purchase, sale, distribution\n• **Service Agreements** - B2B and B2C\n• **International Contracts** - Import/export\n• **Technology Contracts** - Licensing, SaaS\n• **Joint Ventures** - Strategic partnerships\n• **Franchises** - Complete structuring\n\n**Our Approach:**\n🎯 **Risk Analysis** - Critical clause identification\n🛡️ **Legal Protection** - Litigation prevention\n⚖️ **Strategic Negotiation** - Balance of interests\n\n**Guarantees:**\n• Free review for 30 days\n• Support for clarifications\n• Customized templates`,
        options: ['Request proposal', 'View templates', 'Schedule meeting']
      },
      'estate planning': {
        text: `👨‍👩‍👧‍👦 **Estate Planning**\n\n**Specialized Services:**\n• **Family Holdings** - Wealth structuring\n• **Wills** - Drafting and registration\n• **Strategic Donations** - Inheritance anticipation\n• **Asset Protection** - Creditor protection\n• **Probate** - Judicial and extrajudicial\n• **Prenuptial Agreements** - Matrimonial protection\n\n**Strategies Used:**\n🏢 **Family Holding** - Up to 70% tax reduction\n📋 **Will** - Testator's will guarantee\n💝 **Donation with Reserve** - Control maintenance\n🛡️ **Brazilian Trust** - Advanced protection\n⚖️ **Arbitration** - Private conflict resolution\n\n**Tax Benefits:**\n• ITCMD: Significant reduction\n• Income Tax: Transmission optimization\n• Probate Costs: Elimination of judicial fees\n\n**Protected Assets:**\n• R$ 500 million in completed structuring\n• 200+ families assisted\n• 95% tax savings achieved`,
        options: ['Simulate savings', 'Available structures', 'Schedule consultation']
      }
    };

    const response = responses[intent.name as keyof typeof responses];
    
    if (response) {
      return response;
    }

    // Resposta padrão inteligente
    const defaultResponse = currentLanguage === 'PT' 
      ? `Entendi que você está interessado em "${userMessage}". Embora eu não tenha uma resposta específica para isso, posso te conectar com nossa equipe especializada!\n\n📞 **Contato direto:** (11) 99999-9999\n\nOu escolha uma das opções abaixo:`
      : `I understand you're interested in "${userMessage}". While I don't have a specific answer for that, I can connect you with our specialized team!\n\n📞 **Direct contact:** (11) 99999-9999\n\nOr choose one of the options below:`;
    
    return {
      text: defaultResponse,
      options: content.options
    };
  }, [currentLanguage, content.options]);

  // Inicialização do chat
  useEffect(() => {
    const initializeChat = async () => {
      const generatedUserId = ConversationStorage.generateUserId();
      setUserId(generatedUserId);

      // Limpar conversas antigas
      ConversationStorage.cleanOldConversations();

      // Carregar conversa existente
      const existingConversation = ConversationStorage.loadConversation(generatedUserId);
      
      if (existingConversation) {
        setContext(existingConversation.context);
        setMessages(existingConversation.messages);
        
        // Verificar se é usuário recorrente
        const stats = ConversationStorage.getConversationStats(generatedUserId);
        if (stats.returningUser) {
          setShowWelcomeBack(true);
        }
      }
    };

    initializeChat();
  }, []);

  // Scroll automático
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sugestões proativas
  useEffect(() => {
    if (context && messages.length > 2) {
      const suggestions = generateProactiveSuggestions(context);
      setProactiveSuggestions(suggestions);
    }
  }, [context, messages.length]);

  // Salvar conversa
  useEffect(() => {
    if (userId && context && messages.length > 0) {
      const conversationData = {
        context,
        messages: messages.map(msg => ({
          id: msg.id,
          text: msg.text,
          isBot: msg.isBot,
          timestamp: msg.timestamp,
          intent: msg.intent,
          confidence: msg.confidence
        }))
      };
      
      ConversationStorage.saveConversation(userId, conversationData);
    }
  }, [userId, context, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isBot: boolean, options?: string[], intent?: string, confidence?: number, entities?: any[]) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random(),
      text,
      isBot,
      timestamp: new Date(),
      options,
      intent,
      confidence,
      entities
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Adicionar mensagem do usuário
    addMessage(text, false);
    setInputText('');
    
    // Status de processamento
    setAssistantStatus(prev => ({ ...prev, thinking: true }));
    
    // Simular delay de processamento
    setTimeout(async () => {
      setAssistantStatus(prev => ({ ...prev, thinking: false, typing: true }));
      
      // Reconhecer intenção
      const intent = recognizeIntent(text, context || undefined);
      
      // Atualizar contexto
      const newContext = updateContext(context, intent, userId);
      setContext(newContext);

      // Gerar resposta
      const response = getSmartResponse(intent, text);
      
      // Simular digitação
      setTimeout(() => {
        addMessage(response.text, true, response.options, intent.name, intent.confidence, intent.entities);
        setAssistantStatus(prev => ({ ...prev, typing: false }));
      }, 1000 + Math.random() * 1000);
      
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  const handleProactiveSuggestionClick = (suggestion: string) => {
    // Abrir o chat se estiver fechado
    if (!isOpen) {
      setIsOpen(true);
    }
    
    // Simular que o usuário enviou a mensagem
    setTimeout(() => {
      handleSendMessage(suggestion);
    }, 300); // Pequeno delay para o chat abrir
    
    // Limpar sugestões
    setProactiveSuggestions([]);
  };

  const handleCloseSuggestions = () => {
    setProactiveSuggestions([]);
  };
  // Função para reiniciar a conversa e limpar histórico
  const handleReset = () => {
    // Limpar armazenamento local de conversas e usuário
    localStorage.removeItem('mra_chat_conversations');
    localStorage.removeItem('mra_chat_user_id');
    // Gerar novo ID e resetar estado
    const newId = ConversationStorage.generateUserId();
    setUserId(newId);
    setContext(null);
    setMessages([]);
    setShowWelcomeBack(false);
    setProactiveSuggestions([]);
  };

  // Mensagem inicial
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialText = showWelcomeBack ? content.welcomeBackMessage : content.initialMessage;
      setTimeout(() => {
        addMessage(initialText, true, content.options);
      }, 500);
    }
  }, [isOpen, messages.length, showWelcomeBack, content.initialMessage, content.welcomeBackMessage, content.options]);

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative group w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-mr-bordo to-red-700 text-white rounded-full shadow-2xl hover:shadow-mr-bordo/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            {/* Avatar da Clara */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold">C</span>
              </div>
            </div>
            
            {/* Indicador de status */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white ${
              assistantStatus.online ? 'bg-green-500' : 'bg-gray-400'
            }`}></div>
            
            {/* Animação de pulso */}
            <div className="absolute inset-0 rounded-full bg-mr-bordo/20 animate-ping"></div>
          </button>
          
          {/* Sugestões proativas */}
          {proactiveSuggestions.length > 0 && (
            <div className="absolute bottom-16 right-0 md:bottom-20 w-72 md:w-80 max-w-[calc(100vw-2rem)] space-y-2 animate-in slide-in-from-right-4 fade-in-0 duration-300">
              {/* Header das sugestões com botão fechar */}
              <div className="flex items-center justify-between bg-white rounded-t-lg shadow-lg p-3 border border-gray-200">
                <div className="flex items-center text-xs text-mr-bordo">
                  <div className="w-4 h-4 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">C</span>
                  </div>
                  <span className="font-medium">Clara sugere</span>
                </div>
                <button
                  onClick={handleCloseSuggestions}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                  title="Fechar sugestões"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Lista de sugestões */}
              {proactiveSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 group"
                  onClick={() => handleProactiveSuggestionClick(suggestion)}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 pr-2">{suggestion}</p>
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-mr-bordo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para conversar sobre isso
                  </div>
                </div>
              ))}
              
              {/* Footer das sugestões */}
              <div className="bg-gradient-to-r from-mr-bordo/5 to-red-50 rounded-b-lg shadow-lg p-2 border border-gray-200 border-t-0">
                <p className="text-xs text-gray-500 text-center">
                  💡 Sugestões baseadas na nossa conversa
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-4 md:bottom-6 md:right-6 md:inset-auto md:w-96 md:h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-mr-bordo to-red-700 text-white p-3 md:p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Avatar da Clara */}
              <div className="relative">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-sm md:text-lg font-bold">C</span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white ${
                  assistantStatus.online ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
              </div>
              
              <div>
                <h3 className="font-semibold text-sm md:text-base">{content.title}</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${assistantStatus.online ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  <p className="text-white/80 text-xs md:text-sm">
                    {assistantStatus.thinking ? content.thinking : 
                     assistantStatus.typing ? content.typing : 
                     assistantStatus.online ? content.online : content.offline}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleReset}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                title="Reiniciar conversa"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 9a9 9 0 018-8v8h-8zm16 6a9 9 0 00-8 8v-8h8z" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-in fade-in-0 slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[90%] md:max-w-[85%] rounded-2xl p-3 md:p-4 ${
                  message.isBot 
                    ? 'bg-white text-gray-900 shadow-md border border-gray-100' 
                    : 'bg-gradient-to-r from-mr-bordo to-red-700 text-white shadow-lg'
                }`}>
                  {/* Avatar para mensagens do bot */}
                  {message.isBot && (
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-mr-bordo/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-mr-bordo">C</span>
                      </div>
                      <div className="flex-1">
                        <div 
                          className="text-xs md:text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatMarkdownText(message.text) }}
                        ></div>
                        
                        {/* Mostrar confiança da intenção para debug */}
                        {message.confidence && message.confidence > 0.7 && (
                          <div className="text-xs text-gray-400 mt-1">
                            Intenção: {message.intent} ({Math.round(message.confidence * 100)}%)
                          </div>
                        )}
                        
                        {/* Entidades detectadas */}
                        {message.entities && message.entities.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {message.entities.map((entity, index) => (
                              <span key={index} className="text-xs bg-mr-bordo/10 text-mr-bordo px-2 py-1 rounded-full">
                                {entity.type}: {entity.value}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Options */}
                        {message.options && (
                          <div className="flex flex-wrap gap-1 md:gap-2 mt-2 md:mt-3">
                            {message.options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="bg-mr-bordo/5 text-mr-bordo px-2 md:px-3 py-1 md:py-2 rounded-full text-xs font-medium hover:bg-mr-bordo hover:text-white transition-all duration-200 border border-mr-bordo/20 hover:border-mr-bordo transform hover:scale-105"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Mensagens do usuário */}
                  {!message.isBot && (
                    <div 
                      className="text-xs md:text-sm"
                      dangerouslySetInnerHTML={{ __html: formatMarkdownText(message.text) }}
                    ></div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {(assistantStatus.typing || assistantStatus.thinking) && (
              <div className="flex justify-start animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-gray-900 rounded-2xl p-3 md:p-4 max-w-[90%] md:max-w-[85%] shadow-md border border-gray-100">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-mr-bordo/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-mr-bordo">C</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-mr-bordo/60 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-mr-bordo/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-mr-bordo/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {assistantStatus.thinking ? content.thinking : content.typing}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 md:p-4 border-t border-gray-200 bg-white">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="flex space-x-2 md:space-x-3"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={content.placeholder}
                className="flex-1 px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-mr-bordo focus:border-transparent chat-input-no-zoom transition-all duration-200 chat-button-accessible"
                disabled={assistantStatus.typing || assistantStatus.thinking}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || assistantStatus.typing || assistantStatus.thinking}
                className="bg-gradient-to-r from-mr-bordo to-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:from-red-700 hover:to-mr-bordo transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg chat-touch-target chat-button-accessible"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
