---
permalink: /components/icon/
---

# Icon

这里有 Cedar Design 内置的大量图标。

## 案例

### 外部图标

<demo src="./__demos__/basic.vue"></demo>
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

| 属性   | 说明     | 类型             | 默认值 |
| ------ | -------- | ---------------- | ------ |
| type   | 图标类型 | string           | -      |
| size   | 大小     | number \| string | -      |
| rotate | 旋转角度 | number           | -      |
| spin   | 是否旋转 | boolean          | false  |

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
import type { IconProps } from '@cedar/ui'
```
