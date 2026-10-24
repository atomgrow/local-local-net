// ============================================================
//  Metadatos por página e idioma. Fuente única para:
//  - el hook useSeo (cliente, al navegar)
//  - scripts/prerender-meta.mjs (HTML estático en build, para
//    buscadores y vistas previas de redes que no ejecutan JS).
//  Sin imports: el script de build lo lee directamente con Node.
// ============================================================

export const SITE_URL = 'https://www.locallocal.net'

export const OG_IMAGE = {
  path: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Local Local: relocalización a Tandil',
}

export const PAGES = {
  home: {
    es: {
      path: '/',
      title: 'Local Local | Relocalización en Tandil',
      description:
        'Evaluá, planificá y concretá tu llegada a Tandil con información local, acompañamiento independiente y una red de profesionales cuidadosamente seleccionada.',
    },
    en: {
      path: '/en',
      title: 'Local Local | Relocating to Tandil',
      description:
        'Your move to Tandil, planned with a clear process and trusted local support. Assessment, strategy, and a carefully vetted local network.',
    },
  },
  metodo: {
    es: {
      path: '/metodo',
      title: 'Método | Local Local',
      description:
        'Un proceso paso a paso para convertir la incertidumbre en decisiones estratégicas: diagnóstico personalizado, hoja de ruta y una red local validada.',
    },
    en: {
      path: '/en/metodo',
      title: 'The Local Local Method | Relocating to Tandil',
      description:
        'A step-by-step process for turning uncertainty into strategic decisions: initial assessment, roadmap, and a vetted local network.',
    },
  },
  nosotros: {
    es: {
      path: '/nosotros',
      title: 'Nosotros | Local Local',
      description:
        'Bernardo G. Cisterna, abogado y fundador de Local Local. Criado en Tandil, con experiencia propia en mudanzas y una red profesional local.',
    },
    en: {
      path: '/en/nosotros',
      title: 'About Local Local | Relocating to Tandil',
      description:
        'Bernardo G. Cisterna, lawyer and founder of Local Local. Raised in Tandil, with first-hand experience of relocating and a vetted local network.',
    },
  },
}

// Par de URLs equivalentes (para hreflang).
export function alternatesFor(page) {
  return {
    es: PAGES[page].es.path,
    en: PAGES[page].en.path,
  }
}
