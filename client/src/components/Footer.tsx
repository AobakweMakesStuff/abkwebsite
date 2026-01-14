export function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <div className="flex-1 text-left">Aobakwe Makes Stuff</div>
          <div className="flex-1 text-center">Gauteng, South Africa</div>
          <div className="flex-1 text-right">info@aobakwemakesstuff.com</div>
        </div>
        <div className="mt-8 text-center text-sm font-medium tracking-wide uppercase text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
