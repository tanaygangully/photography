'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you!
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-gray-800">Message</label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

