const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
  entry: {
    script: "./src/script.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public"),
    // publicPath: "public/",
    // assetModuleFilename: "fonts/[name].[ext]",
  },
  //stats: 'errors-only',
  stats: {
    assets: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "siavash",
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["script"],
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          publicPath: "./img/",
          outputPath: "img",
          filename: "[name][ext]",
        },
      },
    ],
  },
};
module.exports = (env, { mode }) => {
  let isDevelopment = mode == "development";

  config.module.rules.push({
    test: /\.css$/,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
    ],
  });
  config.output.filename = isDevelopment
    ? "[name].bundle.js"
    : "[name].[contenthash].bundle.js";

  if (isDevelopment) {
    config.devServer = {
      static: {
        directory: path.join(__dirname, "./public"),
      },
      open: true,
      port: 9000,
    };
    config.plugins.push(
        new ESLintPlugin()
    )
  }

  if (!isDevelopment) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "styles/[name].[contenthash].css",
      })
    );
    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        // options: {
        //   presets: ['@babel/preset-env']
        // }
      },
    });
  }
  return config;
};
