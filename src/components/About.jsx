import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    title: "Internship Experience",
    value: "Tek Tree LLC",
  },
  {
    title: "Live Deployments",
    value: "6+",
  },
  {
    title: "GitHub Repositories",
    value: "20+",
  },
  {
    title: "Production Projects",
    value: "15+",
  },
];

const skills = [
  "Node.js",
  "Express.js",
  "React.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS EC2",
  "RabbitMQ",
  "Socket.io",
  "WebRTC",
  "Redux",
  "Microservices",
  "Puppeteer",
  "Playwright",
];

const expertise = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    desc: "Building modern web applications using MERN stack and scalable frontend architectures.",
  },
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    desc: "Designing REST APIs, authentication systems, microservices and real-time applications.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "Deploying applications using Docker, AWS EC2, Linux servers and CI/CD workflows.",
  },
  {
    icon: <FaRocket />,
    title: "Automation",
    desc: "Building browser automation systems using Puppeteer, Playwright, Electron.js and Chrome Extensions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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
          <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
            About
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Building scalable software
            <br />
            for modern businesses.
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((item) => (
            <motion.div
              key={item.title}
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
              className="
                border border-zinc-800
                rounded-[32px]
                p-8
                bg-zinc-900/40
                hover:bg-zinc-900
                transition
              "
            >
              <p className="text-zinc-500 text-sm">
                {item.title}
              </p>

              <h3 className="text-2xl font-bold mt-3">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <motion.div
          className="max-w-5xl mt-24"
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
        >
          <p className="text-xl text-zinc-400 leading-10">
            I'm a Full Stack Developer specializing in
            building scalable web applications, backend
            systems, microservices, and real-time
            communication platforms.

            <br />
            <br />

            Currently working as a Software Developer
            Intern at Tek Tree LLC, where I develop
            production-grade applications using React.js,
            Node.js, Express.js, MongoDB, PostgreSQL,
            Docker, and AWS.

            <br />
            <br />

            I enjoy solving complex engineering problems,
            designing secure authentication systems,
            developing event-driven architectures,
            automating workflows, and deploying reliable
            applications that serve real-world users.
          </p>
        </motion.div>

        {/* Expertise */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          {expertise.map((item) => (
            <motion.div
              key={item.title}
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
              className="
                border border-zinc-800
                rounded-[32px]
                p-8
                bg-zinc-900/40
                hover:bg-zinc-900
                transition
              "
            >
              <div className="text-4xl mb-6 text-zinc-200">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-4 leading-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-10">
            Core Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  px-5 py-3
                  border border-zinc-800
                  rounded-full
                  text-zinc-300
                  hover:bg-zinc-900
                  hover:border-zinc-700
                  transition
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}