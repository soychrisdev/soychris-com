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
    <div className="space-y-8">
      {/* Introduction Text */}
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          Soy{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="underline animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r dark:from-cyan-50 dark:via-cyan-900 dark:to-blue-50 from-blue-950 via-blue-300 to-blue-950 bg-[length:300%_300%] cursor-pointer">
                Christian Mesina
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <p className="text-sm text-muted-foreground">
                  Sígueme en mis redes sociales
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>{" "}
          ingeniero de software.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          He pasado los últimos 3 años construyendo y escalando software para
          algunas empresas bastante geniales.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
        <div className="group p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-primary/50">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
              Experiencia
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>

        <a
          href="/projects"
          className="group p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:border-primary/50 block"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
              Proyectos
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </a>

        <ContactMeDialog />
      </div>
    </div>
  );
};
