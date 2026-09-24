import { Link } from "react-router-dom";
import { NAV_LINKS, CONTACT } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-elevated">
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link to="/" className="text-lg font-black tracking-tight">
            BONA<span className="text-accent">.</span>Studios
          </Link>
          <p className="mt-4 text-sm text-muted max-w-xs">
            We build fast, modern websites and web apps for businesses that want to stand out.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{CONTACT.email}</li>
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.responseTime}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6 text-xs text-muted flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} BONA Studios. All rights reserved.</span>
          <span>Built with React + Node.</span>
        </div>
      </div>
    </footer>
  );
}