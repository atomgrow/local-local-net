import { GA4_ID, META_PIXEL_ID, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config'

// ------------------------------------------------------------
// UTMs — se leen al aterrizar y se persisten para adjuntar al lead,
// aunque el usuario navegue o vuelva más tarde.
// ------------------------------------------------------------
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const UTM_STORAGE_KEY = 'll_utm_params'

export function persistUtmParams() {
  try {
    const params = new URLSearchParams(window.location.search)
    const found = {}
    UTM_KEYS.forEach((key) => {
      const value = params.get(key)
      if (value) found[key] = value
    })
    if (Object.keys(found).length > 0) {
      found._landed_at = new Date().toISOString()
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found))
    }
  } catch {
    /* storage no disponible: seguimos sin persistencia */
  }
}

export function getUtmParams() {
  try {
    return JSON.parse(localStorage.getItem(UTM_STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

// ------------------------------------------------------------
// Carga de GA4 y Meta Pixel (una sola vez, al montar la app)
// ------------------------------------------------------------
export function initAnalytics() {
  // --- GA4 ---
  if (GA4_ID && !GA4_ID.includes('XXXX')) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA4_ID)
  }

  // --- Meta Pixel ---
  if (META_PIXEL_ID && !/^0+$/.test(META_PIXEL_ID)) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq('init', META_PIXEL_ID)
    window.fbq('track', 'PageView')
  }

  persistUtmParams()
  initScrollDepth()
}

// ------------------------------------------------------------
// Eventos
// ------------------------------------------------------------
function ga4Event(name, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, { ...params, ...getUtmParams() })
  }
}

function metaEvent(name, params = {}) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, params)
  }
}

/** Evento genérico de la landing (hero_cta_click, faq_open, etc.). */
export function trackEvent(name, params = {}) {
  ga4Event(name, params)
}

/** Micro-decisión: 'explorando' | 'avanzando'. */
export function trackMicroDecision(choice) {
  ga4Event(`micro_decision_${choice}`)
}

/** Cuestionario de tres preguntas. */
export function trackQuestionnaireStart() {
  ga4Event('questionnaire_start')
}
export function trackQuestionnaireStep(step) {
  ga4Event(`questionnaire_step_${step}`)
}
export function trackQuestionnaireComplete() {
  ga4Event('questionnaire_complete')
  metaEvent('Lead', { content_name: 'cuestionario_inicial' })
}

/** Alta de newsletter / guía gratuita. */
export function trackNewsletterSignup() {
  ga4Event('newsletter_signup')
  metaEvent('Lead', { content_name: 'newsletter' })
}

/** Clic a WhatsApp desde cualquier punto de la landing. */
export function trackWhatsAppClick(source) {
  ga4Event('whatsapp_click', { source })
  metaEvent('Contact', { content_name: `whatsapp_${source}` })
}

/** Cambio de idioma. */
export function trackLanguageChange(lang) {
  ga4Event('language_change', { lang })
}

// ------------------------------------------------------------
// Scroll depth (50% y 90%, una sola vez por visita)
// ------------------------------------------------------------
function initScrollDepth() {
  const fired = { 50: false, 90: false }
  const onScroll = () => {
    const doc = document.documentElement
    const total = doc.scrollHeight - window.innerHeight
    if (total <= 0) return
    const pct = (window.scrollY / total) * 100
    ;[50, 90].forEach((mark) => {
      if (!fired[mark] && pct >= mark) {
        fired[mark] = true
        ga4Event(`scroll_${mark}`)
      }
    })
    if (fired[50] && fired[90]) window.removeEventListener('scroll', onScroll)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
}

// ------------------------------------------------------------
// WhatsApp — mismo número en toda la landing; el mensaje llega
// desde i18n según el idioma activo (fallback: config).
// ------------------------------------------------------------
export function buildWhatsAppUrl(message = WHATSAPP_MESSAGE, extraLines = '') {
  const text = extraLines ? `${message}\n\n${extraLines}` : message
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/** Acción unificada: trackea y abre WhatsApp. */
export function openWhatsApp(source, message = WHATSAPP_MESSAGE, extraLines = '') {
  trackWhatsAppClick(source)
  window.open(buildWhatsAppUrl(message, extraLines), '_blank', 'noopener')
}
