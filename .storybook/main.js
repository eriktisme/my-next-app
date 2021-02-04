const { join } = require('path')

const toPath = (path) => join(process.cwd(), path)

module.exports = {
  stories: [
    '../apps/**/*.stories.mdx',
    '../apps/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: true,
      },
    },
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@apps/sidebar': toPath('./apps/sidebar'),
          '@packages/utils': toPath('./packages/utils'),
        },
      },
    }
  },
}
