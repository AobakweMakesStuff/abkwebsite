import { motion } from "framer-motion";

interface PageHeroProps {
  videoSrc: string;
  title: string;
  description: string;
}

export function PageHero({ videoSrc, title, description }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
