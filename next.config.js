/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
  },
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/files/',
            outputPath: 'static/files/',
          },
        },
      ],
    });

    return config;
  },
  
  
}

const withNextIntl = require('next-intl/plugin')(
  './i18n.js'
);

module.exports = withNextIntl(nextConfig)

