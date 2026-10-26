import Link from "next/link";
export default function Doc({ title, sub, children }) {
  return (
    <main className="mx-auto max-w-[760px] px-6 pb-24 pt-14">
      <Link href="/" className="font-medium text-blue">← Back to home</Link>
      <h1 data-fade className="mt-6 font-serif text-[clamp(36px,5vw,52px)] font-medium leading-[1.1]">{title}</h1>
      <p className="mb-9 mt-2 text-mute">{sub}</p>
      <div className="doc" data-fade>{children}</div>
    </main>
  );
}
