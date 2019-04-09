const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'app/js'),
        filename: "webcalculator.js"
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      devServer: {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        port: 9000
      }
  }