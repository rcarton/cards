var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const express = require('express')
const proxy = require('express-http-proxy')


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});

const app = express()

// Static files
app.use(express.static('dist'));

// React hot loader proxy
app.use('/', proxy('localhost:3000'))

app.listen(8000, () => {
  console.log('Started listening on port 8000')
})
