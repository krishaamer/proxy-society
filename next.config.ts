import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only previously cleared Commons image paths can reach the optimizer.
    // Broader wildcard Wikimedia sources create avoidable attack surface.
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/commons/thumb/1/13/**", search: "" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/commons/thumb/9/9c/**", search: "" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/commons/thumb/4/46/**", search: "" }
    ],
    // The 105px images need only small 1x/2x derivatives.
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [64, 96, 128, 256],
    qualities: [60],
    formats: ["image/webp"],
    minimumCacheTTL: 86400,
    maximumRedirects: 0,
    dangerouslyAllowSVG: false
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
        { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; frame-ancestors 'none'; upgrade-insecure-requests" }
      ]
    }];
  }
};

export default nextConfig;
