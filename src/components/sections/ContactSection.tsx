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
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 bg-mr-bordo rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-mr-bordo/60 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mr-bordo/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-mr-bordo/10 rounded-full px-6 py-3 mb-6 border border-mr-bordo/20">
            <div className="w-2 h-2 bg-mr-bordo rounded-full animate-pulse"></div>
            <span className="text-mr-bordo text-sm font-semibold tracking-wide uppercase">
              {currentLanguage === 'PT' ? 'Entre em Contato' : 'Get in Touch'}
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            <span className="block mb-2">
              {currentLanguage === 'PT' ? 'Vamos' : "Let's"}
            </span>
            <span className="text-mr-bordo">
              {currentLanguage === 'PT' ? 'Conversar' : 'Talk'}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            {currentLanguage === 'PT'
              ? 'Entre em contato conosco para agendar uma consulta ou obter mais informações sobre nossos serviços jurídicos especializados.'
              : 'Contact us to schedule a consultation or get more information about our specialized legal services.'}
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-mr-bordo to-red-600 rounded-full"></div>
            <div className="w-8 h-1 bg-mr-bordo/40 rounded-full"></div>
            <div className="w-4 h-1 bg-mr-bordo/20 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700 font-medium">
                            {currentLanguage === 'PT' ? 'Nome Completo' : 'Full Name'}
                          </Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder={currentLanguage === 'PT' ? 'Seu nome completo' : 'Your full name'} 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-mr-bordo focus:ring-mr-bordo/20 transition-all duration-300"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            {currentLanguage === 'PT' ? 'Telefone' : 'Phone'}
                          </Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            placeholder={currentLanguage === 'PT' ? '(00) 00000-0000' : '(00) 00000-0000'} 
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-mr-bordo focus:ring-mr-bordo/20 transition-all duration-300"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          {currentLanguage === 'PT' ? 'E-mail' : 'Email'}
                        </Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder={currentLanguage === 'PT' ? 'seu.email@exemplo.com' : 'your.email@example.com'} 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          className="border-gray-200 focus:border-mr-bordo focus:ring-mr-bordo/20 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          {currentLanguage === 'PT' ? 'Mensagem' : 'Message'}
                        </Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder={currentLanguage === 'PT' ? 'Como podemos ajudar? Conte-nos sobre sua necessidade jurídica...' : 'How can we help? Tell us about your legal needs...'} 
                          rows={6} 
                          required 
                          value={formData.message}
                          onChange={handleChange}
                          className="border-gray-200 focus:border-mr-bordo focus:ring-mr-bordo/20 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full mt-8 bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      <span className="flex items-center justify-center gap-3">
                        {currentLanguage === 'PT' ? 'Enviar mensagem' : 'Send message'}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    </Button>
                  </form>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                      {currentLanguage === 'PT' ? 'Mensagem enviada!' : 'Message sent!'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {currentLanguage === 'PT'
                        ? 'Obrigado pelo seu contato. Nossa equipe analisará sua solicitação e retornará em breve.'
                        : 'Thank you for your message. Our team will review your request and get back to you soon.'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                {currentLanguage === 'PT' ? 'Informações de Contato' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<PhoneIcon />}
                  label={currentLanguage === 'PT' ? 'Telefone' : 'Phone'} 
                  value={
                    <>
                      Rio de Janeiro: +55 21 2532-7311<br />
                      São Paulo: +55 11 5504-1962
                    </>
                  } 
                />
                
                <ContactItem 
                  icon={<WhatsAppIcon />}
                  label="WhatsApp" 
                  value={[
                    { display: "Rio de Janeiro: +55 21 98777-1186", number: "5521987771186" },
                    { display: "Campinas: +55 19 9.9186-6133", number: "5519991866133" },
                    { display: "Portugal: +351 913 049 169", number: "351913049169" }
                  ]}
                />
                
                <ContactItem 
                  icon={<EmailIcon />}
                  label={currentLanguage === 'PT' ? 'E-mail' : 'Email'} 
                  value="contato@martinsregina.com" 
                />
              </div>
            </div>
            
            {/* Office Hours */}
            <Card className="p-6 bg-gradient-to-br from-mr-bordo/5 to-red-50/50 border border-mr-bordo/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mr-bordo/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-mr-bordo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                    {currentLanguage === 'PT' ? 'Horário de Atendimento' : 'Office Hours'}
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{currentLanguage === 'PT' ? 'Segunda a Sexta:' : 'Monday to Friday:'}</span>
                      <span className="font-medium">9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{currentLanguage === 'PT' ? 'Fins de semana:' : 'Weekends:'}</span>
                      <span className="font-medium">{currentLanguage === 'PT' ? 'Fechado' : 'Closed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:+552125327311"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-mr-bordo hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-mr-bordo/10 rounded-lg flex items-center justify-center group-hover:bg-mr-bordo/20 transition-colors duration-300">
                  <PhoneIcon className="w-5 h-5 text-mr-bordo" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {currentLanguage === 'PT' ? 'Ligar agora' : 'Call now'}
                  </div>
                  <div className="text-sm text-gray-500">+55 21 2532-7311</div>
                </div>
              </a>

              <a 
                href="https://wa.me/5521987771186"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <WhatsAppIcon className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-500">
                    {currentLanguage === 'PT' ? 'Mensagem rápida' : 'Quick message'}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon Components
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

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode | Array<{ display: string; number: string }>;
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-mr-bordo/30 hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 bg-mr-bordo/10 rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-gray-900 mb-1">{label}</div>
        <div className="text-gray-600">
          {label === "WhatsApp" && Array.isArray(value)
            ? value.map((item, index) => (
                <React.Fragment key={index}>
                  <a
                    href={`https://wa.me/${item.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-mr-bordo transition-colors duration-300"
                  >
                    {item.display}
                  </a>
                  {index < value.length - 1 && <br />}
                </React.Fragment>
              ))
            : (value as React.ReactNode)}
        </div>
      </div>
    </div>
  );
}
