import { AuroraHero } from "@/components/views/aurora-effect";
import { PresentationView } from "@/components/views/landing/presentation-view";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AuroraHero />
      <main className="flex flex-col row-start-2 p-8 items-center justify-items-center">
        <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 mb-8 ">
          <section
            id="about-me"
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <PresentationView />
          </section>
        </div>

        {/* <SocialMediaView /> */}
      </main>
    </div>
  );
}
