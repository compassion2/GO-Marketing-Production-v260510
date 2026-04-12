import PageShell from "../components/PageShell";

const orientations = [
  {
    title: "Attending to Emergence",
    body: "Reality is not fixed but continually arising. We orient toward what is coming into being, rather than only what already exists.",
  },
  {
    title: "Relational Sense-Making",
    body: "Meaning is not produced in isolation. It arises in the between — in the living space of encounter and response.",
  },
  {
    title: "Embodied Inquiry",
    body: "Thinking is not separate from living. Inquiry happens through the body, through practice, through the full texture of experience.",
  },
  {
    title: "Holding Complexity",
    body: "We resist the collapse into simplification. Multiple truths, tensions, and paradoxes are held as generative ground.",
  },
  {
    title: "Participation Over Observation",
    body: "To know something generatively is to be changed by it. The inquirer is always inside the inquiry.",
  },
];

export default function CoreOrientations() {
  return (
    <PageShell
      title="Core Orientations"
      subtitle="Foundational stances that inform generative ontological inquiry."
    >
      <div className="space-y-10">
        {orientations.map((o, i) => (
          <div key={i} className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-heading text-xl font-semibold text-foreground">{o.title}</h3>
            <p className="mt-2 text-foreground/80">{o.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}