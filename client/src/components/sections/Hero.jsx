import Button from "../ui/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* LEFT: text */}
        <div>
          <p className="eyebrow">Web development studio</p>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]">
            We build websites and <span className="text-accent">web apps</span> that work for your business.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl">
            BONA Studios designs and develops fast, modern digital products — landing pages,
            business sites, dashboards and custom web apps. Built by a full-stack developer,
            tailored to your goals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact">Start a project</Button>
            <Button to="/services" variant="ghost">See services</Button>
          </div>

          {/* mini trust row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted">
            <span>⚡ Fast turnaround</span>
            <span>🧑‍💻 Direct with the dev</span>
            <span>🚀 Modern stack</span>
          </div>
        </div>

        {/* RIGHT: visual */}
        <div className="lg:pl-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}