import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useCtaNavigate } from '../lib/useCtaNavigate'
import Logo from './Logo'
import HouseMenuIcon from './HouseMenuIcon'

function LangToggle({ scrolled }) {
  const { lang, setLang } = useLang()
  const base = 'rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wider transition-all duration-300'

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
  const location = useLocation()

  const getPageTitle = () => {
    if (location.pathname === '/metodo') return 'Método'
    if (location.pathname === '/nosotros') return 'Nosotros'
    return ''
  }

  const pageTitle = getPageTitle()

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
          'w-full max-w-4xl rounded-[1.75rem] py-2.5 pl-5 pr-2.5 sm:rounded-full',
          'transition-all duration-500 ease-out',
          solid
            ? 'border border-espresso/10 bg-white/80 shadow-lg shadow-espresso/5 backdrop-blur-xl'
            : 'border border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" aria-label="Local Local" className="-m-2 flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-visible">
            <Logo className="h-20 w-20" />
          </Link>

          {pageTitle && (
            <div className={[
              'hidden lg:flex text-[13px] font-medium tracking-tight transition-colors duration-500',
              solid ? 'text-espresso' : 'text-white/85',
            ].join(' ')}>
              {pageTitle}
            </div>
          )}

          <div className="hidden items-center gap-5 lg:flex">
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={[
                  'text-[13px] font-medium tracking-tight transition-colors duration-500',
                  solid ? 'text-matcha hover:text-espresso' : 'text-white/85 hover:text-white',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LangToggle scrolled={solid} />
            <button
              type="button"
              onClick={goEvaluar}
              className="btn-magnetic hidden rounded-full bg-terracota px-5 py-2.5 text-[13px] font-semibold text-white sm:block"
            >
              <span className="btn-sheen bg-espresso/25" aria-hidden="true" />
              {t.nav.cta}
            </button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className={[
                'flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden',
                solid ? 'text-espresso' : 'text-white',
              ].join(' ')}
            >
              {menuOpen ? <X size={18} /> : <HouseMenuIcon isOpen={menuOpen} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-espresso/10 px-1 pb-3 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {t.nav.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-espresso/80 transition-colors hover:bg-espresso/5"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={goEvaluar}
                className="mt-2 rounded-full bg-terracota px-5 py-3 text-sm font-semibold text-white sm:hidden"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
