'use client'

import { useEffect, useState } from 'react'

export default function DynamicBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial-dark from-gray-800 via-gray-900 to-black -z-10" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] -z-10" />
      <div className="fixed inset-0 bg-noise opacity-[0.03] -z-10" />
      
      {/* Animated gradient orbs */}
      <div className="fixed top-0 -left-4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="fixed top-0 -right-4 w-96 h-96 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="fixed -bottom-8 left-20 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      {/* Spotlight effect */}
      <div className="fixed inset-0 bg-gradient-radial-dark from-transparent via-gray-900/50 to-black -z-10 animate-spotlight" />
    </>
  )
} 