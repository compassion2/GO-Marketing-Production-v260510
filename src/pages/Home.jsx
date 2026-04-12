import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "What is Generative Ontology?", path: "/what-is", desc: "An introduction to the field" },
  { label: "Core Orientations", path: "/core-orientations", desc: "Foundational stances and commitments" },
  { label: "Frameworks", path: "/frameworks", desc: "Maps for navigating inquiry" },
  { label: "Events", path: "/events", desc: "Gatherings and conversations" },
  { label: "Resources", path: "/resources", desc: "Readings, recordings, and references" },
  { label: "Community", path: "/community", desc: "People and practices" },
  { label: "Notes", path: "/notes", desc: "Working reflections and fragments" },
  { label: "Enter", path: "/enter", desc: "Begin or continue your inquiry" },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
        Generative Ontology
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-2xl">
        An inquiry into the living structures of being — how worlds are generated, sustained, and transformed through attention, relation, and practice.
      </p>

      <div className="mt-16 border-t border-border/50 pt-12">
        <nav className="grid gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group flex items-center justify-between py-4 px-4 -mx-4 rounded-sm hover:bg-accent/40 transition-colors duration-200"
            >
              <div>
                <span className="text-base font-body font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <span className="block text-sm text-muted-foreground mt-0.5">
                  {link.desc}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}