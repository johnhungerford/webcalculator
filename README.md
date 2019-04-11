# webcalculator

A simple javascript calculator, based on an example by ahfarmer: https://ahfarmer.github.io/calculator/. This was developed as an exercise to learn React; it was also an occasion to get some experience with webpack.

You can run the calculator by opening `app/index.html` in you browser.

Alternatively, you can run it on a local server (development mode) by using:

`npm start`

and opening http://localhost:9000 in a browser. It is configured to run in hot mode, meaning that any changes to the source code or the static files (css, html) will trigger a rebuild and restart.

This will require installing dependencies, which you can do with:

`npm install`

To do a complete build in production mode, which will generate `webcalculator.js` in `app/js/`, use:

`npm run build`
