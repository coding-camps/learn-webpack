const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//引入抽取css样式插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(base, {
    mode: "production",
    devtool:'source-map',//独立配置源码映射
    module: {
        rules: [
			{ //用来编译css代码 // loader 执行顺序 自下而上
				test:/\.css$/,
				use:[
                    //抽取css样式文件
					MiniCssExtractPlugin.loader,
					{loader:'css-loader'},
                    // 解决样式兼容性
					{loader:'postcss-loader'},
				]
			},
			{ //用来编译sass代码
				test:/\.scss$/,
				use:[
                    //抽取css样式文件
					MiniCssExtractPlugin.loader,
					{loader:'css-loader'},
					{loader:'postcss-loader'},
					{loader:'sass-loader'}
				]
			}
        ],
    },
    output: {
        filename: '[name]-[hash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        }),
    ],
});
