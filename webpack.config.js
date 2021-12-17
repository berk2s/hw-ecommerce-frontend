const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.(s(a|c)ss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
};