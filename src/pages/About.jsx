import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'

const About = () => {
  const { isDark } = useContext(ThemeContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                To work as an Assistant Professor and contribute to academic excellence while conducting
                cutting-edge research in Machine Learning and Deep Learning. Dedicated to inspiring
                students and advancing the field of artificial intelligence through innovation and quality
                education.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Short Bio</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I am a passionate Data Science enthusiast currently pursuing M.Tech in Data Science
                from JNTU-GV University College of Engineering Vizianagaram. With a strong foundation in Python, Machine Learning, and Deep Learning,
                I have worked on various projects ranging from medical imaging to network security.
                UGC NET qualified for Admission to ph D with a commitment to both teaching and research.
              </p>
            </motion.div>

            {/* Right - Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Teaching Philosophy</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 border-blue-500`}
                >
                  <h4 className="text-lg font-semibold mb-2">Practical Learning</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Believe in hands-on approach where students work on real-world projects alongside theory.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 border-purple-500`}
                >
                  <h4 className="text-lg font-semibold mb-2">Mentorship</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Committed to guiding students beyond academics and helping them build successful careers.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 border-green-500`}
                >
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Focus on keeping curriculum updated with latest trends in AI and Machine Learning.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
