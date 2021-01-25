module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015']
            }
        }]
    }
};