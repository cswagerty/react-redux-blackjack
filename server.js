const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const webpackHotMiddleware = require('webpack-hot-middleware')

const SERVER_PORT_NUMBER = 3000

const app = express()
const compiler = webpack(config)

// Attach the dev middleware to the compiler and the server
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}))

// attach the hot middleware to the compile and the server
app.use(webpackHotMiddleware(compiler))

app.listen(SERVER_PORT_NUMBER, () => {
	console.log(`Node server started at http://localhost:${SERVER_PORT_NUMBER}`)
})
