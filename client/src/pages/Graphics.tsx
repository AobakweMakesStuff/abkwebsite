import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import graphicsVideo from "@assets/website_makes_graphics_1768047856231.mp4";

export default function Graphics() {
  const { data: projects, isLoading } = useProjects();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const tags = [
    { label: "Logos", id: "logos-and-brands" },
    { label: "WeThinkCode_", id: "wethinkcode-club" },
    { label: "Logo Redraws", id: "logo-redraw" },
    { label: "Church", id: "where-it-all-began" }
  ];

  const logosProjects = [
    "Amanda Hendricks Logo",
    "WholenessWithD Logo",
    "Grace Empowered Logo",
    "Mkholo Logo",
    "Godfidence Logo"
  ];

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
              key={tag.id}
              onClick={() => scrollToSection(tag.id)}
              className="px-8 py-3 rounded-full border-2 border-black/20 text-black hover:border-black/60 transition-all duration-300 text-[10px] tracking-widest uppercase font-medium"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </PageHero>

      <main className="container mx-auto px-6 py-24 max-w-7xl space-y-32">
        {/* LOGOS AND BRANDS */}
        <section id="logos-and-brands" className="space-y-12">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">LOGOS AND BRANDS</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <Loader2 className="w-10 h-10 animate-spin text-[#66ff00] mx-auto col-span-full" />
            ) : (
              logosProjects.map((title, index) => {
                const project = projects?.find(p => p.title === title);
                return project ? (
                  <ProjectCard key={project.id} project={project} index={index} />
                ) : (
                  <div key={title} className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center border border-dashed border-muted">
                    <p className="text-xs text-muted-foreground">{title}</p>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* WETHINKCODE_ CONTENT CLUB */}
        <section id="wethinkcode-club" className="space-y-12">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">WETHINKCODE_ CONTENT CLUB</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!isLoading && projects?.filter(p => p.tags?.includes("WeThinkCode_")).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* LOGO REDRAW/REFRESH */}
        <section id="logo-redraw" className="space-y-12">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">LOGO REDRAW/REFRESH</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!isLoading && projects?.filter(p => p.tags?.includes("Logo Redraws")).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* WHERE IT ALL BEGAN - CHURCH */}
        <section id="where-it-all-began" className="space-y-12">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">WHERE IT ALL BEGAN - CHURCH</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!isLoading && projects?.filter(p => p.tags?.includes("Church")).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
