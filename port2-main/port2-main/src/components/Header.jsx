import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../config'



export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-0">
        
        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">

          {/* Logo with hover animation */}
 <motion.img
  src="/assests/logo.png"  // <- match your folder name
  alt="Logo"
  className="w-10 h-10 rounded-lg object-cover"
  whileHover={{ scale: 1.08, rotate: 1 }}
  transition={{ type: "spring", stiffness: 200 }}
/>


          <div>
            <div className="font-semibold">{SITE.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{SITE.title}</div>
          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </motion.button>

          <a
            href={SITE.resume}
            download
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow-sm hover:bg-indigo-500"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
