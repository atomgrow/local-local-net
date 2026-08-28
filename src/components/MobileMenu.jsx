import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useLang()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-40 bg-espresso/90 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {t.nav.links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="font-display text-4xl font-bold text-vanilla transition-colors hover:text-terracota"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
