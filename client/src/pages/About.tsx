import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-24 items-start">
          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 sticky top-32"
          >
            {/* Profile Image Placeholer */}
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden border border-border">
              {/* Add real profile image here if available */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                 <span className="font-display font-bold text-6xl text-primary/50">A.</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Graphic Design</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Video Editing</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Music Production</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> Brand Identity</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border">
               <a 
                 href="mailto:hello@example.com" 
                 className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
               >
                 <Mail className="w-4 h-4" />
                 Get in Touch
               </a>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="space-y-10"
          >
             <div>
               <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                 Hi, I'm <span className="text-primary">Aobakwe.</span>
               </h1>
               
               <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                 <p className="text-2xl font-light leading-relaxed text-foreground">
                   I create digital experiences that blend sound and vision into cohesive narratives.
                 </p>
                 
                 <p>
                   My journey began with a simple curiosity about how things are made. From deconstructing my favorite songs to analyzing film scores and dissecting album art, I realized that creativity is not about choosing one path, but about finding the intersection where they all meet.
                 </p>
                 
                 <p>
                   Today, "aobakwemakesstuff" is more than just a portfolio—it's a philosophy. It's about the relentless pursuit of making. Whether I'm designing a brand identity, editing a music video, or producing a beat, I bring the same level of passion and attention to detail.
                 </p>
               </div>
             </div>

             <div className="bg-card border border-border rounded-2xl p-8">
               <h3 className="text-2xl font-display font-bold mb-6">Technical Stack</h3>
               <div className="flex flex-wrap gap-3">
                 {['Adobe Creative Suite', 'DaVinci Resolve', 'Ableton Live', 'Figma', 'Blender', 'After Effects'].map((tech) => (
                   <span key={tech} className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-mono border border-white/5">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
