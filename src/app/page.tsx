import { Heading1 } from "@/components/ui/heading-1";
import { MultilangHello } from "@/components/views/landing/greeting-multi-len";
import { PresentationView } from "@/components/views/landing/presentation-view";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          {/* Greeting Section */}
          <div className="w-full max-w-2xl text-center">
            <Heading1 className="mb-4">
              <MultilangHello />
            </Heading1>
          </div>

          {/* About Me Section */}
          <section
            id="about-me"
            className="w-full max-w-3xl text-center space-y-6"
          >
            <PresentationView />
          </section>
        </div>
      </main>
    </div>
  );
}
