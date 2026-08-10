import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { openWhatsApp, trackEvent } from '../lib/tracking'
import SectionHeader from './SectionHeader'
import CtaButton from './CtaButton'

export default function Servicios() {
  const scope = useReveal()
  const { t, lang } = useLang()
  const s = t.servicios

  const handleWhatsApp = () => {
    trackEvent('servicios_whatsapp_click')
    openWhatsApp('servicios', t.whatsappMessage)
  }

  return (
    <section id="servicios" ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker={s.kicker} titleSans={s.titleSans} titleSerif={s.titleSerif} />

        {/* Etapas */}
        <div className="mt-16 space-y-12">
          {s.etapas.map((etapa, i) => (
            <article
              key={etapa.num}
              data-reveal
              className="rounded-[2rem] border border-espresso/10 bg-white/60 p-8 sm:p-10"
            >
              {/* Encabezado */}
              <div className="mb-6">
                <span className="font-mono text-xs text-terracota">{etapa.num}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-espresso">
                  {etapa.titulo}
                </h3>
                <div className="mt-3 space-y-1">
                  {etapa.modalidad && (
                    <p className="text-sm text-espresso/70">
                      <span className="font-bold">{lang === 'es' ? 'Modalidad:' : 'Format:'}</span> {etapa.modalidad}
                    </p>
                  )}
                  {etapa.estadiaEstimada && (
                    <p className="text-sm text-espresso/70">
                      <span className="font-bold">{lang === 'es' ? 'Estadía estimada:' : 'Estimated stay:'}</span> {etapa.estadiaEstimada}
                    </p>
                  )}
                </div>
              </div>

              {/* Párrafos de descripción */}
              {etapa.parrafos.length > 0 && (
                <div className="space-y-4 mb-6">
                  {etapa.parrafos.map((parrafo, j) => (
                    <p key={j} className="text-sm leading-relaxed text-espresso/65">
                      {parrafo}
                    </p>
                  ))}
                </div>
              )}

              {/* Incluye */}
              {etapa.incluye.length > 0 && (
                <div className="mb-6">
                  <p className="font-display text-sm font-bold text-espresso mb-3">
                    {etapa.incluyeLabel}
                  </p>
                  <ul className="space-y-2">
                    {etapa.incluye.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed text-espresso/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-matcha" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Valor */}
              {etapa.valor && (
                <p className="font-display text-base font-bold text-terracota mb-6">
                  {etapa.valor}
                </p>
              )}

              {/* Notas */}
              {etapa.notas.length > 0 && (
                <div className="pt-6 border-t border-espresso/10 space-y-3">
                  {etapa.notas.map((nota, j) => (
                    <p key={j} className="text-xs leading-relaxed text-espresso/55">
                      {nota}
                    </p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Un recorrido flexible */}
        <div data-reveal className="mt-16 rounded-[2rem] border border-matcha/25 bg-matcha/[0.08] p-8 sm:p-10">
          <h3 className="font-display text-xl font-bold text-espresso mb-4">
            {s.flexibleTitulo}
          </h3>
          <div className="space-y-4">
            {s.flexible.map((parrafo, i) => (
              <p key={i} className="text-sm leading-relaxed text-espresso/70">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="btn-magnetic rounded-full bg-terracota px-8 py-3.5 text-sm font-semibold text-white"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {s.cta}
            </button>
          </div>
        </div>

        {/* Confidencialidad */}
        {s.confidencialidad && (
          <div data-reveal className="mt-20">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-espresso/50 mb-4">
                {s.confidencialidad.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-espresso">
                {s.confidencialidad.titleSans}{' '}
                <span className="font-serif font-medium italic text-terracota">{s.confidencialidad.titleSerif}</span>
              </h2>
            </div>

            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-sm leading-relaxed text-espresso/70">{s.confidencialidad.copy}</p>
              <p className="text-sm leading-relaxed text-espresso/70">{s.confidencialidad.copy2}</p>

              {s.confidencialidad.puntos.length > 0 && (
                <ul className="space-y-3">
                  {s.confidencialidad.puntos.map((punto, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-espresso/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                      {punto}
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-sm italic leading-relaxed text-espresso/60 pt-4 border-t border-espresso/10">
                {s.confidencialidad.cierre}
              </p>

              <div className="pt-4">
                <CtaButton source="confidentiality">{s.confidencialidad.cta}</CtaButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
