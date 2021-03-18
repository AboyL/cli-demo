const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./configs/webpack.config')
const port = 8333
const HOST = process.env.HOST || '0.0.0.0';

module.exports = () => {
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler);
  devServer.listen(port, HOST, () => {
    console.log('启动成功')
  })
}