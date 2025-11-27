import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.form
          action="https://formspree.io/f/mzblyzyv"
          method="POST"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow"
        >
          <input name="name" placeholder="Your Name" className="p-3 rounded bg-white dark:bg-gray-700" required />
          <input name="email" placeholder="Email" type="email" className="p-3 rounded bg-white dark:bg-gray-700" required />
          <textarea name="message" placeholder="Message" rows="5" className="p-3 rounded bg-white dark:bg-gray-700"></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
