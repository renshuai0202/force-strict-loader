var loaderUtils = require("loader-utils");

module.exports = function(content, sourceMap) {
  // 2. 开启缓存
  if (this.cacheable) {
    this.cacheable();
  }
  // 3. 获取options
  const options = loaderUtils.getOptions(this) || {};
  console.log('options', options);
  // 应用source-map
  if (options.sourceMap && sourceMap) {
    // ...
    // 假装实现了
    console.log('force-strict-loader假装已使用source-map');
  }
  // 1. 为每个JS开起严格模式
  const useStrictPrefix = '\'use strict\';\n\n';
  return useStrictPrefix + content;
}
