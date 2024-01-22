module.exports = function override(config, env) {
  config.resolve.fallback = {
    fs: false,
    child_process: false,
  };
  return config;
};
