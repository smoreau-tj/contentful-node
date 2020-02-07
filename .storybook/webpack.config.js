module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")]
    }
  });
  // config.plugins.push(
  //   new StatsWriterPlugin({
  //     filename: "stats.json"
  //   })
  // );
  config.resolve.extensions.push(".js", "jsx");

  return config;
};
