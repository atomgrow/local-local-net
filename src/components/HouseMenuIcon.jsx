export default function HouseMenuIcon({ isOpen }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
    >
      {/* House roof peak */}
      <path d="M3 12l9-9 9 9" />
      {/* Top horizontal line */}
      <line x1="5" y1="12" x2="19" y2="12" />
      {/* Bottom horizontal line */}
      <line x1="5" y1="18" x2="19" y2="18" />
    </svg>
  )
}
