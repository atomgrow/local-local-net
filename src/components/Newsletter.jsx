import { useState } from 'react'
import { Check } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { trackNewsletterSignup, openWhatsApp } from '../lib/tracking'

// Newsletter: suscripción por WhatsApp con mensaje personalizado.
export default function Newsletter() {
  const scope = useReveal()
  const { t } = useLang()
  const nl = t.newsletter
  const [email, setEmail] = useState('')
  const [estado, setEstado] = useState('idle') // idle | ok | error

  const enviar = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEstado('error')
      return
    }
    trackNewsletterSignup()
    openWhatsApp('newsletter', t.newsletterWhatsappMessage)
    setEstado('ok')
  }

  return (
    <section id="guia" ref={scope} className="bg-almond px-6 py-20 sm:px-10 sm:py-24">
      <div data-reveal className="mx-auto max-w-3xl rounded-[2.5rem] border border-matcha/25 bg-matcha/[0.08] p-9 sm:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-matcha">{nl.kicker}</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-espresso">{nl.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-espresso/65">{nl.copy}</p>

        {estado === 'ok' ? (
          <p className="mt-7 flex items-center gap-2.5 text-sm font-medium text-matcha">
            <Check size={16} strokeWidth={2.5} aria-hidden="true" />
            {nl.gracias}
          </p>
        ) : (
          <form onSubmit={enviar} className="mt-7 flex flex-col gap-3 sm:flex-row" noValidate>
            <label className="sr-only" htmlFor="ll-newsletter-email">
              Email
            </label>
            <input
              id="ll-newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (estado === 'error') setEstado('idle')
              }}
              placeholder={nl.placeholder}
              aria-invalid={estado === 'error'}
              className="w-full rounded-full border border-espresso/15 bg-white/80 px-5 py-3.5 text-sm text-espresso outline-none transition-all placeholder:text-espresso/35 focus:border-matcha focus:ring-2 focus:ring-matcha/25 sm:max-w-xs"
            />
            <button
              type="submit"
              className="btn-magnetic shrink-0 rounded-full bg-matcha px-7 py-3.5 text-sm font-semibold text-white"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {nl.cta}
            </button>
          </form>
        )}
        {estado === 'error' && (
          <p role="alert" className="mt-3 font-mono text-xs tracking-wide text-terracota">
            {nl.error}
          </p>
        )}
      </div>
    </section>
  )
}
