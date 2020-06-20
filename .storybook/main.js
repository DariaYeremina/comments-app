const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 
            'css-loader', 
            {
              loader: 'sass-loader',
              options: {
                prependData: '@import "src/styles/_variables.scss";'
              }
            }
          ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
