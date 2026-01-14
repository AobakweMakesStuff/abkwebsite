import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
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

  const wtcProject = projects?.find(p => p.title === "WeThinkCode Branding");
  const socialProject = projects?.find(p => p.title === "WeThinkCode Social Media");
  const hoodiesProject = projects?.find(p => p.title === "WeThinkCode Graduation Hoodies");

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-display">
      <Navigation />
      
      <PageHero 
        videoSrc={graphicsVideo}
        title="Graphics"
        description="My graphic design journey started in my early teens, making stuff for my home church. From there I built a small business, worked on personal projects, and eventually designed at WeThinkCode_ (the software development academy I attended)."
        showGradient={false}
        darkText={true}
        className="min-h-0 pt-20 pb-12 md:pt-12 md:pb-8"
      >
        <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => scrollToSection(tag.id)}
              className="px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-black/20 text-black hover:border-black/60 transition-all duration-300 text-[10px] tracking-widest uppercase font-medium font-display"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">LOGOS AND BRANDS</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">WETHINKCODE_ CONTENT CLUB</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          
          {isLoading ? (
            <Loader2 className="w-10 h-10 animate-spin text-[#66ff00] mx-auto" />
          ) : wtcProject ? (
            <div className="space-y-12">
              <div className="max-w-2xl">
                <p className="text-gray-400 text-lg leading-relaxed">
                  {wtcProject.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {wtcProject.gallery?.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-white/5 bg-white/5 hover-elevate transition-all duration-500">
                    <img 
                      src={img} 
                      alt={`WeThinkCode Branding ${idx + 1}`}
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-12 border border-dashed border-muted rounded-lg text-center">
              <p className="text-muted-foreground">No branding projects found.</p>
            </div>
          )}
        </section>

        {/* SOCIAL MEDIA MOCKUPS */}
        {!isLoading && socialProject && (
          <section id="social-media-mockups" className="relative group">
            <div className="relative overflow-hidden">
              <div 
                id="social-carousel"
                className="flex items-stretch gap-2 px-12 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
              >
                {socialProject.gallery?.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="min-w-[85%] md:min-w-[60%] lg:min-w-[50%] snap-center overflow-hidden transition-all duration-500"
                  >
                    <img 
                      src={img} 
                      alt={`Social Media Mockup ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Manual navigation arrows */}
              <button 
                onClick={() => {
                  const el = document.getElementById('social-carousel');
                  if (el) el.scrollBy({ left: -el.offsetWidth * 0.5, behavior: 'smooth' });
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={() => {
                  const el = document.getElementById('social-carousel');
                  if (el) el.scrollBy({ left: el.offsetWidth * 0.5, behavior: 'smooth' });
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </section>
        )}

        {/* GRADUATION HOODIES */}
        {!isLoading && hoodiesProject && (
          <section id="graduation-hoodies" className="space-y-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {(() => {
                const gallery = [...(hoodiesProject.gallery || [])];
                if (gallery.length > 0) {
                  const first = gallery.shift();
                  if (first) gallery.push(first);
                }
                return gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="break-inside-avoid rounded-lg overflow-hidden border border-white/5 bg-white/5 hover-elevate transition-all duration-500 mb-8"
                  >
                    <img 
                      src={img} 
                      alt={`Hoodie Design ${idx + 1}`}
                      className="w-full h-auto block"
                    />
                  </div>
                ));
              })()}
            </div>
          </section>
        )}

        {/* GOOGLE DISPLAY ADS SLIDESHOW */}
        <section className="relative group">
          <div className="relative overflow-hidden">
            <div 
              id="ads-carousel"
              className="flex items-stretch gap-2 px-12 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {[
                "/attached_assets/Google_Display_Ads_Mockup_page-0001_1768299035157.jpg",
                "/attached_assets/Google_Display_Ads_Mockup_page-0002_1768299035159.jpg",
                "/attached_assets/Google_Display_Ads_Mockup_page-0003_1768299035160.jpg",
                "/attached_assets/Google_Display_Ads_Mockup_page-0004_1768299035161.jpg",
                "/attached_assets/Google_Display_Ads_Mockup_page-0005_1768299035162.jpg",
                "/attached_assets/Google_Display_Ads_Mockup_page-0006_1768299035163.jpg"
              ].map((img, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[85%] md:min-w-[60%] lg:min-w-[50%] snap-center overflow-hidden transition-all duration-500"
                >
                  <img 
                    src={img} 
                    alt={`Google Display Ad ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Manual navigation arrows */}
            <button 
              onClick={() => {
                const el = document.getElementById('ads-carousel');
                if (el) el.scrollBy({ left: -el.offsetWidth * 0.5, behavior: 'smooth' });
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={() => {
                const el = document.getElementById('ads-carousel');
                if (el) el.scrollBy({ left: el.offsetWidth * 0.5, behavior: 'smooth' });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </section>

        {/* LOGO REDRAW/REFRESH */}
        <section id="logo-redraw" className="space-y-12">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">LOGO REDRAW/REFRESH</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "/attached_assets/JPG_official_logo_1768299944820.jpg",
              "/attached_assets/JPG_logo_white_background_1768299944819.jpg",
              "/attached_assets/JPG_white_logo_1768299944821.jpg",
              "/attached_assets/JPG_black_logo_1768299944818.jpg",
              "/attached_assets/1B386CFF_1768300369446.jpg",
              "/attached_assets/D546C144_1768300425427.jpg",
              "/attached_assets/JPEG_Logo2_REDUCE_1768300493465.jpg"
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-white/5 bg-white/5 hover-elevate transition-all duration-500">
                <img 
                  src={img} 
                  alt={`Logo Redraw ${index + 1}`}
                  className="w-full h-auto block"
                />
              </div>
            ))}
            {!isLoading && projects?.filter(p => p.tags?.includes("Logo Redraws")).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 7} />
            ))}
          </div>
        </section>

        {/* WHERE IT ALL BEGAN - CHURCH */}
        <section id="where-it-all-began" className="space-y-12 pb-20">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">WHERE IT ALL BEGAN - CHURCH</h2>
            <div className="w-24 h-1 bg-[#4db300]" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                With the onslaught of the novel coronavirus, my role as my church's graphic designer really had it in for me. 
                To remedy this, a need was realized for graphics and social media content.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl hover-elevate transition-all duration-500">
              <img 
                src="/attached_assets/Church@Home_1764787849253_1768301139380.png" 
                alt="Church@Home Graphic Design"
                className="w-full h-auto block"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {!isLoading && projects?.filter(p => p.tags?.includes("Church")).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      <Footer variant="dark" />
    </div>
  );
}
