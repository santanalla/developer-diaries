module.exports = function (eleventyConfig) {
  markdownTemplateEngine: "njk";
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
