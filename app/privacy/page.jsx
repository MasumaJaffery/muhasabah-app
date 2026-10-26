import Doc from "@/components/Doc";
import { EMAIL } from "@/lib/site";
export const metadata = { title: "Privacy policy" };
export default function Privacy() {
  const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
  return (
    <Doc title="Privacy policy" sub="Last updated: October 27, 2026">
      <p>This policy explains what information the Muhasabah app (“the app”, “we”) collects, how it is used, and the choices you have. Muhasabah is operated by icodedreams.</p>
      <h3>Information we collect</h3>
      <ul><li><b className="text-white">Account information:</b> when you sign in with email or Google, we receive your email address, and your name and profile photo if your Google account provides them.</li><li><b className="text-white">Content you create:</b> your daily goals and checklist progress, journal entries, tasbeeh counts, streaks and app settings.</li></ul>
      <h3>How we use it</h3>
      <p>We use this information only to run the app: to sign you in, to save your content and sync it to your account, to show your progress, and to send reminders you have set.</p>
      <h3>Where your data is stored</h3>
      <p>Your account and content are stored in the cloud using Google Firebase services. Google acts as our service provider and processes this data on our behalf under its own terms and privacy policy. Data is encrypted while it travels between your device and these services.</p>
      <h3>Device permissions</h3>
      <ul><li><b className="text-white">Notifications:</b> to send the reminders you set.</li><li><b className="text-white">Location and sensors:</b> only if you use the Qibla feature, to work out the direction of prayer.</li></ul>
      <h3>Sharing</h3>
      <p>We do not sell your personal information. We do not show ads and we do not use third-party analytics or advertising tools. We share information only with the service providers needed to run the app (such as Google Firebase) or if the law requires it.</p>
      <h3>Retention</h3>
      <p>We keep your information while your account is active. If you delete your account, we delete your account and content from our systems.</p>
      <h3>Deleting your account and data</h3>
      <p>You can edit or delete your entries in the app at any time. To delete your account and all associated data, email us at {mail} from the email you signed up with, and we will delete it within a reasonable time.</p>
      <h3>Children</h3>
      <p>The app is not directed at children under 13, and we do not knowingly collect their personal information. If you believe a child has given us information, contact us and we will delete it.</p>
      <h3>Changes</h3>
      <p>We may update this policy. We will change the date above when we do.</p>
      <h3>Contact</h3>
      <p>Questions about this policy? Email {mail}.</p>
    </Doc>
  );
}
