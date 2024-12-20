'use client'

import { motion } from 'framer-motion'

const services = [
  { title: 'Weddings', icon: '💍', description: 'Capture your special day with timeless elegance.' },
  { title: 'Portraits', icon: '🧑', description: 'Showcase your personality with stunning portraits.' },
  { title: 'Events', icon: '🎉', description: 'Document your events with style and creativity.' },
  { title: 'Commercial', icon: '🏢', description: 'Elevate your brand with professional photography.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-center text-primary"
        >
          My Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-secondary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

