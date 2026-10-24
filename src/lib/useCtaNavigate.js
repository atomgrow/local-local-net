import { useNavigate, useLocation } from 'react-router-dom'
import { trackEvent } from './tracking'
import { useLang, splitLocale } from './i18n'

export function useCtaNavigate() {
  const navigate = useNavigate()
  const location = useLocation()
  const { localize } = useLang()

  return (targetId, source) => {
    trackEvent(`${source}_cta_click`)
    const { base } = splitLocale(location.pathname)
    // Navegación entre páginas (respetando el idioma de la URL)
    if (targetId === 'metodo' || targetId === 'nosotros') {
      navigate(localize(`/${targetId}`))
    }
    // Scroll a una sección de la home
    else if (base === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`${localize('/')}#${targetId}`)
    }
  }
}
