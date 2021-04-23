const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /(\.js|\.jsx)$/,
                enforce: 'pre',
                use: ['source-map-loader']
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                test: /\.s?css$/
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};