---
permalink: /components/loading/
---

# Loading

用于页面、区块或容器的加载中状态。

## 案例

### 类型

<demo src="./__demos__/type.vue"></demo>

### 颜色

<demo src="./__demos__/color.vue"></demo>

### 大小

<demo src="./__demos__/size.vue"></demo>

### 包裹内容

<demo src="./__demos__/wrap.vue"></demo>

### 加载指令

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
| dot       | 是否使用点状加载动画                   | `boolean`                                     | `false`  |
| tip       | 提示文案                               | `string`                                      | -        |
| hide-icon | 是否隐藏加载指示器                     | `boolean`                                     | `false`  |

`v-c-loading` 支持布尔值简写，也支持 `{ loading, tip, type, size, radius, dot, color, fullscreen, background }` 配置对象。对象形式中的 `loading` 控制加载状态，`tip` 与 `Loading` 组件属性保持一致。

#### 注册方式

`v-c-loading` 使用 Cedar 内置的 `Loading` 组件渲染指示器。`c-` 前缀可以避免与其他组件库的同名指令冲突，使用前可通过以下任一方式注册。

```ts
// 1. 全量安装：自动注册 Loading 组件和 v-c-loading 指令
import CedarVue from "@cedarjs/ui";

app.use(CedarVue);
```

```ts
// 2. 按需安装 Loading：同时注册组件和指令
import { Loading } from "@cedarjs/ui";

app.use(Loading);
```

```ts
// 3. 只手动注册指令
import { vLoading } from "@cedarjs/ui";

app.directive("c-loading", vLoading);
```

使用 `CedarResolver()` 时，`unplugin-vue-components` 会自动解析模板中的 `v-c-loading`；`directives: false` 会关闭指令自动解析。

### `<Loading>` Slots

| 插槽名  | 说明                   |
| ------- | ---------------------- |
| default | 需要展示加载遮罩的内容 |
| tip     | 自定义提示内容         |
| element | 自定义加载元素         |
| icon    | 自定义并自动旋转的图标 |

## 类型定义

组件导出以下类型定义：

```ts
import type { LoadingProps } from "@cedarjs/ui";
```

加载指令的遮罩会阻止点击默认行为和冒泡，点击遮罩不会触发 Card 或父级的普通 `@click`；关闭加载后恢复正常点击。遮罩不会禁用底层控件的键盘操作，如需完全禁止操作，请同时设置控件的 `disabled`。

### 覆盖层样式

| 变量 | 说明 |
| --- | --- |
| `--c-loading-overlay-background` | 指令覆盖层背景色；background 选项可覆盖该值。 |

内容覆盖层类名：`.c-loading__content-overlay`。
