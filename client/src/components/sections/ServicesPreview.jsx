import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const services = [
  { title: "Business Websites", desc: "Multi-page sites that convert visitors into customers." },
  { title: "Landing Pages", desc: "High-impact single pages built to launch fast." },
  { title: "Web Apps", desc: "Custom dashboards, portals and internal tools." },
  { title: "Maintenance", desc: "Hosting, updates and support so you stay online." },
];

export default function ServicesPreview() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow="What we do" title="Services built around your goals." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="hover:border-accent transition-colors">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/services" className="text-accent font-semibold hover:underline">
            Explore all services →
          </Link>
        </div>
      </div>
    </section>
  );
}