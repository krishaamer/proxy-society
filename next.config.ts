import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Civic portraits ship as tiny first-party WebP assets in public/portraits.
    // No remote host is authorized for on-demand image proxying.
    remotePatterns: [],
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
