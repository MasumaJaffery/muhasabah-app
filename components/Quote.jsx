const TEXT = "Oh Allah what did he find who lost You, and what did he lose who found You.";
export default function Quote() {
  return (
    <section className="pb-[112px] pt-10 text-center">
      <div className="mx-auto max-w-[820px] px-6">
        <svg viewBox="0 0 24 24" className="mx-auto mb-7 w-[46px] drop-shadow-[0_0_14px_rgba(255,77,94,.7)]" aria-hidden="true"><path fill="#ff4d5e" d="M12 21C5 16 2 12.5 2 8.5 2 5.5 4.3 3.5 7 3.5c1.9 0 3.7 1 5 2.8 1.3-1.8 3.1-2.8 5-2.8 2.7 0 5 2 5 5C22 12.5 19 16 12 21z" /></svg>
        <p data-words className="mb-5 font-serif text-[clamp(26px,4vw,42px)] font-medium leading-[1.3]">
          {TEXT.split(" ").map((w, i) => <span key={i} data-word className="inline-block">{w}&nbsp;</span>)}
        </p>
        <div data-fade className="text-base text-blue">Imam Hussain (AS), Dua Arafah</div>
      </div>
    </section>
  );
}
