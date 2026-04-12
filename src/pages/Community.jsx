import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

const waysOfEngaging = [
  {
    title: "Attending Salons and Dialogues",
    description: "Participate in gatherings designed for considered conversation on questions that matter."
  },
  {
    title: "Participating in Inquiry",
    description: "Engage with ongoing research and sense-making processes as they unfold."
  },
  {
    title: "Contributing Research or Reflection",
    description: "Share insights, questions, and perspectives that enrich collective understanding."
  },
  {
    title: "Applying Frameworks in Practice",
    description: "Bring these orientations into your own context and contribute learnings back to the field."
  }
];

const whatThisIsNot = [
  "Not a training program with certifications",
  "Not a membership organization with dues",
  "Not a consulting practice seeking clients",
  "Not a movement seeking converts"
];

const qualitiesOfEngagement = [
  "Genuine inquiry rather than predetermined conclusions",
  "Respectful dialogue that honors different perspectives",
  "Grounded reflection that connects ideas to experience",
  "Patience with questions that do not yet have answers"
];

export default function Community() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <PageHeader
          title="Community and Participation"
          subtitle="Ways of engaging with this inquiry"
        />

        <Section>
          <p>
            Generative Ontology is not a community in the conventional sense—there is no membership, no enrollment, no program to complete. It is a field of inquiry that welcomes those who find themselves drawn to these questions.
          </p>
          <p>
            Participation is not about joining something but about engaging authentically with questions that matter. There are no funnels, no conversion metrics, no attempts to capture attention or extract commitment.
          </p>
        </Section>

        <Section title="Ways of Engaging">
          <div className="space-y-6">
            {waysOfEngaging.map((way, index) => (
              <div key={index}>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">
                  {way.title}
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="What This Is Not">
          <ul className="list-disc list-outside ml-6 space-y-2">
            {whatThisIsNot.map((item, index) => (
              <li key={index} className="text-foreground/90">{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="The Quality of Engagement">
          <p className="mb-4">
            What matters is not the quantity of participation but its quality. Those who engage with this work are invited to bring:
          </p>
          <ul className="space-y-3">
            {qualitiesOfEngagement.map((quality, index) => (
              <li key={index} className="border-l-2 border-primary pl-4 text-foreground/90">
                {quality}
              </li>
            ))}
          </ul>
        </Section>

        <Section borderTop className="text-center">
          <p className="text-lg">
            If these questions are alive for you, you are already part of this inquiry.
          </p>
        </Section>

        {/* Extended Footer Content */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Generativity is not an ideology but a responsibility—a way of being in relation to what is emerging. We hold this work with humility, as stewards rather than owners of an inquiry that belongs to no one and serves everyone.
          </p>
        </div>
      </div>
  );
}

