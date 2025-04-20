// components/GradientBubbles.jsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const COLORS = [
  ["#ff6b6b", "#f8e71c"],
  ["#50e3c2", "#9013fe"],
  ["#4a90e2", "#d0021b"],
  ["#b8e986", "#417505"],
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function GradientBubbles({ count = 15 }) {
  const controls = useAnimation();

  useEffect(() => {
    // Kick off infinite animation loop
    controls.start(() => ({
      x: randomBetween(-50, 50) + "%", // move ±50% of its own width
      y: randomBetween(-50, 50) + "vh", // move ±50% of viewport height
      transition: {
        duration: randomBetween(8, 20),
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    }));
  }, [controls]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = randomBetween(80, 200);
        const [c1, c2] = COLORS[i % COLORS.length];
        return (
          <motion.div
            key={i}
            animate={controls}
            initial={{
              x: randomBetween(0, 100) + "vw",
              y: randomBetween(0, 100) + "vh",
            }}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${c1}, ${c2})`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}
