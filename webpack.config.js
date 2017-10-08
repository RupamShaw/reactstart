const path = require('path');
module.exports = {

    //define entry point
    entry: './src/index.js',

    //defin output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['react','es2015']
                    }
                  }

            },
            {
              test    : /\.css$/,
              use     : [
                "style-loader",
                "css-loader"

              ]
            }
        ] //loaders
    }


};
