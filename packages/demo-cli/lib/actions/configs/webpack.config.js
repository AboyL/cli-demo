const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cwd = process.cwd();
module.exports = {
  mode: "development",
  entry:'./src/index.js',
  output: {
    path: path.join(cwd, "dist"),
    filename: "[name].js",
    publicPath:'/'
  },
  devtool: false,
  resolve:{
    alias:{
      '@':path.join(cwd,'src')
    }
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets:['@babel/preset-env','@babel/preset-react']
        },
        exclude:/node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
};