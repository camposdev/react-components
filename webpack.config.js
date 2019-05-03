const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
					loader: 'babel-loader',
				},
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
      },
    ],
  },
  resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'umd',
  },
};
