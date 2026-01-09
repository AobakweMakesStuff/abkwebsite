import { motion } from "framer-motion";
import { Link } from "wouter";
import abkPhoto from "@assets/image_1767957041063.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] text-white pt-20">
      {/* Top Logo Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] mb-2 leading-none">
          AMS
        </h1>
        <p className="text-xs md:text-sm tracking-[0.5em] font-light uppercase opacity-80">
          AOBAKWE MAKES STUFF
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-16">
        {/* Left Text */}
        <div className="space-y-6 text-sm md:text-base font-light leading-relaxed">
          <p>Hi there!</p>
          <p>My name is Aobakwe, but most people just call me ABK :)</p>
          <p>
            I've always been a bit of a jack-of-all-trades, and yes, the long-forgotten rest of the saying definitely applies:
          </p>
          <p className="italic font-normal">
            Jack of all trades, master of none...
            <span className="text-[#66ff00] block mt-1 not-italic font-bold">
              but oftentimes better than master of one.
            </span>
          </p>
        </div>

        {/* Center Photo */}
        <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
          <img 
            src={abkPhoto} 
            alt="Aobakwe (ABK)" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Right Text */}
        <div className="space-y-6 text-sm md:text-base font-light leading-relaxed">
          <p>
            Since my teen years, I've grown in different skills and creative interests. 
            Some were just hobbies, some were entrepreneurial, and some even became career stepping stones. 
            This website is a showcase, if you will, of the things I've built and explored along the way.
          </p>
          <p className="font-normal opacity-90">
            Click below to pique your interest.
          </p>
        </div>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl px-6 mb-12">
        <Link href="/graphics" className="flex-1">
          <button className="w-full py-4 px-6 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase font-medium">
            AOBAKWE MAKES GRAPHICS
          </button>
        </Link>
        <Link href="/video" className="flex-1">
          <button className="w-full py-4 px-6 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase font-medium">
            AOBAKWE MAKES VIDEO EDITS
          </button>
        </Link>
        <Link href="/music" className="flex-1">
          <button className="w-full py-4 px-6 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase font-medium">
            AOBAKWE MAKES MUSIC
          </button>
        </Link>
      </div>
    </section>
  );
}
