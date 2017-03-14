const path = require('path');
const { transpileIfTypescript } = require('ts-jest/dist/transpile-if-ts');

class TsJestTransformer {
  process(src, filename, config, options) {
    // pass through custom Jest TS config global to ts-jest
    global.__TS_CONFIG__ = config.globals.__TS_CONFIG__;
    return transpileIfTypescript(`${filename}.ts`, src);
  }
}

module.exports = TsJestTransformer;
