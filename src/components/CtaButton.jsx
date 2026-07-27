import { trackEvent } from '../lib/tracking'

// CTA principal unificado: scrollea al cuestionario (#evaluar) y trackea.
export function scrollToEvaluar(source) {
  trackEvent(`${source}_cta_click`)
  document.getElementById('evaluar')?.scrollIntoView({ behavior: 'smooth' })
}

export default function CtaButton({ source, children, variant = 'primary', className = '', targetId = 'evaluar' }) {
  const styles =
    variant === 'primary'
      ? 'bg-terracota text-white shadow-xl shadow-espresso/20'
      : 'border border-espresso/20 bg-transparent text-espresso hover:border-espresso/40'

  return (
    <button
      type="button"
      onClick={() => {
        trackEvent(`${source}_cta_click`)
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }}
      className={`btn-magnetic rounded-full px-8 py-4 text-base font-semibold ${styles} ${className}`}
    >
      {variant === 'primary' && <span className="btn-sheen bg-espresso/25" aria-hidden="true" />}
      {children}
    </button>
  )
}
