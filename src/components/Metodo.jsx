import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import SectionHeader from './SectionHeader'
import CtaButton from './CtaButton'
import metodoVidaImg from '../assets/metodo-vida.jpg'
import metodoDetalleImg from '../assets/metodo-detalle.jpg'

// Método Local Local: Masonry editorial con fotos intercaladas

export default function Metodo() {
  const scope = useReveal()
  const { t } = useLang()
  const m = t.metodo
  const [abierta, setAbierta] = useState(-1)

  return (
    <section id="metodo" ref={scope} className="bg-espresso px-6 py-24 text-almond sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker={m.kicker} titleSans={m.titleSans} titleSerif={m.titleSerif} dark />

        <p data-reveal className="mt-6 font-mono text-xs tracking-[0.2em] text-vanilla/80 sm:text-sm">
          {m.formula}
        </p>
        <p data-reveal className="mt-5 max-w-2xl text-base leading-relaxed text-almond/70">
          {m.intro}
        </p>

        {/* Masonry editorial: 3 componentes + 2 imágenes intercaladas */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {/* Componente 1 */}
          <div data-reveal className="rounded-[2rem] border border-almond/15 bg-almond/[0.04] p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-terracota">{m.componentes[0].num}</span>
              <h3 className="font-display text-xl font-bold text-white">{m.componentes[0].titulo}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-almond/65">{m.componentes[0].copy}</p>
          </div>

          {/* Imagen 1: Vida local (caballo, personas) */}
          <div
            data-reveal
            className="overflow-hidden rounded-[2rem] bg-almond/[0.08]"
            style={{
              backgroundImage: `url(${metodoVidaImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '280px',
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
          </div>

          {/* Componente 2 */}
          <div data-reveal className="rounded-[2rem] border border-almond/15 bg-almond/[0.04] p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-terracota">{m.componentes[1].num}</span>
              <h3 className="font-display text-xl font-bold text-white">{m.componentes[1].titulo}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-almond/65">{m.componentes[1].copy}</p>
          </div>

          {/* Componente 3 (span 2 cols en desktop) */}
          <div data-reveal className="md:col-span-2 rounded-[2rem] border border-almond/15 bg-almond/[0.04] p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-terracota">{m.componentes[2].num}</span>
              <h3 className="font-display text-xl font-bold text-white">{m.componentes[2].titulo}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-almond/65">{m.componentes[2].copy}</p>
          </div>

          {/* Imagen 2: Detalles de Tandil (rocas, flora) */}
          <div
            data-reveal
            className="overflow-hidden rounded-[2rem] bg-almond/[0.08]"
            style={{
              backgroundImage: `url(${metodoDetalleImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '280px',
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
          </div>
        </div>

        {m?.etapas && (
          <div data-reveal className="mt-16">
            {m.etapasLabel && (
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-almond/50">
                {m.etapasLabel}
              </p>
            )}
            <ol className="divide-y divide-almond/10 rounded-[2rem] border border-almond/15">
              {m.etapas.map((etapa, i) => {
                const open = abierta === i
                return (
                  <li key={etapa.t}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setAbierta(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-almond/[0.04] focus-visible:bg-almond/[0.06] focus-visible:outline-none"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-xs text-terracota">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-sm font-semibold text-almond sm:text-base">{etapa.t}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`shrink-0 text-almond/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {open && (
                      <p className="px-6 pb-5 pl-[4.25rem] text-sm leading-relaxed text-almond/60">{etapa.d}</p>
                    )}
                  </li>
                )
              })}
            </ol>
            {m.aclaracion && <p className="mt-5 text-sm italic text-vanilla/80">{m.aclaracion}</p>}
          </div>
        )}

        <div data-reveal className="mt-12">
          <CtaButton source="method">{m.cta}</CtaButton>
        </div>
      </div>
    </section>
  )
}
