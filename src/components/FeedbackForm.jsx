import { motion } from "framer-motion";

const building = [
  {
    title: "Real-Time Chat Application",
    description:
      "Building a production-ready chat platform supporting text, audio, and video communication using WebRTC and Socket.io.",
    tech: [
      "Node.js",
      "Socket.io",
      "WebRTC",
      "MongoDB",
    ],
  },
  {
    title: "Credential System (Microservices)",
    description:
      "Designing a distributed credential issuance and verification platform using asynchronous communication and idempotent operations.",
    tech: [
      "Node.js",
      "RabbitMQ",
      "Docker",
      "MongoDB",
      "TypeScript",
    ],
  },
  {
    title: "Production Backend Systems",
    description:
      "Exploring scalable backend architecture, secure authentication, cloud deployments, and real-time systems.",
    tech: [
      "AWS EC2",
      "Redis",
      "JWT",
      "Docker",
      "Microservices",
    ],
  },
];

export default function CurrentlyBuilding() {
  return (
    <section
      id="building"
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
            Currently Building
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Exploring modern
            <br />
            backend systems.
          </h2>

          <p className="text-zinc-400 text-lg mt-8 max-w-3xl leading-8">
            I enjoy building scalable applications,
            experimenting with distributed systems,
            and solving real-world engineering problems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 space-y-8">
          {building.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                border border-zinc-800
                rounded-[32px]
                p-8 md:p-10
                bg-zinc-900/40
                hover:bg-zinc-900/70
                transition
              "
            >
              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-lg mt-5 leading-8">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      border border-zinc-800
                      rounded-full
                      text-zinc-300
                      text-sm
                      hover:bg-zinc-800
                      transition
                    "
                  >
                    {tech}
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