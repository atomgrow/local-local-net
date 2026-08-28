export default function HouseIcon({ isActive, color = 'currentColor' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
    >
      {/* Triangular roof */}
      <line x1="12" y1="2" x2="2" y2="12" />
      <line x1="12" y1="2" x2="22" y2="12" />
      {/* House body */}
      <rect x="2" y="12" width="20" height="10" rx="2" />
      {/* Door */}
      <line x1="12" y1="12" x2="12" y2="22" />
      {/* Door handle */}
      <circle cx="14" cy="17" r="0.5" fill={color} />
    </svg>
  )
}
