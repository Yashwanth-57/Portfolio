import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaCodeBranch,
} from "react-icons/fa";

/* =========================
   Featured Projects
========================= */

const featuredProjects = [
  {
    title: "Chat-Box Application",
    description:
      "Real-time messaging platform supporting text, audio and video communication.",
    tech: ["Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github:
      "https://github.com/Yashwanth-57/Chat-application",
    live: null,
  },
  {
    title: "Smart Helpdesk",
    description:
      "Role-based helpdesk platform with agent workflow and ticket management.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    github:
      "https://github.com/Yashwanth-57/Smart-Helpdesk-with-Agentic-Triage",
    live: null,
  },
  {
    title: "Kube Credential System",
    description:
      "Microservice-based credential issuance and verification platform.",
    tech: [
      "Node.js",
      "TypeScript",
      "RabbitMQ",
      "Docker",
      "MongoDB",
    ],
    github:
      "https://github.com/Yashwanth-57/Kube-Credential",
    live: null,
  },
  {
    title: "GitHub Profile Analyzer API",
    description:
      "Analyzes GitHub profiles and generates developer insights.",
    tech: [
      "Node.js",
      "Express",
      "MySQL",
      "GitHub API",
    ],
    github:
      "https://github.com/Yashwanth-57/GitHub-Profile-Analyzer-API",
    live: null,
  },
  {
    title: "Online Product Catalog",
    description:
      "Next.js rendering project using SSG, ISR, SSR and CSR.",
    tech: ["Next.js", "TypeScript", "React"],
    github:
      "https://github.com/Yashwanth-57/online-product-catalog",
    live:
      "https://online-product-catalog.onrender.com",
  },
  {
    title: "Mini Event Platform",
    description:
      "MERN event platform with concurrency-safe RSVP system.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],
    github:
      "https://github.com/Yashwanth-57/MiniEvent-project",
    live:
      "https://mini-event-project.vercel.app",
  },
];

/* =========================
   Deployments
========================= */

const deployments = [
  "GitHub Profile Analyzer API",
  "Demo Project",
  "Online Product Catalog",
  "Mini Event Platform",
  "Bills Tracker Frontend",
  "Bills Tracker Backend",
];

/* =========================
   Repositories
========================= */

const repositories = [
  "Inventory Billing System",
  "Blogs Project",
  "JWT Auth",
  "Nest Backend Project",
  "Homefy Interior",
  "GitHub Repository Tracker API",
  "Demo Project",
  "Portfolio",
  "SPA",
  "School Project",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
          Projects
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-6">
          Selected Work.
        </h2>

        {/* =========================
            FEATURED PROJECTS
        ========================= */}

        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-12">
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map(
              (project, index) => (
                <motion.div
                  key={index}
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
                    duration: 0.7,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    border border-zinc-800
                    rounded-[32px]
                    p-8
                    bg-zinc-900/40
                    hover:bg-zinc-900/70
                    transition-all
                  "
                >
                  <h4 className="text-2xl font-bold">
                    {project.title}
                  </h4>

                  <p className="text-zinc-400 mt-5 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          border border-zinc-800
                          px-4 py-2
                          rounded-full
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex items-center gap-2
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
                          flex items-center gap-2
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
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* =========================
            DEPLOYMENTS
        ========================= */}

        <div className="mt-32">
          <h3 className="text-3xl font-bold mb-12">
            Production Deployments
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deployments.map((item) => (
              <div
                key={item}
                className="
                  border border-zinc-800
                  rounded-[28px]
                  p-8
                  bg-zinc-900/40
                  hover:bg-zinc-900/70
                  transition-all
                "
              >
                <FaServer
                  className="text-2xl text-zinc-300"
                />

                <h4 className="mt-6 text-xl font-bold">
                  {item}
                </h4>

                <p className="mt-4 text-green-400">
                  ● Production
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            OTHER REPOSITORIES
        ========================= */}

        <div className="mt-32">
          <h3 className="text-3xl font-bold mb-12">
            Other Repositories
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repositories.map((repo) => (
              <div
                key={repo}
                className="
                  border border-zinc-800
                  rounded-3xl
                  p-6
                  bg-zinc-900/30
                  hover:bg-zinc-900/60
                  transition-all
                  cursor-pointer
                "
              >
                <FaCodeBranch
                  className="text-zinc-400"
                />

                <p className="mt-5 text-zinc-200 font-medium">
                  {repo}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}