import { Heading1 } from "@/components/ui/heading-1";
import { MultilangHello } from "@/components/views/landing/greeting-multi-len";
import { PresentationView } from "@/components/views/landing/presentation-view";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col row-start-2 p-8 items-center justify-items-center">
        <div className="flex items-center justify-center w-full h-20">
          <Heading1>
            <MultilangHello />
          </Heading1>
        </div>
        <div className=" ">
          <section
            id="about-me"
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <PresentationView />
          </section>
          </div>
      </main>
    </div>
  );
}
