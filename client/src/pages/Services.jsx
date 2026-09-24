import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CtaBand from "../components/sections/CtaBand";

const packages = [
  {
    name: "Starter",
    price: "From R3,500",
    tagline: "Perfect for a simple online presence.",
    features: ["1-page landing site", "Mobile responsive", "Contact form", "Basic SEO", "2-week delivery"],
  },
  {
    name: "Business",
    price: "From R9,500",
    tagline: "For businesses that need a full site.",
    features: ["Up to 5 pages", "Custom design", "Blog/portfolio ready", "SEO setup", "3–4 week delivery"],
    featured: true,
  },
  {
    name: "Custom Web App",
    price: "Let's talk",
    tagline: "Portals, dashboards, internal tools.",
    features: ["Custom features", "Auth + database", "Admin dashboard", "API integrations", "Timeline by scope"],
  },
];

const steps = [
  { title: "Discovery", desc: "We talk through your goals, audience and requirements." },
  { title: "Design", desc: "You approve a design direction before we build." },
  { title: "Build", desc: "Development with regular progress updates." },
  { title: "Launch", desc: "We deploy, test, and hand over everything." },
];

const faqs = [
  { q: "How long does a website take?", a: "Landing pages in ~2 weeks. Full sites in 3–4 weeks. Web apps vary by scope." },
  { q: "Do you handle hosting?", a: "Yes — we can deploy and manage hosting for you, or hand it off to your team." },
  { q: "What tech do you use?", a: "React, Node.js, PostgreSQL, Tailwind — modern, fast and scalable." },
  { q: "How do payments work?", a: "50% deposit to start, 50% on delivery. Larger projects split into milestones." },
];

export default function Services() {
  return (
    <>
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Services"
            title="Websites and web apps, done right."
            subtitle="Whether you need a simple landing page or a custom web app, we scope it clearly and deliver on time."
          />
        </div>
      </section>

      {/* Packages */}
      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHeading eyebrow="Packages" title="Pick a starting point." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <Card
                key={p.name}
                className={p.featured ? "border-accent" : ""}
              >
                {p.featured && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Most popular
                  </span>
                )}
                <h3 className="mt-2 text-2xl font-black">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                <p className="mt-6 text-3xl font-black text-accent">{p.price}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button to="/contact" variant={p.featured ? "primary" : "ghost"} className="w-full">
                    Get started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section border-t border-line bg-elevated">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="How we work." />
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title}>
                <div className="text-accent text-sm font-bold">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title="Common questions." />
          <div className="mt-14 max-w-3xl divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between list-none">
                  <span className="text-lg font-semibold">{f.q}</span>
                  <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}