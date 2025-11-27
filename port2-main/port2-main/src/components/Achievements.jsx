import { motion } from "framer-motion";
import achievements from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((ach) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white dark:bg-gray-900 shadow rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {ach.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{ach.year}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
