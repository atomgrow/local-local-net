import { createContext, useContext, useMemo, useState } from 'react'
import { trackMicroDecision } from './tracking'

// ============================================================
//  Journey — micro-decisión temprana ("explorando" | "avanzando").
//  Se persiste en sessionStorage para personalizar el flujo
//  sin ocultar ningún camino: solo cambia el énfasis visual.
// ============================================================

const JOURNEY_STORAGE_KEY = 'll_journey'

const JourneyContext = createContext(null)

export function JourneyProvider({ children }) {
  const [journey, setJourneyState] = useState(() => {
    try {
      const saved = sessionStorage.getItem(JOURNEY_STORAGE_KEY)
      return saved === 'explorando' || saved === 'avanzando' ? saved : null
    } catch {
      return null
    }
  })

  const setJourney = (next) => {
    setJourneyState(next)
    trackMicroDecision(next)
    try {
      sessionStorage.setItem(JOURNEY_STORAGE_KEY, next)
    } catch {
      /* sin storage: la elección vale solo para esta vista */
    }
  }

  const value = useMemo(() => ({ journey, setJourney }), [journey])

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
}

export function useJourney() {
  return useContext(JourneyContext)
}
