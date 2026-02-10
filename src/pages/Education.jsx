import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiAward } from 'react-icons/fi'

const Education = () => {
  const { isDark } = useContext(ThemeContext)

  const educationData = [
    {
      level: 'M.Tech Data Science',
      institution: 'JNTU-GV (Pursuing)',
      cgpa: '7.93',
      year: '2024-2026',
    },
    {
      level: 'B.Tech Computer Science',
      institution: 'NVR Engineering College',
      cgpa: '7.09',
      year: '2019-2023',
    },
    {
      level: 'Class XII (Intermediate)',
      institution: 'Shree Sai Siddhartha Junior College, Gajapathinagaram',
      cgpa: '9.91',
      year: '2017-2019',
    },
    {
      level: 'Class X (Secondary)',
      institution: 'Z P High School, Gadasam',
      cgpa: '9.3',
      year: '2016-2017',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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
            Education <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Timeline</span>
          </motion.h2>

          {/* Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== educationData.length - 1 && (
                  <div
                    className={`absolute left-8 top-24 w-1 h-16 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
                  />
                )}

                {/* Timeline Item */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex gap-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-lg`}
                >
                  {/* Circle */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center"
                    >
                      <FiAward size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-bold mb-2">{edu.level}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        CGPA: {edu.cgpa}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
