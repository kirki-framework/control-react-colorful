const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  externals: {
    jquery: "jQuery",
    wp: "wp",
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./control.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Extracts CSS into separate files
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  entry: {
    control: "./src/control.js",
		preview: "./src/preview.js",
  },
  output: {
    filename: "[name].js",
  },
  devtool: "source-map",
};
