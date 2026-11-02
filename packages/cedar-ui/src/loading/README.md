---
permalink: /components/loading/
---

# Loading

用于页面、区块或容器的加载中状态。

## 基础示例

### 基础用法

显示加载指示器与提示文字。包裹内容和指令用法见后续示例。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 加载图形、尺寸与颜色

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | 加载指示器的尺寸；数字表示 px | 加载图形、尺寸与颜色 |
| `type` | 加载动画类型 | 加载图形、尺寸与颜色 |
| `color` | 加载指示器和提示文案的颜色 | 加载图形、尺寸与颜色 |
<!-- demo-config-notes:end -->

对比相同加载状态的图形、尺寸和颜色；容器遮罩与指令用法保持独立。

<demo src="./__demos__/appearance-comparison.vue"></demo>

## 布局与排列

### 包裹内容

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `tip` | 提示文案 | 包裹内容 |
| `loading` | 是否为加载中状态（仅在包裹内容时生效） | 包裹内容 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/wrap.vue"></demo>

## 内容与展示

### 加载指令

两种指令示例分别维护加载状态，控件与宿主卡片通过 `Space direction="column"` 纵向排列；关闭一个不会影响另一个遮罩。

<demo src="./__demos__/directive.vue"></demo>

## API

### `<Loading>` Props

| 属性      | 说明                                   | 类型                                          | 默认值   |
| --------- | -------------------------------------- | --------------------------------------------- | -------- |
| type      | 加载动画类型                           | `circle \| wave \| cube \| rect \| disappear` | `circle` |
| size      | 加载指示器的尺寸；数字表示 px          | `xs \| sm \| md \| lg \| xl \| number`        | `md`     |
| radius    | `circle` 类型的半径                    | `string \| number`                            | -        |
| color     | 加载指示器和提示文案的颜色             | `string`                                      | -        |
| loading   | 是否为加载中状态（仅在包裹内容时生效） | `boolean`                                     | `false`  |
| tip       | 提示文案                               | `string`                                      | -        |
| hide-icon | 是否隐藏加载指示器                     | `boolean`                                     | `false`  |

`v-c-loading` 支持布尔值简写，也支持 `{ loading, tip, type, size, radius, color, hideIcon, fullscreen, background }` 配置对象。对象形式中的 `loading` 控制加载状态，其余组件属性与 `Loading` 保持一致。

#### 注册方式

`v-c-loading` 使用 Cedar 内置的 `Loading` 组件渲染指示器。`c-` 前缀可以避免与其他组件库的同名指令冲突，使用前可通过以下任一方式注册。

```ts
// 1. 全量安装：自动注册 Loading 组件和 v-c-loading 指令
import CedarVue from "@cedar-design/ui";

app.use(CedarVue);
```

```ts
// 2. 按需安装 Loading：同时注册组件和指令
import { Loading } from "@cedar-design/ui";

app.use(Loading);
```

```ts
// 3. 只手动注册指令
import { vLoading } from "@cedar-design/ui";

app.directive("c-loading", vLoading);
```

使用 `CedarResolver()` 时，`unplugin-vue-components` 会自动解析模板中的 `v-c-loading`；`directives: false` 会关闭指令自动解析。

### `<Loading>` Slots

| 插槽名  | 说明                   |
| ------- | ---------------------- |
| default | 需要展示加载遮罩的内容 |
| tip     | 自定义提示内容         |
| icon    | 自定义加载指示器     |

`icon` 插槽替换全部内置 `type` 动画；未提供时使用 ConfigProvider 的 `loading` 插槽，再回退到内置动画。`hide-icon=true` 隐藏所有指示器，提示内容仍可显示。

## 类型定义

组件导出以下类型定义：

```ts
import type { LoadingProps } from "@cedar-design/ui";
```

加载指令的遮罩会阻止点击默认行为和冒泡，点击遮罩不会触发 Card 或父级的普通 `@click`；关闭加载后恢复正常点击。遮罩不会禁用底层控件的键盘操作，如需完全禁止操作，请同时设置控件的 `disabled`。

### 覆盖层样式

| 变量 | 说明 |
| --- | --- |
| `--c-loading-overlay-background` | 指令覆盖层背景色；background 选项可覆盖该值。 |

内容覆盖层类名：`.c-loading__content-overlay`。

指令每次更新都替换完整配置，省略的选项以及布尔值 `true` 使用默认值。加载中修改 `fullscreen` 会在宿主与所属文档的 body 之间迁移遮罩，宿主内容保持原位。多个全屏实例按数量持有滚动锁：关闭局部实例不会解除全屏锁，最后一个全屏实例结束时保留外部原有的锁类。
