import SectionHeading from "../ui/SectionHeading";

const features = [
  { title: "Dashboards", desc: "Track what matters, at a glance." },
  { title: "Client Portals", desc: "Give customers a place to log in and act." },
  { title: "Admin Panels", desc: "Manage content, users and data with ease." },
  { title: "Custom APIs", desc: "Connect your app to the services you already use." },
];

export default function WebAppShowcase() {
  return (
    <section className="section border-t border-line bg-elevated">
      <div className="container-x">
        <SectionHeading
          eyebrow="Web apps"
          title="Not just websites — full digital products."
          subtitle="From MVPs to internal tools, we design and build web applications end-to-end."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-line bg-base p-6">
              <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <div className="h-3 w-3 rounded-sm bg-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}