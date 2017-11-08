const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: "style.css",
  disable: false
});

module.exports = {
  entry: path.join(paths.JS, "app.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          user: {
            loader: "css-loader",
            options: {
              modules: false,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    }),
    ExtractTextPluginConfig
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
  //   devServer: {
  //     contentBase: paths.SRC
  //   }
};
