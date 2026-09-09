# 实施任务

- [x] Badge 独立复制实现、红白默认色、六方位、RTL、文档及配对测试
- [x] AutoComplete shouldOpen/filterOption 双端行为与文档
- [x] 统一公共 Props 类型导出、必选/默认项与发布入口消费方验证
- [x] Progress / Switch / Card / Rate 尺寸及实现子集文档
- [x] popupContainer、十二方位/cover 及 Trigger 消费链
- [x] 事件、status、outline、orientation / direction
- [x] Card / Affix 独立复制实现及卸载清理
- [x] Form.scrollToError=start/end、DOM 顺序与 offsetY
- [x] Upload 名称、文件模型、读取/移除钩子与 Blob URL 所有权
- [x] 明确日期与其他平台能力边界，生成全库 Props 名称集合及后续分组规划
- [x] 双端迁移文档及 major changeset；不自动发布

## 不纳入“已完全一致”的能力

日期模型/格式和 week/quarter、Table 平台职责、Upload 网络请求、Trigger 端扩展仍按实际能力保留。
整库 Slots/Expose 不因 Props 名称审计而宣称完全一致。详细事实与后续设计顺序见 design-ui/audits/api-alignment-plan.md 第 12 节。

## Progress / Switch 后续实施

- [x] 两端 percent 为 0～100，数字字符串与小数精度，边界、槽参数、ARIA 与示例迁移
- [x] Switch circle/round/line/md3 独立复制，统一 Props/Events/Slots/样式
- [x] Promise 拦截、只读/禁用、键盘、过期异步结果清理的配对测试
- [x] 全库回归、实际构建、公共消费类型与源码复制检查：Cedar 424 项、Maple 1153 项通过；27 组源码一致性通过
