import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger)

/* --- Visual 1: electrocardiograma — el pulso sano de una operación revisada --- */
function Waveform() {
  return (
    <svg viewBox="0 0 600 120" className="w-full" fill="none" aria-hidden="true">
      <line x1="0" y1="60" x2="600" y2="60" stroke="currentColor" strokeOpacity="0.15" />
      <path
        className="ecg-path"
        d="M0 60 H120 L140 60 L152 28 L166 92 L178 60 H300 L320 60 L332 24 L346 96 L358 60 H480 L500 60 L512 30 L526 90 L538 60 H600"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* --- Visual 2: rejilla con láser de escaneo — leyendo el territorio --- */
function ScanGrid() {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl border border-current/15">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      />
      {/* Puntos de interés detectados */}
      <span className="absolute left-[22%] top-[35%] h-2 w-2 rounded-full bg-terracota" />
      <span className="absolute left-[58%] top-[62%] h-2 w-2 rounded-full bg-terracota" />
      <span className="absolute left-[78%] top-[28%] h-2 w-2 rounded-full bg-terracota" />
      {/* Láser */}
      <div className="scan-laser absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent via-terracota/25 to-terracota/60" />
    </div>
  )
}

/* --- Visual 3: doble hélice rotando — la red que sostiene la mudanza --- */
function Helix() {
  const RUNGS = 7
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 200 200" className="helix-rotate h-44 w-44" fill="none" aria-hidden="true">
        <ellipse
          cx="100"
          cy="100"
          rx="82"
          ry="34"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(55 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="82"
          ry="34"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(-55 100 100)"
        />
        {Array.from({ length: RUNGS }).map((_, i) => {
          const y = 32 + (i * 136) / (RUNGS - 1)
          const spread = 34 * Math.abs(Math.sin((i / (RUNGS - 1)) * Math.PI * 2 + 0.4)) + 6
          return (
            <line
              key={i}
              x1={100 - spread}
              y1={y}
              x2={100 + spread}
              y2={y}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.55"
            />
          )
        })}
        <circle cx="100" cy="100" r="4" className="fill-terracota" />
      </svg>
    </div>
  )
}

const VISUALES = [Waveform, ScanGrid, Helix]
const THEMES = [
  { theme: 'bg-white text-espresso border border-espresso/8', accent: 'text-matcha' },
  { theme: 'bg-matcha text-white', accent: 'text-vanilla' },
  { theme: 'bg-espresso text-almond', accent: 'text-vanilla' },
]

export default function Archivo() {
  const scope = useRef(null)
  const { t } = useLang()
  const a = t.archivo

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray('[data-pilar-wrapper]')
      wrappers.forEach((wrapper, i) => {
        if (i === wrappers.length - 1) return
        // Cuando entra la tarjeta siguiente, la actual se hunde:
        // escala 0.9, blur 20px, opacidad 0.5.
        gsap.to(wrapper.querySelector('[data-pilar-card]'), {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'none',
          scrollTrigger: {
            trigger: wrappers[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section id="pilares" ref={scope} className="bg-almond px-4 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl px-2 sm:px-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">
            {a.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
            {a.titleSans}{' '}
            <span className="font-serif font-medium italic text-matcha">{a.titleSerif}</span>
          </h2>
        </div>

        {a.pilares.map((pilar, i) => {
          const Visual = VISUALES[i]
          const { theme, accent } = THEMES[i]
          return (
            <div
              key={pilar.codigo}
              data-pilar-wrapper
              className="sticky top-0 flex min-h-dvh items-center py-6"
            >
              <div
                data-pilar-card
                className={[
                  'grid w-full gap-10 rounded-[3rem] p-10 shadow-2xl shadow-espresso/15 will-change-transform sm:p-16 lg:grid-cols-2 lg:items-center lg:gap-16',
                  theme,
                ].join(' ')}
              >
                <div>
                  <p className={`font-mono text-[11px] tracking-[0.3em] ${accent}`}>
                    {pilar.codigo} {a.pilarDe}
                  </p>
                  <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed opacity-75 sm:text-lg">
                    {pilar.copy}
                  </p>
                </div>
                <div className="opacity-90">
                  <Visual />
                </div>
              </div>
            </div>
          )
        })}

        {/* Para quién es — listado estilo sistema */}
        <div className="relative z-10 mt-20 rounded-[2rem] border border-espresso/10 bg-almond/80 p-8 backdrop-blur sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-espresso/50">
            {a.paraQuien.label}
          </p>
          <p className="mt-5 font-mono text-sm leading-loose tracking-wide text-espresso sm:text-base">
            {a.paraQuien.lista.map((item, i) => (
              <span key={item}>
                {item}
                {i < a.paraQuien.lista.length - 1 && <span className="text-terracota"> · </span>}
              </span>
            ))}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-espresso/60">{a.paraQuien.sub}</p>
        </div>
      </div>
    </section>
  )
}
