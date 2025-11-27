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

    {/* Background & FX */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-20 blur-3xl animate-gradient"></div>

    {/* Hero Section */}
    <Hero />

    {/* Projects Section */}
    <section id="projects" className="h-screen flex items-center justify-center text-4xl">
      📁 PROJECTS COMING SOON
    </section>

    {/* ⭐ REQUIRED: Custom Cursor Element */}
    <div className="cursor-glow"></div>

  </div>
);


}
