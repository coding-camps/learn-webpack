const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            { //在webpack.base.js中增加file-loader用来解析文件
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
        ],
    },
    resolve: {
        //配置免后缀的文件类型
        extensions: ['.js', '.jsx', '.vue', '.css', '.less', '.scss'],
        //为全路径配置缩写@
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            // js 自动关联到 html
            chunks: ['index'],
        }),

    ],
}
