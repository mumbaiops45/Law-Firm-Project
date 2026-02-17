
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output:"export",
//   reactCompiler: true, // keep your existing option
//   images: {
//     domains: ["randomuser.me"], // <-- Add this line
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
