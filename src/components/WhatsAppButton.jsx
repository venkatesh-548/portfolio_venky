import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'

const WhatsAppButton = () => {
  const { isDark } = useContext(ThemeContext)

  const whatsappLink = 'https://wa.me/917386624002?text=Hi%20Taddi,%20I%20would%20like%20to%20discuss%20with%20you.'

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-24 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center font-bold transition-all shadow-lg ${isDark ? 'bg-green-600' : 'bg-green-500'}`}
      style={{
        background: 'linear-gradient(135deg, #25D366, #20BA61)',
      }}
    >
      <span className="text-white text-2xl">💬</span>
    </motion.a>
  )
}

export default WhatsAppButton
