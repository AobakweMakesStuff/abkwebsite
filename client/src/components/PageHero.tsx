import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  videoSrc: string;
  title: string;
  description: string;
  children?: ReactNode;
  showGradient?: boolean;
  darkText?: boolean;
}

export function PageHero({ videoSrc, title, description, children, showGradient = true, darkText = false }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-white text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${darkText ? 'opacity-100' : 'opacity-60'}`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {showGradient && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        )}
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center space-y-8 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto ${darkText ? 'text-black font-normal' : 'text-white drop-shadow-lg'}`}
        >
          {description}
        </motion.p>
        
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
