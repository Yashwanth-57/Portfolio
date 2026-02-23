import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-purple-500 rounded-full pointer-events-none mix-blend-difference z-50"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: [1, 1.5, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      />
    </>
  );
}
