import Image from "next/image";
import PlayButton from "./PlayButton";

const chips = ["Free", "Hijri calendar", "Dark theme", "Tasbeeh & Qibla"];
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-16">
      <div data-parallax aria-hidden="true" lang="ar" className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-arabic text-[clamp(150px,28vw,380px)] leading-none text-blue opacity-[.07]">مُحاسَبة</div>
      <div className="relative mx-auto grid max-w-[1080px] items-center gap-10 px-6 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <div data-hero className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-mute">
            <b lang="ar" className="font-arabic text-xl font-normal text-blue">مُحاسَبة</b>Daily self-reflection
          </div>
          <h1 data-hero className="bg-gradient-to-b from-white from-45% to-blue bg-clip-text font-serif text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.1] tracking-tight text-transparent">Take stock of your day, one small step at a time.</h1>
          <p data-hero className="my-5 max-w-[29em] text-[19px] text-mute">Muhasabah is a daily companion for self-accountability. Check in with your goals, write your reflections, and keep sabr and shukr close.</p>
          <div data-hero className="mb-7 flex flex-wrap gap-2.5">
            {chips.map((c) => <span key={c} className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-mute">{c}</span>)}
          </div>
          <div data-hero><PlayButton /></div>
        </div>
        <div className="order-first mx-auto max-w-[340px] md:order-none md:max-w-[460px]">
          <div data-hero-img><div data-float><Image src="/mockup.png" alt="Muhasabah splash screen and tasbeeh counter" width={562} height={600} priority className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,.45)]" /></div></div>
        </div>
      </div>
    </section>
  );
}
