import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 bg-zinc-950 -z-50" />

      {/* Grid */}
      <div
        className="
          fixed inset-0
          bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)]
          bg-[size:60px_60px]
          opacity-30
          pointer-events-none
          -z-40
        "
      />

      {/* Radial Fade */}
      <div
        className="
          fixed inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_80%)]
          pointer-events-none
          -z-30
        "
      />

      {/* Mouse Spotlight */}
      <div
        className="
          fixed
          w-[500px]
          h-[500px]
          rounded-full
          bg-white/[0.05]
          blur-[140px]
          pointer-events-none
          -z-20
          transition-all
          duration-300
        "
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
        }}
      />

      {/* Top Glow */}
      <div
        className="
          fixed
          top-[-300px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[500px]
          rounded-full
          bg-white/[0.03]
          blur-[180px]
          pointer-events-none
          -z-20
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          fixed
          bottom-[-300px]
          right-[-200px]
          w-[700px]
          h-[500px]
          rounded-full
          bg-zinc-700/[0.08]
          blur-[200px]
          pointer-events-none
          -z-20
        "
      />

      {/* Noise Texture */}
      <div
        className="
          fixed inset-0
          opacity-[0.03]
          bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
          pointer-events-none
          -z-10
        "
      />
    </>
  );
}