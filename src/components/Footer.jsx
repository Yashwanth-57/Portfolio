import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* Left */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black">
              Chegondi Yashwanth
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Full Stack Developer
            </p>

            <p className="text-zinc-500 mt-6 leading-8 max-w-xl">
              Building scalable applications,
              real-time systems, microservices,
              and cloud-native backend solutions.
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="uppercase tracking-[6px] text-zinc-500 text-sm mb-8">
              Connect
            </p>

            <div className="flex flex-col gap-5">

              <a
                href="https://github.com/Yashwanth-57"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-4
                  text-zinc-400
                  hover:text-white
                  transition
                "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/chegondi-yashwanth-814939275"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-4
                  text-zinc-400
                  hover:text-white
                  transition
                "
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="mailto:567yashwanth@gmail.com"
                className="
                  flex items-center gap-4
                  text-zinc-400
                  hover:text-white
                  transition
                "
              >
                <FaEnvelope />
                Email
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between gap-6">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Chegondi Yashwanth.
            All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Built with React, Tailwind CSS &
            Framer Motion.
          </p>

        </div>

      </div>
    </footer>
  );
}