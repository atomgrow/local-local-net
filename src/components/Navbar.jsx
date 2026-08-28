import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useCtaNavigate } from '../lib/useCtaNavigate'
import Logo from './Logo'

function LangToggle({ opacity, isLight }) {
  const { lang, setLang } = useLang()
  const isDark = opacity < 0.4

  return (
    <div className="flex items-center gap-0.5 rounded-full border p-0.5 transition-all duration-500"
      style={{
        borderColor: isLight ? 'rgba(93, 64, 55, 0.2)' : isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(93, 64, 55, 0.15)',
      }}>
      {['es', 'en'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={[
              'rounded-full px-2 py-0 font-mono text-[11px] tracking-wider transition-all duration-300',
              active
                ? 'bg-terracota text-white'
                : isLight ? 'text-espresso/70 hover:text-espresso' : 'text-white/85 hover:text-white',
            ].join(' ')}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0)
  const [isOverLightBg, setIsOverLightBg] = useState(false)
  const { t } = useLang()
  const ctaNavigate = useCtaNavigate()

  useEffect(() => {
    const onScroll = () => {
      const opacity = Math.min(window.scrollY / 120, 1)
      setScrollOpacity(opacity)

      // Detect light background by checking element at navbar position
      const navbarRect = document.querySelector('nav')?.getBoundingClientRect()
      if (navbarRect) {
        const elementsAtNavbar = document.elementsFromPoint(
          window.innerWidth / 2,
          navbarRect.bottom + 10
        )

        const hasLightBg = elementsAtNavbar.some((el) => {
          const bgClass = el.className
          return bgClass && (
            bgClass.includes('bg-vanilla') ||
            bgClass.includes('bg-almond') ||
            bgClass.includes('bg-white')
          )
        })

        setIsOverLightBg(hasLightBg)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goEvaluar = () => {
    ctaNavigate('evaluar', 'nav')
  }

  const isDark = scrollOpacity < 0.4

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-4">
      <nav
        className="w-full max-w-6xl flex items-center gap-3 sm:gap-6 rounded-full py-0.5 px-4 sm:px-5 transition-all duration-500 border"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${isOverLightBg ? Math.max(0.22, 0.22 * scrollOpacity + 0.16) : Math.max(0.12, 0.12 * scrollOpacity + 0.08)})`,
          borderColor: scrollOpacity > 0.2 ? 'rgba(93, 64, 55, 0.05)' : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: scrollOpacity > 0.1 ? 'blur(6px)' : 'blur(2px)',
          boxShadow: scrollOpacity > 0.1 ? 'rgba(93, 64, 55, 0.05) 0 2px 8px' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
          <Logo className="h-16 w-16" />
        </Link>

        {/* Spacer left */}
        <div className="flex-1" />

        {/* Links - Método, Nosotros (desktop only) */}
        <div className="hidden md:flex items-center gap-5">
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[12px] font-semibold transition-colors duration-300"
              style={{
                color: isOverLightBg ? 'rgba(93, 64, 55, 0.8)' : 'rgba(255, 255, 255, 0.95)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Spacer right */}
        <div className="flex-1" />

        {/* Right side: Lang, CTA */}
        <div className="flex items-center gap-3">
          {/* Lang Toggle */}
          <LangToggle opacity={scrollOpacity} isLight={isOverLightBg} />

          {/* CTA Button */}
          <button
            type="button"
            onClick={goEvaluar}
            className="hidden rounded-full bg-terracota px-4 py-1 text-[12px] font-semibold text-white transition-all sm:block hover:bg-terracota/90"
          >
            {t.nav.cta}
          </button>
        </div>
      </nav>
    </header>
  )
}
