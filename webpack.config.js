const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    // Add `.ts` e `.tsx` para typescript
    extensions: [".js", ".scss"],
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [

            MiniCssExtractPlugin.loader,

            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
};
