/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = (phase) => {
  // next.config.js object
  return {
    webpack: (config) => {
      config.resolve.alias['@@'] = path.resolve(__dirname);
      config.resolve.alias['@components'] = path.resolve(path.join(__dirname, 'src/components'));
      config.resolve.alias['@styles'] = path.resolve(path.join(__dirname, 'src/styles'));
      config.resolve.alias['@utils'] = path.resolve(path.join(__dirname, 'src/utils'));
      return config;
    },
  };
};
