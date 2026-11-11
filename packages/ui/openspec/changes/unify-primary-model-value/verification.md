验证结果：

- 两端受影响组件现有测试及新增默认值 demo、普通 v-model 测试通过（分别运行完整组件范围与修复后的新增用例）。
- Cedar Table pagination.modelValue/defaultValue 联动回归通过。
- 两端 typecheck 通过。
- 两端修改范围 eslint 通过。
- Tabs 同源 13 文件对与共享基础 68 运行时文件对检查通过。
- Maple 全库 lint 已执行；Code.vue 和 provider-lifecycle.spec.js 存在本次范围外 lint 错误。新增文件格式问题已修正。
- Input 同源脚本执行失败：checks/input-same-source.mjs 的 canonical 调用未定义 normalize；未修改本次范围外脚本。
