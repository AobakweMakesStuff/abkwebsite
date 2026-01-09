import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono font-medium tracking-wider uppercase">
            Creative Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50 pb-2">
            aobakwe
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              makesstuff
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Visual Designer, Video Editor, and Music Producer based in the creative digital void.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
