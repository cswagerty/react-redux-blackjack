const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/index.js', 'webpack-hot-middleware/client']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'REACT BOILERPLATE' // creates index.html in dist
    }),
    new CleanWebpackPlugin(['dist']),  //blows away /dist folder on build,
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
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
  devServer: {
    contentBase: './dist',
    port: 8888
  },
  devtool: 'inline-source-map'
}
