import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { openWhatsApp } from '../lib/tracking'
import { useLang } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Oferta() {
  const scope = useRef(null)
  const { t } = useLang()
  const o = t.oferta

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-oferta]', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-oferta]', start: 'top 82%', once: true },
      })
    }, scope)
    return () => ctx.revert()
  }, [])

  return (
    <section id="diagnostico" ref={scope} className="bg-almond px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <p className="mb-5 text-center font-mono text-[11px] tracking-[0.35em] text-terracota">
          {o.paso}
        </p>

        <div
          data-oferta
          className="rounded-[3rem] bg-matcha p-10 text-center shadow-2xl shadow-matcha/30 sm:p-16"
        >
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {o.titleSans} <span className="font-serif font-medium italic">{o.titleSerif}</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/85">
            {o.copy}
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => openWhatsApp('oferta', t.whatsappMessage)}
              className="btn-magnetic rounded-full bg-terracota px-9 py-4 text-base font-semibold text-white shadow-xl shadow-espresso/25"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {o.cta}
            </button>
            <p className="mt-4 font-mono text-[11px] tracking-wider text-espresso/60">
              {o.micro}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
