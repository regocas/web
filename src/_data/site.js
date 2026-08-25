export default {
  name: "Fundación Martina",
  // TODO: replace with the real production domain once it's live.
  url: "https://fundacionmartina.org",
  // TODO: flip to true once a real donation link is configured, and the
  // "Donar ahora" / "Colabora con la investigación" buttons and the donate
  // banner section will show up again automatically (nav, hero, homepage).
  donationsEnabled: false,
  year: 2026,
  tagline: {
    es: [
      { word: "Investigamos", color: "teal" },
      { word: "Apoyamos", color: "rose" },
      { word: "Transformamos", color: "blue" },
    ],
    en: [
      { word: "We research", color: "teal" },
      { word: "We support", color: "rose" },
      { word: "We transform", color: "blue" },
    ],
    gl: [
      { word: "Investigamos", color: "teal" },
      { word: "Apoiamos", color: "rose" },
      { word: "Transformamos", color: "blue" },
    ],
  },
  locales: [
    { code: "es", label: "Español" },
    { code: "gl", label: "Galego" },
    { code: "en", label: "English" },
  ],
};
