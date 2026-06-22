import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "JavaScript (ES6)",
      "TypeScript",
      "Python",
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Redux Saga",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Socket.io",
      "WebRTC",
      "Microservices",
    ],
  },

  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "AWS EC2",
      "Linux",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "CI/CD Pipelines",
      "PM2",
    ],
  },

  {
    title: "Automation & Tools",
    skills: [
      "Puppeteer",
      "Playwright",
      "Electron.js",
      "Chrome Extension Development",
      "Browser Automation",
      "Web Scraping",
      "Postman",
      "VS Code",
    ],
  },

  {
    title: "Messaging & Realtime",
    skills: [
      "RabbitMQ",
      "WebSockets",
      "Socket.io",
      "Real-Time Systems",
      "Event-Driven Architecture",
    ],
  },

  {
    title: "AI & Modern Concepts",
    skills: [
      "LLMs",
      "RAG Systems",
      "Prompt Engineering",
      "System Design Fundamentals",
      "Scalable Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
          Technologies I work with.
        </h2>

        <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-8">
          Full-stack development experience spanning frontend engineering,
          scalable backend systems, databases, cloud deployments,
          browser automation, real-time communication, and modern
          software engineering practices.
        </p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                border
                border-zinc-800
                rounded-[32px]
                p-8
                bg-zinc-900/40
                hover:bg-zinc-900/70
                transition-all
              "
            >
              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      px-4
                      py-2
                      border
                      border-zinc-800
                      rounded-full
                      text-zinc-300
                      hover:bg-zinc-800
                      hover:text-white
                      transition
                      cursor-default
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}