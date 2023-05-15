var loaderUtils = require("loader-utils");

module.exports = function(content) {
  // 2. 开启缓存
  if (this.cacheable) {
    this.cacheable();
  }
  // 3. 获取options
  const options = loaderUtils.getOptions(this) || {};
  console.log('options', options);
  // 1. 为每个JS开起严格模式
  const useStrictPrefix = '\'use strict\';\n\n';
  return useStrictPrefix + content;
}
