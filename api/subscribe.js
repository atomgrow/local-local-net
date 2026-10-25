// Vercel Function: alta del newsletter con Resend.
//
// Qué hace cuando alguien deja su email en el sitio:
//   1. Le envía el primer correo (Newsletter 01) desde bernardo@locallocal.net.
//   2. Le avisa a Bernardo que hay una nueva suscripción (así queda un registro).
//   3. Si hay lista (audiencia) configurada, guarda el contacto ahí.
//
// Variables de entorno (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY        clave de API de Resend (obligatoria)
//   NEWSLETTER_FROM       remitente, ej.: Bernardo Cisterna <bernardo@locallocal.net> (obligatoria;
//                         el dominio debe estar verificado en Resend)
//   NEWSLETTER_NOTIFY     a quién avisar de cada alta (opcional; por defecto, bernardo@locallocal.net)
//   RESEND_AUDIENCE_ID    id de la audiencia/lista donde guardar contactos (opcional)
//
// Si falta la configuración responde 503 `not_configured` y el sitio usa el
// respaldo por WhatsApp, así que se puede publicar antes de tener Resend listo.
import { newsletterEmail } from './_emails.js'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REPLY_TO = 'bernardo@locallocal.net'

async function resend(path, apiKey, body) {
  return fetch(`https://api.resend.com${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  const email = String(body.email || '').trim().toLowerCase()
  const lang = body.lang === 'en' ? 'en' : 'es'

  // Campo oculto: lo completan los bots, las personas no lo ven.
  if (body.website) return res.status(200).json({ ok: true })

  if (email.length > 254 || !EMAIL.test(email)) {
    return res.status(400).json({ error: 'invalid_email' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.NEWSLETTER_FROM
  if (!apiKey || !from) {
    return res.status(503).json({ error: 'not_configured' })
  }

  const notify = process.env.NEWSLETTER_NOTIFY || REPLY_TO
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const { subject, html } = newsletterEmail(lang)

  try {
    const welcome = await resend('/emails', apiKey, {
      from,
      to: [email],
      reply_to: REPLY_TO,
      subject,
      html,
      headers: { 'List-Unsubscribe': `<mailto:${REPLY_TO}?subject=BAJA>` },
    })
    if (!welcome.ok) return res.status(502).json({ error: 'provider_error' })

    // El aviso y el guardado del contacto no deben hacer fallar el alta.
    await Promise.allSettled([
      resend('/emails', apiKey, {
        from,
        to: [notify],
        subject: `Nueva suscripción al newsletter (${lang.toUpperCase()}): ${email}`,
        text: `Se suscribió ${email} desde locallocal.net (idioma: ${lang}).`,
      }),
      audienceId ? resend(`/audiences/${audienceId}/contacts`, apiKey, { email, unsubscribed: false }) : null,
    ])

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'provider_unreachable' })
  }
}
