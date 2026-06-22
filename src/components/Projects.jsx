import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaBookOpen,
} from "react-icons/fa";

/* =========================
   Featured Projects
========================= */

const featuredProjects = [
  {
    title: "Chat-Box Application",
    description:
      "Real-time communication platform supporting instant messaging, audio calls, and video calls using Socket.io and WebRTC.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github: "https://github.com/Yashwanth-57/Chat-application",
    live: null,
    status: "Source Code",
  },

  {
    title: "Kube Credential System",
    description:
      "Event-driven microservices platform for credential issuance and verification using RabbitMQ, Docker, and TypeScript.",
    tech: [
      "Node.js",
      "TypeScript",
      "RabbitMQ",
      "Docker",
      "MongoDB",
    ],
    github: "https://github.com/Yashwanth-57/Kube-Credential",
    live: null,
    status: "Source Code",
  },

  {
    title: "Smart Helpdesk",
    description:
      "Role-based ticket management platform with secure authentication, agent workflows, and scalable backend architecture.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
    ],
    github:
      "https://github.com/Yashwanth-57/Smart-Helpdesk-with-Agentic-Triage",
    live: null,
    status: "Source Code",
  },

  {
    title: "Demo Project",
    description:
      "Full-stack CRM platform for managing leads and tasks with JWT authentication, protected routes, and scalable REST APIs.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Yashwanth-57/DemoProject",
    live:
      "https://demo-project-kf0aa6sc2-chegondi-yashwanths-projects.vercel.app",
    status: "Production",
  },

  {
    title: "Mini Event Platform",
    description:
      "Production-grade MERN event management platform featuring authentication, event CRUD, RSVP workflows, search, filters, and business rule validations.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "JWT",
    ],
    github: "https://github.com/Yashwanth-57/MiniEvent-project",
    live: "https://mini-event-project.vercel.app",
    status: "Production",
  },

  {
    title: "Online Product Catalog",
    description:
      "Next.js application demonstrating SSG, SSR, ISR, and CSR rendering strategies with product management and optimized performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
    ],
    github:
      "https://github.com/Yashwanth-57/online-product-catalog",
    live: "https://online-product-catalog.onrender.com",
    status: "Production",
  },

  {
    title: "Bills Tracker",
    description:
      "Dockerized MERN expense tracking application with Nginx, MongoDB Atlas integration, and containerized deployment architecture.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
      "Nginx",
    ],
    github: "https://github.com/Yashwanth-57/Bills-Tracker",
    live: "https://bills-tracker-forntend.onrender.com",
    status: "Production",
  },

  {
    title: "GitHub Profile Analyzer API",
    description:
      "REST API that analyzes GitHub profiles and generates developer insights using GitHub APIs, Express.js, and MySQL.",
    tech: [
      "Node.js",
      "Express",
      "MySQL",
      "GitHub API",
    ],
    github:
      "https://github.com/Yashwanth-57/GitHub-Profile-Analyzer-API",
    live:
      "https://github-profile-analyzer-api-bs55.onrender.com/",
    status: "Production",
  },
];

/* =========================
   Production Deployments
========================= */

const deployments = [
  // {
  //   name: "Demo Project",
  //   link:
  //     "https://demo-project-kf0aa6sc2-chegondi-yashwanths-projects.vercel.app",
  // },
  // {
  //   name: "Mini Event Platform",
  //   link: "https://mini-event-project.vercel.app",
  // },
  // {
  //   name: "Online Product Catalog",
  //   link: "https://online-product-catalog.onrender.com",
  // },
  // {
  //   name: "Bills Tracker",
  //   link: "https://bills-tracker-forntend.onrender.com",
  // },
  // {
  //   name: "GitHub Profile Analyzer API",
  //   link:
  //     "https://github-profile-analyzer-api-bs55.onrender.com/",
  // },
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
            Featured SaaS Products
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
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
                  y: -8,
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
                {/* Status */}
                <p
                  className={`font-medium ${
                    project.status === "Production"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  ● {project.status}
                </p>

                <h4 className="text-3xl font-bold mt-5">
                  {project.title}
                </h4>

                <p className="text-zinc-400 mt-5 leading-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Buttons */}
                <div className="flex flex-wrap gap-6 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      text-blue-400
                      hover:text-blue-300
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
                        text-green-400
                        hover:text-green-300
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  {/* Future Detailed Page Tab */}
                  <button
                    className="
                      flex items-center gap-2
                      text-purple-400
                      hover:text-purple-300
                      transition
                    "
                  >
                    <FaBookOpen />
                    Project Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            DEPLOYMENTS
        ========================= */}

        {/* <div className="mt-32">
          <h3 className="text-3xl font-bold mb-12">
            Production Deployments
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deployments.map((item) => (
              <div
                key={item.name}
                className="
                  border border-zinc-800
                  rounded-[28px]
                  p-8
                  bg-zinc-900/40
                  hover:bg-zinc-900/70
                  transition-all
                "
              >
                <FaServer className="text-2xl text-zinc-300" />

                <p className="mt-6 text-green-400 font-medium">
                  ● Production Live
                </p>

                <h4 className="mt-5 text-xl font-bold">
                  {item.name}
                </h4>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-green-400
                    hover:text-green-300
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Visit App
                </a>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}