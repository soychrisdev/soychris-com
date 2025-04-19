import { ThemeModeToggle } from "@/components/theme-toggle";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ExternalLinkIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export const MobileMenuToggle = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <MenuIcon className="h-6 w-6 " />
      </DrawerTrigger>
      <DrawerContent className="p-5 min-h-1/2 gap-2 capitalize">
        <DrawerTitle>menu</DrawerTitle>
        <Link href="#">home</Link>
        <Link
          href="https://blog.soychris.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center "
        >
          blog <ExternalLinkIcon className="ml-0.5 w-4 h-4" />
        </Link>
        <DrawerTitle>Configuración</DrawerTitle>
        <div className="inline-block">
          tema <ThemeModeToggle />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
