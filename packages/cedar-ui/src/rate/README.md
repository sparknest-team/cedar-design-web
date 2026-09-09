---
permalink: /components/rate/
---

# Rate

用于评分或打星的组件。

## 案例

### 基础用法

评分组件基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 半选

指定 `allow-half` 来开启半选。

<demo src="./__demos__/half.vue"></demo>

### 自定义颜色

通过 color 可以自定义颜色。另外可以通过对象形式自定义不同分值时的颜色。

<demo src="./__demos__/color.vue"></demo>

### 只读模式

通过设置 `readonly` 属性让评分组件为只读状态。

<demo src="./__demos__/readonly.vue"></demo>

### 支持清除

通过设置 `clearable` 来允许清除评分。

<demo src="./__demos__/clear.vue"></demo>

### 自定义评分字符

可以将星星替换为其他字符，比如表情、字母，数字，字体图标甚至中文。

<demo src="./__demos__/character.vue"></demo>

### 任意长度的评分

通过指定 `count` 来指定任意长度的评分组件。

<demo src="./__demos__/count.vue"></demo>

### 笑脸分级

通过 `grading` 使用笑脸分级。

<demo src="./__demos__/grading.vue"></demo>

## API

### `<rate>` Props

| 参数名                    | 描述             | 类型                               | 默认值  | 版本   |
| ------------------------- | ---------------- | ---------------------------------- | :-----: | :----- |
| count                     | 评分的总数       | `number`                           |   `5`   |        |
| model-value **(v-model)** | 绑定值           | `number`                           |   `-`   |        |
| default-value             | 默认值           | `number`                           |   `0`   |        |
| allow-half                | 是否允许半选     | `boolean`                          | `false` |        |
| clearable               | 是否允许清除     | `boolean`                          | `false` |        |
| grading                   | 是否开启笑脸分级 | `boolean`                          | `false` |        |
| readonly                  | 是否为只读状态   | `boolean`                          | `false` |        |
| disabled                  | 是否禁用         | `boolean`                          | `false` |        |
| color                     | 颜色             | `string \| Record<string, string>` |   `-`   | 2.18.0 |

### `<rate>` Events

| 事件名       | 描述                   | 参数            |
| ------------ | ---------------------- | --------------- |
| change       | 值改变时触发           | value: `number` |
| hover-change | 鼠标移动到数值上时触发 | value: `number` |

### `<rate>` Slots

| 插槽名    | 描述 | 参数            |
| --------- | :--: | --------------- |
| character | 符号 | index: `number` |

### 类型定义

组件导出以下类型定义

```ts
import type { RateInstance } from '@cedarjs/ui'
```

### size

`size?: number | string` 设置评分图标尺寸；数字/数字字符串按 px，带单位字符串按 CSS 长度。省略、非法及非正数保留样式默认尺寸，不支持 xs/md 等档位。

尺寸与跨端迁移约定见仓库根目录 `API-MIGRATION.md`。只支持文档列出的档位，不代表支持全部 ComponentSize。
