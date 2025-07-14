'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { currentLanguage } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const content = currentLanguage === 'PT' ? {
    phoneRJ: 'Telefone RJ',
    phoneSP: 'Telefone SP',
    email: 'E-mail',
    responseTime: 'Resposta em até 24h',
    fullName: 'Nome Completo',
    emailLabel: 'E-mail',
    phone: 'Telefone',
    message: 'Mensagem',
    emailPlaceholder: 'seu@email.com',
    phonePlaceholder: '(11) 99999-9999',
    messagePlaceholder: 'Conte-nos como podemos ajudar...',
    sendMessage: 'Enviar Mensagem',
    messageSent: 'Mensagem Enviada!',
    thankYou: 'Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.',
    sendNew: 'Enviar Nova Mensagem'
  } : {
    phoneRJ: 'Phone RJ',
    phoneSP: 'Phone SP',
    email: 'Email',
    responseTime: 'Response within 24h',
    fullName: 'Full Name',
    emailLabel: 'Email',
    phone: 'Phone',
    message: 'Message',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+1 (555) 123-4567',
    messagePlaceholder: 'Tell us how we can help...',
    sendMessage: 'Send Message',
    messageSent: 'Message Sent!',
    thankYou: 'Thank you for your message! Our team will get back to you soon.',
    sendNew: 'Send New Message'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contato');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-mr-black to-mr-bordo">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-2 mb-8 border border-white/20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              {currentLanguage === 'PT' ? 'Fale Conosco' : 'Contact Us'}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {currentLanguage === 'PT' ? (
              <>
                <span className="block text-white/90">Vamos</span>
                <span className="text-mr-gold">Conversar?</span>
              </>
            ) : (
              <>
                <span className="block text-white/90">Let's</span>
                <span className="text-mr-gold">Connect?</span>
              </>
            )}
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-white/90 leading-relaxed font-light">
            {currentLanguage === 'PT'
              ? 'Estamos prontos para ouvir você. Entre em contato e descubra como podemos ajudar com suas necessidades jurídicas.'
              : 'We are ready to listen to you. Get in touch and discover how we can help with your legal needs.'}
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Formulário de Contato */}
              <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl">
                <CardContent className="p-0">
                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="p-8 md:p-12">
                      <div className="space-y-6 mb-8">
                        <div className="group">
                          <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-mr-bordo transition-colors">
                            {content.fullName}
                          </Label>
                          <div className="relative">
                            <Input 
                              id="name" 
                              name="name" 
                              placeholder={currentLanguage === 'PT' ? 'Digite seu nome' : 'Enter your name'} 
                              required 
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-mr-bordo focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/80"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mr-bordo/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        </div>

                        <div className="group">
                          <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-mr-bordo transition-colors">
                            {content.emailLabel}
                          </Label>
                          <div className="relative">
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              placeholder={content.emailPlaceholder} 
                              required 
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-mr-bordo focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/80"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mr-bordo/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        </div>

                        <div className="group">
                          <Label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-mr-bordo transition-colors">
                            {content.phone}
                          </Label>
                          <div className="relative">
                            <Input 
                              id="phone" 
                              name="phone" 
                              placeholder={currentLanguage === 'PT' ? '(00) 00000-0000' : '(00) 00000-0000'} 
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-mr-bordo focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/80"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mr-bordo/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="group h-full">
                          <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-mr-bordo transition-colors">
                            {content.message}
                          </Label>
                          <div className="relative h-full">
                            <Textarea 
                              id="message" 
                              name="message" 
                                                              placeholder={content.messagePlaceholder} 
                              rows={6} 
                              required 
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full h-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-mr-bordo focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/80 resize-none"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mr-bordo/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        </div>
                      </div>


                      
                      <div className="text-center">
                        <Button 
                          type="submit" 
                          className="group relative px-12 py-4 bg-gradient-to-r from-mr-bordo via-red-700 to-mr-bordo text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-mr-bordo to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <span className="relative flex items-center justify-center gap-3 text-lg">
                            {content.sendMessage}
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </span>
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="p-12 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                        {content.messageSent}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                        {content.thankYou}
                      </p>
                      <div className="mt-8">
                        <Button 
                          onClick={() => setFormSubmitted(false)}
                          className="px-8 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl transition-colors"
                        >
                          {content.sendNew}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Informações de Contato */}
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                    {currentLanguage === 'PT' ? 'Contato Direto' : 'Direct Contact'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {currentLanguage === 'PT' ? 'Fale conosco agora mesmo' : 'Contact us right now'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* WhatsApp Campinas */}
                  <a 
                    href="https://wa.me/5519991866133" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp Campinas</p>
                      <p className="text-green-600 font-medium">+55 19 99186-6133</p>
                      <p className="text-xs text-gray-500">Campinas/SP</p>
                    </div>
                  </a>

                  {/* WhatsApp RJ */}
                  <a 
                    href="https://wa.me/5521995227018" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp RJ</p>
                      <p className="text-green-600 font-medium">+55 21 99522-7018</p>
                      <p className="text-xs text-gray-500">Rio de Janeiro/RJ</p>
                    </div>
                  </a>

                  {/* Telefone Rio de Janeiro */}
                  <div className="flex items-center p-4 bg-mr-bordo/5 rounded-xl">
                    <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                      <PhoneIcon className="w-6 h-6 text-mr-bordo" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{content.phoneRJ}</p>
                      <p className="text-mr-bordo font-medium">+55 21 2532-7311</p>
                      <p className="text-xs text-gray-500">Rio de Janeiro/RJ</p>
                    </div>
                  </div>

                  {/* Telefone São Paulo */}
                  <div className="flex items-center p-4 bg-mr-bordo/5 rounded-xl">
                    <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                      <PhoneIcon className="w-6 h-6 text-mr-bordo" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{content.phoneSP}</p>
                      <p className="text-mr-bordo font-medium">+55 11 5504-1962</p>
                      <p className="text-xs text-gray-500">São Paulo/SP</p>
                    </div>
                  </div>

                  {/* Email */}
                  <a 
                    href="mailto:contato@martinsregina.com" 
                    className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <EmailIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{content.email}</p>
                      <p className="text-blue-600 font-medium">contato@martinsregina.com</p>
                      <p className="text-xs text-gray-500">
                        {content.responseTime}
                      </p>
                    </div>
                  </a>
                </div>
              </Card>
            </div>

            {/* Seção de Escritórios com Mapas */}
            <div className={`transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  {currentLanguage === 'PT' ? 'Nossos Escritórios' : 'Our Offices'}
                </h3>
                <p className="text-xl text-gray-600">
                  {currentLanguage === 'PT' ? 'Encontre o escritório mais próximo de você' : 'Find the office closest to you'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Campinas */}
                <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                          <MapIcon className="w-6 h-6 text-mr-bordo" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">Campinas/SP</h4>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed mb-4">
                        <p>Rua Avelino Silveira Franco 149, sala 352</p>
                        <p>Condomínio L'Office, Ville Sainte Hélène</p>
                        <p>CEP 13105-822</p>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Rua+Avelino+Silveira+Franco+149,+sala+352,+Campinas,+SP,+13105-822" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-mr-bordo text-white rounded-lg hover:bg-red-800 transition-colors group-hover:scale-105 transform duration-300"
                      >
                        <MapIcon className="w-4 h-4 mr-2" />
                        {currentLanguage === 'PT' ? 'Ver no Mapa' : 'View on Map'}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Rio de Janeiro */}
                <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                          <MapIcon className="w-6 h-6 text-mr-bordo" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">Rio de Janeiro/RJ</h4>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed mb-4">
                        <p>Av. das Américas 8.585, sala 339</p>
                        <p>Shopping Vogue Square, Setor Offices</p>
                        <p>Barra da Tijuca, CEP 22793-081</p>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Av.+das+Américas+8585,+sala+339,+Barra+da+Tijuca,+Rio+de+Janeiro,+RJ,+22793-081" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-mr-bordo text-white rounded-lg hover:bg-red-800 transition-colors group-hover:scale-105 transform duration-300"
                      >
                        <MapIcon className="w-4 h-4 mr-2" />
                        {currentLanguage === 'PT' ? 'Ver no Mapa' : 'View on Map'}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* São Paulo */}
                <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                          <MapIcon className="w-6 h-6 text-mr-bordo" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">São Paulo/SP</h4>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed mb-4">
                        <p>CEMG - Centro Empresarial Mario Garnero</p>
                        <p>Av. Brigadeiro Faria Lima 1.461, 4º andar</p>
                        <p>Jardim Paulistano, CEP 01452-921</p>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima+1461,+4º+andar,+Jardim+Paulistano,+São+Paulo,+SP,+01452-921" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-mr-bordo text-white rounded-lg hover:bg-red-800 transition-colors group-hover:scale-105 transform duration-300"
                      >
                        <MapIcon className="w-4 h-4 mr-2" />
                        {currentLanguage === 'PT' ? 'Ver no Mapa' : 'View on Map'}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Joinville */}
                <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                          <MapIcon className="w-6 h-6 text-mr-bordo" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">Joinville/SC</h4>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed mb-4">
                        <p>Ed. Helbor Dual</p>
                        <p>Rua Expedicionário Holz 550, sala 1.301</p>
                        <p>América, CEP 89201-740</p>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Rua+Expedicionário+Holz+550,+sala+1301,+América,+Joinville,+SC,+89201-740" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-mr-bordo text-white rounded-lg hover:bg-red-800 transition-colors group-hover:scale-105 transform duration-300"
                      >
                        <MapIcon className="w-4 h-4 mr-2" />
                        {currentLanguage === 'PT' ? 'Ver no Mapa' : 'View on Map'}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Porto/Portugal */}
                <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center mr-4">
                          <MapIcon className="w-6 h-6 text-mr-bordo" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">Porto/Portugal</h4>
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed mb-4">
                        <p>Shopping Brasília, Loja 8B</p>
                        <p>1ª Cave</p>
                        <p>Praça de Mouzinho de Albuquerque 113</p>
                        <p>CP 4100-359</p>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=Praça+de+Mouzinho+de+Albuquerque+113,+4100-359+Porto,+Portugal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-mr-bordo text-white rounded-lg hover:bg-red-800 transition-colors group-hover:scale-105 transform duration-300"
                      >
                        <MapIcon className="w-4 h-4 mr-2" />
                        {currentLanguage === 'PT' ? 'Ver no Mapa' : 'View on Map'}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-mr-bordo`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-gray-700`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  );
}

function EmailIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-mr-bordo`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MapIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
} 