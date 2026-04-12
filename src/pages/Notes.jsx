
export default function Notes() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
            Foundational Notes
          </h1>
          <div className="w-16 h-px bg-border mx-auto" />
        </header>

        {/* Introduction */}
        <section className="mb-12 max-w-2xl mx-auto">
          <p className="text-foreground leading-relaxed mb-4">
            These notes offer a preliminary orientation to Generative Ontology—not as doctrine, but as working language. They are meant to be held lightly, revised through inquiry, and deepened through dialogue.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Consider them thresholds rather than conclusions.
          </p>
        </section>

        {/* Working Notes */}
        <section className="mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-xl font-medium text-foreground mb-8 pb-4 border-b border-border">
            Working Notes
          </h2>
          <ul className="space-y-6">
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On being as process:</span>{" "}
                <span className="text-muted-foreground">
                  Reality is not a collection of fixed entities but a continuous becoming. What we call "things" are patterns of relation in motion.
                </span>
              </p>
            </li>
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On generativity:</span>{" "}
                <span className="text-muted-foreground">
                  To be generative is to create conditions for emergence—for something to arise that could not have been predicted or controlled.
                </span>
              </p>
            </li>
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On extraction and depletion:</span>{" "}
                <span className="text-muted-foreground">
                  Extractive systems treat relationship as transaction. They optimize for capture rather than cultivation, and in doing so, exhaust the sources they depend upon.
                </span>
              </p>
            </li>
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On coherence:</span>{" "}
                <span className="text-muted-foreground">
                  Coherence is not uniformity. It is the felt sense of parts in relationship—a wholeness that allows for difference without fragmentation.
                </span>
              </p>
            </li>
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On resonance:</span>{" "}
                <span className="text-muted-foreground">
                  Resonance occurs when systems attune to one another—when what arises in one field amplifies or clarifies what exists in another.
                </span>
              </p>
            </li>
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On care as infrastructure:</span>{" "}
                <span className="text-muted-foreground">
                  Care is not a sentiment but a structural condition. Systems that attend to their own foundations are more capable of sustained flourishing.
                </span>
              </p>
            </li>
            <li className="pl-4 border-l-2 border-border">
              <p className="text-foreground">
                <span className="font-medium">On inquiry as practice:</span>{" "}
                <span className="text-muted-foreground">
                  Generative Ontology is not a position to defend but a practice to inhabit. The question matters more than the answer it yields.
                </span>
              </p>
            </li>
          </ul>
        </section>

        {/* Closing */}
        <section className="max-w-2xl mx-auto pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm text-center">
            These notes are in ongoing revision. They will grow as the inquiry deepens.
          </p>
        </section>
      </div>
  );
}

