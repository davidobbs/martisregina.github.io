'use client';

import { useState } from 'react';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useLanguage } from '@/context/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';

interface ArticleData {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  fullContent?: string;
  articleUrl?: string;
}

const articles: ArticleData[] = [
  {
    id: '1',
    title: "‘Inovício’: como evitar o vício em inovação no mundo jurídico",
    date: "06/03/2023",
    author: "Dr. Pedro DeRegina",
    description: "‘Fomo' sigla inglesa para 'medo de perder algo', pode causar a maioria das inovações inócuas observadas no Direito.",
    fullContent: `'Fomo' sigla inglesa para 'medo de perder algo', pode causar a maioria das inovações inócuas observadas no Direito.

Inovação é [1] um processo que combina descobrir uma oportunidade, estruturar uma ideia para aproveitar esse possível benefício e, com base na gestão e execução do projeto, colher os louros dessa implementação. É necessário, ainda, ineditismo para que o processo inovador ocorra causando um certo "impacto".

Segundo Clayton M. Christensen, autor do clássico "O Dilema da Inovação", o estudo da inovação é dividido em duas vertentes. A inovação sustentável, que aperfeiçoa o desempenho de produtos ou serviços existentes, são valorizadas pelos consumidores e podem ser previstas por renomados especialistas. Aqui, um bom exemplo é o iPhone, produto atualmente vem melhorando suas características técnicas ao longo dos últimos anos, sempre na mesma data e sem trazer grandes novidades impactantes.

A inovação disruptiva [2], por sua vez, desperta o interesse do mercado pelo seu ineditismo. Pode até surgir de forma inferior, mas com o tempo e o aperfeiçoamento constante, torna-se imbatível se comparado a um produto similar ou concorrente. É o caso do iPhone quando surgiu, que mesmo sendo inferior com suas características técnicas, tinha um design diferenciado e a novidade de uma tela sensível ao toque.

Christensen afirma necessário ter cautela com os princípios clássicos da boa gestão que orientam as organizações a reagirem às necessidades dos seus melhores clientes e focar os investimentos nas inovações que prometem maiores retornos. "Fazer a coisa certa pode acabar levando as organizações ao fracasso – e isso geralmente ocorre devido às inovações disruptivas causadas pela tecnologia", afirma o autor.

Os benefícios da inovação são incontáveis. Ela cria novas oportunidades comerciais, soluciona problemas crônicos até então não endereçados, aumenta a eficiência produtiva, movimenta o mercado, arquiteta novas tendências, acelera a transformação digital… Embora não seja necessário, poderíamos gastar páginas e páginas discutindo sobre suas vantagens, algo certamente menos proveitoso o que será discorrido a seguir.

O objetivo deste texto não é tampouco dissertar sobre os malefícios da inovação. Certamente esse é um assunto também mais bem rascunhado pelos conservadores e aqueles que pregam pela tradição sem qualquer mudança no status quo ante. Muitas vezes justificam que a inovação pode prejudicar a imagem, gerar afastamento dos consumidores fiéis ou até culminar em prejuízo econômico ante ao desalinhamento da estratégia de negócios.

Aqui, exploraremos algumas linhas sobre o excesso de inovação.
Adotando o neologismo "inovício", o vício em inovar, discutiremos sobre como os profissionais nos últimos anos têm demonstrado um comportamento preocupante relacionado à necessidade constante de inovar ou de fazer parte do "hype [3]"

O que está provocando esse comportamento? Líderes que querem o reconhecimento pela criatividade que estimulam em seus times? Medo de perder oportunidades singulares? Vontade de ser pioneiro e ocupar um espaço de prestígio no mercado? Ambição pelo sucesso profissional, quase beirando a vaidade? São apenas reflexões, não pretendemos oferecer uma resposta, e tampouco entendemos que em todos os casos as causas são as mesmas.

O estudo "Acelerando a inovação digital por dentro e por fora" [4], realizado pelo MIT Sloan Management Review em parceria com a Deloitte, traz dados interessantes que merecem um especial destaque. A 5ª edição do estudo investigou a maturidade digital e aspectos de disrupção inovativa e traduz os setores que inovam mais e aqueles que inovam efetivamente de forma disruptiva.

Alguns fatos devem ser considerados para essa afirmação: a utilização de equipes multidisciplinares (que se somam e se complementam) promovem um ambiente propício à criatividade; as organizações possuem políticas sólidas que versam sobre a ética nos negócios digitais e instrumentos adequados de governança e, por fim, o setor em questão:

Inovício - Martins Regina Advocacia

A pesquisa relata ter captado informações de profissionais de 28 indústrias, atuantes em 125 países. Definitivamente, não é um retrato isolado do Brasil (apesar de sermos o 2ª país com mais participantes). Como são dados anteriores à pandemia, certamente alguma coisa mudou, especialmente na área de tecnologia que, em decorrência do isolamento, precisou desenvolver de forma abrupta inúmeras soluções que propiciassem o trabalho remoto.

Entretanto, podemos utilizar tais informações fazendo uma comparação com o cenário nacional e de uma forma mais generalizada. De fato, a indústria de bens de consumo é uma das que mais demanda inovação. Justamente por terem consumidores exigentes e a competição ser muito acirrada, as indústrias (duráveis e não duráveis) do setor possuem áreas de Pesquisa e Desenvolvimento robustas, que buscam otimizar os produtos e/ou serviços para gerar competitividade e lucro para as suas organizações.

Pensando nisso, com base na pesquisa acima e vendo inúmeros amigos e colegas profissionais pressionados por seus gestores à prática da inovação constante, rascunhamos o termo "inovício", o vício em inovação.

O "inovício" tem uma relação de causa e efeito com o famoso "Fomo" (Fear of Missing Out)[5] ou "medo de perder algo", em tradução livre do inglês. A relação entre os dois eventos é clara. O medo constante da perda de uma oportunidade causa o "Fomo" ou de aproveitar o hype, que por sua vez gera o "inovício". Esse nexo de causalidade nos parece causar os seguintes problemas:

Comportamento prejudicial, refletindo em queda de desempenho, buscando a inovação como um fim e não como um meio para a entrega de resultados;
Fomento a um mercado canibal, agressivo, altamente hostil, justamente o oposto da nova era colaborativa que vem se desenhando no ambiente de inovação;
Criação de inovações inócuas, vazias, com muito barulho, mas pouca (ou nenhuma) efetividade, gerando descrédito e desprestígio aos autores;
Potencialização de vaidades desnecessárias e ineficientes para a coesão e boa convivência de equipes de trabalho;
Aumento de um ambiente de trabalho altamente tóxico, culminando em episódios de burnout.
Além dos riscos acima apontados, tal comportamento viciado traz uma visão míope das verdadeiras demandas de inovação para o ecossistema profissional do caso concreto. Uma vez o "inovício" estabelecido na organização, pessoas e equipes se movimentam em círculos, visando sua própria projeção de carreira e ego particular, afastando-se do que é o objetivo principal de uma organização: o desenvolvimento do trabalho e da equipe na linha mais reta possível com foco nas metas estabelecidas.

Os riscos apontados acima podem ser mitigados caso façamos algumas reflexões. Sua ideia agrega valor? Possui usabilidade? É útil? É possível responder, em poucos minutos, o porquê inovar, como a ideia será executada e o que será exatamente feito? Se for "não" para alguma dessas perguntas, talvez faça sentido entender se o "inovício" está presente na rotina da sua equipe.

– – – – – – – – –

[1] Tradução livre da definição proposta por Scott D. Anthony, autor do texto "Inovação é uma disciplina e não um cliché". Artigo da Harvard Business Review disponibilizado em <https://hbr.org/2012/05/four-innovation-misconceptions>. Acesso em 02/01/2023.

[2] O que é inovação disruptiva?, um artigo da Harvard Business Review de autoria de Clayton M. Christensen, Michael E. Raynor e Rory McDonald, disponibilizado em < https://hbr.org/2015/12/what-is-disruptive-innovation?registration=success>. Acesso em 02/01/2023.

[3] Hype é aquilo que está na moda e em evidência. Em uma livre pesquisa, é um termo proveniente do marketing para divulgar novidades do mercado.

[4] O estudo "Acelerando a inovação digital por dentro e por fora" pode ser acessado no original e em inglês por meio do endereço < https://www2.deloitte.com/content/dam/Deloitte/br/Documents/technology-media-telecommunications/Deloitte-acelerando-inovacao-dentro-fora-2019.pdf>. Acesso em 03/01/2023.

[5] O "Medo de Perder Algo" já foi matéria no portal do Tribunal de Justiça de Santa Catarina. Preocupados com seus servidores, a Diretoria de Saúde alertou que o hábito de checar o celular constantemente, de acessar as redes sociais o tempo inteiro ou de perder algum conteúdo interessante são indícios desse problema. A síndrome que tem a ansiedade como um dos principais sintomas é um mal constantemente observado nos ambientes de inovação. Caso haja identificação, orientamos a procura de ajuda médica e, para maiores detalhes, a explicação está disponível no endereço <https://www.tjsc.jus.br/web/servidor/dicas-de-saude/-/asset_publisher/0rjJEBzj2Oes/content/voce-tem-f-o-m-o-fear-of-missing-out->. Acesso em 03/01/2023.

– – – – – – – – –

RODRIGO AVILA – Graduado pelo Pontifícia Universidade Católica do Rio de Janeiro, LLM em Direito e Negócios pela Fundação Getulio Vargas, sócio do escritório Martins Regina Advocacia, atuando como Head de Inovação e Novos Negócios, Host e sócio do Manda Pro Jurídico Podcast

PAULO SAMICO – Graduado em Direito pela Faculdade Nacional de Direito da UFRJ, pós-graduado em Processo Civil e estudante de pós-graduação em Direito Regulatório pela UERJ. Foi coordenador jurídico na BAT Brasil (Souza Cruz) por 7 anos, atuando como business partner em diferentes áreas do negócio pelo núcleo consultivo e contencioso (regulatório e cível) e coordenador do comitê jurídico de inovação. Professor da Future Law. Autor de diversos artigos publicados em periódicos jurídicos. Membro-fundador do núcleo de Departamentos Jurídicos da AB2L. Pesquisador acadêmico da FGV Conhecimento e gerente jurídico da Mondelēz International (Legal Counsel Business Support)

– – – – – – – – –

Matéria publicada no website Jota em 24/02/2023.

– – – – – – – – –

Precisa de ajuda jurídica para você ou sua empresa? Martins Regina Advocacia pode ajudar! Entre em contato.
`,
    articleUrl: "https://www.jota.info/opiniao-e-analise/artigos/inovicio-como-evitar-o-vicio-em-inovacao-no-mundo-juridico/"
  },
  {
    id: '2',
    title: "Os advogados e escritórios mais admirados do Brasil, segundo quem os contrata",
    date: "16/02/2023",
    author: "Martins Regina Advocacia",
    description: "O Martins Regina Advocacia e Dr. Pedro DeRegina estão entre os escritórios e advogados mais admirados do Brasil, segundo a edição de 2022 do Anuário Análise Advocacia.",
    fullContent: `O Martins Regina Advocacia e Dr. Pedro DeRegina estão entre os escritórios e advogados mais admirados do Brasil, segundo a edição de 2022 do Anuário Análise Advocacia.
 

O que é o Anuário Análise Advocacia?
Anuário Análise Advocacia 2022O anuário ANÁLISE ADVOCACIA é o maior e mais relevante levantamento realizado do mercado jurídico brasileiro. Para identificar quem são os mais admirados escritórios de advocacia e advogados do país, a Análise Editorial conduz todo ano uma pesquisa detalhada com os que tem mais a dizer: seus clientes.

Os executivos jurídicos e financeiros das maiores companhias brasileiras são consultados pela equipe da Análise Editorial e votam nas bancas e profissionais que mais admiram, independente de utilizaremos seus serviços. O resultado é uma visão única dos serviços jurídicos disponíveis no Brasil e quem, na opinião das empresas que os contratam, são os mais qualificados para prestá-los.

A pesquisa é dividida em 19 áreas do Direito: agrário, ambiental, arbitragem, cível, comércio internacional, compliance, concorrencial, consumidor, contratos empresariais, digital, imobiliário, operações financeiras, penal, previdenciário, propriedade intelectual, regulatório, societário, trabalhista, tributário. Assim, é possível identificar quem são os mais admirados em cada ramo, além de indicar as bancas que se destacam em diversas áreas.

Na edição, estão relacionados os escritórios e advogados mais admirados segundo os executivos, acompanhados de perfil a respeito da sua atuação, agrupados em três categorias: full service, abrangente e especializado. A organização dos rankings é feita em até cinco patamares de classificação. 

"ANÁLISE ADVOCACIA não tem a pretensão de aferir a qualidade dos serviços jurídicos prestados no país, nem teria competência para fazê-lo. Há ótimos advogados no topo dos mais admirados e ótimos advogados até mesmo entre os que sequer são citados no anuário. O que nos dispomos a fazer – e fazemos com uma qualidade incontestável – é relacionar os bons profissionais segundo a imagem que deixaram nos eleitores, no caso seus clientes", afirma Alexandre Secco, sócio e conselheiro editorial da Análise Editorial.

Para saber como funciona a nossa pesquisa, confira a metodologia do levantamento aqui.

– – – – – –

Colocações do escritório Martins Regina Advocacia no Anuário Análise Advocacia 2022:
SETOR FARMACÊUTICO (ESCRITÓRIO – ESPECIALIZADO) – 4º LUGAR

POR ESTADOS / RIO DE JANEIRO (ESCRITÓRIO – ESPECIALIZADO) – 4º LUGAR

– – – – – –

Colocações do advogado Dr. Pedro DeRegina no Anuário Análise Advocacia 2022:
SETOR FARMACÊUTICO (ADVOGADO – ESPECIALIZADO) – 3º LUGAR

POR ESTADOS / RIO DE JANEIRO (ADVOGADO – ESPECIALIZADO) – 3º LUGAR

– – – – – –

Precisa de ajuda jurídica para você ou sua empresa? O Martins Regina Advocacia conta com advogados especializados em diversas áreas do direito. Entre em contato!
`,
    articleUrl: "https://escritoriodeadvocaciarj.com.br/anuario-analise-advocacia/"
  },
  {
    id: '3',
    title: "Entrevista do advogado Dr. Pedro DeRegina para a revista Quality Magazine",
    date: "01/11/2022",
    author: "Quality Magazine",
    description: "O Martins Regina Advocacia é um escritório especializado em Planejamento Patrimonial, Familiar e Sucessório.",
    fullContent: `O Martins Regina Advocacia é um escritório especializado em Planejamento Patrimonial, Familiar e Sucessório.\nO início dos trabalhos se deu em 1994, quando executivos de multinacionais, sócios das principais bancas de escritórios de Advocacia do Rio de Janeiro, e Procuradores, na mesma cidade, decidiram se unir para fundar o escritório. A atuação se dá também na seara do Direito Imobiliário, Empresarial e Contratos. O atendimento é voltado tanto para empresas, especialmente no setor farmacêutico, quanto para pessoas físicas que adquiriram ao longo da vida patrimônio e desejam fazer o Planejamento Patrimonial.\n\nEm meio aos desafios registrados no início das atividades, como a estruturação de um novo escritório com pessoas de backgrounds diferentes, mas com visões comuns de como enxergavam o Direito, qualidade e excelência sempre foram pautadas em todos os atendimentos.\n\nReestruturação do escritório Martins Regina Advocacia\nEm 2017, o sócio, Dr. Pedro DeRegina, liderou uma reestruturação no escritório, ocasião em que se iniciou um processo interno com atenção especial ao engajamento das pessoas que não eram pertencentes ao core business.\n\n"Estimulamos todas as áreas a participarem mais ativamente dos processos do escritório, criando um ambiente mais integrativo e multidisciplinar. O senso de autodisciplina também foi muito incentivado nessa nova cultura que o escritório passou a adoptar lá em 2017", comenta Dr. Pedro.\n\nEle chama a atenção para os Objetivos de Desenvolvimento Sustentável (ODS), agenda tida como fundamental. "Não é algo novo, mas vem sendo melhor debatido nos últimos anos. O cuidado com as próximas gerações deve ser discutido e implementado em todas as esferas da sociedade", pontua, destacando acreditar que as organizações em geral têm dado mais atenção a esta pauta ao prestigiar o tema ESG. "A adoção de boas práticas, o propósito do modelo de negócio e a transparência, são medidas fundamentais para o posicionamento da empresa no futuro", ressalta.\n\nAtreladas aos ODS, ações enquadradas na Responsabilidade Social Corporativa são implementadas no escritório. O Martins Regina Advocacia abraçou pessoas hipossuficientes financeiramente, portadoras de Hipertensão Arterial Pulmonar e oriundas de hospitais públicos, de forma Pro Bono, para garantir o direito à saúde, previsto na Constituição.\n\nAinda nesse âmbito, o Dr. Pedro comenta que houve renúncia de honorários, inclusive os de sucumbência, os quais foram destinados ao próprio Estado. "Essa causa teve início em 2007 e perdura até os dias atuais. Além disso, passamos a ter uma atenção especial às questões ambientais. Algumas mudanças no dia a dia e que fazem a diferença ao longo dos anos foram implementadas para contribuir nessa seara", completa.\n\nO escritório preza por uma comunicação clara e que traga esclarecimentos às possíveis dúvidas do público. Para tanto, diversos canais para ouvir as pessoas estão disponíveis.\n\n"Seja nossos clientes, prestadores de serviços ou funcionários; todos têm voz. Acreditamos que ouvir as pessoas contribui com nossa melhoria diária, e o resultado disso é verificado nas indicações de boca a boca que recebemos de nossos clientes. Além disso, o respeito pelos prestadores de serviço e todos aqueles que trabalham conosco é um dos pilares de nosso escritório. De tempos em tempos, encomendamos pesquisas nesse sentido", afirma.\n\nAssim, o feedback de clientes é sempre bem-vindo ao escritório e discutido internamente com a equipe responsável. O Dr. Pedro explica que, caso uma crítica seja algo mais genérico, a questão é exposta em reunião de sócios e, posteriormente, repassada aos líderes de cada equipe. Por sua vez, ao cliente, são reportadas as medidas que foram adotadas.\n\nO escritório observa, ainda, os caminhos para a satisfação de grupos de interesse, e isso ocorre, basicamente, na conexão da equipe com pessoas, na preparação para o atendimento e na entrega do resultado. "O desafio, de dois anos para cá, foi se adaptar ao novo formato que a pandemia de covid-19 no impôs. A Advocacia ainda está muito ligada ao contato e à boa relação com os clientes", enfatiza. Nisso, ele contrasta afirmando que a virtualização não traz a mesma experiência que o contato ao vivo, seja em cursos, palestras, congressos ou nas reuniões presenciais. "Inclusive, a maioria das pessoas ainda prefere o presencial; obviamente com todos os protocolos possíveis para viabilizar o contato", destaca. "Mas, apesar do aumento das calls e videochamadas, o presencial ainda é preponderante. Sob o ponto de vista de aprimoramentos da empresa, não vejo muitos prejuízos, e até benefícios, nesse nosso novo panorama mais on-line, exceto no networking, que fica um pouco mais prejudicado, mas que já vem se normalizando", pondera.\n\nA boa gestão é fundamental para qualquer empresa, independente do segmento, e no escritório, esse quesito, com boas práticas, é um dos pilares que sustenta a organização, especialmente por contar com uma equipe competente em relação às demandas.\n\n"Em nosso caso, juntamente com a competência técnica e as pessoas que trabalham conosco, esses três aspectos formam o tripé do Martins Regina Advocacia", conclui.\n\n– – – – – – –\n\nMatéria publicada no site da Quality Magazine – Latin American Quality Institute, em abril de 2022.\n\n– – – – – – –\n\nPrecisa de ajuda jurídica para você ou sua empresa? Entre em contato com o Martins Regina Advocacia e fale com um de nossos advogados.\n\n– – – – – – –\n`,
    articleUrl: "https://escritoriodeadvocaciarj.com.br/entrevista-advogado-dr-pedro-deregina/" // Linha removida/comentada
  },
  {
    id: '4',
    title: "Reuniões de condomínio agora podem ser realizadas também pela internet",
    date: "16/03/2022",
    author: "Dr. Pedro DeRegina",
    description: "Lei assegura os mesmos direitos de voz e voto que os condôminos teriam em reuniões de condomínio presenciais.",
    fullContent: `As assembleias em reuniões de condomínio agora podem ser feitas também de forma virtual, assegurados os mesmos direitos de voz e voto que os condôminos teriam em reuniões presenciais. É o que determina a Lei 14.309/22, publicada no Diário Oficial da União, na quarta-feira (09).

Essa medida, que altera a Lei 10.406/2002 (Código Civil) e a Lei 13.019/2014, permite também a realização de reuniões e deliberações virtuais pelas organizações da sociedade civil (pessoas jurídicas com administração coletiva). Determina ainda que, no caso das organizações de sociedade civil, há necessidade de edital de convocação com instruções específicas e que, no caso dos condomínios, as reuniões podem ocorrer de forma eletrônica, desde que não seja proibido pela convenção do prédio.

Reuniões virtuais, uma tendência mundial
"A possibilidade de reuniões de condomínio e assembleias por meios eletrônicos acompanha uma tendência que a pandemia nos trouxe e que já era uma prática em outros países. Antes mesmo da pandemia acontecer aqui no Brasil, nosso escritório em 2018 foi pioneiro no RJ ao prever assembleias de forma virtual em Estatutos de empresas e Convenção de condomínios por meio eletrônico.", declarou o advogado Dr. Pedro DeRegina, sócio da Martins Regina Advocacia.

A Lei determina que, além das deliberações virtuais, fica permitida a suspensão da assembleia até que seja alcançado o quórum mínimo exigido. As assembleias podem ser suspensas por até 60 dias e a reunião em sessão permanente pode ser prorrogada tantas vezes quantas necessárias, desde que a assembleia seja concluída em até 90 dias.

Para os associados, a medida representa uma vantagem, já que não precisam se deslocar para o local da reunião, o que significa maior praticidade e adesão. No entanto, pode ser necessário fazer a estruturação do sistema eletrônico a ser usado pelo condomínio ou pela empresa, o que pode representar um custo. Mas, de acordo com a Lei, a administração do condomínio não poderá ser responsabilizada por problemas técnicos ou falha na conexão à internet dos condôminos.

Um mediador para organizar as assembleias
"Um ponto importante é a questão da organização. Quem vai mediar essas chamadas de vídeo? A pessoa que for mediar vai precisar ter o controle, como desligar o microfone quando necessário, no caso de alguém falar em paralelo e que possa atrapalhar o que está sendo discutido. Principalmente porque assembleia de condomínio gera muita discussão e isso pode acabar prejudicando o andamento da própria assembleia", disse DeRegina.

Outro ponto levantado pelo DeRegina é que as atas têm que ser assinadas pelos presentes. E como assinar se a reunião for virtual? O advogado esclareceu que atualmente já existe um sistema de assinatura eletrônica. Então tem que se estruturar para que isso seja viabilizado também.

Para DeRegina é fundamental uma consultoria técnica nas primeiras reuniões a serem realizadas nessa nova formatação, para entender como funciona, poder suprir alguma deficiência na estrutura inicial do condomínio ou da empresa que não esteja ainda preparada.

"E, daí para a frente, com tudo regularizado, o fluxo dos procedimentos seguirá normalmente, com os resultados esperados.", concluiu DeRegina.

– – – – – – – –

Matéria publicada em 16 de março de 2022, no site da Super Rádio Tupi FM.

– – – – – – – –

Precisa de ajuda jurídica para você ou sua empresa? O Martins Regina Advocacia pode ajudar você. Entre em contato com um de nossos advogados!`,
    articleUrl: "https://www.tupi.fm/rio/reunioes-de-condominio-agora-podem-ser-realizadas-tambem-pela-internet/"
  },
  {
    id: '5',
    title: "Uma análise sobre as holdings e offshores",
    date: "28/10/2020",
    author: "Flávia Helena Lelis Silveira",
    description: "A holding foi instituída no direito brasileiro pela Lei 6.404/76, a Lei das Sociedades Anônimas, explicando o conceito de holdings e offshores no planejamento patrimonial.",
    fullContent: `A holding foi instituída no direito brasileiro pela Lei 6.404/76, a Lei das Sociedades Anônimas, que prevê, em seu artigo 2°, caput e § 3º, que pode ser objeto da companhia qualquer empresa de fim lucrativo, não contrário à lei, à ordem pública e aos bons costumes, assim como a participação societária em outras sociedades. Nessa perspectiva, as holdings são basicamente empresas que têm como objeto a participação societária em outras empresas, podendo ter, também, como objeto, uma atividade econômica produtiva ou não.

1. INTRODUÇÃO
1.1. HOLDINGS
Essa participação societária, normalmente, é de controle. Para tanto, a holding adquire a maioria das ações ou quotas de uma ou mais empresas de modo a alcançar a maioria de votos nas deliberações e, assim, obter o controle da tomada de decisões que determinam a gestão dos negócios dessas empresas. Isso é, inclusive, o que enseja a denominação dessa figura como holding, haja vista que esse nome tem origem no verbo inglês "to hold", que significa controlar. Todavia, não há nenhum impeditivo para que essa participação seja minoritária e não de controle, hipótese em que ela configura apenas um investimento. Vale ainda ressaltar que, quando esse controle administrativo é feito sobre várias empresas, do mesmo setor econômico ou de setores diversos – que podem ser até concorrentes entre si -, tem-se o que é chamado de conglomerado empresarial.

Tendo em vista o que foi mencionado, convém ponderar que a participação societária da holding mediante a detenção de quotas no capital social de uma outra empresa só é possível em virtude da ampliação da utilização dessa figura pelo Código Civil de 2002 a outro tipo societário: a sociedade limitada. Ademais, tenha-se presente que o exposto não esgota a utilização da holding, que também pode ser criada com o objetivo de blindagem patrimonial.

1.2 OFFSHORE
Ao contrário do que se pensa offshore não é ilegal. O que acontece é que muitas vezes ela é usada para tentar esconder algo ilegal. Mas, afinal, o que é Offshore? A Offshore, que significa "fora da costa", é uma empresa constituída em um país ou território diverso do país de domicílio dos sócios, que tem como restrição não poder operar dentro do país no qual ela está sediada. Os países e territórios escolhidos para a constituição dessas empresas são aqueles sujeitos a uma legislação menos burocrática, com uma tributação mais vantajosa do que o país dos sócios, seja com tributos mais baixos ou ausência dos mesmos, e que garantem o sigilo societário através da possibilidade de emissão de ações ao portador, em que não há identificação dos seus titulares, sendo os acionistas aqueles que possuem a posse do papel das ações. Por esses atributos, esses países e dependências são intitulados "paraísos fiscais" e, no Brasil, encontram-se listados na Instrução Normativa n° 1037 da Receita Federal.

No que tange à abertura dessas empresas, oportuno se toma dizer que ela pode ser feita com auxílio de empresas intermediárias, conjuntamente ou não com a criação de uma conta bancária no mesmo país, ou em país diferente da sua sede. Por derradeiro, e como de início frisado, a Offshore é totalmente legal, tendo em vista que essa figura empresarial é um instrumento de elisão fiscal, que, diferente da evasão fiscal, usa de meios legais para diminuir a incidência da carga tributária nos negócios da empresa.

2. RISCOS
2.1 OFFSHORE
Embora muitos brasileiros busquem a possibilidade de abrir uma offshore em locais cuja a tributação seja mais favorável, há riscos que um empresário corre ao escolher essa opção, devido, principalmente, às dificuldades de se diferenciar as offshore legais daquelas que cometem crimes.

No Brasil, as offshore não estão previstas no ordenamento jurídico, sendo impossível a abertura de uma em território nacional. Então, para os brasileiros que decidam por abrir tal sociedade em outro país, torna-se necessário informar a Receita Federal para que ocorra a tributação de valores ao Banco Central, caso o patrimônio líquido da empresa ultrapasse cem mil dólares. Este ato visa justamente a coibir os crimes de evasão de divisa, que ocorrem quando a entidade competente não é informada sobre a criação desta empresa (MULLER,2018). Além disso, é necessário o registro das offshore no Cadastro Nacional de Pessoa Jurídica (CNPJ) já que toda instituição estrangeira é obrigada a tal.

Como as offshore estão localizadas em território estrangeiro, há uma diferença legal e cultural entre a sede da empresa e seu dono, isto pode apresentar certos riscos, já que a offshore segue os trâmites jurídicos do país em que se encontra, devendo assim o empresário se atentar sobre as regularidades exigidas neste país. E, por fim, para que o objetivo principal seja atingindo, sendo ele a diminuição da carga tributaria e, consequentemente, aumento do lucro, é fundamental se atentar para o planejamento financeiro da empresa. No caso das offshore, é necessária a contratação de especialistas em fiscalização internacional, e, muitas vezes, devido ao seu alto custo, as empresas fazem este planejamento de forma simplista e informal, o que pode colocar em risco todo o processo de internacionalização. (KNOWLEDGE AT WHARTON, 2015)

2.2  HOLDINGS
No que tange aos elementos econômicos, os ricos das Holding podem ser analisados por 3 aspectos. O primeiro está no excesso de capitalização. Devido ao grande número de acionistas, o retorno da sua capitalização bastante reduzido. Além disso, temos uma alta carga tributária. No segundo ponto, temos a concentração do poder econômico nas mãos de uma só pessoa e, por último, o risco de fraude que pode ocorrer devido à manipulação das contas (MATIAS, 2018)

Sobre os aspectos administrativos, uma gestão centralizada pode trazer o risco da morosidade e burocracia aos processos decisórios (HUNGARO,2009) e também o desvio de poder, já que a centralização pode ser um empecilho para a responsabilização dos colaboradores, principalmente daqueles que estão em níveis hierárquicos mais baixos. Além destes, há o risco de os acionistas minoritários serem prejudicados quando entra um novo acionista, porque é necessário pagar mais para manter o seu antigo nível de participação. Outro risco está nas Holding familiares, que, devido à intercessão entre trabalho e relação familiar, podem acabar deixando as desavenças pessoais atrapalharem na condução administrativa das empresas.

Sobre o ponto de vista mercadológico, as holding podem gerar um monopólio secreto, com o risco de eliminar um certo concorrente ou futuros empreendedores. Essa concentração do mercado é um risco também para o consumidor, que fica à mercê das cobranças e preços impostos pela Holding, já que elas podem obrigar as suas filiais a adquirir ou vender bens a valores muito baixos.

3. VANTAGENS
3.1 VANTAGENS DE HOLDINGS
3.1.1 ECONÔMICO-FINANCEIRAS
As holdings, companhias que detém o controle acionário de outras companhias, estão à frente de um grupo, representa-o de maneira conjunta, o que acaba promovendo uma gestão integrada e menos custosa para estas empresas simultaneamente. Desse modo as holdings possuem um maior controle acionário das empresas a elas subordinadas, com custos reduzidos.

Ao controlar ou influenciar na administração de outras sociedades, ela controla as companhias produtoras de riqueza possibilitando uma maior interação de atividades operacionais das empresas controladas, e até mesmo uma redução nas dificuldades nos processos de fusão e incorporação.

3.1.2 ADMINISTRATIVAS
Ao estabelecer uma sociedade, esta deverá cumprir com uma série de burocracias administrativas para seu funcionamento, as quais, muitas vezes, acabam sendo um desperdício de verba e energia. Com as holdings ocorre o enxugamento dessas estruturas ociosas em sociedades afiliadas, já que apenas uma empresa poderá cuidar do processo burocrático de todas elas: uma espécie de "trabalho em equipe" o qual apenas uma parte, no caso empresa, fica encarregado de todo o trabalho burocrático. Embutido nessa redução de estruturas ociosas podemos citar a redução de despesas operacionais como principal vantagem desta centralização de alguns trabalhos, de uma gestão unificada e de uma uniformidade administrativa.

3.1.3 ASPECTOS LEGAIS
Ao ser enquadrada como uma "empresa filha", dentro de uma "empresa mãe", entende-se que, legalmente, as empresas controladas teriam o tratamento de exigências setoriais e regionais facilitadas pela holding.

3.1.4 ASPECTOS SOCIETÁRIOS
Em casos de conflitos familiares ou conflitos entre os sócios, as holdings estabelecem como regra o isolamento destes conflitos exclusivamente dentro da empresa, reduzindo eventuais confusões entre o lado pessoal e o lado profissional.

3.2 VANTAGENS OFFSHORES
A offshore é uma empresa com personalidade jurídica própria que também possui responsabilidades e proteções, possibilitando, assim, além da privacidade, um mesmo nível de proteção que os demais tipos de empresas.

Além disso, a companhia offshore poderá usufruir dos benefícios existentes no país que se encontrará, geralmente, optando por se estabelecerem em "paraísos fiscais", países onde a  taxação de impostos é inexistente, quase inexistente, ou similar ao país sede, mas que forneça algum outro benefício, possibilitando o acúmulo de lucro mais facilmente. Os benefícios podem ser autorizados para vantagens fiscais, pode ser adquirida em renda de investimento, bem como os lucros oriundos do próprio negócio, gerando lucro acumulado, que pode ser substancial para o enriquecimento da pessoa jurídica.

Ademais, podemos citar como uma vantagem das offshores a redução de procedimentos burocráticos, que acabariam sendo demorados e caros para as empresas nos países sede. Os paraísos fiscais mencionados, possibilitam um registro mais rápido e mais barato em várias bolsas de valores, garantindo que os procedimentos burocráticos destas offshores funcionem de maneira ágil, veloz e flexível.

4. FORMAS
4.1 FORMAS DE OFFSHORE OU TIPOS DE PARAÍSOS FISCAIS
Na maioria das vezes, os registros de offshore são feitos em países que possuem a chamada "tax friendly'' mais conhecidos como paraísos fiscais. Os paraísos fiscais são classificados em três categorias: o paraíso fiscal zero, o paraíso fiscal baixo e o paraíso fiscal que oferece tratamento benéfico em outras áreas financeiras.

O paraíso fiscal zero, mais conhecido como Zero Tax Haven, são jurisdições onde não há nenhum tipo de imposto de renda ou imposto sobre as sociedades e também não há nenhum tipo de imposto em cima de lucros e sobre a transmissão causa mortis. Normalmente esses paraísos fiscais são encontrados em uma pequena economia, que consegue ter arrecadação por meio de impostos indiretos, por exemplo.

O paraíso fiscal baixo, mais conhecido como Low Tax Haven, é também encontrado com mais frequência uma economia menor. Nesses casos, o imposto será muito menor do que o normal e, isso fará com que os impostos indiretos tenham um pequeno aumento.

Por fim, temos o paraíso fiscal taxa normal, mais conhecido como Normal Rate Tax Haven, que é mais comum em economias maiores. Nesses países, há jurisdições que regulamentam as offshores, que cobram a taxa normal do imposto. Contudo, nesses locais é possível obter vantagens fiscais em outras situações, oferecendo uma forma de concorrência fiscal.

4.2 FORMAS DE HOLDING
As holdings são classificadas em espécies que vão variar de acordo com a necessidade de cada empresário, bem como o objetivo da empresa. Nosso ordenamento jurídico admite várias dessas espécies, as quais podem se distinguir quanto ao tipo societário adotado ou mesmo ao organizacional. Logo abaixo serão listados alguns dos tipos de Holdings existentes:

Holdings Puras: têm por objeto social a participação no capital de outra sociedade. No entanto, não realizam nenhum tipo de operação, razão pela qual o objetivo social se restringe à participação no capital social de outra empresa. Essa é a característica de grandes grupos econômicos.

Holdings Mistas: têm como característica principal exercer a exploração de outras atividades empresariais. Assim, trata-se de uma corporação que desenvolve atividades operacionais e prestam serviços, além de possuir participações acionárias em diversas empresas. São holdings que dispõem de recursos para planejamento fiscal, e avaliam novos empreendimentos. É a mais usada no país, em razão dos benefícios tributários e administrativos que oferece.

Holdings Familiares: têm por objetivo controlar o patrimônio de pessoas físicas da mesma família, que passam a ter participações societárias. Elas detêm o planejamento de outras empresas dos mesmos sócios para que o patrimônio seja preservado e repassado em segurança para outras gerações, evitando, assim, que as empresas sejam levadas à falência por eventual má administração.

Holdings Operacionais: visam ao controle acionário a partir do número de quotas. Seja o objetivo social deter o controle societário de uma ou mais sociedades, ela é vista como uma forma de garantir a administração sobre o próprio negócio, ainda que haja a participação de terceiros em sua companhia.

Holding de participação: é uma sociedade constituída para centralizar a administração de outras sociedades, definindo seus planos, metas e orientações. Assim, ela assume a administração de participações societárias minoritárias, transferindo essa função para profissionais qualificados.

5. DIREITO COMPARADO
Como já exposto, as Offshore possuem legislação específica, e estão previstas no ordenamento jurídico de muitos países.

Se tratando da tributação internacional, leva-se em conta duas instituições, a OCDE (Organização para a Cooperação e Desenvolvimento Econômico), e a FMI (Fundo Monetário Internacional). Estas irão trazer as linhas gerais internacionais no tocante à matéria tributária, mas como cada Estado é livre para adequá-las conforme a sua forma de governo, faz com que alguns países se tornem mais atrativos que outros, pois possuem mais vantagens na consolidação das Offshore e das Holdings.

Assim, lugares como Mônaco, Bahamas, Bermudas, Dubai e as Ilhas Cayman, pode-se observar na legislação que não há imposto de renda, imposto sobre sociedades, imposto sobre lucros e impostos sobre a transmissão causa mortis. Já no Panamá, Costa Rica, Hong Kong e Cingapura, é permitido que haja isenção na tributação de impostos para rendas obtidas em fontes estrangeiras, desde que não façam parte de nenhuma atividade empresarial local. Em se tratando do Chipre, Reino Unido, Dinamarca, Bélgica, Holanda, Áustria e Malta, há vantagens fiscais em certos casos, como nos ganhos de capital, dividendos, royalties, etc. Ademais, tratando especificamente da Espanha, por ser um país com uma elevada carga tributária, o governo optou por criar uma nova legislação de Holdings, facilitando o investimento internacional e aumentando a sua competitividade no mercado mundial. Basta, pois, que seja feita uma boa análise das jurisdições no momento de escolha do local para se ter um bom proveito das oportunidades advindas da globalização.

Entretanto, infelizmente, algumas dessas empresas são usadas para mascarar atividades ilícitas, fazendo com que o mercado internacional se compelisse a inibir os atos fraudulentos por meio da fiscalização internacional. O ordenamento jurídico da Argentina, por exemplo, prevê:

"Enla esfera de la IGJ no se há prohibido registrar a las sociedades off shore. Sólo se establecieron limites para actuarennuestro país a través de la Res. 7/2005 (144) com elfin de proteger la transparecia de los negócios y elinteréspúblico."

Dessa forma, constituindo a empresa, ela será totalmente legal, desde que seja comunicada no país de origem. No caso do Brasil, por meio de um banco brasileiro, essa comunicação se dá quando o proprietário da empresa faz um fechamento de câmbio, no qual constará no registro do Banco Central (controle federal), e o dinheiro oriundo desse ato será repassado à empresa no exterior para que esse capital seja usado conforme o planejamento financeiro estabelecido.

Além disso, é cabível mencionar que, devido às suas características, quando combinadas, podemos ter também as Holding Offshore. Contudo, quando se configura ato fraudulento, poderá desconstituir a personalidade jurídica e atingir o patrimônio dos sócios. Nesses casos, o lugar em que serão constituídas são estrategicamente planejados, fazendo com que a tributação brasileira devida não seja plenamente arrecada, sem contar com a não declaração na Receita Federal.

Assim, os denominados Paraísos Fiscais, como o Panamá, Bélgica, Singapura, Mônaco, Bahamas e as Ilhas Britânicas, países em que a tributação favorece o investidor por possuírem estabilidade política, segurança, isenções fiscais, moedas fortes, liberdade de câmbio, juros baixos, dentre outros, acabam proporcionando a proteção patrimonial de seus membros, tendo em vista que contam com o sigilo de suas identidades, das quotas, dos fundos de investimentos, das contas bancárias, das movimentações, etc., o que não é concedido no Brasil.

Diante dessa carência moralista, quando há solicitações de sucessões patrimoniais das holdings offshore, a jurisprudência brasileira é minuciosa e lenta, pois envolve quesitos de sucessão internacional e princípios do direito internacional privado, o que pode gerar muita dor de cabeça para os possíveis herdeiros da parte.

Por fim, é cabível mencionar acerca dos tratados de dupla tributação. Esses acordos internacionais buscam evitar que o mesmo patrimônio seja tributado mais de uma vez, tanto no seu país local, quanto no seu país de origem. Dessa forma, foi estipulado que o montante de impostos que cada país cobrará será acordado entre eles, levando em conta as receitas geradas por atividades e investimentos internacionais.

6. EXEMPLOS
No Brasil, temos alguns exemplos de Holdings, como o caso da Itaúsa – Investimentos Itaú S.A., que atua em empresas de diversos setores, como financeiro, indústrias de painéis de madeira, revestimento cerâmico, vestuário, louças e metais sanitários, calçados e gasodutos. Como principais empresas, podemos citar como exemplos Duratex, Alpargatas, NTS, Itautec, Itaú Unibanco S.A., Itaú BBA, Instituto Alpargatas, Fundação Itaú Social e Itaú Sustentabilidade. Ademais, cabe mencionar a Gerdau Metalúrgica, uma holding que controla diversas operações de siderurgia da Gerdau. Além disso, tem uma participação acionária importante na Vale, mas não participa do seu controle. Ainda, a J&F Investimentos é a holding pura que controla a JBS, a maior produtora mundial de carne bovina, carne de frango, e couros. Também é da Eldorado Brasil, uma das maiores plantas de celulose do mundo, do Banco Original, do PicPay, e da Âmbar Energia, Floral e Canal Rural. Nesta, o objeto principal é participar dessas empresas adquirindo suas quotas. Nos Estados Unidos, temos a holding Berkshire Hathaway, a empresa do megainvestidor Warren Buffet. Tem sua sede em Omaha, no estado de Nebraska, EUA, e é utilizada para a gestão de mais de 60 empresas controladas por Buffet. Outrossim, também gere um portfólio de ações, no qual não controla, mas tem participação societária.

No caso das Offshores, podemos citar a SBM Offshore, grupo empresarial holandês que presta serviços para a indústria petrolífera com sede nos Países Baixos. Há também a Schlumberger, empresa francesa constituída no ramo de petróleo que trabalha em mais de 85 países, com seus escritórios principais nos Estados Unidos, França e Holanda.

No Brasil, ela está presente em Macaé, no Rio de Janeiro. Ademais, a DNV GL – OIL & GAS é uma indústria global norueguesa que fornece softwares e serviços de consultoria independente para as indústrias de energia, petróleo, gás e marítima, com mais de 300 escritórios em mais de 100 países. No Brasil, possui escritórios no Rio de Janeiro, São Paulo, Salvador, Macaé e Caxias do Sul.

Por outro lado, a Diamond Offshore/Brasdril é uma empresa americana que presta serviços para a indústria de energia, trabalhando com sondas em construção e perfuração na extração de petróleo. Por fim, a Atlam Offshore, multinacional americana sediada em Houston, Texas, possui sedes no Rio de Janeiro, Vitória e Macaé, e atua com testes de tração e movimentação de cargas para navios e plataformas offshore, dentre outros.

REFERÊNCIAS
BRASIL. Lei n° 6.404, de 15 de dezembro de 1976: dispõe sobre as Sociedades por Ações. Disponível em: http://www.planalto.gov.br/ccivil_03/leis/l6404consol.htm. Acesso em 14 de setembro de 2020.

BRASIL. Lei n. 10.406, 10 de janeiro de 2002. Institui o Código Civil. Diário Oficial da União, Brasília, DF, 11 jan. 2002. Disponível em: <http://www.planalto.gov.br/ccivil_03/leis/2002/l10406.htm>. Acesso em: 14 de setembro de 2020.

BRS EXPLICA. O inacreditável mundo Offshore. Youtube, 2016. Disponível em: <https://www.youtube.com/watch?v=kOZ1hra5bXE>. .Acesso em: 14 de setembro de 2020.

COELHO, Fábio Ulhôa. Curso de direito comercial. Ed. — São Paulo: Saraiva, volume 2: direito de empresa. 2013.

COELHO, F.U. Manual de Direito Comercial: Direito de Empresa. 28ª edição. São Paulo: Revista dos Tribunais, 2016.

CANAL Sevilha Contabilidade.  Oque é uma Off Shore. Youtube, 2015. Disponível em: <https://www.youtube.com/watch?v=NS4jCNfPptI>. Acesso em: 1 de setembro de 2020.

CANAL SL. O que é Offshore Company? | Jurídi…O quê?!?!. Youtube, 2016. Disponível em: <https://www.youtube.com/watch?v=XTkkrSObFnU>.Acesso em: 14 de setembro de 2020.

CANAL Universidade Financeira. O Que é Uma Holding? Conceito de Holding + AULA COMPLETA | TERMOS FINANCEIROS #054. Youtube, 2017. Disponível em: < https://www.youtube.com/watch?v=F0dTvk4w4Qs>. Acesso em: 1 de setembro de 2020.

CLEMENTE, Lucas. Você conhece os principais tipos de holding? Veja nesse post! via: INEPAD Consulting, 2018.

HUNGARO, Fernando Martinez. A figura das empresas holding como forma de proteção patrimonial, planejamento sucessório e controle de grupos empresariais. Encontro de Iniciação Científica do Centro Universitário Antônio Eufrásio de Toledo de Presidente Prudente. Vol. 15, n. 15, 2019. Disponível em: http://intertemas.toledoprudente.edu.br/index.php/ETIC/ article/viewFile/2231/2395. Acesso em: 11 de ago. 2020.

KNOWLEDGE AT WHARTON. Paraísos fiscais e empresas offshore: a fiscalização internacional a serviço da empresa. Mar. 2015. Disponível em: http://www.knowledgeatwharton.com.br/article/paraisos-fiscais-e-empresas-offshore-a-fiscalizacao-internacional-a-servico-da-empresa/. Acesso em: 11 de ago. 2020.

MATIAS, Alberto Borges. O guia completo sobre holging: tudo que você precisa saber! Jun. 2018. Disponível em: https://blog.inepadconsulting.com.br/holding/. Acesso em: 11 de ago. 2020.

MONEDA, Willian. Empresas offshore: legitimidade e vantagens. Revista Jus Navigandi, Teresina, ano 19, n. 4180, 11 dez. 2014. Disponível em: <http://jus.com.br/artigos/31340>;. Acesso em: 10 set. 2020.

MULLER, Helen Luisa Muller. Empresas offshore: entre o crime e a legalidade. Semana do conhecimento. Vol.1, 2018.  Disponível em: http://semanadoconhecimento.upf.br/download/ anais-2018/empresas-offshore.pdf. Acesso em: 11 de ago. 2020.

OLIVEIRA, Rafael Bittencourt Licurci. "EMPRESAS OFFSHORE". via Escola da Magistratura do Estado do Rio de Janeiro.

PERONE, Eucelli Queiros Gonçalves de Sousa Fernandes. Paraísos Fiscais e Offshore: breves linhas. RKL Advocacia, 27 abr. 2017. Disponível em: <https://www.rkladvocacia.com/paraisos-fiscais-e-offshore-breves-linhas/>. Acesso em: 10 set. 2020.

REIS, Thiago. AMPARO, Roberto. O que é uma Holding? Por que é uma empresa mãe?. Youtube, 2019. Disponível em: <https://www.youtube.com/watch?v=a3x65Xwunqw>; Acesso em 10 set. 2020.

STIVAL, Lívia Marina Siqueira de Moraes, STIVAL, Matheus. Vulnerabilidades sucessórias em empresas familiares decorrente de investimentos offshore. Revista Jus Navigandi, Teresina, ano 19, 07/2019. Disponível em: <https://jus.com.br/artigos/75946/vulnerabilidades-sucessorias-em-empresas-familiares-decorrente-de-investimentos-offshore/2>;. Acesso em: 10 set. 2020.

TEIXEIRA, Tarcísio. Direito Empresarial Sistematizado: doutrina, jurisprudência e prática. 7.ed. São Paulo: Saraiva Educação, 2018.

TOMAZETTE, M. Curso de Direito Empresarial: Teoria geral e direito societário. 8ª edição. São Paulo: Atlas, 2017. 1v.

– – – – – – – – –

Matéria publicada no website JUS.com.br, em 09/2020, por Flávia Helena Lelis Silveira.

– – – – – – – – –

Precisa de ajuda jurídica para você ou sua empresa? O Martins Regina Advocacia pode te ajudar. Entre em contato!`,
    articleUrl: "https://jus.com.br/artigos/85492/uma-analise-sobre-as-holdings-e-offshores/2"
  },
  {
    id: '6',
    title: "A execução contra avalista de empresa sujeita a recuperação judicial ou a falência",
    date: "28/10/2020",
    author: "Rogério Tadeu Romano",
    description: "O processamento da recuperação judicial de empresa não suspende ações de execução contra fiadores e avalistas do devedor principal recuperando, segundo entendimento do STJ.",
    fullContent: `O processamento da recuperação judicial de empresa, ou mesmo a aprovação do plano de recuperação, não suspende ações de execução contra fiadores e avalistas do devedor principal recuperando. Esse é o entendimento da 2ª Seção do Superior Tribunal de Justiça. A decisão foi tomada em julgamento de recurso especial sob o rito dos repetitivos, estabelecido no artigo 543-C do Código de Processo Civil.

A Seção fixou a seguinte tese: "A recuperação judicial do devedor principal não impede o prosseguimento das execuções, nem tampouco induz suspensão ou extinção de ações ajuizadas contra terceiros devedores solidários ou coobrigados em geral, por garantia cambial, real ou fidejussória, pois não se lhes aplicam a suspensão prevista nos artigos 6º, caput, e 52, inciso III, ou a novação a que se refere o artigo 59, caput, por força do que dispõe o artigo 49, parágrafo 1º, todos da Lei 11.101/2005".

O ministro Luis Felipe Salomão explicou que o artigo alcança os sócios solidários, pois, na eventualidade de decretação de falência da sociedade, os efeitos da quebra estendem-se a eles. A situação é bem diversa, por outro lado, em relação aos devedores solidários ou coobrigados. Para eles, a disciplina é exatamente inversa, prevendo a lei, expressamente, a preservação de suas obrigações na eventualidade de ser deferida a recuperação judicial do devedor principal.

"Os credores do devedor em recuperação judicial conservam seus direitos e privilégios contra os coobrigados, fiadores e obrigados de regresso."

Ressalte-se que na I Jornada de Direito Comercial feita pelo CJF/STJ foi aprovado o Enunciado 43, com a seguinte redação: "A suspensão das ações e execuções previstas no artigo 6º da Lei 11.101/2005 não se estende aos coobrigados do devedor".

"O plano de recuperação produz, em consequência, a renovação dos créditos anteriores ao pedido, e obriga o devedor e todos os credores a ele sujeitos, sem prejuízo das garantias, a não ser que, por expressa concordância do credor, tenha havido supressão ou substituição dela." (PACHECO, José da Silva. Processo de recuperação judicial, extrajudicial e falência: em conformidade com a Lei nº 11.101/05 e a alteração da Lei nº 11.127/05. Rio de Janeiro: Forense, 2006. p.162).

"São efeitos da decisão de recuperação judicial: (…) – sujeição do devedor e de todos os credores a ela sujeitos, sem prejuízo das garantias que, para serem alienadas, suprimidas ou substituídas, dependerão de expressa aprovação do credor titular (LF, arts. 59 e 50, § 1º); (…)." (NEGRÃO, Ricardo. Aspectos objetivos da lei de recuperação de empresa e de falências: Lei n. 11.101, de 9 de fevereiro de 2005. São Paulo: Saraiva, 2005.p.196).

Com relação à falência e a execução contra os avalistas tem-se decisão no REsp 883859/SC:  NOTA PROMISSÓRIA. EXECUÇÃO DE SÓCIO-AVALISTA. EMPRESA AVALIZADA COM FALÊNCIA DECRETADA. SUSPENSÃO DA AÇÃO. NÃO CABIMENTO. INEXISTÊNCIA DE SOLIDARIEDADE ENTRE SÓCIO E SOCIEDADE FALIDA. – Como instituto típico do direito cambiário, o aval é dotado de autonomia substancial, de sorte que a sua existência, validade e eficácia não estão jungidas à da obrigação avalizada. – Diante disso, o fato do sacador de nota promissória vir a ter sua falência decretada, em nada afeta a obrigação do avalista do título, que, inclusive, não pode opor em seu favor qualquer dos efeitos decorrentes da quebra do avalizado. – O art. 24 do DL 7.661/45 determina a suspensão das ações dos credores particulares de sócio solidário da sociedade falida, circunstância que não alcança a execução ajuizada em desfavor de avalista da falida. Muito embora o avalista seja devedor solidário da obrigação avalizada, ele não se torna, por conta exclusiva do aval, sócio da empresa em favor da qual presta a garantia. – Mesmo na hipótese do avalista ser também sócio da empresa avalizada, para que se possa falar em suspensão da execução contra o sócio-avalista, tendo por fundamento a quebra da empresa avalizada, é indispensável, nos termos do art. 24 do DL 7.661/45, que se trate de sócio solidário da sociedade falida. Recurso especial a que se nega provimento.

Do mesmo modo:

AGRAVO REGIMENTAL. AGRAVO DE INSTRUMENTO. RECURSO ESPECIAL. EXECUÇÃO DE SÓCIO-AVALISTA. SUSPENSÃO DA AÇÃO. NÃO APLICAÇÃO. MATÉRIA PACIFICADA. SÚMULA 83/STJ.

1. O processo não se suspende quando a execução for ajuizada em desfavor de avalista solidário de empresa falida. Desta forma, é de rigor a incidência da súmula 83 deste Superior Tribunal de Justiça.

2. Agravo regimental desprovido." (AgRg no Ag 812.533/SP, Quarta Turma, Rel. Ministro Fernando Gonçalves, DJe de 22.3.2010.)

Em outras palavras, a falência da devedora principal em nada afeta a obrigação dos avalistas dos títulos, devendo em face deles prosseguir a execução.

Tal entendimento prevalece mesmo na hipótese presente, em que os avalistas também são sócios da empresa avalizada.

É certo que o art. 6º da Lei de Falências, reproduzindo o antigo texto do art. 24 do Decreto-lei nº 7.661/45, determina a suspensão das ações e execuções dos "credores particulares do sócio solidário" da sociedade falida. Porém, tal suspensão não alcança toda ação envolvendo sócio da empresa falida, mas apenas ações que digam respeito a sócios solidariamente responsáveis pelas obrigações sociais, como ocorre, por exemplo, nas sociedades em nome coletivo ou nas sociedades irregulares ou de fato.

Mesmo na hipótese do avalista ser também sócio da empresa avalizada, para que se possa falar em suspensão da execução contra o sócio-avalista, tendo por fundamento a quebra da empresa avalizada, é indispensável, nos termos do art. 24 do DL 7.661/45, que se trate de sócio solidário da sociedade falida.

Observe-se o REsp n. 883859/SC (Terceira Turma, Rei. Min. Nancy Andrighi, DJe 23.03.09). Ali se disse:

Avalista não pode argumentar falência de empresa para se recusar a saldar compromissos firmados em nota promissória, ainda que ele seja sócio da empresa avalizada. Com essa consideração, a Terceira Turma do Superior Tribunal de Justiça (STJ) manteve decisão que permitiu a arrematação de um imóvel da massa falida do Supermercado Gomes Ltda., de Santa Catarina, para o pagamento da dívida. "O fato do sacador de nota promissória vir a ter sua falência decretada, em nada afeta a obrigação do avalista do título, que, inclusive, não pode opor em seu favor qualquer dos efeitos decorrentes da quebra do avalizado", considerou a ministra Nancy Andrighi, relatora do caso. (Resp 883859) (STJ, 30/03/09)

Como instituto típico do direito cambiário, o aval é dotado de autonomia substancial, de sorte que a sua existência, validade e eficácia não estão jungidas à da obrigação avalizada. – Diante disso, o fato do sacador de nota promissória vir a ter sua falência decretada, em nada afeta a obrigação do avalista do título, que, inclusive, não pode opor em seu favor qualquer dos efeitos decorrentes da quebra do avalizado. – O art. 24 do DL 7.661/45 determina a suspensão das ações dos credores particulares de sócio solidário da sociedade falida, circunstância que não alcança a execução ajuizada em desfavor de avalista da falida. Muito embora o avalista seja devedor solidário da obrigação avalizada, ele não se torna, por conta exclusiva do aval, sócio da empresa em favor da qual presta a garantia. – Mesmo na hipótese do avalista ser também sócio da empresa avalizada, para que se possa falar em suspensão da execução contra o sócio-avalista, tendo por fundamento a quebra da empresa avalizada, é indispensável, nos termos do art. 24 do DL 7.661/45, que se trate de sócio solidário da sociedade falida.

Já, no passado, sob a égide da antiga Lei de Falências, entendia-se que a execução contra o avalista da nota promissória não é suspensa por motivos de ter o eminente impetrado concordata preventiva ou de ter sido decretada a falência do emitente.

Aliás, assim decidiu-se:

"A decisão do Juízo da concordata deferindo pedido de notificação ao credor para sustar a cobrança judicial é inoperante." (Ac. 8ª Câmara, TJ – DF, in DJU de 12 de fevereiro de 1959, ap. ao n. 34, pág. 461)

No mesmo sentido, tem-se o ensinamento de José da Silva Pacheco (Processo de falência e concordata, 5ª edição, pág. 336).

Mas, não se pode olvidar que a execução coletiva, ou falência, engloba todos os credores e todos os bens do devedor. Logo, paralisa as execuções individuais contra o devedor e contra o sócio solidário da sociedade falida. Se o juiz da execução singular não sustar o processo ou negar-se a fazê-lo, inválidos são os atos seguintes à decretação de falência.

O avalista que paga o débito do falido pode habilitar-se na falência do devedor a quem avalizou. Tem-se então: "… a declaração, feita pelo credor, de que o crédito reclamado foi por ele pago por força do seu aval, satisfaz a exigência da origem ou causa do crédito (Revista de Direito, volume 68/176, Corte de Apelação do antigo Distrito Federal).

– – – – – – – – –

Artigo publicado no website JUS.com.br, em 09/2020, por Rogério Tadeu Romano.

– – – – – – – – –

Precisa de ajuda jurídica para você ou sua empresa? O Martins Regina Advocacia pode te ajudar. Entre em contato!`,
    articleUrl: "https://jus.com.br/artigos/85569/a-execucao-contra-avalista-de-empresa-sujeita-a-recuperacao-judicial-ou-a-falencia"
  },
  {
    id: '7',
    title: "A empresa na pandemia coronavírus: o que fazer com empregados e dívidas",
    date: "28/10/2020",
    author: "Nelson Zunino Neto",
    description: "O mundo passa por um evento avassalador com a pandemia COVID-19. Orientações sobre medidas trabalhistas e gestão de dívidas para empresas durante este cenário desafiador.",
    fullContent: `O mundo passa por um evento avassalador. A Coronavírus (COVID-19) é uma pandemia (enfermidade com ampla disseminação internacional) que atinge indiscriminadamente toda a população. Embora tenha taxa de letalidade relativamente baixa, é altamente contagiosa. O principal efeito, do ponto-de-vista econômico, está no impacto que provoca no sistema de saúde, que não tem estrutura para suportar o alto volume da demanda.

1. INTRODUÇÃO
Não é apenas a fase dos resultados negativos (contágio, doença e morte) que tem efeitos nefastos, mas a fase antecedente, de prevenção, já é terrivelmente lesiva. Isto porque a principal medida é o isolamento social, e isto implica a ausência de pessoas nos locais de trabalho, produzindo, ou ainda nos locais de comércio, consumindo.

Em suma, o que se tem é a paralisação generalizada da maior parte da força econômica do país. Por certo que qualquer empresa que seja forçada a paralisar suas atividades por alguns dias, talvez semanas ou meses, dificilmente resistirá ao revés daí decorrente. A quebra é iminente, a não ser que medidas compensatórias sejam promovidas. Este artigo propõe algumas soluções na seara trabalhista e com relação às relações com credores, no que diz respeito às dívidas da empresa.

Trata-se de uma situação anormal, de extrema gravidade, que caracteriza o que se denomina juridicamente "força maior", evento imprevisível e independente da vontade humana. A situação comporta a aplicação de excepcionalidades da lei.

Em virtude deste contexto, recomenda-se algumas medidas imediatas, sem prejuízo de outras no decorrer deste período.

2. MEDIDAS GERAIS
Em caso de empregado infectado, este deverá ser submetido imediatamente a isolamento, que nos termos da lei é a "separação de pessoas doentes ou contaminadas, ou de bagagens, meios de transporte, mercadorias ou encomendas postais afetadas, de outros, de maneira a evitar a contaminação ou a propagação do coronavírus".

Já a quarentena é, pela lei, a "restrição de atividades ou separação de pessoas suspeitas de contaminação das pessoas que não estejam doentes, ou de bagagens, contêineres, animais, meios de transporte ou mercadorias suspeitos de contaminação, de maneira a evitar a possível contaminação ou a propagação do coronavírus."

A lei prevê ainda que pode ser determinada a realização compulsória de exames e tratamentos. Mas estas medidas coercitivas são prerrogativas de autoridades de saúde, no âmbito das empresas isto não é possível desta forma. O que a empresa pode fazer, para preservar a incolumidade dos trabalhadores e a saúde geral, é proibir a presença de pessoas infectadas ou com suspeita de infecção, no ambiente de trabalho compartilhado com outras pessoas, sempre cuidando de respeitar a dignidade humana.

Vale ressaltar: a lei exige que qualquer pessoa que tenha informação sobre caso de infecção ou suspeita tem a obrigação de informar as autoridades de saúde.

A empresa deve seguir rigorosamente as orientações das autoridades de saúde, especialmente orientando e informando a todos sobre os procedimentos adequados.

Não apenas por uma questão de humanidade, afinal, nem tudo se circunscreve a interesses econômicos, mas também porque a empresa pode ser responsabilizada em caso de danos materiais ou morais a quem vier a ser lesado por conta de inobservância das regras.

3. MEDIDAS TRABALHISTAS
3.1. DEFINIÇÃO DA ESTRATÉGIA
De início a empresa deve avaliar os prós e contras e definir o caminho a seguir. São algumas opções, todas baseadas na lei, que vão ser mais ou menos adequadas conforme cada caso.

Tem-se como base normativa para essas hipóteses a Constituição Federal (CF), especialmente o art. 170, a Consolidação das Leis do Trabalho (CLT), em especial arts. 2° e 8°, e a lei 13.979/2020, que trata de medidas emergenciais relativas ao Coronavírus.

Depois de escolhidas as alternativas, devem ser colocadas em prática, sempre com ampla documentação e registro de tudo o que for feito, como forma de minimizar riscos e garantir ao máximo a segurança jurídica da empresa.

3.2 FÉRIAS INDIVIDUAIS
É possível dar férias individuais, e o momento fica a critério da empresa (CLT, art. 136). Embora a lei imponha uma antecedência de 30 dias para a comunicação ao empregado (CLT, art. 135), isto pode ser relativizado em face das circunstâncias e prevalência do interesse público (CLT, art. 8°), desde que haja real necessidade para a empresa, devendo constar a motivação no aviso de férias. Demais obrigações continuam vigentes, como o pagamento antecipado.

3.3 FÉRIAS COLETIVAS
Da mesma forma, as férias podem ser concedidas coletivamente, seja para todo o conjunto de empregados, seja para determinados setores, sempre conforme a necessidade da empresa. O período mínimo de dez dias (CLT, art. 139, § 1°) e o aviso com antecedência (CLT, art. 139, § 2°) podem ser flexibilizados.

3.4 INTERRUPÇÃO REMUNERADA COMPENSADA
Caso a empresa não possa ou não pretenda conceder férias individuais ou coletivas e os empregados deixem de comparecer, esta ausência poderá ser considerada justificada. A interrupção do contrato, motivada pela pandemia, pode ser compensada no retorno dos empregados, com a realização de duas horas extras por dia durante até 45 dias, o que totaliza 90 horas de compensação (CLT, art. 61, § 3°). Mas esta opção só será adotada se a empresa não preferir o sistema de banco de horas.

3.5 COMPENSAÇÃO POR BANCO DE HORAS
O banco de horas semestral é realizado diretamente entre empresa e empregado. Já o anual depende de acordo ou convenção coletiva. E ainda há a compensação de jornada, no período mensal, por acordo individual.

3.6 TELETRABALHO (HOME OFFICE)
O teletrabalho (CLT, art. 75-A e seguintes) pode ser adotado neste período, quando possível. Deve ser formalizado, por escrito, em aditamento ao contrato de trabalho. O empregado não pode se recusar sem uma séria justificativa. No aditivo deve constar o compromisso do empregado em seguir as instruções da empresa.

3.7 AFASTAMENTO POR DOENÇA
Em caso de empregado infectado, o afastamento será considerado como motivado por doença decorrente de atividade profissional. Assim, aplica-se a sistemática do auxílio previdenciário, com responsabilidade da empresa pelos primeiros quinze dias e pelo INSS a partir de então.

3.8 RESCISÃO DO CONTRATO
Há entendimentos de que, considerando o contexto da pandemia, a rescisão contratual poderia ser realizada com redução de metade da multa, por força – e forçando a hermenêutica – do art. 501 e 502 da CLT.

Prefere-se, contudo, não adotar esta via, já que o dispositivo mencionado é aplicável para a hipótese de extinção da empresa ou estabelecimento, e o escopo deste trabalho é a verificação de medidas para empresas em atividade.

4. MEDIDAS COMERCIAIS
4.1 REBUS SIC STANTIBUS
Existe um instrumento jurídico no Código Civil que permite a resolução ou modificação das condições de um contrato, desde que seja de prestação diferida (ou seja, não à vista) ou continuada.

Esta resolução por onerosidade excessiva está prevista nos arts. 478 a 480 do Codex e é velha conhecida do mundo jurídico, muito antes do Código Civil (CC), como Teoria da Imprevisão, que tem por base a cláusula rebus sic stantibus (enquanto as coisas estão assim).

Como este texto não tem por escopo aprofundar o tema, basta dizer que esta cláusula resolutiva, que já se empregava antes mesmo de estar prevista em lei e que se aplica ainda que não prevista no contrato, exige alguns requisitos. São eles: a) o diferimento ou a sucessividade na execução do contrato; b) alteração nas condições circunstanciais objetivas em relação ao momento da celebração do contrato; c) excessivas onerosidade para uma parte contratante e vantagem para outra; d) imprevisibilidade daquela alteração circunstancial; e) o nexo causal entre a onerosidade e vantagem excessivas e a alteração circunstancial objetiva; f) a inimputabilidade às partes pela mudança circunstancial; g) a imprevisão da alteração circunstancial.

Dito isto temos que "rebus sic stantibus pode ser definida como a cláusula que permite a revisão das condições do contrato de execução diferida ou sucessiva se ocorrer em relação ao momento da celebração mudança imprevista, razoavelmente imprevisível e inimputável às partes nas circunstâncias em torno da execução do contrato que causem desproporção excessiva na relação das partes, de modo que uma aufira vantagem exagerada em detrimento da desvantagem da outra." (Zunino Neto, Nelson. Pacta sunt servanda x rebus sic stantibus: uma breve abordagem. Revista Jus Navigandi, ISSN 1518-4862, Teresina, ano 4, n. 31, 1 maio 1999. Disponível em: https://jus.com.br/artigos/641. Acesso em 16 mar. 2020.)

A pandemia Coronavírus (COVID-19) é certamente, na mais singela avaliação, uma hipótese de força maior.

O Código Civil trata da irresponsabilidade do devedor em casos de força maior e a conceitua como fato necessário e inevitável. Embora este dispositivo não se refira à imprevisibilidade, tal característica é absolutamente reconhecida na doutrina e na jurisprudência como essencial.

A cláusula rebus sic stantibus não está necessariamente atrelada à força maior, mas a fatos extraordinários, o que de qualquer modo se faz presente.

Em se tratando de obrigações, em especial aquelas obrigações ordinárias das empresas, é preciso verificar se a cláusula resolutiva (rebus sic stantibus) terá força bastante para se sobrepor à obrigatoriedade dos contratos (pacta sunt servanda).

Não há dúvida de que estão presentes os requisitos objetivos, como a ocorrência de fato extraordinário imprevisto e imprevisível. Mas é preciso verificar, caso a caso, se na relação das partes haverá reflexo que possa tornar desproporcional a execução do contrato, resultando em vantagem/desvantagem exagerada. Pois bem.

Para uma empresa que tenha saúde financeira íntegra, alta liquidez e sólida conjuntura no momento da ocorrência, é possível que não haja desproporção, ou onerosidade excessiva para o cumprimento da obrigação. Já para uma empresa que, embora em dia com suas obrigações, vá ficar com saldo devedor ou desprovida de recursos para a manutenção ordinária de suas atividades, o cumprimento da obrigação será afetado a ponto de se caracterizar a excessividade. Não se poderia admitir, por exemplo, que a empresa deixasse de cumprir suas obrigações trabalhistas, que são prioritárias não apenas por imposição legal mas pela natureza humanitária.

Mas é claro que a incidência da teoria da imprevisão não tem o condão de afastar as obrigações em definitivo. Trata-se de uma aplicação proporcional e, para tanto, invoca-se aqui dois conhecidos princípios, razoabilidade e proporcionalidade, este último mais como instrumento de ponderação. A função da rebus sic stantibus é manter o equilíbrio, o que não aconteceria com a mera desobrigação.

No caso de uma dívida em que estejam presentes as condições para a cláusula referida, o equilíbrio poderá ser alcançado com a dilação do prazo para cumprimento da obrigação. O que se tem aqui, portanto, é a suspensão da exigibilidade da obrigação.

Num primeiro momento se tende a pensar que a prorrogação do prazo poderia ser exatamente proporcional ao tempo de duração do evento extraordinário. Assim, estaria suspensa a exigibilidade enquanto persistente a pandemia. Entretanto, a questão não se restringe ao período, porque as consequências da paralisação são mais complexas.

A pandemia tem diversos desdobramentos, desde a perda de vidas humanas até a paralisação total de atividades, com bloqueio de faturamento. Os efeitos, portanto, se dão em cadeia e se estendem por mais tempo que a duração da causa.

Não por acaso instituições bancárias concederam prorrogação de vencimento de débitos para pessoas físicas, e micro e pequenas empresas, por 60 dias. A par de representar uma medida elogiável, sinaliza que os bancos reconhecem a onerosidade decorrente da pandemia e que entendem que os seus efeitos tem um prazo bem maior que o inicialmente estimado para sua duração.

Não há uma fórmula matemática para definir o prazo da moratória, e isto deve ser resolvido a cada caso, mas desde logo é possível buscar na legislação um parâmetro que possa balizar o cálculo. Trata-se do disposto no art. 916 do Código de Processo Civil, que permite ao devedor o parcelamento da dívida em seis meses, desde que paga uma parcela inicial de 30% do montante.

Considerando que esta é uma viabilização prevista em lei para situação de normalidade, não há porque desconsiderá-la como alternativa em situações extraordinárias.

Assim, pode-se concluir, como uma base para a aplicação da teoria da imprevisão, pela possibilidade de suspensão da exigibilidade da obrigação pelo prazo da pandemia, com a possibilidade de seu parcelamento em até seis prestações atualizadas a partir do fim do evento, desde que presentes todos os requisitos da cláusula, especialmente as condições das partes.

É imprescindível, claro, considerar a função social do contrato e o inafastável princípio da boa-fé, que serve tanto para aplicação da cláusula em questão quanto para impedir o abuso por parte de devedor que eventualmente não tenha sido realmente afetado com gravidade. Não há previsão específica na lei, e inexistindo acordo a questão só poderá ser resolvida judicialmente.

Apenas para registro, a prescrição da dívida não correrá durante a suspensão da exigibilidade da obrigação, considerando-se, obviamente, que a regra não poderá beneficiar indevidamente uma das partes quando justamente incide para reequilibrar. Neste sentido é possível aplicar o disposto no art. 199, I, do CC, que considera a pendência de condição suspensiva, já que a cláusula rebus sic stantibus tem aplicabilidade justamente como elemento de condição contratual.

O que se apresenta é uma proposição, baseada no conceito jurídico da teoria da imprevisão, da cláusula da resolução por onerosidade excessiva e respectiva possibilidade de alteração nas condições contratuais, conforme prevê o Código Civil. É um norte, um parâmetro inicial para quem está perdido em meio a esta calamidade pública que afetou o mundo inteiro. O que se recomenda é cautela e muita negociação.

4.2 DÍVIDAS FISCAIS E BANCÁRIAS
Os poderes públicos estão editando medidas legais para corrigir os efeitos econômicos da pandemia com relação a dívidas tributárias, como é o caso da Portaria 103/2020, do Ministério da Economia, que trata de suspensão e prorrogação de cobrança de dívida ativa da União.

Outros atos certamente serão publicados nos próximos dias. Mas tudo o que há sobre rebus sic stantibus a respeito de dívidas comuns se aplica a esses débitos tributários e também às dívidas fiscais.

5. CONCLUSÃO
Geralmente não há fórmula pronta para questão alguma em direito, em face da relatividade das questões jurídicas. Muito menos haverá uma receita para situações como a presente, dado o ineditismo.

Mas é possível, considerados os conceitos verificados, vislumbrar algumas posições a serem tomadas pelas empresas como medidas preventivas e compensatórias para a manutenção das atividades.

Primeiro, as medidas relacionadas com a saúde dos funcionários, clientes, fornecedores e demais agentes que com ela possam interagir. É preciso seguir as determinações e recomendações legais e das autoridades sanitárias, inclusive para prevenir responsabilidades. Toda cautela é necessária.

Com relação às questões trabalhistas, vê-se que há diversos dispositivos legais, preexistentes à Coronavírus, possibilitando medidas excepcionais.

Há algumas formas de minimizar as perdas, inclusive com férias, compensação de horários e até mesmo redução salarial, o que demonstra que os direitos trabalhistas, ainda que preservados na essência, podem ser em alguma medida flexibilizados para preservar a existência da empresa.

Do prisma constitucional, para a economia é tão relevante preservar os direitos do trabalhador quanto manter vivas as empresas. Mas não se pode perder de vista que lucro e risco são sócios, e esta é uma premissa do ordenamento jurídico.

Assim, embora muitas restrições possam ser excepcionalmente aplicadas durante a pandemia, os direitos fundamentais continuam preservados, e quem vai suportar o prejuízo econômico maior é o governo e as empresas. O que se recomenda aqui é tomar medidas preventivas, negociar com os empregados, registrar as ocorrências e aplicar a lei. Naquilo que for possível o apoio do sindicato de cada categoria será valioso, para acordos e convenções coletivas, e o momento é propício para compreensão mútua e divisão de responsabilidades entre empresas e trabalhadores.

Com relação às obrigações das empresas, é inegável que sem medidas compensatórias muitas delas dificilmente sobreviverão. Além de eventual ajuda governamental é preciso estabelecer um pacto geral, uma moratória razoável.

Como não há uma regra específica, o que se propõe é a aplicação da cláusula rebus sic stantibus para a prorrogação dos vencimentos. Como se trata de suspensão da exigibilidade da obrigação, fica suspensa também a viabilidade de qualquer protesto ou restrição creditícia relativa àquela obrigação. A proposta é que o vencimento das dívidas seja prorrogado e estas sejam parceladas em até seis prestações, iniciando-se após o fim da pandemia (o que se poderá considerar quando as atividades voltarem ao normal e isto for fato notório).

Recomenda-se, então, caso a empresa tenha dificuldades em honrar os compromissos, que todos os credores sejam notificados de que, em virtude da situação, a empresa: 1) considera suspensa a exigibilidade de todos os débitos vencidos a partir da segunda quinzena de março de 2020 (data em que as principais cidades do país começaram a paralisar atividades e reportar aumento de medidas restritivas); 2) propõe renegociação com prorrogação e parcelamento da dívida para iniciar o pagamento após o fim dos efeitos da pandemia, de uma a seis parcelas, conforme o caso; 3) solicita que nenhum protesto ou medida restritiva de crédito seja promovida até a definição da renegociação; 4) adverte que em caso de não manifestação de interesse em negociação serão tomadas medidas judiciais para o fim de garantir a incolumidade das atividades da empresa, observando que em caso de execução judicial o débito poderá ser pago na forma do parcelamento da lei, depois do trâmite legal.

Recomenda-se, enfim, que as medidas sejam tomadas com cautela e boa-fé, sempre no espírito de conciliação, afinal o problema é de todos. E cada empresa, claro, deve se valer da orientação de sua assessoria jurídica, para evitar problemas adicionais.

– – – – – – – – –

Artigo publicado no website JUS.com.br, em 03/2020, por Nelson Zunino Neto.

– – – – – – – – –

Precisa de ajuda jurídica para você ou sua empresa? O Martins Regina Advocacia pode te ajudar. Entre em contato!`,
    articleUrl: "https://jus.com.br/artigos/85651/a-empresa-na-pandemia-coronavirus-o-que-fazer-com-empregados-e-dividas"
  }
];

export default function ArticlesSection() {
  const { currentLanguage } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  const openArticleModal = (article: ArticleData) => {
    setSelectedArticle(article);
  };

  const closeArticleModal = () => {
    setSelectedArticle(null);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 80;
      const pos = el.getBoundingClientRect().top;
      const offset = pos + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="artigos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative inline-block">
            {currentLanguage === 'PT' ? 'Artigos Jurídicos' : 'Legal Articles'}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {currentLanguage === 'PT'
              ? 'Compartilhamos conhecimento e análises sobre temas relevantes do universo jurídico.'
              : 'We share knowledge and insights on relevant topics in the legal world.'}
          </p>
        </div>
        
        <div className="relative mb-10">
          <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll px-1">
            {articles.map((article) => (
              <div key={article.id} className="flex-none w-72 sm:w-80 md:w-96 snap-start">
                <ArticleCard 
                  article={article} 
                  onCardClick={openArticleModal} 
                />
              </div>
            ))}
          </div>
          {/* Indicador de scroll para mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full scroll-indicator">
              ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" onClick={() => scrollToSection('artigos')}>
            {currentLanguage === 'PT' ? 'Ver mais artigos' : 'View more articles'} 
          </Button>
        </div>
      </div>

      {selectedArticle && (
        <Dialog open={!!selectedArticle} onOpenChange={(isOpen) => { if (!isOpen) closeArticleModal(); }}>
          <DialogContent className="w-full max-w-[90vw] sm:max-w-[700px] md:max-w-[800px] max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <DialogHeader>
              <DialogTitle className="text-2xl lg:text-3xl font-serif">{selectedArticle.title}</DialogTitle>
              <div className="text-sm text-muted-foreground mt-1">
                <span>{selectedArticle.date}</span> | <span>{selectedArticle.author}</span>
              </div>
            </DialogHeader>
            <div className="mt-4 text-base text-foreground overflow-y-auto flex-grow pr-2 whitespace-pre-line">
              {selectedArticle.fullContent || selectedArticle.description}
            </div>
            <DialogFooter className="mt-6 pt-4 border-t flex flex-row justify-between items-center">
              {selectedArticle.articleUrl && (
                <Button variant="link" asChild className="p-0 h-auto text-left">
                  <a href={selectedArticle.articleUrl} target="_blank" rel="noopener noreferrer">
                    {currentLanguage === 'PT' ? 'Ler no site original' : 'Read on original site'}
                  </a>
                </Button>
              )}
              <Button variant="outline" onClick={closeArticleModal} className="ml-auto">
                {currentLanguage === 'PT' ? 'Fechar' : 'Close'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

interface ArticleCardProps {
  article: ArticleData;
  onCardClick: (article: ArticleData) => void;
}

function ArticleCard({ article, onCardClick }: ArticleCardProps) {
  return (
    <Card 
      className="transition-all duration-300 hover:shadow-mr-hover hover:-translate-y-1 h-full flex flex-col cursor-pointer bg-mr-bordo shadow-mr"
      onClick={() => onCardClick(article)} 
    >
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-serif font-semibold mb-2 text-white min-h-[3em]">{article.title}</h3>
        <div className="flex justify-between text-sm text-gray-200 mb-3">
          <span>{article.date}</span>
          <span>{article.author}</span>
        </div>
        <p className="text-gray-100 text-sm flex-grow min-h-[5em]">{article.description}</p>
      </CardContent>
    </Card>
  );
}
