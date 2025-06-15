# Martins Regina Advocacia - Site Reformulado

## 🎯 Visão Geral

Site moderno e responsivo para o escritório de advocacia Martins Regina, desenvolvido com Next.js 13, TypeScript e Tailwind CSS. O projeto foi reformulado baseado em referências de sites de escritórios de advocacia de renome internacional.

## ✨ Melhorias Implementadas

### 1. **Barra de Informações Rolante**
- Inspirada no site lickslegal.com
- Exibe informações importantes como 30 anos de experiência, número de clientes, etc.
- Animação suave e contínua
- Conteúdo bilíngue (PT/EN)

### 2. **Seção de Premiações e 30 Anos**
- Destaque especial para os 30 anos do escritório em 2024
- Inspirada no rgbhadvogados.com.br
- Cards de estatísticas animados
- Grid de premiações recentes
- Design elegante com gradientes

### 3. **Áreas de Atuação Reformuladas**
- Design limpo sem símbolos (conforme solicitado)
- Divisão clara entre Pessoa Física (PF) e Pessoa Jurídica (PJ)
- Navegação por abas
- Cards hover interativos
- Tags de especialidades

### 4. **Newsletter Moderna**
- Componente "Faça parte da comunidade MRA"
- Design atrativo com gradientes
- Formulário de inscrição responsivo
- Estados de loading e sucesso
- Validação de email

### 5. **QR Code para Redes Sociais**
- QR Code interativo para diferentes ações:
  - Seguir redes sociais
  - Inscrever-se na newsletter
  - Agendar reunião
- Design moderno com seletor de ações
- Links diretos para Instagram, LinkedIn e WhatsApp

### 6. **Header Melhorado**
- Barra superior fixa para mobile com contatos e redes sociais
- Navegação melhorada
- Progress bar de scroll
- Menu mobile redesenhado
- Animações suaves

### 7. **Chat Assistant**
- Assistente virtual para auxiliar visitantes
- Respostas pré-definidas sobre o escritório
- Interface de chat moderna e responsiva
- Suporte bilíngue (PT/EN)
- Botões de ação rápida
- Direcionamento para agendamento e contato

### 8. **SEO e Performance**
- Componentes otimizados
- Lazy loading de imagens
- Meta tags estruturadas
- Sitemap automático

## 🚀 Tecnologias Utilizadas

- **Next.js 13** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **React Hooks** - Gerenciamento de estado

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🎨 Design System

### Cores Principais
- **MR Bordô**: `#8B0000` - Cor principal da marca
- **Gradientes**: Transições suaves entre bordô e vermelho
- **Tons de Cinza**: Para textos e backgrounds neutros

### Tipografia
- **Serif**: Playfair Display (cabeçalhos)
- **Sans-serif**: Inter (corpo do texto)

### Componentes
- Cards com hover effects
- Botões com gradientes e animações
- Formulários com estados visuais
- Chat interface moderna
- Modais e overlays

## 🌍 Internacionalização

O site suporta dois idiomas:
- **Português (PT)** - Idioma padrão
- **Inglês (EN)** - Idioma alternativo

Troca de idioma através do botão no header.

## 📋 Funcionalidades Principais

### 1. **Navegação Inteligente**
- Scroll suave entre seções
- Indicador de seção ativa
- Menu mobile otimizado

### 2. **Chat Assistant**
- Assistente virtual disponível 24/7
- Respostas automáticas para perguntas frequentes
- Direcionamento para agendamento
- Informações sobre áreas de atuação
- Dados de contato e localização

### 3. **Formulários Interativos**
- Newsletter com validação
- Contato com campos estruturados
- Estados de loading e sucesso

### 4. **Conectividade Social**
- QR Code dinâmico
- Links diretos para redes sociais
- Integração com WhatsApp

### 5. **Área de Conteúdo**
- Blog/Artigos jurídicos
- Casos de sucesso
- Reconhecimentos e premiações

## 🔧 Como Executar

1. **Instalação das dependências:**
```bash
npm install
```

2. **Executar em desenvolvimento:**
```bash
npm run dev
```

3. **Build para produção:**
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13)
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   └── Footer.tsx     # Rodapé
│   ├── sections/          # Seções da página
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── NewPracticeAreasSection.tsx
│   │   ├── AwardsSection.tsx
│   │   └── ...
│   └── ui/                # Componentes reutilizáveis
│       ├── InfoScrollBar.tsx
│       ├── Newsletter.tsx
│       ├── QRCodeSocial.tsx
│       ├── ChatAssistant.tsx
│       └── ...
├── context/               # Contextos React
│   └── LanguageContext.tsx
└── css/                   # Estilos globais
```

## 🤖 Chat Assistant

O assistente virtual oferece suporte automático aos visitantes com:

### Funcionalidades:
- **Respostas Automáticas** para perguntas frequentes
- **Informações sobre Áreas de Atuação** (PF e PJ)
- **Dados de Contato** e localização dos escritórios
- **Agendamento de Consultas** com direcionamento
- **Suporte Bilíngue** (Português e Inglês)

### Como Funciona:
1. Botão flutuante sempre visível no canto inferior direito
2. Interface de chat moderna e intuitiva
3. Botões de ação rápida para facilitar a navegação
4. Respostas baseadas em script pré-definido
5. Direcionamento para contato humano quando necessário

## 🎯 Próximos Passos

### Implementações Sugeridas:

1. **Aprimoramento do Chat**
   - Integração com WhatsApp Business API
   - Sistema de tickets automático
   - Agendamento integrado com calendário

2. **Blog Jurídico**
   - CMS integrado
   - Categorização de artigos
   - Sistema de busca

3. **Portal do Cliente**
   - Login seguro
   - Acompanhamento de processos
   - Documentos online

4. **Analytics Avançado**
   - Google Analytics 4
   - Heatmaps
   - Conversion tracking
   - Métricas do chat assistant

## 📞 Contato

**Martins Regina Advocacia**
- 📧 contato@martinsregina.com.br
- 📱 (11) 99999-9999
- 🌐 www.martinsregina.com.br

## 📄 Licença

Este projeto é propriedade da Martins Regina Advocacia. Todos os direitos reservados.

---

*Desenvolvido com ❤️ para proporcionar a melhor experiência digital aos clientes da Martins Regina Advocacia.* # advocacia
