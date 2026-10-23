---
permalink: /components/tree-select/
---

# TreeSelect

可以对树形结构数据进行选择。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### TreeSelect Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| type | 参数类型 | string | -      |

`disabled`、`readonly` 支持字段显式设置及 Form / FormItem 继承。弹层确认期间不可编辑；校验失败保留草稿，表单重置关闭弹层并丢弃未完成提交。

### TreeSelect Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### TreeSelect Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { TreeSelectProps } from '@cedarjs/ui'
```

### Form 字段展示与确认

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。


### 原位编辑与键盘优先级

`click` / `dblclick` 与 Form 继承同一编辑规则。悬浮或聚焦显示编辑图标，点击图标直接编辑；disabled、readonly、readPretty 不显示编辑入口。面板内点击仅修改草稿。

面板打开时，方向键导航可见且未禁用的节点，左右键展开/收起或移动到子/父节点，Home/End 定位首末节点；Enter 选择/勾选当前节点，不能选择的分支则展开或收起。搜索优先激活匹配节点，多选复用树的勾选规则。Esc 先关闭面板并保留草稿、恢复输入焦点；面板关闭后 Enter 保存字段，Esc 取消编辑。与 AutoComplete、PeopleSelect 的对比示例见 Form 的“各类字段统一展示”。

异步加载同一节点时合并重复展开操作；节点被替换、编辑器关闭或表单重置后，旧请求不再触发展开或勾选。加载完成后，方向键可立即进入新子节点。搜索词或候选变化时先清除旧过滤结果，避免 Enter 选中旧候选；字段确认仍先校验，再执行异步提交。
