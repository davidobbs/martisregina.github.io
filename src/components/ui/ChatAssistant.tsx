'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();

  const content = currentLanguage === 'PT' ? {
    title: 'Assistente MRA',
    subtitle: 'Como posso ajudá-lo hoje?',
    placeholder: 'Digite sua mensagem...',
    send: 'Enviar',
    close: 'Fechar',
    initialMessage: 'Olá! Sou o assistente virtual da Martins Regina Advocacia. Como posso ajudá-lo hoje?',
    typing: 'Digitando...',
    options: [
      'Áreas de atuação',
      'Agendar consulta',
      'Sobre o escritório',
      'Contato',
      'Localização'
    ]
  } : {
    title: 'MRA Assistant',
    subtitle: 'How can I help you today?',
    placeholder: 'Type your message...',
    send: 'Send',
    close: 'Close',
    initialMessage: 'Hello! I am the virtual assistant of Martins Regina Advocacia. How can I help you today?',
    typing: 'Typing...',
    options: [
      'Practice areas',
      'Schedule consultation',
      'About the firm',
      'Contact',
      'Location'
    ]
  };

  const responses = currentLanguage === 'PT' ? {
    'áreas de atuação': {
      text: 'Atuamos em diversas áreas jurídicas:\n\n🏢 **Pessoa Jurídica:**\n• Direito Empresarial\n• Contratos\n• Fusões e Aquisições\n• Direito Tributário\n• Direito Trabalhista\n\n👥 **Pessoa Física:**\n• Planejamento Sucessório\n• Direito de Família\n• Direito Imobiliário\n• Direito Previdenciário\n\nGostaria de saber mais sobre alguma área específica?',
      options: ['Direito Empresarial', 'Planejamento Sucessório', 'Agendar consulta']
    },
    'agendar consulta': {
      text: 'Perfeito! Para agendar uma consulta, você pode:\n\n📞 **Ligar:** (11) 99999-9999\n📧 **E-mail:** contato@martinsregina.com.br\n💬 **WhatsApp:** Clique no botão flutuante\n\nNossa equipe entrará em contato para agendar o melhor horário para você. A primeira consulta é gratuita!',
      options: ['Áreas de atuação', 'Sobre o escritório']
    },
    'sobre o escritório': {
      text: '🏆 **Martins Regina Advocacia - 30 Anos de Excelência**\n\n• Fundado em 1994\n• Mais de 1000 clientes atendidos\n• 14 escritórios pelo mundo\n• Especializados em Planejamento Patrimonial e Direito Empresarial\n• Reconhecido por principais rankings jurídicos\n\nNossa missão é oferecer soluções jurídicas inovadoras com excelência técnica.',
      options: ['Áreas de atuação', 'Agendar consulta', 'Contato']
    },
    'contato': {
      text: '📍 **Entre em contato conosco:**\n\n🏢 **Escritório Principal:**\nAv. Paulista, 1000 - São Paulo/SP\n\n📞 **Telefone:** (11) 99999-9999\n📧 **E-mail:** contato@martinsregina.com.br\n🌐 **Site:** www.martinsregina.com.br\n\n**Redes Sociais:**\n• Instagram: @martinsregina\n• LinkedIn: Martins Regina Advocacia',
      options: ['Agendar consulta', 'Localização']
    },
    'localização': {
      text: '📍 **Nossos Escritórios:**\n\n🇧🇷 **Brasil:**\n• São Paulo (Principal)\n• Rio de Janeiro\n• Brasília\n• Belo Horizonte\n\n🌍 **Internacional:**\n• Nova York\n• Londres\n• Dubai\n• Portugal\n\nEstamos presentes em 14 localidades para melhor atendê-lo.',
      options: ['Contato', 'Agendar consulta']
    },
    'direito empresarial': {
      text: '🏢 **Direito Empresarial - Nossa Especialidade**\n\n• Constituição de empresas\n• Governança corporativa\n• Compliance empresarial\n• Reestruturações societárias\n• Contratos empresariais\n• Fusões e aquisições\n\nContamos com equipe especializada para empresas de todos os portes.',
      options: ['Agendar consulta', 'Outras áreas']
    },
    'planejamento sucessório': {
      text: '👨‍👩‍👧‍👦 **Planejamento Sucessório**\n\n• Estruturação de heranças\n• Holdings familiares\n• Blindagem patrimonial\n• Testamentos\n• Inventários\n• Doações estratégicas\n\nProtegemos seu patrimônio e sua família com eficiência tributária.',
      options: ['Agendar consulta', 'Outras áreas']
    }
  } : {
    'practice areas': {
      text: 'We operate in various legal areas:\n\n🏢 **Corporate:**\n• Corporate Law\n• Contracts\n• M&A\n• Tax Law\n• Labor Law\n\n👥 **Individuals:**\n• Estate Planning\n• Family Law\n• Real Estate\n• Social Security\n\nWould you like to know more about any specific area?',
      options: ['Corporate Law', 'Estate Planning', 'Schedule consultation']
    },
    'schedule consultation': {
      text: 'Perfect! To schedule a consultation, you can:\n\n📞 **Call:** (11) 99999-9999\n📧 **Email:** contato@martinsregina.com.br\n💬 **WhatsApp:** Click the floating button\n\nOur team will contact you to schedule the best time. First consultation is free!',
      options: ['Practice areas', 'About the firm']
    },
    'about the firm': {
      text: '🏆 **Martins Regina Advocacia - 30 Years of Excellence**\n\n• Founded in 1994\n• Over 1000 clients served\n• 14 offices worldwide\n• Specialized in Asset Planning and Corporate Law\n• Recognized by major legal rankings\n\nOur mission is to offer innovative legal solutions with technical excellence.',
      options: ['Practice areas', 'Schedule consultation', 'Contact']
    },
    'contact': {
      text: '📍 **Contact us:**\n\n🏢 **Main Office:**\nAv. Paulista, 1000 - São Paulo/SP\n\n📞 **Phone:** (11) 99999-9999\n📧 **Email:** contato@martinsregina.com.br\n🌐 **Website:** www.martinsregina.com.br\n\n**Social Media:**\n• Instagram: @martinsregina\n• LinkedIn: Martins Regina Advocacia',
      options: ['Schedule consultation', 'Location']
    },
    'location': {
      text: '📍 **Our Offices:**\n\n🇧🇷 **Brazil:**\n• São Paulo (Main)\n• Rio de Janeiro\n• Brasília\n• Belo Horizonte\n\n🌍 **International:**\n• New York\n• London\n• Dubai\n• Portugal\n\nWe are present in 14 locations to better serve you.',
      options: ['Contact', 'Schedule consultation']
    },
    'corporate law': {
      text: '🏢 **Corporate Law - Our Specialty**\n\n• Company incorporation\n• Corporate governance\n• Business compliance\n• Corporate restructuring\n• Business contracts\n• Mergers & acquisitions\n\nWe have a specialized team for companies of all sizes.',
      options: ['Schedule consultation', 'Other areas']
    },
    'estate planning': {
      text: '👨‍👩‍👧‍👦 **Estate Planning**\n\n• Inheritance structuring\n• Family holdings\n• Asset protection\n• Wills\n• Probate\n• Strategic donations\n\nWe protect your assets and family with tax efficiency.',
      options: ['Schedule consultation', 'Other areas']
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: Date.now().toString(),
        text: content.initialMessage,
        isBot: true,
        timestamp: new Date(),
        options: content.options
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length, content.initialMessage, content.options]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    addMessage(text, false);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const userInput = text.toLowerCase();
      let response = responses[userInput as keyof typeof responses];

      if (!response) {
        // Try to find partial matches
        const keys = Object.keys(responses);
        const matchingKey = keys.find(key => 
          userInput.includes(key) || key.includes(userInput)
        );
        
        if (matchingKey) {
          response = responses[matchingKey as keyof typeof responses];
        }
      }

      if (response) {
        addMessage(response.text, true, response.options);
      } else {
        const defaultResponse = currentLanguage === 'PT' 
          ? 'Desculpe, não entendi sua pergunta. Você pode escolher uma das opções abaixo ou entrar em contato diretamente conosco através do telefone (11) 99999-9999.'
          : 'Sorry, I didn\'t understand your question. You can choose one of the options below or contact us directly at (11) 99999-9999.';
        
        addMessage(defaultResponse, true, content.options);
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-mr-bordo to-red-700 text-white rounded-full shadow-2xl hover:shadow-mr-bordo/25 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
        >
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 rounded-full"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-mr-bordo to-red-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{content.title}</h3>
                <p className="text-white/80 text-sm">{content.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'bg-mr-bordo text-white'
                }`}>
                  <div className="whitespace-pre-line text-sm">{message.text}</div>
                  
                  {/* Options */}
                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="bg-white text-mr-bordo px-3 py-1 rounded-full text-xs font-medium hover:bg-mr-bordo hover:text-white transition-colors duration-200 border border-mr-bordo"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-2xl p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">{content.typing}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="flex space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={content.placeholder}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-mr-bordo focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="bg-mr-bordo text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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