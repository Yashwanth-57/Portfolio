import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "./Particles";

export default function Footer() {
  return (
    <footer className="bg-black p-20">
      <Particles count={30} color="bg-pink-500/30" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-white/70 mb-4 md:mb-0">
          © {new Date().getFullYear()} Chegondi Yashwanth. All rights reserved.
        </p>

        <div className="flex gap-6 text-white/80">
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
      </div>
    </footer>
  );
}
