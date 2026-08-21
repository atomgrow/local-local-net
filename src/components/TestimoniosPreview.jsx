import { useNavigate } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { TESTIMONIALS } from '../content/testimonials'
import SectionHeader from './SectionHeader'

export default function TestimoniosPreview() {
  const scope = useReveal()
  const { t, lang } = useLang()
  const navigate = useNavigate()
  const ts = t.testimonios
  const items = TESTIMONIALS[lang] || TESTIMONIALS.es

  const handleSeeMore = () => {
    navigate('/nosotros#testimonios')
  }

  return (
    <section ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={ts.kicker} titleSans={ts.titleSans} titleSerif={ts.titleSerif} />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.slice(0, 2).map((item, i) => (
            <figure
              key={i}
              data-reveal
              className="relative flex flex-col rounded-[2rem] border border-espresso/10 bg-white/60 p-8"
            >
              <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-espresso/80">
                "{item.texto}"
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

        <div data-reveal className="mt-12 rounded-xl bg-white/40 border border-espresso/10 p-6 sm:p-8 text-center">
          <p className="text-sm text-espresso/70 leading-relaxed mb-4">
            Mostramos algunas experiencias. Cuidamos la confidencialidad de nuestros clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center items-center">
            <button
              type="button"
              onClick={handleSeeMore}
              className="text-sm font-semibold text-terracota transition-colors hover:text-espresso"
            >
              Ver más experiencias →
            </button>
            <span className="hidden sm:inline text-espresso/30">·</span>
            <a
              href="/legales#confidencialidad"
              className="text-sm text-espresso/60 transition-colors hover:text-terracota underline"
            >
              Leer sobre confidencialidad
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
