---
permalink: /components/style/atomic-usage/
---

## 常用写法

日常类名速查。接入 Uno / Tailwind、主题 token 怎么挂，见 [原子化 CSS](/components/style/atomic-css/)。

- 类名一律带 `c-`，不提供无前缀别名
- 数值间距 / 宽高：`1 = 1px`，如 `c-p-8` 为 8px、`c-h-40` 为 40px
- 状态写在前面：`hover:c-opacity-80` `focus:c-border-primary`
- 断点本身不加 `c-`：`sm:c-flex` `md:c-p-24`

| 分类 | 跳转 |
| --- | --- |
| 布局 / Flex / Grid | [布局](#布局-layout) |
| 定位 | [定位](#定位-position) |
| 间距 / 尺寸 | [间距](#间距-spacing) · [尺寸](#尺寸-size) |
| 溢出 | [溢出](#溢出-overflow) |
| 排版 | [排版](#排版-typography) |
| 颜色 / 边框 / 圆角 | [颜色](#颜色-color) · [边框](#边框-border) · [圆角](#圆角-rounded) |
| 状态 / 断点 | [状态与断点](#状态与断点-variants) |

UnoCSS 与 Tailwind **类名相同**，项目里二选一配置即可。

### 布局 Layout

| 类型 | 常用类 |
| --- | --- |
| 显示 | `c-block` `c-inline-block` `c-inline-flex` `c-flex` `c-grid` `c-hidden` |
| Flex 方向 | `c-flex-row` `c-flex-col` `c-flex-wrap` |
| 主轴 | `c-justify-start` `c-justify-center` `c-justify-between` `c-justify-end` |
| 交叉轴 | `c-items-start` `c-items-center` `c-items-stretch` `c-items-end` |
| 伸缩 | `c-flex-1` `c-flex-none` `c-shrink-0` `c-grow` |
| Grid | `c-grid-cols-2` `c-grid-cols-3` `c-col-span-2` |

```html
<div class="c-flex c-items-center c-justify-between c-gap-8">
  <span>左</span>
  <span>右</span>
</div>
```

### 定位 Position

| 类型 | 常用类 |
| --- | --- |
| 方式 | `c-relative` `c-absolute` `c-fixed` `c-sticky` `c-static` |
| 边距 | `c-inset-0` `c-top-0` `c-right-0` `c-bottom-0` `c-left-0` |
| 层级 | `c-z-0` `c-z-10` `c-z-20` `c-z-50` |

`inset` / `top` 等数值同样走间距表：`c-top-8` 为 `8px`。

### 间距 Spacing

| 类型 | 常用类 |
| --- | --- |
| margin | `c-m-16` `c-mt-8` `c-mx-16` `c-my-8` `c-m-auto` `c-ml-auto` |
| padding | `c-p-16` `c-px-12` `c-py-8` `c-pt-24` |
| gap | `c-gap-8` `c-gap-x-16` `c-gap-y-12` |

方向：`t` 上 / `r` 右 / `b` 下 / `l` 左 / `x` 左右 / `y` 上下。

### 尺寸 Size

| 类型 | 常用类 |
| --- | --- |
| 宽高 | `c-w-40` `c-h-40` `c-w-full` `c-h-full` `c-w-auto` `c-h-auto` |
| 百分比 | `c-w-1/2` `c-w-1/3` `c-h-1/2` |
| 视口 | `c-w-screen` `c-h-screen` `c-min-h-screen` |
| 约束 | `c-min-w-0` `c-max-w-md` `c-min-h-0` `c-max-h-full` |

`c-h-10` 是 **10px**，不是 10%。百分药用 `c-h-full` 或 `c-h-1/2`。

### 溢出 Overflow

| 类型 | 常用类 |
| --- | --- |
| overflow | `c-overflow-hidden` `c-overflow-auto` `c-overflow-scroll` `c-overflow-visible` |
| 轴向 | `c-overflow-x-auto` `c-overflow-y-auto` `c-overflow-x-hidden` |
| 单行省略 | `c-truncate` |
| 多行省略 | `c-line-clamp-1` `c-line-clamp-2` `c-line-clamp-3` |

### 排版 Typography

| 类型 | 常用类 |
| --- | --- |
| 对齐 | `c-text-left` `c-text-center` `c-text-right` |
| 字号（主题） | `c-text-xs` `c-text-sm` `c-text-md` `c-text-lg` |
| 字重 | `c-font-normal` `c-font-medium` `c-font-semibold` `c-font-bold` |
| 行高 | `c-leading-none` `c-leading-tight` `c-leading-normal` |
| 空白 | `c-whitespace-nowrap` `c-whitespace-pre-wrap` |
| 换行 | `c-break-words` `c-break-all` |

不要和固定工具类的语义文字色 `c-text-1` … `c-text-4` 混淆。更完整的 PC 排版包见 [Typography](/components/style/typography/)。

### 颜色 Color

主题色只改对应属性，边框需要和宽度类一起用。

| 用途 | 常用类 |
| --- | --- |
| 背景 | `c-bg-body` `c-bg-primary` `c-bg-success` `c-bg-warning` `c-bg-danger` `c-bg-info` `c-bg-disabled` |
| 文字 | `c-text-primary` `c-text-success` `c-text-white` |
| 边框色 | `c-border-primary` `c-border-danger` |

语义层级色（`c-text-1`、`c-fill-2`、`c-color-border-2`、`c-bg-1`）见 [颜色 Color](/components/color/)，不走原子化生成。色阶变量见 [Palette](/components/palette/)。

```html
<div class="c-border c-border-primary">primary border</div>
<button class="c-bg-primary c-text-white hover:c-opacity-80">保存</button>
```

### 边框 Border

| 类型 | 常用类 |
| --- | --- |
| 宽度 | `c-border` `c-border-0` `c-border-2` `c-border-t` `c-border-b` |
| 样式 | `c-border-solid` `c-border-dashed` `c-border-none` |

### 圆角 Rounded

| 常用类 | 说明 |
| --- | --- |
| `c-rounded-none` `c-rounded-sm` `c-rounded-md` `c-rounded-lg` `c-rounded-xl` `c-rounded-full` | Uno / TW 标准档 |
| `c-rounded-t-md` `c-rounded-l-lg` | 单边圆角 |

### 状态与断点 Variants

| 类型 | 写法 |
| --- | --- |
| 交互 | `hover:c-opacity-80` `focus:c-border-primary` `active:c-opacity-70` `disabled:c-opacity-40` |
| 断点 | `sm:c-flex` `md:c-p-24` `lg:c-grid-cols-3` `xl:c-max-w-screen` |

断点宽度：`sm` 768 / `md` 992 / `lg` 1200 / `xl` 1920。

不要写 `c-bg-${status}` 这种拼接；Uno / TW 只扫描源码里完整出现的类名。

### 不收录

| 能力 | 去哪 |
| --- | --- |
| 海拔阴影 | [Elevation](/components/style/elevation/)，preset 已屏蔽 `c-shadow-*` |
| 语义色层级 | [颜色 Color](/components/color/) |
| 色阶 | [Palette](/components/palette/) |
| 安装配置 | [原子化 CSS](/components/style/atomic-css/) |
