import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'
import CtaButton from './CtaButton'

// Oferta comercial de la home: el primer servicio, precio y garantía juntos.
export default function OfertaDiagnostico() {
  const scope = useReveal()
  const { t } = useLang()
  const o = t.oferta

  return (
    <section ref={scope} className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker={o.kicker} titleSans={o.titleSans} titleSerif={o.titleSerif} />

        <div
          data-reveal
          className="mt-10 rounded-[2rem] border border-espresso/10 bg-white/70 p-8 shadow-xl shadow-espresso/5 sm:p-12"
        >
          <p className="text-base leading-relaxed text-espresso/80">{o.intro1}</p>
          <p className="mt-4 text-base leading-relaxed text-espresso/80">{o.intro2}</p>

          <p className="mt-8 font-display text-sm font-bold text-espresso">{o.incluyeLabel}</p>
          <ul className="mt-4 space-y-2.5">
            {o.incluye.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-espresso/80">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracota" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-6 border-t border-espresso/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-espresso/80">{o.valorLabel}</p>
              <p className="font-display text-3xl font-bold text-espresso">{o.valor}</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-espresso/80">{o.garantia}</p>
            </div>
            <CtaButton source="oferta">{o.cta}</CtaButton>
          </div>
        </div>

        <p data-reveal className="mt-8 text-sm leading-relaxed text-espresso/80">
          <span className="font-semibold text-espresso">{o.visita}</span> {o.visitaDetalle}
        </p>
      </div>
    </section>
  )
}
