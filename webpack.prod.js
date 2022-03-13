const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = merge(config, {
	mode: 'production',
	plugins: [
		new CompressionPlugin({
			test: /\.js$|\.css$|\.html$/,
		}),
	],
});
