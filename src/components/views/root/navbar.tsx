import { ThemeModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { MobileMenuToggle } from "./mobile-menu-toggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="flex flex-col items-center justify-center w-full h-16">
        <div className=" flex items-center justify-between w-full max-w-7xl px-4">
          <div className="text-2xl uppercase font-extrabold">
            <Link href="/">sc</Link>
          </div>
          <div className="hidden md:flex space-x-4 uppercase">
            <Link href="/" className="hover:text-muted-foreground">
              home
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ThemeModeToggle />
              <Button className="uppercase" asChild variant="outline" size="lg">
                <Link
                  href="https://blog.soychris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blog <ExternalLinkIcon />
                </Link>
              </Button>
            </div>
            <MobileMenuToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
