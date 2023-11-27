/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./i18n.js');

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
  }
}

module.exports = withNextIntl(nextConfig)

