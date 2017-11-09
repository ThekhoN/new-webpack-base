const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(paths.SRC, "index.html"),
  filename: "index.html",
  inject: "body"
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: "style.css",
  disable: false
});

const base = {
  entry: path.join(paths.JS, "app.js"),
  output: {
    path: paths.DIST,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          use: {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        })
      }
    ]
  }
};

const developmentConfig = {
  devtool: "cheap-module-inline-source-map",
  devServer: {
    contentBase: paths.SRC,
    hot: true,
    inline: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = Object.assign({}, base, developmentConfig);
