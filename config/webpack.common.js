const path = require("path");
const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-flow");

// Chargement des variables d'environnement de manière plus résiliente
let env = {};
try {
  const result = dotenv.config({
    path: path.join(paths.root),
    silent: true // Ne pas échouer si aucun fichier n'est trouvé
  });
  
  if (result.parsed) {
    env = result.parsed;
  }
} catch (error) {
  console.warn("Attention: Fichiers .env non trouvés - utilisation des variables d'environnement du système");
}

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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "vm": require.resolve("vm-browserify"),
      "string_decoder": require.resolve("string_decoder/"),
      "events": require.resolve("events/")
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
    new webpack.ProvidePlugin({
      process: 'process',
      Buffer: ['buffer', 'Buffer'],
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

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
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
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              sassOptions: {
                outputStyle: 'compressed',
                includePaths: ['node_modules'],
                quietDeps: true // Supprime les avertissements des dépendances comme Bootstrap
              },
              sourceMap: true
            }
          }
        ],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
};
