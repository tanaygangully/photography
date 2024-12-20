'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', icon: '⚛️', level: 90 },
  { name: 'Next.js', icon: '🔼', level: 85 },
  { name: 'TypeScript', icon: '🏷️', level: 80 },
  { name: 'Tailwind CSS', icon: '🎨', level: 95 },
  { name: 'Node.js', icon: '🟢', level: 75 },
  { name: 'GraphQL', icon: '🔗', level: 70 },
]

export default function Skills() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

