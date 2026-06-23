import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

const education = [
  {
    institute:
      "Matrusri Engineering College (Affiliated to Osmania University)",
    degree:
      "Bachelor of Engineering in Information Technology",
    score: "CGPA: 6.84",
    year: "2021 – 2025",
    location: "Hyderabad, Telangana",
  },
  {
    institute: "Prathiba Junior College",
    degree: "Higher Secondary School (10+2)",
    score: "92.8%",
    year: "2019 – 2021",
    location: "Nalgonda, Telangana",
  },
];

const codingProfiles = [
  {
    platform: "GeeksforGeeks",
    stats: "100+ Problems Solved",
    link:
      "https://www.geeksforgeeks.org/profile/567yashwanth?tab=activity",
  },
];

export default function EducationCoding() {
  return (
    <section
      id="education"
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
            Education & Coding
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-6">
            Learning &
            <br />
            Problem Solving Journey.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {/* Education */}
          <motion.div
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
              border border-zinc-800
              rounded-[32px]
              p-10
              bg-zinc-900/40
            "
          >
            <div className="flex items-center gap-4 mb-10">
              <FaGraduationCap className="text-3xl text-purple-400" />

              <h3 className="text-3xl font-bold">
                Education
              </h3>
            </div>

            <div className="space-y-10">
              {education.map((item) => (
                <div
                  key={item.institute}
                  className="
                    border-l-2
                    border-zinc-700
                    pl-6
                  "
                >
                  <h4 className="text-xl font-bold">
                    {item.institute}
                  </h4>

                  <p className="text-zinc-300 mt-3">
                    {item.degree}
                  </p>

                  <p className="text-green-400 mt-2 font-medium">
                    {item.score}
                  </p>

                  <p className="text-zinc-500 mt-3">
                    {item.year}
                  </p>

                  <p className="text-zinc-500">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
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
              border border-zinc-800
              rounded-[32px]
              p-10
              bg-zinc-900/40
            "
          >
            <div className="flex items-center gap-4 mb-10">
              <FaCode className="text-3xl text-green-400" />

              <h3 className="text-3xl font-bold">
                Coding Profiles
              </h3>
            </div>

            {codingProfiles.map((item) => (
              <div
                key={item.platform}
                className="
                  border border-zinc-800
                  rounded-3xl
                  p-8
                  bg-zinc-950/50
                  hover:border-purple-500/40
                  transition-all
                "
              >
                <h4 className="text-2xl font-bold">
                  {item.platform}
                </h4>

                <p className="text-zinc-400 mt-4 text-lg">
                  {item.stats}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    mt-8
                    text-green-400
                    hover:text-green-300
                    transition
                  "
                >
                  View Profile
                  <FaExternalLinkAlt />
                </a>
              </div>
            ))}

            {/* Extra Stats */}
            <div className="grid grid-cols-2 gap-5 mt-8">
              <div
                className="
                  border border-zinc-800
                  rounded-3xl
                  p-6
                  text-center
                "
              >
                <h4 className="text-4xl font-black text-purple-400">
                  100+
                </h4>

                <p className="text-zinc-500 mt-2">
                  Problems Solved
                </p>
              </div>

              <div
                className="
                  border border-zinc-800
                  rounded-3xl
                  p-6
                  text-center
                "
              >
                <h4 className="text-4xl font-black text-green-400">
                  DSA
                </h4>

                <p className="text-zinc-500 mt-2">
                  Continuous Learning
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}