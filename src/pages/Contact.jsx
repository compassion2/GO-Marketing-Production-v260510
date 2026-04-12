import { useState } from "react";
import { C2Interest } from "@/api/c2ProspectClient";

const INTEREST_AREAS = ["Being", "Thinking", "Relating", "Collaborating", "Acting"];
const HOW_HEARD_OPTIONS = ["Social Media", "Word of Mouth", "Compassion 2.0", "IDG Network", "Other"];
const SOURCE_SITE = "Generative Ontology";

export default function Contact() {
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", organization: "",
    title: "", linkedin_url: "", company_url: "",
    interest_areas: [], how_heard: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (area) => {
    setForm((prev) => ({
      ...prev,
      interest_areas: prev.interest_areas.includes(area)
        ? prev.interest_areas.filter((a) => a !== area)
        : [...prev.interest_areas, area],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await C2Interest.create({
        ...form,
        source_site: SOURCE_SITE,
        submitted_at: new Date().toISOString(),
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
        <p className="font-display text-2xl text-foreground mb-4">Thank you.</p>
        <p className="text-muted-foreground">We'll be in touch when something real opens.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-3">
          Remain in Relationship
        </h1>
        <p className="text-lg text-muted-foreground font-display italic">
          Occasional updates when new inquiries open.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">First Name *</label>
            <input name="first_name" required value={form.first_name} onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Last Name *</label>
            <input name="last_name" required value={form.last_name} onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-1">Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Organization</label>
            <input name="organization" value={form.organization} onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Title / Role</label>
            <input name="title" value={form.title} onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">LinkedIn URL</label>
            <input name="linkedin_url" type="url" value={form.linkedin_url} onChange={handleChange}
              placeholder="https://linkedin.com/in/..."
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Company URL</label>
            <input name="company_url" type="url" value={form.company_url} onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-3">Areas of Interest</label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_AREAS.map((area) => (
              <button key={area} type="button" onClick={() => handleInterestToggle(area)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  form.interest_areas.includes(area)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}>
                {area}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-1">How did you hear about us?</label>
          <select name="how_heard" value={form.how_heard} onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors">
            <option value="">Select an option</option>
            {HOW_HEARD_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4}
            placeholder="Tell us more about your interests or questions..."
            className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" />
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}

        <button type="submit" disabled={submitting}
          className="w-full px-4 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
          {submitting ? "Sending..." : "Remain in Relationship"}
        </button>
        <p className="text-xs text-muted-foreground text-center">No spam. Only when something real opens.</p>
      </form>
    </div>
  );
}
