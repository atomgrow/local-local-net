import { useEffect } from 'react'
import { useLang } from './i18n'
import { PAGES, SITE_URL, OG_IMAGE, alternatesFor } from './seo-data'

// Actualiza título, descripción, canonical, hreflang y Open Graph al
// cambiar de página o de idioma. El HTML estático de cada ruta lo genera
// scripts/prerender-meta.mjs con los mismos datos (seo-data.js).
function upsert(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function setMeta(attr, key, content) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    return meta
  })
  el.setAttribute('content', content)
}

function setAlternate(hreflang, href) {
  const el = upsert(`link[rel="alternate"][hreflang="${hreflang}"]`, () => {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', hreflang)
    return link
  })
  el.setAttribute('href', href)
}

export function useSeo(page) {
  const { lang } = useLang()

  useEffect(() => {
    const meta = PAGES[page][lang]
    const alternates = alternatesFor(page)
    const url = `${SITE_URL}${meta.path}`
    const imageUrl = `${SITE_URL}${OG_IMAGE.path}`
    const locale = lang === 'es' ? 'es_AR' : 'en_US'

    document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en'
    document.title = meta.title

    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:locale', locale)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)
    setMeta('name', 'twitter:image', imageUrl)

    upsert('link[rel="canonical"]', () => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      return link
    }).setAttribute('href', url)

    setAlternate('es', `${SITE_URL}${alternates.es}`)
    setAlternate('en', `${SITE_URL}${alternates.en}`)
    setAlternate('x-default', `${SITE_URL}${alternates.es}`)
  }, [page, lang])
}
