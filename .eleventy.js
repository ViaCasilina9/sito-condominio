const path = require("node:path");

function toDate(value) {
  if (value instanceof Date) {
    return value;
  }

  return new Date(`${value}T00:00:00`);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("avvisi", function (collectionApi) {
    return collectionApi.getFilteredByTag("avvisi").sort(function (a, b) {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("dateReadable", function (value) {
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(toDate(value));
  });

  eleventyConfig.addFilter("htmlDateString", function (value) {
    return toDate(value).toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("sortByDateDesc", function (items) {
    return [...items].sort(function (a, b) {
      return toDate(b.date) - toDate(a.date);
    });
  });

  eleventyConfig.addFilter("relativeUrl", function (url, fromUrl = "/") {
    if (!url) {
      return "";
    }

    if (/^(https?:)?\/\//.test(url) || url.startsWith("mailto:") || url.startsWith("#")) {
      return url;
    }

    const target = url.startsWith("/") ? url : `/${url}`;
    const from = fromUrl.endsWith("/") ? fromUrl : `${path.posix.dirname(fromUrl)}/`;
    let relative = path.posix.relative(from, target);

    if (!relative) {
      relative = ".";
    }

    if (url.endsWith("/") && relative !== "." && !relative.endsWith("/")) {
      relative += "/";
    }

    return relative;
  });

  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
