import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import graphicsVideo from "@assets/website_makes_graphics_1768047856231.mp4";

export default function Graphics() {
  const { data: projects, isLoading } = useProjects();
  const graphicsProjects = projects?.filter(p => p.type === "graphic") || [];

  const tags = ["Logos", "WeThinkCode_", "Logo Redraws", "Church"];

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
              className="px-8 py-3 rounded-full border-2 border-black/20 text-black hover:border-black/60 transition-all duration-300 text-[10px] tracking-widest uppercase font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </PageHero>

      <main className="container mx-auto px-6 py-12 max-w-7xl">
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
