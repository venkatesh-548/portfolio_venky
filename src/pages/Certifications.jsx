import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiAward } from 'react-icons/fi'

const Certifications = () => {
  const { isDark } = useContext(ThemeContext)

  const certificationsData = [
    {
      title: 'Python Full Stack Developer',
      issuer: 'py Spiders dilshuknagar',
      year: 2023,
      description: 'Complete Python and Django development bootcamp',
    },
    {
      title: 'Python Data Analysis',
      issuer: 'py Spiders dilshuknagar',
      year: 2023,
      description: 'Advanced data analysis with Python and Pandas',
    },
    {
      title: 'Django Web Development',
      issuer: 'py Spiders dilshuknagar',
      year: 2023,
      description: 'Professional Django web development course',
    },
    // {
    //   title: 'Machine Learning Workshop',
    //   issuer: 'IEEE Conference',
    //   year: 2024,
    //   description: 'Hands-on ML algorithms and implementations',
    // },
    {
      title: 'Python Workshop',
      issuer: 'JNTU-GV IT Dept Workshop',
      year: 2025,
      description: 'Python programming concepts',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Certifications &<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Workshops</span>
          </motion.h2>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-2 border-transparent hover:border-blue-500 transition-all duration-300`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mb-4"
                >
                  <FiAward size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {cert.issuer}
                </p>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.description}
                </p>

                {/* Year */}
                <div className={`text-xs font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {cert.year}
                </div>

                {/* Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`mt-4 px-3 py-1 rounded-full text-center text-xs font-semibold ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-200/50 text-blue-600'}`}
                >
                  Verified ✓
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications
