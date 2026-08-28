import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
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
      {/* Close button */}
      <div className="flex justify-end p-4 border-b border-espresso/10">
        <button
          onClick={onClose}
          className="p-1.5 text-espresso/70 hover:text-espresso hover:bg-espresso/5 rounded-lg transition-colors"
          aria-label="Cerrar menú"
        >
          <X size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col py-2">
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
