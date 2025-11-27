import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-center text-white mt-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Your Name — All Rights Reserved.
      </motion.p>
    </footer>
  );
}
