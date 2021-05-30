module.exports = function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@api': './src/services/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@images': './src/assets/images',
            '@navigation': './src/services/navigation',
            '@store': './src/store',
            '@views': './src/views',
            '@types': './src/types'
          }
        }
      ]
    ]
  };
};
