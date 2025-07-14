import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Martins Regina Advocacia',
    short_name: 'MR Advocacia',
    description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a365d',
    icons: [
      {
        src: '/logo martins regina.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo martins regina.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'professional', 'legal'],
    lang: 'pt-BR',
    orientation: 'portrait-primary',
    scope: '/',
    id: 'martins-regina-advocacia',
  }
} 