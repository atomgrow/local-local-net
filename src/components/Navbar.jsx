import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useCtaNavigate } from '../lib/useCtaNavigate'
import Logo from './Logo'
import HouseMenuIcon from './HouseMenuIcon'

function LangToggle({ scrolled }) {
  const { lang, setLang } = useLang()
  const base = 'rounded-full px-2.5 py-0 font-mono text-[11px] tracking-wider transition-all duration-300'

  return (
    <div
      className={[
        'flex items-center gap-0.5 rounded-full border p-0.5 transition-colors duration-500',
        scrolled ? 'border-espresso/10' : 'border-white/25',
      ].join(' ')}
    >
      {['es', 'en'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={[
              base,
              active
                ? 'bg-terracota text-white'
                : scrolled
                  ? 'text-matcha hover:text-espresso'
                  : 'text-white/75 hover:text-white',
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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLang()
  const ctaNavigate = useCtaNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goEvaluar = () => {
    setMenuOpen(false)
    ctaNavigate('evaluar', 'nav')
  }

  const solid = scrolled || menuOpen

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <nav
        className={[
          'w-full max-w-4xl rounded-[1.75rem] py-0 pl-5 pr-2.5 sm:rounded-full',
          'transition-all duration-500 ease-out flex items-center',
          solid
            ? 'border border-espresso/10 bg-white/80 shadow-lg shadow-espresso/5 backdrop-blur-xl'
            : 'border border-transparent bg-transparent',
        ].join(' ')}
      >
          <div className="flex items-center justify-between w-full gap-0 h-fit">
            <Link to="/" aria-label="Local Local" className="flex h-28 w-28 flex-shrink-0 items-center justify-center overflow-visible">
              <Logo className="h-28 w-28" />
            </Link>

            {/* Links appear on mobile (between logo and menu) */}
            {menuOpen && (
              <div className="flex items-center gap-4 md:hidden">
                {t.nav.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'text-sm font-medium transition-colors',
                      solid ? 'text-espresso hover:text-terracota' : 'text-white hover:text-white/70',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="flex items-center gap-0.5 ml-auto">
              {/* Links appear on desktop (BEFORE menu button, but visually after due to order) */}
              {menuOpen && (
                <div className="hidden md:flex items-center gap-4 order-first">
                  {t.nav.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        'text-sm font-medium transition-colors',
                        solid ? 'text-espresso hover:text-terracota' : 'text-white hover:text-white/70',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <button
                type="button"
                aria-expanded={menuOpen}
                aria-label="Menu"
                onClick={() => setMenuOpen((v) => !v)}
                className={[
                  'flex h-9 w-9 items-center justify-center rounded-full transition-colors order-last',
                  solid ? 'text-espresso' : 'text-white',
                ].join(' ')}
              >
                <HouseMenuIcon isOpen={menuOpen} />
              </button>

              <LangToggle scrolled={solid} />
              <button
                type="button"
                onClick={goEvaluar}
                className="btn-magnetic hidden rounded-full bg-terracota px-5 py-1 text-[13px] font-semibold text-white sm:block"
              >
                <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
                {t.nav.cta}
              </button>
            </div>
          </div>
      </nav>
    </header>
  )
}
