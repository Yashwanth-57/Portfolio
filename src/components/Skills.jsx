import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux, Saga"
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "AWS EC2",
      "RabbitMQ",
      "Git",
      "CI/CD",
      
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

        <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-6">
          Technologies I work with.
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {skillCategories.map((category) => (
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
              }}
              className="
                border
                border-zinc-800
                rounded-[32px]
                p-8
                bg-zinc-900/40
              "
            >
              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      border
                      border-zinc-800
                      rounded-full
                      text-zinc-300
                      hover:bg-zinc-900
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}