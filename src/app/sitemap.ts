import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://martinsregina.com.br'
  
  // URLs estáticas principais
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas-atuacao`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/artigos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // URLs das áreas de atuação
  const practiceAreas = [
    'planejamento-patrimonial',
    'direito-empresarial',
    'contratos',
    'direito-medico',
    'direito-imobiliario',
    'direito-familia-sucessoes'
  ]

  const practiceAreaUrls = practiceAreas.map(area => ({
    url: `${baseUrl}/areas-atuacao/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // URLs dos escritórios
  const offices = [
    'rio-de-janeiro',
    'sao-paulo',
    'campinas',
    'joinville',
    'porto'
  ]

  const officeUrls = offices.map(office => ({
    url: `${baseUrl}/escritorios/${office}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticUrls,
    ...practiceAreaUrls,
    ...officeUrls,
  ]
} 