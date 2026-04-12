import PageShell from "../components/PageShell";

const notes = [
  {
    title: "On the Difference Between Describing and Generating",
    date: "March 2026",
    body: "Description maps what is. Generation opens what can be. The distinction is not epistemic but ontological — it concerns the kind of act that inquiry itself performs.",
  },
  {
    title: "Attention as Ontological Act",
    date: "February 2026",
    body: "Where we place our attention is not merely a cognitive choice. It is a world-making gesture — shaping what becomes available, what remains hidden, what emerges into form.",
  },
  {
    title: "Fragment: Thresholds",
    date: "January 2026",
    body: "At every threshold, there is a moment of suspension — where the old coherence has dissolved but the new has not yet arrived. This is the generative void. Learning to dwell here is a practice.",
  },
  {
    title: "On Relational Ontology",
    date: "December 2025",
    body: "Nothing exists in isolation. The atom, the self, the idea — each is a pattern of relation. Ontology, then, is not the study of substances but of the dynamics of relating.",
  },
];

export default function Notes() {
  return (
    <PageShell
      title="Notes"
      subtitle="Working reflections, fragments, and observations from the field."
    >
      <div className="space-y-10">
        {notes.map((note, i) => (
          <article key={i} className="border-l-2 border-primary/20 pl-6">
            <time className="text-xs text-muted-foreground">{note.date}</time>
            <h3 className="font-heading text-lg font-semibold mt-1 text-foreground">{note.title}</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{note.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}