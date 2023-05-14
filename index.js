module.exports = function(content) {
  // 2. 开启缓存
  if (this.cacheable) {
    this.cacheable();
  }
  // 1. 为每个JS开起严格模式
  const useStrictPrefix = '\'use strict\';\n\n';
  return useStrictPrefix + content;
}
