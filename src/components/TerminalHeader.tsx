"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TerminalHeader = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  const texts = [
    '> Kevin Özşimşek @ NEBIM',
    '> Platform Operations Engineer',
    '> Cloud & DevOps Specialist',
    '> Full Stack Developer',
  ]

  useEffect(() => {
    let cursorInterval: NodeJS.Timeout
    let typingInterval: NodeJS.Timeout

    // Cursor blink effect
    cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 500)

    // Typing and deleting animation
    typingInterval = setInterval(() => {
      const currentText = texts[currentIndex]
      
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 3000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setTimeout(() => {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }, 1000)
        }
      }
    }, isDeleting ? 30 : 80)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(typingInterval)
    }
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center space-x-4">
            {/* Terminal window controls */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            {/* Terminal text with typing animation */}
            <div className="flex items-center space-x-2">
              <span className="text-green-400 font-mono">$</span>
              <span className="text-gray-300 font-mono">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-5 bg-green-400 inline-block"
              />
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-400 font-mono">system online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs text-gray-400 font-mono">cloud connected</span>
            </div>
            {/* Email address */}
            <a
              href="mailto:kevinozsimsek@gmail.com"
              className="text-xs text-gray-400 font-mono hover:text-green-400 transition-colors duration-200"
            >
              kevinozsimsek@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TerminalHeader 