module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  transform: {
    '^.+\\.(js)?$': 'babel-jest',
    '^.+\\.(vue)$': 'vue-jest',
  },
  transformIgnorePatterns: [
    'node_modules/',
  ],
  snapshotSerializers: ['jest-serializer-vue'],
};
