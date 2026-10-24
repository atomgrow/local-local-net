// Genera, después de `vite build`:
//  - dist/<ruta>/index.html con título, descripción, canonical, hreflang, Open Graph
//    y datos estructurados (JSON-LD) de cada página e idioma. Vercel sirve estos
//    archivos antes que el SPA, así buscadores y redes los leen sin ejecutar JavaScript.
//  - dist/404.html: página real de error (status 404, noindex).
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGES, SITE_URL, OG_IMAGE, alternatesFor } from '../src/lib/seo-data.js'
import { LINKS } from '../src/config.js'

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = await readFile(join(DIST, 'index.html'), 'utf8')

// Etiquetas que gestiona este script. Vite minifica el HTML (quita comillas y
// comentarios), por eso las expresiones aceptan comillas opcionales.
const MANAGED_TAGS =
  /<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*\b(?:name|property)=["']?(?:description|robots|og:[^"'\s>]+|twitter:[^"'\s>]+)["']?[^>]*>|<link[^>]*\brel=["']?(?:canonical|alternate)["']?[^>]*>|<script[^>]*ld\+json[^>]*>[\s\S]*?<\/script>/gi

const assets = await readdir(join(DIST, 'assets'))

// srcset de las variantes WebP compiladas de una foto (nombre sin hash ni ancho).
function webpSrcSet(name) {
  const pattern = new RegExp(`^${name}-(\\d+)-[\\w-]+\\.webp$`)
  return assets
    .map((file) => {
      const match = file.match(pattern)
      return match ? { file, width: Number(match[1]) } : null
    })
    .filter(Boolean)
    .sort((a, b) => a.width - b.width)
    .map(({ file, width }) => `/assets/${file} ${width}w`)
    .join(', ')
}

const fontFile = (family, weight) => assets.find((f) => f.startsWith(`${family}-latin-${weight}-normal-`) && f.endsWith('.woff2'))

// Precarga lo que se ve primero: las dos fuentes principales y la foto de cabecera.
function preloads(page) {
  const tags = [
    ['plus-jakarta-sans', 400],
    ['outfit', 700],
  ]
    .map(([family, weight]) => fontFile(family, weight))
    .filter(Boolean)
    .map((file) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${file}" crossorigin />`)
  const image = (name, media, sizes) =>
    `<link rel="preload" as="image" type="image/webp" fetchpriority="high"${media ? ` media="${media}"` : ''} imagesrcset="${webpSrcSet(name)}" imagesizes="${sizes}" />`
  if (page === 'home') {
    tags.push(image('tandil-barrio-sierras', '(orientation: portrait)', '100vw'))
    tags.push(image('tandil-hero', '(orientation: landscape)', '100vw'))
  }
  if (page === 'nosotros') tags.push(image('bernardo-retrato', null, '(min-width: 1024px) 40vw, 100vw'))
  return tags
}

const BUSINESS = {
  es: {
    description:
      'Servicio boutique de análisis, planificación, orientación y acompañamiento para instalarse, invertir o desarrollar un proyecto en Tandil.',
    jobTitle: 'Abogado y fundador de Local Local',
    serviceType: 'Servicio de relocalización',
    home: 'Inicio',
  },
  en: {
    description:
      'Boutique analysis, planning, guidance and support service for people relocating to, investing in or building a project in Tandil.',
    jobTitle: 'Lawyer and founder of Local Local',
    serviceType: 'Relocation service',
    home: 'Home',
  },
}

function jsonLd(page, lang) {
  const m = PAGES[page][lang]
  const b = BUSINESS[lang]
  const url = `${SITE_URL}${m.path}`
  const inLanguage = lang === 'es' ? 'es-AR' : 'en'
  const sameAs = [LINKS.linkedin, LINKS.instagram].filter(Boolean)
  const businessId = `${SITE_URL}/#business`
  const graph = [
    {
      '@type': 'ProfessionalService',
      '@id': businessId,
      name: 'Local Local',
      url: SITE_URL,
      description: b.description,
      serviceType: b.serviceType,
      image: `${SITE_URL}${OG_IMAGE.path}`,
      email: 'bernardo@locallocal.net',
      areaServed: {
        '@type': 'City',
        name: 'Tandil',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Provincia de Buenos Aires' },
      },
      address: { '@type': 'PostalAddress', addressLocality: 'Tandil', addressRegion: 'Buenos Aires', addressCountry: 'AR' },
      founder: { '@id': `${SITE_URL}/nosotros#bernardo` },
      knowsLanguage: ['es', 'en'],
      sameAs,
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/nosotros#bernardo`,
      name: 'Bernardo G. Cisterna',
      jobTitle: b.jobTitle,
      worksFor: { '@id': businessId },
      sameAs: [LINKS.linkedin].filter(Boolean),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Local Local',
      inLanguage: ['es-AR', 'en'],
      publisher: { '@id': businessId },
    },
    {
      '@type': page === 'nosotros' ? 'AboutPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: m.title,
      description: m.description,
      inLanguage,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': businessId },
    },
  ]
  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: b.home, item: `${SITE_URL}${PAGES.home[lang].path}` },
        { '@type': 'ListItem', position: 2, name: m.title.split(' | ')[0], item: url },
      ],
    })
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`
}

function headBlock(page, lang) {
  const m = PAGES[page][lang]
  const alt = alternatesFor(page)
  const url = `${SITE_URL}${m.path}`
  const image = `${SITE_URL}${OG_IMAGE.path}`
  const locale = lang === 'es' ? 'es_AR' : 'en_US'
  return [
    `<title>${m.title}</title>`,
    `<meta name="description" content="${m.description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="es" href="${SITE_URL}${alt.es}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}${alt.en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${alt.es}" />`,
    `<meta property="og:title" content="${m.title}" />`,
    `<meta property="og:description" content="${m.description}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE.height}" />`,
    `<meta property="og:image:alt" content="${OG_IMAGE.alt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${m.title}" />`,
    `<meta name="twitter:description" content="${m.description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    jsonLd(page, lang),
    ...preloads(page),
  ].join('\n    ')
}

const setLang = (html, lang) =>
  html.replace(/<html([^>]*)\blang=["']?[^"'\s>]*["']?/i, `<html$1lang="${lang === 'es' ? 'es-AR' : 'en'}"`)

const inject = (html, block) => html.replace(MANAGED_TAGS, '').replace('</head>', () => `    ${block}\n  </head>`)

for (const page of Object.keys(PAGES)) {
  for (const lang of ['es', 'en']) {
    const { path } = PAGES[page][lang]
    const dir = path === '/' ? DIST : join(DIST, path)
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), inject(setLang(template, lang), headBlock(page, lang)), 'utf8')
    console.log(`prerender ${lang} ${path}`)
  }
}

// 404 real: el SPA muestra la pantalla de error según el idioma de la URL.
const notFound = inject(setLang(template, 'es'), '<title>404 | Local Local</title>\n    <meta name="robots" content="noindex" />')
await writeFile(join(DIST, '404.html'), notFound, 'utf8')
console.log('prerender 404.html')
