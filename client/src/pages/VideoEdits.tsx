import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-projects";
import { PageHero } from "@/components/PageHero";
import videoEditsVideo from "@assets/website_makes_video_edits_1768047856234.mp4";

export default function VideoEdits() {
  const { isLoading } = useProjects();

  const youtubeVideos = [
    "https://www.youtube.com/watch?v=fDWLfYXxtO4",
    "https://www.youtube.com/watch?v=tV3vBL1-SxQ",
    "https://www.youtube.com/watch?v=qpD7XSEGmOs"
  ];

  return (
    <div className="min-h-screen bg-white text-black font-display">
      <Navigation />
      
      <PageHero 
        videoSrc={videoEditsVideo}
        title="Video Edits"
        description="I’ve always had an on-and-off relationship with editing…maybe because it often takes so much time and effort to end up with a video shorter than the duration it took to create😅 The one thing you can count on is that it’s always worth the effort🤭"
        className="min-h-0 pt-32 pb-4"
        showGradient={false}
        darkText={true}
      />

      <main className="container mx-auto px-6 py-4 max-w-7xl space-y-24">
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">My latest work in the real world</h2>
            <div className="w-24 h-1 bg-[#4db300] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Instagram Reel Embed */}
            <div className="flex justify-center bg-white rounded-xl overflow-hidden shadow-xl p-4 border border-black/5">
              <iframe 
                src="https://www.instagram.com/reel/DRE6X_iCAVR/embed/captioned/" 
                width="400" 
                height="600" 
                frameBorder="0" 
                scrolling="no" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="mx-auto"
              ></iframe>
            </div>

            {/* YouTube Videos */}
            <div className="space-y-12">
              {youtubeVideos.map((url, idx) => {
                const videoId = url.split('v=')[1];
                return (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-xl hover-elevate transition-all duration-500 bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display">Some older work…</h2>
            <div className="w-24 h-1 bg-[#4db300] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-xl hover-elevate transition-all duration-500 bg-black">
                <video controls className="w-full h-full object-cover">
                  <source src="/attached_assets/edgars3_1768304970705.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-xl hover-elevate transition-all duration-500 bg-black">
                <video controls className="w-full h-full object-cover">
                  <source src="/attached_assets/Perfume_ASMR_1768370424181.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="space-y-12">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl hover-elevate transition-all duration-500 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Wh0lUHfxWX0"
                  title="ADMIT IT! We are ALL tired."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl hover-elevate transition-all duration-500 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/K3ZbnviPRPM"
                  title="MNCV VLOG: Spend A Chilled Weekend With Us 🤪 | Vax Shots, Almost Getting Arrested At Menlyn, Brunch"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="dark" />
    </div>
  );
}
