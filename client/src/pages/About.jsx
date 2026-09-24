import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import CtaBand from "../components/sections/CtaBand";

const stack = ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Tailwind CSS", "Vite", "REST APIs"];

const values = [
  { title: "Clarity", desc: "No jargon. No vague timelines. You always know what's happening." },
  { title: "Craft", desc: "Clean code, thoughtful design, and attention to the small things." },
  { title: "Ownership", desc: "Your project is treated like our own — we care how it performs." },
];

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="About"
            title="A studio built by a developer, for businesses."
          />
          <div className="mt-10 max-w-3xl space-y-5 text-lg text-muted">
            <p>
              BONA Studios was started with one simple idea: businesses deserve great websites
              without the agency overhead. No account managers, no layers, no waiting weeks
              for a reply.
            </p>
            <p>
              You work directly with the developer building your project. That means faster
              decisions, clearer communication, and a final product that actually matches what
              you asked for.
            </p>
            <p>
              We focus on modern, fast, reliable web experiences — whether that's a simple
              landing page or a full custom web app.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-elevated">
        <div className="container-x">
          <SectionHeading eyebrow="Stack" title="Tools we build with." />
          <div className="mt-10 flex flex-wrap gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-4 py-2 text-sm text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHeading eyebrow="Values" title="What we stand for." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-muted">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}