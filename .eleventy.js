const inputDirectory = 'src';
const passThroughPaths = ['assets', 'library']

module.exports = function (eleventyConfig) {
  passThroughPaths.forEach(path => {
    eleventyConfig.addPassthroughCopy(`${inputDirectory}/${path}`);
  })

  eleventyConfig.addWatchTarget(`${inputDirectory}/assets/style.css`)

  eleventyConfig.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md'
  ]);

  return {
    markdownTemplateEngine: "njk",

    dir: {
      input: `${inputDirectory}`,
      includes: "_includes",
      data: "_data", 
      output: "_site"
    }
  };
}; 