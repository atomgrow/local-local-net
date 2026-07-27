import { useEffect, useRef } from 'react'

// Parallax scroll: la imagen se mueve a diferente velocidad que el scroll.
// `speed` = 0-1 (0 = fijo, 0.5 = mitad de velocidad, 1 = velocidad normal).
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrollTop = window.scrollY
      const elementTop = scrollTop + rect.top

      // Calcular offset: mientras más scroll, más se mueve la imagen.
      const offset = (scrollTop - elementTop + window.innerHeight) * speed
      ref.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}
