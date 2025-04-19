"use client";
import { X } from "lucide-react";
import { useState } from "react";

export const PreviewOrDevelopmentModal = () => {
  const [show, setShow] = useState(true);
  return (
    <header
      className={`sticky z-50 border-b flex justify-center ${
        !show && "hidden"
      }`}
    >
      <div className="flex flex-col items-center justify-center w-full h-16">
        <div className="flex items-center justify-between w-full max-w-7xl px-4">
          IN PREVIEW MODE
          <div className="flex space-x-4 uppercase">
            <button
              onClick={() => setShow(false)}
              className="hover:text-muted-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PreviewOrDevelopmentModal;
