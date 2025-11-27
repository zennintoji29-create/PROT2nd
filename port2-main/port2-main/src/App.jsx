import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fake loader time
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mouse move parallax effect
  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 40,
      y: (e.clientY / window.innerHeight - 0.5) * 40,
    });
  };

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center bg-black text-white text-3xl font-bold tracking-wider"
      >
        Loading...
      </motion.div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-100 overflow-x-hidden transition-all duration-500"
      onMouseMove={handleMouseMove}
    >

      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[5px] bg-purple-500 z-[999]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* 🔥 Mouse Parallax Glow */}
      <motion.div
        className="pointer-events-none fixed w-60 h-60 rounded-full bg-purple-500/30 blur-3xl -z-10"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
      />

      {/* 🔥 Neon Animated Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(131,58,180,0.2),transparent),radial-gradient(circle_at_bottom_right,rgba(255,0,110,0.25),transparent)] -z-20 animate-pulse" />

      {/* 🔥 Floating Social Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition scale-90 hover:scale-100 shadow-lg">💬</a>
        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition scale-90 hover:scale-100 shadow-lg">📧</a>
        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition scale-90 hover:scale-100 shadow-lg">🔗</a>
      </div>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 md:px-8"
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
}
