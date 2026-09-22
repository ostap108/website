module.exports = function (eleventyConfig) {
  // Copy these files straight through to the finished site, untouched.
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Turns the article's date into a Ukrainian-readable form, e.g. "1 лютого 2026".
  const months = ["січня","лютого","березня","квітня","травня","червня",
    "липня","серпня","вересня","жовтня","листопада","грудня"];
  eleventyConfig.addFilter("readableDate", (d) =>
    `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`);
  // Machine-readable date for the <time> tag.
  eleventyConfig.addFilter("isoDate", (d) => d.toISOString().slice(0, 10));

  return {
    dir: {
      input: "src",          // where you write
      output: "_site",       // where the finished website is built (never edit by hand)
      includes: "_includes", // where the shared layout lives
      data: "_data"          // where site-wide values live
    },

    // IMPORTANT: while the site lives at ostap108.github.io/website/ this must
    // be "/website/". The moment you connect ostapstepaniuk.com, change this
    // line to "/" and push again. That one change is the only edit the custom
    // domain needs here.
    pathPrefix: "/website/"
  };
};
