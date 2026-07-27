// ============================================================
//  LOCAL LOCAL v2 — CONFIGURACIÓN CENTRAL
//  Medición, contacto, enlaces e integraciones.
//  Los valores [PENDIENTE] se listan en CONTENT_TODO.md.
// ============================================================

// GA4 — Measurement ID (Google Analytics 4). [PENDIENTE]
export const GA4_ID = 'G-XXXXXXXXXX'

// Meta Pixel ID (Facebook / Instagram Ads). [PENDIENTE]
export const META_PIXEL_ID = '000000000000000'

// WhatsApp — número en formato internacional, sin "+" ni espacios.
export const WHATSAPP_NUMBER = '5492494374940'

// Mensaje precargado por defecto (fallback; el mensaje real llega desde i18n).
export const WHATSAPP_MESSAGE =
  'Hola, estoy evaluando un proyecto en Tandil y quiero coordinar una entrevista de diagnóstico.'

// ------------------------------------------------------------
// Enlaces externos — centralizados para reemplazo sin tocar componentes.
// ------------------------------------------------------------
export const LINKS = {
  // Agenda / pago del diagnóstico (Calendly, Cal.com, Mercado Pago, Stripe…).
  // [PENDIENTE] Mientras esté vacío, los CTA de diagnóstico usan WhatsApp.
  booking: '',

  // LinkedIn de Bernardo.
  linkedin: 'https://www.linkedin.com/in/bernardo-g-cisterna/?skipRedirect=true',

  // Instagram de Local Local. [PENDIENTE — vacío = no se muestra]
  instagram: '',

  // Instagram del fotógrafo (crédito de galería).
  photographer: 'https://www.instagram.com/santiarbeoph',

  // Atomgrow (crédito del footer).
  atomgrow: 'https://atomgrow.net',

  // Página completa de preguntas frecuentes. [PENDIENTE]
  faqPage: '/preguntas-frecuentes',

  // Endpoint de newsletter (Mailchimp, Brevo, etc.). [PENDIENTE]
  // Mientras esté vacío, el alta se registra solo como evento + WhatsApp.
  newsletterEndpoint: '',
}

// URL canónica del sitio.
export const CANONICAL_URL = 'https://locallocal.net'

// ------------------------------------------------------------
// Precio del diagnóstico. [PENDIENTE — definir antes de publicar]
// Cuando se defina, setear `show: true` y completar los campos:
// el bloque de precio del componente Diagnostico se muestra solo.
// ------------------------------------------------------------
export const DIAGNOSTIC_PRICE = {
  show: false,
  amount: '',
  currency: '',
  paymentNote: '',
}
