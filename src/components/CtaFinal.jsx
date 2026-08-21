import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { useCtaNavigate } from '../lib/useCtaNavigate'
import ctaFinalImg from '../assets/cta-final-bg.jpg'

// CTA Final: Fondo cinematográfico (atardecer Tandil) + tarjeta semi-transparente

export default function CtaFinal() {
  const scope = useReveal()
  const { t } = useLang()
  const ctaNavigate = useCtaNavigate()
  const cf = t.ctaFinal

  const go = (id, source) => {
    ctaNavigate(id, source)
  }

  return (
    <section
      ref={scope}
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Fondo cinematográfico */}
      <img
        src={ctaFinalImg}
        alt="Sunset over Tandil"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradientes overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Vignette edge */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />

      {/* Contenido */}
      <div className="relative z-10 px-6 sm:px-10">
        <div
          data-reveal
          className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/15 bg-white/[0.08] backdrop-blur-md p-10 text-center text-white sm:p-14"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/70">
            {cf.kicker}
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {cf.titleSans}{' '}
            <span className="font-serif font-medium italic text-vanilla/95">{cf.titleSerif}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/80">
            {cf.copy}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => go('evaluar', 'final')}
              className="btn-magnetic rounded-full bg-terracota px-10 py-4 text-base font-semibold text-white shadow-2xl shadow-black/40"
            >
              <span className="btn-sheen bg-espresso/40" aria-hidden="true" />
              {cf.cta}
            </button>
            <button
              type="button"
              onClick={() => go('metodo', 'final_metodo')}
              className="rounded-full border border-white/50 px-9 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {cf.ctaSec}
            </button>
          </div>

          <p className="mt-6 font-mono text-[10px] tracking-wider text-white/50">
            {cf.micro}
          </p>
        </div>
      </div>
    </section>
  )
}
