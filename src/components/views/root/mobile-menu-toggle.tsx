import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export const MobileMenuToggle = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <MenuIcon className="h-6 w-6 " />
      </DrawerTrigger>
      <DrawerContent className="p-5 min-h-1/2">
        <DrawerTitle>Menu</DrawerTitle>
        <Link href="">Home</Link>
        <Link href="">About</Link>
      </DrawerContent>
    </Drawer>
  );
};
