// components/WindLines.jsx
"use client";

import { motion } from "framer-motion";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function WindLines({ count = 20 }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {/* Capa de fondo difuminado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20,20,30,0.6)",
          backdropFilter: "blur(12px)",
        }}
      />

      {/* Líneas animadas */}
      {Array.from({ length: count }).map((_, i) => {
        const thickness = randomBetween(1, 3); // grosor de línea
        const length = randomBetween(60, 120) + "%"; // largo relativo
        const top = randomBetween(-20, 100) + "%"; // posición vertical
        const duration = randomBetween(4, 10); // duración del ciclo
        const delay = randomBetween(0, 5); // inicio aleatorio

        return (
          <motion.div
            key={i}
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "130%", opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay,
            }}
            style={{
              position: "absolute",
              top,
              left: 0,
              width: length,
              height: thickness,
              background: "rgba(255,255,255,0.4)",
              filter: "blur(2px)",
              transform: `rotate(${randomBetween(-5, 5)}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
