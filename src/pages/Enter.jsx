import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Enter() {
  return (
    <PageShell
      title="Enter"
      subtitle="Begin or deepen your engagement with Generative Ontology."
    >
      <p>
        There is no single entry point. Every encounter with this material is a beginning. The invitation is simply to attend — to what is arising, what is calling, what is already at work beneath the surface of your attention.
      </p>

      <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Starting Points</h2>
      <div className="space-y-3">
        {[
          { label: "Read the introduction", path: "/what-is" },
          { label: "Explore the core orientations", path: "/core-orientations" },
          { label: "Browse resources and readings", path: "/resources" },
          { label: "Join the community", path: "/community" },
          { label: "Attend an event", path: "/events" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-center justify-between py-3 px-4 -mx-4 rounded-sm hover:bg-accent/40 transition-colors"
          >
            <span className="text-sm font-body font-medium text-foreground group-hover:text-primary transition-colors">
              {item.label}
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-sm bg-card border border-border/50">
        <p className="text-sm text-foreground/80 italic font-heading text-lg leading-relaxed">
          "The question is not what to know, but how to be — in a way that allows knowing to arise."
        </p>
      </div>
    </PageShell>
  );
}