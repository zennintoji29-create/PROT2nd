import { motion } from "framer-motion";
import { FaCode, FaReact, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          👨‍💻 About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I’m a creative{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">
            frontend developer
          </span>{" "}
          who loves turning ideas into stunning digital experiences. I focus on
          clean design, smooth interaction, and performance — because good UI means
          nothing without good UX. I build modern web apps using tools like
          React, TailwindCSS & Framer Motion.
        </motion.p>

        {/* Floating Feature Icons */}
        <motion.div
          className="flex items-center justify-center gap-10 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer hover:shadow-blue-500/40 transition-all"
          >
            <FaCode className="text-3xl text-blue-600 dark:text-blue-400" />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Clean Code</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer hover:shadow-purple-500/40 transition-all"
          >
            <FaReact className="text-3xl text-purple-600 dark:text-purple-400" />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">React Dev</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer hover:shadow-red-500/40 transition-all"
          >
            <FaRocket className="text-3xl text-pink-600 dark:text-pink-400" />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Fast & Smooth</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
