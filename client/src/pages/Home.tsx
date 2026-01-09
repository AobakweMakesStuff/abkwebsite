import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#66ff00]/30">
      {/* In the design, the navigation might be simpler or integrated into the hero. 
          I'll keep it but ensure it doesn't clash with the new hero layout. */}
      <Navigation />
      
      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
