const path = require("path")
const webpack = require("webpack")

function getConfig(target) {
  return {
    mode: "development",
    entry: [
      target === "web" &&
        "webpack-hot-middleware/client?reload=true&timeout=1000",
      path.resolve(__dirname, "entry.js")
    ].filter(Boolean),
    output: {
      path: path.resolve(__dirname, "dist", target),
      filename: "bundle.js",
      publicPath: "/"
    },
    plugins: [
      target === "web" && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
  }
}

// works!
// module.exports = [getConfig("web")]

// Does not work :(
module.exports = [getConfig("web"), getConfig("node")]
