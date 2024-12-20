'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      style={{ backgroundColor: headerBackground }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Jane Doe Photography
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="#home" className="text-gray-800 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="text-gray-800 hover:text-primary transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-800 hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-800 hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-800 hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

