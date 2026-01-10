import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#66ff00]/30">
      <main>
        <Hero />
      </main>
    </div>
  );
}
