# Cedar 文档代码示例插件（内部源码）

本目录是 Cedar Vue 文档站的内部源码模块，不是独立 npm 包，不单独安装、构建或发布。VuePress 配置直接导入 `./plugin-code-block/src/node`，源码与测试沿用现有目录。

依赖统一由 `packages/ui/package.json` 声明，模块和编译配置由文档站构建链负责。VuePress / Vite 中的插件标识为 `cedar:code-block-vue`，此标识不是 npm 包名。

## 上游来源

基于 [bfehub/vmi](https://github.com/bfehub/vmi) 的 `@bfehub/vuepress-plugin-code-block` 1.60.3，原作者 haiweilian，原包声明 MIT 许可。上游 CHANGELOG 保留历史名称；版权与许可声明见本目录 LICENSE。

本地已维护源码资产、缓存、开发更新及生产生命周期等修改；后续直接维护本目录源码。不得因为取消 npm 包形态而删除上游版权与许可信息。
