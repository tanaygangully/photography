'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 250])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4">Jane Doe Photography</h1>
          <p className="text-2xl mb-8">Capturing life's precious moments</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg"
          >
            Explore Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

