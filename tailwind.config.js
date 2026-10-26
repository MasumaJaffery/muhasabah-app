module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { bg: "#040914", bg2: "#08122a", card: "rgba(20,38,78,.45)", line: "rgba(120,170,255,.16)", mute: "#a3b5da", blue: "#6fb2ff", ruby: "#ff4d5e" },
    fontFamily: { sans: ["Figtree", "system-ui", "sans-serif"], serif: ["Newsreader", "Georgia", "serif"], arabic: ["Amiri", "serif"] },
  } },
  plugins: [],
};
