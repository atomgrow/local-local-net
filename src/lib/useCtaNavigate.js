import { useNavigate, useLocation } from 'react-router-dom'
import { trackEvent } from './tracking'

export function useCtaNavigate() {
  const navigate = useNavigate()
  const location = useLocation()

  return (targetId, source) => {
    trackEvent(`${source}_cta_click`)
    // Page navigation
    if (targetId === 'metodo' || targetId === 'nosotros') {
      navigate(`/${targetId}`)
    }
    // Anchor scroll
    else if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${targetId}`)
    }
  }
}
