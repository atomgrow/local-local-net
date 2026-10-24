import { createContext, useContext, useMemo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { STRINGS } from './strings'
import { trackLanguageChange } from './tracking'

// ============================================================
//  Idioma por URL:
//  - /, /metodo, /nosotros            → español
//  - /en, /en/metodo, /en/nosotros    → inglés
//  Cada versión tiene su propia URL (indexable, compartible y con
//  hreflang). El selector ES/EN navega a la URL equivalente.
//  No hay redirección automática por zona horaria: los buscadores
//  siempre ven la misma URL para el mismo contenido.
// ============================================================

export function splitLocale(pathname) {
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  const base = isEn ? pathname.slice(3) || '/' : pathname
  return { lang: isEn ? 'en' : 'es', base }
}

export function localizedPath(lang, path) {
  if (lang !== 'en') return path
  return path === '/' ? '/en' : `/en${path}`
}

// Páginas legales estáticas (public/). Los anclajes EN son distintos.
const LEGAL_ANCHORS = {
  es: { privacidad: 'privacidad', confidencialidad: 'confidencialidad' },
  en: { privacidad: 'privacy', confidencialidad: 'confidentiality' },
}

export function legalHref(lang, section) {
  return lang === 'en'
    ? `/en/legal.html#${LEGAL_ANCHORS.en[section]}`
    : `/legales.html#${LEGAL_ANCHORS.es[section]}`
}

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const { lang, base } = splitLocale(pathname)

  const setLang = useCallback(
    (next) => {
      if (next === lang) return
      trackLanguageChange(next)
      navigate(`${localizedPath(next, base)}${search}${hash}`)
    },
    [lang, base, search, hash, navigate],
  )

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: STRINGS[lang],
      localize: (path) => localizedPath(lang, path),
    }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
