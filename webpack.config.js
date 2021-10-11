const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      noSources: false,
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
