import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'

// [BONUS] Cómo comienza: desmitifica el proceso en tres pasos.
export default function ComoComienza() {
  const scope = useReveal()
  const { t } = useLang()
  const cc = t.comoComienza

  return (
    <section ref={scope} className="bg-vanilla/50 px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">
          {cc.kicker}
        </p>
        <h2 data-reveal className="mt-4 font-display text-2xl font-bold tracking-tight text-espresso sm:text-3xl">
          {cc.title}
        </h2>

        <ol data-reveal className="mt-12 flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-4">
          {cc.pasos.map((paso, i) => (
            <li key={paso.n} className="relative flex flex-1 flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-matcha font-display text-base font-bold text-white">
                {paso.n}
              </span>
              <p className="mt-4 max-w-52 font-display text-sm font-semibold leading-snug text-espresso">
                {paso.t}
              </p>
              <p className="mt-1.5 font-mono text-[10px] tracking-wider text-espresso/50">{paso.d}</p>
              {i < cc.pasos.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-0.75rem] top-4 hidden font-serif text-xl italic text-espresso/30 sm:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <p data-reveal className="mt-12 text-sm italic text-espresso/60">
          {cc.cierre}
        </p>
      </div>
    </section>
  )
}
