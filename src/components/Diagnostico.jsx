import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { LINKS, DIAGNOSTIC_PRICE } from '../config'
import { useCtaNavigate } from '../lib/useCtaNavigate'
import SectionHeader from './SectionHeader'
import diagnosticoImg from '../assets/diagnostico-bg.jpg'

// Diagnóstico: Parallax background + contenido con degradado (como hero)

export default function Diagnostico() {
  const scope = useReveal()
  const { t } = useLang()
  const ctaNavigate = useCtaNavigate()
  const d = t.diagnostico

  const onCta = () => {
    if (LINKS.booking) {
      window.open(LINKS.booking, '_blank', 'noopener')
    } else {
      ctaNavigate('evaluar', 'diagnostico')
    }
  }

  return (
    <section
      id="diagnostico"
      ref={scope}
      className="relative flex min-h-screen items-end overflow-hidden bg-espresso"
    >
      {/* Fondo parallax (imagen estática en mobile, parallax en desktop) */}
      <img
        src={diagnosticoImg}
        alt="Tandil premium landscape"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradientes overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/60 to-espresso/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-transparent to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-40 sm:px-10 sm:pb-24">
        <div className="max-w-2xl">
          <SectionHeader
            kicker={d.kicker}
            titleSans={d.titleSans}
            titleSerif={d.titleSerif}
            dark
          />

          <div data-reveal className="mt-7 max-w-xl space-y-4">
            <p className="text-base leading-relaxed text-almond/85">{d.copy}</p>
            <p className="text-base leading-relaxed text-almond/75">{d.copy2}</p>
          </div>

          {DIAGNOSTIC_PRICE.show && (
            <p data-reveal className="mt-6 font-display text-3xl font-bold text-white">
              {DIAGNOSTIC_PRICE.amount} {DIAGNOSTIC_PRICE.currency}
              {DIAGNOSTIC_PRICE.paymentNote && (
                <span className="ml-3 text-sm font-normal text-almond/60">
                  {DIAGNOSTIC_PRICE.paymentNote}
                </span>
              )}
            </p>
          )}

          {/* Tarjeta de garantía (semi-transparente) */}
          <div data-reveal className="mt-10 rounded-2xl border border-almond/20 bg-espresso/40 backdrop-blur-md p-7 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-vanilla/80">
              {d.garantiaLabel}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-almond/85">{d.garantia}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {d.garantiaNotas.map((nota) => (
                <li key={nota} className="text-xs text-almond/60">
                  · {nota}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div data-reveal className="mt-10">
            <button
              type="button"
              onClick={onCta}
              className="btn-magnetic rounded-full bg-terracota px-10 py-4 text-base font-semibold text-white shadow-2xl shadow-black/50"
            >
              <span className="btn-sheen bg-espresso/40" aria-hidden="true" />
              {d.cta}
            </button>
            <p className="mt-4 font-mono text-[10px] tracking-wider text-almond/50">
              {d.micro}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
