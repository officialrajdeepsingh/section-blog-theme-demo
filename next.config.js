/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
  readingTime: true,
});
 
module.exports = withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
      
        hostname: 'img.shields.io',
      },
    ],
  },
}); 
