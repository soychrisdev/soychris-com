"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { Heading1 } from "../ui/heading-1";
import { MultilangHello } from "./landing/greeting-multi-len";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-1/2 place-content-center overflow-hidden px-4 py-24 text-white"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center w-full h-20">
          <Heading1>
            <MultilangHello />
          </Heading1>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
