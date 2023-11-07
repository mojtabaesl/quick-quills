//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
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
