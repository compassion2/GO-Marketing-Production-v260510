import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

const contributingVoices = [
  {
    name: "Aram Fisher",
    org: "TheChange.ai",
    focus: "AI that serves rather than extracts"
  },
  {
    name: "Lama Tenzin",
    org: "CED Society of Dehradun",
    focus: "Contemplative traditions applied to community development"
  },
  {
    name: "Shannon Kelly",
    org: "Mount Madonna School",
    focus: "Values-based educational development"
  },
  {
    name: "Leo Christov Moore",
    org: "Institute for Advanced Consciousness Studies",
    focus: "Consciousness, culture, and systems"
  },
  {
    name: "Michael Shulman",
    org: "Waycraft",
    focus: "Relational dimensions of leadership"
  },
  {
    name: "David Hodgson",
    org: "Mycelial",
    focus: "Decentralized systems and network-based collaboration"
  },
  {
    name: "Carson Kelly",
    org: "Compassion 2.0",
    focus: "Care as infrastructure for generative organizations"
  }
];

const caseStudies = [
  "Change Agent AI",
  "Compassion 2.0",
  "CED Society: Pink Pads",
  "Waycraft",
  "Mount Madonna School: Values in World Thought",
  "Institute for Advanced Consciousness",
  "Mycelial"
];

const salonSessions = [
  {
    date: "Monday, June 22, 2026",
    title: "Session 1: Foundations — What is Generative Capital?",
    content: [
      "Keynote: Defining \"generative\" vs. \"regenerative\" vs. \"extractive\" — ontological frameworks for organizational design",
      "Case Study Spotlight: 8 organizations already operating outside traditional models",
      "Small Group Dialogue: \"What does your organization actually need to thrive — and how does that differ from what the market or donors expect?\"",
      "Output: Draft list of \"Generative Capital Principles\""
    ]
  },
  {
    date: "Friday, August 21, 2026",
    title: "Session 2: Models — Blurring the Lines Between For-Profit, Non-Profit, and Beyond",
    content: [
      "Keynote: Legal & financial innovation — PBCs, B Corps, L3Cs, cooperatives, community equity, tokenized stewardship",
      "Panel: Founders who've restructured their orgs to align with generative values — what worked, what failed, what surprised them",
      "Small Group Dialogue: \"Which model could your organization adopt — and what would it take to transition?\"",
      "Output: Matrix of existing models + proposed hybrid structures"
    ]
  },
  {
    date: "Friday, October 23, 2026",
    title: "Session 3: Funders — Who's Ready to Experiment?",
    content: [
      "Keynote: Mapping the landscape — family offices, progressive VCs, impact angels, foundations, and alternative capital pools",
      "Funder Roundtable: 3–5 funders share their thesis, criteria, and appetite for generative capital experiments",
      "Small Group Dialogue: \"What would make you invest in or fund a generative organization? What's your red line?\"",
      "Output: Master List of Generative Capital Partners"
    ]
  },
  {
    date: "Thursday, January 22, 2027",
    title: "Session 4: Prototyping — Designing the Next Generation of Generative Organizations",
    content: [
      "Keynote: From theory to practice — how to design governance, capital flows, and accountability for resonance, not ROI",
      "Workshop: Small groups prototype a new generative org model — including legal structure, funding mechanism, stakeholder map, and success metrics",
      "Closing Circle: Commitments — what will you build, fund, or change after this series?",
      "Output: Draft \"Generative Capital Playbook\" + invitation to Series 2 (Fall 2026)"
    ]
  }
];

const coreQuestions = [
  "What does \"generative capital\" mean — and how does it differ from regenerative, impact, or extractive capital?",
  "How can organizational structures be designed to embody ontological principles of resonance, coherence, and mutual benefit — rather than extraction or charity?",
  "What existing or emerging legal, financial, and governance models can serve as scaffolding for generative organizations?",
  "How do we fund organizations whose mission is not to scale for profit or to beg for charity — but to cultivate human individual and collective, and ecological coherence?",
  "Who are the funders — family offices, progressive VCs, mission-aligned angels, foundations — who are ready to experiment with generative capital?"
];

export default function Events() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <PageHeader
          title="Events"
          subtitle="Gatherings for considered conversation and shared inquiry"
        />

        <Section>
          <p>
            The events associated with Generative Ontology are not conferences or workshops in the conventional sense. They are salons—gatherings designed for considered conversation rather than information transfer.
          </p>
          <p>
            The emphasis is on inquiry over answers, on relationship over networking, on depth over breadth. These are spaces for thinking together about questions that matter.
          </p>
        </Section>

        {/* Featured Event - Salon Series */}
        <div className="border border-border rounded-sm p-8 mb-12 bg-card">
          <span className="text-xs uppercase tracking-wider text-primary font-medium">
            Four-Part Salon Series
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mt-3 mb-2">
            Generative Capital & Organizational Ontology
          </h2>
          <p className="text-lg text-muted-foreground italic mb-6">
            Beyond Extraction, Toward Collective Resonance
          </p>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</p>
              <p className="text-foreground">2 Embarcadero Center</p>
              <p className="text-foreground">San Francisco, California</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Time</p>
              <p className="text-foreground">2:00 PM – 5:00 PM PST (Sessions)</p>
              <p className="text-foreground">5:00 PM Reception</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Contribution</p>
              <p className="text-foreground">$50 per session</p>
              <p className="text-muted-foreground text-sm mt-1">Donation to support DrawBridge children's arts programs</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Format</p>
              <p className="text-foreground">In-person salon</p>
              <p className="text-muted-foreground text-sm mt-1">Approval required</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3">Mission</h3>
              <p className="text-foreground/90 leading-relaxed">
                To co-create, explore, and prototype new economic and organizational models that generate value — not extract it — in service of human, ecological, and cultural coherence.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3">Purpose</h3>
              <p className="text-foreground/90 leading-relaxed">
                This salon series invites changemakers, funders, entrepreneurs, and systems thinkers to reimagine how capital flows through organizations built for self-awareness, relational healing, environmental stewardship, and trans-cultural learning — outside the extractive frameworks of traditional for-profit or non-profit structures.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3">Audience</h3>
              <p className="text-foreground/90 leading-relaxed">
                Angels, family offices, philanthropic foundations, donor-advised funds, mission-driven VCs, catalytic capital providers, consciousness-aligned investors, and impact investors open to nontraditional return models.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">Core Questions Explored</h3>
              <ul className="space-y-3">
                {coreQuestions.map((question, index) => (
                  <li key={index} className="text-foreground/90 leading-relaxed pl-4 border-l-2 border-primary/30">
                    {question}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">The Four Sessions</h3>
              <div className="space-y-6">
                {salonSessions.map((session, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <p className="text-sm text-primary font-medium">{session.date}</p>
                    <p className="font-display text-foreground font-medium mt-1 mb-2">{session.title}</p>
                    <ul className="space-y-1">
                      {session.content.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">Featured Organizations</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudies.map((org, index) => (
                  <span key={index} className="text-sm text-foreground/80 bg-muted px-3 py-1 rounded-sm">
                    {org}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">Contributing Voices</h3>
              <div className="space-y-4">
                {contributingVoices.map((voice, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <p className="font-medium text-foreground">
                      {voice.name}
                      <span className="text-muted-foreground font-normal"> — {voice.org}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{voice.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Generative Contribution Note */}
            <div className="border-t border-border pt-6">
              <p className="text-foreground/80 leading-relaxed text-sm">
                By participating, you're making a direct generative contribution to DrawBridge, supporting expressive-arts programs that help children experiencing housing instability reclaim creativity, confidence, and connection. Your donation becomes part of the very paradigm we'll explore at the event: how resources, when directed with care, can circulate to create more flourishing for everyone involved.
              </p>
            </div>

            {/* Register Link */}
            <div className="pt-4">
              <a
                href="https://luma.com/gsdxgmzo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Request to join on Luma →
              </a>
            </div>
          </div>
        </div>

        {/* Second Event - Ontologies of Flourishing Dialogue */}
        <div className="border border-border rounded-sm p-8 bg-card">
          <span className="text-xs uppercase tracking-wider text-primary font-medium">
            Compassion 2.0 Conversations: Threads of the Mastermind
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mt-3 mb-2">
            Ontologies of Flourishing
          </h2>
          <p className="text-lg text-muted-foreground italic mb-6">
            A Dialogue Between Matthew T. Lee and Carson Kelly
          </p>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Date</p>
              <p className="text-foreground">Wednesday, February 11, 2026</p>
              <p className="text-muted-foreground text-sm mt-1">3:00 PM – 4:30 PM EST</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Format</p>
              <p className="text-foreground">Virtual via Zoom</p>
              <p className="text-muted-foreground text-sm mt-1">90 minutes</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">The Inquiry</h3>
              <p className="text-foreground/90 leading-relaxed">
                What do we mean when we talk about flourishing—and what meanings are hidden in the ways we define it? This dialogue explores the many ontologies + epistemologies—the underlying ways of being and knowing—that shape our understanding of what it means to flourish as humans, communities, and systems.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3">Topics Explored</h3>
              <ul className="space-y-2">
                <li className="text-foreground/90 leading-relaxed pl-4 border-l-2 border-primary/30">
                  Competing and complementary definitions of flourishing across science, philosophy, and lived experience
                </li>
                <li className="text-foreground/90 leading-relaxed pl-4 border-l-2 border-primary/30">
                  The nervous system as a foundation for human coherence, meaning-making, and ethical action
                </li>
                <li className="text-foreground/90 leading-relaxed pl-4 border-l-2 border-primary/30">
                  Flourishing as both an individual and collective process—embedded in systems, structures, and relationships
                </li>
                <li className="text-foreground/90 leading-relaxed pl-4 border-l-2 border-primary/30">
                  The role of love, awe, and moral beauty in transformative human experience
                </li>
                <li className="text-foreground/90 leading-relaxed pl-4 border-l-2 border-primary/30">
                  How different ontologies of flourishing influence our design of technology, institutions, and futures
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">Speakers</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-foreground">
                    Matthew T. Lee, PhD
                    <span className="text-muted-foreground font-normal"> — Human Flourishing Program at Harvard University</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Director of the Flourishing Network, exploring the science of human well-being, moral development, and transcendent experiences</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-foreground">
                    Carson Kelly
                    <span className="text-muted-foreground font-normal"> — Compassion 2.0</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Founder of Compassion 2.0, integrating nervous system science, systems thinking, and organizational design</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-foreground/80 leading-relaxed text-sm">
                As the world contends with accelerating complexity and fragmentation, this conversation invites a pause—a chance to re-examine the assumptions beneath our metrics, models, and aspirations. What if flourishing isn't just an outcome, but a paradigm shift in how we understand human life?
              </p>
            </div>

            {/* Register Link */}
            <div className="pt-4">
              <a
                href="https://luma.com/pmrwhuk9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Register on Luma →
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}