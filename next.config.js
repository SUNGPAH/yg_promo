/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */


  rewrites: async () => [
    {
      source: "/public/myfile.html",
      destination: "/pages/api/myfile.js",
    },
  ],

  

  
}

module.exports = nextConfig
