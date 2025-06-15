'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentLanguage } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simular chamada API
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const content = currentLanguage === 'PT' ? {
    title: 'Faça parte da comunidade MRA',
    subtitle: 'Receba insights jurídicos exclusivos, atualizações do mercado e conteúdos especializados diretamente no seu e-mail.',
    placeholder: 'Digite seu melhor e-mail',
    button: 'Inscrever-se',
    loading: 'Inscrevendo...',
    success: 'Inscrição realizada com sucesso!',
    successText: 'Você receberá nosso próximo conteúdo em breve.',
    privacy: 'Respeitamos sua privacidade. Cancele a qualquer momento.'
  } : {
    title: 'Join the MRA community',
    subtitle: 'Receive exclusive legal insights, market updates and specialized content directly in your email.',
    placeholder: 'Enter your best email',
    button: 'Subscribe',
    loading: 'Subscribing...',
    success: 'Successfully subscribed!',
    successText: 'You will receive our next content soon.',
    privacy: 'We respect your privacy. Cancel anytime.'
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-mr-bordo to-red-700 text-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">{content.success}</h3>
        <p className="text-white/90">{content.successText}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-mr-bordo to-red-700 text-white rounded-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{content.title}</h3>
        <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.placeholder}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-white text-mr-bordo font-semibold rounded-xl hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:transform-none"
          >
            {isLoading ? content.loading : content.button}
          </button>
        </div>
      </form>

      <p className="text-center text-white/70 text-sm mt-4">
        {content.privacy}
      </p>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full"></div>
    </div>
  );
} 