module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['.'],
        alias: {
          '@assets': './assets',
          '@hooks': './core/hooks',
          '@services': './core/services',
          '@components': './core/components',
          '@contexts': './core/contexts',
          '@interfaces': './core/interfaces'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
