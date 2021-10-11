const webpack = require('webpack');

module.exports = {
  entry: './static/js/app.js',
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      noSources: false,
      filename: '[file].map'
    }),
  ],
  optimization: {
    minimize: true,
  },
  output: {
	path: `${__dirname}/dist`,
	filename: 'bundle.js',
  },
};
