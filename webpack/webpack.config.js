const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = (env, argv) => {
	const isDev = argv.mode === 'development' ? true : false;

	return {
		entry: './src/js/main.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: isDev ? 'js/[name].js' : 'js/bundle.min.js',
			clean: true,
		},
		devServer: {
			host: 'localhost',
			open: true,
			port: 3300,
			//overlay: true, // 빌드시 에러나 경고를 브라우져 화면에 표시한다.
		},
		module: {
			rules: [
				// test: /\.(jpe?g|png|gif|svg)$/i,
				// name: 'images/[name].[ext]?[hash]',
				{
					test: /\.(sa|sc|c)ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						// 'css-loader',
						{
							loader: "css-loader",
							options: { url: false, sourceMap: false }
						},
						'sass-loader'
					],
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanAfterEveryBuildPatterns: ['build']
			}),
			new HtmlPlugin({
				minify: {
					collapseWhitespace: isDev ? false : true,
				},
				hash: isDev ? false : true,
				template: './src/index.html',
			}),
			new CopyWebpackPlugin({
				patterns: [
					{ from: 'src/images', to: 'images' },
					{ from: 'src/font', to: 'font' }
				],
			}),
			new MiniCssExtractPlugin({
				filename: isDev ? 'css/[name].css' : 'css/bundle.min.css',
				chunkFilename: isDev ? 'css/[id].css' : 'css/[id].min.css',
			}),
		]
	};
}
