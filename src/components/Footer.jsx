import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  const { isDark } = useContext(ThemeContext)
  const currentYear = new Date().getFullYear()

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
    <footer className={`${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'} text-center py-12 border-t ${isDark ? 'border-gray-700' : 'border-blue-100'}`}>
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
          {[
            { icon: FiGithub, href: 'https://github.com/venkatesh-548', label: 'GitHub', color: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg hover:scale-110' },
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-110' },
            { icon: FiMail, href: 'mailto:venkateshtaddi19548@gmail.com', label: 'Email', color: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-lg hover:scale-110' },
            { icon: FiPhone, href: 'tel:+917386624002', label: 'Phone', color: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:scale-110' },
          ].map((social) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.15, y: -5 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center transition-all shadow-md`}
              >
                <IconComponent size={22} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Links */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className={`flex justify-center gap-8 mb-6 flex-wrap font-medium ${isDark ? 'text-gray-400' : 'text-blue-900'}`}>
            <Link to="/projects" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
              Projects
            </Link>
            <Link to="/skills" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
              Skills
            </Link>
            <Link to="/research" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
              Research
            </Link>
            <Link to="/contact" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div variants={itemVariants} className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>
          <p className={`mb-3 font-semibold ${isDark ? 'text-gray-400' : 'text-blue-900'}`}>
            © {currentYear} Taddi Venkatesh. All rights reserved.
          </p>
          <p className={`${isDark ? 'text-gray-600' : 'text-gray-600'} font-medium`}>
            Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span> using React & Tailwind CSS
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className={`mt-6 text-xs ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
          <p>
            <a href="#privacy" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors mr-3`}>
              Privacy Policy
            </a>
            |
            <a href="#terms" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors ml-3`}>
              Terms of Service
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
