module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/build/js/',
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
      }
  }