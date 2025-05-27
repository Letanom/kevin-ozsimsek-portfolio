"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

const glowAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const typingItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial-dark from-surface-light/50 via-surface to-surface-dark -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
      
      {/* Terminal-style Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent animate-matrix" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={glowAnimation}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={glowAnimation}
        transition={{ delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-500/30 to-primary-500/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Terminal-style Command History */}
            <motion.div
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 font-mono text-sm text-gray-400 space-y-2"
            >
              <motion.div variants={typingItemVariants} className="flex items-center">
                <span className="text-primary-400 mr-2">$</span>
                <span className="animate-typing">whoami</span>
              </motion.div>
              <motion.div variants={typingItemVariants} className="flex items-center">
                <span className="text-primary-400 mr-2">&gt;</span>
                <span>kevin.ozsimsek@nebim</span>
              </motion.div>
              <motion.div variants={typingItemVariants} className="flex items-center">
                <span className="text-primary-400 mr-2">$</span>
                <span className="animate-typing">cat role.txt</span>
              </motion.div>
              <motion.div variants={typingItemVariants} className="flex items-center">
                <span className="text-primary-400 mr-2">&gt;</span>
                <span>Platform Operations Engineer @ NEBIM</span>
              </motion.div>
              <motion.div variants={typingItemVariants} className="flex items-center">
                <span className="text-primary-400 mr-2">$</span>
                <span className="animate-typing">cat contact.txt</span>
              </motion.div>
              <motion.div variants={typingItemVariants} className="flex items-center">
                <span className="text-primary-400 mr-2">&gt;</span>
                <span>kevinozsimsek@gmail.com</span>
              </motion.div>
            </motion.div>

            {/* Role Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium backdrop-blur-sm font-mono">
                $ Platform Operations Engineer @ NEBIM
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="block font-mono text-primary-400">&gt; Building Scalable</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient-x">
                Cloud Infrastructure
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-mono"
            >
              $ Transforming complex cloud challenges into elegant solutions
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-mono"
            >
              $ Specializing in AWS, Kubernetes, and cloud-native technologies
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 font-mono"
              >
                <span className="relative z-10">$ contact --init</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
              </Link>
              <Link
                href="#projects"
                className="group relative px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10 font-mono"
              >
                <span className="relative z-10">$ ls projects/</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Terminal-style Status */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm font-mono text-sm"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-400">System Status:</span>
                <span className="text-primary-400">Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-gray-400">Current Role:</span>
                <span className="text-primary-400">Platform Operations @ NEBIM</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-gray-400">Contact:</span>
                <span className="text-primary-400">kevinozsimsek@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <motion.div
              variants={imageVariants}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                
                {/* Terminal-style Border */}
                <div className="absolute inset-0 border-2 border-primary-500/20 rounded-2xl">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-sm border-b border-primary-500/20 rounded-t-2xl flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-xs text-gray-400 font-mono">kevin.ozsimsek@terminal</div>
                  </div>
                </div>
                
                {/* Main Image */}
                <Image
                  src="/kevin.jpeg"
                  alt="Kevin Özşimşek"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 mt-8"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Decorative Elements */}
                <motion.div
                  animate={floatingAnimation}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-xl blur-xl"
                />
                <motion.div
                  animate={floatingAnimation}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-xl blur-xl"
                />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-shadow duration-500" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={floatingAnimation}
                className="absolute -top-6 -right-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 font-mono"
              >
                <span className="text-sm font-medium text-white">$ aws --certified</span>
              </motion.div>
              <motion.div
                animate={floatingAnimation}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-6 -left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 font-mono"
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 