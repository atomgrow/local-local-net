import { useEffect } from 'react'
import { useLang } from '../lib/i18n'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import MicroDecision from '../components/MicroDecision'
import OfertaDiagnostico from '../components/OfertaDiagnostico'
import BernardoHome from '../components/BernardoHome'
import Problema from '../components/Problema'
import ParaQuien from '../components/ParaQuien'
import ComoComienza from '../components/ComoComienza'
import Cuestionario from '../components/Cuestionario'
import Newsletter from '../components/Newsletter'
import TestimoniosPreview from '../components/TestimoniosPreview'
import CtaFinal from '../components/CtaFinal'
import { initAnalytics } from '../lib/tracking'

export default function Home() {
  const { lang } = useLang()

  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <main id="contenido" key={lang}>
      <Hero />
      <TrustBar />
      <MicroDecision />
      <OfertaDiagnostico />
      <BernardoHome />
      <Problema />
      <ParaQuien />
      <ComoComienza />
      <Cuestionario />
      <Newsletter />
      <TestimoniosPreview />
      <CtaFinal />
    </main>
  )
}
