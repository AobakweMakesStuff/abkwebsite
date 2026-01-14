import { motion } from "framer-motion";
import { Link } from "wouter";
import abkPhoto from "@assets/AOBAKWE_expanded_(8)_1768045734543.png";
import amsLogo from "@assets/AMS_LogoTransparent_White_1768045691519.png";

export function Hero() {
  return (
    <section className="relative min-h-[140vh] md:min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white pt-0 pb-8 md:pt-0 md:pb-8">
      {/* Background Image Wash */}
      <div className="absolute inset-0 z-0">
        <img 
          src={abkPhoto} 
          alt="Background" 
          className="w-full h-full object-cover opacity-80 object-[center_top] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* Top Logo Section */}
      <div className="relative z-20 text-center w-full mt-[-2rem] md:mt-[-3rem]">
        <img 
          src={amsLogo} 
          alt="AMS Aobakwe Makes Stuff" 
          className="h-24 md:h-48 mx-auto object-contain"
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full px-6 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-12 md:gap-0 -mt-12 md:-mt-20">
        {/* Left Text */}
        <div className="mt-12 md:mt-0 md:max-w-xs lg:max-w-sm space-y-1 md:space-y-4 text-sm md:text-base font-light leading-relaxed drop-shadow-lg text-left md:ml-12 lg:ml-24">
          <p>Hi there!</p>
          <p>My name is Aobakwe, but most people just call me ABK :)</p>
          <p className="max-w-[320px]">
            I've always been a bit of a jack-of-all-trades, and yes, the long-forgotten rest of the saying definitely applies:
          </p>
          <p className="italic font-normal">
            Jack of all trades, master of none...
            <motion.span 
              className="relative inline not-italic font-bold text-white ml-1"
              initial={{ backgroundSize: "0% 100%" }}
              whileInView={{ backgroundSize: "100% 100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                backgroundImage: "linear-gradient(to right, #3d8c00, #3d8c00)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 0",
              }}
            >
              but oftentimes better than master of one.
            </motion.span>
          </p>
        </div>

        {/* Center Space - visible and taller on mobile to clear face */}
        <div className="h-[60vh] md:hidden" />

        {/* Right Text */}
        <div className="md:max-w-xs lg:max-w-sm space-y-4 md:space-y-6 text-sm md:text-base font-light leading-relaxed drop-shadow-lg text-left md:text-right md:mr-12 lg:mr-24 pb-0">
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
      <div className="relative z-20 flex flex-col md:flex-row gap-4 w-full max-w-4xl px-6 mb-8">
        <Link href="/graphics" className="flex-1">
          <button className="w-full py-4 px-6 border-2 border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase font-medium">
            AOBAKWE MAKES GRAPHICS
          </button>
        </Link>
        <Link href="/video" className="flex-1">
          <button className="w-full py-4 px-6 border-2 border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase font-medium">
            AOBAKWE MAKES VIDEO EDITS
          </button>
        </Link>
      </div>
    </section>
  );
}
