import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          I am a passionate web developer who loves building beautiful,
          responsive, and user-friendly applications. With experience in modern
          technologies like React, Tailwind CSS, and Framer Motion, I enjoy
          creating smooth and engaging user interfaces.
        </motion.p>
      </div>
    </section>
  );
}
