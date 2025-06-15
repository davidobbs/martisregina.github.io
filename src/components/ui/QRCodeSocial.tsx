'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function QRCodeSocial() {
  const [activeAction, setActiveAction] = useState<'follow' | 'subscribe' | 'meeting'>('follow');
  const { currentLanguage } = useLanguage();
  const [blocks, setBlocks] = useState<boolean[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 64 }, () => Math.random() > 0.5);
    setBlocks(generated);
  }, []);

  const content = currentLanguage === 'PT' ? {
    title: 'Conecte-se conosco',
    subtitle: 'Escaneie o QR Code para acesso rápido',
    actions: {
      follow: { label: 'Seguir', desc: 'Siga nossas redes sociais' },
      subscribe: { label: 'Inscrever-se', desc: 'Newsletter e conteúdos' },
      meeting: { label: 'Agendar', desc: 'Reunião personalizada' }
    },
    instruction: 'Aponte a câmera do seu celular para o QR Code'
  } : {
    title: 'Connect with us',
    subtitle: 'Scan QR Code for quick access',
    actions: {
      follow: { label: 'Follow', desc: 'Follow our social media' },
      subscribe: { label: 'Subscribe', desc: 'Newsletter and content' },
      meeting: { label: 'Schedule', desc: 'Personalized meeting' }
    },
    instruction: 'Point your phone camera at the QR Code'
  };

  const qrCodes = {
    follow: '/qr-follow.png', // Placeholder - você deve gerar QR codes reais
    subscribe: '/qr-subscribe.png',
    meeting: '/qr-meeting.png'
  };

  const socialLinks = {
    follow: 'https://instagram.com/martinsregina',
    subscribe: 'https://martinsregina.com.br/newsletter',
    meeting: 'https://calendly.com/martinsregina'
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
        <p className="text-gray-600 text-sm">{content.subtitle}</p>
      </div>

      {/* Action Selector */}
      <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
        {(Object.keys(content.actions) as Array<keyof typeof content.actions>).map((action) => (
          <button
            key={action}
            onClick={() => setActiveAction(action)}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all duration-300 ${
              activeAction === action
                ? 'bg-mr-bordo text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {content.actions[action].label}
          </button>
        ))}
      </div>

      {/* QR Code Display */}
      <div className="bg-gray-50 rounded-xl p-6 mb-4 text-center">
        <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
          {/* QR Code Placeholder */}
          <div className="grid grid-cols-8 gap-1">
            {blocks.map((filled, i) => (
              <div key={i} className={`w-1 h-1 ${filled ? 'bg-gray-900' : 'bg-white'}`} />
            ))}
          </div>
        </div>
        
        <h4 className="font-semibold text-gray-900 mb-1">
          {content.actions[activeAction].desc}
        </h4>
        <p className="text-xs text-gray-500">{content.instruction}</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-3">
        <a
          href="https://instagram.com/martinsregina"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        
        <a
          href="https://linkedin.com/company/martinsregina"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 