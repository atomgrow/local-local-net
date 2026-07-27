import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { trackEvent } from '../lib/tracking'

// FAQ resumida (8 preguntas decisivas) con acordeones accesibles.
// La página completa /preguntas-frecuentes queda pendiente (LINKS.faqPage).
export default function Faq() {
  const scope = useReveal()
  const { t } = useLang()
  const f = t.faq
  const [abierta, setAbierta] = useState(-1)

  const toggle = (i) => {
    const next = abierta === i ? -1 : i
    setAbierta(next)
    if (next !== -1) trackEvent('faq_open', { question: f.items[i].q })
  }

  return (
    <section id="preguntas" ref={scope} className="bg-vanilla/50 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">
          {f.kicker}
        </p>
        <h2 data-reveal className="mt-4 font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          {f.title}
        </h2>

        <div data-reveal className="mt-10 divide-y divide-espresso/10 rounded-[2rem] border border-espresso/10 bg-white/50">
          {f.items.map((item, i) => {
            const open = abierta === i
            const panelId = `faq-panel-${i}`
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-sm font-semibold text-espresso transition-colors hover:bg-espresso/[0.03] focus-visible:bg-espresso/[0.05] focus-visible:outline-none sm:text-base"
                  >
                    {item.q}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`shrink-0 text-espresso/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>
                <div id={panelId} hidden={!open} className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-espresso/65">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* [PENDIENTE] Habilitar cuando exista la página /preguntas-frecuentes:
        <a href={LINKS.faqPage} className="mt-6 inline-block text-sm font-medium text-matcha">
          {f.verTodas} →
        </a> */}
      </div>
    </section>
  )
}
