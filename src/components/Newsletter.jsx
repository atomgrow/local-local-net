import { useState } from 'react'
import { Check } from 'lucide-react'
import { useLang, legalHref } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { trackNewsletterSignup, openWhatsApp } from '../lib/tracking'
import { LINKS } from '../config'

// Alta en el servicio de email vía /api/subscribe. Devuelve 'ok', 'fallback'
// (el servicio todavía no está configurado) o 'fail' (error real).
async function subscribe(email, lang, website) {
  try {
    const response = await fetch(LINKS.newsletterEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, lang, website }),
    })
    if (response.ok) return 'ok'
    return response.status === 503 || response.status === 404 ? 'fallback' : 'fail'
  } catch {
    return 'fallback'
  }
}

// Newsletter: alta por email. Si el servicio no está configurado, respaldo por WhatsApp.
export default function Newsletter() {
  const scope = useReveal()
  const { t, lang } = useLang()
  const nl = t.newsletter
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // campo trampa para bots
  const [estado, setEstado] = useState('idle') // idle | sending | ok | error | fail

  const enviar = async (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEstado('error')
      return
    }
    setEstado('sending')
    const result = LINKS.newsletterEndpoint ? await subscribe(email, lang, website) : 'fallback'
    if (result === 'fail') {
      setEstado('fail')
      return
    }
    trackNewsletterSignup()
    if (result === 'fallback') openWhatsApp('newsletter', t.newsletterWhatsappMessage)
    setEstado('ok')
  }

  return (
    <section id="guia" ref={scope} className="bg-almond px-6 py-20 sm:px-10 sm:py-24">
      <div data-reveal className="mx-auto max-w-3xl rounded-[2.5rem] border border-matcha/25 bg-matcha/[0.08] p-9 sm:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-matcha">{nl.kicker}</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-espresso">{nl.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-espresso/75">{nl.copy}</p>

        {estado === 'ok' ? (
          <p className="mt-7 flex items-center gap-2.5 text-sm font-medium text-matcha">
            <Check size={16} strokeWidth={2.5} aria-hidden="true" />
            {nl.gracias}
          </p>
        ) : (
          <form onSubmit={enviar} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <label className="sr-only" htmlFor="ll-newsletter-email">
              Email
            </label>
            <input
              id="ll-newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (estado === 'error') setEstado('idle')
              }}
              placeholder={nl.placeholder}
              aria-invalid={estado === 'error'}
              className="w-full rounded-full border border-espresso/15 bg-white/80 px-5 py-3.5 text-sm text-espresso outline-none transition-all placeholder:text-espresso/75 focus:border-matcha focus:ring-2 focus:ring-matcha/25 sm:max-w-xs"
            />
            <button
              type="submit"
              disabled={estado === 'sending'}
              className="btn-magnetic shrink-0 rounded-full bg-matcha px-7 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {estado === 'sending' ? nl.enviando : nl.cta}
            </button>
          </form>
        )}
        {(estado === 'error' || estado === 'fail') && (
          <p role="alert" className="mt-3 font-mono text-xs tracking-wide text-terracota">
            {estado === 'fail' ? nl.errorEnvio : nl.error}
          </p>
        )}
        {estado !== 'ok' && (
          <p className="mt-4 text-xs leading-relaxed text-espresso/80">
            {nl.privacidad}{' '}
            <a
              href={legalHref(lang, 'privacidad')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-espresso underline underline-offset-2 hover:text-terracota"
            >
              {nl.privacidadLink}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
