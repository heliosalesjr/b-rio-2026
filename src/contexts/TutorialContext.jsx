"use client"

import { createContext, useContext } from 'react'

const TutorialContext = createContext()

export function TutorialProvider({ children }) {
  return (
    <TutorialContext.Provider value={{}}>
      {children}
    </TutorialContext.Provider>
  )
}

export function useTutorial() {
  const context = useContext(TutorialContext)
  if (context === undefined) {
    throw new Error('useTutorial must be used within a TutorialProvider')
  }
  return context
}