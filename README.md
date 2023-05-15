# force-strict-loader
自定义loader，为每个JS文件启用严格模式，在每个JS文件头部添加'use strict'

1. 初始化
```javascript
module.exports = function(content) {
  const useStrictPrefix = '\'use strict\';\n\n'
  return useStrictPrefix + content;
}
```

2. 启用缓存
```javascript
module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }
  const useStrictPrefix = '\'use strict\';\n\n';
  return useStrict + content;
}
```

当输入的文件和其依赖，没有发生变化时，使用缓存，不再重新转换
提升打包速度

3. 启用source-map
作用：在浏览器开发者工具中，查看源码。
优点：便于排查问题
缺点：降低构建速度，增加输出文件体积
用途：用于开发环境

安装@1.4.0并使用 `loader-utils` 
loader-utils 是webpack工具库，用于开发和调试loader