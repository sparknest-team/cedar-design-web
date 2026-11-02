---
permalink: /components/anchor/
---

# Anchor

通过锚点可快速找到信息内容在当前页面的位置。

## 基础示例

### 基础用法

锚点的基本用法

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 固钉位置

使用 `affix` 组件可以让锚点固定在页面之内。

<demo src="./__demos__/affix.vue"></demo>

## 内容与展示

### 无轴线模式

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `show-line` | 是否显示左侧轴线 | 无轴线模式 |
| `change-hash` | 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash | 是否改变hash |
<!-- demo-config-notes:end -->

当页面滚动或浏览器窗口改变时，元素向下滚动到距底部一定距离时固定。

<demo src="./__demos__/show-line.vue"></demo>

### 是否改变hash

可以设置点击锚点而不改变浏览器历史。

<demo src="./__demos__/hash.vue"></demo>

## 生命周期与边界

### 锚点滚动偏移量

可以设置 `boundary` 来定制锚点滚动偏移量。

<demo src="./__demos__/boundary.vue"></demo>

### 滚动消费者生命周期

<demo src="./__demos__/scroll-lifecycle.vue"></demo>

连续点击会取消上一次滚动；KeepAlive 停用、卸载、滚动容器或 boundary 改变会取消当前滚动与测量帧，移除原容器监听。激活只重新绑定和测量，不恢复旧动画。旧通知、旧滚动完成和重复帧不能覆盖新阶段；同一目标的重复点击仍保留一次有效的待发 change 通知。失效的保留点击不阻止默认导航，也不发 select。

私有视觉滚动保留 300ms／quartOut；它不是 CSS transition 完成计时，不新增时长 Token。帧由目标所属窗口创建／取消，每帧检查当前减少动效偏好；已开启时直接定位，运行中开启则下一帧完成。取消停在当前位置，不跳到目标、不发完成通知。nextTick 通知只能逻辑失效，不能物理撤销已排队续体或回滚已执行滚动。

AnchorLink 卸载及 href 变化会注销原节点；旧节点清理不会删除同 hash 的新注册。测量／几何读取后再次核对归属，防止停用、卸载或新请求重入后提交旧结果。公开 Props／Events、颜色和 CSS 变量保持不变；Maple 没有对应 Anchor 运行时。

## 阅读方向

轴线和高亮位于阅读起点，链接缩进使用逻辑位置，纵向滚动和锚点目标保持不变。

## API

### `<anchor>` Props

| 参数名           | 描述                                                                         | 类型                                                  |  默认值   |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- | :-------: |
| boundary         | 滚动边界值，设置该值为数字后，将会在距离滚动容器 `boundary` 距离时停止滚动。 | `'start' \| 'end' \| 'center' \| 'nearest' \| number` | `'start'` |
| show-line        | 是否显示左侧轴线                                                             | `boolean`                                             |  `true`   |
| show-background  | 是否显示背景                                                                 | `boolean`                                             |  `true`   |
| scroll-container | 滚动容器                                                                     | `string \| HTMLElement \| Window`                     |    `-`    |
| change-hash      | 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash                   | `boolean`                                             |  `true`   |

### `<anchor>` Events

| 事件名 | 描述               | 参数                                             |
| ------ | ------------------ | ------------------------------------------------ |
| select | 用户点击链接时触发 | hash: `string \| undefined`<br>preHash: `string` |
| change | 链接发生改变时触发 | hash: `string`                                   |

### `<anchor-link>` Props

| 参数名 | 描述               | 类型     | 默认值 |
| ------ | ------------------ | -------- | :----: |
| title  | 锚点链接的文本内容 | `string` |  `-`   |
| href   | 锚点链接的地址     | `string` |  `-`   |

### 类型定义

组件导出以下类型定义

```ts
import type { AnchorInstance } from '@cedar-design/ui'
```
