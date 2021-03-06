const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [{loader: "babel-loader"}]
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(?:jpg|jpeg|png|gif|ico)$/i,
            type: "asset/resource"
        }, {
            test: /\.(woff(2)?,eot|ttf|otf|svg)$/,
            type: "asset/inline"
        }]
    },
    devServer: {
        port: 7070,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "..", "./public/index.html")})
    ]
}