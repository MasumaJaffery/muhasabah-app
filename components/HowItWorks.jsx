"use client";
import { useEffect, useState } from "react";

const HEART = "M12 21C5 16 2 12.5 2 8.5 2 5.5 4.3 3.5 7 3.5c1.9 0 3.7 1 5 2.8 1.3-1.8 3.1-2.8 5-2.8 2.7 0 5 2 5 5C22 12.5 19 16 12 21z";
const STEPS = [
  { t: "Morning", tag: "Start with intention", p: "Read the daily affirmation and choose your next focus goal.", r: "5:00 AM – 12:00 PM", i: <path d="M12 3v3M5.6 7.6l2.1 2.1M18.4 7.6l-2.1 2.1M3 16h18M7 16a5 5 0 0110 0M8 20h8" /> },
  { t: "Through the day", tag: "Stay consistent", p: "Tick off goals and keep your tasbeeh going whenever you have a moment.", r: "12:00 PM – 6:00 PM", i: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></> },
  { t: "Night", tag: "Reflect and rest", p: "Write your reflection in the journal and watch your streak grow.", r: "6:00 PM – 5:00 AM", i: <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" /> },
];

export default function HowItWorks() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    const t = () => setNow(new Date());
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);
  const h = now ? now.getHours() : 10, m = now ? now.getMinutes() : 10, s = now ? now.getSeconds() : 0;
  const active = now ? (h >= 5 && h < 12 ? 0 : h >= 12 && h < 18 ? 1 : 2) : -1;
  const rot = (deg) => ({ transform: `rotate(${deg}deg)`, transformOrigin: "100px 100px" });

  return (
    <section id="how" className="pb-4 pt-[88px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <h2 data-fade className="whitespace-nowrap font-serif text-[clamp(14px,4vw,40px)] font-medium leading-[1.1]">Three small moments, every day</h2>
        <p data-fade className="mt-3.5 max-w-[34em] text-mute">No long sessions. Just a few minutes at the right times.</p>

        <div className="relative mx-auto mt-10 max-w-[1032px] lg:py-20">
          {/* clock: on top on mobile, behind the steps on desktop */}
          <div aria-hidden="true" className="pointer-events-none relative mx-auto my-8 w-[min(300px,82vw)] lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:w-[540px] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div data-clock>
              <svg viewBox="0 0 200 200" className="w-full overflow-visible">
                <circle cx="100" cy="100" r="94" fill="rgba(111,178,255,.06)" stroke="#6fb2ff" strokeOpacity=".5" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 22px rgba(111,178,255,.25))" }} />
                {Array.from({ length: 12 }).map((_, k) => {
                  const a = (k * Math.PI) / 6;
                  return <line key={k} stroke="#6fb2ff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" x1={100 + Math.sin(a) * 80} y1={100 - Math.cos(a) * 80} x2={100 + Math.sin(a) * 88} y2={100 - Math.cos(a) * 88} />;
                })}
                <g style={rot((h % 12) * 30 + m * 0.5)} opacity=".6"><line x1="100" y1="100" x2="100" y2="58" stroke="#6fb2ff" strokeWidth="7" strokeLinecap="round" /></g>
                <g style={rot(m * 6 + s * 0.1)} opacity=".6"><line x1="100" y1="100" x2="100" y2="30" stroke="#fff" strokeWidth="4" strokeLinecap="round" /></g>
                <g style={rot(s * 6)} opacity=".8"><line x1="100" y1="112" x2="100" y2="22" stroke="#ff4d5e" strokeWidth="2" strokeLinecap="round" /></g>
                <g className="lg:hidden">
                  <circle cx="100" cy="100" r="15" fill="#040914" stroke="#6fb2ff" strokeWidth="1.5" />
                  <path transform="translate(91 91) scale(.75)" fill="#ff4d5e" d={HEART} />
                </g>
              </svg>
            </div>
          </div>

          <ol data-stagger className="relative z-10 grid gap-[18px] lg:gap-0">
            {STEPS.map((st, i) => {
              const on = i === active;
              const left = i % 2 === 0;
              return (
                <li
                  key={st.t}
                  data-item
                  className={`relative rounded-[22px] border p-5 pl-[78px] transition-all duration-500 lg:grid lg:grid-cols-[1fr_72px_1fr] lg:rounded-none lg:border-0 lg:bg-transparent lg:bg-none lg:p-0 lg:py-[30px] lg:shadow-none ${
                    on ? "border-blue bg-gradient-to-br from-blue/15 to-card shadow-[0_0_28px_-6px_#6fb2ff]" : "border-line bg-card"
                  }`}
                >
                  <span className={`absolute left-[18px] top-[18px] grid h-[46px] w-[46px] place-items-center rounded-full border border-line lg:hidden ${on ? "bg-blue/30 shadow-[0_0_18px_rgba(111,178,255,.5)]" : "bg-blue/15"}`}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-blue stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">{st.i}</svg>
                  </span>
                  <div className={`transition-opacity duration-500 lg:row-start-1 ${on ? "opacity-100" : "opacity-60"} ${left ? "lg:col-start-1 lg:pr-[245px] lg:text-right" : "lg:col-start-3 lg:pl-[245px]"}`}>
                    <h3 className="font-serif text-[22px] font-medium text-blue lg:text-[30px]">{st.t}</h3>
                    <span className={`block text-xs font-semibold tracking-wide lg:hidden ${on ? "text-ruby" : "text-mute"}`}>{st.r}{on && "  ·  Now"}</span>
                    <b className="mt-1 block text-sm font-semibold text-blue lg:mt-2 lg:text-white">{st.tag}</b>
                    <p className={`text-base text-mute lg:max-w-[24em] ${left ? "lg:ml-auto" : ""}`}>{st.p}</p>
                  </div>
                  {i === 1 && (
                    <div className="hidden lg:col-start-2 lg:row-start-1 lg:grid lg:place-items-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-blue bg-bg shadow-[0_0_22px_-4px_#6fb2ff]">
                        <svg viewBox="0 0 24 24" className="h-[26px] w-[26px] fill-ruby drop-shadow-[0_0_6px_rgba(255,77,94,.6)]"><path d={HEART} /></svg>
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}