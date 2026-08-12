import { useEffect } from 'react'
import { initAnalytics } from './lib/tracking'
import { LanguageProvider, useLang } from './lib/i18n'
import { JourneyProvider } from './lib/journey'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import MicroDecision from './components/MicroDecision'
import Problema from './components/Problema'
import Metodo from './components/Metodo'
import Servicios from './components/Servicios'
import Red from './components/Red'
import Tandil from './components/Tandil'
import ParaQuien from './components/ParaQuien'
import Nosotros from './components/Nosotros'
import Testimonios from './components/Testimonios'
import ComoComienza from './components/ComoComienza'
import Cuestionario from './components/Cuestionario'
import Newsletter from './components/Newsletter'
import Faq from './components/Faq'
import PorQue from './components/PorQue'
import CtaFinal from './components/CtaFinal'
import StickyCta from './components/StickyCta'
import Footer from './components/Footer'

function Landing() {
  const { lang } = useLang()

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      {/* key={lang}: al cambiar de idioma se remontan las secciones y
          sus animaciones (GSAP) arrancan limpias con el nuevo texto. */}
      <main key={lang}>
        <Hero />
        <TrustBar />
        <MicroDecision />
        <Problema />
        <Metodo />
        <Servicios />
        <Red />
        <Tandil />
        <ParaQuien />
        <Nosotros />
        <Testimonios />
        <ComoComienza />
        <Cuestionario />
        <Newsletter />
        <Faq />
        <PorQue />
        <CtaFinal />
      </main>
      <StickyCta />
      <Footer />
    </>
  )
}

export default function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <LanguageProvider>
      <JourneyProvider>
        <Landing />
      </JourneyProvider>
    </LanguageProvider>
  )
}
