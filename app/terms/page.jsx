import Doc from "@/components/Doc";
import { EMAIL } from "@/lib/site";
export const metadata = { title: "Terms and conditions" };
export default function Terms() {
  return (
    <Doc title="Terms and conditions" sub="Last updated: October 27, 2026">
      <p>By downloading or using Muhasabah you agree to these terms. If you do not agree, please do not use the app.</p>
      <h3>Your account</h3>
      <p>You can sign in with email or Google. You are responsible for keeping your login details secure and for all activity under your account. Please provide accurate information and tell us if you think your account has been misused.</p>
      <h3>Use of the app</h3>
      <p>The app is provided for personal, non-commercial use as a tool for reflection and remembrance. You agree not to misuse it, copy or resell it, reverse engineer it, or try to interfere with how it or its servers work.</p>
      <h3>Religious content</h3>
      <p>Quotes, azkar and affirmations are shared for reflection. The app is not a substitute for qualified religious guidance. Please verify rulings with a scholar you trust.</p>
      <h3>Qibla and reminders</h3>
      <p>Qibla direction and reminders depend on your device’s sensors, settings and network. Please confirm important times and directions by other means.</p>
      <h3>Your content</h3>
      <p>You own the entries you write. You allow us to store and process them only to provide the app to you, as described in our privacy policy.</p>
      <h3>Availability and changes</h3>
      <p>We may update, change or stop parts of the app at any time. We may suspend accounts that break these terms.</p>
      <h3>No warranty</h3>
      <p>The app is provided “as is”. We do not promise it will be error-free or always available, and we are not liable for losses arising from its use, to the extent permitted by law.</p>
      <h3>Changes to these terms</h3>
      <p>We may update these terms. Continued use after changes means you accept them.</p>
      <h3>Contact</h3>
      <p>Questions? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </Doc>
  );
}
