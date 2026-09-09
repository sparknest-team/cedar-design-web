# 决策

1. Card / Affix / Badge 两端保留独立源码。复制后只允许命名空间、导入路径、安装入口适配；行为差异要回到源实现解决。
2. Badge 默认 status=danger，红底白字，显式 status=default 仍可选中性灰。两端都支持六个 position。RTL 通过平台配置适配获得，两端渲染实现保持一致。
3. status 是组件状态；StepStatus 保留流程语义，不能把 process 改成 primary。过程值可在独立变更中使用更清楚的 waiting/in-progress/completed/error，但本批不做无行为收益的破坏性改名。
4. AutoComplete.shouldOpen(inputValue) 控制是否允许打开，filterOption(inputValue, option) 控制哪些选项保留。两端使用同名 API；filterOption=false 支持服务端筛选。禁用和无结果时不可打开。
5. 其余尺寸、Form、浮层和导出契约遵循已批准方案。最终文档须准确区分已实施和待实施。
