"use client"

import { motion as Motion } from 'framer-motion'
import {
  ComputerDesktopIcon,
  ChartBarIcon,
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Custom Website Development',
    description:
      'Modern, responsive websites built with React, Next.js, and TypeScript. From simple landing pages to complex web applications.',
    icon: ComputerDesktopIcon,
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Performance optimization',
      'Modern UI/UX',
    ],
  },
  {
    name: 'Monitoring Solutions',
    description:
      'Comprehensive monitoring and observability solutions using New Relic, Grafana, and OpenTelemetry.',
    icon: ChartBarIcon,
    features: [
      'Custom dashboards',
      'Alert configuration',
      'Performance monitoring',
      'Log aggregation',
    ],
  },
  {
    name: 'Cloud Infrastructure',
    description:
      'AWS infrastructure setup, optimization, and management for scalable and reliable applications.',
    icon: CloudIcon,
    features: [
      'Infrastructure as Code',
      'High availability setup',
      'Cost optimization',
      'Security best practices',
    ],
  },
  {
    name: 'API Development',
    description:
      'Robust API development using FastAPI, Node.js, or other modern frameworks.',
    icon: CodeBracketIcon,
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'API documentation',
      'Performance optimization',
    ],
  },
  {
    name: 'DevOps Consulting',
    description:
      'DevOps practices implementation, CI/CD pipeline setup, and infrastructure automation.',
    icon: CommandLineIcon,
    features: [
      'CI/CD pipeline setup',
      'Container orchestration',
      'Infrastructure automation',
      'Best practices implementation',
    ],
  },
  {
    name: 'Technical Documentation',
    description:
      'Comprehensive technical documentation for your projects, APIs, and infrastructure.',
    icon: DocumentTextIcon,
    features: [
      'API documentation',
      'System architecture docs',
      'Deployment guides',
      'Best practices guides',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Through my freelance brand, Keweble, I offer a range of services to help
            businesses achieve their technical goals. From web development to cloud
            infrastructure, I provide end-to-end solutions tailored to your needs.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative p-6 bg-white dark:bg-secondary-800 rounded-lg h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-500 text-white mb-4">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-secondary-600 dark:text-secondary-300"
                    >
                      <svg
                        className="h-4 w-4 text-primary-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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
            Get Started with Your Project
          </a>
        </Motion.div>
      </div>
    </section>
  )
} 