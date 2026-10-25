// ============================================================
//  Guías de Local Local: contenido de las páginas /guias y /en/guides.
//  Sin imports: lo leen el sitio y scripts/prerender-meta.mjs.
//
//  Datos verificados al redactar (oct. 2026):
//  - Partido de Tandil: 145.575 habitantes (Censo 2022, INDEC); 123.871 en 2010.
//  - Distancia desde la Ciudad de Buenos Aires: unos 350 km, 4–5 h en auto por
//    las rutas nacionales 3 y 226.
//  - Proceso general de compra de inmuebles en Argentina (boleto, estudio de
//    títulos, informes de dominio e inhibición, escritura e inscripción).
//  No se incluyen cifras de costos, impuestos ni nombres de instituciones: cambian.
//  Bernardo debe revisar las guías antes de publicarlas (sobre todo la de compra).
// ============================================================

export const GUIDES_UPDATED = '2026-10-25'

export const GUIDE_UI = {
  es: {
    kicker: 'Guía',
    indexKicker: 'Guías',
    indexTitle: 'Guías para mudarte a Tandil',
    indexIntro: 'Respuestas claras para decidir y organizar tu mudanza a Tandil: cómo es vivir acá, qué revisar antes de comprar, cómo elegir colegio y cómo trabajar a distancia.',
    readGuide: 'Leer la guía',
    related: 'Otras guías',
    ctaTitle: '¿Querés ordenar tu proyecto?',
    ctaCopy: 'La primera entrevista es remota y dura unos 45 minutos. Después recibís por escrito un diagnóstico y una hoja de ruta.',
    disclaimer: 'Esta guía es informativa y general. No constituye asesoramiento legal, fiscal ni profesional y puede cambiar con el tiempo: consultá tu caso con el profesional correspondiente.',
    updated: 'Actualizada el 25 de octubre de 2026',
    author: 'Por Bernardo G. Cisterna, abogado y fundador de Local Local'
  },
  en: {
    kicker: 'Guide',
    indexKicker: 'Guides',
    indexTitle: 'Guides to moving to Tandil',
    indexIntro: 'Clear answers to help you decide and organize your move to Tandil: what living here is like, what to check before buying, how to choose a school and how to work remotely.',
    readGuide: 'Read the guide',
    related: 'More guides',
    ctaTitle: 'Want to organize your project?',
    ctaCopy: 'The first interview is remote and lasts about 45 minutes. Afterwards you receive a written assessment and a roadmap.',
    disclaimer: 'This guide is general information. It is not legal, tax or professional advice and may change over time: discuss your case with the relevant professional.',
    updated: 'Updated October 25, 2026',
    author: 'By Bernardo G. Cisterna, lawyer and founder of Local Local'
  }
}

// Datos livianos de cada guía (títulos, rutas). El texto completo está en guides-content.js,
// que solo se descarga al abrir una guía.
export const GUIDES = [
  {
    id: 'relocalizacion',
    slug: {
      es: 'relocalizacion-en-tandil',
      en: 'relocating-to-tandil'
    },
    related: [
      'desde-otra-ciudad',
      'vivir-en-tandil',
      'comprar-propiedad'
    ],
    es: {
      title: 'Relocalización en Tandil: guía paso a paso | Local Local',
      h1: 'Relocalización en Tandil: cómo organizar tu mudanza paso a paso',
      description: 'Cómo planificar una relocalización en Tandil: qué definir antes de decidir, cómo explorar a distancia, qué verificar antes de firmar y cómo llegar bien.'
    },
    en: {
      title: 'Relocating to Tandil, Argentina: Step-by-Step Guide | Local Local',
      h1: 'Relocating to Tandil, Argentina: how to organize your move step by step',
      description: 'How to plan a relocation to Tandil: what to define before deciding, how to explore remotely, what to verify before signing and how to arrive well.'
    }
  },
  {
    id: 'desde-otra-ciudad',
    slug: {
      es: 'mudarse-a-tandil-desde-otra-ciudad-o-el-exterior',
      en: 'moving-to-tandil-from-another-city-or-abroad'
    },
    related: [
      'relocalizacion',
      'trabajo-remoto',
      'colegios'
    ],
    es: {
      title: 'Mudarte a Tandil desde otra ciudad o el exterior | Local Local',
      h1: 'Relocalización en Argentina: cómo mudarte a Tandil desde otra ciudad o desde el exterior',
      description: 'Distancia, logística y primeros pasos para mudarte a Tandil desde Buenos Aires, otras provincias o el exterior, y cómo coordinar a distancia sin viajar de más.'
    },
    en: {
      title: 'Moving to Tandil from Another City or Abroad | Local Local',
      h1: 'Relocating within Argentina: how to move to Tandil from another city or from abroad',
      description: 'Distance, logistics and first steps for moving to Tandil from Buenos Aires, other provinces or abroad, and how to coordinate remotely without over-traveling.'
    }
  },
  {
    id: 'vivir-en-tandil',
    slug: {
      es: 'como-es-vivir-en-tandil',
      en: 'living-in-tandil'
    },
    related: [
      'relocalizacion',
      'colegios',
      'trabajo-remoto'
    ],
    es: {
      title: 'Cómo es vivir en Tandil: ritmo, servicios y economía | Local Local',
      h1: 'Cómo es vivir en Tandil: ritmo, servicios y para quién conviene',
      description: 'Qué esperar de la vida en Tandil: escala de ciudad, servicios, economía diversa, naturaleza cercana y las preguntas que conviene hacerse antes de mudarte.'
    },
    en: {
      title: 'What Is It Like to Live in Tandil? Pace, Services and Economy | Local Local',
      h1: 'What it is like to live in Tandil: pace, services and who it suits',
      description: 'What to expect from life in Tandil: city scale, services, a diverse economy, nearby nature and the questions worth asking before you move.'
    }
  },
  {
    id: 'comprar-propiedad',
    slug: {
      es: 'que-revisar-antes-de-comprar-una-propiedad-en-tandil',
      en: 'buying-property-in-tandil-what-to-check'
    },
    related: [
      'relocalizacion',
      'desde-otra-ciudad',
      'vivir-en-tandil'
    ],
    es: {
      title: 'Qué revisar antes de comprar una propiedad en Tandil | Local Local',
      h1: 'Qué revisar antes de comprar una propiedad en Tandil',
      description: 'Guía general de los aspectos legales y técnicos que conviene revisar antes de firmar el boleto o escriturar una propiedad en Tandil. Información general, no asesoramiento.'
    },
    en: {
      title: 'What to Check Before Buying Property in Tandil | Local Local',
      h1: 'What to check before buying property in Tandil',
      description: 'A general guide to the legal and technical points worth reviewing before signing the preliminary contract or closing a property purchase in Tandil. General information, not advice.'
    }
  },
  {
    id: 'colegios',
    slug: {
      es: 'colegios-en-tandil-como-elegir',
      en: 'schools-in-tandil-how-to-choose'
    },
    related: [
      'vivir-en-tandil',
      'relocalizacion',
      'desde-otra-ciudad'
    ],
    es: {
      title: 'Colegios en Tandil: cómo elegir y cuándo empezar | Local Local',
      h1: 'Colegios en Tandil: cómo elegir y cuándo empezar a buscar',
      description: 'Criterios para elegir colegio en Tandil si te mudás con hijos: qué comparar, cuándo contactar a las instituciones y cómo coordinarlo con la vivienda.'
    },
    en: {
      title: 'Schools in Tandil: How to Choose and When to Start | Local Local',
      h1: 'Schools in Tandil: how to choose and when to start looking',
      description: 'Criteria for choosing a school in Tandil if you are moving with children: what to compare, when to contact institutions and how to coordinate it with housing.'
    }
  },
  {
    id: 'trabajo-remoto',
    slug: {
      es: 'trabajar-en-remoto-desde-tandil',
      en: 'working-remotely-from-tandil'
    },
    related: [
      'vivir-en-tandil',
      'desde-otra-ciudad',
      'relocalizacion'
    ],
    es: {
      title: 'Trabajar en remoto desde Tandil | Local Local',
      h1: 'Trabajar en remoto desde Tandil: conectividad, comunidad y organización',
      description: 'Qué verificar si vas a trabajar en remoto desde Tandil: internet en tu dirección exacta, espacios y comunidad, viajes a Buenos Aires y cómo armar tu presupuesto.'
    },
    en: {
      title: 'Working Remotely from Tandil | Local Local',
      h1: 'Working remotely from Tandil: connectivity, community and organization',
      description: 'What to verify if you will work remotely from Tandil: internet at your exact address, spaces and community, trips to Buenos Aires and how to build your budget.'
    }
  }
]
