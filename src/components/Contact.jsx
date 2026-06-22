import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Small Heading */}
          <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
            Contact
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Let's build
            <br />
            something great.
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-9">
            I'm currently open to software engineering,
            full-stack, backend development, and
            collaboration opportunities. Feel free to
            reach out if you'd like to work together or
            discuss interesting projects.
          </p>

          {/* Contact Links */}
          <div className="mt-16 flex flex-col gap-6">

            <a
              href="mailto:567yashwanth@gmail.com"
              className="
                flex items-center gap-4
                text-zinc-300
                hover:text-white
                transition
                w-fit
              "
            >
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">
                567yashwanth@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/Yashwanth-57"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-4
                text-zinc-300
                hover:text-white
                transition
                w-fit
              "
            >
              <FaGithub className="text-2xl" />
              <span className="text-lg">
                github.com/Yashwanth-57
              </span>
            </a>

            <a
              href="https://linkedin.com/in/chegondi-yashwanth-814939275"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-4
                text-zinc-300
                hover:text-white
                transition
                w-fit
              "
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-lg">
                linkedin.com/in/chegondi-yashwanth-814939275
              </span>
            </a>

          </div>

          {/* Resume Button */}
          <div className="mt-16">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                bg-white
                text-black
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
            >
              Download Resume
              <FaArrowRight />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}