import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    title: "Experience",
    value: "Software Developer Intern",
    border: "border-blue-900/40",
    bg: "bg-blue-500/5",
    text: "text-blue-300",
  },
  {
    title: "Live Deployments",
    value: "6+",
    border: "border-emerald-900/40",
    bg: "bg-emerald-500/5",
    text: "text-emerald-300",
  },
  {
    title: "Repositories",
    value: "20+",
    border: "border-purple-900/40",
    bg: "bg-purple-500/5",
    text: "text-purple-300",
  },
  {
    title: "DSA Problems Solved",
    value: "100+",
    border: "border-orange-900/40",
    bg: "bg-orange-500/5",
    text: "text-orange-300",
  },
];

const expertise = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    color: "text-blue-400",
    border: "border-blue-900/40",
    bg: "bg-blue-500/5",
    desc:
      "Building production-ready MERN applications, reusable UI components, and scalable frontend architectures.",
  },
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    color: "text-emerald-400",
    border: "border-emerald-900/40",
    bg: "bg-emerald-500/5",
    desc:
      "Designing REST APIs, authentication systems, microservices, and real-time communication platforms.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    color: "text-purple-400",
    border: "border-purple-900/40",
    bg: "bg-purple-500/5",
    desc:
      "Deploying and managing applications using Docker, AWS EC2, Linux servers, PM2, and CI/CD workflows.",
  },
  {
    icon: <FaRocket />,
    title: "Automation",
    color: "text-orange-400",
    border: "border-orange-900/40",
    bg: "bg-orange-500/5",
    desc:
      "Building browser automation and data extraction systems using Puppeteer, Playwright, Electron.js and Chrome Extensions.",
  },
];

const skills = [
  "Node.js",
  "Express.js",
  "React.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "AWS EC2",
  "RabbitMQ",
  "Socket.io",
  "WebRTC",
  "Redux",
  "Redux Saga",
  "Microservices",
  "Puppeteer",
  "Playwright",
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
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -5,
              }}
              className={`
                border ${item.border}
                ${item.bg}
                rounded-[32px]
                p-8
                backdrop-blur-sm
                transition-all
              `}
            >
              <p className="text-zinc-500 text-sm">
                {item.title}
              </p>

              <h3
                className={`text-2xl font-bold mt-3 ${item.text}`}
              >
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
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-xl text-zinc-400 leading-10">
            I'm a Full Stack Developer specializing in
            <span className="text-white font-medium">
              {" "}React.js, Node.js, Express.js,
              MongoDB and PostgreSQL
            </span>
            , with hands-on experience building
            production-ready applications, scalable
            backend systems, microservices, and
            real-time communication platforms.

            <br />
            <br />

            Currently working as a
            <span className="text-blue-300 font-medium">
              {" "}Software Developer Intern at Tek Tree LLC
            </span>
            , where I contribute to full-stack
            applications, automation workflows,
            authentication systems, browser automation,
            and cloud deployments.

            <br />
            <br />

            I enjoy solving engineering problems,
            designing clean architectures, debugging
            production systems, and building software
            that delivers reliable experiences and
            real business value.
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
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -5,
              }}
              className={`
                border ${item.border}
                ${item.bg}
                rounded-[32px]
                p-8
                backdrop-blur-sm
                transition-all
              `}
            >
              <div
                className={`text-4xl mb-6 ${item.color}`}
              >
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

        {/* Core Technologies */}
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
                  rounded-full
                  bg-zinc-900/60
                  border border-zinc-800
                  text-zinc-300
                  hover:border-blue-500/40
                  hover:text-blue-300
                  hover:-translate-y-1
                  transition-all
                  cursor-default
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