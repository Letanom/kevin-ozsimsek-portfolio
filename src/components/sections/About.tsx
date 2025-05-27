"use client"

import { motion as Motion } from 'framer-motion'
import {
  CloudIcon,
  ServerIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const skills = [
  {
    name: 'Cloud Operations',
    description: 'AWS SysOps, infrastructure management, and cloud architecture',
    icon: CloudIcon,
  },
  {
    name: 'DevOps',
    description: 'CI/CD pipelines, containerization, and infrastructure as code',
    icon: ServerIcon,
  },
  {
    name: 'Web Development',
    description: 'Modern web applications with React, Next.js, and TypeScript',
    icon: CodeBracketIcon,
  },
  {
    name: 'Monitoring & Observability',
    description: 'New Relic, NRQL dashboards, and OpenTelemetry integrations',
    icon: ChartBarIcon,
  },
  {
    name: 'System Reliability',
    description: 'High availability, disaster recovery, and performance optimization',
    icon: CommandLineIcon,
  },
  {
    name: 'Freelance Services',
    description: 'Custom websites, monitoring solutions, and technical consulting',
    icon: GlobeAltIcon,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            I'm a Platform Operations Engineer with a passion for building reliable,
            scalable systems and creating beautiful web experiences. With expertise
            in AWS SysOps, cloud monitoring, and web development, I help businesses
            achieve their technical goals through both full-time roles and freelance
            work under my brand, Keweble.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative p-6 bg-white dark:bg-secondary-800 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-500 text-white mb-4">
                  <skill.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {skill.description}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
          >
            Let's Work Together
          </a>
        </Motion.div>
      </div>
    </section>
  )
} 