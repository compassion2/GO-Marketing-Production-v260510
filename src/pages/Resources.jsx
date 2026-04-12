import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

const essays = [
  "On the Ontology of Care",
  "Beyond Extraction: Toward Generative Capital",
  "The Relational Field in Organizational Life",
  "Flourishing as Process"
];

const dialogues = [
  "What Do We Mean by Generative?",
  "Resonance in Practice",
  "The Limits of Extraction"
];

const glossary = [
  {
    term: "Ontology",
    definition: "The study of the nature of being and reality; the fundamental assumptions about what exists and how things relate to one another."
  },
  {
    term: "Generativity",
    definition: "The capacity to create conditions for new possibilities; the quality of producing more than is consumed and leaving systems enriched."
  },
  {
    term: "Resonance",
    definition: "The quality of attunement between elements of a system; the degree to which parts vibrate in harmony rather than friction."
  },
  {
    term: "Coherence",
    definition: "The integration of resonant patterns over time; a felt sense of integrity and direction that allows for diversity while maintaining wholeness."
  },
  {
    term: "Flourishing",
    definition: "An ongoing process of growth, adaptation, and renewal; dynamic aliveness that includes challenge, learning, and transformation."
  },
  {
    term: "Extractive Systems",
    definition: "Systems that take more than they give back; patterns that deplete resources, relationships, and capacities over time."
  },
  {
    term: "Relational Fields",
    definition: "The patterns of connection and relationship that form the context for interaction; the medium through which all activity occurs."
  },
  {
    term: "Care as Infrastructure",
    definition: "Understanding care not as a soft addition to strategy but as the relational foundation upon which organizational capacity rests."
  }
];

export default function Resources() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <PageHeader
          title="Resources"
          subtitle="Materials for deepening inquiry"
        />

        <Section title="Essays and Writing">
          <p className="text-muted-foreground italic mb-4">Coming soon</p>
          <div className="space-y-3 opacity-60">
            {essays.map((essay, index) => (
              <div key={index} className="border-l-2 border-primary/50 pl-4 py-1">
                <p className="text-foreground">{essay}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Recorded Dialogues">
          <p className="text-muted-foreground italic mb-4">Coming soon</p>
          <div className="space-y-3 opacity-60">
            {dialogues.map((dialogue, index) => (
              <div key={index} className="border-l-2 border-primary/50 pl-4 py-1">
                <p className="text-foreground">{dialogue}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Glossary">
          <div className="space-y-6">
            {glossary.map((item, index) => (
              <div key={index} className="pb-5 border-b border-border last:border-b-0">
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {item.term}
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
  );
}

