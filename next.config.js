/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = (phase, { defaultConfig }) => {
  const config = withBundleAnalyzer({
    ...defaultConfig,
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code loads resources from the `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
  });

  return config;
};
