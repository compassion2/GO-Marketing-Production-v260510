import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "What Is", path: "/what-is" },
  { label: "Core Orientations", path: "/core-orientations" },
  { label: "Frameworks", path: "/frameworks" },
  { label: "Events", path: "/events" },
  { label: "Resources", path: "/resources" },
  { label: "Community", path: "/community" },
  { label: "Notes", path: "/notes" },
  { label: "Enter", path: "/enter" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
          Generative Ontology
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 text-sm font-body rounded-sm transition-colors duration-200 ${
                pathname === item.path
                  ? "text-primary font-medium bg-accent/60"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border/40 bg-background px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 text-sm font-body rounded-sm transition-colors ${
                pathname === item.path
                  ? "text-primary font-medium bg-accent/60"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}