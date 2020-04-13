// config file for deployment
const path = require("path");

module.exports = {
  transpileDependencies: ["vue-echarts", "resize-detector"],
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/graphql": {
        target: "http://localhost:5000",
      },
    },
  },
};
