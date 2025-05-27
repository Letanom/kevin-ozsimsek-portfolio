"use client"

import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial-dark from-surface-light/50 via-surface to-surface-dark -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal-style About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs text-gray-400 font-mono">nano about.txt</div>
            <div className="w-20" /> {/* Spacer for symmetry */}
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm text-gray-300 space-y-4">
            <div className="flex items-start">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-yellow-400">cat about.txt</span>
            </div>
            <div className="pl-4 space-y-2">
              <p className="text-primary-400"># About Me</p>
              <p>I am an energetic and curious software engineer, currently working as a Platform Operations Engineer at NEBIM. My passion for technology drives me to constantly explore and learn new things in the ever-evolving world of software development.</p>
              <br />
              <p className="text-primary-400"># Current Focus</p>
              <p>As an Operations Engineer, I'm deeply involved in:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Building and maintaining robust cloud infrastructure</li>
                <li>Implementing efficient DevOps practices</li>
                <li>Ensuring system reliability and performance</li>
              </ul>
              <br />
              <p className="text-primary-400"># Future Goals</p>
              <p>I'm particularly passionate about advancing my expertise in:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Cloud technologies and architecture</li>
                <li>DevOps methodologies and tools</li>
                <li>Artificial Intelligence and Machine Learning</li>
              </ul>
              <br />
              <p>My goal is to become a well-rounded expert in these domains, combining operational excellence with innovative solutions.</p>
            </div>
            <div className="flex items-start mt-4">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-gray-400"># File saved and closed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 