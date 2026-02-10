import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiBookOpen } from 'react-icons/fi'

const Research = () => {
  const { isDark } = useContext(ThemeContext)

  const publicationsData = [
    {
      title: '“Smart Budget Allocation in Public Policy: A Data-Driven Approach for Equitable Resource Distribution',
      journal: 'International Journal of Research and Scientific Innovation (IJRSI) ',
      year: 'Vol. XII, Issue IX, September 2025',
      authors: ' Ashok Teja Kaki, Dr. Kolli Srikanth, Taddi Venkatesh,Tharun kumar',
      abstract: 'A novel approach using machine learning to optimize budget allocation in government policies with case studies.',
      link: 'https://www.rsisinternational.org/journals/ijrias/view/smart-budget-allocation-in-public-policy-a-data-driven-approach-for-equitable-resource-distribution',
    },
    {
      title: 'Design and Implementation of a Django-based Web Application for Bone Deformity Identification using Deep Learning',
      journal: 'IJSDR - International Journal of Scientific Development and Research',
      year: 'Volume 10 Issue 10, October-2025',
      authors: 'Taddi Venkatesh , K Srikanth , B L Soma Naidu , D Ganesh Kanth',
      abstract: 'Automated detection and classification of bone deformities using convolutional neural networks with 85% accuracy.',
      link: 'https://www.ijsdr.org/viewpaperforall.php?paper=IJSDR2510116',
    },
    // {
    //   title: 'Neural Network Applications in Healthcare Monitoring',
    //   journal: 'Proceedings of International Conference on AI & Healthcare',
    //   year: 2023,
    //   authors: 'Taddi Venkatesh, Colleagues',
    //   abstract: 'Exploration of deep learning models for real-time health monitoring and predictive analysis.',
    // },
  ]

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
            Research <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Publications</span>
          </motion.h2>

          {/* Publications */}
          <div className="space-y-6">
            {publicationsData.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 border-l-4 border-blue-500`}
              >
                {/* Header */}
                <div className="flex gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center"
                  >
                    <FiBookOpen size={24} className="text-white" />
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  </div>
                </div>

                {/* Journal Info */}
                <div className="mb-4 space-y-2">
                  <p className={`text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    📚 {pub.journal} ({pub.year})
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    ✍️ {pub.authors}
                  </p>
                </div>

                {/* Abstract */}
                <div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {pub.abstract}
                  </p>
                </div>

                {/* Read Button */}
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-4 px-6 py-2 rounded-lg font-semibold inline-block ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                >
                  Read Full Paper →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Research
