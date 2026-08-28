import { Linkedin } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { LINKS } from '../config'
import { trackEvent } from '../lib/tracking'
import SectionHeader from './SectionHeader'
import bernardoRetrato from '../assets/bernardo-retrato.jpg'

// [MEJORA #4] Bernardo: humanización + autoridad + compromiso personal.
const BERNARDO_PHOTO = bernardoRetrato

export default function Nosotros() {
  const scope = useReveal()
  const { t } = useLang()
  const n = t.nosotros

  return (
    <section id="nosotros" ref={scope} className="bg-vanilla/50 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={n.kicker} titleSans={n.titleSans} titleSerif={n.titleSerif} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Foto + tarjeta de identidad */}
          <div data-reveal>
            <figure className="overflow-hidden rounded-[2rem] shadow-xl shadow-espresso/10">
              {BERNARDO_PHOTO ? (
                <img src={BERNARDO_PHOTO} alt={n.fotoAlt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              ) : (
                <div
                  role="img"
                  aria-label={n.fotoAlt}
                  className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-matcha/35 via-vanilla to-terracota/15"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-espresso/85 font-display text-2xl font-bold text-vanilla">
                    BC
                  </span>
                  <span className="rounded-md border border-espresso/20 bg-white/70 px-3 py-1 font-mono text-[10px] tracking-widest text-espresso/50">
                    RETRATO · PLACEHOLDER
                  </span>
                </div>
              )}
            </figure>
            <p className="mt-5 font-display text-lg font-bold text-espresso">{n.nombre}</p>
            <p className="text-sm text-espresso/55">{n.rol}</p>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('linkedin_click')}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-matcha transition-colors hover:text-espresso"
            >
              <Linkedin size={15} strokeWidth={2} aria-hidden="true" />
              {n.cta}
            </a>
          </div>

          {/* Historia + expertise + compromiso */}
          <div className="space-y-10">
            <div data-reveal className="space-y-4">
              {n.historia.map((p) => (
                <p key={p.slice(0, 24)} className="text-base leading-relaxed text-espresso/75">
                  {p}
                </p>
              ))}
            </div>

            <div data-reveal>
              <p className="font-display text-sm font-bold text-espresso">{n.expertiseLabel}</p>
              <ul className="mt-4 space-y-2.5">
                {n.expertise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-espresso/70">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracota" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic leading-relaxed text-espresso/60">{n.expertiseCierre}</p>
            </div>

            <div data-reveal>
              <p className="font-display text-sm font-bold text-espresso">{n.compromisoLabel}</p>
              <blockquote className="mt-4 rounded-[2rem] bg-espresso p-8 text-almond">
                {n.compromiso.map((p, i) => (
                  <p
                    key={p.slice(0, 24)}
                    className={
                      i === n.compromiso.length - 1
                        ? 'mt-4 font-serif text-xl italic text-vanilla'
                        : `text-sm leading-relaxed text-almond/80 ${i > 0 ? 'mt-3' : ''}`
                    }
                  >
                    {p}
                  </p>
                ))}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
