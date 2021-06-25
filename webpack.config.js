const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Development',
  //   }),
  // ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'HugPagination.js',
    library: {
      name: 'HugPagination',
      type: 'umd'
    },
    // clean: true,
    publicPath: '/',
  },
};
