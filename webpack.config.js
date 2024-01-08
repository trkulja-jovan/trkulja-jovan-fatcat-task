import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const webpackConfig = {
    mode: 'development',
    entry: './src/main.tsx',
    devtool: 'inline-source-map',
    output: {
        filename: './dist/bundle.js',
        clean: true,
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['', '.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};

export default webpackConfig;
