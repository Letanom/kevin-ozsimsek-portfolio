"use client"

import { motion as Motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Arhan Swim Academy',
    description: 'A modern website for a swimming academy, featuring class schedules, online booking, and student progress tracking.',
    image: '/projects/arhan-swim.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: 'https://arhanswimacademy.com',
    github: 'https://github.com/letanom/arhan-swim',
  },
  {
    title: 'FastAPI Monitoring Dashboard',
    description: 'A comprehensive monitoring solution for FastAPI applications using OpenTelemetry and Grafana.',
    image: '/projects/fastapi-monitoring.jpg',
    tags: ['FastAPI', 'OpenTelemetry', 'Grafana', 'Python'],
    github: 'https://github.com/letanom/grafana_prometheus_python',
  },
  {
    title: 'AI Booking Prediction',
    description: 'An AI-powered system that predicts booking patterns and provides personalized vacation recommendations.',
    image: '/projects/ai-booking.jpg',
    tags: ['Python', 'Machine Learning', 'FastAPI', 'Docker'],
    github: 'https://github.com/letanom/AI_Booking_Prediction_Backend',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and secure payments.',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/letanom/E-Commerce-Project',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: '/projects/chat-app.jpg',
    tags: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/letanom/SocketioChatting',
  },
  {
    title: 'Movie Database App',
    description: 'A movie database application with user authentication, favorites, and real-time updates.',
    image: '/projects/movie-app.jpg',
    tags: ['React', 'Firebase', 'TMDB API', 'Tailwind CSS'],
    github: 'https://github.com/letanom/firebase_movie_app',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            A selection of my recent work, showcasing my expertise in web development,
            cloud operations, and system architecture.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-secondary-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      View Live →
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
                  >
                    View Code →
                  </Link>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="https://github.com/letanom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-secondary-300 dark:border-secondary-700 text-base font-medium rounded-md text-secondary-700 dark:text-secondary-200 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
          >
            View More Projects on GitHub
          </Link>
        </Motion.div>
      </div>
    </section>
  )
} 