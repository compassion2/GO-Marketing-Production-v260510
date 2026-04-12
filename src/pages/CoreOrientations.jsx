import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function CoreOrientations() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <PageHeader
        title="Core Orientations"
        subtitle="Foundational concepts that inform this field of inquiry"
      />
      <Section title="Generative and Extractive Systems">
        <p>All systems operate somewhere on a spectrum between extraction and generation. Extractive systems take more than they give back—they deplete resources, relationships, and capacities over time. Generative systems create conditions for ongoing renewal—they produce more than they consume and leave the larger context enriched.</p>
        <p>This is not a moral judgment but a recognition of different patterns and their consequences. Extraction is not inherently evil; it may be necessary in certain contexts and time frames. But systems that are primarily extractive are ultimately self-limiting—they consume the very conditions that make their own operation possible.</p>
        <p>Generativity, by contrast, is self-sustaining. It creates the conditions for its own continuation and often for expanded possibility. The question for any system—organizational, economic, technological—is: what is it generating, and what is it depleting?</p>
      </Section>
      <Section title="Relational Fields">
        <p>We tend to think of ourselves and our organizations as discrete entities operating in a neutral space. But a deeper look reveals that we exist through relationship—we are constituted by our connections to others, to our environment, and to the larger patterns of which we are part.</p>
        <p>The quality of the relational field—the texture of connection, trust, and mutual recognition—shapes what becomes possible within it. In a field characterized by fear and competition, certain capacities contract. In a field characterized by care and genuine interest, different capacities emerge.</p>
        <p>Tending to the relational field is not a soft addition to real work—it is foundational work. The field is the medium through which all other activities occur.</p>
      </Section>
      <Section title="Resonance and Coherence">
        <p>Resonance refers to the quality of attunement between elements of a system—the degree to which they vibrate in harmony rather than friction. When there is resonance between individual purpose and organizational mission, between stated values and actual practices, between what we say and what we do, energy flows more freely.</p>
        <p>Coherence is the integration of these resonant patterns over time. A coherent system is one in which the various parts work together in service of something larger than any individual component. Coherence is not conformity—it allows for diversity and even tension—but it maintains a felt sense of integrity and direction.</p>
        <p>Both resonance and coherence are emergent properties. They cannot be forced or manufactured, but conditions can be created that allow them to arise.</p>
      </Section>
      <Section title="Flourishing as Process">
        <p>Flourishing is not an outcome to be achieved but an ongoing process—a way of being that involves continuous growth, adaptation, and renewal. It is not a static state of well-being but a dynamic aliveness that includes challenge, learning, and transformation.</p>
        <p>To flourish is not merely to survive or even to thrive in a narrow sense. It is to participate fully in the process of life—to contribute to something larger than oneself while simultaneously developing one's own capacities and potential.</p>
        <p>Systems that support flourishing are those that create conditions for this ongoing process—that enable people and organizations to grow, to contribute, and to continue developing over time.</p>
      </Section>
      <Section borderTop className="text-center">
        <p>These orientations are not separate ideas but facets of a single understanding. Generative systems create relational fields that enable resonance and coherence, supporting the ongoing process of flourishing.</p>
      </Section>
    </div>
  );
}
