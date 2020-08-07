const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist")
    },
    devtool: 'source-map'
}