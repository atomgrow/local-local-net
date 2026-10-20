import { useLang } from '../lib/i18n'

// Primer foco de teclado: salta el header y va directo al contenido de la página.
export default function SkipLink() {
  const { lang } = useLang()

  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-almond"
    >
      {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
    </a>
  )
}
