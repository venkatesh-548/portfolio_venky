import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiDownload, FiMail, FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isDark } = useContext(ThemeContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: isDark
            ? [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
              ]
            : [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Taddi{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Venkatesh
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
        >
          <p className="mb-2">Assistant Professor Aspirant</p>
          <p className="mb-2">UGC NET Qualified</p>
          <p>ML Engineer & Django Developer</p>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className={`text-lg mb-10 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Passionate about Machine Learning, Deep Learning, and teaching. Published researcher with
          expertise in CNN-based applications. Ready to contribute to academia and industry.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center gap-2 justify-center"
            >
              View Projects
            </motion.button>
          </Link>
          <motion.a
            href="https://github.com/venkatesh-548/Resume_folder"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center inline-block ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
          >
            <FiDownload size={20} />
            Download Resume
          </motion.a>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold border-2 flex items-center gap-2 justify-center ${isDark ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white' : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'}`}
            >
              <FiMail size={20} />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/venkatesh-548"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <FiGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="mailto:venkateshtaddi19548@gmail.com"
            className={`p-3 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <FiMail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className={`border-2 rounded-full p-2 ${isDark ? 'border-white' : 'border-gray-900'}`}>
          <div className={`w-1 h-3 ${isDark ? 'bg-white' : 'bg-gray-900'} rounded-full`} />
        </div>
      </motion.div>
    </div>
  )
}

export default Home
