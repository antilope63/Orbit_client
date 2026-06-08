import type { NextConfig } from "next";

const orbitUserApiOrigin =
  process.env.ORBIT_USER_API_ORIGIN ?? "https://www.takeitgoout.com";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${orbitUserApiOrigin.replace(/\/$/, "")}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
