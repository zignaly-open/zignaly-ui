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
  fileLoaderRule.exclude = /\.svg$/i;
  console.log('config', config.module.rules);
  config.module.rules.push({
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  });
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] },
    use: ["@svgr/webpack"],
  });
  return config;
};
