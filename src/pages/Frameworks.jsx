import PageShell from "../components/PageShell";

const frameworks = [
  {
    name: "The Generative Arc",
    desc: "A model for understanding how ontological shifts unfold — from latency through disruption, opening, crystallization, and integration.",
  },
  {
    name: "Fields of Resonance",
    desc: "A relational framework for mapping how coherence and meaning propagate across individuals, groups, and systems.",
  },
  {
    name: "Thresholds of Becoming",
    desc: "An attentional framework for recognizing the liminal spaces where transformation is most available.",
  },
  {
    name: "Ontological Grammar",
    desc: "A structural inquiry into the implicit rules that govern how a given world organizes itself and what it makes possible or forecloses.",
  },
];

export default function Frameworks() {
  return (
    <PageShell
      title="Frameworks"
      subtitle="Conceptual maps for navigating generative ontological territory."
    >
      <p>
        These frameworks are not prescriptive models but orienting lenses — ways of attending to the structure and movement of reality as it emerges.
      </p>
      <div className="mt-8 space-y-8">
        {frameworks.map((f, i) => (
          <div key={i} className="p-6 rounded-sm bg-card border border-border/50">
            <h3 className="font-heading text-lg font-semibold text-foreground">{f.name}</h3>
            <p className="mt-2 text-sm text-foreground/75">{f.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}