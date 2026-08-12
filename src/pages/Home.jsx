import { useEffect } from 'react'
import { useLang } from '../lib/i18n'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import MicroDecision from '../components/MicroDecision'
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
    <main key={lang}>
      <Hero />
      <TrustBar />
      <MicroDecision />
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
