/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
});
 
module.exports = withNextra({
  output: 'export',
  basePath: "https://officialrajdeepsingh.github.io/section-blog-theme-demo",
  images:{
    unoptimized: true
  }
}); 
