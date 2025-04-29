import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://192.168.110.1:3000' // your PC's local IP
  ],
};

export default nextConfig;
