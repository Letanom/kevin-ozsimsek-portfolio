"use client"

import { motion as Motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    title: 'Getting Started with OpenTelemetry in FastAPI Applications',
    description:
      'Learn how to implement OpenTelemetry in your FastAPI applications for better observability and monitoring.',
    image: '/blog/opentelemetry.jpg',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Observability',
    link: 'https://medium.com/@kevinozsimsek/getting-started-with-opentelemetry-in-fastapi-applications',
  },
  {
    title: 'Building Scalable AWS Infrastructure with Terraform',
    description:
      'A comprehensive guide to setting up and managing scalable AWS infrastructure using Terraform.',
    image: '/blog/terraform.jpg',
    date: 'March 10, 2024',
    readTime: '12 min read',
    category: 'Cloud',
    link: 'https://medium.com/@kevinozsimsek/building-scalable-aws-infrastructure-with-terraform',
  },
  {
    title: 'Creating Effective New Relic Dashboards',
    description:
      'Best practices for creating and maintaining effective New Relic dashboards for your applications.',
    image: '/blog/newrelic.jpg',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Monitoring',
    link: 'https://medium.com/@kevinozsimsek/creating-effective-new-relic-dashboards',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Sharing my knowledge and experiences in cloud operations, observability,
            and freelance development through detailed articles and tutorials.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-secondary-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {post.description}
                </p>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Read Article →
                </Link>
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
            href="https://medium.com/@kevinozsimsek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-secondary-300 dark:border-secondary-700 text-base font-medium rounded-md text-secondary-700 dark:text-secondary-200 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
          >
            Read More on Medium
          </Link>
        </Motion.div>
      </div>
    </section>
  )
} 