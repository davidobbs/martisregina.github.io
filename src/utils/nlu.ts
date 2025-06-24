import { normalizeText } from './nlp';

export interface Entity {
  type: string;
  value: string;
  position: [number, number];
  confidence?: number;
}

export interface Intent {
  name: string;
  confidence: number;
  entities: Entity[];
}

export interface ConversationContext {
  userId: string;
  previousIntents: string[];
  entities: Entity[];
  sessionData: Record<string, any>;
  lastInteraction: Date;
  preferences: Record<string, any>;
}

/**
 * Tokeniza e normaliza um texto
 */
export function tokenize(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized.split(' ').filter(Boolean);
}

/**
 * Aplica stemming em uma lista de tokens
 */
export function stemTokens(tokens: string[]): string[] {
  // Stemming básico para português
  const stemRules = [
    { suffix: 'ação', replacement: 'ar' },
    { suffix: 'mente', replacement: '' },
    { suffix: 'ando', replacement: 'ar' },
    { suffix: 'endo', replacement: 'er' },
    { suffix: 'indo', replacement: 'ir' },
  ];

  return tokens.map(token => {
    for (const rule of stemRules) {
      if (token.endsWith(rule.suffix)) {
        return token.slice(0, -rule.suffix.length) + rule.replacement;
      }
    }
    return token;
  });
}

/**
 * Pré-processamento completo: tokenização + stemming
 */
export function preprocess(text: string): { tokens: string[]; stems: string[] } {
  const tokens = tokenize(text);
  const stems = stemTokens(tokens);
  return { tokens, stems };
}

/**
 * Extrai entidades avançadas incluindo datas, horários, nomes e informações de contato
 */
export function extractEntities(text: string): Entity[] {
  const entities: Entity[] = [];
  let match: RegExpExecArray | null;

  // Datas em português
  const datePatterns = [
    { regex: /\b(hoje|amanha|amanhã|depois de amanha|ontem|segunda|terça|quarta|quinta|sexta|sabado|sábado|domingo)\b/gi, type: 'date' },
    { regex: /\b(\d{1,2}\/\d{1,2}\/\d{2,4})\b/g, type: 'date' },
    { regex: /\b(\d{1,2}\s+de\s+\w+\s+de\s+\d{4})\b/gi, type: 'date' }
  ];

  // Horários
  const timePatterns = [
    { regex: /\b(\d{1,2}h(?:oras)?|\d{1,2}:\d{2})\b/gi, type: 'time' },
    { regex: /\b(manhã|tarde|noite|madrugada)\b/gi, type: 'time_period' }
  ];

  // Nomes próprios (palavras capitalizadas)
  const nameRegex = /\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/g;
  
  // Telefones
  const phoneRegex = /\b(\(?[0-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4})\b/g;
  
  // Emails
  const emailRegex = /\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g;

  // Processar todas as patterns
  const allPatterns = [
    ...datePatterns,
    ...timePatterns,
    { regex: nameRegex, type: 'person_name' },
    { regex: phoneRegex, type: 'phone' },
    { regex: emailRegex, type: 'email' }
  ];

  allPatterns.forEach(pattern => {
    pattern.regex.lastIndex = 0; // Reset regex
    while ((match = pattern.regex.exec(text)) !== null) {
      entities.push({
        type: pattern.type,
        value: match[0],
        position: [match.index, match.index + match[0].length],
        confidence: 0.8
      });
    }
  });

  return entities;
}

/**
 * Reconhece intenções com base em palavras-chave e contexto
 */
export function recognizeIntent(text: string, context?: ConversationContext): Intent {
  const normalizedText = normalizeText(text);
  const tokens = tokenize(normalizedText);
  const entities = extractEntities(text);

  const intentPatterns = {
    agendar_consulta: {
      keywords: ['agendar', 'marcar', 'consulta', 'reuniao', 'encontro', 'horario', 'disponibilidade'],
      phrases: ['quero agendar', 'gostaria de marcar', 'preciso de uma consulta'],
      weight: 1.0
    },
    areas_atuacao: {
      keywords: ['areas', 'atuacao', 'servicos', 'especialidades', 'direito', 'advocacia'],
      phrases: ['que areas', 'quais servicos', 'especialidades'],
      weight: 1.0
    },
    // Áreas específicas - Pessoa Jurídica
    'direito empresarial': {
      keywords: ['empresarial', 'empresa', 'corporativo', 'societario', 'constituicao', 'governanca'],
      phrases: ['direito empresarial', 'constituir empresa', 'governanca corporativa'],
      weight: 1.1
    },
    'contratos': {
      keywords: ['contrato', 'acordo', 'negociacao', 'clausula', 'comercial', 'prestacao'],
      phrases: ['elaborar contrato', 'revisar contrato', 'negociar acordo'],
      weight: 1.1
    },
    'fusoes e aquisicoes': {
      keywords: ['fusao', 'aquisicao', 'merger', 'ma', 'incorporacao', 'joint', 'venture'],
      phrases: ['fusoes e aquisicoes', 'comprar empresa', 'merger acquisition'],
      weight: 1.1
    },
    'direito tributario': {
      keywords: ['tributario', 'fiscal', 'imposto', 'tributo', 'planejamento', 'elisao'],
      phrases: ['direito tributario', 'planejamento fiscal', 'reduzir impostos'],
      weight: 1.1
    },
    'compliance': {
      keywords: ['compliance', 'integridade', 'lgpd', 'anticorrupcao', 'esg', 'governanca'],
      phrases: ['programa de compliance', 'adequacao lgpd', 'compliance anticorrupcao'],
      weight: 1.1
    },
    // Áreas específicas - Pessoa Física
    'planejamento sucessorio': {
      keywords: ['sucessorio', 'heranca', 'testamento', 'inventario', 'holding', 'familiar'],
      phrases: ['planejamento sucessorio', 'estruturar heranca', 'holding familiar'],
      weight: 1.1
    },
    'direito de familia': {
      keywords: ['familia', 'divorcio', 'guarda', 'pensao', 'alimenticia', 'uniao', 'estavel'],
      phrases: ['direito de familia', 'processo de divorcio', 'guarda dos filhos'],
      weight: 1.1
    },
    'direito imobiliario': {
      keywords: ['imobiliario', 'imovel', 'compra', 'venda', 'financiamento', 'incorporacao'],
      phrases: ['direito imobiliario', 'comprar imovel', 'financiamento imobiliario'],
      weight: 1.1
    },
    'protecao patrimonial': {
      keywords: ['protecao', 'patrimonial', 'blindagem', 'offshore', 'trust', 'seguros'],
      phrases: ['protecao patrimonial', 'blindagem patrimonial', 'proteger patrimonio'],
      weight: 1.1
    },
    // Novas áreas específicas
    'pessoa juridica': {
      keywords: ['pessoa', 'juridica', 'empresa', 'corporativo', 'pj'],
      phrases: ['pessoa juridica', 'empresas', 'corporativo'],
      weight: 1.0
    },
    'pessoa fisica': {
      keywords: ['pessoa', 'fisica', 'individual', 'particular', 'pf'],
      phrases: ['pessoa fisica', 'individual', 'particular'],
      weight: 1.0
    },
    'contratos empresariais': {
      keywords: ['contratos', 'empresariais', 'comerciais', 'fornecimento', 'parcerias'],
      phrases: ['contratos empresariais', 'contratos comerciais'],
      weight: 1.1
    },
    'direito trabalhista': {
      keywords: ['trabalhista', 'trabalho', 'emprego', 'demissao', 'sindicatos'],
      phrases: ['direito trabalhista', 'direito do trabalho'],
      weight: 1.1
    },
    'direito digital': {
      keywords: ['digital', 'lgpd', 'dados', 'ecommerce', 'tecnologia', 'cyber'],
      phrases: ['direito digital', 'protecao de dados', 'lgpd'],
      weight: 1.1
    },
    'direito bancario': {
      keywords: ['bancario', 'financeiro', 'credito', 'garantias', 'banco'],
      phrases: ['direito bancario', 'operacoes financeiras'],
      weight: 1.1
    },
    'recuperacao judicial': {
      keywords: ['recuperacao', 'judicial', 'falencia', 'reestruturacao', 'credores'],
      phrases: ['recuperacao judicial', 'reestruturacao de dividas'],
      weight: 1.1
    },
    'planejamento tributario pf': {
      keywords: ['planejamento', 'tributario', 'pf', 'imposto', 'renda', 'investimentos'],
      phrases: ['planejamento tributario pf', 'imposto de renda'],
      weight: 1.1
    },
    'direito previdenciario': {
      keywords: ['previdenciario', 'aposentadoria', 'inss', 'beneficios', 'pensao'],
      phrases: ['direito previdenciario', 'aposentadoria', 'beneficios inss'],
      weight: 1.1
    },
    'protecao de dados': {
      keywords: ['protecao', 'dados', 'lgpd', 'privacidade', 'pessoais'],
      phrases: ['protecao de dados', 'lgpd', 'privacidade'],
      weight: 1.1
    },
    contato: {
      keywords: ['contato', 'telefone', 'email', 'endereco', 'localizacao', 'onde', 'como'],
      phrases: ['como entrar em contato', 'qual telefone', 'onde fica'],
      weight: 1.0
    },
    informacoes_escritorio: {
      keywords: ['sobre', 'escritorio', 'historia', 'empresa', 'quem', 'somos'],
      phrases: ['sobre o escritorio', 'quem sao voces', 'historia'],
      weight: 1.0
    },
    orcamento: {
      keywords: ['orcamento', 'preco', 'valor', 'custo', 'honorarios', 'quanto'],
      phrases: ['quanto custa', 'qual o preco', 'preciso de orcamento'],
      weight: 1.0
    },
    urgencia: {
      keywords: ['urgente', 'emergencia', 'rapido', 'hoje', 'agora', 'imediato'],
      phrases: ['e urgente', 'preciso hoje', 'emergencia'],
      weight: 1.2
    },
    saudacao: {
      keywords: ['ola', 'oi', 'bom', 'dia', 'tarde', 'noite', 'tudo', 'bem'],
      phrases: ['ola', 'oi', 'bom dia', 'boa tarde', 'boa noite'],
      weight: 0.8
    },
    despedida: {
      keywords: ['tchau', 'obrigado', 'obrigada', 'ate', 'logo', 'bye'],
      phrases: ['muito obrigado', 'ate logo', 'tchau'],
      weight: 0.8
    },
    'outras areas pj': {
      keywords: ['outras', 'areas', 'pj', 'pessoa', 'juridica', 'adicionais', 'mais'],
      phrases: ['outras areas pj', 'outras areas pessoa juridica', 'mais areas'],
      weight: 1.0
    },
    'outras areas pf': {
      keywords: ['outras', 'areas', 'pf', 'pessoa', 'fisica', 'adicionais', 'mais'],
      phrases: ['outras areas pf', 'outras areas pessoa fisica', 'mais areas'],
      weight: 1.0
    },
    'presenca global': {
      keywords: ['presenca', 'global', 'escritorios', 'localidades', 'cidades', 'onde'],
      phrases: ['presenca global', 'onde atendem', 'quais cidades', 'escritorios'],
      weight: 1.0
    },
    'outros escritorios': {
      keywords: ['outros', 'escritorios', 'enderecos', 'localizacao', 'onde'],
      phrases: ['outros escritorios', 'enderecos', 'onde fica'],
      weight: 1.0
    },
    'horarios especiais': {
      keywords: ['horarios', 'especiais', 'atendimento', 'funcionamento', 'quando'],
      phrases: ['horarios especiais', 'horario de funcionamento', 'quando atendem'],
      weight: 1.0
    }
  };

  let bestIntent = { name: 'unknown', confidence: 0.0 };

  Object.entries(intentPatterns).forEach(([intentName, pattern]) => {
    let score = 0;
    let matches = 0;

    // Verificar palavras-chave
    pattern.keywords.forEach(keyword => {
      if (tokens.includes(keyword)) {
        score += pattern.weight;
        matches++;
      }
    });

    // Verificar frases completas
    pattern.phrases.forEach(phrase => {
      if (normalizedText.includes(normalizeText(phrase))) {
        score += pattern.weight * 2;
        matches++;
      }
    });

    // Calcular confiança baseada na proporção de matches
    const confidence = matches > 0 ? Math.min(score / pattern.keywords.length, 1.0) : 0;

    // Aplicar boost baseado no contexto
    if (context && context.previousIntents.length > 0) {
      const lastIntent = context.previousIntents[context.previousIntents.length - 1];
      
      // Boost para intenções relacionadas
      const intentRelations: Record<string, string[]> = {
        'areas_atuacao': ['agendar_consulta', 'orcamento'],
        'informacoes_escritorio': ['contato', 'agendar_consulta'],
        'contato': ['agendar_consulta'],
        'orcamento': ['agendar_consulta'],
        // Relações entre áreas específicas
        'direito empresarial': ['agendar_consulta', 'orcamento', 'contratos', 'compliance'],
        'contratos': ['agendar_consulta', 'direito empresarial', 'fusoes e aquisicoes'],
        'fusoes e aquisicoes': ['direito empresarial', 'direito tributario', 'agendar_consulta'],
        'direito tributario': ['agendar_consulta', 'orcamento', 'compliance'],
        'compliance': ['direito empresarial', 'direito tributario', 'agendar_consulta'],
        'planejamento sucessorio': ['agendar_consulta', 'orcamento', 'protecao patrimonial'],
        'direito de familia': ['agendar_consulta', 'direito imobiliario'],
        'direito imobiliario': ['agendar_consulta', 'orcamento', 'direito de familia'],
        'protecao patrimonial': ['planejamento sucessorio', 'agendar_consulta', 'orcamento']
      };

      if (intentRelations[lastIntent]?.includes(intentName)) {
        score *= 1.2;
      }
    }

    if (confidence > bestIntent.confidence) {
      bestIntent = { name: intentName, confidence };
    }
  });

  return {
    name: bestIntent.name,
    confidence: bestIntent.confidence,
    entities
  };
}

/**
 * Atualiza o contexto da conversa
 */
export function updateContext(
  context: ConversationContext | null,
  intent: Intent,
  userId: string = 'anonymous'
): ConversationContext {
  const now = new Date();
  
  if (!context) {
    return {
      userId,
      previousIntents: [intent.name],
      entities: intent.entities,
      sessionData: {},
      lastInteraction: now,
      preferences: {}
    };
  }

  return {
    ...context,
    previousIntents: [...context.previousIntents.slice(-4), intent.name], // Manter últimas 5 intenções
    entities: [...context.entities, ...intent.entities].slice(-10), // Manter últimas 10 entidades
    lastInteraction: now
  };
}

/**
 * Gera sugestões proativas baseadas no contexto
 */
export function generateProactiveSuggestions(context: ConversationContext): string[] {
  const suggestions: string[] = [];
  const recentIntents = context.previousIntents.slice(-3);
  
  // Sugestões baseadas em intenções recentes
  if (recentIntents.includes('areas_atuacao') && !recentIntents.includes('agendar_consulta')) {
    suggestions.push('Gostaria de agendar uma consulta sobre alguma dessas áreas?');
  }
  
  if (recentIntents.includes('contato') && !recentIntents.includes('agendar_consulta')) {
    suggestions.push('Posso ajudar a agendar uma consulta presencial?');
  }
  
  if (recentIntents.includes('orcamento') && !recentIntents.includes('agendar_consulta')) {
    suggestions.push('Para um orçamento preciso, que tal agendarmos uma consulta?');
  }

  // Sugestões específicas por área
  if (recentIntents.includes('direito empresarial')) {
    suggestions.push('Precisa de ajuda com contratos ou compliance empresarial?');
  }
  
  if (recentIntents.includes('planejamento sucessorio')) {
    suggestions.push('Quer saber sobre proteção patrimonial ou holdings familiares?');
  }
  
  if (recentIntents.includes('direito tributario')) {
    suggestions.push('Posso calcular uma estimativa de economia fiscal para você!');
  }
  
  if (recentIntents.includes('fusoes e aquisicoes')) {
    suggestions.push('Gostaria de ver alguns casos de sucesso em M&A?');
  }
  
  // Sugestões baseadas em entidades
  const hasTimeEntity = context.entities.some(e => e.type === 'time' || e.type === 'date');
  if (hasTimeEntity && !recentIntents.includes('agendar_consulta')) {
    suggestions.push('Vi que você mencionou um horário. Quer agendar algo?');
  }
  
  // Sugestões baseadas no tempo de sessão
  const sessionDuration = Date.now() - new Date(context.lastInteraction).getTime();
  if (sessionDuration > 300000 && suggestions.length === 0) { // 5 minutos
    suggestions.push('Precisa de mais alguma informação? Estou aqui para ajudar!');
  }
  
  return suggestions.slice(0, 2); // Máximo 2 sugestões
} 