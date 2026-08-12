import { useState, useEffect } from 'react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { LINKS } from '../config'
import SectionHeader from './SectionHeader'

import fotoPanorama from '../assets/tandil-panorama.jpg'
import fotoAtardecerCiudad from '../assets/tandil-atardecer-ciudad.jpg'
import fotoCieloAtardecer from '../assets/tandil-cielo-atardecer.jpg'
import fotoTorre from '../assets/tandil-torre.jpg'
import fotoBarrio from '../assets/tandil-barrio-sierras.jpg'

const IMAGEN_SECUENCIA = [
  { src: fotoPanorama, alt: 0, textos: [0] },
  { src: fotoBarrio, alt: 1, textos: [1, 2] },
  { src: fotoAtardecerCiudad, alt: 3, textos: [3, 4] },
  { src: fotoCieloAtardecer, alt: 4, textos: [5, 6] },
  { src: fotoTorre, alt: 5, textos: [7, 8, 9] },
]

export default function Tandil() {
  const scope = useReveal()
  const { t } = useLang()
  const td = t.tandil
  const [currentImg, setCurrentImg] = useState(0)

  const handleNextImg = () => {
    setCurrentImg((prev) => (prev + 1) % IMAGEN_SECUENCIA.length)
  }

  const handlePrevImg = () => {
    setCurrentImg((prev) => (prev - 1 + IMAGEN_SECUENCIA.length) % IMAGEN_SECUENCIA.length)
  }

  const goToImage = (index) => {
    setCurrentImg(index)
  }

  const currentSequence = IMAGEN_SECUENCIA[currentImg]

  return (
    <section id="tandil" ref={scope} className="relative bg-almond">
      {/* Header */}
      <div className="relative z-20 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionHeader kicker={td.kicker} titleSans={td.titleSans} titleSerif={td.titleSerif} />
        </div>
      </div>

      {/* Fullscreen Image Sequence */}
      <div className="relative h-screen bg-espresso overflow-hidden">
        {/* Imagen actual */}
        <img
          src={currentSequence.src}
          alt={td.galleryAlts[currentSequence.alt]}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 via-transparent to-espresso/30" />

        {/* Contenido centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10">
          <div className="max-w-3xl text-center space-y-6 sm:space-y-8">
            {/* Renderizar párrafos asociados a esta imagen */}
            {currentSequence.textos.map((parrafoIdx) => (
              <p
                key={parrafoIdx}
                className="text-lg sm:text-xl leading-relaxed text-white font-light animate-fade-in"
              >
                {td.parrafos[parrafoIdx]}
              </p>
            ))}
          </div>
        </div>

        {/* Botones Navegación */}
        <button
          type="button"
          onClick={handlePrevImg}
          aria-label="Imagen anterior"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur text-white transition-colors flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNextImg}
          aria-label="Imagen siguiente"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur text-white transition-colors flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicador (X de Y) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {IMAGEN_SECUENCIA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToImage(idx)}
              aria-label={`Ir a imagen ${idx + 1}`}
              aria-current={currentImg === idx}
              className={`h-2 rounded-full transition-all ${
                currentImg === idx
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Closing + Photo Credit */}
      <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 bg-almond">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-lg leading-relaxed text-espresso/70 font-medium italic">
            {td.cierre1}
          </p>
          <p className="text-lg leading-relaxed text-espresso/70 font-medium italic">
            {td.cierre2}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-espresso/10 text-center">
          <p className="font-mono text-[10px] tracking-widest text-espresso/40">
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

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
