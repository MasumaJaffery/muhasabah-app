import Doc from "@/components/Doc";
import { EMAIL } from "@/lib/site";
export const metadata = { title: "About us" };
export default function About() {
  return (
    <Doc title="About Muhasabah" sub="Daily self-reflection, sabr and shukr">
      <p className="!text-[20px] !text-white">Muhasabah means taking account of yourself. It is the habit of pausing at the end of the day to ask what went well, what could be better, and where you want to go next.</p>
      <h3>Why we built it</h3>
      <p>Most of us want to be more consistent with our goals, our remembrance and our reflection, but life gets busy. We built Muhasabah to make that daily check-in simple, calm and easy to keep.</p>
      <h3>What the app offers</h3>
      <ul><li>A daily checklist and focus goals, with a streak that shows your consistency.</li><li>A journal for your reflections.</li><li>A tasbeeh counter with Tasbeeh-e-Zahra and your own azkar.</li><li>Qibla direction, Hijri dates and gentle reminders.</li></ul>
      <h3>Our approach</h3>
      <p>We keep the app focused and free of clutter. It should help you build a quiet routine, not add pressure. Your reflections are yours, and we respect your privacy.</p>
      <h3>Developed by</h3>
      <p>Muhasabah is developed by <b className="text-white">Syeda Masuma Jaffery</b>. All rights reserved by <a href="https://icodedreams.me" target="_blank" rel="noopener">icodedreams</a>.</p>
      <h3>Get in touch</h3>
      <p>We would love to hear your feedback and ideas. Use our <a href="/contact">contact page</a> or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </Doc>
  );
}
