import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "./Particles";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 justify-center overflow-hidden">
      <Particles count={50} color="bg-purple-500/30" /> {/* Particles Layer */}
      {/* Grid Background */}

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-600"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
        }}
      />

      {/* Animated Blobs */}
      <div className="absolute w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-150px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-64 h-64 md:w-[500px] md:h-[500px] bg-pink-500 rounded-full blur-[150px] opacity-20 bottom-[-150px] right-[-100px] animate-pulse"></div>

      {/* Floating Neon Shapes */}
      <div className="absolute w-6 h-6 rounded-full bg-pink-500 opacity-50 animate-bounce-slow top-20 left-10"></div>
      <div className="absolute w-10 h-10 rounded-full bg-purple-500 opacity-30 animate-bounce-slow top-60 right-20"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-black leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CHEGONDI
        </motion.h1>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-black leading-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          YASHWANTH
        </motion.h1>

        {/* Glass Intro Card */}
        <motion.div
          className="mt-6 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300 text-lg">
            Full Stack Engineer • Microservices Architect • Cloud Deployer
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-300">
            <a
              href="https://github.com/Yashwanth-57"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/chegondi-yashwanth-814939275/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:567yashwanth@gmail.com"
              className="hover:text-purple-400 transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition shadow-lg shadow-purple-600/40"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
