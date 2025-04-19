"use client";
import { Heading1 } from "@/components/ui/heading-1";

import { MultilangHello } from "./greeting-multi-len";

export const PresentationView = () => {
  return (
    <div>
      <Heading1 className="animate-gradient">
        <MultilangHello /> soy{" "}
        <span className="animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-300 to-white bg-[length:300%_300%]">
          Christian Mesina
        </span>{" "}
        ingeniero de software.
      </Heading1>
    </div>
  );
};
