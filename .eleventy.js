const inputDirectory = 'src';
const passThroughPaths = ['assets', 'library']

module.exports = function (eleventyConfig) {
  passThroughPaths.forEach(path => {
    eleventyConfig.addPassthroughCopy(`${inputDirectory}/${path}`);
  })

  eleventyConfig.addWatchTarget(`${inputDirectory}/assets/style.css`)


  eleventyConfig.addFilter("secondNameSort", function(people) {
    if (people) {
      return people.sort(function(a, b){
        let aSplit = a.name.split(' ');
        let bSplit = b.name.split(' ');
        
        let aName = aSplit[1] ? aSplit[1] : aSplit[0];
        let bName = bSplit[1] ? bSplit[1] : bSplit[0];
  
        if(aName < bName) { 
          return -1; 
        }
  
        if(aName > bName) { 
          return 1; 
        }
  
        return 0;
      }) 
    } else {
      return false
    }
  });
  

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