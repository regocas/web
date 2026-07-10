export default {
  eleventyComputed: {
    permalink: (data) => `/gl/novas/${data.page.fileSlug}/`,
  },
};
