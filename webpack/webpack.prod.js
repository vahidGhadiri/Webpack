const webpack = require('webpack')

module.exports = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.REACT_APP_BASE_URL": JSON.stringify("https://core.ashname.adanic.me/production/test")
        })
    ]
}