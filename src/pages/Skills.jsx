import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiZap } from 'react-icons/fi'

const Skills = () => {
  const { isDark } = useContext(ThemeContext)

  const skillsData = {
    'Python & Data Science': [
      { name: 'Python', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib/Seaborn', level: 80 },
    ],
    'Machine Learning': [
      { name: 'Scikit-learn', level: 90 },
      { name: 'Feature Engineering', level: 87 },
      { name: 'Model Evaluation', level: 89 },
      { name: 'Regression & Classification', level: 92 },
    ],
    'Deep Learning': [
      { name: 'TensorFlow', level: 88 },
      { name: 'Keras', level: 87 },
      { name: 'CNN', level: 90 },
      { name: 'Neural Networks', level: 89 },
    ],
    'Web Development': [
      { name: 'Django', level: 92 },
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 88 },
    ],
    'Databases & Tools': [
      { name: 'SQL', level: 88 },
      { name: 'Git', level: 90 },
      { name: 'Jupyter', level: 92 },
    //   { name: 'REST APIs', level: 87 },
    ],
  }

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

  const ProgressBar = ({ name, level }) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="font-bold text-blue-400">{level}%</span>
      </div>
      <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )

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
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <FiZap className="text-blue-400" />
                  {category}
                </h3>

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {skills.map((skill) => (
                    <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
