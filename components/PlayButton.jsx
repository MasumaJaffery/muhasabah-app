import { PLAY } from "@/lib/site";
export default function PlayButton({ className = "" }) {
  return (
    <a href={PLAY} aria-label="Get Muhasabah on Google Play" className={`inline-flex items-center gap-3 rounded-2xl bg-white py-[13px] pl-[18px] pr-6 font-semibold text-bg shadow-[0_12px_40px_-12px_rgba(111,178,255,.7)] transition hover:-translate-y-0.5 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path fill="#00d3ff" d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7z" />
        <path fill="#ffce00" d="M16.9 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.4l-3.9 2.2z" />
        <path fill="#ff3a44" d="M17 15.2L13.6 12 3.6 22c.4.4 1 .4 1.7.1l11.7-6.9" />
        <path fill="#00f076" d="M17 8.8L5.3 2c-.7-.4-1.3-.3-1.7.1l10 9.9z" />
      </svg>
      <span className="text-[19px] leading-[1.15]"><small className="block text-[11px] font-medium leading-none opacity-70">Get it on</small>Google Play</span>
    </a>
  );
}
