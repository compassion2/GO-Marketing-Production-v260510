import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <PageShell
      title="Community"
      subtitle="A living network of practitioners, thinkers, and inquirers."
    >
      <p>
        Generative Ontology is not a solitary pursuit. It lives in conversation, in shared practice, in the spaces between people who are willing to attend to the deeper currents of reality together.
      </p>
      <p>
        This community gathers around a commitment to honest inquiry, mutual respect, and the willingness to be changed by what we encounter.
      </p>

      <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Ways to Participate</h2>
      <div className="space-y-4">
        {[
          { title: "Dialogue Circles", desc: "Small-group conversations held regularly, exploring emergent questions in the field." },
          { title: "Practice Groups", desc: "Embodied inquiry sessions integrating contemplation, movement, and reflection." },
          { title: "Reading Groups", desc: "Collaborative study of foundational and contemporary texts." },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-sm bg-card border border-border/50">
            <h3 className="font-heading text-base font-semibold">{item.title}</h3>
            <p className="text-sm text-foreground/75 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-muted-foreground">
        Interested in joining?{" "}
        <Link to="/enter" className="text-primary hover:underline underline-offset-4">
          Start here →
        </Link>
      </p>
    </PageShell>
  );
}