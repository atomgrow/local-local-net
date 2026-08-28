import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useLang()
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-white/95 backdrop-blur-md border border-espresso/10 shadow-lg overflow-hidden"
    >
      <div className="flex flex-col py-4">
        {t.nav.links.map((link, idx) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className={`px-6 py-4 font-semibold text-espresso transition-colors hover:bg-terracota/10 hover:text-terracota ${
              idx !== t.nav.links.length - 1 ? 'border-b border-espresso/10' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
