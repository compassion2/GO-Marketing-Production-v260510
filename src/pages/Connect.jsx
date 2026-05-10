import { useState, useEffect } from "react";
import { PageHeader } from "@/components/ui/PageHeader";

const reasonOptions = [
  "General Inquiry",
  "Organizational Transformation / Strategic Advisory",
  "CFLO Learning Journey",
  "Master Trainer Certification",
  "Somatic Gratitude Program",
  "Enterprise Stack / Technology",
  "Benevolently Platform / Beta",
  "Partnership Opportunity",
  "Speaking Engagement",
  "Media Request",
  "Research / Academic Collaboration",
  "Investor / Funder Interest",
  "Support Request",
  "Other"
];

const interestOptions = [
  "Organizational Design & Transformation",
  "Brain Capital Ecosystem",
  "Leadership Development & Coaching",
  "Somatic Gratitude & Contemplative Practice",
  "Master Trainer Certification",
  "Mastermind Application",
  "Enterprise ROI of Care Platform (Flourishingly)",
  "Enterprise Altruism Platform (Benevolently)",
  "Research & Philosophical Inquiry (Generative Ontology)",
  "Community & Events",
  "Funding & Investment",
  "Speaking & Thought Leadership"
];

const engagementOptions = [
  "Exploring for my organization",
  "Interested in a program or certification",
  "Evaluating a product or platform",
  "Want to join a community",
  "Research or academic interest",
  "Investment or funding",
  "Just curious"
];

const orgSizeOptions = [
  "Individual / Solo",
  "Small team (2-50)",
  "Mid-market (51-500)",
  "Enterprise (500+)",
  "Nonprofit / Academic",
  "Government"
];

const howHeardOptions = [
  "Human Tech Week",
  "Web Search",
  "LinkedIn",
  "Social Media (other)",
  "Conference / Event",
  "Referral / Word of Mouth",
  "Podcast",
  "Compassion 2.0 Community",
  "IDG Network",
  "Partner Organization",
  "Other"
];

const inputClass = "w-full border border-border bg-background text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring rounded-sm";
const labelClass = "block text-sm font-medium text-foreground mb-1";
const selectClass = "w-full border border-border bg-background text-foreground px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring rounded-sm";

export default function Connect() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    title: "",
    linkedin_url: "",
    company_url: "",
    reason_for_contact: "",
    interest_areas: [],
    engagement_type: "",
    org_size: "",
    how_heard: "",
    message: ""
  });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (option) => {
    setForm((prev) => ({
      ...prev,
      interest_areas: prev.interest_areas.includes(option)
        ? prev.interest_areas.filter((i) => i !== option)
        : [...prev.interest_areas, option]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("https://c2interest.base44.app/functions/submitInterest/index", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source_site: "Generative Ontology",
          submitted_at: new Date().toISOString()
        })
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center py-20">
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <p className="font-display text-xl text-foreground">
            Thank you for reaching out. We'll be in touch soon.
          </p>
          <div className="w-12 h-px bg-primary mx-auto mt-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <PageHeader
        title="Contact Compassion 2.0"
        subtitle="Whether you're drawn to the philosophical foundations, exploring research collaboration, or curious about how generative ontology applies to organizational and human development — we'd welcome the conversation."
      />

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {/* First Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name <span className="text-destructive">*</span></label>
            <input type="text" name="first_name" required value={form.first_name} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Last Name <span className="text-destructive">*</span></label>
            <input type="text" name="last_name" required value={form.last_name} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email <span className="text-destructive">*</span></label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} />
        </div>

        {/* Organization */}
        <div>
          <label className={labelClass}>Organization</label>
          <input type="text" name="organization" value={form.organization} onChange={handleChange} className={inputClass} />
        </div>

        {/* Title / Role */}
        <div>
          <label className={labelClass}>Title / Role</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} className={inputClass} />
        </div>

        {/* LinkedIn URL */}
        <div>
          <label className={labelClass}>LinkedIn URL</label>
          <input type="text" name="linkedin_url" value={form.linkedin_url} onChange={handleChange} className={inputClass} placeholder="https://linkedin.com/in/..." />
        </div>

        {/* Company URL */}
        <div>
          <label className={labelClass}>Company URL</label>
          <input type="text" name="company_url" value={form.company_url} onChange={handleChange} className={inputClass} placeholder="https://..." />
        </div>

        {/* Reason for Contact */}
        <div>
          <label className={labelClass}>Reason for Contact</label>
          <select name="reason_for_contact" value={form.reason_for_contact} onChange={handleChange} className={selectClass}>
            <option value="">Select a reason...</option>
            {reasonOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Areas of Interest */}
        <div>
          <label className={labelClass}>Areas of Interest</label>
          <div className="space-y-2 mt-1">
            {interestOptions.map((option) => (
              <label key={option} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.interest_areas.includes(option)}
                  onChange={() => handleInterestToggle(option)}
                  className="mt-0.5 accent-primary"
                />
                <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* What Best Describes You */}
        <div>
          <label className={labelClass}>What Best Describes You?</label>
          <select name="engagement_type" value={form.engagement_type} onChange={handleChange} className={selectClass}>
            <option value="">Select...</option>
            {engagementOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Organization Size */}
        <div>
          <label className={labelClass}>Organization Size</label>
          <select name="org_size" value={form.org_size} onChange={handleChange} className={selectClass}>
            <option value="">Select...</option>
            {orgSizeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* How Did You Hear About Us */}
        <div>
          <label className={labelClass}>How Did You Hear About Us?</label>
          <select name="how_heard" value={form.how_heard} onChange={handleChange} className={selectClass}>
            <option value="">Select...</option>
            {howHeardOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={inputClass} />
        </div>

        {status === "error" && (
          <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3 border border-foreground text-foreground font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}