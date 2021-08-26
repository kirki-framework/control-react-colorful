module.exports = {
    externals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};