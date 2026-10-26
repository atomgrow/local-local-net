// Textos de bienvenida (para la persona que se suscribe) y aviso interno.
// BORRADOR: el texto de bienvenida habla en nombre de Bernardo y debe aprobarlo él.

const WHATSAPP_URL = 'https://wa.me/5492494374940'
const WHATSAPP_LABEL = '+54 9 2494 37-4940'
const EMAIL = 'bernardo@locallocal.net'

const WELCOME = {
  es: {
    title: 'Bienvenido/a a Local Local.',
    body: [
      'Gracias por sumarte. Tandil se elige pensando en la vida cotidiana, y ese es el tipo de conversación que más disfruto.',
      'Si querés charlar sobre tu caso, escribime cuando quieras. Sin compromiso:',
    ],
    contactLabels: ['WhatsApp', 'Email'],
    signoff: 'Encantado de conversar.',
  },
  en: {
    title: 'Welcome to Local Local.',
    body: [
      'Thank you for subscribing. Tandil is chosen thinking about everyday life, and that is exactly the kind of conversation I enjoy most.',
      'If you want to talk about your situation, write to me anytime. No commitment:',
    ],
    contactLabels: ['WhatsApp', 'Email'],
    signoff: 'Looking forward to talking.',
  },
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Bloque de bienvenida que va arriba del newsletter.
export function welcomeBlock(lang) {
  const w = WELCOME[lang === 'en' ? 'en' : 'es']
  const contact = [
    `${w.contactLabels[0]}: <a href="${WHATSAPP_URL}" style="color:#8f3f20;font-weight:bold;">${WHATSAPP_LABEL}</a>`,
    `${w.contactLabels[1]}: <a href="mailto:${EMAIL}" style="color:#8f3f20;font-weight:bold;">${EMAIL}</a>`,
  ]
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px 0;background-color:#f1ece3;border-radius:10px;"><tr><td style="padding:20px 24px;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#2e2a20;">
<p style="margin:0 0 10px 0;font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:17px;">${esc(w.title)}</p>
${w.body.map((p) => `<p style="margin:0 0 10px 0;">${esc(p)}</p>`).join('\n')}
<p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;">${contact.join('<br />')}</p>
<p style="margin:12px 0 0 0;font-style:italic;">${esc(w.signoff)} Bernardo</p>
</td></tr></table>`
}

// Aviso interno a Tom/Bernardo: datos del alta y respuesta directa a la persona.
export function adminNotice({ email, lang }) {
  const when = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', dateStyle: 'short', timeStyle: 'short' })
  const idioma = lang === 'en' ? 'inglés' : 'español'
  const subject = `Nueva suscripción al newsletter (${lang.toUpperCase()}): ${email}`
  const text = [
    'Nueva suscripción desde locallocal.net',
    '',
    `Email:   ${email}`,
    `Idioma:  ${idioma}`,
    `Fecha:   ${when} (hora de Buenos Aires)`,
    '',
    'Ya recibió el primer newsletter y el mensaje de bienvenida con tu WhatsApp y tu mail.',
    `Para responderle directamente, usá "Responder": el correo va a ${email}.`,
  ].join('\n')
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#2e2a20;">
<p style="margin:0 0 12px 0;"><strong>Nueva suscripción desde locallocal.net</strong></p>
<table role="presentation" cellpadding="4" cellspacing="0" style="font-size:15px;">
<tr><td style="color:#5a5446;">Email</td><td><strong>${esc(email)}</strong></td></tr>
<tr><td style="color:#5a5446;">Idioma</td><td>${idioma}</td></tr>
<tr><td style="color:#5a5446;">Fecha</td><td>${esc(when)} (hora de Buenos Aires)</td></tr>
</table>
<p style="margin:14px 0 0 0;">Ya recibió el primer newsletter y el mensaje de bienvenida con tu WhatsApp y tu mail.</p>
<p style="margin:8px 0 0 0;">Para responderle directamente, usá <strong>Responder</strong>: el correo va a ${esc(email)}.</p>
</div>`
  return { subject, text, html }
}
