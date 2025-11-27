import React from "react";
import { motion } from "framer-motion";
import { SITE } from "../config";

export default function Hero() {
  return (
    <section id="hero" className="py-28 relative overflow-hidden">

      {/* 🔥 Floating Glow Orbs */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[90px] animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-500/30 rounded-full blur-[100px] animate-pulse"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight text-white"
          >
            Hey, I'm <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">{SITE.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-gray-300 text-lg max-w-xl"
          >
            A Web Developer crafting smooth, animated, and high-performance user experiences using modern web tools.
          </motion.p>

          <motion.div
            className="mt-7 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition">
              🚀 View Projects
            </a>

            <motion.a
              href={SITE.links.github}
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              GitHub
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — Animated UI Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md bg-black/30 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition"
        >
          <h3 className="text-gray-300 text-sm mb-2">✨ Featured Work</h3>
          <div className="text-2xl font-bold text-white">UI Motion & Design</div>
          <div className="text-gray-400 text-sm mt-2">
            Smooth animations, design systems, and UI polish built with React + Motion UI.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
