import React, { useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { isDark } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Replace with your actual Public Key from emailjs.com
    emailjs.init('YOUR_PUBLIC_KEY_HERE')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace SERVICE_ID and TEMPLATE_ID with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID_HERE',
        'YOUR_TEMPLATE_ID_HERE',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'venkateshtaddi19548@gmail.com', // Your email address
        }
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(''), 3000)
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:border-blue-500 focus:outline-none transition-all`}
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:border-blue-500 focus:outline-none transition-all`}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:border-blue-500 focus:outline-none transition-all`}
                    placeholder="Message Subject"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:border-blue-500 focus:outline-none transition-all resize-none`}
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center font-semibold ${submitStatus === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                  >
                    {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                  </motion.div>
                )}

                {/* Setup Instructions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg text-xs ${isDark ? 'bg-yellow-500/10 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`}
                >
                  <p className="font-semibold mb-1">📝 Setup Instructions:</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Create account at emailjs.com</li>
                    <li>Get your Public Key, Service ID & Template ID</li>
                    <li>Update Contact.jsx with your credentials</li>
                    <li>Contact form will work after setup!</li>
                  </ol>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 border-blue-500`}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <FiMail size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>venkateshtaddi19548@gmail.com</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-l-4 border-purple-500`}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <FiPhone size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>+91 XXXXX XXXXX</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FiGithub, href: 'https://github.com/venkatesh-548', label: 'GitHub' },
                    { icon: FiLinkedin, href: 'https://linkedin.com/in/venkatesh-548', label: 'LinkedIn' },
                    { icon: FiMail, href: 'mailto:venkateshtaddi19548@gmail.com', label: 'Email' },
                  ].map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        whileHover={{ scale: 1.2, y: -5 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} flex items-center justify-center transition-all`}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Response Time */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border border-blue-500`}
              >
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  I typically respond to emails within 24 hours. Looking forward to hearing from you!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
