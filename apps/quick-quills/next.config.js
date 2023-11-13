//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },

  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/en',
        destination: '/en/home',
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNextIntl,
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
