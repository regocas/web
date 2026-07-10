export default {
  eleventyComputed: {
    permalink: (data) => `/es/noticias/${data.page.fileSlug}/`,
  },
};
