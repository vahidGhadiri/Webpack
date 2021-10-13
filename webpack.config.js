const PATH = require('path')


const webpackConfig = {
    entry: "./src/index.js",
    output: {
        path: PATH.resolve(__dirname, 'build'),
        filename: "bundle.js",
    }
}

module.exports = webpackConfig

