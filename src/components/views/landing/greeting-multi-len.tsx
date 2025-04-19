"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Hola", "Hello", "Ciao"];

export const MultilangHello = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-28 inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {words[index]}!
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
