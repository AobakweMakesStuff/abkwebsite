import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Video() {
  const { data: projects, isLoading } = useProjects();
  const videoProjects = projects?.filter(p => p.type === "video") || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Video
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Motion graphics, editing, and storytelling through the lens.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {videoProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {videoProjects.length === 0 && (
              <p className="text-muted-foreground">No video projects yet.</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
