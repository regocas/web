export default {
  name: "Fundación Martina",
  email: "info@lafundacionmartina.org",
  url: "https://lafundacionmartina.org",
  // TODO: flip to true once a real donation link is configured, and the
  // "Donar ahora" / "Colabora con la investigación" buttons and the donate
  // banner section will show up again automatically (nav, hero, homepage).
  donationsEnabled: false,
  // Legal identity shown on the "Aviso legal y privacidad" page
  // (src/<lang>/aviso-legal.md / legal-notice.md), whose text follows the
  // lawyer-reviewed model "Textos legales de la web" (Oct 2026).
  // TODO: fill in before launch — the bracketed values render as-is.
  legal: {
    fullName: "Fundación Martina: Impulso Vital para las Ataxias y Enfermedades Raras",
    taxId: "G93843597",
    registry: "[nº de inscripción]",
    deedDate: "2026-09-29",
    notary: "Raúl Muñoz Maestre",
    protocol: "7707/2026",
    // Address for exercising data-protection rights.
    privacyEmail: "info@lafundacionmartina.org",
    // Data Protection Officer: null = still to decide (renders a placeholder),
    // false = not appointed, or a string with the DPO's name and contact.
    dpo: false,
    // Town whose courts have jurisdiction (Aviso legal §8).
    courts: "A Coruña",
  },
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
