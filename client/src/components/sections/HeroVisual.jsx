import { useEffect, useState } from "react";

const SCREENS = ["dashboard", "landing", "mobile"];

export default function HeroVisual() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setScreen((s) => (s + 1) % SCREENS.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-8 bg-accent/20 blur-3xl rounded-full opacity-40 pointer-events-none" />

      {/* browser frame */}
      <div className="relative rounded-xl border border-line bg-elevated shadow-2xl overflow-hidden">
        {/* top bar */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3 bg-base">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="ml-4 flex-1 rounded-md bg-elevated border border-line px-3 py-1 text-xs text-muted font-mono">
            bona-studios.app/{SCREENS[screen]}
          </div>
        </div>

        {/* screen body */}
        <div className="relative h-85 sm:h-100 bg-base">
          <div className={`absolute inset-0 transition-opacity duration-700 ${screen === 0 ? "opacity-100" : "opacity-0"}`}>
            <DashboardMock />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-700 ${screen === 1 ? "opacity-100" : "opacity-0"}`}>
            <LandingMock />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-700 ${screen === 2 ? "opacity-100" : "opacity-0"}`}>
            <MobileMock />
          </div>
        </div>

        {/* bottom status bar */}
        <div className="flex items-center justify-between border-t border-line px-4 py-2 text-xs font-mono text-muted bg-base">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            live preview
          </span>
          <span>React • Node • Postgres</span>
        </div>
      </div>

      {/* dot indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {SCREENS.map((_, i) => (
          <button
            key={i}
            onClick={() => setScreen(i)}
            aria-label={`Show ${SCREENS[i]}`}
            className={`h-1.5 rounded-full transition-all ${
              i === screen ? "w-8 bg-accent" : "w-2 bg-line hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Mock screens ---------- */

function DashboardMock() {
  const bars = [40, 65, 30, 80, 55, 90, 45];
  return (
    <div className="h-full p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="h-3 w-32 rounded bg-line" />
        <div className="h-6 w-6 rounded-full bg-accent/80" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[["Revenue", "R42k"], ["Users", "1,204"], ["Uptime", "99.9%"]].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-line bg-elevated p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted">{k}</div>
            <div className="mt-1 text-lg font-bold text-ink">{v}</div>
          </div>
        ))}
      </div>

      <div className="flex-1 rounded-lg border border-line bg-elevated p-4 flex items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-accent/70 animate-pulse"
            style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="h-8 rounded bg-line/70" />
        <div className="h-8 rounded bg-line/40" />
      </div>
    </div>
  );
}

function LandingMock() {
  return (
    <div className="h-full p-6 flex flex-col">
      <div className="h-4 w-24 rounded bg-accent/80" />
      <div className="mt-4 h-6 w-3/4 rounded bg-line" />
      <div className="mt-2 h-6 w-2/3 rounded bg-line/70" />
      <div className="mt-4 space-y-2">
        <div className="h-2 w-full rounded bg-line/50" />
        <div className="h-2 w-5/6 rounded bg-line/50" />
      </div>
      <div className="mt-6 flex gap-3">
        <div className="h-9 w-28 rounded bg-accent" />
        <div className="h-9 w-28 rounded border border-line" />
      </div>

      <div className="mt-auto grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-line bg-elevated p-3">
            <div className="h-6 w-6 rounded bg-accent/70" />
            <div className="mt-3 h-2 w-full rounded bg-line/60" />
            <div className="mt-2 h-2 w-2/3 rounded bg-line/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-40 rounded-3xl border border-line bg-elevated p-3 shadow-2xl">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-line" />
        <div className="mt-4 h-3 w-20 rounded bg-accent/80" />
        <div className="mt-3 space-y-2">
          <div className="h-20 rounded-lg bg-line/60" />
          <div className="h-2 w-3/4 rounded bg-line/50" />
          <div className="h-2 w-1/2 rounded bg-line/40" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-10 rounded-lg bg-accent/70" />
          <div className="h-10 rounded-lg border border-line" />
        </div>
      </div>
    </div>
  );
}