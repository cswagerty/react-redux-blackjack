const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/app/index.js', 'webpack-hot-middleware/client']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'React/Redux Blackjack' // creates index.html in dist
    }),
    new CleanWebpackPlugin(['dist']),  //blows away /dist folder on build
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader?cacheDirectory=true"
        },
        {
            test: /\.test\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-jest"
        },
        {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(jpg|jpeg|png|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]'
                    }
                }
            ]
        }
    ]
  },
  devtool: 'source-map'
}
