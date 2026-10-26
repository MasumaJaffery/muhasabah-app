const heart = "M12 21C5 16 2 12.5 2 8.5 2 5.5 4.3 3.5 7 3.5c1.9 0 3.7 1 5 2.8 1.3-1.8 3.1-2.8 5-2.8 2.7 0 5 2 5 5C22 12.5 19 16 12 21z";
const F = [
  { t: "Daily checklist", p: "Tick off your focus goals and build a streak. See how this week compares with last.", span: "lg:col-span-3", i: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></> },
  { t: "Reflection journal", p: "Write what went well and what to improve, then look back and notice patterns.", span: "lg:col-span-3", i: <><path d="M3 5.5C5 4 8 4 12 6c4-2 7-2 9-.5V19c-2-1.5-5-1.5-9 .5-4-2-7-2-9-.5z" /><path d="M12 6v13.5" /></> },
  { t: "Tasbeeh counter", p: "Count Tasbeeh-e-Zahra or your own azkar. The heart fills as you go.", span: "lg:col-span-4", heart: true, i: <path d={heart} /> },
  { t: "Progress", p: "Track your consistency over time and see how far you have come.", span: "lg:col-span-2", i: <path d="M5 20V10M12 20V4M19 20v-7" /> },
  { t: "Qibla", p: "Find the direction of prayer wherever you are.", span: "lg:col-span-2", i: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></> },
  { t: "Gentle reminders", p: "Set alerts for the moments you want to pause and reflect.", span: "lg:col-span-4", i: <><path d="M6 17V11a6 6 0 0112 0v6l1.5 2h-15z" /><path d="M10 21h4" /></> },
];

export default function Features() {
  return (
    <section id="features" className="bg-bg2 py-[88px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <h2 data-fade className="whitespace-nowrap font-serif text-[clamp(14px,4vw,40px)] font-medium leading-[1.1]">Everything for your daily check list in one App</h2>
        <p data-fade className="mt-3.5 max-w-[34em] text-mute">Simple tools that fit into a few quiet minutes, morning or night.</p>
        <div data-stagger className="mt-12 grid gap-5 lg:grid-cols-6">
          {F.map((f) => (
            <div key={f.t} data-item className={`group relative overflow-hidden rounded-3xl border border-line bg-card p-7 transition duration-200 hover:-translate-y-1 hover:border-blue ${f.span} ${f.heart ? "lg:bg-gradient-to-br lg:from-ruby/15 lg:to-card lg:pr-[210px]" : ""}`}>
              <div className="mb-[18px] grid h-12 w-12 place-items-center rounded-[14px] bg-gradient-to-br from-blue/25 to-ruby/25">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">{f.i}</svg>
              </div>
              <h3 className="mb-2 font-serif text-2xl font-medium">{f.t}</h3>
              <p className="text-base text-mute">{f.p}</p>
              {f.heart && (
                <div aria-hidden="true" className="mt-5 w-[120px] drop-shadow-[0_0_18px_rgba(255,77,94,.55)] lg:absolute lg:right-[30px] lg:top-1/2 lg:mt-0 lg:w-[140px] lg:-translate-y-1/2">
                  <svg viewBox="0 0 24 24"><defs><clipPath id="hc"><path d={heart} /></clipPath></defs><path d={heart} fill="rgba(255,77,94,.12)" stroke="#ff4d5e" strokeWidth=".7" /><g clipPath="url(#hc)"><rect className="lvl" x="0" y="8" width="24" height="24" fill="#ff4d5e" /></g></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
