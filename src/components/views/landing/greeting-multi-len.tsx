"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Hola bienvenido",
  "Hello welcome",
  "Ciao benvenuto",
  "Bonjour bienvenue",
  "Hallo willkommen",
];

export const MultilangHello = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-20">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold"
        >
          {words[index]}!
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
