import Link from "next/link";
import Image from "next/image";
import { PLAY } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[19px] font-bold">
          <Image src="/app-icon.png" alt="" width={36} height={36} className="rounded-[10px]" />
          Muhasabah
        </Link>
        <nav className="flex items-center gap-7 text-[15px] font-medium text-mute">
          <Link href="/#how" className="hidden hover:text-white md:block">How it works</Link>
          <Link href="/#features" className="hidden hover:text-white md:block">Features</Link>
          <a href={PLAY} className="rounded-full bg-white px-[18px] py-2 font-semibold text-bg shadow-[0_0_24px_-4px_rgba(111,178,255,.7)]">Get the app</a>
        </nav>
      </div>
    </header>
  );
}
