import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { CONTACT } from "../lib/constants";
import { submitInquiry } from "../lib/api";

const TECH_OPTIONS = [
  { group: "Frontend", items: ["React", "Next.js", "Vue", "Plain HTML/CSS/JS"] },
  { group: "Backend", items: ["Node.js", "Express", "Python (Django/Flask)", "PHP (Laravel)"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"] },
  { group: "Other", items: ["Stripe / Payments", "Auth / Login", "Admin Dashboard", "REST API", "Not sure yet"] },
];

const initial = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "Business Website",
  budget: "R5k–R10k",
  techStack: [],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleTech = (item) => {
    setForm((f) => ({
      ...f,
      techStack: f.techStack.includes(item)
        ? f.techStack.filter((t) => t !== item)
        : [...f.techStack, item],
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await submitInquiry({
      name: form.name,
      email: form.email,
      company: form.company,
      projectType: form.projectType,
      budget: form.budget,
      techStack: form.techStack,
      message: form.message,
    });
    setStatus("success");
    setForm(initial);
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  return (
    <section className="section">
      <div className="container-x grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
            subtitle="Tell us about your project and we'll get back to you within 24 hours."
          />

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <div className="text-muted uppercase tracking-wider text-xs">Email</div>
              <div className="mt-1 text-lg">{CONTACT.email}</div>
            </div>
            <div>
                <div className="text-muted uppercase tracking-wider text-xs">Phone</div>
                <div className="mt-1 text-lg">{CONTACT.phone}</div>
            </div>
            <div>
            </div>
            <div>
              <div className="text-muted uppercase tracking-wider text-xs">Response time</div>
              <div className="mt-1 text-lg">{CONTACT.responseTime}</div>
            </div>
          </div>
        </div>

        <Card className="p-8">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-accent text-5xl">✓</div>
              <h3 className="mt-4 text-2xl font-black">Message sent</h3>
              <p className="mt-2 text-muted">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Name" name="name" value={form.name} onChange={update} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
              <Field label="Company" name="company" value={form.company} onChange={update} />

              <div className="grid gap-5 sm:grid-cols-2">
                <Select
                  label="Project type"
                  name="projectType"
                  value={form.projectType}
                  onChange={update}
                  options={["Business Website", "Landing Page", "Web App", "Maintenance", "Other"]}
                />
                <Select
                  label="Budget"
                  name="budget"
                  value={form.budget}
                  onChange={update}
                  options={["< R5k", "R5k–R10k", "R10k–R25k", "R25k+", "Not sure yet"]}
                />
              </div>

              {/* TECH STACK PICKER */}
              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  Tech stack <span className="text-muted/60">(optional — pick what you have in mind)</span>
                </label>

                {form.techStack.length > 0 && (
                  <p className="text-xs text-accent mb-3">
                    Selected: {form.techStack.join(", ")}
                  </p>
                )}

                <div className="space-y-4 rounded-lg border border-line bg-base p-4">
                  {TECH_OPTIONS.map((group) => (
                    <div key={group.group}>
                      <div className="text-xs uppercase tracking-wider text-muted mb-2">
                        {group.group}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => {
                          const active = form.techStack.includes(item);
                          return (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleTech(item)}
                              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                                active
                                  ? "border-accent bg-accent text-base"
                                  : "border-line text-muted hover:border-accent hover:text-accent"
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {form.techStack.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, techStack: [] }))}
                    className="mt-2 text-xs text-muted hover:text-accent"
                  >
                    Clear selection
                  </button>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows={5}
                  required
                  className="w-full rounded-lg border border-line bg-base px-4 py-3 text-ink focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Try again or email us directly.
                </p>
              )}
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-muted mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-line bg-base px-4 py-3 text-ink focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-muted mb-2">{label}</label>
      <select
        {...props}
        className="w-full rounded-lg border border-line bg-base px-4 py-3 text-ink focus:border-accent focus:outline-none transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}