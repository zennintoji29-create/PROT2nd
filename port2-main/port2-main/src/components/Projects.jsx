import { motion } from "framer-motion";
import projects from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-extrabold tracking-tight mb-16"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Projects
          </span>
        </motion.h2>

        
        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(147,51,234,0.3)" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 border border-gray-300/40 dark:border-gray-700/40 rounded-xl overflow-hidden shadow-xl transition"
            >
              
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-44 object-cover hover:opacity-90 transition" 
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{proj.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{proj.description}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-purple-200 dark:bg-purple-700 px-3 py-1 rounded-full text-gray-900 dark:text-white font-medium"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <motion.a
                    href={proj.demo}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-lg shadow"
                  >
                    Live Demo 🚀
                  </motion.a>

                  <motion.a
                    href={proj.repo}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 border border-gray-400 dark:border-gray-600 text-sm rounded-lg"
                  >
                    Code 💻
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
