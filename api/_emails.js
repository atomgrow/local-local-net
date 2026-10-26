import { welcomeBlock } from "./_notifications.js";

// Primer correo del newsletter (Newsletter 01) en español e inglés.
// El texto en español es el que entregó Bernardo; la versión en inglés es una
// traducción que Bernardo debe revisar. El archivo empieza con "_" para que
// Vercel no lo publique como endpoint.

const NEWSLETTER_01 = {
  es: {
    lang: 'es-AR',
    subject: 'Tandil se conoce un fin de semana. Pero se elige pensando en un martes.',
    preheader: 'Una escapada alcanza para conocerla. Elegirla exige pensar en la vida cotidiana.',
    title: ['Tandil se conoce un fin de semana.', 'Pero se elige pensando en un martes.'],
    paragraphs: [
      'Una escapada alcanza para recorrer el centro, mirar las sierras, comer bien y volver con la sensación de que acá se vive distinto.',
      'Pero elegir una ciudad exige pensar en la vida cotidiana.',
      'En cuánto tiempo querés pasar viajando. En dónde querés que crezcan tus hijos. En la distancia entre tu casa, el colegio y el trabajo. En cómo vas a sostener tus ingresos. En la red que vas a dejar y en la que tendrás que construir.',
      'En definitiva, en cómo querés que se sientan tus días.',
      'Tandil combina algo que no resulta fácil encontrar: naturaleza, movimiento y una escala todavía humana.',
      'Tiene colegios, universidad, servicios de salud, cultura, gastronomía y deporte. Su economía no depende de una sola actividad: conviven empresas, profesionales, industria, turismo, campo y un ecosistema tecnológico que continúa creciendo.',
      'Pero también hay aire, sierras y otra relación con el tiempo.',
      'Acá, la naturaleza no queda reservada para las vacaciones. Puede aparecer en una caminata después del trabajo, en una tarde con los chicos o en un camino que empieza a pocos minutos de tu casa.',
      'Tandil ofrece la posibilidad de vivir con más espacio, construir vínculos más cercanos y recuperar parte del tiempo que las grandes ciudades consumen todos los días.',
      'Ahora bien: una ciudad no se elige solamente por lo que ofrece.',
      'También hay que preguntarse si funciona para vos.',
      '¿Podés desarrollar acá tu actividad profesional? ¿Qué ingresos necesitás sostener? ¿Qué tipo de colegio buscás? ¿En qué zona te convendría vivir? ¿Cuánto vas a extrañar a tu familia y a tus vínculos? ¿Qué cosas de tu vida actual no estás dispuesto a perder?',
      'Tandil no es una ciudad detenida ni una promesa de vida perfecta. Tampoco todas sus zonas ni todas las formas de vivirla ofrecen la misma experiencia.',
      'Es una ciudad activa, con identidad propia y con el tamaño suficiente para que un proyecto familiar, profesional o empresarial pueda desarrollarse sin quedar aislado.',
      'Por eso, la pregunta no es solamente si Tandil es una linda ciudad.',
      'La verdadera pregunta es:',
      { highlight: '¿Tandil puede acompañar la vida que querés construir?' },
      'Si buscás más naturaleza, mayor proximidad y más control sobre tus días, Tandil merece algo más que una visita.',
      'Merece convertirse en una posibilidad concreta.',
      { quote: ['Tal vez no se trate de escapar de una ciudad.', 'Tal vez se trate de elegir mejor la próxima.'] },
      'Desde Local Local compartimos ideas, experiencias y herramientas para quienes están evaluando una mudanza, un cambio de ciudad o una nueva etapa para su familia o su proyecto.',
      { strongTail: ['Si Tandil viene apareciendo en tus conversaciones, respondé este correo y contanos: ', '¿qué tendría que ofrecerte una ciudad para que decidieras empezar de nuevo?'] },
    ],
    signature: ['Bernardo G. Cisterna', 'Abogado y fundador de Local Local'],
    footer: 'Recibís este correo porque te suscribiste en locallocal.net. Para dejar de recibirlos, respondé este mensaje con la palabra BAJA.',
  },
  en: {
    lang: 'en',
    subject: 'You can get to know Tandil over a weekend. But choosing it means thinking about an ordinary Tuesday.',
    preheader: 'A getaway is enough to see it. Choosing it means thinking about everyday life.',
    title: ['You can get to know Tandil over a weekend.', 'But choosing it means thinking about an ordinary Tuesday.'],
    paragraphs: [
      'A getaway is enough to walk around the center, look at the hills, eat well and leave with the feeling that life here is different.',
      'But choosing a city means thinking about everyday life.',
      'About how much time you want to spend commuting. Where you want your children to grow up. The distance between your home, the school and work. How you will sustain your income. The network you will leave behind and the one you will have to build.',
      'In the end, it comes down to how you want your days to feel.',
      'Tandil combines something that is not easy to find: nature, momentum and a scale that is still human.',
      'It has schools, a university, healthcare, culture, food and sports. Its economy does not depend on a single activity: businesses, professionals, industry, tourism, farming and a growing technology ecosystem all coexist.',
      'But there is also fresh air, hills and a different relationship with time.',
      'Here, nature is not reserved for vacations. It can be a walk after work, an afternoon with the kids or a path that starts a few minutes from your home.',
      'Tandil offers the chance to live with more space, build closer relationships and get back part of the time that big cities take every day.',
      'Still, a city is not chosen only for what it offers.',
      'You also have to ask whether it works for you.',
      'Can you develop your professional activity here? What income do you need to sustain? What kind of school are you looking for? Which area would suit you best? How much will you miss your family and your relationships? What parts of your current life are you not willing to lose?',
      'Tandil is not a city frozen in time, nor a promise of a perfect life. Not every area, and not every way of living here, offers the same experience.',
      'It is an active city with its own identity and enough size for a family, professional or business project to develop without being isolated.',
      'So the question is not just whether Tandil is a nice city.',
      'The real question is:',
      { highlight: 'Can Tandil support the life you want to build?' },
      'If you are looking for more nature, greater closeness and more control over your days, Tandil deserves more than a visit.',
      'It deserves to become a real possibility.',
      { quote: ['Maybe it is not about escaping a city.', 'Maybe it is about choosing your next one more carefully.'] },
      'At Local Local we share ideas, experiences and practical tools for people considering a move, a change of city or a new chapter for their family or project.',
      { strongTail: ['If Tandil keeps coming up in your conversations, reply to this email and tell us: ', 'what would a city need to offer for you to decide to start over?'] },
    ],
    signature: ['Bernardo G. Cisterna', 'Lawyer and founder of Local Local'],
    footer: 'You are receiving this email because you subscribed at locallocal.net. To stop receiving it, reply to this message with the word UNSUBSCRIBE.',
  },
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function renderParagraph(p) {
  if (typeof p === 'string') return `<p style="margin:0 0 16px 0;">${esc(p)}</p>`
  if (p.highlight)
    return `<p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:1.4;font-weight:bold;color:#8f3f20;">${esc(p.highlight)}</p>`
  if (p.quote)
    return `<p style="margin:0 0 16px 0;padding-left:16px;border-left:3px solid #8f3f20;font-weight:bold;">${p.quote.map(esc).join('<br />')}</p>`
  return `<p style="margin:0 0 8px 0;">${esc(p.strongTail[0])}<strong>${esc(p.strongTail[1])}</strong></p>`
}

export function newsletterEmail(lang) {
  const c = NEWSLETTER_01[lang === 'en' ? 'en' : 'es']
  const html = `<!doctype html>
<html lang="${c.lang}"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>${esc(c.subject)}</title></head>
<body style="margin:0;padding:0;background-color:#e5e0d8;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(c.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e5e0d8;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:#faf8f3;border-radius:12px;">
<tr><td style="padding:32px 36px 8px 36px;font-family:Georgia,'Times New Roman',serif;font-size:15px;letter-spacing:3px;color:#8f3f20;text-transform:uppercase;">Local Local</td></tr>
<tr><td style="padding:8px 36px 8px 36px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.3;font-weight:bold;color:#2e2a20;">${c.title.map(esc).join('<br />')}</td></tr>
<tr><td style="padding:16px 36px 8px 36px;font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:1.7;color:#2e2a20;">
${welcomeBlock(lang)}
${c.paragraphs.map(renderParagraph).join('\n')}
</td></tr>
<tr><td style="padding:8px 36px 32px 36px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#2e2a20;"><strong>${esc(c.signature[0])}</strong><br />${esc(c.signature[1])}</td></tr>
</table>
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;"><tr><td align="center" style="padding:20px 24px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#5a5446;">Local Local · Tandil, Buenos Aires · <a href="https://www.locallocal.net" style="color:#5a5446;">locallocal.net</a><br />${esc(c.footer)}</td></tr></table>
</td></tr></table>
</body></html>`
  return { subject: c.subject, html }
}
