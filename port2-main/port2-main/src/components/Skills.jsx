
import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          My Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl"
        >
          A quick timeline of growth, learning, and milestones throughout my development journey.
        </motion.p>

        <div className="space-y-10 border-l-2 border-blue-500 pl-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-[34px] top-1"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">2023 — Started Programming</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Began my journey learning Java, Python, and web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-[34px] top-1"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">2024 — First Projects Built</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Created full projects using React, Tailwind CSS, Firebase, and APIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-[34px] top-1"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">2025 — Leveling Up</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Improving UI/UX, animations, and building modern, interactive web applications.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
