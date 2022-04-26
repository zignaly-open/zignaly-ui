const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = async ({ config }) => {
  config.resolve = Object.assign(config.resolve, {
    alias: {
      assets: resolve("../src/assets"),
      components: resolve("../src/components"),
      hooks: resolve("../src/hooks"),
      utils: resolve("../src/utils"),
    },
  });

  // Overwrite svg rule to use svgr
  const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
  fileLoaderRule.exclude = /svg$/;
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  return config;
};
