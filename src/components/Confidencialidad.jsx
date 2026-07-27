import { ShieldCheck } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'
import CtaButton from './CtaButton'

export default function Confidencialidad() {
  const scope = useReveal()
  const { t } = useLang()
  const c = t.confidencialidad

  return (
    <section ref={scope} className="bg-vanilla/50 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker={c.kicker} titleSans={c.titleSans} titleSerif={c.titleSerif} />

        <div data-reveal className="mt-7 max-w-3xl space-y-4">
          <p className="text-base leading-relaxed text-espresso/70">{c.copy}</p>
          <p className="text-base leading-relaxed text-espresso/70">{c.copy2}</p>
        </div>

        <ul data-reveal className="mt-10 grid gap-4 sm:grid-cols-2">
          {c.puntos.map((punto) => (
            <li
              key={punto}
              className="flex items-start gap-3 rounded-2xl border border-espresso/10 bg-white/60 px-5 py-4 text-sm leading-relaxed text-espresso/75"
            >
              <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-matcha" />
              {punto}
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10">
          <CtaButton source="confidencialidad">{c.cta}</CtaButton>
        </div>
      </div>
    </section>
  )
}
