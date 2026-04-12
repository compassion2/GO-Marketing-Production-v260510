import PageShell from "../components/PageShell";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Introduction to Generative Ontology",
    date: "May 2026",
    type: "Online Seminar",
    desc: "A three-session online seminar exploring the foundations and practices of generative ontological inquiry.",
  },
  {
    title: "The Poetics of Emergence",
    date: "July 2026",
    type: "Retreat",
    desc: "A five-day residential retreat integrating contemplative practice, philosophical dialogue, and embodied inquiry.",
  },
  {
    title: "Community Dialogue: Ontological Design",
    date: "Monthly",
    type: "Open Dialogue",
    desc: "A recurring open conversation exploring how ontological awareness shapes the design of systems, spaces, and relationships.",
  },
];

export default function Events() {
  return (
    <PageShell
      title="Events"
      subtitle="Gatherings, seminars, and shared spaces of inquiry."
    >
      <div className="space-y-6">
        {events.map((e, i) => (
          <div key={i} className="p-6 rounded-sm bg-card border border-border/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{e.date}</span>
              <span className="text-border">·</span>
              <span>{e.type}</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{e.title}</h3>
            <p className="mt-2 text-sm text-foreground/75">{e.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}