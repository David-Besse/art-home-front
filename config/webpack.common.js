const path = require("path");
const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-flow").config({
  path: path.join(paths.root),
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: [
    // SCSS
    paths.src + "/styles/index.scss",
    // JS
    paths.src + "/index.js",
  ],
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "js/[name].[contenthash].js",
  },
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: "",
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: "Art@home",
      favicon: paths.assets + "/favicon.ico",
      template: paths.assets + "/index.html",
    }),

    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      // SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
};
