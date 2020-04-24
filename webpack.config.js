const path = require('path'); // relative path
const parentDir = path.join(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.bundle.js',
        publicPath: ''
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ],
    module:{
        rules:
        [
            {
            loader: 'babel-loader',
            test: '/\.(js|jsx)$/',
            exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            root: parentDir + 'src/',
           '@stylesheet': path.resolve((__dirname, '..', 'src', 'assets', 'stylesheet'))
        }
    }
}