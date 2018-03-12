// 引入webpack
var webpack = require('webpack');
// 使用压缩插件
var UglifyJs = webpack.optimize.UglifyJsPlugin;

module.exports = {
	// 入口文件
	entry: './static/router/router.js',
	// 发布文件
	output: {
		filename: './pack/app.js'
	},
	// 配置模块
	module: {
		// 加载机
		loaders: [
			// css 加载机
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// 图片加载机
			{
				test: /\.{jpg|png|gif|jpeg}$/,
				// 大于4kb的异步加载
				loader: 'url-loader?limit=4096'
			}
		]
	},
	// 压缩js
	plugins: [
		new UglifyJs()
	]
}