import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const { isDark } = useContext(ThemeContext)

  const projectsData = [
    {
      title: 'Bone Deformity Identification',
      description: 'CNN-based system to identify bone deformities using X-ray images with Django web interface.',
      tech: ['CNN', 'TensorFlow', 'Django', 'Python'],
      github: 'https://github.com/venkatesh-548 ',
      image: '🦴',
    },
    {
      title: 'Health Monitoring Diet Recommendation',
      description: 'ML system that recommends personalized diet plans based on health monitoring data.',
      tech: ['Machine Learning', 'Python', 'Flask', 'Data Analysis'],
      github: 'https://github.com/venkatesh-548 ',
      image: '🥗',
    },
    {
      title: 'Human Emotion Detection',
      description: 'Deep learning model to detect and classify human emotions from facial expressions.',
      tech: ['Deep Learning', 'OpenCV', 'TensorFlow', 'Python'],
      github: 'https://github.com/venkatesh-548 ',
      image: '😊',
    },
    {
      title: 'Real-Time Network Intrusion Detection Using Wireshark and Machine Learning Techniques',
      description: 'ML-based system to detect and classify network intrusion attacks in real-time.',
      tech: ['Machine Learning', 'Python', 'Scikit-learn', 'Network Security'],
      github: 'https://github.com/venkatesh-548 ',
      image: '🛡️',
    },
    {
      title: 'Django E-Commerce Platform',
      description: 'Full-stack e-commerce platform built with Django and modern frontend technologies.',
      tech: ['Django', 'Python', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/venkatesh-548 ',
      image: '🛒',
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for data visualization and analysis using Python libraries.',
      tech: ['Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      github: '#',
      image: '📊',
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
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`group relative overflow-hidden rounded-lg backdrop-blur-md ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'} p-6 transition-all duration-300`}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{project.image}</div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-gray-700/50 text-blue-300' : 'bg-gray-200/50 text-blue-600'}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                    >
                      <FiGithub size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${isDark ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-200/50 text-blue-600 hover:bg-blue-300/50'}`}
                    >
                      <FiExternalLink size={18} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
