import Doc from "@/components/Doc";
import { EMAIL } from "@/lib/site";
export const metadata = { title: "Delete your account" };
export default function DeleteAccount() {
  const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
  return (
    <Doc title="Delete your account" sub="Muhasabah by icodedreams">
      <p>This page explains how to ask for your Muhasabah account and the data linked to it to be deleted. You do not need to be signed in to use this page.</p>

      <h3>Option 1: Delete inside the app</h3>
      <ol>
        <li>Open the Settings inside App.</li>
        <li>You will see <b className="text-white">Cloud Sync</b> card, where your name and email are shown.</li>
        <li>Tap <b className="text-white">Delete</b> and confirm.</li>
      </ol>
      <p>Your account and the content synced to the cloud are deleted right away. Use <b className="text-white">Sign Out</b> instead if you only want to log out and keep your data.</p>

      <h3>Option 2: Request deletion by email</h3>
      <p>If you can no longer open the app, or you have uninstalled it, you can ask us to delete your account:</p>
      <ol>
        <li>Send an email to {mail} with the subject <b className="text-white">“Delete my Muhasabah account”</b>.</li>
        <li>Send it from the email address you used to sign up (or tell us which Google account you signed in with), so we can confirm the account is yours.</li>
        <li>We will confirm by reply and delete your account and data within 30 days.</li>
      </ol>
      <p>You can also use the <a href="/contact">contact form</a> and write “account deletion” as the subject.</p>

      <h3>What is deleted</h3>
      <ul>
        <li>Your sign-in details: email address, name and profile photo.</li>
        <li>Everything you created in the app: daily goals, checklist progress, journal entries, tasbeeh counts, streaks and settings.</li>
        <li>The copy of this data stored in our cloud service.</li>
      </ul>

      <h3>What is kept</h3>
      <p>We do not keep your content after deletion. Routine backups held by our cloud provider are overwritten automatically and are cleared within 30 days of deletion. We may keep the email you sent us asking for deletion, only as long as needed to show the request was handled.</p>

      <h3>Delete only some of your data</h3>
      <p>You can edit or delete individual journal entries, goals and counters inside the app at any time, without deleting your account.</p>

      <h3>Questions</h3>
      <p>Write to {mail} and we will help. See also our <a href="/privacy">privacy policy</a>.</p>
    </Doc>
  );
}