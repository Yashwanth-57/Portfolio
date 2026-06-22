import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6">
      <div className="max-w-7xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-[130px] font-black leading-none tracking-tight">
            CHEGONDI
          </h1>

          <h1 className="text-6xl md:text-8xl lg:text-[130px] font-black leading-none tracking-tight text-zinc-500">
            YASHWANTH
          </h1>

          {/* Description */}
          <div className="mt-10 max-w-2xl">
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Full Stack Engineer building scalable web
              applications, microservices, real-time
              systems, and cloud-native products.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              className="px-7 py-3 border border-zinc-800 rounded-full hover:bg-zinc-900 transition"
            >
              Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-8 mt-12 text-zinc-500 text-2xl">
            <a
              href="https://github.com/Yashwanth-57"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/chegondi-yashwanth-814939275/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:567yashwanth@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}