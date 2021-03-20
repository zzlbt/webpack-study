/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			// ! 对于以less为结尾的模块引入可以通过以下规则进行处理
			{
				test: /\.less$/i,
				use: [
					{
						//Inject CSS into the DOM.
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						// ! 我知道了 less-loader是并不是跟entry入口中的依赖，所以webpack不会去编译，而是只拿来用
						loader: path.resolve(__dirname, './less-loader/dist/cjs.js'),
						options: {
							lessOptions: {
								strictMath: true,
							},
							// test: 'hello less-loader',
						},
					},
				],
			},
		],
	},
	plugins: [
		// 配置html模板
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
	],
}
