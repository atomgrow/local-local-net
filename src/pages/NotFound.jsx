import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'

export default function NotFound() {
  const { lang, localize } = useLang()

  return (
    <main id="contenido" className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-almond px-6 py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">404</p>
      <h1 className="font-display text-3xl font-bold text-espresso sm:text-4xl">
        {lang === 'es' ? 'Esta página no existe.' : 'This page does not exist.'}
      </h1>
      <Link
        to={localize('/')}
        className="rounded-full bg-terracota px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-espresso"
      >
        {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
      </Link>
    </main>
  )
}
