import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-zinc-950 text-zinc-50 py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          right-[-150px]
          w-[500px]
          h-[500px]
          bg-white/[0.03]
          blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
          {/* Small Heading */}
          <p className="uppercase tracking-[8px] text-zinc-500 text-sm">
            Contact
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Let's build
            <br />
            something great.
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-3xl leading-9">
            Software Developer Intern at Tek Tree LLC with experience building
            full-stack applications, scalable backend systems, microservices,
            browser automation, and cloud deployments. I'm currently open to
            software engineering, backend development, full-stack roles, and
            exciting collaboration opportunities.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex flex-col gap-8">
              {/* Email */}
              <motion.a
                href="mailto:567yashwanth@gmail.com"
                whileHover={{
                  x: 8,
                }}
                className="
                  flex items-center gap-5
                  border border-zinc-800
                  bg-zinc-900/40
                  rounded-[28px]
                  p-6
                  text-zinc-300
                  hover:text-white
                  transition
                "
              >
                <FaEnvelope className="text-2xl" />

                <div>
                  <p className="text-zinc-500 text-sm">
                    Email
                  </p>

                  <p className="text-lg">
                    567yashwanth@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="
                  flex items-center gap-5
                  border border-zinc-800
                  bg-zinc-900/40
                  rounded-[28px]
                  p-6
                  text-zinc-300
                "
              >
                <FaPhoneAlt className="text-2xl" />

                <div>
                  <p className="text-zinc-500 text-sm">
                    Phone
                  </p>

                  <p className="text-lg">
                    +91 9391786983
                  </p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/chegondi-yashwanth-814939275"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 8,
                }}
                className="
                  flex items-center gap-5
                  border border-zinc-800
                  bg-zinc-900/40
                  rounded-[28px]
                  p-6
                  text-zinc-300
                  hover:text-white
                  transition
                "
              >
                <FaLinkedin className="text-2xl" />

                <div>
                  <p className="text-zinc-500 text-sm">
                    LinkedIn
                  </p>

                  <p className="text-lg">
                    linkedin.com/in/chegondi-yashwanth-814939275
                  </p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Yashwanth-57"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 8,
                }}
                className="
                  flex items-center gap-5
                  border border-zinc-800
                  bg-zinc-900/40
                  rounded-[28px]
                  p-6
                  text-zinc-300
                  hover:text-white
                  transition
                "
              >
                <FaGithub className="text-2xl" />

                <div>
                  <p className="text-zinc-500 text-sm">
                    GitHub
                  </p>

                  <p className="text-lg">
                    github.com/Yashwanth-57
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="
                  flex items-center gap-5
                  border border-zinc-800
                  bg-zinc-900/40
                  rounded-[28px]
                  p-6
                  text-zinc-300
                "
              >
                <FaMapMarkerAlt className="text-2xl" />

                <div>
                  <p className="text-zinc-500 text-sm">
                    Location
                  </p>

                  <p className="text-lg">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              border border-zinc-800
              rounded-[40px]
              bg-zinc-900/40
              p-10
              flex flex-col justify-between
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-green-400" />

                <p className="text-green-400 font-semibold">
                  Available for Opportunities
                </p>
              </div>

              <div className="mt-10 space-y-4 text-zinc-300 text-lg">
                <p>✓ Full Stack Engineering Roles</p>
                <p>✓ Backend Development Roles</p>
                <p>✓ Node.js & Microservices Development</p>
                <p>✓ Integrate LLM Models</p>
                <p>✓ Freelance Projects</p>
                <p>✓ Remote Opportunities</p>
                <p>✓ Collaboration on Interesting Products</p>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-14">
                <div>
                  <h3 className="text-4xl font-bold">
                    20+
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    Repositories
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    6+
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    Deployments
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    1+
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    Years Exp.
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-14"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
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
                "
              >
                Download Resume
                <FaArrowRight />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}