import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function Frameworks() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <PageHeader
          title="Frameworks and Research"
          subtitle="Living inquiry rather than fixed doctrine"
        />

        <Section>
          <p>
            The frameworks associated with Generative Ontology are not intended as fixed systems to be mechanically applied. They are orientations—ways of seeing that can inform practice while remaining open to revision and deepening.
          </p>
          <p>
            Similarly, the research orientation here is not one of detached observation but of engaged inquiry. Research and practice are not separate domains but aspects of a single process of learning and contribution.
          </p>
        </Section>

        <Section title="Generative Ontology as Living Framework">
          <p>
            Generative Ontology itself functions as a framework—a set of concepts and orientations that can be brought to bear on practical situations. But unlike many frameworks, it explicitly invites its own adaptation and evolution.
          </p>
          <p>
            The core insight—that our ontological assumptions shape what becomes possible—applies to Generative Ontology itself. It offers not prescriptions but orientations, not answers but better questions. Its value lies not in rigid application but in the quality of inquiry it enables.
          </p>
        </Section>

        <Section title="Connection to ROI of Care">
          <p>
            The ROI of Care is an applied framework within Compassion 2.0 that draws directly from generative ontology. It articulates how care—genuine attention to the wellbeing and development of people and systems—generates return that cannot be achieved through purely instrumental approaches.
          </p>
          <p>
            Where conventional ROI thinking treats people as resources to be optimized, the ROI of Care recognizes that care is not a soft addition to strategy but a fundamental infrastructure—the relational ground on which all organizational capacity rests.
          </p>
        </Section>

        <Section title="Organizational Resonance">
          <p>
            Organizational Resonance refers to the quality of attunement within and between the elements of an organization—the degree to which individual purposes align with collective mission, the coherence between stated values and lived practices, the felt sense of working toward something meaningful together.
          </p>
          <p>
            This is not about manufacturing alignment or enforcing conformity. It is about creating conditions in which genuine resonance can emerge—conditions characterized by psychological safety, authentic communication, and shared commitment to something beyond individual advancement.
          </p>
        </Section>

        <Section title="Field Conditions">
          <p>
            Every interaction takes place within a field—a relational context that shapes what becomes possible. Field conditions include the quality of attention present, the degree of trust in the space, the implicit assumptions about what is appropriate, and the energy and intention brought by participants.
          </p>
          <p>
            Attending to field conditions shifts the focus from controlling outcomes to cultivating environments. Rather than trying to determine results directly, we work with the conditions from which results arise.
          </p>
        </Section>

        <Section title="Evolving Understanding">
          <p>
            These frameworks are not complete. They are evolving orientations that deepen through application and reflection. Different practitioners bring different emphases and insights. This plurality is not a problem to be solved but a richness to be cultivated.
          </p>
          <p>
            The invitation is not to adopt these frameworks as received doctrine but to engage with them as living inquiries—to test them against experience, to bring critical attention to their limitations, and to contribute to their ongoing development.
          </p>
        </Section>

        <Section title="Research Orientation" borderTop>
          <p>
            The research informing Generative Ontology draws on multiple traditions and methodologies:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 mt-4">
            <li>Contemplative inquiry and phenomenological investigation</li>
            <li>Action research and participatory methods</li>
            <li>Complexity science and systems thinking</li>
            <li>Organizational studies and management research</li>
            <li>Indigenous ways of knowing and relational ontologies</li>
            <li>Neuroscience + Polyvagal theory</li>
          </ul>
          <p className="mt-4">
            What unites these diverse approaches is attention to the relationship between observer and observed, between theory and practice, between individual insight and collective wisdom. Research here is not extraction of knowledge from subjects but co-creation of understanding with participants.
          </p>
        </Section>
      </div>
  );
}

