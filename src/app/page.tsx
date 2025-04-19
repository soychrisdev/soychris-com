import { PresentationView } from "@/components/views/landing/presentation-view";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <PresentationView />
        {/* <SocialMediaView /> */}
      </main>
    </div>
  );
}
