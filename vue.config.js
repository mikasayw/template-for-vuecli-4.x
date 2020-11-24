/*
 * @Description: file content
 * @Author: wei.Yin
 * @Date: 2020-11-23 14:03:06
 * @LastEditors: wei.Yin
 * @LastEditTime: 2020-11-24 10:40:42
 */
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const IS_PROD = process.env.NODE_ENV !== 'development';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const resolve = (dir) => path.join(__dirname, dir); // 给public路径添加别名

module.exports = {
	publicPath: './', // base目录，等同于router.js的base字段
	assetsDir: 'static', // 打包后静态资源目录，注意public文件下目录（别名）配置，index.html的icon路径
	productionSourceMap: false, // 生产环境map文件
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		sourceMap: false,
	},
	devServer: {
		open: process.platform === 'darwin',
		// host: 'localhost',
		// port: 8080,
		// hotOnly: false,
		// https: false,
		// proxy: {
		// 	'/apis': {
		// 		target: 'http://192.168.0.183:8001/api', //目标主机
		// 		ws: true, //代理的WebSockets
		// 		changeOrigin: true, //需要虚拟主机站点
		// 		pathRewrite: {
		// 			'^/apis': '',
		// 		},
		// 	},
		// },
		// before: (app) => {
		// 	// 执行前操作，可以在此添加mock数据。与proxy代理不可并用
		// 	app.get('/api/test', function(req, res) {
		// 		let data = require('./src/mock/test.json');
		// 		res.json(data);
		// 	});
		// },
	},
	chainWebpack: (config) => {
		// 添加别名（src默认为@，不用再次添加）
		// config.resolve.alias.set('@pub', resolve('public')); // 设置public别名为@pub
		config.optimization.splitChunks({
			chunks: 'all',
			minSize: 300000, // 依赖包超过300000bit将被单独打包
			maxInitialRequests: Infinity,
			automaticNameDelimiter: '-',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
					name(module) {
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/
						)[1];
						return `vendor-${packageName.replace('@', '')}`;
					},
					priority: 10,
				},
				// 抽离自定义工具库
				common: {
					name: 'chunk-common',
					minSize: 1024, // 将引用模块分离成新代码文件的最小体积
					minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
					priority: -10,
					reuseExistingChunk: true,
				},
			},
		});
		config.when(IS_PROD, (config) => {
			config.optimization.minimizer('terser').tap((args) => {
				Object.assign(args[0].terserOptions.compress, {
					// 生产模式 console.log 去除
					warnings: false, // 默认 false
					// drop_console:  ,
					// drop_debugger: true, // 默认也是true
					pure_funcs: ['console.log'],
				});
				return args;
			});
		});
	},
	configureWebpack: (config) => {
		config.plugins.push(new BundleAnalyzerPlugin());
		if (IS_PROD) {
			config.mode = 'production';
			// 为生产环境修改配置...
			if (process.env.npm_package_openGizp) {
				config.plugins.push(
					new CompressionPlugin({
						algorithm: 'gzip',
						test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
						threshold: 10240, // 归档需要进行压缩的文件大小最小值
						minRatio: 0.8, // 最小压缩比达到0.8的时候会被压缩
						deleteOriginalAssets: false, // 是否删除原文件
					})
				);
			}
		} else {
			// 为开发环境修改配置...
		}
	},
};
