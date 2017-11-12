module.exports = {

    //define entry point
    entry: './src/one.js',

    //define output point
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ] //loaders
    } //module

};
