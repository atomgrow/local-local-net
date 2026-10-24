// Vercel Function: alta del newsletter en Brevo.
//
// Variables de entorno (Vercel → Project → Settings → Environment Variables):
//   BREVO_API_KEY      clave de API de Brevo (obligatoria)
//   BREVO_LIST_ID_ES   id numérico de la lista en español (obligatoria)
//   BREVO_LIST_ID_EN   id de la lista en inglés (opcional; si falta se usa la de español)
//
// Si falta la configuración responde 503 `not_configured` y el sitio usa el
// respaldo por WhatsApp, así que se puede publicar antes de tener Brevo listo.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  const apiKey = process.env.BREVO_API_KEY
  const listId = Number(lang === 'en' ? process.env.BREVO_LIST_ID_EN || process.env.BREVO_LIST_ID_ES : process.env.BREVO_LIST_ID_ES)
  if (!apiKey || !listId) {
    return res.status(503).json({ error: 'not_configured' })
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      // updateEnabled: si la persona ya estaba en Brevo, solo se la suma a la lista.
      body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
    })
    if (response.status === 201 || response.status === 204) return res.status(200).json({ ok: true })
    return res.status(502).json({ error: 'provider_error' })
  } catch {
    return res.status(502).json({ error: 'provider_unreachable' })
  }
}
