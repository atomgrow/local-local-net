import { useEffect, useState } from 'react'
import { useLang } from '../lib/i18n'
import { trackEvent } from '../lib/tracking'

// CTA sticky solo en mobile, visible después de superar el hero.
// Se oculta cerca del cuestionario para no tapar el propio formulario.
export default function StickyCta() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9
      const evaluar = document.getElementById('evaluar')
      const nearForm = evaluar
        ? evaluar.getBoundingClientRect().top < window.innerHeight
        : false
      setVisible(pastHero && !nearForm)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-6 sm:hidden">
      <button
        type="button"
        onClick={() => {
          trackEvent('sticky_cta_click')
          document.getElementById('evaluar')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="btn-magnetic w-full max-w-sm rounded-full bg-terracota px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-espresso/40"
      >
        <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
        {t.sticky.cta}
      </button>
    </div>
  )
}
