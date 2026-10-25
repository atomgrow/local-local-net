import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { initAnalytics } from './lib/tracking'
import { LanguageProvider } from './lib/i18n'
import { JourneyProvider } from './lib/journey'
import Navbar from './components/Navbar'
import StickyCta from './components/StickyCta'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SkipLink from './components/SkipLink'

// Método y Nosotros se cargan al visitarlas: la home no descarga su código.
const MetodoPage = lazy(() => import('./pages/MetodoPage'))
const NosotrosPage = lazy(() => import('./pages/NosotrosPage'))
const GuiasPage = lazy(() => import('./pages/GuiasPage'))
const GuiaPage = lazy(() => import('./pages/GuiaPage'))

export default function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <BrowserRouter>
      <LanguageProvider>
        <JourneyProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <SkipLink />
          <Navbar />
          <ScrollToHash />
          <Suspense fallback={<div className="min-h-screen bg-almond" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/en" element={<Home />} />
              <Route path="/metodo" element={<MetodoPage />} />
              <Route path="/en/metodo" element={<MetodoPage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/en/nosotros" element={<NosotrosPage />} />
              <Route path="/guias" element={<GuiasPage />} />
              <Route path="/en/guides" element={<GuiasPage />} />
              <Route path="/guias/:slug" element={<GuiaPage />} />
              <Route path="/en/guides/:slug" element={<GuiaPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <StickyCta />
          <Footer />
        </JourneyProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
