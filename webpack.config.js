const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
					loader: 'babel-loader',
				},
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        exclude: /node_modules/,
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
		extensions: ['.scss', '.js', '.jsx', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'umd',
  },
};
