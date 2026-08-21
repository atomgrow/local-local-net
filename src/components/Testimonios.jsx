import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { TESTIMONIALS } from '../content/testimonials'
import SectionHeader from './SectionHeader'

export default function Testimonios() {
  const scope = useReveal()
  const { t, lang } = useLang()
  const ts = t.testimonios
  const items = TESTIMONIALS[lang] || TESTIMONIALS.es

  return (
    <section id="testimonios" ref={scope} className="bg-almond px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={ts.kicker} titleSans={ts.titleSans} titleSerif={ts.titleSerif} />

        <div className="mt-8 sm:mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <figure key={i} data-reveal className="relative flex flex-col rounded-3xl border border-espresso/10 bg-white/60 p-6 sm:p-7">
              {item.isDemo && (
                <p className="mb-4 inline-block self-start rounded bg-terracota/20 px-3 py-1.5 font-mono text-xs font-extrabold tracking-widest text-terracota ring-1 ring-terracota/30">
                  {ts.demoBadge}
                </p>
              )}
              <blockquote className="flex-1 font-serif text-base italic leading-relaxed text-espresso/80">
                "{item.texto}"
              </blockquote>
              <figcaption className="mt-4 border-t border-espresso/10 pt-3">
                <p className="font-display text-sm font-bold text-espresso">{item.nombre}</p>
                <p className="text-xs text-espresso/55">
                  {item.relacion}
                  {item.ubicacion ? ` · ${item.ubicacion}` : ''}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
