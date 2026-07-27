import { Eye, Compass, Users, Lock } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'

const ICONS = [Eye, Compass, Users, Lock]

export default function TrustBar() {
  const scope = useReveal()
  const { t } = useLang()

  return (
    <section ref={scope} className="border-y border-espresso/10 bg-vanilla/40 px-6 py-10 sm:px-10">
      <div data-reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {t.trustbar.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div key={item.t} className="flex items-start gap-3">
              <Icon size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-matcha" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-semibold text-espresso">{item.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-espresso/60">{item.d}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
