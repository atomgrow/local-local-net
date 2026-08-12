import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { STRINGS } from './strings'
import { trackLanguageChange } from './tracking'

// ============================================================
//  Idioma por ubicación (sin APIs externas):
//  - EE.UU. / Canadá        → inglés
//  - Latinoamérica          → español
//  - España                 → español
//  - Resto de Europa        → inglés
//  - Resto del mundo        → inglés (salvo navegador en español)
//  La elección manual del usuario se guarda y pisa la detección.
// ============================================================

const LANG_STORAGE_KEY = 'll_lang'

// Zonas horarias de EE.UU. y Canadá (el resto de "America/*" es Latam).
const US_CANADA_TZ = new Set([
  'America/New_York',
  'America/Detroit',
  'America/Chicago',
  'America/Menominee',
  'America/Denver',
  'America/Boise',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'America/Juneau',
  'America/Sitka',
  'America/Metlakatla',
  'America/Yakutat',
  'America/Nome',
  'America/Adak',
  'America/Toronto',
  'America/Montreal',
  'America/Winnipeg',
  'America/Vancouver',
  'America/Edmonton',
  'America/Regina',
  'America/Halifax',
  'America/St_Johns',
  'America/Moncton',
  'America/Whitehorse',
  'America/Dawson',
  'America/Dawson_Creek',
  'America/Fort_Nelson',
  'America/Iqaluit',
  'America/Yellowknife',
  'America/Cambridge_Bay',
  'America/Inuvik',
  'America/Rankin_Inlet',
  'America/Resolute',
  'America/Glace_Bay',
  'America/Goose_Bay',
  'America/Blanc-Sablon',
  'America/Thunder_Bay',
  'America/Nipigon',
  'America/Rainy_River',
  'America/Atikokan',
  'America/Swift_Current',
  'America/Creston',
  'Pacific/Honolulu',
])

// Prefijos de subzonas de EE.UU.
const US_TZ_PREFIXES = ['America/Indiana/', 'America/Kentucky/', 'America/North_Dakota/']

// España (península, Canarias, Ceuta/Melilla)
const SPAIN_TZ = new Set(['Europe/Madrid', 'Atlantic/Canary', 'Africa/Ceuta'])

export function detectLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* sin storage: seguimos con detección */
  }

  let tz = ''
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  } catch {
    tz = ''
  }

  if (SPAIN_TZ.has(tz)) return 'es'
  if (tz.startsWith('Europe/')) return 'en'
  if (US_CANADA_TZ.has(tz) || US_TZ_PREFIXES.some((p) => tz.startsWith(p))) return 'en'
  if (tz.startsWith('America/')) return 'es' // Latam

  // Resto del mundo: inglés, salvo que el navegador esté en español.
  const navLang = (navigator.language || '').toLowerCase()
  return navLang.startsWith('es') ? 'es' : 'en'
}

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => detectLang())

  const setLang = (next) => {
    setLangState(next)
    trackLanguageChange(next)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      /* sin storage: el cambio vale solo para esta visita */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en'
    document.title = STRINGS[lang].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', STRINGS[lang].meta.description)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: STRINGS[lang] }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
