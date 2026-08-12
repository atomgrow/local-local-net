import { openWhatsApp, trackEvent } from '../lib/tracking'
import { useLang } from '../lib/i18n'
import { LINKS } from '../config'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()
  const ft = t.footer

  return (
    <footer className="bg-espresso px-6 pb-10 pt-20 text-almond sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 h-28 w-28 flex-shrink-0">
              <Logo className="h-full w-full" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-almond/55">{ft.blurb}</p>
          </div>

          <nav className="flex flex-col gap-3" aria-label={ft.navLabel}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-almond/40">
              {ft.navLabel}
            </p>
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-almond/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3" aria-label={ft.legalLabel}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-almond/40">
              {ft.legalLabel}
            </p>
            {Array.isArray(ft.legales) ? (
              ft.legales.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-almond/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <a
                href="#"
                className="text-sm text-almond/75 transition-colors hover:text-white"
              >
                {ft.legalLink || 'Legal'}
              </a>
            )}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-almond/40">
              {ft.contactoLabel}
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp('footer', t.whatsappMessage)}
              className="text-left text-sm text-terracota transition-colors hover:text-white"
            >
              {ft.whatsapp}
            </button>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('linkedin_click', { source: 'footer' })}
              className="text-sm text-almond/75 transition-colors hover:text-white"
            >
              {ft.linkedin}
            </a>
            {LINKS.instagram && (
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-almond/75 transition-colors hover:text-white"
              >
                Instagram
              </a>
            )}
            <a
              href={LINKS.photographer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-almond/45 transition-colors hover:text-almond/70"
            >
              {ft.credito}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-almond/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-almond/40">{ft.disclaimer}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] tracking-wider text-almond/35">
              © {year} Local Local — Tandil · {ft.derechos}
            </p>
            <a
              href={LINKS.atomgrow}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wider transition-colors hover:text-vanilla"
            >
              <span className="text-almond/35">Powered by </span>
              <span className="text-terracota">Atomgrow</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
