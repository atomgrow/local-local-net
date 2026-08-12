import { Compass, Route } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useJourney } from '../lib/journey'
import { useReveal } from '../lib/useReveal'
import { useCtaNavigate } from '../lib/useCtaNavigate'

// [MEJORA #1] Micro-decisión temprana: el visitante se autosegmenta
// sin fricción. No oculta contenido: solo revela un mensaje y un CTA
// acorde, y el resto de la página ajusta énfasis vía useJourney().
export default function MicroDecision() {
  const scope = useReveal()
  const { t } = useLang()
  const { journey, setJourney } = useJourney()
  const ctaNavigate = useCtaNavigate()
  const md = t.microDecision

  const opciones = [
    { key: 'explorando', label: md.explorando, Icon: Compass },
    { key: 'avanzando', label: md.avanzando, Icon: Route },
  ]

  const goTo = (id, source) => {
    ctaNavigate(id, source)
  }

  return (
    <section ref={scope} className="bg-almond px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 data-reveal className="font-display text-2xl font-bold tracking-tight text-espresso sm:text-3xl">
          {md.title}
        </h2>
        <p data-reveal className="mt-3 text-sm text-espresso/60">
          {md.sub}
        </p>

        <div data-reveal className="mt-8 flex flex-col justify-center gap-4 sm:flex-row" role="group" aria-label={md.title}>
          {opciones.map(({ key, label, Icon }) => {
            const active = journey === key
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => setJourney(key)}
                className={[
                  'btn-magnetic flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-base font-semibold transition-colors duration-300',
                  active
                    ? 'border-matcha bg-matcha text-white shadow-lg shadow-matcha/25'
                    : 'border-espresso/20 bg-white/60 text-espresso hover:border-matcha/60',
                ].join(' ')}
              >
                <Icon size={18} strokeWidth={2} aria-hidden="true" />
                {label}
              </button>
            )
          })}
        </div>

        {journey && (
          <div className="mt-8 rounded-[2rem] border border-matcha/25 bg-white/70 p-7 sm:p-8">
            <p className="text-base leading-relaxed text-espresso/80">
              {journey === 'explorando' ? md.msgExplorando : md.msgAvanzando}
            </p>
            <button
              type="button"
              onClick={() =>
                journey === 'explorando'
                  ? goTo('guia', 'micro_explorando')
                  : goTo('evaluar', 'micro_avanzando')
              }
              className="btn-magnetic mt-5 rounded-full bg-terracota px-7 py-3.5 text-sm font-semibold text-white"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {journey === 'explorando' ? md.ctaExplorando : md.ctaAvanzando}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
