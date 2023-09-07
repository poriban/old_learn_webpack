const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        },
      },
      {                
        test: [/.css$|.scss$/],                
        use:[                    
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [ require('autoprefixer') ] },
          }
        ]
      },
      {
        test: [/.png$|.jpg$|.gif$|.svg$/],
        use:[
          {
            loader: 'file-loader',
            options: {
            name: '[name].[ext]',
            outputPath: 'assets/images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash].css'
    }),
    new CleanWebpackPlugin(),
  ],
}