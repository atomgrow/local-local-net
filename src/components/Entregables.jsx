import { Check } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'

// Qué recibe el cliente: hace tangible el servicio.
// Preparado para incorporar precio vía DIAGNOSTIC_PRICE (config.js).
export default function Entregables() {
  const scope = useReveal()
  const { t } = useLang()
  const e = t.entregables

  return (
    <section ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker={e.kicker} titleSans={e.titleSans} titleSerif={e.titleSerif} />

        <ul data-reveal className="mt-12 grid gap-3 sm:grid-cols-2">
          {e.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-espresso/75">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-matcha/15 text-matcha"
              >
                <Check size={12} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-10 max-w-2xl border-l-2 border-terracota/50 pl-5 text-sm italic leading-relaxed text-espresso/60">
          {e.nota}
        </p>
      </div>
    </section>
  )
}
