import PageShell from "../components/PageShell";

export default function WhatIs() {
  return (
    <PageShell
      title="What is Generative Ontology?"
      subtitle="A working introduction to an evolving inquiry."
    >
      <p>
        Generative Ontology is a field of inquiry that explores how realities come into being — not as fixed structures, but as living processes of emergence, relation, and sense-making.
      </p>
      <p>
        It draws from phenomenology, process philosophy, complexity science, contemplative traditions, and embodied cognition to ask: <em>What are the conditions under which new ways of being become possible?</em>
      </p>
      <p>
        Rather than seeking to describe the world as it "is," generative ontology attends to the dynamics of becoming — the thresholds, tensions, and openings through which reality is continually re-constituted.
      </p>
      <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Key Questions</h2>
      <ul className="list-disc list-inside space-y-2 text-foreground/80">
        <li>How do new ontological structures emerge?</li>
        <li>What role does attention play in shaping the real?</li>
        <li>How can practices of inquiry become generative acts?</li>
        <li>What is the relationship between knowing and being?</li>
      </ul>
      <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">An Invitation</h2>
      <p>
        This is not a fixed doctrine but an open invitation — to participate in the ongoing generation of meaning, to attend to the ontological ground beneath our conversations, and to practice ways of being that are responsive to the real.
      </p>
    </PageShell>
  );
}