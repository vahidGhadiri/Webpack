const webpack = require('webpack')

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_APP_BASE_URL': JSON.stringify("https://core.ashname.adanic.me/development/test")
        })
    ]
}