import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, list]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 shadow rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize mb-4">
                {category}
              </h3>

              <ul className="space-y-2">
                {list.map((skill, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
