module.exports = {
  presets: ['@babel/preset-env', 'vue'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
