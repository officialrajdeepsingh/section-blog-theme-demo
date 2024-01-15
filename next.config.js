/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  output: 'export',
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
});
 
module.exports = withNextra(); 
