import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'
import bernardoRetrato from '../assets/bernardo-retrato.jpg'

// Presencia de Bernardo en la home: el servicio depende de su criterio y su red.
export default function BernardoHome() {
  const scope = useReveal()
  const { t } = useLang()
  const n = t.nosotros
  const b = t.bernardoHome

  return (
    <section ref={scope} className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <figure data-reveal className="overflow-hidden rounded-[2rem] shadow-xl shadow-espresso/10">
          <img
            src={bernardoRetrato}
            alt={n.fotoAlt}
            width="1254"
            height="1254"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </figure>

        <div data-reveal className="space-y-6">
          <SectionHeader kicker={b.kicker} titleSans={n.titleSans} titleSerif={n.titleSerif} />

          <div>
            <p className="font-display text-lg font-bold text-black">{n.nombre}</p>
            <p className="text-sm text-black">{n.rol}</p>
          </div>

          {b.parrafos.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-black">
              {p}
            </p>
          ))}

          <Link
            to="/nosotros"
            className="inline-flex text-sm font-semibold text-terracota transition-colors hover:text-espresso"
          >
            {b.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
