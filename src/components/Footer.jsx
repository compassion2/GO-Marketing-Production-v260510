import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">Generative Ontology</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An emerging field of inquiry exploring the generative dimensions of being, becoming, and relational sense-making.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3 text-foreground">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "What Is", path: "/what-is" },
                { label: "Core Orientations", path: "/core-orientations" },
                { label: "Frameworks", path: "/frameworks" },
                { label: "Resources", path: "/resources" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3 text-foreground">Connect</h4>
            <ul className="space-y-2">
              {[
                { label: "Events", path: "/events" },
                { label: "Community", path: "/community" },
                { label: "Notes", path: "/notes" },
                { label: "Enter", path: "/enter" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Generative Ontology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}