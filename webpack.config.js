var css = require("!raw-loader!sass-loader!./file.scss");
// returns compiled css code from file.scss, resolves Sass imports
var css = require("!css-loader!sass-loader!./file.scss");
// returns compiled css code from file.scss, resolves Sass and CSS imports and url(...)s

module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};

console.log('you are in webpack config');
