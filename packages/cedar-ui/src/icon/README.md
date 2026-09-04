---
permalink: /components/icon/
---

# Icon

图标以独立 SVG Vue 组件的形式由 `@cedarjs/icons-vue` 提供，支持按需导入和 Tree Shaking。

配置 `CedarResolver()` 后，推荐使用模板标签自动按需导入。`c-icon-*` 是
Resolver 的图标命名空间，实际仍只会加载对应的单个图标：

```vue
<c-icon size="40" color="red">
  <c-icon-check-circle-fill />
</c-icon>
```

也可以手动导入独立图标组件：

```ts
import { IconCheckCircleFill } from "@cedarjs/icons-vue";
```

手动导入时，同样推荐通过 `c-icon` 容器统一控制尺寸、颜色和旋转：

```vue
<c-icon size="40" color="red">
  <IconCheckCircleFill />
</c-icon>
```

以上两种写法效果一致，均支持 Tree Shaking。前者由 Resolver 生成导入，后者由业务代码显式导入。

动态名称只查询显式注册到当前 Vue 应用的图标，`c-icon` 本身不会导入图标全集：

```ts
// main.ts
import { createApp } from "vue";
import { IconCheckCircleFill, IconWarning } from "@cedarjs/icons-vue";
import App from "./App.vue";

const app = createApp(App);
app.component("IconCheckCircleFill", IconCheckCircleFill);
app.component("IconWarning", IconWarning);
app.mount("#app");
```

```vue
<c-icon name="check-circle-fill" size="24" />
```

如果业务确实需要通过任意名称访问全部图标，可以主动批量注册。此时会加载完整图标集合：

```ts
import * as CedarIconsVue from "@cedarjs/icons-vue";

for (const [name, component] of Object.entries(CedarIconsVue)) {
  if (name !== "iconNames") app.component(name, component);
}
```

## 案例

### 基础用法

<demo src="./__demos__/basic-usage.vue"></demo>

### 图标尺寸

<demo src="./__demos__/size.vue"></demo>

### 图标颜色

<demo src="./__demos__/color.vue"></demo>

### 点击事件

<demo src="./__demos__/click.vue"></demo>

### 自定义图标

<demo src="./__demos__/custom.vue"></demo>

### 方向指示类图标

<demo src="./__demos__/direction.vue"></demo>

### 编辑类图标

<demo src="./__demos__/edit.vue"></demo>

### 通用类图标

<demo src="./__demos__/general.vue"></demo>

### 交互按钮类图标

<demo src="./__demos__/interactive-button.vue"></demo>

### 商标类图标

<demo src="./__demos__/logo.vue"></demo>

### 影音类图标

<demo src="./__demos__/media.vue"></demo>

### 提示建议类图标

<demo src="./__demos__/tips.vue"></demo>

## API

### Icon Props

| 属性   | 说明                 | 类型             | 默认值 |
| ------ | -------------------- | ---------------- | ------ |
| type   | 图标类型             | string           | -      |
| name   | 已显式注册的图标名称 | string           | -      |
| size   | 大小                 | number \| string | -      |
| rotate | 旋转角度             | number           | -      |
| spin   | 是否旋转             | boolean          | false  |

### Icon-xxx Props

| 属性           | 说明     | 类型                                                    | 默认值  |
| -------------- | -------- | ------------------------------------------------------- | ------- |
| strokeWidth    | 线宽     | number                                                  | 4       |
| strokeLinecap  | 端点类型 | 'butt' \| 'round' \| 'square'                           | 'butt'  |
| strokeLinejoin | 拐角类型 | 'arcs' \| 'bevel' \| 'miter' \| 'miter-clip' \| 'round' | 'miter' |
| size           | 大小     | number \| string                                        | -       |
| rotate         | 旋转角度 | number                                                  | -       |
| spin           | 是否旋转 | boolean                                                 | false   |

### Icon Events

| 事件名 | 说明           | 参数                        |
| ------ | -------------- | --------------------------- |
| click  | 点击触发的事件 | (event: MouseEvent) => void |

### Icon Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### 类型定义

组件导出以下类型定义

```ts
import type { IconProps } from "@cedarjs/ui";
```
