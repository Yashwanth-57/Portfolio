// components/Particles.jsx
import { useEffect, useState } from "react";

export default function Particles({ count = 30, color = "bg-purple-600/40" }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }
    setParticles(temp);
  }, [count]);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let x = p.x + p.speedX;
          let y = p.y + p.speedY;
          if (x > window.innerWidth) x = 0;
          if (x < 0) x = window.innerWidth;
          if (y > window.innerHeight) y = 0;
          if (y < 0) y = window.innerHeight;
          return { ...p, x, y };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute ${color} rounded-full opacity-50 animate-pulse`}
          style={{
            width: p.size,
            height: p.size,
            top: p.y,
            left: p.x,
          }}
        />
      ))}
    </div>
  );
}
