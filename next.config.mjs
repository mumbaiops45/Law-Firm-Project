
// // // /** @type {import('next').NextConfig} */
// // // const nextConfig = {
// // //   // output:"export",
// // //   reactCompiler: true, // keep your existing option
// // //   images: {
// // //     domains: ["randomuser.me"], // <-- Add this line
// // //   },
// // // };

// // // export default nextConfig;


// // /**
// // //  *  @type {import('next').NextConfig} */
// // // const nextConfig = {
// // //   output:"export",
// // //   reactCompiler: true,
// // //   images: {
// // //     remotePatterns: [
// // //       {
// // //         protocol: "https",
// // //         hostname: "randomuser.me",
// // //       },
// // //     ],
// // //   },
// // // };

// // // export default nextConfig;


// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   // output: "export",

// //   // Required for Netlify static hosting
// //   images: {
// //     unoptimized: true,
// //   },

// //   // Prevents refresh 404 error on Netlify
// //   trailingSlash: true,
// // };

// // export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: "export", // REQUIRED for static export

//   images: {
//     unoptimized: true, // Required for Netlify
//   },

//   trailingSlash: true, // Prevent refresh 404 on Netlify
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;