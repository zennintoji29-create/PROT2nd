// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { SITE } from "../config";

export default function Hero() {
  return (
    <section id="hero" className="py-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {SITE.name}
            </span>
            <div className="text-xl md:text-2xl font-medium mt-2">
              {SITE.title}
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl"
          >
            I build clean, accessible, and animated web interfaces using modern tools
            and best practices. I focus on performance, UX and delightful micro-interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
            >
              See my work
            </a>

            <a
              href={SITE.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE GRAPHIC */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md p-6 container-card"
          >
            {/* SVG GRAPHIC */}
            <svg
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-48 md:h-56"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>

              <rect
                x="10"
                y="10"
                rx="20"
                ry="20"
                width="580"
                height="380"
                fill="url(#g1)"
                opacity="0.12"
              />

              <g transform="translate(40,40)">
                <circle cx="120" cy="80" r="60" fill="#fff" opacity="0.18" />
                <rect
                  x="220"
                  y="40"
                  rx="14"
                  ry="14"
                  width="260"
                  height="120"
                  fill="#fff"
                  opacity="0.12"
                />
                <path
                  d="M30 220 C120 140, 220 260, 320 200 C420 140, 520 260, 600 200"
                  stroke="#fff"
                  strokeWidth="10"
                  fill="none"
                  opacity="0.08"
                />
              </g>
            </svg>

            {/* CARD TEXT */}
            <div className="mt-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Featured
              </div>
              <div className="font-semibold mt-1">
                Design system & components
              </div>
              <div className="text-xs text-gray-500 mt-2">
                A preview of a design system with tokens, components, spacing,
                and accessibility considerations.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
