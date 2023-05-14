module.exports = function(content) {
  // 为每个JS开起严格模式
  const useStrictPrefix = '\'use strict\';\n\n';
  return useStrictPrefix + content;
}