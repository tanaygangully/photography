'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  { src: '/placeholder.svg?height=400&width=600', width: 600, height: 400 },
  { src: '/placeholder.svg?height=300&width=400', width: 400, height: 300 },
  { src: '/placeholder.svg?height=500&width=700', width: 700, height: 500 },
  { src: '/placeholder.svg?height=600&width=800', width: 800, height: 600 },
  { src: '/placeholder.svg?height=350&width=500', width: 500, height: 350 },
  { src: '/placeholder.svg?height=450&width=600', width: 600, height: 450 },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-center text-primary"
        >
          My Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={photo.src}
                alt={`Gallery image ${index + 1}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh]"
          >
            <Image
              src={photos[selectedImage].src}
              alt={`Gallery image ${selectedImage + 1}`}
              width={photos[selectedImage].width}
              height={photos[selectedImage].height}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

