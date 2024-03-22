//To set configurations of next.js codefiles:

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname : "images.pexels.com",
            }
        ]
    }
}

module.exports = nextConfig
