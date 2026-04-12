import { Section } from "@/components/ui/Section";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
          Generative Ontology
        </h1>
        <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-8">
          A Compassion 2.0 Field of Inquiry
        </p>
        <div className="w-24 h-px bg-border mx-auto" />
      </header>

      <Section>
        <p>
          This work exists because the assumptions beneath our systems shape what becomes possible within them. How we understand reality—what we take to be real, valuable, and relational—determines the structures we build and the futures we can imagine.
        </p>
        <p>
          Generative Ontology is not a method or a framework to be applied. It is a field of inquiry—a space for examining the foundations beneath organizational life, capital flows, technological systems, and human development. It invites a slower, more considered way of thinking about what we are creating and why.
        </p>
      </Section>

      <Section title="What Is Generative Ontology">
        <p>
          Ontology, in the philosophical tradition, asks: what is the nature of being? What exists, and how do things relate to one another? Generative Ontology carries this inquiry into the practical domain—exploring how our assumptions about reality shape the systems we design and inhabit.
        </p>
        <p>
          Where extractive ontologies assume separation, scarcity, and static entities, a generative ontology begins from relationship, emergence, and possibility. It asks not only what is, but what is becoming—and what conditions allow for flourishing rather than depletion.
        </p>
      </Section>

      <Section title="Why This Matters Now">
        <p>
          We find ourselves in systems that were designed under assumptions that no longer serve. Organizations optimized for extraction encounter the limits of burnout and disengagement. Capital structures built on endless growth meet ecological boundaries. Technologies designed for attention capture fragment our capacity for presence.
        </p>
        <p>
          These are not merely strategic problems—they are ontological ones. Addressing them requires more than new tools or policies. It requires examining the worldviews that made such designs seem reasonable in the first place.
        </p>
      </Section>

      <Section title="Relationship to Compassion 2.0">
        <p>
          Generative Ontology sits beneath the applied frameworks of Compassion 2.0—informing orientations like the ROI of Care, Resonance, and Coherence. Where those frameworks offer practical pathways for organizational and personal transformation, this inquiry attends to the philosophical ground from which they arise.
        </p>
        <p>
          The two are not separate but nested. Compassion 2.0 operates at the level of practice and application. Generative Ontology holds space for reflection on the deeper assumptions that make such practices meaningful and effective.
        </p>
      </Section>

      <Section title="Ways of Engaging">
        <ul className="list-disc list-outside ml-6 space-y-3">
          <li>
            <span className="font-medium">Salons and dialogues</span> — Periodic gatherings for considered conversation on ontological questions as they relate to capital, organizations, and human systems.
          </li>
          <li>
            <span className="font-medium">Written reflections</span> — Essays and explorations that attempt to articulate what often resists articulation.
          </li>
          <li>
            <span className="font-medium">Research collaborations</span> — Partnerships with those working at the edges of organizational theory, contemplative science, and systems design.
          </li>
        </ul>
      </Section>

      <Section borderTop>
        <p>
          If you find yourself drawn to questions about the nature of flourishing systems—if you sense that something foundational needs attention—you are welcome to explore further.
        </p>
        <p className="text-muted-foreground mb-10">
          This is a place to arrive, to think, and to orient.
        </p>
        <div className="text-center">
          <Link
            to="/enter"
            className="inline-block px-8 py-3 border border-foreground text-foreground font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors"
          >
            ENTER THE INQUIRY
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Begin where Generative Ontology begins.
          </p>
        </div>
      </Section>
    </div>
  );
}
