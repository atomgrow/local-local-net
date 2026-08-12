import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { LINKS } from '../config'
import SectionHeader from './SectionHeader'

// ------------------------------------------------------------
// GALERÍA — Fotografías reales de Tandil (@santiarbeoph).
// Originales disponibles: 1024px. [PENDIENTE] Si llegan exports en
// alta resolución, reemplazar los archivos en src/assets con el
// mismo nombre. Los alt vienen de strings.js (tandil.galleryAlts).
// INTERACCIÓN: Fullscreen slider (imagen grande + thumbnails navegables).
// ------------------------------------------------------------
import fotoPanorama from '../assets/tandil-panorama.jpg'
import fotoAtardecerCiudad from '../assets/tandil-atardecer-ciudad.jpg'
import fotoCaballo from '../assets/tandil-caballo.jpg'
import fotoCieloAtardecer from '../assets/tandil-cielo-atardecer.jpg'
import fotoTorre from '../assets/tandil-torre.jpg'

const GALLERY = [
  { src: fotoPanorama, alt: 0 },
  { src: fotoAtardecerCiudad, alt: 1 },
  { src: fotoCaballo, alt: 2 },
  { src: fotoCieloAtardecer, alt: 3 },
  { src: fotoTorre, alt: 4 },
]

export default function Tandil() {
  const scope = useReveal()
  const { t } = useLang()
  const td = t.tandil
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % GALLERY.length)
  const prev = () => setCurrent((current - 1 + GALLERY.length) % GALLERY.length)

  return (
    <section id="tandil" ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-5xl">
          <SectionHeader kicker={td.kicker} titleSans={td.titleSans} titleSerif={td.titleSerif} />

          <div data-reveal className="mt-7 max-w-3xl space-y-4">
            {td.parrafos.map((parrafo, i) => (
              <p key={i} className="text-base leading-relaxed text-espresso/70">
                {parrafo}
              </p>
            ))}
          </div>

          <div data-reveal className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-espresso/70 font-medium">
              {td.cierre1}
            </p>
            <p className="mt-2 text-base leading-relaxed text-espresso/70 font-medium">
              {td.cierre2}
            </p>
          </div>
        </div>

        {/* Carrusel full-width: fotos en aspecto natural, sin crop */}
        <div data-reveal className="mt-14 space-y-6">
          {/* Imagen principal — contaimer que respeta aspecto natural */}
          <div className="relative overflow-hidden rounded-[2rem] bg-espresso/5">
            <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[550px]">
              <img
                src={GALLERY[current].src}
                alt={td.galleryAlts[GALLERY[current].alt]}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-opacity duration-500"
              />
              {/* Gradient overlay sutil (solo en foto) */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Botones navegación */}
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-espresso/30 p-3 text-white backdrop-blur transition-colors hover:bg-espresso/50"
            >
              <ChevronLeft size={24} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-espresso/30 p-3 text-white backdrop-blur transition-colors hover:bg-espresso/50"
            >
              <ChevronRight size={24} strokeWidth={2} />
            </button>

            {/* Indicador (X de Y) */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-espresso/50 bg-white/30 px-3 py-1.5 rounded-full backdrop-blur">
              {current + 1} / {GALLERY.length}
            </p>
          </div>

          {/* Thumbnails navegables */}
          <div className="flex justify-center gap-2.5 overflow-x-auto pb-2">
            {GALLERY.map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ver foto ${i + 1}`}
                aria-current={current === i}
                className={[
                  'shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105',
                  current === i
                    ? 'border-matcha ring-2 ring-matcha/40'
                    : 'border-espresso/20 opacity-50 hover:opacity-75',
                ].join(' ')}
              >
                <img
                  src={photo.src}
                  alt={td.galleryAlts[photo.alt]}
                  loading="lazy"
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <p data-reveal className="mt-8 text-right font-mono text-[10px] tracking-widest text-espresso/40">
            <a
              href={LINKS.photographer}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-espresso/70"
            >
              {td.credito}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
