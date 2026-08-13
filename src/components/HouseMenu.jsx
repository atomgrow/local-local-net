import { useNavigate } from 'react-router-dom'
import tandilImg from '../assets/tandil-atardecer-ciudad.jpg'

export default function HouseMenu({ isOpen, onClose }) {
  const navigate = useNavigate()

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
    <div className="fixed inset-0 z-40 flex items-start justify-center pt-24" onClick={onClose}>
      <div
        className="relative w-24 h-28"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${tandilImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-white/40" />

        {/* House shape using SVG with rounded corners */}
        <svg width="100%" height="100%" viewBox="0 0 120 140" preserveAspectRatio="xMidYMid meet" className="drop-shadow-lg">
          {/* Roof (rounded triangle) */}
          <path
            d="M 60 15 L 20 65 Q 15 70 20 75 L 100 75 Q 105 70 100 65 Z"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1.5"
          />

          {/* House body (rounded rectangle) */}
          <rect
            x="20"
            y="75"
            width="80"
            height="60"
            rx="6"
            ry="6"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1.5"
          />
        </svg>

        {/* Menu content inside house - centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className="text-xs font-semibold text-espresso transition-colors hover:text-terracota hover:scale-110 transform"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
