import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "./Particles";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-28 relative overflow-hidden"
    >
        <Particles count={30} color="bg-pink-500/30" />
      {/* Glowing Background */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[180px] bottom-[-150px] right-[-200px] rounded-full animate-pulse"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Get In Touch
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          Open to freelance, full-time, and collaboration opportunities.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-3xl mb-10">
          <a
            href="https://github.com/Yashwanth-57"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/chegondi-yashwanth-814939275"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:567yashwanth@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="https://www.overleaf.com/download/project/69520647cca7d5b1217b2077/build/19c73779969-2ecd2255e81e02b4/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-c3d-d-f-cg1m&enable_pdf_caching=true&popupDownload=true&editorId=1ee4f58e-42d5-4500-9ef0-8448ac538355"
          target="_blank"
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-600/40 hover:scale-105 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
