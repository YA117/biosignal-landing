export function MarqueeBanner() {
  const text = "Signal-Based Health · Decode · Resolve · Rebuild · ";
  const repeated = text.repeat(8);

  return (
    <section className="w-full overflow-hidden bg-[#1c1917] py-6">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="text-sm uppercase tracking-[0.3em] text-white/20 font-light">
          {repeated}
        </span>
        <span className="text-sm uppercase tracking-[0.3em] text-white/20 font-light">
          {repeated}
        </span>
      </div>
    </section>
  );
}
