import { cn } from "@/lib/utils";

export function Footer({ variant = "default" }: { variant?: "default" | "dark" }) {
  const isDark = variant === "dark";
  
  return (
    <footer className={cn(
      "border-t border-border mt-20 backdrop-blur-sm",
      isDark ? "bg-[#1a1a1a] border-white/10" : "bg-background/50"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium tracking-wide uppercase",
          isDark ? "text-white/70" : "text-foreground"
        )}>
          <div className="flex-1 text-left">Aobakwe Makes Stuff</div>
          <div className="flex-1 text-center">Gauteng, South Africa</div>
          <div className="flex-1 text-right">info@aobakwemakesstuff.com</div>
        </div>
        <div className="mt-8 text-center text-sm font-medium tracking-wide uppercase text-[#4db300]">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
