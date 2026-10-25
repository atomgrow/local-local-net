import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useSeo } from '../lib/useSeo'
import { PAGES } from '../lib/seo-data'
import { GUIDES, GUIDE_UI } from '../content/guides'

// Índice de guías: /guias (español) y /en/guides (inglés).
export default function GuiasPage() {
  const { lang } = useLang()
  useSeo('guias')
  const ui = GUIDE_UI[lang]

  return (
    <main id="contenido" key={lang} className="bg-almond px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-terracota">{ui.indexKicker}</p>
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-5xl">
          {ui.indexTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-espresso/80 sm:text-lg">{ui.indexIntro}</p>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {GUIDES.map((g) => (
            <li key={g.id}>
              <Link
                to={PAGES[`guide:${g.id}`][lang].path}
                className="flex h-full flex-col rounded-[2rem] border border-espresso/10 bg-white/60 p-7 transition-colors hover:border-matcha/50 hover:bg-white/80"
              >
                <h2 className="font-display text-xl font-bold leading-snug text-espresso">{g[lang].h1}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso/80">{g[lang].description}</p>
                <span className="mt-5 text-sm font-semibold text-terracota">{ui.readGuide} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
