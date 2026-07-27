import { useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { trackFormStart, trackFormSubmit, getUtmParams, buildWhatsAppUrl } from '../lib/tracking'
import { useLang } from '../lib/i18n'

const INPUT_CLASS =
  'w-full rounded-2xl border border-espresso/15 bg-white/70 px-5 py-3.5 text-sm text-espresso outline-none transition-all duration-300 placeholder:text-espresso/35 focus:border-matcha focus:bg-white focus:ring-2 focus:ring-matcha/25'

const LABEL_CLASS = 'mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/55'

export default function Formulario() {
  const { t } = useLang()
  const f = t.form

  const [datos, setDatos] = useState({
    origen: '',
    plazo: '',
    grupo: '',
    objetivo: '',
    ingresos: '',
    preocupacion: '',
    nombre: '',
    contacto: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')
  const started = useRef(false)

  const marcarInicio = () => {
    if (!started.current) {
      started.current = true
      trackFormStart()
    }
  }

  const setCampo = (campo) => (e) => {
    marcarInicio()
    setDatos((d) => ({ ...d, [campo]: e.target.value }))
  }

  const enviar = () => {
    if (!datos.nombre.trim() || !datos.contacto.trim()) {
      setError(f.error)
      return
    }
    setError('')
    trackFormSubmit()

    const utm = getUtmParams()
    const L = f.leadLabels
    const lineas = [
      `${L.nombre}: ${datos.nombre}`,
      `${L.contacto}: ${datos.contacto}`,
      datos.origen && `${L.origen}: ${datos.origen}`,
      datos.plazo && `${L.plazo}: ${datos.plazo}`,
      datos.grupo && `${L.grupo}: ${datos.grupo}`,
      datos.objetivo && `${L.objetivo}: ${datos.objetivo}`,
      datos.ingresos && `${L.ingresos}: ${datos.ingresos}`,
      datos.preocupacion && `${L.preocupacion}: ${datos.preocupacion}`,
      utm.utm_campaign && `[${L.campania}: ${utm.utm_source || ''}/${utm.utm_campaign}]`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsAppUrl(t.whatsappMessage, lineas), '_blank', 'noopener')
    setEnviado(true)
  }

  return (
    <section className="bg-vanilla/60 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">
          {f.kicker}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          {f.titleSans}{' '}
          <span className="font-serif font-medium italic text-matcha">{f.titleSerif}</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-espresso/70">{f.intro}</p>

        {enviado ? (
          <div className="mt-12 rounded-[2rem] border border-matcha/30 bg-white/80 p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-matcha text-white">
              <Check size={26} strokeWidth={2.5} />
            </span>
            <p className="mt-6 font-display text-xl font-semibold text-espresso">
              {f.gracias.titulo} {datos.nombre.split(' ')[0]}.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-espresso/65">{f.gracias.copy}</p>
          </div>
        ) : (
          <div className="mt-12 space-y-7">
            <div>
              <label className={LABEL_CLASS} htmlFor="ll-origen">
                {f.origen.label}
              </label>
              <input
                id="ll-origen"
                type="text"
                value={datos.origen}
                onFocus={marcarInicio}
                onChange={setCampo('origen')}
                placeholder={f.origen.placeholder}
                className={INPUT_CLASS}
              />
            </div>

            {Object.entries(f.selects).map(([campo, def]) => (
              <div key={campo}>
                <label className={LABEL_CLASS} htmlFor={`ll-${campo}`}>
                  {def.label}
                </label>
                <select
                  id={`ll-${campo}`}
                  value={datos[campo]}
                  onFocus={marcarInicio}
                  onChange={setCampo(campo)}
                  className={`${INPUT_CLASS} appearance-none ${datos[campo] ? '' : 'text-espresso/35'}`}
                >
                  <option value="">{f.elegi}</option>
                  {def.opciones.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div>
              <label className={LABEL_CLASS} htmlFor="ll-preocupacion">
                {f.preocupacion.label}
              </label>
              <textarea
                id="ll-preocupacion"
                rows={3}
                value={datos.preocupacion}
                onFocus={marcarInicio}
                onChange={setCampo('preocupacion')}
                placeholder={f.preocupacion.placeholder}
                className={`${INPUT_CLASS} resize-none`}
              />
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label className={LABEL_CLASS} htmlFor="ll-nombre">
                  {f.nombre.label}
                </label>
                <input
                  id="ll-nombre"
                  type="text"
                  value={datos.nombre}
                  onFocus={marcarInicio}
                  onChange={setCampo('nombre')}
                  placeholder={f.nombre.placeholder}
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className={LABEL_CLASS} htmlFor="ll-contacto">
                  {f.contacto.label}
                </label>
                <input
                  id="ll-contacto"
                  type="text"
                  value={datos.contacto}
                  onFocus={marcarInicio}
                  onChange={setCampo('contacto')}
                  placeholder={f.contacto.placeholder}
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            {error && (
              <p className="font-mono text-xs tracking-wide text-terracota">{error}</p>
            )}

            <button
              type="button"
              onClick={enviar}
              className="btn-magnetic w-full rounded-full bg-matcha px-8 py-4 text-base font-semibold text-white shadow-lg shadow-matcha/30 sm:w-auto"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {f.cta}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
