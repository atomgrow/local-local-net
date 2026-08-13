import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../lib/i18n'

export default function HouseMenu({ isOpen, onClose }) {
  const navigate = useNavigate()
  const { t } = useLang()

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Método', href: '/metodo' },
    { label: 'Nosotros', href: '/nosotros' },
  ]

  const handleNavigation = (href) => {
    navigate(href)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="absolute top-20 left-1/2 transform -translate-x-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* House shape using SVG */}
        <svg width="280" height="320" viewBox="0 0 280 320" className="drop-shadow-lg">
          {/* Roof (triangle) */}
          <polygon
            points="140,20 30,140 250,140"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
          />

          {/* House body (rectangle) */}
          <rect
            x="30"
            y="140"
            width="220"
            height="160"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
          />

          {/* Door/window detail (optional) */}
          <rect
            x="110"
            y="220"
            width="60"
            height="80"
            fill="#f9fafb"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        </svg>

        {/* Menu content inside house */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 pt-12">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className="text-base font-semibold text-espresso/80 transition-colors hover:text-espresso hover:scale-110 transform"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
