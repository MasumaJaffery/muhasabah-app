"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// All GSAP + ScrollTrigger animations live here. Elements opt in with data attributes:
// data-hero, data-hero-img, data-float, data-parallax, data-fade, data-stagger > data-item, data-words, data-clock
export default function Animations() {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const once = (trigger) => ({ trigger, start: "top 85%", once: true });
      const q = gsap.utils.toArray;

      gsap.from("[data-hero]", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, clearProps: "all" });
      gsap.from("[data-hero-img]", { y: 70, scale: 0.9, opacity: 0, duration: 1.2, delay: 0.2, ease: "power3.out", clearProps: "all" });
      gsap.to("[data-float]", { y: -14, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
      if (document.querySelector("[data-parallax]"))
        gsap.to("[data-parallax]", { yPercent: 35, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });

      q("[data-fade]").forEach((el) => gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", clearProps: "all", scrollTrigger: once(el) }));
      q("[data-stagger]").forEach((g) =>
        gsap.from(g.querySelectorAll("[data-item]"), { y: 50, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", clearProps: "all", scrollTrigger: { trigger: g, start: "top 80%", once: true } })
      );
      q("[data-clock]").forEach((el) =>
        gsap.from(el, { scale: 0.7, rotation: -40, opacity: 0, duration: 1.4, ease: "back.out(1.4)", clearProps: "all", scrollTrigger: once(el) })
      );
      q("[data-words]").forEach((el) =>
        gsap.fromTo(el.querySelectorAll("[data-word]"), { opacity: 0.15 }, { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 55%", scrub: true } })
      );
    });
    return () => mm.revert();
  }, [pathname]);
  return null;
}
