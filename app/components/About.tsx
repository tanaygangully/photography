'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl max-w-2xl mx-auto">
            I'm Jane Doe, a passionate photographer with over 10 years of experience capturing life's most precious moments.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Jane Doe"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="mb-4">
              I discovered my passion for photography during a backpacking trip across Europe. Since then, I've dedicated my life to capturing the beauty of the world and the emotions of people through my lens.
            </p>
            <p className="mb-4">
              My work has been featured in various exhibitions and publications, and I've had the privilege of working with clients from all walks of life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary font-bold py-2 px-6 rounded-full text-lg"
            >
              View My Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

