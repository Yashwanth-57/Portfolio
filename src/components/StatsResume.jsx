import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const stats = [
  {
    value: "8+",
    label: "Production Projects",
  },
  {
    value: "3+",
    label: "Live Deployments",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Engineering Mindset",
  },
];

export default function StatsResume() {
  return (
    <section
      id="resume"
      className="bg-zinc-950 text-zinc-50 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
          Achievements
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-6">
          Building software
          <br />
          that solves real problems.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((item) => (
            <motion.div
              key={item.label}
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
              <h3 className="text-5xl font-black">
                {item.value}
              </h3>

              <p className="text-zinc-400 mt-4">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="mt-20">
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              bg-white
              text-black
              rounded-full
              font-semibold
              hover:scale-105
              transition
            "
          >
            Download Resume
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}