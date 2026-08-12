import { KeyRound } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'

// [MEJORA #3] La red local curada, con números que demuestran sustancia
// sin exponer identidades de proveedores.
export default function Red() {
  const scope = useReveal()
  const { t } = useLang()
  const r = t.red

  return (
    <section id="red" ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={r.kicker} titleSans={r.titleSans} titleSerif={r.titleSerif} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-5" data-reveal>
            <p className="text-base leading-relaxed text-espresso/70">{r.copy}</p>
            <p className="text-base leading-relaxed text-espresso/70">{r.copy2}</p>

            <div className="mt-8 space-y-5">
              {r.principios.map((p) => (
                <div key={p.t} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                  <div>
                    <p className="font-display text-sm font-bold text-espresso">{p.t}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-espresso/60">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="rounded-[2rem] bg-matcha p-6 text-white shadow-xl shadow-matcha/25 sm:p-8 lg:p-10 overflow-x-hidden">
            <div className="flex items-center gap-3">
              <KeyRound size={18} strokeWidth={1.75} aria-hidden="true" className="text-vanilla" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-[11px] sm:tracking-[0.3em]">{r.statsTitle}</p>
            </div>
            <dl className="mt-8 space-y-5 sm:space-y-6">
              {r.stats.map((s) => (
                <div key={s.d} className="flex items-start gap-3 sm:gap-4">
                  <dt className="sr-only">{s.d}</dt>
                  <dd className="font-display text-2xl sm:text-4xl font-bold tracking-tight shrink-0">{s.n}</dd>
                  <dd className="text-xs sm:text-sm text-white/80 leading-snug">{s.d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-t border-white/20 pt-5 font-serif text-lg italic text-vanilla">
              {r.statsFoot}
            </p>
          </div>
        </div>

        <div data-reveal className="mt-12 max-w-3xl space-y-4">
          <p className="text-sm leading-relaxed text-espresso/60">{r.statsNote}</p>
          <p className="text-sm leading-relaxed text-espresso/60">{r.bilateral}</p>
        </div>
      </div>
    </section>
  )
}
