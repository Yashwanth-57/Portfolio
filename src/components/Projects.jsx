import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat-Box Application",
    description:
      "Real-time messaging platform supporting text, audio and video communication.",
    tech: [
      "Node.js",
      "Socket.io",
      "WebRTC",
      "MongoDB",
    ],
    github:
      "https://github.com/Yashwanth-57/Chat-application",
    live: null,
  },

  {
    title: "Credential System",
    description:
      "Microservice-based credential issuance and verification platform with asynchronous communication.",
    tech: [
      "Node.js",
      "RabbitMQ",
      "Docker",
      "MongoDB",
    ],
    github:
      "https://github.com/Yashwanth-57/Kube-Credential",
    live: null,
  },

  // remaining projects...
];
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
          Projects
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-6 mb-20">
          Selected Work.
        </h2>

        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                border
                border-zinc-800
                rounded-[32px]
                p-8
                md:p-12
                hover:bg-zinc-900/40
                transition
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                {/* Left */}
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mt-5 text-lg leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          border
                          border-zinc-800
                          rounded-full
                          px-4
                          py-2
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex gap-5 items-start">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-zinc-400
                      hover:text-white
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        text-zinc-400
                        hover:text-white
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}