"use client";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const PresentationView = () => {
  return (
    <>
      <span className="text-3xl font-bold">
        Soy{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="underline animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r dark:from-cyan-50 dark:via-cyan-900 dark:to-blue-50 from-blue-950 via-blue-300 to-blue-950 bg-[length:300%_300%] ">
              Christian Mesina
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              Sigueme en mis redes sociales
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        ingeniero de software.
      </span>
      <span className="text-xl">
        He pasado los últimos 3 años construyendo y escalando software para
        algunas empresas bastante geniales. ¡Conectemos!
      </span>
      <span>
        <Button>Contactar</Button>
      </span>
    </>
  );
};
