import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[180px] top-[-200px] left-[-200px] rounded-full"></div> */}

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-purple-500/30 pl-8 space-y-12">

          {/* Job Card */}
          <motion.div
            className="relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500 transition"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute -left-[41px] top-6 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#050816]"></span>

            <h3 className="text-xl md:text-2xl font-semibold text-purple-400">
              Software Developer Intern
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Tek Tree LLC • Jan 2026 – Present • On Site
            </p>

            <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
              <li>• Built full-stack JavaScript application from scratch.</li>
              <li>• Designed scalable REST APIs with secure architecture.</li>
              <li>• Deployed & managed apps on AWS EC2 (Linux).</li>
              <li>• Debugged production issues & improved performance.</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
