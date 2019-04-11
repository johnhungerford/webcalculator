const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'app/js'),
        filename: "webcalculator.js"
    },
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
    module: {
        rules: [
            {
                test: /test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'app'),
      publicPath: '/js/',
      compress: true,
      watchContentBase: true,
      port: 9000
    }
  }