import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import graphicsVideo from "@assets/website_makes_graphics_1768047856231.mp4";

import AH5 from "@assets/AH_Logos2-5_1768062251984.jpg";
import AH8 from "@assets/AH_Logos2-8_1768062251990.jpg";
import AH7 from "@assets/AH_Logos2-7_1768062251988.jpg";
import AH6 from "@assets/AH_Logos2-6_1768062251986.jpg";
import AH1 from "@assets/AH_Logos2-1_1768062337535.jpg";
import AH_Mockup1 from "@assets/d937d1204645275.66ac6a6e18002_1768062337517.jpg";
import AH_Mockup2 from "@assets/ed92c8204645275.66ac6a6d12029_1768062337520.jpg";
import AH_Concepts1 from "@assets/new_1768062337522.jpg";
import AH_Mockup3 from "@assets/0f0c3e204645275.66ac6a6d11857_1768062337524.jpg";
import AH_Mockup4 from "@assets/1a9376204645275.66ac6a6d127b2_1768062337526.jpg";
import AH_Mockup5 from "@assets/8e3525204645275.66ac6a6e172b2_1768062337529.jpg";
import AH_Mockup6 from "@assets/773618204645275.66ac6a6d1104f_1768062337531.jpg";
import AH_Mockup7 from "@assets/a3aabd204645275.66ac6a6e16bd8_1768062337533.jpg";

export default function Graphics() {
  const { data: projects, isLoading } = useProjects();
  const graphicsProjects = projects?.filter(p => p.type === "graphic") || [];

  const tags = ["Logos", "WeThinkCode_", "Logo Redraws", "Church"];

  const scrollToLogos = () => {
    const element = document.getElementById('logos-and-brands');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      
      <PageHero 
        videoSrc={graphicsVideo}
        title="Graphics"
        description="My graphic design journey started in my early teens, making stuff for my home church. From there I built a small business, worked on personal projects, and eventually designed at WeThinkCode_ (the software development academy I attended)."
        showGradient={false}
        darkText={true}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={tag === "Logos" ? scrollToLogos : undefined}
              className="px-8 py-3 rounded-full border-2 border-black/20 text-black hover:border-black/60 transition-all duration-300 text-[10px] tracking-widest uppercase font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </PageHero>

      <main className="container mx-auto px-6 py-24 max-w-7xl">
        <section id="logos-and-brands" className="space-y-20">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">LOGOS AND BRANDS</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>

          {/* Amanda Hendricks Project */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">Amanda Hendricks - Logo Design</h3>
              <p className="text-lg text-white/80 font-light">My most recent and favourite logo design🫶🏾</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src={AH5} alt="Amanda Hendricks Logo" className="w-full rounded-lg shadow-xl" />
              <img src={AH8} alt="Amanda Hendricks Office" className="w-full rounded-lg shadow-xl" />
              <img src={AH7} alt="Amanda Hendricks Billboard" className="w-full rounded-lg shadow-xl" />
            </div>

            <div className="pt-8 space-y-8">
              <p className="text-xl font-medium text-[#4db300]">Some original ideas and concepts:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <img src={AH6} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH1} alt="Concept" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup1} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup2} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Concepts1} alt="Concepts" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup3} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup4} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup5} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup6} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={AH_Mockup7} alt="Mockup" className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </section>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[#66ff00]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicsProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {graphicsProjects.length === 0 && (
              <p className="text-muted-foreground text-center col-span-full">No graphic projects yet.</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
