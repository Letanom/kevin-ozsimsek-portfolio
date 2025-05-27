"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Letanom',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevın-özşimşek-2a8773194/',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const Footer = () => {
  const [mounted, setMounted] = useState(false)
  const currentYear = '2024'
  const lastUpdated = 'March 2024'

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <footer className="relative border-t border-primary-500/20 bg-black/40 backdrop-blur-md">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent animate-matrix" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Terminal Status */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-mono text-primary-400">$ system status</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-400 font-mono">system: online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm text-gray-400 font-mono">uptime: 1+ year</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-sm text-gray-400 font-mono">location: remote</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-mono text-primary-400">$ quick links</h3>
            <nav className="space-y-2">
              {[
                { href: '#about', label: '&gt; about' },
                { href: '#projects', label: '&gt; projects' },
                { href: '#tech-stack', label: '&gt; tech-stack' },
                { href: '#contact', label: '&gt; contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 font-mono"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-mono text-primary-400">$ stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">1+</div>
                <div className="text-sm text-gray-400 font-mono">Years in Tech</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">5+</div>
                <div className="text-sm text-gray-400 font-mono">Cloud Projects</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">10+</div>
                <div className="text-sm text-gray-400 font-mono">Infrastructure Managed</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-400 font-mono">2+</div>
                <div className="text-sm text-gray-400 font-mono">Enterprise Clients</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-mono text-primary-400">$ social links</h3>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 font-mono group bg-black/40 hover:bg-black/60 p-2 rounded-lg border border-gray-800"
                  >
                    <span className="text-green-400">&gt;</span>
                    <link.icon className="h-5 w-5 text-primary-400" aria-hidden="true" />
                    <span className="group-hover:text-primary-400">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Current Status */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-mono text-primary-400">$ current status</h3>
            <div className="p-4 rounded-xl bg-white/5 border border-primary-500/20 backdrop-blur-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-mono">role:</span>
                  <span className="text-sm text-primary-400 font-mono">Platform Ops @ NEBIM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-mono">status:</span>
                  <span className="text-sm text-green-400 font-mono">available for freelance</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-mono">timezone:</span>
                  <span className="text-sm text-primary-400 font-mono">UTC+3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-primary-500/20 text-center"
        >
          <p className="text-sm text-gray-400 font-mono">
            $ echo "© {currentYear} Kevin Özşimşek. All rights reserved."
          </p>
          <p className="text-xs text-gray-500 font-mono mt-2">
            $ cat /etc/version.txt
            <br />
            &gt; Built with Next.js, TailwindCSS, and Framer Motion
            <br />
            &gt; Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 