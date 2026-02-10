import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  const { isDark } = useContext(ThemeContext)

  const experienceData = [
    {
      title: 'Teaching Assistant',
      institution: 'JNTU-GV University College of Engineering, Vizianagaram',
      period: '2024 - Present',
      subjects: ['Python', 'Machine Learning', 'AI', 'Django', 'Software Engineering'],
      description: 'Assisting in teaching various computer science courses with focus on practical applications.',
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
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          {/* Experience Items */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== experienceData.length - 1 && (
                  <div
                    className={`absolute left-8 top-24 w-1 h-32 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
                  />
                )}

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex gap-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-lg border-l-4 border-blue-500`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center"
                    >
                      <FiBriefcase size={28} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className={`text-lg mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {exp.institution}
                    </p>
                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.period}
                    </p>

                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.description}
                    </p>

                    <div>
                      <p className="font-semibold mb-2">Subjects Taught:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.subjects.map((subject) => (
                          <motion.span
                            key={subject}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
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

export default Experience
