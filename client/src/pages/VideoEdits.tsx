import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import videoEditsVideo from "@assets/website_makes_video_edits_1768047856234.mp4";

export default function Video() {
  const { data: projects, isLoading } = useProjects();
  const videoProjects = projects?.filter(p => p.type === "video") || [];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      
      <PageHero 
        videoSrc={videoEditsVideo}
        title="Video Edits"
        description="Motion graphics, editing, and storytelling through the lens. Bringing stories to life with dynamic movement and rhythmic pacing."
      />

      <main className="container mx-auto px-6 py-20 max-w-7xl">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[#66ff00]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {videoProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {videoProjects.length === 0 && (
              <p className="text-muted-foreground text-center col-span-full">No video projects yet.</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
