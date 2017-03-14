const path = require('path');
const { transpileIfTypescript } = require('ts-jest/dist/transpile-if-ts');
const { getJestConfig } = require('ts-jest/dist/utils');

// pass through custom Jest TS config to ts-jest
// TODO: find a better way to get this
// is process.env.npm_package_jest_globals___TS_CONFIG__ better?
global.__TS_CONFIG__ = getJestConfig(path.join(__dirname, '../')).config.globals.__TS_CONFIG__;

class TsJestTransformer {
  process(src, filename) {
    return transpileIfTypescript(`${filename}.ts`, src);
  }
}

module.exports = TsJestTransformer;
