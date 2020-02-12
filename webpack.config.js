const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true&timeout=1000",
    "./entry.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/dist'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
