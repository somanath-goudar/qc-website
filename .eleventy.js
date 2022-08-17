module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css")
  eleventyConfig.addPassthroughCopy("./src/assets")
  eleventyConfig.addPassthroughCopy("./src/admin")

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
