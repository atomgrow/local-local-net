import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { initAnalytics } from './lib/tracking'
import { LanguageProvider } from './lib/i18n'
import { JourneyProvider } from './lib/journey'
import Navbar from './components/Navbar'
import StickyCta from './components/StickyCta'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import MetodoPage from './pages/MetodoPage'
import NosotrosPage from './pages/NosotrosPage'

export default function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <BrowserRouter>
      <LanguageProvider>
        <JourneyProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metodo" element={<MetodoPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
          </Routes>
          <StickyCta />
          <Footer />
        </JourneyProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
