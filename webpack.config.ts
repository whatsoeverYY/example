const webpack = require('webpack')
const { ModuleFederationPlugin } = webpack.container
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new ModuleFederationPlugin({
            name: 'sub1',
            filename: 'remoteEntrySub1.js',
            exposes: {
                './time': './src/utils/time.ts',
                './date': './src/utils/date.ts'
            },
        }),
        new HTMLWebpackPlugin()
    ],
    optimization: {
        minimize: false
    },
    devServer: {
      port: 8081
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
}