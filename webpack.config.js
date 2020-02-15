const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const PUBLIC_DIR = 'public'
module.exports = {
	devServer: {
		contentBase: path.join(__dirname, PUBLIC_DIR),
		hot: true,
		port: 3333
	},
	entry: path.resolve(__dirname, 'src', 'main.js'),
	mode: 'development',
	output: {
		filename: '[name]-[hash].js',
		path: path.resolve(__dirname, 'dist')
	}, 
	module: {
		rules: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['@babel/preset-env']
			},
			test: /\.js$/
		}, {
			exclude: '/node_modules/',
			test: /\.css$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader', options: { modules: true } }
			]}
		]
	},
	target: 'web',
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname,PUBLIC_DIR, 'index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}