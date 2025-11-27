import { motion } from "framer-motion";
import projects from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow overflow-hidden"
            >
          <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />



              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{proj.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{proj.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4">
                  <a href={proj.demo} className="text-blue-600 dark:text-blue-400" target="_blank">
                    Live Demo
                  </a>
                  <a href={proj.repo} className="text-blue-600 dark:text-blue-400" target="_blank">
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
