import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Generative Ontology is a field of inquiry within Compassion 2.0
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://compassion2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              compassion2.com
            </a>
            <span className="text-muted-foreground text-sm">|</span>
            <Link
              to="/contact"
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Contact Compassion 2.0
            </Link>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            © 2026 Compassion 2.0 Ventures Inc. | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}