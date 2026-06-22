import { motion } from "framer-motion";

const stats = [
  {
    title: "Experience",
    value: "1+ Years",
  },
  {
    title: "Projects",
    value: "8+",
  },
  {
    title: "Tech Stack",
    value: "MERN + Cloud",
  },
  {
    title: "Current Role",
    value: "Software Developer Intern",
  },
];

const skills = [
  "Node.js",
  "React.js",
  "Next.js",
  "MongoDB",
  "Docker",
  "AWS",
  "Redis",
  "Microservices",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
            About
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            I build scalable web applications,
            <br />
            microservices, and real-time systems.
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {stats.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/40"
            >
              <p className="text-zinc-500 text-sm">
                {item.title}
              </p>

              <h3 className="text-2xl font-bold mt-3">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="max-w-4xl mt-20">
          <p className="text-xl text-zinc-400 leading-9">
            I'm a Full Stack Developer with expertise in
            Node.js, React, microservices, real-time systems,
            and cloud deployments. Currently working as a
            Software Developer Intern at Tek Tree LLC,
            building production-ready applications from
            frontend interfaces to backend APIs, database
            architecture, and AWS deployments.

            <br />
            <br />

            I enjoy designing scalable systems, implementing
            secure authentication, debugging production
            issues, and delivering reliable software that
            solves real-world problems.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 mt-16">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-5 py-3
                border border-zinc-800
                rounded-full
                text-zinc-300
                hover:bg-zinc-900
                transition
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}