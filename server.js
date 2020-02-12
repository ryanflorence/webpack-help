const express = require("express")

const app = express()

const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const config = require("./webpack.config.js")

const compiler = webpack(config)
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: "/"
  })
)
app.use(webpackHotMiddleware(compiler))

app.get("*", (req, res) => {
  res.send(`
    <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `)
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))
