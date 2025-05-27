"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
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

const techs = [
  // Cloud & DevOps
  {
    name: 'AWS',
    logo: '/tech/aws.svg',
    description: 'Cloud Infrastructure & Services',
    category: 'Cloud',
  },
  {
    name: 'Kubernetes',
    logo: '/tech/kubernetes.svg',
    description: 'Container Orchestration',
    category: 'DevOps',
  },
  {
    name: 'Docker',
    logo: '/tech/docker.svg',
    description: 'Containerization',
    category: 'DevOps',
  },
  {
    name: 'Azure',
    logo: '/tech/azure.svg',
    description: 'Cloud Platform',
    category: 'Cloud',
  },
  {
    name: 'Terraform',
    logo: '/tech/terraform.svg',
    description: 'Infrastructure as Code',
    category: 'DevOps',
  },
  // Backend
  {
    name: 'Java',
    logo: '/tech/java.svg',
    description: 'Enterprise Applications',
    category: 'Backend',
  },
  {
    name: 'Python',
    logo: '/tech/python.svg',
    description: 'APIs & AI Development',
    category: 'Backend',
  },
  {
    name: 'FastAPI',
    logo: '/tech/fastapi.svg',
    description: 'Modern Python APIs',
    category: 'Backend',
  },
  {
    name: 'Spring Boot',
    logo: '/tech/spring.svg',
    description: 'Java Enterprise Framework',
    category: 'Backend',
  },
  {
    name: 'TensorFlow',
    logo: '/tech/tensorflow.svg',
    description: 'Machine Learning',
    category: 'AI',
  },
  // Frontend
  {
    name: 'React',
    logo: '/tech/react.svg',
    description: 'Frontend Development',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    logo: '/tech/nextjs.svg',
    description: 'React Framework',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    logo: '/tech/tailwind.svg',
    description: 'Utility-First CSS',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    logo: '/tech/typescript.svg',
    description: 'Typed JavaScript',
    category: 'Frontend',
  },
  {
    name: 'Framer Motion',
    logo: '/tech/framer.svg',
    description: 'Animation Library',
    category: 'Frontend',
  },
  // Monitoring & Observability
  {
    name: 'New Relic',
    logo: '/tech/newrelic.svg',
    description: 'Observability & Monitoring',
    category: 'Monitoring',
  },
  {
    name: 'OpenTelemetry',
    logo: '/tech/opentelemetry.svg',
    description: 'Distributed Tracing',
    category: 'Monitoring',
  },
  // Additional Tools
  {
    name: 'GitHub',
    logo: '/tech/github.svg',
    description: 'Version Control',
    category: 'Tools',
  },
  {
    name: 'VS Code',
    logo: '/tech/vscode.svg',
    description: 'Code Editor',
    category: 'Tools',
  },
  {
    name: 'Postman',
    logo: '/tech/postman.svg',
    description: 'API Development',
    category: 'Tools',
  },
  {
    name: 'Jira',
    logo: '/tech/jira.svg',
    description: 'Project Management',
    category: 'Tools',
  },
]

const categories = ['All', 'Cloud', 'DevOps', 'Backend', 'Frontend', 'AI', 'Monitoring', 'Tools']

export default function TechStack() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredTechs, setFilteredTechs] = useState(techs)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredTechs(techs)
    } else {
      setFilteredTechs(techs.filter(tech => tech.category === selectedCategory))
    }
  }, [selectedCategory])

  if (!mounted) {
    return (
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tech Stack
            </h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial-dark from-surface-light/50 via-surface to-surface-dark -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-accent-500/30 to-primary-500/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Tech Stack
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Enterprise-grade technologies I work with to build scalable and reliable systems
          </motion.p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
                
                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <motion.div
                    animate={floatingAnimation}
                    transition={{ delay: index * 0.1 }}
                    className="relative w-16 h-16 mb-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl transform rotate-3 blur-sm group-hover:blur-md transition-all duration-500" />
                    <div className="relative w-full h-full rounded-xl bg-white/10 backdrop-blur-sm p-3 flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                  </motion.div>

                  {/* Tech Info */}
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                  
                  {/* Category Badge */}
                  <div className="mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-xs font-medium text-primary-400">{tech.category}</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary-500/40 transition-colors duration-500" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-accent-500/0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-400 font-mono">1+</div>
            <div className="text-sm text-gray-400 font-mono">Years in Tech</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-400 font-mono">5+</div>
            <div className="text-sm text-gray-400 font-mono">Cloud Projects</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-400 font-mono">10+</div>
            <div className="text-sm text-gray-400 font-mono">Infrastructure Managed</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-400 font-mono">2+</div>
            <div className="text-sm text-gray-400 font-mono">Enterprise Clients</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 