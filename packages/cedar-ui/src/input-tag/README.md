---
permalink: /components/input-tag/
---

# InputTag

用来输入标签。

## 案例

### 基础用法

标签输入框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 输入框状态

输入框有禁用、只读和错误三种状态。

<demo src="./__demos__/status.vue"></demo>

### 输入框尺寸

输入框分为 `xs`、`sm`、`md`、`lg`、`xl` 五种尺寸。

<demo src="./__demos__/size.vue"></demo>

### 最多展示标签数量

设置最多展示标签数量。

<demo src="./__demos__/max.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<input-tag>` Props

| 参数名                    | 描述                               | 类型                                              |   默认值    |
| ------------------------- | ---------------------------------- | ------------------------------------------------- | :---------: |
| model-value **(v-model)** | 绑定值                             | `(string \| number \| TagData)[]`                 |     `-`     |
| default-value             | 默认值（非受控状态）               | `(string \| number \| TagData)[]`                 |    `[]`     |
| input-value **(v-model)** | 输入框的值                         | `string`                                          |     `-`     |
| default-input-value       | 输入框的默认值（非受控状态）       | `string`                                          |    `''`     |
| placeholder               | 占位符                             | `string`                                          |     `-`     |
| disabled                  | 是否禁用                           | `boolean`                                         |   `false`   |
| error                     | 是否为错误状态                     | `boolean`                                         |   `false`   |
| readonly                  | 是否为只读模式                     | `boolean`                                         |   `false`   |
| clearable                 | 是否允许清空                       | `boolean`                                         |   `false`   |
| size                      | 输入框的大小                       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                    |   `'md'`    |
| variant                   | 输入框的变体                       | `'filled' \| 'outline' \| 'standard'`                          | `'filled'` |
| max-tag-count             | 最多展示的标签个数，`0` 表示不限制 | `number`                                          |     `0`     |
| retain-input-value        | 是否保留输入框的内容               | `boolean \| { create?: boolean; blur?: boolean }` |   `false`   |
| format-tag                | 格式化标签内容                     | `(data: TagData) => string`                       |     `-`     |
| unique-value              | 是否仅创建唯一的值                 | `boolean`                                         |   `false`   |
| field-names               | 自定义 `TagData` 中的字段          | `InputTagFieldNames`                              |     `-`     |
| tag-nowrap                | 标签内容不换行                     | `boolean`                                         |   `false`   |

### `<input-tag>` Events

| 事件名             | 描述                     | 参数                                                    |
| ------------------ | ------------------------ | ------------------------------------------------------- |
| change             | 值发生改变时触发         | value: `(string \| number \| TagData)[]`<br>ev: `Event` |
| input-value-change | 输入值发生改变时触发     | inputValue: `string`<br>ev: `Event`                     |
| press-enter        | 按下回车键时触发         | inputValue: `string`<br>ev: `KeyboardEvent`             |
| remove             | 点击标签的删除按钮时触发 | removed: `string \| number`<br>ev: `Event`              |
| clear              | 点击清除按钮时触发       | ev: `MouseEvent`                                        |
| focus              | 输入框获取焦点时触发     | ev: `FocusEvent`                                        |
| blur               | 输入框失去焦点时触发     | ev: `FocusEvent`                                        |

### `<input-tag>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |

### `<input-tag>` Slots

| 插槽名 |         描述         | 参数            |
| ------ | :------------------: | --------------- |
| tag    | 输入框标签的显示内容 | data: `TagData` |
| prefix |       前缀元素       | -               |
| suffix |       后缀元素       | -               |

### TagData

| 参数名   | 描述       | 类型               | 默认值  |
| -------- | ---------- | ------------------ | :-----: |
| value    | 标签值     | `string \| number` |   `-`   |
| label    | 标签内容   | `string`           |   `-`   |
| closable | 是否可关闭 | `boolean`          | `false` |
| tagProps | 标签属性   | `TagProps`         |   `-`   |

### 类型定义

组件导出以下类型定义

```ts
import type { InputTagInstance } from '@cedarjs/ui'
```

## InputTag 旧图标引用收尾

Cedar InputTag 实际嵌入 Tag 的 close-btn，不渲染旧 c-icon-hover 伪元素。本次移除旧 mixin 导入、默认／focus 的伪元素背景规则，以及重复的自定义 Tag 文字规则（文字由 Tag 自身负责）。关闭按钮的现有外观、点击删除和 readonly / disabled 行为不变；没有新增 hover 背景效果。

同步删除两端 tag-custom-icon-bg-hover，以及 Cedar input-tag-tag-remove-icon-color-bg / input-tag-tag-remove-icon-color-bg-focus。旧变量没有替代项，业务中对此的无效覆盖可删除；不保留别名。Maple 没有 InputTag 组件，仅同步清理共享 Tag 变量。

此前的跨组件保留项已关闭。check:token-consumers 现在检查 414 项 Badge / Tag 声明且无豁免，并编译 InputTag 防止旧图标选择器／变量回流；实际 DOM、关闭交互和自定义颜色由 InputTag 集成测试验证。553 项共享默认值数量不变：本次删除的共享变量此前仅登记名称。此阶段仍不代表 InputTag 全部 Token、浏览器视觉或键盘交互已完成治理。

## InputTag 外壳与内容职责

InputTag 的 outline / filled / standard 外壳由 FieldDecorator 管理。Form 不应重新设置其背景、边框或焦点阴影；本次删除了 Form 对旧 InputTag 状态类的重绘规则，保留校验提示职责。filled 的默认／hover／focus 继续走 FieldDecorator 的 fill-1 / fill-2 / fill-3 规则。

InputTag 的内容密度、默认标签底色和禁用文字由 input-tag-* 控制。内容选择器现在匹配实际的 c-field-decorator--size-* / --focus / --disabled 类名，而非不存在的旧 InputTag 状态类；disabled 优先于 focus。五档 xs / sm / md / lg / xl 内容规则均已覆盖；xl 的标签高度为 32px、输入文字为 16px、垂直内边距为 4px。

移除 33 项没有实际 CSS 消费的旧外壳变量：size-{xs,sm,md,lg}-height；color-text-error；color-placeholder、color-icon-clear、color-icon-clear-bg-hover；color-border-{default,error,disabled}（及其 -hover / -focus）；color-bg-{default,error}（及其 -hover / -focus）、color-bg-disabled（及 -hover）；color-shadow-{default,error}-focus、size-shadow-{default,error}-focus；border-radius、border-width、size-icon-clear、size-icon-clear-hover。以上后缀均属于 --c-input-tag-。没有兼容别名。

迁移时按职责选择实际入口：外壳背景用 field-variant-{variant}-background 系列，圆角用 field-border-radius，占位文字用 field-placeholder-text-color，清除图标用 field-clear-icon-color / field-clear-icon-size。几何优先使用 size 属性；不要覆盖 internal 变量。旧无消费变量不存在逐项等价替代；内容标签使用下列 InputTag 自身变量。

InputTag 保留 27 项内容变量，已加入无消费检查；两端 Badge / Tag 加 Cedar InputTag 共检查 441 项声明，内容 size / focus / disabled 级联覆盖 80 组。共享默认值契约仍为 553 项；Cedar-only InputTag 不冒充跨端共享组件。默认文字、禁用文字、标签底色与焦点底色分别引用 content-primary、content-disabled、surface-default、state-hover。禁用状态只重绘中性标签，不覆盖显式 color / status；业务自定义颜色的可读性由业务负责。父级 disabled / readonly 优先于 tagProps.closable / checkable，loading 或显式不可关闭的标签也不能用 Backspace 删除。已完成 Cedar 浏览器五档布局、xl 输入与键盘删除、明暗模式以及禁用自定义色的抽验，不代表全组件视觉验收。

### 当前内容变量

| 变量 | 默认值 |
| --- | --- |
| `--c-input-tag-size-xs-tag-height` | `20px` |
| `--c-input-tag-size-sm-tag-height` | `20px` |
| `--c-input-tag-size-md-tag-height` | `24px` |
| `--c-input-tag-size-lg-tag-height` | `28px` |
| `--c-input-tag-size-xl-tag-height` | `32px` |
| `--c-input-tag-size-xs-font-size` | `12px` |
| `--c-input-tag-size-sm-font-size` | `14px` |
| `--c-input-tag-size-md-font-size` | `14px` |
| `--c-input-tag-size-lg-font-size` | `14px` |
| `--c-input-tag-size-xl-font-size` | `16px` |
| `--c-input-tag-color-text-default` | `var(--c-sys-color-content-primary)` |
| `--c-input-tag-color-text-disabled` | `var(--c-sys-color-content-disabled)` |
| `--c-input-tag-tag-margin-right` | `4px` |
| `--c-input-tag-tag-margin-y` | `2px` |
| `--c-input-tag-padding-x` | `4px` |
| `--c-input-tag-size-xs-padding-y` | `0px` |
| `--c-input-tag-size-sm-padding-y` | `2px` |
| `--c-input-tag-size-md-padding-y` | `2px` |
| `--c-input-tag-size-lg-padding-y` | `2px` |
| `--c-input-tag-size-xl-padding-y` | `4px` |
| `--c-input-tag-tag-font-size` | `12px` |
| `--c-input-tag-tag-color-bg` | `var(--c-sys-color-surface-default)` |
| `--c-input-tag-tag-color-bg-focus` | `var(--c-sys-color-state-hover)` |
| `--c-input-tag-tag-color-bg-disabled` | `var(--c-sys-color-state-hover)` |
| `--c-input-tag-tag-color-border` | `var(--c-color-fill-3)` |
| `--c-input-tag-tag-color-border-disabled` | `var(--c-color-fill-3)` |
| `--c-input-tag-tag-color-border-focus` | `var(--c-sys-color-state-hover)` |

### Form 字段展示与确认

本组件支持 `presentation`，字段 > FormItem > Form 逐层继承；未指定时为 `inline`，保留原有交互。支持值：`inline / click / dblclick`。其他编辑展示使用 Cell 入口和一份草稿，确认后才更新 v-model；取消、重置或启用 readPretty 丢弃草稿。

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。
