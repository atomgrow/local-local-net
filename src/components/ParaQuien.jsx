import { Home, TrendingUp, Building2 } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'

const ICONS = [Home, TrendingUp, Building2]

export default function ParaQuien() {
  const scope = useReveal()
  const { t } = useLang()
  const pq = t.paraQuien

  return (
    <section ref={scope} className="bg-vanilla/50 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={pq.kicker} titleSans={pq.titleSans} titleSerif={pq.titleSerif} />

        <p data-reveal className="mt-7 max-w-3xl text-base leading-relaxed text-espresso/70">
          {pq.intro}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pq.perfiles.map((perfil, i) => {
            const Icon = ICONS[i]
            const principal = i === 0
            return (
              <div
                key={perfil.t}
                data-reveal
                className={[
                  'rounded-[2rem] p-8',
                  principal
                    ? 'bg-matcha text-white shadow-xl shadow-matcha/25'
                    : 'border border-espresso/10 bg-white/60',
                ].join(' ')}
              >
                <Icon
                  size={22}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className={principal ? 'text-vanilla' : 'text-matcha'}
                />
                <h3 className={`mt-5 font-display text-lg font-bold ${principal ? 'text-white' : 'text-espresso'}`}>
                  {perfil.t}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${principal ? 'text-white/80' : 'text-espresso/60'}`}>
                  {perfil.d}
                </p>
              </div>
            )
          })}
        </div>

        <p data-reveal className="mt-10 max-w-2xl text-sm italic leading-relaxed text-espresso/55">
          {pq.filtro}
        </p>
      </div>
    </section>
  )
}
