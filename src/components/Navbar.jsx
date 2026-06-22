import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "about",
    "experience",
    "projects",
    "skills",
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
          smooth
          duration={500}
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="text-white"
              className="
                cursor-pointer
                text-zinc-400
                hover:text-zinc-50
                transition
                capitalize
              "
            >
              {link}
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
                smooth
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="
                  cursor-pointer
                  text-zinc-400
                  hover:text-white
                  transition
                  capitalize
                "
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}