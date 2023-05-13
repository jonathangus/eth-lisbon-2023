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
};
