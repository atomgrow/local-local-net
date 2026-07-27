import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'
import CtaButton from './CtaButton'

export default function PorQue() {
  const scope = useReveal()
  const { t } = useLang()
  const pq = t.porQue

  return (
    <section ref={scope} className="bg-vanilla/50 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker={pq.kicker} titleSans={pq.titleSans} titleSerif={pq.titleSerif} />

        <p data-reveal className="mt-7 max-w-3xl text-base leading-relaxed text-espresso/70">
          {pq.intro}
        </p>

        {/* Lista de items */}
        <ul data-reveal className="mt-10 space-y-3">
          {pq.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-espresso/10 bg-white/60 px-6 py-4 text-sm leading-relaxed text-espresso/70"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-terracota" />
              {item}
            </li>
          ))}
        </ul>

        {/* Cierre */}
        <div data-reveal className="mt-12 space-y-4 max-w-2xl">
          <p className="text-base leading-relaxed text-espresso/70">{pq.cierre1}</p>
          <p className="text-base leading-relaxed text-espresso/70">
            {pq.cierre2Intro}{' '}
            <span className="font-display font-bold text-espresso">
              {pq.cierre2Destacado}
            </span>
            .
          </p>
        </div>

        {/* CTA */}
        <div data-reveal className="mt-12">
          <CtaButton source="porQue">{pq.cta}</CtaButton>
        </div>
      </div>
    </section>
  )
}
