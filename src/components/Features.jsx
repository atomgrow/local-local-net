import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardCheck, Map, Users, MousePointer2 } from 'lucide-react'
import { useLang } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------
   Feature 1 — Baraja diagnóstica
   Tres tarjetas superpuestas que rotan cada 3 segundos con un
   rebote suave (cubic-bezier con overshoot).
------------------------------------------------------------ */
const CARTA_ICONS = [ClipboardCheck, Map, Users]

// Estilos por posición en la pila: frente, medio, fondo.
const SLOTS = [
  { y: 0, scale: 1, z: 30, opacity: 1 },
  { y: -22, scale: 0.94, z: 20, opacity: 0.75 },
  { y: -42, scale: 0.88, z: 10, opacity: 0.45 },
]

function BarajaDiagnostica({ labels, modulo }) {
  const [front, setFront] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFront((f) => (f + 1) % labels.length), 3000)
    return () => clearInterval(id)
  }, [labels.length])

  return (
    <div className="relative mt-14 h-56">
      {labels.map((label, i) => {
        const slot = SLOTS[(i - front + labels.length) % labels.length]
        const Icon = CARTA_ICONS[i]
        return (
          <div
            key={label}
            className="absolute inset-x-0 bottom-0 rounded-[2rem] border border-espresso/8 bg-white p-7 shadow-xl shadow-espresso/10"
            style={{
              transform: `translateY(${slot.y}px) scale(${slot.scale})`,
              zIndex: slot.z,
              opacity: slot.opacity,
              transition:
                'transform 0.75s cubic-bezier(0.34, 1.45, 0.64, 1), opacity 0.5s ease',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.25em] text-espresso/40">
                {modulo} 0{i + 1} / 03
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-matcha/15 text-matcha">
                <Icon size={18} strokeWidth={1.8} />
              </span>
            </div>
            <p className="mt-8 font-display text-xl font-semibold tracking-tight text-espresso">
              {label}
            </p>
            <div className="mt-4 h-1 w-12 rounded-full bg-terracota/70" />
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------
   Feature 2 — Telemetría en vivo
   Texto que se escribe solo, con cursor terracota y punto "en vivo".
------------------------------------------------------------ */
function TelemetriaEnVivo({ label, live, mensajes }) {
  const [texto, setTexto] = useState('')
  const stateRef = useRef({ msg: 0, char: 0, timer: null })

  useEffect(() => {
    const state = stateRef.current

    const tick = () => {
      const actual = mensajes[state.msg]
      if (state.char < actual.length) {
        state.char += 1
        setTexto(actual.slice(0, state.char))
        state.timer = setTimeout(tick, 42 + Math.random() * 40)
      } else {
        // Mensaje completo: pausa, borrado rápido y siguiente.
        state.timer = setTimeout(() => {
          state.msg = (state.msg + 1) % mensajes.length
          state.char = 0
          setTexto('')
          state.timer = setTimeout(tick, 500)
        }, 1700)
      }
    }

    state.timer = setTimeout(tick, 600)
    return () => clearTimeout(state.timer)
  }, [mensajes])

  return (
    <div className="mt-14 rounded-[2rem] border border-espresso/8 bg-espresso p-7 shadow-xl shadow-espresso/15">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.25em] text-almond/40">{label}</span>
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-almond/70">
          <span className="live-dot h-2 w-2 rounded-full bg-terracota" />
          {live}
        </span>
      </div>
      <div className="mt-8 flex min-h-20 items-start font-mono text-sm leading-relaxed text-almond">
        <span className="mr-3 select-none text-matcha">&gt;</span>
        <p>
          {texto}
          <span className="cursor-blink ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-terracota" />
        </p>
      </div>
      <div className="mt-6 flex gap-1.5">
        {mensajes.map((m) => (
          <span key={m} className="h-1 flex-1 rounded-full bg-almond/15" />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------
   Feature 3 — Agenda / Protocolo
   Un cursor SVG entra, selecciona un día, hace click, se mueve a
   "Guardar" y desaparece. Loop infinito con GSAP.
------------------------------------------------------------ */
const DIA_OBJETIVO = 5 // sábado

function AgendaProtocolo({ agenda }) {
  const scope = useRef(null)
  const cursorRef = useRef(null)
  const [activo, setActivo] = useState(null)
  const [guardado, setGuardado] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panel = scope.current
      const cursor = cursorRef.current
      const dia = panel.querySelector(`[data-dia="${DIA_OBJETIVO}"]`)
      const guardar = panel.querySelector('[data-guardar]')
      if (!dia || !guardar) return

      // Coordenadas de destino relativas al panel.
      const pos = (el) => {
        const p = panel.getBoundingClientRect()
        const r = el.getBoundingClientRect()
        return { x: r.left - p.left + r.width / 2, y: r.top - p.top + r.height / 2 }
      }

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.6,
        onRepeat: () => {
          setActivo(null)
          setGuardado(false)
        },
      })

      tl.set(cursor, { opacity: 0, x: 40, y: 190, scale: 1 })
        .to(cursor, { opacity: 1, duration: 0.4 })
        .to(cursor, {
          ...pos(dia),
          duration: 1.1,
          ease: 'power2.inOut',
        })
        .to(cursor, { scale: 0.8, duration: 0.12, yoyo: true, repeat: 1 })
        .call(() => setActivo(DIA_OBJETIVO))
        .to(cursor, {
          ...pos(guardar),
          duration: 0.9,
          ease: 'power2.inOut',
          delay: 0.45,
        })
        .to(cursor, { scale: 0.8, duration: 0.12, yoyo: true, repeat: 1 })
        .call(() => setGuardado(true))
        .to(cursor, { opacity: 0, duration: 0.5, delay: 0.7 })

      ScrollTrigger.create({
        trigger: panel,
        start: 'top 90%',
        onEnter: () => tl.play(),
        onLeave: () => tl.pause(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => tl.pause(),
      })
      tl.pause()
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={scope}
      className="relative mt-14 overflow-hidden rounded-[2rem] border border-espresso/8 bg-white p-7 shadow-xl shadow-espresso/10"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.25em] text-espresso/40">
          {agenda.label}
        </span>
        <span
          className={[
            'font-mono text-[10px] tracking-widest transition-colors duration-300',
            guardado ? 'text-matcha' : 'text-espresso/30',
          ].join(' ')}
        >
          {guardado ? agenda.agendado : agenda.sinAgendar}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-7 gap-2">
        {agenda.dias.map((dia, i) => (
          <div
            key={dia + i}
            data-dia={i}
            className={[
              'flex aspect-square items-center justify-center rounded-xl font-mono text-xs transition-all duration-300',
              activo === i
                ? 'scale-105 bg-terracota text-white shadow-lg shadow-terracota/30'
                : 'bg-almond text-espresso/60',
            ].join(' ')}
          >
            {dia}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <span
          data-guardar
          className={[
            'rounded-full px-5 py-2 font-mono text-[11px] tracking-wider transition-all duration-300',
            guardado ? 'bg-matcha text-white' : 'bg-espresso/8 text-espresso/50',
          ].join(' ')}
        >
          {agenda.guardar}
        </span>
      </div>

      {/* Cursor automático */}
      <div ref={cursorRef} className="pointer-events-none absolute left-0 top-0 z-20 opacity-0">
        <MousePointer2
          size={22}
          className="-translate-x-1 -translate-y-1 fill-espresso text-white drop-shadow-md"
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------
   Sección completa
------------------------------------------------------------ */
export default function Features() {
  const scope = useRef(null)
  const { t } = useLang()
  const f = t.features

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-feature]').forEach((el, i) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 1,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section id="metodo" ref={scope} className="bg-almond px-6 pb-28 pt-8 sm:px-10 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">
            {f.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-espresso sm:text-5xl">
            {f.titleSans}{' '}
            <span className="font-serif font-medium italic text-matcha">{f.titleSerif}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso/70">{f.intro}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div data-feature>
            <h3 className="font-display text-lg font-semibold tracking-tight text-espresso">
              {f.col1.h}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-espresso/60">{f.col1.p}</p>
            <BarajaDiagnostica labels={f.cartas} modulo={f.modulo} />
          </div>

          <div data-feature>
            <h3 className="font-display text-lg font-semibold tracking-tight text-espresso">
              {f.col2.h}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-espresso/60">{f.col2.p}</p>
            <TelemetriaEnVivo
              label={f.telemetria.label}
              live={f.telemetria.live}
              mensajes={f.telemetria.mensajes}
            />
          </div>

          <div data-feature>
            <h3 className="font-display text-lg font-semibold tracking-tight text-espresso">
              {f.col3.h}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-espresso/60">{f.col3.p}</p>
            <AgendaProtocolo agenda={f.agenda} />
          </div>
        </div>
      </div>
    </section>
  )
}
