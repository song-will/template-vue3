const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/',
    },
    optimization: {
        minimize: true
    }
})