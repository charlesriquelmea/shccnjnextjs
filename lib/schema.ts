// JSON-LD Schema Markup for SEO/AEO/GEO optimization

export const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'BuildInN8N - Webinar de Negocios Digitales',
  description: 'Aprende estrategias de crecimiento digital para tu negocio. Webinar en vivo para emprendedores latinos.',
  startDate: '2024-05-15T19:00:00-04:00',
  endDate: '2024-05-15T22:00:00-04:00',
  url: 'https://BuildInN8N.com',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  organizer: {
    '@type': 'Organization',
    name: 'BuildInN8N',
    url: 'https://BuildInN8N.com',
    logo: 'https://BuildInN8N.com/logo.png',
  },
  location: {
    '@type': 'VirtualLocation',
    url: 'https://zoom.us',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://BuildInN8N.com#form',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: '2024-03-01',
    validThrough: '2024-05-15',
  },
  performer: [
    {
      '@type': 'Person',
      name: 'Carlos Mendez',
      sameAs: ['https://linkedin.com'],
    },
    {
      '@type': 'Person',
      name: 'María García',
      sameAs: ['https://linkedin.com'],
    },
    {
      '@type': 'Person',
      name: 'Juan Rodríguez',
      sameAs: ['https://linkedin.com'],
    },
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BuildInN8N',
  url: 'https://BuildInN8N.com',
  logo: 'https://BuildInN8N.com/logo.png',
  description: 'Webinars y entrenamientos para emprendedores latinos',
  sameAs: [
    'https://facebook.com/BuildInN8N',
    'https://instagram.com/BuildInN8N',
    'https://linkedin.com/company/BuildInN8N',
    'https://twitter.com/BuildInN8N',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    contactOption: 'TollFree',
    areaServed: ['US', 'MX', 'ES', 'AR', 'CO', 'PE', 'CL'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '3000',
    reviewCount: '3000',
  },
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://BuildInN8N.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Webinar',
      item: 'https://BuildInN8N.com#detalles',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Registro',
      item: 'https://BuildInN8N.com#form',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Es realmente gratis el webinar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, el acceso al webinar en vivo es completamente gratis para todos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito experiencia previa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, está diseñado para principiantes y emprendedores con cualquier nivel de experiencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué sucede si me pierdo el webinar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si te registras en el plan Premium, tendrás acceso a la grabación en HD durante 6 meses.',
      },
    },
  ],
};

// Helper function to create script tag with JSON-LD
export function createSchemaScript(schema: Record<string, any>): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
