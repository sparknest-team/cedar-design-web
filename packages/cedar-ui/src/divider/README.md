---
permalink: /components/divider/
---

# Divider

划分内容区域，对模块做分隔。

## 案例

### 基础用法。

通过 type 指定分割线类型。
<demo src="./__demos__/basic.vue"></demo>

### 带有文字的分割线

通过 text-align 指定分割线文字位置，通过 description 为分割线添加描述文字。
<demo src="./__demos__/with-text.vue"></demo>

### 尺寸和间距

指定 size 和 inset 即可调整尺寸和间距，其中 size 必须大于1，如果想使用0.5px的线请使用 hairline。
<demo src="./__demos__/size-inset.vue"></demo>

### 颜色和透明度

指定 color 和 opacity 设置分割线颜色和透明度，如果背景色过深，可以适当调高透明度。
<demo src="./__demos__/opacity-color.vue"></demo>

### 垂直分割线

<demo src="./__demos__/vertical.vue"></demo>

## API

### Divider Props

| 属性        | 说明                                                                   | 类型                                        | 默认值       |
| ----------- | ---------------------------------------------------------------------- | ------------------------------------------- | ------------ |
| text-align  | 分割线文字位置                                                         | `start`\|`center`\|`end`                    | `'center'`   |
| description | 分割线文字描述                                                         | _string_                                    | `-`          |
| size-x      | 设置上下间距，支持'5px'、5、[5, 0]、xs、sm、md、lg、xg                 | _number \| string \| number[]\| string[]_   | `-`          |
| size-y      | 设置左右间距，支持'5px'、5、[5, 0]、xs、sm、md、lg、xg                 | _number \| string \| number[]\| string[]_   | `md`         |
| orientation | 是否垂直，如果是'vertical'，则size-x控制上下间距，size-y控制左右间距。 | `horizontal` \| `vertical`                  | `horizontal` |
| type        | 分割线类型                                                             | `dashed` \| `dotted` \| `solid` \| `double` | `solid`      |
| thickness   | 分割线宽度/高度（thickness必须大于1）                                  | _number_                                    | `1`          |
| hairline    | 0.5px 的分割线                                                         | _boolean_                                   | `false`      |
| color       | 分割线颜色                                                             | _string_                                    | `#363c54`    |
| opacity     | 分割线透明度                                                           | _number_                                    | `0.12`       |

### Divider Slots

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 自定义分割线文字描述 |

## 类型定义

组件导出以下类型定义

```ts
import type { DividerProps } from '@cedar/ui'
```

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                                         | 默认值                     |
| ---------------------------------------------- | -------------------------- |
| `--c-divider-color`                            | `#363c54`                  |
| `--c-divider-text-color`                       | `var(~'--c-color-text-1')` |
| `--c-divider-text-padding`                     | `16px`                     |
| `--c-divider-text-align-inset`                 | `24px`                     |
| `--c-divider-opacity`                          | `0.12`                     |
| `--c-divider-orientation-vertical-size-x-xs`   | `2px`                      |
| `--c-divider-orientation-horizontal-size-x-xs` | `12px`                     |
| `--c-divider-orientation-vertical-size-y-xs`   | `4px`                      |
| `--c-divider-orientation-horizontal-size-y-xs` | `8px`                      |
| `--c-divider-orientation-vertical-size-x-sm`   | `4px`                      |
| `--c-divider-orientation-horizontal-size-x-sm` | `16px`                     |
| `--c-divider-orientation-vertical-size-y-sm`   | `8px`                      |
| `--c-divider-orientation-horizontal-size-y-sm` | `12px`                     |
| `--c-divider-orientation-vertical-size-x-md`   | `6px`                      |
| `--c-divider-orientation-horizontal-size-x-md` | `24px`                     |
| `--c-divider-orientation-vertical-size-y-md`   | `12px`                     |
| `--c-divider-orientation-horizontal-size-y-md` | `16px`                     |
| `--c-divider-orientation-vertical-size-x-lg`   | `8px`                      |
| `--c-divider-orientation-horizontal-size-x-lg` | `32px`                     |
| `--c-divider-orientation-vertical-size-y-lg`   | `16px`                     |
| `--c-divider-orientation-horizontal-size-y-lg` | `24px`                     |
| `--c-divider-orientation-vertical-size-x-xl`   | `12px`                     |
| `--c-divider-orientation-horizontal-size-x-xl` | `40px`                     |
| `--c-divider-orientation-vertical-size-y-xl`   | `24px`                     |
| `--c-divider-orientation-horizontal-size-y-xl` | `32px`                     |
