const webpack = require('webpack');
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  const fallback = config.resolve.fallback || {};
  config.resolve.fallback = {};
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  );
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
  ];
  config.resolve.fallback = fallback;
  config.ignoreWarnings = [/Failed to parse source map/];
  return config;
};
