import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export const metadata = {
  title: { default: "Muhasabah – Daily self-reflection, Sabr & Shukr", template: "%s | Muhasabah" },
  description: "Muhasabah is a daily companion for self-accountability: checklist, journal, tasbeeh counter, Qibla and reminders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Figtree:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Animations />
      </body>
    </html>
  );
}
