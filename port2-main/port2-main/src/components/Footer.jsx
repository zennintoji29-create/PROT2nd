import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-28 bg-black/40 backdrop-blur-md py-10 border-t border-gray-700">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-300 space-y-6"
      >
        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 text-2xl">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="hover:text-indigo-400 transition"
          >
            <FaDiscord />
          </motion.a>

          <motion.a
            href="mailto:someone@example.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg"
        >
          © {year}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
            Subhanshu
          </span>{" "}
          — All Rights Reserved.
        </motion.p>

        {/* MINI TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-sm text-gray-500"
        >
          Built with ❤️ using React, Tailwind CSS & Framer Motion.
        </motion.p>
      </motion.div>
    </footer>
  );
}
