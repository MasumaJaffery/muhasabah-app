import Link from "next/link";
import Image from "next/image";
import { PLAY } from "@/lib/site";

const L = "text-[15px] text-mute hover:text-white";
export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg pb-8 pt-14">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-[19px] font-bold"><Image src="/app-icon.png" alt="" width={36} height={36} className="rounded-[10px]" />Muhasabah</Link>
            <p className="mt-3 max-w-[22em] text-[15px] text-mute">Daily self-reflection, sabr and shukr.</p>
          </div>
          <div>
            <h4 className="mb-3 text-[15px] font-semibold">Explore</h4>
            <ul className="grid gap-2">
              <li><Link className={L} href="/#features">Features</Link></li>
              <li><Link className={L} href="/about">About us</Link></li>
              <li><Link className={L} href="/#how">How it works</Link></li>
              <li><a className={L} href={PLAY}>Google Play</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-[15px] font-semibold">Legal</h4>
            <ul className="grid gap-2">
              <li><Link className={L} href="/privacy">Privacy policy</Link></li>
              <li><Link className={L} href="/terms">Terms and conditions</Link></li>
              <li><Link className={L} href="/delete-account">Delete account</Link></li>
              <li><Link className={L} href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-5 text-sm text-mute">
          © 2026 Muhasabah. All rights reserved by <a href="https://icodedreams.me" target="_blank" rel="noopener" className="text-blue">icodedreams</a>.
        </div>
      </div>
    </footer>
  );
}
