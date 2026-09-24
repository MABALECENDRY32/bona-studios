import Button from "../ui/Button";

export default function CtaBand() {
  return (
    <section className="section border-t border-line">
      <div className="container-x text-center">
        <h2 className="text-4xl sm:text-5xl font-black max-w-3xl mx-auto">
          Ready to build something great?
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Tell us about your project. We'll get back to you within 24 hours.
        </p>
        <div className="mt-8">
          <Button to="/contact">Let's talk</Button>
        </div>
      </div>
    </section>
  );
}