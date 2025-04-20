import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon } from "lucide-react";

export const ContactMeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-3 w-full bg-accent rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:bg-foreground/90 ">
          <span className="text-lg font-semibold text-background">
            CONECTEMOS! <MailIcon className="h-4 w-4" />
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contacto</DialogTitle>
          <DialogDescription>
            Este es un formulario de contacto. Puedes enviarme un mensaje y me
            pondré en contacto contigo lo antes posible.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Tu nombre
            </Label>
            <Input
              id="name"
              placeholder="Aquí puedes escribir tu nombre"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Aquí puedes escribir tu mensaje, tienes 500 caracteres."
              className="col-span-3 resize-none"
              maxLength={500}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
