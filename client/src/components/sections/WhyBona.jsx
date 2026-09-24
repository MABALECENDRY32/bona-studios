import SectionHeading from "../ui/SectionHeading";

const reasons = [
  { title: "Direct with the dev", desc: "No middlemen. You talk straight to the person building it." },
  { title: "Modern stack", desc: "React, Node, Postgres — fast, secure, built to scale." },
  { title: "Launch in weeks", desc: "Clear scope and timelines. No endless back-and-forth." },
];

export default function WhyBona() {
  return (
    <section className="section border-t border-line bg-elevated">
      <div className="container-x">
        <SectionHeading eyebrow="Why BONA" title="Straight talk. Real results." />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title}>
              <div className="text-accent text-sm font-bold">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-muted">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}