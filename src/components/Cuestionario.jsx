import { useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { LINKS } from '../config'
import {
  trackQuestionnaireStart,
  trackQuestionnaireStep,
  trackQuestionnaireComplete,
  trackEvent,
  getUtmParams,
  buildWhatsAppUrl,
} from '../lib/tracking'
import SectionHeader from './SectionHeader'

const INPUT_CLASS =
  'w-full rounded-2xl border border-espresso/15 bg-white/70 px-5 py-3.5 text-sm text-espresso outline-none transition-all duration-300 placeholder:text-espresso/35 focus:border-matcha focus:bg-white focus:ring-2 focus:ring-matcha/25'

const LABEL_CLASS = 'mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/55'

// Cuestionario inicial: tres preguntas + datos de contacto, un bloque
// por pantalla con indicador de progreso. El lead se envía por WhatsApp
// (mismo mecanismo probado de v1). El código queda preparado para
// ramificaciones futuras según la respuesta 1.
export default function Cuestionario() {
  const scope = useReveal()
  const { t } = useLang()
  const c = t.cuestionario

  const [paso, setPaso] = useState(0) // 0..2 preguntas, 3 datos, 4 gracias
  const [momento, setMomento] = useState('')
  const [evaluando, setEvaluando] = useState('')
  const [plazo, setPlazo] = useState('')
  const [datos, setDatos] = useState({ nombre: '', email: '', whatsapp: '', preferencia: '' })
  const [error, setError] = useState('')
  const started = useRef(false)

  const marcarInicio = () => {
    if (!started.current) {
      started.current = true
      trackQuestionnaireStart()
    }
  }

  const avanzar = (desde) => {
    trackQuestionnaireStep(desde + 1)
    setPaso(desde + 1)
  }

  const seleccionarEvaluando = (op) => {
    marcarInicio()
    setEvaluando(op)
  }

  const seleccionarPlazo = (op) => {
    marcarInicio()
    setPlazo(op)
  }

  const enviar = () => {
    if (!datos.nombre.trim() || (!datos.email.trim() && !datos.whatsapp.trim())) {
      setError(c.error)
      return
    }
    setError('')
    trackQuestionnaireComplete()

    const utm = getUtmParams()
    const L = c.leadLabels
    const lineas = [
      `${L.nombre}: ${datos.nombre}`,
      datos.email && `${L.email}: ${datos.email}`,
      datos.whatsapp && `${L.whatsapp}: ${datos.whatsapp}`,
      datos.preferencia && `${L.preferencia}: ${datos.preferencia}`,
      momento && `${L.momento}: ${momento}`,
      evaluando && `${L.evaluando}: ${evaluando}`,
      plazo && `${L.plazo}: ${plazo}`,
      utm.utm_campaign && `[${L.campania}: ${utm.utm_source || ''}/${utm.utm_campaign}]`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsAppUrl(t.whatsappMessage, lineas), '_blank', 'noopener')
    setPaso(4)
  }

  const postDiagnostico = () => {
    trackEvent('diagnostic_cta_click', { from: 'questionnaire' })
    if (LINKS.booking) {
      window.open(LINKS.booking, '_blank', 'noopener')
    } else {
      document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const postExplorando = () => {
    document.getElementById('guia')?.scrollIntoView({ behavior: 'smooth' })
  }

  const Progreso = ({ actual }) => (
    <p className="font-mono text-[11px] tracking-[0.25em] text-espresso/45" aria-live="polite">
      {actual} {c.progreso} 3
    </p>
  )

  const BotonAtras = ({ a }) => (
    <button
      type="button"
      onClick={() => setPaso(a)}
      className="rounded-full border border-espresso/20 px-6 py-3 text-sm font-medium text-espresso/70 transition-colors hover:border-espresso/40"
    >
      {c.atras}
    </button>
  )

  const BotonSiguiente = ({ desde, disabled }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => avanzar(desde)}
      className="btn-magnetic rounded-full bg-matcha px-8 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
      {c.siguiente}
    </button>
  )

  return (
    <section id="evaluar" ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeader kicker={c.kicker} titleSans={c.titleSans} titleSerif={c.titleSerif} />

        <div data-reveal className="mt-10 rounded-[2.5rem] border border-espresso/10 bg-white/60 p-8 sm:p-10">
          {paso === 0 && (
            <fieldset>
              <Progreso actual={1} />
              <legend className="mt-4 font-display text-xl font-bold text-espresso">{c.q1.label}</legend>
              <div className="mt-6 space-y-3">
                {c.q1.opciones.map((op) => (
                  <button
                    key={op}
                    type="button"
                    aria-pressed={momento === op}
                    onClick={() => {
                      marcarInicio()
                      setMomento(op)
                    }}
                    className={[
                      'w-full rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-colors duration-300',
                      momento === op
                        ? 'border-matcha bg-matcha/10 text-espresso'
                        : 'border-espresso/15 bg-white/50 text-espresso/70 hover:border-matcha/50',
                    ].join(' ')}
                  >
                    {op}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <BotonSiguiente desde={0} disabled={!momento} />
              </div>
            </fieldset>
          )}

          {paso === 1 && (
            <fieldset>
              <Progreso actual={2} />
              <legend className="mt-4 font-display text-xl font-bold text-espresso">{c.q2.label}</legend>
              <div className="mt-6 space-y-3">
                {c.q2.opciones.map((op) => (
                  <button
                    key={op}
                    type="button"
                    aria-pressed={evaluando === op}
                    onClick={() => seleccionarEvaluando(op)}
                    className={[
                      'w-full rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-colors duration-300',
                      evaluando === op
                        ? 'border-matcha bg-matcha/10 text-espresso'
                        : 'border-espresso/15 bg-white/50 text-espresso/70 hover:border-matcha/50',
                    ].join(' ')}
                  >
                    {op}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <BotonAtras a={0} />
                <BotonSiguiente desde={1} disabled={!evaluando} />
              </div>
            </fieldset>
          )}

          {paso === 2 && (
            <fieldset>
              <Progreso actual={3} />
              <legend className="mt-4 font-display text-xl font-bold text-espresso">{c.q3.label}</legend>
              <div className="mt-6 space-y-3">
                {c.q3.opciones.map((op) => (
                  <button
                    key={op}
                    type="button"
                    aria-pressed={plazo === op}
                    onClick={() => seleccionarPlazo(op)}
                    className={[
                      'w-full rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-colors duration-300',
                      plazo === op
                        ? 'border-matcha bg-matcha/10 text-espresso'
                        : 'border-espresso/15 bg-white/50 text-espresso/70 hover:border-matcha/50',
                    ].join(' ')}
                  >
                    {op}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <BotonAtras a={1} />
                <BotonSiguiente desde={2} disabled={!plazo} />
              </div>
            </fieldset>
          )}

          {paso === 3 && (
            <fieldset>
              <legend className="font-display text-xl font-bold text-espresso">{c.datos.label}</legend>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={LABEL_CLASS} htmlFor="ll-nombre">
                    {c.datos.nombre}
                  </label>
                  <input
                    id="ll-nombre"
                    type="text"
                    autoComplete="name"
                    value={datos.nombre}
                    onChange={(e) => setDatos((d) => ({ ...d, nombre: e.target.value }))}
                    placeholder={c.datos.nombrePh}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className={LABEL_CLASS} htmlFor="ll-email">
                    {c.datos.email}
                  </label>
                  <input
                    id="ll-email"
                    type="email"
                    autoComplete="email"
                    value={datos.email}
                    onChange={(e) => setDatos((d) => ({ ...d, email: e.target.value }))}
                    placeholder={c.datos.emailPh}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className={LABEL_CLASS} htmlFor="ll-whatsapp">
                    {c.datos.whatsapp}
                  </label>
                  <input
                    id="ll-whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={datos.whatsapp}
                    onChange={(e) => setDatos((d) => ({ ...d, whatsapp: e.target.value }))}
                    placeholder={c.datos.whatsappPh}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className={LABEL_CLASS} htmlFor="ll-preferencia">
                    {c.datos.preferencia}
                  </label>
                  <select
                    id="ll-preferencia"
                    value={datos.preferencia}
                    onChange={(e) => setDatos((d) => ({ ...d, preferencia: e.target.value }))}
                    className={`${INPUT_CLASS} appearance-none ${datos.preferencia ? '' : 'text-espresso/35'}`}
                  >
                    <option value="">—</option>
                    {c.datos.preferencias.map((op) => (
                      <option key={op} value={op}>
                        {op}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {error && (
                <p role="alert" className="mt-4 font-mono text-xs tracking-wide text-terracota">
                  {error}
                </p>
              )}

              <div className="mt-8 flex justify-between">
                <BotonAtras a={2} />
                <button
                  type="button"
                  onClick={enviar}
                  className="btn-magnetic rounded-full bg-terracota px-9 py-3.5 text-sm font-semibold text-white"
                >
                  <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
                  {c.enviar}
                </button>
              </div>
            </fieldset>
          )}

          {paso === 4 && (
            <div className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-matcha text-white">
                <Check size={26} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <p className="mt-6 font-display text-xl font-semibold text-espresso">
                {c.graciasTitulo} {datos.nombre.split(' ')[0]}.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/65">{c.graciasCopy}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={postDiagnostico}
                  className="btn-magnetic rounded-full bg-terracota px-7 py-3.5 text-sm font-semibold text-white"
                >
                  <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
                  {c.postCtaPrincipal}
                </button>
                <button
                  type="button"
                  onClick={postExplorando}
                  className="rounded-full border border-espresso/20 px-7 py-3.5 text-sm font-medium text-espresso/70 transition-colors hover:border-espresso/40"
                >
                  {c.postCtaSecundario}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
