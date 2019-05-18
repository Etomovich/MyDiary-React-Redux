const webpack = require('webpack');
const path = require('path');
// React v.16 uses some newer JS functionality, so to ensure everything
// works across all browsers, we're adding babel-polyfill here.
require('babel-polyfill');

module.exports = {
    entry: [
        './src/index'
    ],
    devServer: {
        port: 3000,
        contentBase: './dist',
        hot: true,
        filename: 'bundle.js',
        historyApiFallback: true
      },
      output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ],
        extensions: ['*', '.js', '.jsx', '.scss'],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};
