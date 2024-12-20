'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'E-commerce Website', image: '/placeholder.svg', description: 'A fully functional online store built with Next.js and Stripe.' },
  { title: 'Social Media Dashboard', image: '/placeholder.svg', description: 'A responsive dashboard for managing social media accounts.' },
  { title: 'Mobile Weather App', image: '/placeholder.svg', description: 'A React Native app for real-time weather forecasts.' },
  { title: 'Portfolio Website', image: '/placeholder.svg', description: 'A customizable portfolio template for creatives.' },
  { title: 'Task Management System', image: '/placeholder.svg', description: 'A full-stack application for team task management.' },
  { title: 'Fitness Tracker', image: '/placeholder.svg', description: 'A web app for tracking workouts and nutrition.' },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-primary">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(index)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-lg p-8 max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h3>
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                width={600}
                height={400}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <p className="text-gray-600 mb-4">{projects[selectedProject].description}</p>
              <button
                className="bg-primary text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

