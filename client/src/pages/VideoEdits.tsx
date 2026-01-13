import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-projects";
import { PageHero } from "@/components/PageHero";
import ReactPlayer from "react-player/lazy";
import videoEditsVideo from "@assets/website_makes_video_edits_1768047856234.mp4";

export default function VideoEdits() {
  const { isLoading } = useProjects();

  const youtubeVideos = [
    "https://www.youtube.com/watch?v=fDWLfYXxtO4",
    "https://www.youtube.com/watch?v=tV3vBL1-SxQ",
    "https://www.youtube.com/watch?v=qpD7XSEGmOs"
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <PageHero 
        videoSrc={videoEditsVideo}
        title="Video Edits"
        description="I’ve always had an on-and-off relationship with editing…maybe because it often takes so much time and effort to end up with a video shorter than the duration it took to create😅 The one thing you can count on is that it’s always worth the effort🤭"
        className="min-h-0 pt-32 pb-24"
        showGradient={false}
        darkText={true}
      />

      <main className="container mx-auto px-6 py-24 max-w-7xl space-y-24">
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">My latest work in the real world</h2>
            <div className="w-24 h-1 bg-[#4db300] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Instagram Reel Embed */}
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/reel/DRE6X_iCAVR/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%' }}
              >
                <div style={{ padding:'16px' }}>
                  <a href="https://www.instagram.com/reel/DRE6X_iCAVR/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%' }} target="_blank">
                    Loading Reel...
                  </a>
                </div>
              </blockquote>
              <script async src="//www.instagram.com/embed.js"></script>
            </div>

            {/* YouTube Videos */}
            <div className="space-y-12">
              {youtubeVideos.map((url, idx) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-xl hover-elevate transition-all duration-500 bg-black">
                  <ReactPlayer
                    url={url}
                    width="100%"
                    height="100%"
                    controls
                    light={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
