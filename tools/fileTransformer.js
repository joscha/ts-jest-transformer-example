const path = require('path');
const { transpileIfTypescript } = require('ts-jest/dist/transpile-if-ts');

module.exports = {
  process(src, filename, config, options) {
    const source = 'export default ' + JSON.stringify(path.basename(filename)) + ';';
    return transpileIfTypescript(`${filename}.ts`, source);
  },

  getCacheKey() {
    return Math.random()+'';
  }
};