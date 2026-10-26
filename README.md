# Muhasabah website (Next.js + Tailwind CSS + GSAP)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- Set your Play Store package id, email and Formspree URL in `lib/site.js`.
- Scroll animations: `components/Animations.jsx` (GSAP + ScrollTrigger, driven by `data-*` attributes; disabled for reduced-motion users).
- Routes: `/`, `/about`, `/contact`, `/privacy`, `/terms` (use `/privacy` as the Play Console privacy policy URL once deployed).
