import { useState, useEffect, useRef } from 'react'
import { useLang } from '../lib/i18n'
import { useReveal } from '../lib/useReveal'
import { LINKS } from '../config'
import SectionHeader from './SectionHeader'

import fotoPanorama from '../assets/tandil-panorama.jpg'
import fotoAtardecerCiudad from '../assets/tandil-atardecer-ciudad.jpg'
import fotoCieloAtardecer from '../assets/tandil-cielo-atardecer.jpg'
import fotoTorre from '../assets/tandil-torre.jpg'
import fotoBarrio from '../assets/tandil-barrio-sierras.jpg'

const SECTIONS = [
  { img: fotoPanorama, alt: 0 },
  { img: fotoBarrio, alt: 1 },
  { img: fotoAtardecerCiudad, alt: 3 },
  { img: fotoCieloAtardecer, alt: 4 },
  { img: fotoTorre, alt: 5 },
]

export default function Tandil() {
  const scope = useReveal()
  const { t } = useLang()
  const td = t.tandil
  const [parallaxOffsets, setParallaxOffsets] = useState(Array(5).fill(0))
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const offsets = SECTIONS.map((_, i) => {
        const elementOffset = (i * 200) - window.scrollY
        return elementOffset * 0.15
      })
      setParallaxOffsets(offsets)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="tandil" ref={scope} className="bg-almond px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-5xl mb-16">
          <SectionHeader kicker={td.kicker} titleSans={td.titleSans} titleSerif={td.titleSerif} />
        </div>

        {/* Editorial Immersive Layout */}
        <div ref={containerRef} className="relative mx-auto max-w-4xl space-y-16 sm:space-y-24">
          {/* Sección 1: Intro */}
          <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden group">
            <img
              src={SECTIONS[0].img}
              alt={td.galleryAlts[SECTIONS[0].alt]}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: `translateY(${parallaxOffsets[0]}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 sm:px-10 max-w-2xl">
                <p className="text-lg sm:text-xl leading-relaxed">
                  {td.parrafos[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Sección 2-5: Texto + Imagen Parallax */}
          {td.parrafos.slice(1).map((parrafo, idx) => {
            const imgIdx = (idx + 1) % SECTIONS.length
            const isLeft = idx % 2 === 0
            return (
              <div key={idx} className="relative grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 items-center">
                {/* Imagen */}
                <div className={`relative h-64 sm:h-80 rounded-2xl overflow-hidden ${!isLeft && 'sm:order-2'}`}>
                  <img
                    src={SECTIONS[imgIdx].img}
                    alt={td.galleryAlts[SECTIONS[imgIdx].alt]}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ transform: `translateY(${parallaxOffsets[imgIdx]}px)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
                </div>

                {/* Texto */}
                <div className={isLeft ? 'sm:order-1' : ''}>
                  <p className="text-base sm:text-lg leading-relaxed text-espresso/75 font-light">
                    {parrafo}
                  </p>
                </div>
              </div>
            )
          })}

          {/* Cierre */}
          <div data-reveal className="pt-8 sm:pt-12 border-t border-espresso/15">
            <p className="text-base sm:text-lg leading-relaxed text-espresso/70 font-medium italic mb-3">
              {td.cierre1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-espresso/70 font-medium italic">
              {td.cierre2}
            </p>
          </div>
        </div>

        {/* Photo Credit */}
        <div className="mx-auto max-w-4xl mt-16 pt-12 border-t border-espresso/10">
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
