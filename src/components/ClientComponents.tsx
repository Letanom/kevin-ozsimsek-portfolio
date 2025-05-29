'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Preload components to avoid hydration mismatch
const TerminalHeader = dynamic(() => import('./TerminalHeader'), {
  ssr: false,
  loading: () => <div className="h-12 bg-black" aria-hidden="true" />
})

const ClientBackground = dynamic(() => import('./ClientBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" aria-hidden="true" />
})

function HydrationWrapper({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // During SSR and initial hydration, render a minimal version
  if (!isHydrated) {
    return (
      <div className="relative" aria-hidden="true">
        <div className="h-12 bg-black" />
        <div className="fixed inset-0 bg-black" />
      </div>
    )
  }

  // After hydration, render the full component
  return (
    <div className="relative">
      {children}
    </div>
  )
}

export default function ClientComponents() {
  return (
    <HydrationWrapper>
      <TerminalHeader />
      <ClientBackground />
    </HydrationWrapper>
  )
} 