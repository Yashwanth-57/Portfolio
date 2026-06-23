import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "about",
    "skills",
    "experience",
    "projects",
    
    "educationcoding",
    "contact",
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-zinc-950/80
        backdrop-blur-md
        border-b border-zinc-900
        z-50
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="
            text-2xl
            font-black
            text-zinc-50
            cursor-pointer
            tracking-tight
          "
        >
          Yashwanth.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              activeClass="text-white border-b border-cyan-400 pb-1"
              className="
                cursor-pointer
                text-zinc-400
                hover:text-zinc-50
                transition-all
                capitalize
              "
            >
              {link === "educationcoding"
                ? "Education & Coding"
                : link}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-zinc-50
            text-3xl
          "
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            border-t border-zinc-900
            bg-zinc-950
          "
        >
          <div className="flex flex-col py-6 px-6 gap-6">
            {links.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                spy={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                activeClass="text-white"
                className="
                  cursor-pointer
                  text-zinc-400
                  hover:text-white
                  transition-all
                  capitalize
                "
              >
                {link === "educationcoding"
                  ? "Education & Coding"
                  : link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}