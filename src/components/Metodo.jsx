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
    <section id="metodo" ref={scope} className="bg-vanilla/50 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader kicker={m.kicker} titleSans={m.titleSans} titleSerif={m.titleSerif} />

          <div data-reveal className="mt-12">
            <p className="font-mono text-sm tracking-[0.15em] font-bold text-terracota whitespace-nowrap sm:tracking-[0.2em] md:text-lg md:tracking-[0.3em] lg:text-xl">
              {m.formula}
            </p>
          </div>
          <p data-reveal className="mt-10 text-sm leading-relaxed text-espresso/70 sm:text-base">
            {m.intro}
          </p>
        </div>

        {/* Masonry editorial: 3 componentes + 2 imágenes intercaladas */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {/* Componente 1 */}
          <div data-reveal className="rounded-[2rem] border border-espresso/15 bg-espresso/[0.04] p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-terracota">{m.componentes[0].num}</span>
              <h3 className="font-display text-xl font-bold text-espresso">{m.componentes[0].titulo}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-espresso/65">{m.componentes[0].copy}</p>
          </div>

          {/* Imagen 1: Vida local (caballo, personas) */}
          <div
            data-reveal
            className="overflow-hidden rounded-[2rem] bg-espresso/[0.08]"
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
          <div data-reveal className="rounded-[2rem] border border-espresso/15 bg-espresso/[0.04] p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-terracota">{m.componentes[1].num}</span>
              <h3 className="font-display text-xl font-bold text-espresso">{m.componentes[1].titulo}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-espresso/65">{m.componentes[1].copy}</p>
          </div>

          {/* Componente 3 (span 2 cols en desktop) */}
          <div data-reveal className="md:col-span-2 rounded-[2rem] border border-espresso/15 bg-espresso/[0.04] p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-terracota">{m.componentes[2].num}</span>
              <h3 className="font-display text-xl font-bold text-espresso">{m.componentes[2].titulo}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-espresso/65">{m.componentes[2].copy}</p>
          </div>

          {/* Imagen 2: Detalles de Tandil (rocas, flora) */}
          <div
            data-reveal
            className="overflow-hidden rounded-[2rem] bg-espresso/[0.08]"
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
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-espresso/50">
                {m.etapasLabel}
              </p>
            )}
            <ol className="divide-y divide-almond/10 rounded-[2rem] border border-espresso/15">
              {m.etapas.map((etapa, i) => {
                const open = abierta === i
                return (
                  <li key={etapa.t}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setAbierta(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-espresso/[0.04] focus-visible:bg-espresso/[0.06] focus-visible:outline-none"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-xs text-terracota">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-sm font-semibold text-espresso sm:text-base">{etapa.t}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`shrink-0 text-espresso/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {open && (
                      <p className="px-6 pb-5 pl-[4.25rem] text-sm leading-relaxed text-espresso/60">{etapa.d}</p>
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
