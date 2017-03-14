const path = require('path');
const { transpileIfTypescript } = require('ts-jest/dist/transpile-if-ts');
const { getJestConfig } = require('ts-jest/dist/utils');

// pass through custom Jest TS config to ts-jest
global.__TS_CONFIG__ = getJestConfig(path.join(__dirname, '../')).config.globals.__TS_CONFIG__;

module.exports = {
  process(src, filename, config, options) {
    const source = 'export default ' + JSON.stringify(path.basename(filename)) + ';';
    return transpileIfTypescript(`${filename}.ts`, source);
  },
};
