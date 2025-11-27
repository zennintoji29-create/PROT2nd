import React, { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Fake loading animation
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Parallax mouse movement
  useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      document.documentElement.style.setProperty("--move-x", `${x}px`);
      document.documentElement.style.setProperty("--move-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-black text-white text-3xl animate-pulse">
      🚀 Loading Portfolio...
    </div>
  );

  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-900 text-white font-sans">
      
      {/* Particle Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30"></div>

      {/* Animated Neon Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-20 blur-3xl animate-gradient"></div>

      {/* Floating Icons */}
      <div className="floating absolute top-20 left-10 text-6xl opacity-40">⚡</div>
      <div className="floating absolute bottom-20 right-10 text-6xl opacity-40">🔥</div>

      {/* Scroll progress bar */}
      <div id="scrollBar" className="fixed top-0 left-0 h-[4px] bg-cyan-400"></div>

      {/* Hero Section */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center"
        style={{
          transform: `translate(var(--move-x), var(--move-y))`,
          transition: "transform 0.1s ease-out",
        }}>
        <h1 className="text-6xl font-extrabold neon-text">🚀 SUBHANSHU</h1>
        <p className="mt-4 text-xl opacity-80">Full Stack Developer | UI Lover | React + Tailwind</p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-110 transition">
          Explore Portfolio
        </button>
      </section>
    </div>
  );
}
