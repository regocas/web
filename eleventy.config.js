import { EleventyI18nPlugin } from "@11ty/eleventy";

const LOCALE_MAP = { es: "es-ES", gl: "gl-ES", en: "en-US" };

function toDate(value) {
  if (value instanceof Date) return value;
  return new Date(`${value}T00:00:00`);
}

function toISO(value) {
  return toDate(value).toISOString().slice(0, 10);
}

// Merges a locale's value over the Spanish base, falling back to Spanish
// wherever the locale is missing a key, an array is empty, or a string is blank.
function mergeWithFallback(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) && override.length ? override : base;
  }
  if (base && typeof base === "object") {
    const result = {};
    for (const key of Object.keys(base)) {
      result[key] =
        override && key in override
          ? mergeWithFallback(base[key], override[key])
          : base[key];
    }
    return result;
  }
  return override !== undefined && override !== null && override !== "" ? override : base;
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "es",
    errorMode: "allow-fallback",
  });

  eleventyConfig.addFilter("dateLong", (value, lang) =>
    toDate(value).toLocaleDateString(LOCALE_MAP[lang] || "es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  eleventyConfig.addFilter("dateShort", (value, lang) =>
    toDate(value).toLocaleDateString(LOCALE_MAP[lang] || "es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );

  eleventyConfig.addFilter("dateBadgeDay", (value) => toDate(value).getDate());

  eleventyConfig.addFilter("dateBadgeMonth", (value, lang) =>
    toDate(value)
      .toLocaleDateString(LOCALE_MAP[lang] || "es-ES", { month: "short" })
      .replace(".", "")
  );

  eleventyConfig.addFilter("sortByDate", (list) =>
    [...(list || [])].sort((a, b) => toISO(a.date).localeCompare(toISO(b.date)))
  );

  eleventyConfig.addFilter("nextUpcoming", (list) => {
    const today = toISO(new Date());
    return (
      [...(list || [])]
        .filter((e) => toISO(e.date) >= today)
        .sort((a, b) => toISO(a.date).localeCompare(toISO(b.date)))[0] || null
    );
  });

  eleventyConfig.addCollection("newsEs", (api) =>
    api.getFilteredByGlob("src/es/news/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("newsEn", (api) =>
    api.getFilteredByGlob("src/en/news/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("newsGl", (api) =>
    api.getFilteredByGlob("src/gl/news/*.md").sort((a, b) => b.date - a.date)
  );

  const NEWS_COLLECTION_BY_LANG = {
    es: "newsEs",
    en: "newsEn",
    gl: "newsGl",
  };

  eleventyConfig.addFilter("translatedUrl", (translationKey, targetLang, collections) => {
    if (!translationKey) return null;
    const list = collections[NEWS_COLLECTION_BY_LANG[targetLang]] || [];
    const match = list.find((item) => item.data.translationKey === translationKey);
    return match ? match.url : null;
  });

  // Resolves a { es, en, gl } data object for one locale, filling any gaps
  // (missing key, empty array, blank string) from the Spanish version.
  eleventyConfig.addFilter("withFallback", (value, lang) => {
    if (lang === "es") return value.es;
    return mergeWithFallback(value.es, value[lang] || {});
  });

  eleventyConfig.addFilter("joinWords", (words, sep) =>
    words.map((w) => w.word).join(sep || " · ")
  );

  return {
    // Set by CI to "/<repo-name>/" for GitHub Pages project sites without a
    // custom domain. Left as "/" for local dev and for a custom-domain deploy.
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
