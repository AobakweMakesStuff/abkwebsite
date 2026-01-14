import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/graphics", label: "Graphics" },
  { href: "/video", label: "Video Edits" },
];

import amsLogoDark from "@assets/AMS_LogoTransparent_1768048925068.png";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/40 backdrop-blur-md border-b border-black/5" 
        : isHomePage ? "bg-transparent" : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <img 
              src={amsLogoDark} 
              alt="AMS" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive 
                      ? "text-white" 
                      : "text-black/60 hover:text-black hover:bg-black/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#4db300] rounded-full -z-10 shadow-[0_0_15px_rgba(77,179,0,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors text-black"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-black/5 p-4 shadow-2xl z-40"
          >
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                    location === item.href
                      ? "bg-[#4db300]/10 text-[#4db300]"
                      : "text-black hover:bg-black/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
