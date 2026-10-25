// ============================================================
//  Metadatos por página e idioma. Fuente única para:
//  - el hook useSeo (cliente, al navegar)
//  - scripts/prerender-meta.mjs (HTML estático y sitemap en build, para
//    buscadores y vistas previas de redes que no ejecutan JS).
//  Solo importa contenido sin dependencias: lo lee Node directamente.
// ============================================================
import { GUIDES } from '../content/guides.js'

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
        'Relocalización en Tandil: evaluá, planificá y concretá tu mudanza con información local, acompañamiento independiente y una red de profesionales seleccionada.',
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
  guias: {
    es: {
      path: '/guias',
      title: 'Guías para mudarte a Tandil | Local Local',
      description:
        'Guías claras para mudarte a Tandil: cómo es vivir acá, qué revisar antes de comprar una propiedad, cómo elegir colegio y cómo trabajar en remoto.',
    },
    en: {
      path: '/en/guides',
      title: 'Guides to Moving to Tandil | Local Local',
      description:
        'Clear guides to moving to Tandil, Argentina: what living here is like, what to check before buying property, how to choose a school and how to work remotely.',
    },
  },
}

// Una página por guía: clave "guide:<id>" (ver src/content/guides.js).
for (const g of GUIDES) {
  PAGES[`guide:${g.id}`] = {
    es: { path: `/guias/${g.slug.es}`, title: g.es.title, description: g.es.description },
    en: { path: `/en/guides/${g.slug.en}`, title: g.en.title, description: g.en.description },
  }
}

// Par de URLs equivalentes (para hreflang).
export function alternatesFor(page) {
  return {
    es: PAGES[page].es.path,
    en: PAGES[page].en.path,
  }
}

// Página (y su idioma) que corresponde a una ruta, o null si no existe.
export function pageByPath(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  for (const [key, langs] of Object.entries(PAGES)) {
    for (const lang of ['es', 'en']) {
      if (langs[lang].path === path) return { key, lang }
    }
  }
  return null
}

// Ruta equivalente en el otro idioma (null si la ruta no es una página conocida).
export function equivalentPath(pathname, targetLang) {
  const hit = pageByPath(pathname)
  return hit ? PAGES[hit.key][targetLang].path : null
}
