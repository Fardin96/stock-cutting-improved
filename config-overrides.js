module.exports = function override(config, env) {
  config.resolve.fallback = {
    // conflicts with webpack/react-scripts v5
    fs: false,
    child_process: false,
  };
  return config;
};
