import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import musicVideo from "@assets/website_makes_music_1768047856232.mp4";

export default function Music() {
  const { data: projects, isLoading } = useProjects();
  const musicProjects = projects?.filter(p => p.type === "music") || [];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      
      <PageHero 
        videoSrc={musicVideo}
        title="Music"
        description="Sonic landscapes, beats, and audio production. Listen loud and explore the textures of sound through original compositions and mixes."
      />

      <main className="container mx-auto px-6 py-20 max-w-7xl">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[#66ff00]" />
          </div>
        ) : (
          <div className="space-y-12 max-w-4xl mx-auto">
            {musicProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {musicProjects.length === 0 && (
              <p className="text-muted-foreground text-center col-span-full">No music projects yet.</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
