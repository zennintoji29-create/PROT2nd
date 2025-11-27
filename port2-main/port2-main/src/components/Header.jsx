import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../config'

export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-6 sticky top-0 z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-0">
        
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3 cursor-pointer">
     <img
  src="/logo.png"
  alt="Logo"
  className="h-16 w-auto transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
/>

          <div>
            <div className="font-semibold tracking-wide text-white">{SITE.name}</div>
            <div className="text-xs text-gray-400">{SITE.title}</div>
          </div>
        </motion.div>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm">
          {["projects", "skills", "contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              className="hover:text-purple-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}

          {/* THEME BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-black/20 hover:bg-black/40 border border-white/10"
          >
            {theme === 'dark' ? "🌙" : "☀️"}
          </motion.button>

          {/* RESUME BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={SITE.resume}
            download
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:opacity-90"
          >
            Resume
          </motion.a>
        </nav>
      </div>
    </motion.header>
  )
}
