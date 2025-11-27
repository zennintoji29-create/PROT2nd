import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          ✉️ Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg mb-10"
        >
          Got a project, idea, or just want to say hi? Drop a message — I’ll reply ASAP 🚀
        </motion.p>

        {/* Form Box */}
        <motion.form
          action="https://formspree.io/f/mzblyzyv"
          method="POST"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 shadow-xl grid gap-6 p-10 rounded-3xl max-w-3xl mx-auto"
        >
          {/* Name */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm focus-within:shadow-blue-500/30 transition-all">
            <FaUser className="text-gray-500 dark:text-gray-300 text-xl" />
            <input
              name="name"
              placeholder="Your Name"
              className="bg-transparent outline-none w-full text-gray-700 dark:text-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm focus-within:shadow-purple-500/30 transition-all">
            <FaEnvelope className="text-gray-500 dark:text-gray-300 text-xl" />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none w-full text-gray-700 dark:text-gray-300"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm focus-within:shadow-pink-500/30 transition-all">
            <FaCommentDots className="text-gray-500 dark:text-gray-300 text-xl mt-1" />
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="bg-transparent outline-none resize-none w-full text-gray-700 dark:text-gray-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl text-lg shadow-lg transition-all"
          >
            Send Message <FaPaperPlane className="text-xl" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
