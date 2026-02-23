import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex -center px-6 py-28  relative overflow-hidden"
    >

      {/* Floating Blurs & Shapes */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[180px] top-[-100px] left-[-150px] rounded-full animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[150px] bottom-[-100px] right-[-100px] rounded-full animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] bg-indigo-500/10 blur-[120px] top-[50%] left-[10%] rounded-full animate-pulse"></div>

      <motion.div
        className="max-w-5xl mx-auto text-center text-white z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Animated Paragraphs */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a Full Stack Developer with strong expertise in Node.js,
          microservices, real-time systems, and cloud deployments. Currently
          working as a Software Developer Intern at Tek Tree LLC, building
          production-ready applications from scratch — frontend UI, backend
          APIs, database design, and AWS EC2 deployments.
        </motion.p>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I focus on scalable architecture, secure authentication systems,
          REST API design, Dockerized deployments, and debugging real-world
          production issues to improve reliability and performance.
        </motion.p>

        {/* Skills Icons / Badges */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["Node.js", "React.js", "Docker", "AWS EC2", "Microservices"].map(
            (skill, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 rounded-full bg-purple-600/30 backdrop-blur-md text-white font-semibold text-sm hover:scale-110 transition-transform cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
