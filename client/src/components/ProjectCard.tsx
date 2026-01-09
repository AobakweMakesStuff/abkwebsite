import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { Play, Music, Image as ImageIcon, ExternalLink } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Play className="w-4 h-4 fill-current" />;
      case "music": return <Music className="w-4 h-4" />;
      case "graphic": return <ImageIcon className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative cursor-pointer break-inside-avoid mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#66ff00]/20 hover:-translate-y-2 hover:border-[#66ff00]/50">
            {/* Image/Thumbnail */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              {project.thumbnailUrl ? (
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted/20">
                  {getTypeIcon(project.type)}
                </div>
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="backdrop-blur-md bg-background/50 border-white/10 uppercase tracking-widest text-[10px]">
                  {project.type}
                </Badge>
              </div>

              {/* Icon Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-[#66ff00]/90 p-4 text-black shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                  {getTypeIcon(project.type)}
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="p-5">
              <h3 className="text-xl font-bold font-display tracking-tight group-hover:text-[#66ff00] transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden sm:rounded-2xl">
        <div className="flex flex-col">
          {/* Media Player / Full View */}
          <div className="w-full bg-black aspect-video relative flex items-center justify-center">
            {project.type === "video" || project.type === "music" ? (
              <ReactPlayer 
                url={project.mediaUrl} 
                width="100%" 
                height="100%" 
                controls
                playing={false}
                light={project.thumbnailUrl} // Use thumbnail as preview
              />
            ) : (
              <div className="w-full h-full relative overflow-y-auto max-h-[70vh] bg-black/50">
                <img 
                  src={project.mediaUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl md:text-3xl font-bold font-display">{project.title}</DialogTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-[#66ff00] border-[#66ff00]/20 bg-[#66ff00]/5 uppercase">
                    {project.type}
                  </Badge>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <DialogDescription className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
