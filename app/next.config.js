/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "custom",
    path: "/",
  },
  // pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;

// module.exports = {
//   pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
// };
