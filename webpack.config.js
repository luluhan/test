// import { Configuration } from 'webpack';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


/**
 * @type { Configuration }
 */
const config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 告诉服务器静态文件的位置
    compress: true, // 对所有服务启用gzip压缩
    hot: true,
    port: 8080,
    inline: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 对同一个模块使用多个loader，注意顺序
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '菠萝菠萝',
      template: './src/index.html',
    }),
  ],
  mode: 'production',
}

module.exports = config;