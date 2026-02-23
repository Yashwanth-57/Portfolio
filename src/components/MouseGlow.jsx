import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-600"
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`
      }}
    ></div>
  );
}
