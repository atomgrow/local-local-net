import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../lib/i18n'
import { trackEvent } from '../lib/tracking'

// Fotografías reales de Tandil (@santiarbeoph). Los originales disponibles
// son de 1024px; en pantallas grandes el degradado disimula el reescalado.
// [PENDIENTE] Si se consiguen exports en alta resolución, reemplazar estos
// archivos en src/assets manteniendo los nombres.
import heroLandscape from '../assets/tandil-hero.jpg'
import heroPortrait from '../assets/tandil-barrio-sierras.jpg'

export default function Hero() {
  const scope = useRef(null)
  const { t } = useLang()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-fade]', {
          y: 36,
          opacity: 0,
          duration: 1.1,
          stagger: 0.14,
          delay: 0.25,
        })
    }, scope)
    return () => ctx.revert()
  }, [])

  const go = (id, source) => {
    trackEvent(`${source}_cta_click`)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={scope} className="relative flex min-h-dvh items-end overflow-hidden">
      {/* Vertical (barrio entre sierras) en pantallas altas; panorámica al
          atardecer en pantallas apaisadas. */}
      <picture>
        <source media="(orientation: portrait)" srcSet={heroPortrait} />
        <img
          src={heroLandscape}
          alt={t.hero.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      {/* Degradado matcha → espresso para contraste del titular */}
      <div className="absolute inset-0 bg-gradient-to-b from-matcha/40 via-espresso/45 to-espresso/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:px-10 sm:pb-24">
        <div className="max-w-2xl">
          <p
            data-hero-fade
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-almond/70"
          >
            {t.hero.kicker}
          </p>

          <h1 data-hero-fade className="text-white">
            <span className="block font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {t.hero.titleSans}
            </span>
            <span
              className="mt-2 block text-4xl leading-[1.05] text-vanilla sm:text-6xl"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}
            >
              {t.hero.titleSerif}
            </span>
          </h1>

          <p
            data-hero-fade
            className="mt-7 max-w-xl text-base leading-relaxed text-almond/90 sm:text-lg"
          >
            {t.hero.sub}
          </p>

          <p data-hero-fade className="mt-4 max-w-xl text-sm leading-relaxed text-almond/60">
            {t.hero.apoyo}
          </p>

          <div data-hero-fade className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => go('evaluar', 'hero')}
              className="btn-magnetic rounded-full bg-terracota px-8 py-4 text-base font-semibold text-white shadow-xl shadow-espresso/30"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {t.hero.cta}
            </button>
            <button
              type="button"
              onClick={() => go('metodo', 'hero_metodo')}
              className="rounded-full border border-white/40 px-7 py-4 text-base font-medium text-white transition-colors hover:border-white"
            >
              {t.hero.ctaSec}
            </button>
          </div>
          <p data-hero-fade className="mt-4 font-mono text-[11px] tracking-wider text-almond/60">
            {t.hero.micro}
          </p>
        </div>
      </div>
    </section>
  )
}
