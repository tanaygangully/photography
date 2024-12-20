import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Jane Doe Photography</h3>
            <p>Capturing life's precious moments, one click at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><Link href="#home" className="hover:text-accent">Home</Link></li>
              <li><Link href="#gallery" className="hover:text-accent">Gallery</Link></li>
              <li><Link href="#about" className="hover:text-accent">About</Link></li>
              <li><Link href="#services" className="hover:text-accent">Services</Link></li>
              <li><Link href="#contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent"><span className="sr-only">Facebook</span><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-accent"><span className="sr-only">Instagram</span><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-accent"><span className="sr-only">Twitter</span><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Jane Doe Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

