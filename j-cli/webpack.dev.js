const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',//内联配置源码映射
    module: {
        rules: [
            { //用来编译css代码 // loader 执行顺序 自下而上
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    // 解决样式兼容性
                    {loader: 'postcss-loader'},
                ]
            },
            { //用来编译sass代码
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ],
    },
    devServer: {
        static: [
            path.resolve(__dirname, 'dist'),
            path.resolve(__dirname, 'public'),
        ],
        host: '0.0.0.0',
        port: 3080,
        open: true,
    }
})
