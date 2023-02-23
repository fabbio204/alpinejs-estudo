const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const glob = require("glob");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
  srcWindows: path.join(process.cwd(), 'src' , '*').replaceAll("\\","\\\\")
};

glob(PATHS.srcWindows, {nodir: true, windowsPathsNoEscape: true} , function (err, files) {
  if (err) {
    console.log('Ocorreu um erro', er);
  } else {
    console.log('Arquivos encontrados', files);
  }
})


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

  plugins: [
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin({
       paths: () => glob.sync(PATHS.srcWindows,{nodir: true, windowsPathsNoEscape: true}),
    }),
  ],
};