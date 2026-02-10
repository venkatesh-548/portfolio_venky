import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiStar, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

const Achievements = () => {
  const { isDark } = useContext(ThemeContext)

  const achievementsData = [
    {
      icon: FiStar,
      title: 'UGC NET Qualified',
      description: 'Qualified in UGC National Eligibility Test for Admission to Ph.D. ',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: FiTrendingUp,
      title: 'First Class Throughout',
      description: 'Maintained excellent academic performance across all education levels',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: FiCheckCircle,
      title: 'No Backlogs',
      description: 'Zero backlogs maintained throughout academic career',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: FiStar,
      title: 'Published Researcher',
      description: 'Published multiple research papers in reputed international journals',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: FiTrendingUp,
      title: 'Teaching Assistant Excellence',
      description: 'Consistently rated highly by students for teaching quality and guidance',
      color: 'from-indigo-400 to-blue-400',
    },
    {
      icon: FiCheckCircle,
      title: 'Project Excellence',
      description: 'Led multiple projects with successful implementation and impact',
      color: 'from-red-400 to-pink-400',
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
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`relative overflow-hidden rounded-lg p-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r ${achievement.color} opacity-10 -mr-8 -mt-8`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.2 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4`}
                    >
                      <IconComponent size={28} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {achievement.description}
                    </p>

                    {/* Accent Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`mt-4 h-1 bg-gradient-to-r ${achievement.color}`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Achievements
