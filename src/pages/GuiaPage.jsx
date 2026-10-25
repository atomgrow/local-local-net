import { Link, useParams } from 'react-router-dom'
import { useLang } from '../lib/i18n'
import { useSeo } from '../lib/useSeo'
import { PAGES } from '../lib/seo-data'
import { GUIDES, GUIDE_UI } from '../content/guides'
import { GUIDE_CONTENT } from '../content/guides-content'
import CtaButton from '../components/CtaButton'
import NotFound from './NotFound'

// Una guía: /guias/<slug> (español) y /en/guides/<slug> (inglés).
export default function GuiaPage() {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const guide = GUIDES.find((g) => g.slug[lang] === slug)
  useSeo(guide ? `guide:${guide.id}` : 'guias')
  if (!guide) return <NotFound />

  const ui = GUIDE_UI[lang]
  const meta = guide[lang]
  const content = GUIDE_CONTENT[guide.id][lang]
  const pathOf = (id) => PAGES[`guide:${id}`][lang].path

  return (
    <main id="contenido" key={lang} className="bg-almond px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
      <article className="mx-auto max-w-3xl">
        <nav aria-label="breadcrumb" className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-espresso/75">
          <Link to={PAGES.guias[lang].path} className="hover:text-terracota">
            {ui.indexKicker}
          </Link>
        </nav>

        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-5xl">
          {meta.h1}
        </h1>
        <p className="mt-4 text-sm text-espresso/75">
          {ui.author} · {ui.updated}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-espresso/85">{content.intro}</p>

        {content.sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="font-display text-2xl font-bold leading-snug text-espresso">{s.h}</h2>
            {s.p?.map((text) => (
              <p key={text.slice(0, 32)} className="mt-4 text-base leading-relaxed text-espresso/80 sm:text-lg">
                {text}
              </p>
            ))}
            {s.list &&
              (s.ordered ? (
                <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-espresso/80 marker:font-semibold marker:text-terracota sm:text-lg">
                  {s.list.map((item) => (
                    <li key={item.slice(0, 32)}>{item}</li>
                  ))}
                </ol>
              ) : (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-espresso/80 marker:text-terracota sm:text-lg">
                  {s.list.map((item) => (
                    <li key={item.slice(0, 32)}>{item}</li>
                  ))}
                </ul>
              ))}
          </section>
        ))}

        <aside className="mt-16 rounded-[2rem] border border-matcha/25 bg-matcha/[0.08] p-8 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-espresso">{ui.ctaTitle}</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-espresso/80">{ui.ctaCopy}</p>
          <div className="mt-6">
            <CtaButton source="guia">{t.hero.cta}</CtaButton>
          </div>
        </aside>

        <p className="mt-10 text-sm leading-relaxed text-espresso/75">{ui.disclaimer}</p>

        <section className="mt-14 border-t border-espresso/10 pt-10">
          <h2 className="font-display text-xl font-bold text-espresso">{ui.related}</h2>
          <ul className="mt-4 space-y-3">
            {guide.related.map((id) => {
              const other = GUIDES.find((g) => g.id === id)
              return (
                <li key={id}>
                  <Link to={pathOf(id)} className="font-semibold text-terracota underline-offset-4 hover:underline">
                    {other[lang].h1}
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </article>
    </main>
  )
}
