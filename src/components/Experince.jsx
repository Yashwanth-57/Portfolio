import { motion } from "framer-motion";

const achievements = [
  "Developed scalable full-stack applications using React.js, Node.js, Express.js and MongoDB",
  "Designed and implemented RESTful APIs, authentication systems (JWT, RBAC), and reusable backend architectures.",
  "Developed microservices and event-driven systems using RabbitMQ and Docker.",
  "Integrated frontend applications with backend services using Redux and Redux Saga.",
  "Implemented production-grade features including validation, file uploads, rate limiting, and error handling.",
"Developed browser automation and web data extraction solutions using Puppeteer, integrated with Chrome Extensions and Electron.js desktop applications." 
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
            Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Building scalable
            <br />
            software systems.
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          className="
            mt-20
            border border-zinc-800
            rounded-[40px]
            p-10 md:p-14
            bg-zinc-900/40
          "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {/* Left Side */}
            <div className="lg:w-[30%]">
              <h3 className="text-3xl font-bold">
                Software Developer Intern
              </h3>

              <p className="text-zinc-300 mt-4 text-lg">
                Tek Tree LLC
              </p>

              <p className="text-zinc-500 mt-4">
                Jan 2026 — Present
              </p>

              <p className="text-zinc-500">
                Hyderabad, Telangana, India
              </p>
            </div>

            {/* Right Side */}
            <div className="lg:w-[70%]">
              <p className="text-zinc-400 text-lg leading-8">
                Working on full-stack applications, distributed systems,
                real-time communication platforms, and production-grade
                backend services while gaining hands-on experience in modern
                software engineering practices.
              </p>

              <div className="mt-10 space-y-6">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-zinc-300 mt-3 flex-shrink-0" />

                    <p className="text-zinc-300 leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}