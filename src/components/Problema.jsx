import { X, Check } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import problemaImg from '../assets/problema-bg.jpg'

// [MEJORA #2] Fondo cinematográfico + tarjetas glass effect

export default function Problema() {
  const scope = useReveal()
  const { t } = useLang()
  const p = t.problema

  return (
    <section
      ref={scope}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Fondo parallax */}
      <img
        src={problemaImg}
        alt="Tandil landscape"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradientes overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />

      {/* Contenido centrado */}
      <div className="relative z-10 w-full px-6 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div
            data-reveal
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-almond/60 mb-6">
              {p.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
              {p.titleSans}{' '}
              <span className="font-serif font-medium italic text-vanilla/95">{p.titleSerif}</span>
            </h2>

            <div className="mt-7 space-y-4">
              <p className="text-base leading-relaxed text-almond/80">{p.intro}</p>
              <p className="text-base font-medium leading-relaxed text-white">{p.intro2}</p>
            </div>
          </div>

          {/* Escenarios con glass effect */}
          <div className="grid gap-4 md:grid-cols-2">
            {p.escenarios.map((esc, i) => (
              <article
                key={esc.titulo}
                data-reveal
                className="overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] backdrop-blur-md p-7 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12]"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <h3 className="font-display text-lg font-bold text-white mb-4">
                  {esc.titulo}
                </h3>

                <div className="space-y-4">
                  {/* Sin */}
                  <div>
                    <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-terracota/80">
                      {esc.sinLabel}
                    </p>
                    <ul className="space-y-2">
                      {esc.sin.slice(0, 2).map((linea) => (
                        <li key={linea} className="flex items-start gap-2.5 text-sm leading-snug text-almond/75">
                          <X size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-terracota/70" aria-hidden="true" />
                          <span>{linea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Con */}
                  <div className="border-t border-white/10 pt-4">
                    <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-matcha/80">
                      {esc.conLabel}
                    </p>
                    <ul className="space-y-2">
                      {esc.con.slice(0, 2).map((linea) => (
                        <li key={linea} className="flex items-start gap-2.5 text-sm leading-snug text-white/80">
                          <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-matcha" aria-hidden="true" />
                          <span>{linea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p data-reveal className="mt-12 text-center text-sm italic leading-relaxed text-almond/60 max-w-2xl mx-auto">
            {p.cierre}
          </p>
        </div>
      </div>
    </section>
  )
}
