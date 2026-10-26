import Image from "next/image";
import PlayButton from "./PlayButton";
export default function Cta() {
  return (
    <section className="bg-bg2 py-[88px] text-center">
      <div data-stagger className="mx-auto max-w-[1080px] px-6">
        <Image data-item src="/app-icon.png" alt="Muhasabah app icon" width={96} height={96} className="mx-auto mb-6 rounded-[26px] shadow-[0_0_30px_rgba(111,178,255,.3)]" />
        <h2 data-item className="mx-auto max-w-[15em] font-serif text-[clamp(32px,4.2vw,50px)] font-medium leading-[1.1]">Start your muhasabah today</h2>
        <p data-item className="mx-auto mb-8 mt-3.5 text-mute">Free to download on Android.</p>
        <div data-item><PlayButton /></div>
      </div>
    </section>
  );
}
