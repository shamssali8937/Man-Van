import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 78],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        // Cache static assets (images, fonts, brand, icons) for 1 year immutable
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff|woff2|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/furniture-collection-and-delivery",
        destination: "/services/furniture-removals-and-delivery",
        permanent: true,
      },
      {
        source: "/services/furniture-dismantling-and-assembly",
        destination: "/services/furniture-assembly-and-dismantling",
        permanent: true,
      },
      {
        source: "/services/waste-removal-and-property-clearance",
        destination: "/services/waste-removal-and-disposal",
        permanent: true,
      },
      {
        source: "/areas/:city/furniture-collection-and-delivery",
        destination: "/areas/:city/furniture-removals-and-delivery",
        permanent: true,
      },
      {
        source: "/areas/:city/furniture-dismantling-and-assembly",
        destination: "/areas/:city/furniture-assembly-and-dismantling",
        permanent: true,
      },
      {
        source: "/areas/:city/waste-removal-and-property-clearance",
        destination: "/areas/:city/waste-removal-and-disposal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
