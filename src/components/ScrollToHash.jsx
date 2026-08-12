import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.slice(1)
      const element = document.getElementById(id)
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }
  }, [location])

  return null
}
