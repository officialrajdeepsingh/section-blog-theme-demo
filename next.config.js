/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
});
 
module.exports = withNextra({
  output: 'export',
  basePath: "/section-blog-theme-demo",
  images:{
    unoptimized: true
  }
}); 
