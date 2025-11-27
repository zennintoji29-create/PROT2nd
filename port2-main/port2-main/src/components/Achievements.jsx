import { motion } from "framer-motion";
import achievements from "../data/achievements";
import skills from "../data/skills";

export default function HighlightsSection() {
  return (
    <section className="w-full py-16 flex flex-col gap-20">
      
      {/* ---------------- Skills Section ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1f1f25] to-[#111] shadow-lg border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-purple-300 capitalize mb-3">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-cyan-400">•</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---------------- Achievements Section ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1c1c22] to-[#0f0f10] border border-white/10 
              shadow-lg backdrop-blur-xl"
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h3 className="text-lg font-semibold text-purple-200">{achievement.title}</h3>
              <p className="text-sm text-gray-400 my-2">{achievement.description}</p>
              <p className="text-xs text-gray-500">📅 {achievement.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
