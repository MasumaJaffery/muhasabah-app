"use client";
import { useState } from "react";
import Doc from "@/components/Doc";
import { FORM } from "@/lib/site";

const field = "w-full rounded-[14px] border border-line bg-card px-[15px] py-[13px] text-base text-white outline-none focus:border-blue focus:ring-4 focus:ring-blue/20";
export default function Contact() {
  const [state, setState] = useState("idle"); // idle | sending | done | error
  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(FORM, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("failed");
      f.reset();
      setState("done");
    } catch {
      setState("error");
    }
  }
  return (
    <Doc title="Contact us" sub="Questions, feedback or support">
      <p>We would love to hear from you. Send us a message about the app, a problem you ran into, an idea, or a request to delete your account.</p>
      {state === "done" ? (
        <div className="mt-7 rounded-[20px] border border-blue bg-card p-[26px] shadow-[0_0_30px_-10px_#6fb2ff]">
          <h3 className="!mt-0">Thank you!</h3>
          <p className="mb-4">Your message has been sent. We will get back to you soon.</p>
          <button onClick={() => setState("idle")} className="font-medium !text-blue">Send another message</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-7 grid gap-4">
          <label className="grid gap-1.5 text-[15px] font-medium text-white">Your name<input name="name" autoComplete="name" required className={field} /></label>
          <label className="grid gap-1.5 text-[15px] font-medium text-white">Your email<input type="email" name="email" autoComplete="email" required className={field} /></label>
          <label className="grid gap-1.5 text-[15px] font-medium text-white">Subject<input name="subject" placeholder="Feedback, support, account deletion..." className={field} /></label>
          <label className="grid gap-1.5 text-[15px] font-medium text-white">Message<textarea name="message" rows={6} required className={`${field} resize-y`} /></label>
          <button type="submit" disabled={state === "sending"} className="justify-self-start rounded-2xl bg-white px-6 py-[13px] text-[17px] font-semibold text-bg shadow-[0_12px_40px_-12px_rgba(111,178,255,.7)] transition hover:-translate-y-0.5 disabled:opacity-60">{state === "sending" ? "Sending..." : "Send message"}</button>
          <p className="!text-sm">We will reply to the email address you enter.</p>
          {state === "error" && <div className="rounded-[20px] border border-ruby bg-card p-[22px]"><p>Sorry, your message could not be sent. Please try again in a moment.</p></div>}
        </form>
      )}
    </Doc>
  );
}
