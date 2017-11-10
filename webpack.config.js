const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

/*
const env = {
  dev: process.env.NODE_ENV
};

const devServerConfig = {
  contentBase: paths.SRC,
  // Need historyApiFallback to be able to refresh on dynamic route
  historyApiFallback: { disableDotRule: true }
};
*/

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

// used to split specified vendor script
const commonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  midChunks: Infinity,
  filename: "[name].[hash].js"
});

const base = {
  entry: {
    app: path.join(paths.JS, "app.js"),
    vendor: ["react", "react-dom", "react-router"]
  },

  output: {
    path: paths.DIST,
    // filename: "bundle.js",
    filename: "[name].[hash].js"
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
        ],
        query: {
          cacheDirectory: true
        }
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
    commonsChunkPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = Object.assign({}, base, developmentConfig);
