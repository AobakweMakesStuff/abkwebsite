export function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <div>Aobakwe Makes Stuff</div>
          <div>Gauteng, South Africa</div>
          <div>info@aobakwemakesstuff.com</div>
          <div className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
