import { useCtaNavigate } from '../lib/useCtaNavigate'

export default function CtaButton({ source, children, variant = 'primary', className = '', targetId = 'evaluar' }) {
  const ctaNavigate = useCtaNavigate()

  const styles =
    variant === 'primary'
      ? 'bg-terracota text-white shadow-xl shadow-espresso/20'
      : 'border border-espresso/20 bg-transparent text-espresso hover:border-espresso/40'

  return (
    <button
      type="button"
      onClick={() => ctaNavigate(targetId, source)}
      className={`btn-magnetic rounded-full px-8 py-4 text-base font-semibold ${styles} ${className}`}
    >
      {variant === 'primary' && <span className="btn-sheen bg-espresso/25" aria-hidden="true" />}
      {children}
    </button>
  )
}
