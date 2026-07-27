import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitWords from './SplitWords'
import { useLang } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Dolores() {
  const scope = useRef(null)
  const { t } = useLang()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-pregunta]').forEach((el) => {
        gsap.from(el.querySelectorAll('[data-split-word]'), {
          yPercent: 115,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.035,
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            once: true,
          },
        })
      })

      gsap.from('[data-cierre]', {
        opacity: 0,
        y: 28,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-cierre]',
          start: 'top 85%',
          once: true,
        },
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={scope} className="bg-almond px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="mb-14 font-mono text-[11px] uppercase tracking-[0.3em] text-espresso/50">
          {t.dolores.kicker}
        </p>

        <div className="space-y-12 sm:space-y-16">
          {t.dolores.preguntas.map((pregunta) => (
            <h2
              key={pregunta}
              data-pregunta
              className="font-display text-2xl font-semibold leading-snug tracking-tight text-espresso sm:text-4xl"
            >
              <SplitWords text={pregunta} />
            </h2>
          ))}
        </div>

        <p
          data-cierre
          className="mt-20 font-serif text-4xl italic leading-tight text-matcha sm:mt-24 sm:text-6xl"
        >
          {t.dolores.cierre}
        </p>
      </div>
    </section>
  )
}
