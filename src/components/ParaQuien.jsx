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

        <p data-reveal className="mt-7 max-w-3xl text-base leading-relaxed text-espresso/75">
          {pq.intro}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
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
                <p className={`mt-3 text-sm leading-relaxed ${principal ? 'text-white/80' : 'text-espresso/75'}`}>
                  {perfil.d}
                </p>
              </div>
            )
          })}
        </div>

        <p data-reveal className="mt-14 max-w-3xl border-l-4 border-terracota pl-6 font-display text-xl font-semibold leading-snug text-espresso sm:text-2xl">
          {pq.filtro}
        </p>
      </div>
    </section>
  )
}
