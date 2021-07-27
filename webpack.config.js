const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.resolve(__dirname, 'src/hugpagination.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hugpagination.js',
    library: {
      name: 'HugPaginationJS',
      type: 'umd'
    },
    libraryExport: 'default',
    publicPath: '/',
  },
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
};
