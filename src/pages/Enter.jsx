import { Link } from "react-router-dom";

export default function Enter() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
          Enter the Inquiry
        </h1>
        <div className="w-16 h-px bg-border mx-auto" />
      </header>

      <section className="mb-16 max-w-2xl mx-auto text-center">
        <p className="text-foreground leading-relaxed mb-4">
          Generative Ontology begins not with answers, but with a question.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          It treats being as generative—emerging through relation, coherence, and becoming.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This is an invitation to orient, not to conclude.
        </p>
      </section>

      <section className="mb-20 py-12 border-y border-border">
        <blockquote className="text-center">
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground italic leading-relaxed max-w-3xl mx-auto">
            "What is reality generating, right now—through you, between us, and within the world?"
          </p>
        </blockquote>
      </section>

      <section className="mb-16">
        <div className="space-y-8 max-w-2xl mx-auto">
          <Link
            to="/notes"
            className="block p-6 border border-border hover:border-primary/30 transition-colors group"
          >
            <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
              Read the Foundational Notes
            </h3>
            <p className="text-muted-foreground text-sm">
              A concise entry into the premise and the working language.
            </p>
          </Link>

          <Link
            to="/events"
            className="block p-6 border border-border hover:border-primary/30 transition-colors group"
          >
            <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
              Participate in a Live Inquiry
            </h3>
            <p className="text-muted-foreground text-sm">
              Upcoming salons, conversations, and gatherings.
            </p>
          </Link>

          <Link
            to="/contact"
            className="block p-6 border border-border hover:border-primary/30 transition-colors group"
          >
            <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
              Remain in Relationship
            </h3>
            <p className="text-muted-foreground text-sm">
              Occasional updates when new inquiries open.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
