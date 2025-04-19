"use client";
import { Heading1 } from "@/components/ui/heading-1";

import { Poppins } from "next/font/google";
import { MultilangHello } from "./greeting-multi-len";

export const pacifico = Poppins({
  // subsets: [""],
  weight: ["900"], // Solo tiene 400
  display: "auto",
});

export const PresentationView = () => {
  return (
    <div>
      <Heading1 className={`animate-gradient ${pacifico.className}`}>
        <MultilangHello /> soy{" "}
        <span className="animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-300 to-white bg-[length:300%_300%]">
          Christian Mesina
        </span>{" "}
        ingeniero de software.
      </Heading1>
    </div>
  );
};
