import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { TESTIMONIALS } from '../content/testimonials'
import SectionHeader from './SectionHeader'

// Testimonios editables desde src/content/testimonials.js.
// Mientras isDemo sea true, se muestra un sello inconfundible:
// imposible que un demo llegue a producción pareciendo real.
export default function Testimonios() {
  const scope = useReveal()
  const { t, lang } = useLang()
  const ts = t.testimonios
  const items = TESTIMONIALS[lang] || TESTIMONIALS.es

  return (
    <section ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={ts.kicker} titleSans={ts.titleSans} titleSerif={ts.titleSerif} />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={i}
              data-reveal
              className="relative flex flex-col rounded-[2rem] border border-espresso/10 bg-white/60 p-8"
            >
              {item.isDemo && (
                <p className="mb-4 inline-block self-start rounded bg-terracota/20 px-3 py-1.5 font-mono text-[9px] font-extrabold tracking-widest text-terracota ring-1 ring-terracota/30">
                  {ts.demoBadge}
                </p>
              )}
              <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-espresso/80">
                “{item.texto}”
              </blockquote>
              <figcaption className="mt-6 border-t border-espresso/10 pt-4">
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
