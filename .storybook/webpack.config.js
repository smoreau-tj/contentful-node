module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loader: require.resolve("babel-loader"),
    option: {
      presets: [require.resolve("babel-preset-react-app")]
    }
  });

  config.resolve.extensions.push(".js", "jsx");
  return config;
};
