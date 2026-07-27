import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitWords from './SplitWords'
import { useLang } from '../lib/i18n'
import texturaTandil from '../assets/manifiesto-tandil.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Manifiesto() {
  const scope = useRef(null)
  const { t } = useLang()
  const m = t.manifiesto

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Foto de las sierras de Tandil con parallax sutil
      gsap.to('[data-parallax]', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray('[data-manifiesto-linea]').forEach((el) => {
        gsap.from(el.querySelectorAll('[data-split-word]'), {
          yPercent: 115,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={scope} className="relative overflow-hidden bg-espresso px-6 py-32 sm:px-10 sm:py-44">
      <img
        data-parallax
        src={texturaTandil}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-[130%] w-full -translate-y-[12%] object-cover opacity-35 saturate-[0.85]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso/55 to-espresso" />

      <div className="relative mx-auto max-w-4xl">
        <p className="mb-16 font-mono text-[11px] uppercase tracking-[0.3em] text-almond/40">
          {m.kicker}
        </p>

        <div className="space-y-6">
          <h2
            data-manifiesto-linea
            className="font-display text-3xl font-semibold leading-tight tracking-tight text-almond/45 sm:text-5xl"
          >
            <SplitWords text={m.l1} />
          </h2>
          <h2
            data-manifiesto-linea
            className="font-serif text-4xl italic leading-tight text-almond sm:text-6xl"
          >
            <SplitWords text={m.l2} />
          </h2>
        </div>

        <div className="mt-24 max-w-2xl space-y-4 sm:mt-32">
          <p
            data-manifiesto-linea
            className="font-display text-xl font-medium leading-snug tracking-tight text-almond/45 sm:text-2xl"
          >
            <SplitWords text={m.l3} />
          </p>
          <p
            data-manifiesto-linea
            className="font-serif text-2xl italic leading-snug text-vanilla sm:text-4xl"
          >
            <SplitWords text={m.l4} />
          </p>
        </div>
      </div>
    </section>
  )
}
