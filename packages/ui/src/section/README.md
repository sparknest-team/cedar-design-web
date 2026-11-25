---
permalink: /components/section/
---

# Section 内容分区

将标题、说明、操作和正文组织为一个分区。适合详情页、抽屉和卡片内部。表单外的分区间距由父布局控制。放入 Form 后，分区自动跨整行并处理字段间距；父表单采用 inline 布局时，组内字段横排且允许换行。

## 基础示例

### 普通分区

设置 `variant="plain"` 可隐藏标题分隔线。

<demo src="./__demos__/plain.vue"></demo>

### 带线分区

`heading-line` 是默认外观。

heading-line 在标题后绘制装饰线，操作放入 extra 插槽。

<demo src="./__demos__/line.vue"></demo>

### 描边分区与自定义标题

通过 title 和 description 插槽提供分区标题与说明。打开 `show-marker` 显示标题色条，用 `heading-level` 指定标题层级。

<demo src="./__demos__/outline.vue"></demo>

### 分区尺寸

切换尺寸和标题层级即可实时预览。表中 h1 到 h6 各列是默认标题字号，虚线框标出内容区域。

| 尺寸 | h1 | h2 | h3 | h4 | h5 | h6 | 卡片内边距 | 标题与内容间距 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `xs` | 24px | 20px | 18px | 16px | 14px | 12px | 8px | 8px |
| `sm` | 24px | 20px | 18px | 16px | 14px | 12px | 12px | 12px |
| `md` | 26px | 22px | 20px | 18px | 16px | 14px | 16px | 20px |
| `lg` | 30px | 26px | 24px | 22px | 20px | 18px | 20px | 24px |
| `xl` | 34px | 30px | 28px | 26px | 24px | 22px | 24px | 28px |

<demo src="./__demos__/sizes.vue"></demo>

### 有标题、仅说明与纯正文

切换 plain、heading-line、tonal、outline，并分别勾选标题和说明，观察同一份内容在不同组合下的效果。初始只显示正文。勾选「显示色条」后，无标题时会标记整个分区；显示标题后可选择「标题旁」或「整个分区」。标题和说明都关闭时，整个头部会收起，heading-line 的标题装饰线也随之收起。

<demo src="./__demos__/heading-options.vue"></demo>

### 行内表单分组

放在 Form 中时，Section 默认采用 heading-line。需要标题色条时显式传 show-marker。字段跟随 inline 布局横排，空间不足时换行。需要分隔相邻分区时，可在页面中使用 Divider。

<demo src="./__demos__/inline-form.vue"></demo>

## API

### Section Props

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| id | 分区锚点 | 自动生成 |
| title | 标题文本 | 空 |
| description | 标题下方的说明 | 空 |
| size | 视觉尺寸（xs / sm / md / lg / xl） | md |
| variant | 外观，可选 plain、heading-line、tonal、outline | heading-line |
| status | 状态决定色条、tonal 浅色背景和 outline 描边的颜色（default / info / success / warning / danger） | — |
| heading-level | 标题层级，取值 1 至 6 | `4` |
| show-marker | 显示色条 | 默认关闭 |
| marker-placement | 色条位置（`title` / `section`） | `title` |

### Section Slots

默认插槽承载正文。title 和 description 插槽优先于同名属性。extra 插槽承载操作。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-section-accent-color` | `var(--c-sys-color-action-primary)` | `background`, `border`, `border-inline-start` |
| `--c-section-after-gap` | `24px` | `margin-block`, `padding-block-start` |
| `--c-section-before-gap` | `32px` | `padding-block-start` |
| `--c-section-card-background` | `var(--c-sys-color-surface-default)` | `background-color` |
| `--c-section-card-padding` | `16px` | `padding` |
| `--c-section-card-radius` | `6px` | `border-radius` |
| `--c-section-content-size` | `14px` | `font-size` |
| `--c-section-description-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-section-description-gap` | `4px` | `margin-block-start` |
| `--c-section-description-line-height` | `20px` | `line-height` |
| `--c-section-description-size` | `13px` | `font-size` |
| `--c-section-divider-color` | `var(--c-sys-color-border-default)` | `border-block-start` |
| `--c-section-divider-width` | `1px` | `border`, `border-block-start`, `border-radius` |
| `--c-section-header-gap` | `20px` | `margin-block-start` |
| `--c-section-heading-gap` | `16px` | `margin-inline-start` |
| `--c-section-heading-size-step` | `1px` | `font-size`, `line-height` |
| `--c-section-marker-gap` | `12px` | `padding-inline-end`, `padding-inline-start`, `row-gap` |
| `--c-section-marker-height` | `16px` | `height` |
| `--c-section-marker-radius` | `2px` | `border-radius` |
| `--c-section-marker-width` | `3px` | `border-inline-start`, `padding-inline-start`, `width` |
| `--c-section-outline-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-section-size-lg-card-padding` | `20px` | `padding` |
| `--c-section-size-lg-header-gap` | `24px` | `margin-block-start` |
| `--c-section-size-lg-marker-height` | `20px` | `height` |
| `--c-section-size-lg-title-line-height` | `28px` | `line-height` |
| `--c-section-size-lg-title-size` | `20px` | `font-size` |
| `--c-section-size-sm-card-padding` | `12px` | `padding` |
| `--c-section-size-sm-header-gap` | `12px` | `margin-block-start` |
| `--c-section-size-sm-marker-height` | `14px` | `height` |
| `--c-section-size-sm-title-line-height` | `20px` | `line-height` |
| `--c-section-size-sm-title-size` | `14px` | `font-size` |
| `--c-section-size-xl-card-padding` | `24px` | `padding` |
| `--c-section-size-xl-header-gap` | `28px` | `margin-block-start` |
| `--c-section-size-xl-marker-height` | `24px` | `height` |
| `--c-section-size-xl-title-line-height` | `32px` | `line-height` |
| `--c-section-size-xl-title-size` | `24px` | `font-size` |
| `--c-section-size-xs-card-padding` | `8px` | `padding` |
| `--c-section-size-xs-header-gap` | `8px` | `margin-block-start` |
| `--c-section-size-xs-marker-height` | `12px` | `height` |
| `--c-section-size-xs-title-line-height` | `18px` | `line-height` |
| `--c-section-size-xs-title-size` | `14px` | `font-size` |
| `--c-section-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-section-title-line-height` | `24px` | `line-height` |
| `--c-section-title-size` | `16px` | `font-size` |
| `--c-section-title-weight` | `600` | `font-weight` |
| `--c-section-tonal-background` | `var(--c-sys-color-surface-muted)` | `background-color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-section-accent-color: var(--c-sys-color-action-primary);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
