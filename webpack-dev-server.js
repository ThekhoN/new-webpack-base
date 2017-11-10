/*
Webpack Dev Server
only runs on local env
*/
// const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");
const path = require("path");

// set dev env for running webpack dev server
const env = {
  dev: process.env.NODE_ENV
};

const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

const devServerConfig = {
  contentBase: path.SRC,
  historyApiFallback: true, // to enable refresh on dynamic route
  stats: { colors: true }
};

const server = new webpackDevServer(
  webpack(webpackDevConfig(env)),
  devServerConfig
);

server.listen(3000, "localhost");
