---
permalink: /components/card/
---

# Card

## 基础示例

### 基础用法与副标题

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观配置对比

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题 | 外观配置对比、悬浮样式 |
| `description` | 描述 | 外观配置对比 |
| `hoverable` | 悬浮样式 | 悬浮样式 |
<!-- demo-config-notes:end -->

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 外观组合

适用于信息分组和内容层次。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

### 悬浮样式

<demo src="./__demos__/hoverable.vue"></demo>

## 布局与排列

### 图片与三种布局

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `direction` | 封面与正文的排列顺序，默认 column；支持 row、column、row-reverse，不表示卡片自身位置 | 图片与三种布局 |
| `title` | 标题 | 图片与三种布局 |
| `src` | 封面图片地址；cover 插槽优先 | 图片与三种布局 |
| `alt` | 封面图片替代文本 | 图片与三种布局 |
| `image-height` | 封面图片高度，数字单位为 px | 图片与三种布局 |
| `image-width` | 封面图片宽度，数字单位为 px | 图片与三种布局 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/image.vue"></demo>

## 内容与展示

### 长标题与提示

<demo src="./__demos__/tooltip.vue"></demo>

## 自定义与插槽

### 自定义标题区域

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题 | 自定义标题区域 |
| `top-divider` | 上分割线 | 内容插槽 |
| `bottom-divider` | 下分割线 | 内容插槽 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/no-padding.vue"></demo>

### 内容插槽

<demo src="./__demos__/slots.vue"></demo>

## 交互与控制

### 水波与点击事件

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题 | 水波与点击事件、全屏展开与关闭 |
| `ripple` | 点击水波 | 水波与点击事件 |
| `floating` | 全屏展开状态，支持 v-model:floating | 全屏展开与关闭 |
| `floating-duration` | 全屏展开与关闭动画时长，单位 ms | 全屏展开与关闭 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/ripple.vue"></demo>

### 全屏展开与关闭

<demo src="./__demos__/floating.vue"></demo>

长标题示例通过插槽内的 CSS 和原生 `title` 提供提示；Card 本身没有 `ellipsis` / `tooltip` 属性。

## 生命周期与边界

### Floating scheduler lifecycle / 浮起调度生命周期

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `floating` | 全屏展开状态，支持 v-model:floating | Floating scheduler lifecycle / 浮起调度生命周期 |
| `ripple` | 点击水波 | Floating scheduler lifecycle / 浮起调度生命周期 |
| `floating-duration` | 全屏展开与关闭动画时长，单位 ms | Floating scheduler lifecycle / 浮起调度生命周期 |
| `title` | 标题 | Floating scheduler lifecycle / 浮起调度生命周期 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

与 Maple 使用相同场景、参数和交互顺序；示例源码仅替换组件前缀，主题与站点外壳各自保留。

## 阅读方向

标题、内容和操作沿阅读顺序排列，默认浮动操作位于阅读终点，不镜像图片或自定义插槽。

## API

<!-- same-source-api:start -->
### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 卡片外观 | `default / outline / tonal` | `default` |
| size | 内容密度；省略时按平台规则回退，见下方说明 | `sm / md` | `undefined` |
| direction | 封面与正文的排列顺序，默认 column；支持 row、column、row-reverse，不表示卡片自身位置 | `row / column / row-reverse` | `column` |
| hoverable | 悬浮样式 | `boolean` | `false` |
| title-style | 标题行样式 | `CSSProperties` | `undefined` |
| title | 标题 | `string` | `undefined` |
| subtitle | 副标题 | `string` | `undefined` |
| description | 描述 | `string` | `undefined` |
| top-divider | 上分割线 | `boolean` | `false` |
| bottom-divider | 下分割线 | `boolean` | `false` |
| src | 封面图片地址；cover 插槽优先 | `string` | `undefined` |
| fit | 封面图片填充方式 | `fill / contain / cover / none / scale-down` | `cover` |
| image-height | 封面图片高度，数字单位为 px | `string / number` | `undefined` |
| image-width | 封面图片宽度，数字单位为 px | `string / number` | `undefined` |
| alt | 封面图片替代文本 | `string` | `undefined` |
| elevation | default 变体阴影；true 为等级 1，false 为无阴影，数字范围 0～24 | `boolean / number` | `true` |
| ripple | 点击水波 | `boolean` | `false` |
| floating | 全屏展开状态，支持 v-model:floating | `boolean` | `false` |
| floating-duration | 全屏展开与关闭动画时长，单位 ms | `number` | `250` |

### Events

| 事件 | 参数与时机 |
| --- | --- |
| click | `(event: Event)`，点击卡片时触发 |
| update:floating | `(value: boolean)`，内置关闭按钮请求关闭时发送 false；展开由父级设置 |

### Slots

| 插槽 | 说明 | 参数 |
| --- | --- | --- |
| default | 正文 | — |
| cover | 封面，覆盖 src 图片 | — |
| header | 整个标题区域，覆盖 title、title-action 和 subtitle | — |
| title | 标题 | `{ slotClass: string }` |
| title-action | 标题右侧操作 | — |
| subtitle | 副标题 | `{ slotClass: string }` |
| description | 描述 | `{ slotClass: string }` |
| footer | 底部操作 | — |
| floating-content | 全屏扩展内容，仅 column 布局渲染 | — |
| close-button | 自定义关闭按钮；需自行更新 floating | — |

### Methods

无公开方法。

### 跨端说明

属性、事件参数及插槽契约一致。Cedar 省略 size 时继承全局尺寸（xs/sm 映射 sm，其余映射 md）；Maple 回退 md。需要一致密度时显式传入 size。主题和 CSS 前缀分别使用各端配置。
Card 不再提供 loading 属性；加载遮罩使用 Loading 指令组合。
<!-- same-source-api:end -->

### `<Card>` CSS 变量

| 变量名 | 默认值 |
| --- | --- |
| `--c-card-hover-shadow` | `0 4px 12px rgb(0 0 0 / 12%)` |
| `--c-card-size-sm-title-font-size` | `16px` |
| `--c-card-size-sm-section-margin` | `8px 0 0` |
| `--c-card-size-sm-section-padding` | `0 12px` |
| `--c-card-padding` | `0 0 15px 0` |
| `--c-card-background` | `var(--c-sys-color-surface-default)` |
| `--c-card-filled-background` | `var(--c-sys-color-surface-muted)` |
| `--c-card-outline-color` | `var(--c-sys-color-border-default)` |
| `--c-card-border-radius` | `4px` |
| `--c-card-image-width` | `100%` |
| `--c-card-row-image-width` | `140px` |
| `--c-card-image-height` | `200px` |
| `--c-card-row-height` | `140px` |
| `--c-card-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-card-title-font-size` | `20px` |
| `--c-card-title-padding` | `0 12px` |
| `--c-card-title-margin` | `15px 0 0 0` |
| `--c-card-title-row-margin` | `12px 0` |
| `--c-card-content-padding` | `0 16px` |
| `--c-card-content-margin` | `16px 0 0 0` |
| `--c-card-content-color` | `var(--c-sys-color-content-tertiary)` |
| `--c-card-content-font-size` | `14px` |
| `--c-card-content-row-margin` | `16px 0 0 0` |
| `--c-card-subtitle-color` | `var(--c-sys-color-content-secondary)` |
| `--c-card-subtitle-font-size` | `14px` |
| `--c-card-subtitle-padding` | `0 12px` |
| `--c-card-subtitle-margin` | `10px 0 0 0` |
| `--c-card-subtitle-row-margin` | `-8px 0 0 0` |
| `--c-card-description-color` | `var(--c-sys-color-content-secondary)` |
| `--c-card-description-font-size` | `14px` |
| `--c-card-description-margin` | `20px 0 0 0` |
| `--c-card-description-padding` | `0 13px` |
| `--c-card-footer-padding` | `0 12px` |
| `--c-card-footer-right` | `13px` |
| `--c-card-footer-bottom` | `9px` |
| `--c-card-footer-margin` | `30px 0 0 0` |
| `--c-card-line-height` | `22px` |
| `--c-card-row-line-height` | `1.5` |
| `--c-card-floating-buttons-bottom` | `16px` |
| `--c-card-floating-buttons-right` | `16px` |
| `--c-card-floating-buttons-color` | `var(--c-sys-color-content-primary)` |
| `--c-card-close-button-icon-size` | `24px` |
| `--c-card-close-button-size` | `56px` |
| `--c-card-close-button-background` | `#212121` |
| `--c-card-close-button-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-card-close-button-border-radius` | `50%` |

Card 主体颜色按 system 语义分层：普通背景、filled 背景和描边分别使用 `surface-default`、`surface-muted`、`border-default`；标题、正文、辅助文字分别使用 `content-primary`、`content-tertiary`、`content-secondary`。展开后的悬浮按钮容器位于卡片表面，使用 `content-primary`；深色关闭按钮上的文字与图标使用 `content-on-dark`。关闭按钮背景 `#212121` 是 Card 专属值，并非全局主操作色。旧变量名的迁移关系见 Design Token 规范。

### 类型定义

组件导出以下类型定义

```ts
import type { CardProps } from '@cedar-design/ui'
```

尺寸与跨端迁移约定见仓库根目录 `API-MIGRATION.md`。只支持文档列出的档位，不代表支持全部 ComponentSize。

### 变量消费约定

横向内容区独立消费 `--c-card-content-row-margin`，不再误用标题间距。Card 的密度 API 明确只支持 sm/md，不套用表单控件五档。动效时长 `--c-card-animation-duration` 默认为 `var(--c-sys-motion-duration-slow)`，曲线 `--c-card-animation-easing` 默认为 `var(--c-sys-motion-easing-standard)`。reduced-motion 关闭所有 Card 动画分区的过渡。
