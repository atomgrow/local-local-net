import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useCtaNavigate } from '../lib/useCtaNavigate'
import Logo from './Logo'

function LangToggle({ opacity }) {
  const { lang, setLang } = useLang()
  const isDark = opacity < 0.4

  return (
    <div className="flex items-center gap-0.5 rounded-full border p-0.5 transition-all duration-500"
      style={{
        borderColor: isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(93, 64, 55, 0.15)',
      }}>
      {['es', 'en'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={[
              'rounded-full px-2 py-0 font-mono text-[11px] tracking-wider transition-all',
              active
                ? 'bg-terracota text-white'
                : 'text-white/85 hover:text-white',
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
  const { t } = useLang()
  const ctaNavigate = useCtaNavigate()

  useEffect(() => {
    const onScroll = () => {
      const opacity = Math.min(window.scrollY / 120, 1)
      setScrollOpacity(opacity)
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
          backgroundColor: `rgba(255, 255, 255, ${0.08 * scrollOpacity})`,
          borderColor: scrollOpacity > 0.2 ? 'rgba(93, 64, 55, 0.05)' : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: scrollOpacity > 0.1 ? 'blur(4px)' : 'blur(0px)',
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
              className="text-[12px] font-semibold transition-colors"
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
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
          <LangToggle opacity={scrollOpacity} />

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
