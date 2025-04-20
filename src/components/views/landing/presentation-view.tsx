"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ExternalLink } from "lucide-react";
import { ContactMeDialog } from "./contact-me-dialog";

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
        algunas empresas bastante geniales.
      </span>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 w-full text-center mt-3.5 capitalize ">
        <div className="p-6 w-full bg-foreground rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:bg-foreground/90">
          <span className="text-lg font-semibold text-background">
            experiencia <ExternalLink className="h-4 w-4 inline" />
          </span>
        </div>
        <div className="p-6 w-full bg-foreground rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:bg-foreground/90">
          <span className="text-lg font-semibold text-background">
            proyectos <ExternalLink className="h-4 w-4 inline" />
          </span>
        </div>
      </div>

      <span className="flex flex-col items-center justify-center mt-4 space-x-2">
        <ContactMeDialog />
      </span>
    </>
  );
};
