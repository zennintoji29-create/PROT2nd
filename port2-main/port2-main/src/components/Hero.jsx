import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SITE } from "../config";

export default function Hero() {
  return (
    <section id="hero" className="py-32 relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute -top-20 -left-10 w-80 h-80 bg-purple-500/40 rounded-full blur-[110px] animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/40 rounded-full blur-[110px] animate-pulse"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-extrabold text-white leading-tight"
          >
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              {SITE.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mt-5 text-lg max-w-md"
          >
            I build visually aesthetic, smooth, and modern digital experiences using React, Tailwind, Motion UI and creative UI engineering.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
          <a
  href="#projects"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.07] transition-all"
>
  🚀 Explore Portfolio
</a>


            <motion.a
              href={SITE.links.github}
              target="_blank"
              whileHover={{ scale: 1.07 }}
              className="px-6 py-3 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-800 transition"
            >
              GitHub
            </motion.a>
          </motion.div>
        </div>

        {/* Right Card */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md border border-white/10 bg-black/30 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:border-purple-400 transition"
          >
            <h3 className="text-gray-400 text-sm">✨ Highlight</h3>
            <p className="text-2xl font-bold text-white">Creative UI Engineering</p>
            <p className="text-gray-500 text-sm mt-2">
              Beautiful animations, micro-interactions, and custom polished UI systems.
            </p>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}
