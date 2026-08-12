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

const IMAGES = [
  { src: fotoPanorama, alt: 0 },
  { src: fotoBarrio, alt: 1 },
  { src: fotoAtardecerCiudad, alt: 3 },
  { src: fotoCieloAtardecer, alt: 4 },
  { src: fotoTorre, alt: 5 },
]

const IMAGE_POSITIONS = [0, 2, 4, 5, 7]

export default function Tandil() {
  const scope = useReveal()
  const { t } = useLang()
  const td = t.tandil
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getImageOpacity = (index) => {
    const offsetTop = IMAGE_POSITIONS[index] * 150
    const distance = Math.abs(scrollY - offsetTop)
    return Math.max(0, 1 - distance / 400)
  }

  const getImageTransform = (index) => {
    const offsetTop = IMAGE_POSITIONS[index] * 150
    const parallax = (scrollY - offsetTop) * 0.3
    return `translateY(${parallax}px)`
  }

  return (
    <section id="tandil" ref={scope} className="relative bg-almond px-6 py-24 sm:px-10 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-5xl mb-20">
          <SectionHeader kicker={td.kicker} titleSans={td.titleSans} titleSerif={td.titleSerif} />
        </div>

        {/* Editorial Layout: Texto + Imágenes en Scroll Inmersivo */}
        <div className="relative mx-auto max-w-2xl">
          {/* Imágenes flotantes detrás del texto */}
          <div className="absolute inset-0 pointer-events-none">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                className="absolute w-96 h-64 rounded-2xl overflow-hidden"
                style={{
                  opacity: getImageOpacity(i),
                  transform: getImageTransform(i),
                  transition: 'opacity 0.3s ease-out',
                  right: i % 2 === 0 ? '-180px' : 'auto',
                  left: i % 2 === 1 ? '-180px' : 'auto',
                  top: `${IMAGE_POSITIONS[i] * 150}px`,
                }}
              >
                <img
                  src={img.src}
                  alt={td.galleryAlts[img.alt]}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Contenido de texto */}
          <div data-reveal className="relative z-10 space-y-6 sm:space-y-8">
            {td.parrafos.map((parrafo, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-espresso/75 font-light"
              >
                {parrafo}
              </p>
            ))}

            <div className="pt-6 space-y-3">
              <p className="text-base sm:text-lg leading-relaxed text-espresso/70 font-medium italic">
                {td.cierre1}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-espresso/70 font-medium italic">
                {td.cierre2}
              </p>
            </div>
          </div>
        </div>

        {/* Photo Credit */}
        <div className="mx-auto max-w-2xl mt-20 pt-12 border-t border-espresso/10">
          <p className="text-right font-mono text-[10px] tracking-widest text-espresso/40">
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
