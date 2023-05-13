module.exports = {
  reactStrictMode: false,
  transpilePackages: ['ui', 'web3-config'],
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        // ...
        ...config.resolve,
        fallback: {
          // 👇️👇️👇️ add this 👇️👇️👇️
          fs: false,
        },
      },
    };
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
