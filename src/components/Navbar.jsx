import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/5 border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-purple-400 hover:text-pink-400 transition-colors">
          Yashwanth.dev
        </h1>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer text-white/80 hover:text-purple-400 transition-colors font-medium"
          >
            About
          </Link>

          <Link
            to="experience"
            smooth
            duration={500}
            className="cursor-pointer text-white/80 hover:text-purple-400 transition-colors font-medium"
          >
            Experience
          </Link>

          <Link
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer text-white/80 hover:text-purple-400 transition-colors font-medium"
          >
            Projects
          </Link>

          <Link
            to="feedback"
            smooth
            duration={500}
            className="cursor-pointer text-white/80 hover:text-purple-400 transition-colors font-medium"
          >
            Feedback
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer text-white/80 hover:text-purple-400 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer">
          {/* You can add hamburger icon and mobile dropdown later */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-purple-400 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
