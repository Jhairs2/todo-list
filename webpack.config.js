const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', 
    
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo-list',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ]
}

