const PATH = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const webpackConfig = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: PATH.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: "/ "
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/
        }, {
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            test: /\.css$/
        }, {
            use: "file-loader",
            test: /\.(png|jpeg|jpg|gif)$/
        }]
    }
}

module.exports = webpackConfig

