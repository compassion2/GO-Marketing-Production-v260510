import PageShell from "../components/PageShell";

const sections = [
  {
    heading: "Foundational Texts",
    items: [
      "Heidegger, M. — Being and Time",
      "Whitehead, A.N. — Process and Reality",
      "Maturana, H. & Varela, F. — The Tree of Knowledge",
      "Bortoft, H. — The Wholeness of Nature",
      "Bohm, D. — Wholeness and the Implicate Order",
    ],
  },
  {
    heading: "Contemporary Voices",
    items: [
      "Bonnitta Roy — Process Ontology and Collective Insight",
      "Nora Bateson — Warm Data and Symmathesy",
      "Zak Stein — Education in a Time Between Worlds",
      "Andreas Weber — Enlivenment",
    ],
  },
  {
    heading: "Practice Traditions",
    items: [
      "Phenomenological Inquiry",
      "Goethean Science",
      "Contemplative Dialogue",
      "Presencing and Theory U",
    ],
  },
];

export default function Resources() {
  return (
    <PageShell
      title="Resources"
      subtitle="Readings, references, and practice traditions."
    >
      <div className="space-y-10">
        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-heading text-xl font-semibold mb-4">{s.heading}</h2>
            <ul className="space-y-2">
              {s.items.map((item, j) => (
                <li key={j} className="text-foreground/80 text-sm pl-4 border-l border-border/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}