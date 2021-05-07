/* eslint-disable */

const path = require('path');
const withAntdLess = require('next-plugin-antd-less');

// next.config.js object
module.exports = withAntdLess({
  lessVarsFilePath: './src/styles/antd.less',
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
    modules: {
      mode: 'local',
    },
  },
  webpack: (config) => {
    config.resolve.alias['@@'] = path.resolve(__dirname);
    config.resolve.alias['@components'] = path.resolve(path.join(__dirname, 'src/components'));
    config.resolve.alias['@styles'] = path.resolve(path.join(__dirname, 'src/styles'));
    config.resolve.alias['@utils'] = path.resolve(path.join(__dirname, 'src/utils'));
    return config;
  },
});
