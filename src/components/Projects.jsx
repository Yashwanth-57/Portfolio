import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat-Box Application",
    description:
      "Real-time chat application supporting text, audio, and video communication (in development). Backend built using Node.js, Socket.io & WebRTC.",
    tech: "Node.js, Socket.io, WebRTC, MongoDB",
    github: "https://github.com/Yashwanth-57/Chat-application",
    live: null
  },
  {
    title: "Helpdesk with Agent and Admin",
    description:
      "Web-based helpdesk platform with role-based access control. Users can raise tickets and agents/admins can manage them.",
    tech: "Node.js, Express, React.js, MongoDB, Docker",
    github:
      "https://github.com/Yashwanth-57/Smart-Helpdesk-with-Agentic-Triage",
    live: null
  },
  {
    title: "Credential System (Microservices)",
    description:
      "Microservice-based credential issuance and verification system with idempotent operations and RabbitMQ for async communication.",
    tech: "Node.js, TypeScript, Express.js, MongoDB, RabbitMQ, Docker",
    github: "https://github.com/Yashwanth-57/Kube-Credential",
    live: null
  },
  {
    title: "Online Product Catalog",
    description:
      "Next.js rendering project using SSG, SSR, CSR, ISR. A fully deployed product catalog application.",
    tech: "Next.js, Tailwind CSS, React",
    github: "https://github.com/Yashwanth-57/online-product-catalog",
    live: "https://online-product-catalog.onrender.com"
  },
  {
    title: "Mini Event Platform",
    description:
      "MERN stack platform for creating and managing events, deployed live with full stack integration.",
    tech: "MongoDB, Express, React.js, Node.js",
    github: "https://github.com/Yashwanth-57/mini-event-project",
    live: "https://mini-event-project.vercel.app"
  },
  {
    title: "Bills Tracker (Dockerized MERN)",
    description:
      "Dockerized MERN stack project for tracking bills and expenses, deployed with full backend + frontend integration.",
    tech: "MongoDB, Express, React.js, Node.js, Docker",
    github: "https://github.com/Yashwanth-57/bills-tracker",
    live: "https://bills-tracker-forntend.onrender.com"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-28  relative overflow-hidden"
    >

      <motion.div
        className="max-w-6xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col justify-between hover:shadow-purple-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
              <p className="text-gray-400 text-xs mb-4">
                <span className="font-semibold">Tech Stack:</span> {proj.tech}
              </p>

              <div className="flex gap-4 mt-auto">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-purple-600 rounded-full text-white text-sm hover:bg-purple-500 transition"
                  >
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-pink-600 rounded-full text-white text-sm hover:bg-pink-500 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
