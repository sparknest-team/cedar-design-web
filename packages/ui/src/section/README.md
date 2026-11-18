---
permalink: /components/section/
---

# Section 内容分区

将标题、说明、操作和正文组织为一个分区。适合详情页、抽屉和卡片内部。表单外的分区间距由父布局控制。放入 Form 后，分区自动跨整行并处理字段间距；父表单采用 inline 布局时，组内字段横排且允许换行。

## 基础示例

### 普通分区

默认使用 plain，可直接放入已有容器。

<demo src="./__demos__/plain.vue"></demo>

### 带线分区

line 在标题后绘制装饰线，操作放入 extra 插槽。

<demo src="./__demos__/line.vue"></demo>

## API

### Section Props

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| id | 分区锚点 | 自动生成 |
| title | 标题文本 | 空 |
| description | 标题下方的说明 | 空 |
| variant | 外观，可选 plain、line、card | 表单内 line，其他场景 plain |
| heading-level | 标题层级，取值 1 至 6 | 表单内 3，其他场景 2 |
| show-marker | 显示标题色条 | 表单内开启 |
| show-end-divider | 在 plain 和 line 分区末尾绘制结束线 | false |

### Section Slots

默认插槽承载正文。title 和 description 插槽优先于同名属性。extra 插槽承载操作。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-section-accent-color` | `var(--c-sys-color-action-primary)` | `background` |
| `--c-section-after-gap` | `24px` | `margin-block`, `padding-block-start` |
| `--c-section-before-gap` | `32px` | `padding-block-start` |
| `--c-section-card-background` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-section-card-padding` | `16px` | `padding` |
| `--c-section-card-radius` | `6px` | `border-radius` |
| `--c-section-description-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-section-description-gap` | `4px` | `margin-block-start` |
| `--c-section-description-line-height` | `20px` | `line-height` |
| `--c-section-description-size` | `13px` | `font-size` |
| `--c-section-divider-color` | `var(--c-sys-color-border-default)` | `border`, `border-block-start` |
| `--c-section-divider-width` | `1px` | `border`, `border-block-start` |
| `--c-section-end-divider-gap` | `24px` | `margin-block-start` |
| `--c-section-header-gap` | `20px` | `margin-block-end` |
| `--c-section-heading-gap` | `16px` | `margin-inline-start` |
| `--c-section-marker-gap` | `8px` | `margin-inline-end`, `row-gap` |
| `--c-section-marker-height` | `16px` | `height` |
| `--c-section-marker-radius` | `2px` | `border-radius` |
| `--c-section-marker-width` | `3px` | `width` |
| `--c-section-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-section-title-line-height` | `24px` | `line-height` |
| `--c-section-title-size` | `16px` | `font-size` |
| `--c-section-title-weight` | `600` | `font-weight` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-section-accent-color: var(--c-sys-color-action-primary);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
