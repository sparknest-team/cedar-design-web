---
permalink: /guide/design-token-reference/
---

# Cedar 组件 CSS 变量参考

本页由组件 Token 声明编译生成，不手工维护表格。在 design-ui 运行 `node bin/token-catalog.mjs --patch` 后应用补丁；`--check` 检查源码与文档是否一致。

与《Design Token 与 CSS 变量分层》配合阅读：这里列出准确名称、声明值与消费证据，不代表所有组件均通过视觉验收。值是声明表达式，不是最终像素；多值保留各自选择器条件，主题对象和行内属性仍可覆盖。foundation/system 的角色见设计规范，不在这里冒充组件 API。

公开变量可在组件实际根节点或弹层真实挂载祖先覆盖；内部变量只用于实现，业务禁止依赖。size / variant / status / loading / disabled 决定何时消费，不能认为一个变量在所有状态都生效。消费属性列表来自编译后的传递引用，只证明可达性，不替代选择器可见性和优先级检查。

## _components/field-presentation

声明来源: `src/_components/field-presentation/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-field-presentation-border` | 内部 | `var(--c-color-border-2)` | 本组件 CSS<br>`border`, `border-bottom`, `border-top` |
| `--c-field-presentation-close-font-size` | 内部 | `24px` | 本组件 CSS<br>`font-size` |
| `--c-field-presentation-close-size` | 内部 | `32px` | 本组件 CSS<br>`height`, `width` |
| `--c-field-presentation-edit-hover-background` | 内部 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-field-presentation-edit-size` | 内部 | `28px` | 本组件 CSS<br>`height`, `padding-inline-end`, `width` |
| `--c-field-presentation-editor-action-width` | 内部 | `88px` | 待审查，不应依赖 |
| `--c-field-presentation-editor-edge-gap` | 内部 | `8px` | 本组件 CSS<br>`max-height` |
| `--c-field-presentation-editor-max-height` | 内部 | `calc(100dvh - 2 * var(--c-field-presentation-editor-edge-gap))` | 本组件 CSS<br>`max-height` |
| `--c-field-presentation-editor-padding` | 内部 | `4px` | 本组件 CSS<br>`max-height`, `padding` |
| `--c-field-presentation-gap` | 内部 | `var(--c-sys-space-3)` | 本组件 CSS<br>`gap`, `margin-bottom`, `margin-top`, `padding-bottom`, `padding-top` |
| `--c-field-presentation-max-height` | 内部 | `60vh` | 本组件 CSS<br>`max-height` |
| `--c-field-presentation-min-width` | 内部 | `280px` | 本组件 CSS<br>`min-width` |
| `--c-field-presentation-padding` | 内部 | `var(--c-sys-space-4)` | 本组件 CSS<br>`inset-inline-end`, `max-width`, `padding`, `padding-block`, `padding-inline-end` |
| `--c-field-presentation-radius` | 内部 | `8px` | 本组件 CSS<br>`border-radius` |
| `--c-field-presentation-shadow` | 内部 | `0 8px 28px rgba(0, 0, 0, 0.12)` | 本组件 CSS<br>`box-shadow` |
| `--c-field-presentation-title-font-size` | 内部 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-field-presentation-title-font-weight` | 内部 | `500` | 本组件 CSS<br>`font-weight` |

</div>

## _components/picker-field

声明来源: `src/_components/picker-field/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-picker-field-gap` | 公开 | `8px` | 本组件 CSS<br>`gap` |
| `--c-picker-field-input-min-width` | 公开 | `3em` | 本组件 CSS<br>`min-width` |

</div>

## _components/selected-options

声明来源: `src/_components/selected-options/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-selected-options-background` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background` |
| `--c-selected-options-border` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`border-bottom` |
| `--c-selected-options-details-max-height` | 公开 | `50dvh` | 本组件 CSS<br>`max-height` |
| `--c-selected-options-disabled-opacity` | 公开 | `0.5` | 本组件 CSS<br>`opacity` |
| `--c-selected-options-gap` | 公开 | `8px` | 本组件 CSS<br>`gap` |
| `--c-selected-options-padding` | 公开 | `8px 12px` | 本组件 CSS<br>`padding` |
| `--c-selected-options-radius` | 公开 | `4px` | 本组件 CSS<br>`border-radius` |
| `--c-selected-options-remove-size` | 公开 | `24px` | 本组件 CSS<br>`height`, `width` |
| `--c-selected-options-tag-padding` | 公开 | `2px 6px` | 本组件 CSS<br>`padding` |
| `--c-selected-options-tags-max-height` | 公开 | `112px` | 本组件 CSS<br>`max-height` |
| `--c-selection-editor-accent` | 公开 | `var(--c-color-primary)` | 本组件 CSS<br>`color` |
| `--c-selection-editor-background` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background` |
| `--c-selection-editor-border` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`border-bottom`, `border-right` |
| `--c-selection-editor-check-size` | 公开 | `20px` | 本组件 CSS<br>`height`, `width` |
| `--c-selection-editor-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-selection-editor-dialog-height` | 公开 | `min(30dvh, 260px)` | 本组件 CSS<br>`height`, `min-height` |
| `--c-selection-editor-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-selection-editor-gap` | 公开 | `8px` | 本组件 CSS<br>`gap`, `margin-inline-start`, `padding` |
| `--c-selection-editor-height` | 公开 | `min(40dvh, 320px)` | 本组件 CSS<br>`height`, `min-height` |
| `--c-selection-editor-muted-background` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background` |
| `--c-selection-editor-muted-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-selection-editor-padding` | 公开 | `12px` | 本组件 CSS<br>`margin-block`, `padding` |
| `--c-selection-editor-path-height` | 公开 | `44px` | 本组件 CSS<br>`min-height` |
| `--c-selection-editor-radius` | 公开 | `8px` | 本组件 CSS<br>`border-radius` |
| `--c-selection-editor-row-height` | 公开 | `42px` | 本组件 CSS<br>`min-height` |
| `--c-selection-editor-selected-background` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background` |
| `--c-selection-editor-touch-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-selection-editor-touch-height` | 公开 | `52px` | 本组件 CSS<br>`min-height` |
| `--c-selection-editor-width` | 公开 | `640px` | 本组件 CSS<br>`width` |

</div>

## _components/selection-field

声明来源: `src/_components/selection-field/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-selection-field-gap` | 公开 | `4px` | 本组件 CSS<br>`gap` |
| `--c-selection-field-icon-transition-duration` | 公开 | `0.2s` | 本组件 CSS<br>`transition` |
| `--c-selection-field-input-min-width` | 公开 | `2px` | 本组件 CSS<br>`flex-basis`, `min-width` |
| `--c-selection-field-loading-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |
| `--c-selection-field-search-min-width` | 公开 | `3em` | 本组件 CSS<br>`flex`, `min-width` |

</div>

## alert

声明来源: `src/alert/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-alert-action-margin-left` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`margin-left` |
| `--c-alert-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-alert-border-width` | 公开 | `1px` | 本组件 CSS<br>`border` |
| `--c-alert-close-duration` | 公开 | `var(--c-sys-motion-duration-slow)` | 本组件 CSS<br>`transition` |
| `--c-alert-close-margin-left` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`margin-left` |
| `--c-alert-font-size-content` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-alert-font-size-title` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-alert-font-weight-title` | 公开 | `var(--c-sys-font-weight-medium)` | 本组件 CSS<br>`font-weight` |
| `--c-alert-icon-margin-right` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`margin-right` |
| `--c-alert-icon-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-alert-line-height` | 公开 | `1.5715` | 本组件 CSS<br>`line-height` |
| `--c-alert-line-height-title` | 公开 | `1.5` | 本组件 CSS<br>`line-height` |
| `--c-alert-outline-danger-border` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border-color` |
| `--c-alert-outline-danger-content` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-danger-icon` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-danger-title` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-default-border` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-alert-outline-default-content` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-default-icon` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-default-title` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-info-border` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`border-color` |
| `--c-alert-outline-info-content` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-info-icon` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-info-title` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-success-border` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`border-color` |
| `--c-alert-outline-success-content` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-success-icon` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-success-title` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-warning-border` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`border-color` |
| `--c-alert-outline-warning-content` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-warning-icon` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-outline-warning-title` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-padding-horizontal` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-alert-padding-horizontal-with-title` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-alert-padding-vertical` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-alert-padding-vertical-with-title` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-alert-standard-danger-bg` | 公开 | `rgb(var(--c-danger-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-standard-danger-border` | 公开 | `rgb(var(--c-danger-3))` | 本组件 CSS<br>`border-color` |
| `--c-alert-standard-danger-content` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-danger-icon` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-danger-title` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-default-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-alert-standard-default-border` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-alert-standard-default-content` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-default-icon` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-default-title` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-info-bg` | 公开 | `rgb(var(--c-blue-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-standard-info-border` | 公开 | `rgb(var(--c-blue-3))` | 本组件 CSS<br>`border-color` |
| `--c-alert-standard-info-content` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-info-icon` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-info-title` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-success-bg` | 公开 | `rgb(var(--c-success-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-standard-success-border` | 公开 | `rgb(var(--c-success-3))` | 本组件 CSS<br>`border-color` |
| `--c-alert-standard-success-content` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-success-icon` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-success-title` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-warning-bg` | 公开 | `rgb(var(--c-warning-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-standard-warning-border` | 公开 | `rgb(var(--c-warning-3))` | 本组件 CSS<br>`border-color` |
| `--c-alert-standard-warning-content` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-warning-icon` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-standard-warning-title` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-title-margin-bottom` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`margin-bottom` |
| `--c-alert-tonal-danger-bg` | 公开 | `rgb(var(--c-danger-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-tonal-danger-content` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-danger-icon` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-danger-title` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-default-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-alert-tonal-default-content` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-default-icon` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-default-title` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-info-bg` | 公开 | `rgb(var(--c-blue-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-tonal-info-content` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-info-icon` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-info-title` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-success-bg` | 公开 | `rgb(var(--c-success-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-tonal-success-content` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-success-icon` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-success-title` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-warning-bg` | 公开 | `rgb(var(--c-warning-1))` | 本组件 CSS<br>`background-color` |
| `--c-alert-tonal-warning-content` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-warning-icon` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-alert-tonal-warning-title` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |

</div>

## anchor

声明来源: `src/anchor/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-anchor-border-radius-title-hover` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-anchor-color-bg-line` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-anchor-color-bg-line-active` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-anchor-color-bg-title-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-anchor-color-title` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-anchor-color-title-active` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-anchor-color-title-hover` | 公开 | `rgb(var(--c-primary-5))` | 本组件 CSS<br>`color` |
| `--c-anchor-font-size-title` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-anchor-font-weight-title-active` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-anchor-font-weight-title-hover` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-anchor-line-slider-height` | 公开 | `12px` | 本组件 CSS<br>`height` |
| `--c-anchor-line-width` | 公开 | `2px` | 本组件 CSS<br>`left`, `width` |
| `--c-anchor-sub-item--inset` | 公开 | `-6px` | 本组件 CSS<br>`margin-left` |
| `--c-anchor-title-margin-bottom` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-bottom` |
| `--c-anchor-title-padding-x` | 公开 | `16px` | 本组件 CSS<br>`padding-left` |
| `--c-anchor-title-padding-y` | 公开 | `4px` | 本组件 CSS<br>`padding` |

</div>

## auto-complete

声明来源: `src/auto-complete/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-auto-complete-option-bg-default` | 公开 | `var(--c-sys-color-surface-overlay)` | 跨组件 CSS<br>`background-color` |
| `--c-auto-complete-option-bg-disabled` | 公开 | `var(--c-sys-color-surface-overlay)` | 跨组件 CSS<br>`background-color` |
| `--c-auto-complete-option-bg-hover` | 公开 | `var(--c-sys-color-state-hover)` | 跨组件 CSS<br>`background-color` |
| `--c-auto-complete-option-bg-selected` | 公开 | `var(--c-sys-color-surface-overlay)` | 跨组件 CSS<br>`background-color` |
| `--c-auto-complete-option-font-weight-selected` | 公开 | `var(--c-sys-font-weight-medium)` | 跨组件 CSS<br>`font-weight` |
| `--c-auto-complete-option-height` | 公开 | `36px` | 跨组件 CSS<br>`line-height` |
| `--c-auto-complete-option-padding-horizontal` | 公开 | `var(--c-sys-space-5)` | 跨组件 CSS<br>`padding` |
| `--c-auto-complete-option-text-color-default` | 公开 | `var(--c-sys-color-content-primary)` | 跨组件 CSS<br>`color` |
| `--c-auto-complete-option-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 跨组件 CSS<br>`color` |
| `--c-auto-complete-option-text-color-hover` | 公开 | `var(--c-sys-color-content-primary)` | 跨组件 CSS<br>`color` |
| `--c-auto-complete-option-text-color-selected` | 公开 | `var(--c-sys-color-content-primary)` | 跨组件 CSS<br>`color` |
| `--c-auto-complete-popup-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 跨组件 CSS<br>`background-color` |
| `--c-auto-complete-popup-border-color` | 公开 | `var(--c-sys-color-border-default)` | 跨组件 CSS<br>`border`, `border-bottom`, `border-top` |
| `--c-auto-complete-popup-border-radius` | 公开 | `var(--c-sys-radius-md)` | 跨组件 CSS<br>`border-radius` |
| `--c-auto-complete-popup-box-shadow` | 公开 | `0 4px 10px rgba(0, 0, 0, 0.1)` | 跨组件 CSS<br>`box-shadow` |
| `--c-auto-complete-popup-font-size` | 公开 | `var(--c-sys-font-size-md)` | 跨组件 CSS<br>`font-size` |
| `--c-auto-complete-popup-max-height` | 公开 | `200px` | 跨组件 CSS<br>`max-height` |
| `--c-auto-complete-popup-padding-vertical` | 公开 | `var(--c-sys-space-2)` | 跨组件 CSS<br>`padding` |

</div>

## avatar

声明来源: `src/avatar/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-avatar-bg` | 公开 | `var(--c-color-fill-4)` | 本组件 CSS<br>`background-color` |
| `--c-avatar-border-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`border` |
| `--c-avatar-border-width` | 公开 | `2px` | 本组件 CSS<br>`border` |
| `--c-avatar-circle-border-radius` | 公开 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-avatar-font-size-max-count` | 公开 | `20px` | 本组件 CSS<br>`font-size` |
| `--c-avatar-font-size-text` | 公开 | `20px` | 本组件 CSS<br>`font-size` |
| `--c-avatar-font-weight-text` | 公开 | `500` | 本组件 CSS<br>`font-weight` |
| `--c-avatar-group-item-border` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`border` |
| `--c-avatar-group-item-border-width` | 公开 | `2px` | 本组件 CSS<br>`border` |
| `--c-avatar-group-offset` | 公开 | `-10px` | 本组件 CSS<br>`margin-block-start`, `margin-inline-start` |
| `--c-avatar-group-popover-item-spacing` | 公开 | `8px` | 本组件 CSS<br>`gap` |
| `--c-avatar-hover-transform` | 公开 | `scale(1.1)` | 本组件 CSS<br>`transform` |
| `--c-avatar-max-count-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-avatar-motion-duration` | 公开 | `0.2s` | 本组件 CSS<br>`transition` |
| `--c-avatar-size-default` | 公开 | `40px` | 本组件 CSS<br>`height`, `width` |
| `--c-avatar-size-trigger-button` | 公开 | `20px` | 本组件 CSS<br>`height`, `width` |
| `--c-avatar-size-trigger-icon` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-avatar-spacing-trigger-button-bottom` | 公开 | `4px` | 本组件 CSS<br>`bottom` |
| `--c-avatar-spacing-trigger-button-right` | 公开 | `4px` | 本组件 CSS<br>`inset-inline-end` |
| `--c-avatar-square-border-radius` | 公开 | `4px` | 本组件 CSS<br>`border-radius` |
| `--c-avatar-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-avatar-text-padding-inline` | 公开 | `4px` | 本组件 CSS<br>`padding-inline` |
| `--c-avatar-trigger-button-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-avatar-trigger-button-bg-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-avatar-trigger-button-border-radius` | 公开 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-avatar-trigger-icon-button` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-avatar-trigger-overlay-bg` | 公开 | `color-mix(in srgb, var(--c-color-black) 60%, transparent)` | 本组件 CSS<br>`background-color` |
| `--c-avatar-trigger-overlay-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-avatar-trigger-overlay-icon` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-avatar-z-index-overlay` | 公开 | `0` | 本组件 CSS<br>`z-index` |
| `--c-avatar-z-index-overlay-hover` | 公开 | `2` | 本组件 CSS<br>`z-index` |
| `--c-avatar-z-index-trigger` | 公开 | `1` | 本组件 CSS<br>`z-index` |

</div>

## back-top

声明来源: `src/back-top/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-back-top-background` | 公开 | `var(--c-sys-color-surface-raised)` | 本组件 CSS<br>`background` |
| `--c-back-top-bottom` | 公开 | `40px` | 本组件 CSS<br>`bottom` |
| `--c-back-top-button-border-radius` | 公开 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-back-top-button-size` | 公开 | `var(--c-sys-control-touch-target)` | 本组件 CSS<br>`height`, `width` |
| `--c-back-top-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-back-top-focus-offset` | 公开 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-back-top-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-back-top-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-back-top-hover-background` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-back-top-icon-size` | 公开 | `20px` | 本组件 CSS<br>`height`, `width` |
| `--c-back-top-right` | 公开 | `40px` | 本组件 CSS<br>`right` |
| `--c-back-top-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-back-top-z-index` | 公开 | `var(--c-z-index-local-sticky)` | 本组件 CSS<br>`z-index` |

</div>

## badge

声明来源: `src/badge/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-badge-bg-color` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`background-color` |
| `--c-badge-border-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color`, `box-shadow` |
| `--c-badge-description-size-lg-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-badge-description-size-md-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-badge-description-size-sm-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-badge-description-size-xl-font-size` | 公开 | `var(--c-sys-font-size-xl)` | 本组件 CSS<br>`font-size` |
| `--c-badge-description-size-xs-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-badge-description-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-badge-font-weight` | 公开 | `var(--c-sys-font-weight-medium)` | 本组件 CSS<br>`font-weight` |
| `--c-badge-offset` | 公开 | `2px` | 本组件 CSS<br>`bottom`, `left`, `right`, `top` |
| `--c-badge-ring-width` | 公开 | `2px` | 本组件 CSS<br>`box-shadow`, `line-height` |
| `--c-badge-size-lg-border-radius` | 公开 | `28px` | 本组件 CSS<br>`border-radius` |
| `--c-badge-size-lg-dot-height` | 公开 | `7px` | 本组件 CSS<br>`height` |
| `--c-badge-size-lg-dot-width` | 公开 | `7px` | 本组件 CSS<br>`width` |
| `--c-badge-size-lg-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-badge-size-lg-height` | 公开 | `28px` | 本组件 CSS<br>`line-height`, `min-width` |
| `--c-badge-size-lg-padding` | 公开 | `0 var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-badge-size-lg-scale` | 公开 | `1` | 本组件 CSS<br>`transform` |
| `--c-badge-size-lg-space` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`margin-inline` |
| `--c-badge-size-md-border-radius` | 公开 | `24px` | 本组件 CSS<br>`border-radius` |
| `--c-badge-size-md-dot-height` | 公开 | `6px` | 本组件 CSS<br>`height` |
| `--c-badge-size-md-dot-width` | 公开 | `6px` | 本组件 CSS<br>`width` |
| `--c-badge-size-md-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-badge-size-md-height` | 公开 | `24px` | 本组件 CSS<br>`line-height`, `min-width` |
| `--c-badge-size-md-padding` | 公开 | `0 var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-badge-size-md-scale` | 公开 | `1` | 本组件 CSS<br>`transform` |
| `--c-badge-size-md-space` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`margin-inline` |
| `--c-badge-size-sm-border-radius` | 公开 | `20px` | 本组件 CSS<br>`border-radius` |
| `--c-badge-size-sm-dot-height` | 公开 | `5px` | 本组件 CSS<br>`height` |
| `--c-badge-size-sm-dot-width` | 公开 | `5px` | 本组件 CSS<br>`width` |
| `--c-badge-size-sm-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-badge-size-sm-height` | 公开 | `20px` | 本组件 CSS<br>`line-height`, `min-width` |
| `--c-badge-size-sm-padding` | 公开 | `0 var(--c-sys-space-3)` | 本组件 CSS<br>`padding` |
| `--c-badge-size-sm-scale` | 公开 | `0.8333` | 本组件 CSS<br>`transform` |
| `--c-badge-size-sm-space` | 公开 | `var(--c-sys-space-1)` | 本组件 CSS<br>`margin-inline` |
| `--c-badge-size-xl-border-radius` | 公开 | `32px` | 本组件 CSS<br>`border-radius` |
| `--c-badge-size-xl-dot-height` | 公开 | `8px` | 本组件 CSS<br>`height` |
| `--c-badge-size-xl-dot-width` | 公开 | `8px` | 本组件 CSS<br>`width` |
| `--c-badge-size-xl-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-badge-size-xl-height` | 公开 | `32px` | 本组件 CSS<br>`line-height`, `min-width` |
| `--c-badge-size-xl-padding` | 公开 | `0 10px` | 本组件 CSS<br>`padding` |
| `--c-badge-size-xl-scale` | 公开 | `1` | 本组件 CSS<br>`transform` |
| `--c-badge-size-xl-space` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`margin-inline` |
| `--c-badge-size-xs-border-radius` | 公开 | `20px` | 本组件 CSS<br>`border-radius` |
| `--c-badge-size-xs-dot-height` | 公开 | `4px` | 本组件 CSS<br>`height` |
| `--c-badge-size-xs-dot-width` | 公开 | `4px` | 本组件 CSS<br>`width` |
| `--c-badge-size-xs-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-badge-size-xs-height` | 公开 | `20px` | 本组件 CSS<br>`line-height`, `min-width` |
| `--c-badge-size-xs-padding` | 公开 | `0 var(--c-sys-space-3)` | 本组件 CSS<br>`padding` |
| `--c-badge-size-xs-scale` | 公开 | `0.6667` | 本组件 CSS<br>`transform` |
| `--c-badge-size-xs-space` | 公开 | `0px` | 本组件 CSS<br>`margin-inline` |
| `--c-badge-status-danger-bg-color` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-danger-text-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-badge-status-default-bg-color` | 公开 | `#e0e0e0` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-default-text-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-badge-status-info-bg-color` | 公开 | `var(--c-sys-color-status-info)` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-info-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-badge-status-primary-bg-color` | 公开 | `var(--c-sys-color-action-primary)` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-primary-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-badge-status-secondary-bg-color` | 公开 | `rgb(var(--c-gray-6))` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-secondary-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-badge-status-success-bg-color` | 公开 | `var(--c-sys-color-status-success)` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-success-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-badge-status-tertiary-bg-color` | 公开 | `rgb(var(--c-gray-7))` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-tertiary-text-color` | 公开 | `var(--c-sys-color-content-on-dark)`<br>`var(--c-sys-color-content-on-bright)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`color` |
| `--c-badge-status-warning-bg-color` | 公开 | `var(--c-sys-color-status-warning)` | 本组件 CSS<br>`background-color` |
| `--c-badge-status-warning-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-badge-text-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-badge-variant-outline-bg-color` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-badge-variant-outline-status-danger-text-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-default-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-info-text-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-primary-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-secondary-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-success-text-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-tertiary-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-status-warning-text-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`border`, `color` |
| `--c-badge-variant-outline-text-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border`, `color` |

</div>

## breadcrumb

声明来源: `src/breadcrumb/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-breadcrumb-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-breadcrumb-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-breadcrumb-dropdown-icon` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-font-weight-active` | 公开 | `var(--c-font-weight-400)` | 本组件 CSS<br>`font-weight` |
| `--c-breadcrumb-icon-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-link-text-color` | 公开 | `rgb(var(--c-primary-8))` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-link-text-color-hover` | 公开 | `rgb(var(--c-primary-9))` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-margin-dropdown-icon-left` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-left` |
| `--c-breadcrumb-margin-separator-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin` |
| `--c-breadcrumb-padding-text-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin`, `padding` |
| `--c-breadcrumb-separator-color` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-separator-font-size` | 公开 | `inherit` | 本组件 CSS<br>`font-size` |
| `--c-breadcrumb-separator-margin` | 公开 | `0 var(--c-breadcrumb-margin-separator-horizontal)` | 本组件 CSS<br>`margin` |
| `--c-breadcrumb-size-dropdown-icon` | 公开 | `var(--c-size-3)` | 本组件 CSS<br>`font-size` |
| `--c-breadcrumb-size-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-breadcrumb-size-text-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`line-height` |
| `--c-breadcrumb-text-border-radius-hover` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-breadcrumb-text-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-text-color-active` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-breadcrumb-touch-target-size` | 公开 | `44px` | 本组件 CSS<br>`min-height`, `min-width` |

</div>

## button

声明来源: `src/button/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-button-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-button-content-gap` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`gap` |
| `--c-button-danger-color` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`background-color` |
| `--c-button-danger-disabled-color` | 公开 | `rgb(var(--c-danger-3))`<br>`rgba(var(--c-danger-6), 0.5)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color`, `color` |
| `--c-button-danger-foreground-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-button-danger-tonal-color` | 公开 | `rgb(var(--c-danger-1))` | 本组件 CSS<br>`background-color` |
| `--c-button-default-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color` |
| `--c-button-default-foreground-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`background-color`, `color` |
| `--c-button-default-tonal-color` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-button-disabled-color` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-button-disabled-solid-text-color` | 公开 | `var(--c-sys-color-content-on-dark)`<br>`rgba(255, 255, 255, 0.3)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`color` |
| `--c-button-disabled-text-color` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-button-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-button-info-color` | 公开 | `var(--c-sys-color-status-info)` | 本组件 CSS<br>`background-color` |
| `--c-button-info-disabled-color` | 公开 | `rgb(var(--c-blue-3))`<br>`rgba(var(--c-blue-6), 0.5)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color`, `color` |
| `--c-button-info-foreground-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-button-info-tonal-color` | 公开 | `rgb(var(--c-blue-1))` | 本组件 CSS<br>`background-color` |
| `--c-button-lg-height` | 公开 | `36px` | 本组件 CSS<br>`height`, `min-width`, `width` |
| `--c-button-lg-padding` | 公开 | `0 var(--c-sys-space-7)` | 本组件 CSS<br>`padding` |
| `--c-button-loading-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |
| `--c-button-loading-line-height` | 公开 | `3px` | 本组件 CSS<br>`height` |
| `--c-button-md-height` | 公开 | `32px` | 本组件 CSS<br>`height`, `min-width`, `width` |
| `--c-button-md-padding` | 公开 | `0 var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-button-plain-state-opacity-active` | 公开 | `1` | 本组件 CSS<br>`opacity` |
| `--c-button-plain-state-opacity-hover` | 公开 | `0.5` | 本组件 CSS<br>`opacity` |
| `--c-button-primary-color` | 公开 | `var(--c-sys-color-action-primary)` | 本组件 CSS<br>`background-color` |
| `--c-button-primary-disabled-color` | 公开 | `rgb(var(--c-primary-3))`<br>`rgba(var(--c-primary-6), 0.5)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color`, `color` |
| `--c-button-primary-foreground-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-button-primary-state-layer-color` | 公开 | `var(--c-button-solid-state-layer-color)` | 本组件 CSS<br>`background-color` |
| `--c-button-primary-tonal-color` | 公开 | `rgb(var(--c-primary-1))` | 本组件 CSS<br>`background-color` |
| `--c-button-secondary-color` | 公开 | `rgb(var(--c-gray-6))` | 本组件 CSS<br>`background-color` |
| `--c-button-secondary-foreground-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-button-secondary-tonal-color` | 公开 | `rgb(var(--c-gray-2))` | 本组件 CSS<br>`background-color` |
| `--c-button-sm-height` | 公开 | `28px` | 本组件 CSS<br>`height`, `min-width`, `width` |
| `--c-button-sm-padding` | 公开 | `0 var(--c-sys-space-5)` | 本组件 CSS<br>`padding` |
| `--c-button-solid-state-layer-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`background-color` |
| `--c-button-solid-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-button-stacked-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap`, `min-height`, `min-width` |
| `--c-button-state-layer-color` | 公开 | `var(--c-sys-color-surface-page)` | 本组件 CSS<br>`background-color` |
| `--c-button-state-opacity-active` | 公开 | `0.12` | 本组件 CSS<br>`opacity` |
| `--c-button-state-opacity-hover` | 公开 | `0.08` | 本组件 CSS<br>`opacity` |
| `--c-button-success-color` | 公开 | `var(--c-sys-color-status-success)` | 本组件 CSS<br>`background-color` |
| `--c-button-success-disabled-color` | 公开 | `rgb(var(--c-success-3))`<br>`rgba(var(--c-success-6), 0.5)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color`, `color` |
| `--c-button-success-foreground-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-button-success-tonal-color` | 公开 | `rgb(var(--c-success-1))` | 本组件 CSS<br>`background-color` |
| `--c-button-tertiary-color` | 公开 | `rgb(var(--c-gray-7))` | 本组件 CSS<br>`background-color` |
| `--c-button-tertiary-foreground-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-button-tertiary-state-layer-color` | 公开 | `var(--c-sys-color-content-on-bright)`<br>`var(--c-sys-color-content-on-dark)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-button-tertiary-text-color` | 公开 | `var(--c-sys-color-content-on-dark)`<br>`var(--c-sys-color-content-on-bright)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`color` |
| `--c-button-tertiary-tonal-color` | 公开 | `rgb(var(--c-gray-1))` | 本组件 CSS<br>`background-color` |
| `--c-button-warning-color` | 公开 | `var(--c-sys-color-status-warning)` | 本组件 CSS<br>`background-color` |
| `--c-button-warning-disabled-color` | 公开 | `rgb(var(--c-warning-3))`<br>`rgba(var(--c-warning-6), 0.5)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color`, `color` |
| `--c-button-warning-foreground-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-button-warning-tonal-color` | 公开 | `rgb(var(--c-warning-1))` | 本组件 CSS<br>`background-color` |
| `--c-button-xl-height` | 公开 | `44px` | 本组件 CSS<br>`height`, `min-width`, `width` |
| `--c-button-xl-padding` | 公开 | `0 var(--c-sys-space-8)` | 本组件 CSS<br>`padding` |
| `--c-button-xs-height` | 公开 | `24px` | 本组件 CSS<br>`height`, `min-width`, `width` |
| `--c-button-xs-padding` | 公开 | `0 var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |

</div>

## calendar

声明来源: `src/calendar/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-calendar-bg-cell-disabled` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-bg-cell-hover-in-range` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-bg-cell-hover-range-boundary` | 公开 | `var(--c-color-primary-light-2)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-bg-cell-in-range` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-bg-cell-range-boundary` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-calendar-bg-circle-selected` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color`, `border` |
| `--c-calendar-bg-switch-icon` | 公开 | `var(--c-color-bg-5)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-bg-switch-icon-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-calendar-box-shadow` | 公开 | `var(--c-color-primary-light-3)` | 本组件 CSS<br>`box-shadow` |
| `--c-calendar-cell-text-in-view` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-calendar-cell-text-not-in-view` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-calendar-cell-text-selected` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-calendar-cell-today-border-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border` |
| `--c-calendar-date-circle-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-calendar-date-circle-size` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`height`, `width` |
| `--c-calendar-date-content-height` | 公开 | `70px` | 本组件 CSS<br>`height` |
| `--c-calendar-date-padding` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-calendar-date-value-font-size` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-date-value-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-calendar-header-height` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-calendar-header-icon-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-calendar-header-icon-box-shadow` | 公开 | `0 0 0 var(--c-spacing-1) var(--c-calendar-box-shadow)` | 本组件 CSS<br>`box-shadow` |
| `--c-calendar-header-icon-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-header-icon-margin` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin`, `margin-left`, `margin-right` |
| `--c-calendar-header-icon-size` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`height`, `line-height`, `width` |
| `--c-calendar-header-padding-horizontal` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`padding` |
| `--c-calendar-header-padding-vertical` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`padding` |
| `--c-calendar-header-value-font-size` | 公开 | `var(--c-font-size-title-2)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-header-value-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-calendar-header-value-month-margin` | 公开 | `var(--c-spacing-10)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-calendar-header-value-month-width` | 公开 | `var(--c-size-19)` | 本组件 CSS<br>`width` |
| `--c-calendar-header-value-year-margin` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-calendar-header-value-year-width` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`width` |
| `--c-calendar-mode-year-body-padding` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-calendar-mode-year-min-width` | 公开 | `820px` | 本组件 CSS<br>`min-width` |
| `--c-calendar-month-cell-date-circle-size` | 公开 | `22px` | 本组件 CSS<br>`height`, `width` |
| `--c-calendar-month-cell-date-padding` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-calendar-month-cell-date-value-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-month-cell-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-month-cell-week-list-item-padding` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-calendar-month-row-height` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`height` |
| `--c-calendar-month-title-font-size` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-month-title-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-calendar-month-title-padding-horizontal` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-calendar-month-title-padding-vertical` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-calendar-month-with-days-row-height` | 公开 | `26px` | 本组件 CSS<br>`height` |
| `--c-calendar-panel-bg-cell-hover` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-calendar-panel-bg-cell-selected` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-calendar-panel-body-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-body-padding-vertical` | 公开 | `14px` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-cell-boundary-border-radius` | 公开 | `(   (var(~'--c-calendar-panel-date-cell-circle-height') + var(~'--c-calendar-panel-date-cell-padding-vertical') * 2) / 2 )` | 本组件 CSS<br>`border-radius` |
| `--c-calendar-panel-cell-padding-vertical` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-cell-selected-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-calendar-panel-color-current-time-dot` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-calendar-panel-date-cell-circle-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `line-height`, `min-width` |
| `--c-calendar-panel-date-cell-padding-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-date-value-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-panel-footer-height` | 公开 | `38px` | 本组件 CSS<br>`height`, `line-height` |
| `--c-calendar-panel-header-icon-margin` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-calendar-panel-header-icon-size` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `line-height`, `width` |
| `--c-calendar-panel-header-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-header-padding-vertical` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-header-value-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-calendar-panel-header-value-line-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`line-height` |
| `--c-calendar-panel-text-color-cell-hover` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-calendar-panel-text-color-cell-selected` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-calendar-panel-today-dot-offset` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-left` |
| `--c-calendar-panel-today-dot-size` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`height`, `width` |
| `--c-calendar-panel-week-list-item-font-weight` | 公开 | `var(--c-font-weight-400)` | 本组件 CSS<br>`font-weight` |
| `--c-calendar-panel-week-list-item-height` | 公开 | `var(--c-size-8)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-calendar-panel-year-cell-circle-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`border-radius` |
| `--c-calendar-panel-year-cell-padding-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-calendar-panel-year-date-value-border-radius` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`border-radius` |
| `--c-calendar-panel-year-mode-cell-padding-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-calendar-switch-icon` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-calendar-text-color-cell-hover-range-boundary` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-calendar-text-color-cell-range-boundary` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-calendar-text-title-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-calendar-week-list-item-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-calendar-week-list-item-padding-vertical` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-calendar-week-list-text-color` | 公开 | `#7d7d7f` | 本组件 CSS<br>`color` |
| `--c-calendar-year-cell-padding-horizontal` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-calendar-year-cell-padding-vertical` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |

</div>

## card

声明来源: `src/card/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-card-animation-duration` | 公开 | `var(--c-sys-motion-duration-slow)` | 本组件 CSS<br>`transition` |
| `--c-card-animation-easing` | 公开 | `var(--c-sys-motion-easing-standard)` | 本组件 CSS<br>`transition-timing-function` |
| `--c-card-background` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-card-border-radius` | 公开 | `4px` | 本组件 CSS<br>`border-radius` |
| `--c-card-close-button-background` | 公开 | `#212121` | 本组件 CSS<br>`background-color` |
| `--c-card-close-button-border-radius` | 公开 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-card-close-button-icon-size` | 公开 | `24px` | 本组件 CSS<br>`font-size` |
| `--c-card-close-button-size` | 公开 | `56px` | 本组件 CSS<br>`height`, `width` |
| `--c-card-close-button-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-card-content-color` | 公开 | `var(--c-sys-color-content-tertiary)` | 本组件 CSS<br>`color` |
| `--c-card-content-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-card-content-margin` | 公开 | `16px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-content-padding` | 公开 | `0 16px` | 本组件 CSS<br>`padding` |
| `--c-card-content-row-margin` | 公开 | `16px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-description-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-card-description-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-card-description-margin` | 公开 | `20px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-description-padding` | 公开 | `0 13px` | 本组件 CSS<br>`padding` |
| `--c-card-filled-background` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-card-floating-buttons-bottom` | 公开 | `16px` | 本组件 CSS<br>`bottom` |
| `--c-card-floating-buttons-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-card-floating-buttons-right` | 公开 | `16px` | 本组件 CSS<br>`right` |
| `--c-card-footer-bottom` | 公开 | `9px` | 本组件 CSS<br>`bottom` |
| `--c-card-footer-margin` | 公开 | `30px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-footer-padding` | 公开 | `0 12px` | 本组件 CSS<br>`padding` |
| `--c-card-footer-right` | 公开 | `13px` | 本组件 CSS<br>`right` |
| `--c-card-hover-shadow` | 公开 | `0 4px 12px rgba(0, 0, 0, 0.12)` | 本组件 CSS<br>`box-shadow` |
| `--c-card-image-height` | 公开 | `200px` | 本组件 CSS<br>`height` |
| `--c-card-image-width` | 公开 | `100%` | 本组件 CSS<br>`width` |
| `--c-card-line-height` | 公开 | `22px` | 本组件 CSS<br>`line-height` |
| `--c-card-outline-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-card-padding` | 公开 | `0 0 15px 0` | 本组件 CSS<br>`padding` |
| `--c-card-row-height` | 公开 | `140px` | 本组件 CSS<br>`min-height` |
| `--c-card-row-image-width` | 公开 | `140px` | 本组件 CSS<br>`width` |
| `--c-card-row-line-height` | 公开 | `1.5` | 本组件 CSS<br>`line-height` |
| `--c-card-size-sm-section-margin` | 公开 | `8px 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-size-sm-section-padding` | 公开 | `0 12px` | 本组件 CSS<br>`padding` |
| `--c-card-size-sm-title-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-card-subtitle-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-card-subtitle-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-card-subtitle-margin` | 公开 | `10px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-subtitle-padding` | 公开 | `0 12px` | 本组件 CSS<br>`padding` |
| `--c-card-subtitle-row-margin` | 公开 | `-8px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-title-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-card-title-font-size` | 公开 | `20px` | 本组件 CSS<br>`font-size` |
| `--c-card-title-margin` | 公开 | `15px 0 0 0` | 本组件 CSS<br>`margin` |
| `--c-card-title-padding` | 公开 | `0 12px` | 本组件 CSS<br>`padding` |
| `--c-card-title-row-margin` | 公开 | `12px 0` | 本组件 CSS<br>`margin` |

</div>

## carousel

声明来源: `src/carousel/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-carousel-arrow-background` | 公开 | `rgb(0 0 0 / 35%)` | 本组件 CSS<br>`background` |
| `--c-carousel-arrow-background-hover` | 公开 | `rgb(0 0 0 / 55%)` | 本组件 CSS<br>`background` |
| `--c-carousel-arrow-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-carousel-arrow-disabled-opacity` | 公开 | `0.4` | 本组件 CSS<br>`opacity` |
| `--c-carousel-arrow-font-size` | 公开 | `var(--c-sys-font-size-xl)` | 本组件 CSS<br>`font-size` |
| `--c-carousel-arrow-margin` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`bottom`, `left`, `right`, `top` |
| `--c-carousel-arrow-size` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`height`, `width` |
| `--c-carousel-card-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-carousel-card-opacity` | 公开 | `0.6` | 本组件 CSS<br>`opacity` |
| `--c-carousel-card-scale` | 公开 | `0.85` | 本组件 CSS<br>`transform` |
| `--c-carousel-fade-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-carousel-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-carousel-focus-offset` | 公开 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-carousel-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-carousel-indicator-color-active` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`background` |
| `--c-carousel-indicator-color-default` | 公开 | `rgb(255 255 255 / 35%)` | 本组件 CSS<br>`background` |
| `--c-carousel-indicator-dot-size` | 公开 | `8px` | 本组件 CSS<br>`height`, `width` |
| `--c-carousel-indicator-gap` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`gap` |
| `--c-carousel-indicator-line-border-radius` | 公开 | `var(--c-sys-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-carousel-indicator-line-height` | 公开 | `3px` | 本组件 CSS<br>`height` |
| `--c-carousel-indicator-line-width` | 公开 | `20px` | 本组件 CSS<br>`width` |
| `--c-carousel-indicator-outer-margin-bottom` | 公开 | `var(--c-sys-space-8)` | 本组件 CSS<br>`padding-bottom` |
| `--c-carousel-indicator-position` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`bottom`, `left`, `right`, `top` |
| `--c-carousel-navigation-z-index` | 公开 | `10` | 本组件 CSS<br>`z-index` |
| `--c-carousel-transition-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-carousel-transition-timing-function` | 公开 | `ease` | 本组件 CSS<br>`transition` |

</div>

## cascader

声明来源: `src/cascader/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-cascader-checkbox-bg-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-cascader-font-item-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-cascader-item-bg-active` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-cascader-item-bg-disabled` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-cascader-item-bg-disabled-active` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-cascader-item-bg-hover` | 公开 | `var(--c-cascader-item-bg-active)` | 本组件 CSS<br>`background-color` |
| `--c-cascader-item-icon-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-cascader-item-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-cascader-item-text-color-active` | 公开 | `var(--c-cascader-item-text-color)` | 本组件 CSS<br>`color` |
| `--c-cascader-item-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-cascader-item-text-color-disabled-active` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-cascader-item-text-color-hover` | 公开 | `var(--c-cascader-item-text-color)` | 本组件 CSS<br>`color` |
| `--c-cascader-margin-checkbox-right` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`margin-right` |
| `--c-cascader-margin-item-icon-left` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`padding-right` |
| `--c-cascader-option-min-width` | 公开 | `100px` | 本组件 CSS<br>`min-width` |
| `--c-cascader-padding-item-left` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`padding-left`, `padding-right` |
| `--c-cascader-padding-item-right` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`padding-right`, `right` |
| `--c-cascader-panel-column-max-height` | 公开 | `200px` | 本组件 CSS<br>`max-height` |
| `--c-cascader-panel-column-min-width` | 公开 | `120px` | 本组件 CSS<br>`min-width` |
| `--c-cascader-popup-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-cascader-popup-box-shadow` | 公开 | `0 4px 10px rgba(0, 0, 0, 0.1)` | 本组件 CSS<br>`box-shadow` |
| `--c-cascader-popup-color-border` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`border`, `border-right`, `border-top` |
| `--c-cascader-popup-max-height` | 公开 | `200px` | 本组件 CSS<br>`height` |
| `--c-cascader-popup-padding-vertical` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`padding` |
| `--c-cascader-size-item-height` | 公开 | `36px` | 本组件 CSS<br>`height`, `line-height` |
| `--c-cascader-size-item-icon` | 公开 | `12px` | 本组件 CSS<br>`font-size`, `margin-top`, `padding-right` |
| `--c-cascader-slide-margin` | 公开 | `120px` | 本组件 CSS<br>`margin-left` |

</div>

## checkbox

声明来源: `src/checkbox/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-checkbox-action-padding` | 公开 | `5px` | 本组件 CSS<br>`padding` |
| `--c-checkbox-animation-duration` | 公开 | `var(--c-transition-duration-3)` | 本组件 CSS<br>`transition` |
| `--c-checkbox-control-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-checkbox-control-color-checked` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color`, `outline` |
| `--c-checkbox-control-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-checkbox-control-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-checkbox-control-size` | 公开 | `14px` | 本组件 CSS<br>`height`, `width` |
| `--c-checkbox-group-gap` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`gap` |
| `--c-checkbox-label-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-checkbox-label-gap` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-inline-start` |
| `--c-checkbox-label-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-checkbox-label-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-internal-checkbox-action-radius` | 内部 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-internal-checkbox-background` | 内部 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color` |
| `--c-internal-checkbox-background-disabled` | 内部 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-internal-checkbox-border-radius` | 内部 | `2px` | 本组件 CSS<br>`border-radius` |
| `--c-internal-checkbox-border-width` | 内部 | `1px` | 本组件 CSS<br>`border` |
| `--c-internal-checkbox-focus-offset` | 内部 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-internal-checkbox-focus-width` | 内部 | `2px` | 本组件 CSS<br>`outline` |
| `--c-internal-checkbox-hover-background` | 内部 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-internal-checkbox-mark-color` | 内部 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color`, `color` |
| `--c-internal-checkbox-mark-height` | 内部 | `2px` | 本组件 CSS<br>`height` |
| `--c-internal-checkbox-mark-radius` | 内部 | `1px` | 本组件 CSS<br>`border-radius` |
| `--c-internal-checkbox-mark-size` | 内部 | `75%` | 本组件 CSS<br>`height`, `width` |

</div>

## collapse

声明来源: `src/collapse/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-collapse-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-collapse-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-collapse-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border` |
| `--c-collapse-content-bg` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-collapse-content-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-collapse-content-padding-vertical` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-collapse-content-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-collapse-content-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-collapse-expand-icon` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-collapse-expand-icon-active-transform` | 公开 | `rotate(90deg)` | 本组件 CSS<br>`transform` |
| `--c-collapse-expand-icon-right-active-transform` | 公开 | `rotate(-90deg)` | 本组件 CSS<br>`transform` |
| `--c-collapse-expand-icon-right-transform` | 公开 | `rotate(0deg)` | 本组件 CSS<br>`transform` |
| `--c-collapse-expand-icon-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-collapse-expand-icon-spacing-text` | 公开 | `5px` | 本组件 CSS<br>`gap` |
| `--c-collapse-expand-icon-transform` | 公开 | `rotate(0deg)` | 本组件 CSS<br>`transform` |
| `--c-collapse-item-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-bottom` |
| `--c-collapse-item-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border-bottom` |
| `--c-collapse-item-margin-top` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-top` |
| `--c-collapse-line-height` | 公开 | `1.5715` | 本组件 CSS<br>`line-height` |
| `--c-collapse-motion-duration` | 公开 | `var(--c-transition-duration-2)` | 本组件 CSS<br>`transition` |
| `--c-collapse-motion-easing` | 公开 | `var(--c-transition-timing-function-standard)` | 本组件 CSS<br>`transition` |
| `--c-collapse-title-bg` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background`, `background-color` |
| `--c-collapse-title-bg-active` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color` |
| `--c-collapse-title-bg-disabled` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color` |
| `--c-collapse-title-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-collapse-title-font-weight-active` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-collapse-title-line-height` | 公开 | `24px` | 本组件 CSS<br>`line-height` |
| `--c-collapse-title-padding-horizontal` | 公开 | `13px` | 本组件 CSS<br>`padding` |
| `--c-collapse-title-padding-vertical` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-collapse-title-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-collapse-title-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |

</div>

## color-picker

声明来源: `src/color-picker/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-color-picker-control-bar-alpha-margin-top` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin-top` |
| `--c-color-picker-control-bar-border-radius` | 公开 | `10px` | 本组件 CSS<br>`border-radius` |
| `--c-color-picker-control-bar-handle-inner-offset` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`height`, `width` |
| `--c-color-picker-control-bar-handle-size` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`height`, `width` |
| `--c-color-picker-control-bar-height` | 公开 | `14px` | 本组件 CSS<br>`height` |
| `--c-color-picker-control-bar-width` | 公开 | `182px` | 本组件 CSS<br>`width` |
| `--c-color-picker-input-bg-color` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-color-picker-input-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-color-picker-input-size-lg-padding` | 公开 | `calc((var(--c-field-size-lg-height) - var(--c-color-picker-preview-size-lg)) / 2) var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-color-picker-input-size-md-padding` | 公开 | `calc((var(--c-field-size-md-height) - var(--c-color-picker-preview-size-md)) / 2) var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-color-picker-input-size-sm-padding` | 公开 | `calc((var(--c-field-size-sm-height) - var(--c-color-picker-preview-size-sm)) / 2) var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-color-picker-input-size-xs-padding` | 公开 | `calc((var(--c-field-size-xs-height) - var(--c-color-picker-preview-size-xs)) / 2) var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-color-picker-palette-handle-border-size` | 公开 | `var(--c-border-width-2)` | 本组件 CSS<br>`border` |
| `--c-color-picker-palette-handle-size` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`height`, `width` |
| `--c-color-picker-palette-height` | 公开 | `178px` | 本组件 CSS<br>`height` |
| `--c-color-picker-panel-affix-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-color-picker-panel-alpha-input-width` | 公开 | `52px` | 本组件 CSS<br>`width` |
| `--c-color-picker-panel-bg-color` | 公开 | `var(--c-color-bg-1)` | 本组件 CSS<br>`background-color` |
| `--c-color-picker-panel-block-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-color-picker-panel-block-margin` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin` |
| `--c-color-picker-panel-block-size` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`height`, `width` |
| `--c-color-picker-panel-border-color` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`border`, `border-left`, `border-right`, `border-top` |
| `--c-color-picker-panel-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-color-picker-panel-box-shadow` | 公开 | `var(--c-shadow2-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-color-picker-panel-checker-size` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`background-size` |
| `--c-color-picker-panel-colors-empty-margin-y` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin` |
| `--c-color-picker-panel-colors-list-margin` | 公开 | `calc(-1 * var(--c-spacing-4)) calc(-1 * var(--c-spacing-2)) 0` | 本组件 CSS<br>`margin` |
| `--c-color-picker-panel-colors-section-margin-top` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin-top` |
| `--c-color-picker-panel-colors-wrapper-margin-top` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-top` |
| `--c-color-picker-panel-empty-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-color-picker-panel-format-padding-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding-left` |
| `--c-color-picker-panel-format-select-width` | 公开 | `58px` | 本组件 CSS<br>`width` |
| `--c-color-picker-panel-input-group-margin-left` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin-left` |
| `--c-color-picker-panel-input-margin-top` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin-top` |
| `--c-color-picker-panel-input-padding-x` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-color-picker-panel-padding` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`padding` |
| `--c-color-picker-panel-preview-size` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`font-size`, `height`, `width` |
| `--c-color-picker-panel-section-title-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-color-picker-panel-section-title-font-weight` | 公开 | `var(--c-font-weight-400)` | 本组件 CSS<br>`font-weight` |
| `--c-color-picker-panel-width` | 公开 | `260px` | 本组件 CSS<br>`width` |
| `--c-color-picker-preview-border-color` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`border` |
| `--c-color-picker-preview-border-size` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border` |
| `--c-color-picker-preview-size-lg` | 公开 | `26px` | 本组件 CSS<br>`height`, `padding`, `width` |
| `--c-color-picker-preview-size-md` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `padding`, `width` |
| `--c-color-picker-preview-size-sm` | 公开 | `22px` | 本组件 CSS<br>`height`, `padding`, `width` |
| `--c-color-picker-preview-size-xs` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`height`, `padding`, `width` |
| `--c-color-picker-value-font-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-color-picker-value-font-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-color-picker-value-font-size` | 公开 | `var(--c-field-size-md-font-size)` | 本组件 CSS<br>`font-size` |
| `--c-color-picker-value-margin-left` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-left` |

</div>

## count-to

声明来源: `src/count-to/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-count-to-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-count-to-text-font-size` | 公开 | `var(--c-font-size-lg)` | 本组件 CSS<br>`font-size` |

</div>

## countdown

声明来源: `src/countdown/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-countdown-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-countdown-text-font-size` | 公开 | `var(--c-font-size-lg)` | 本组件 CSS<br>`font-size` |

</div>

## date/picker

声明来源: `src/date/picker/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-date-picker-actions-padding` | 公开 | `8px 12px` | 本组件 CSS<br>`padding` |
| `--c-date-picker-body-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-body-padding-vertical` | 公开 | `14px` | 本组件 CSS<br>`padding` |
| `--c-date-picker-box-shadow` | 公开 | `var(--c-shadow1-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-date-picker-btn-confirm-margin-vertical` | 公开 | `5px` | 本组件 CSS<br>`margin` |
| `--c-date-picker-cell-bg-disabled` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-cell-bg-hover-in-range` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-cell-bg-in-range` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-cell-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-date-picker-cell-font-weight-in-view` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-date-picker-cell-hover-range-boundary-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-cell-hover-range-boundary-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-date-picker-cell-range-boundary-bg` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-cell-range-boundary-text-color` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-date-picker-cell-text-color-in-view` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-date-picker-cell-text-color-not-in-view` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-date-picker-container-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-date-picker-container-min-height` | 公开 | `var(--c-size-15)` | 本组件 CSS<br>`min-height` |
| `--c-date-picker-datetime-popover-width` | 公开 | `calc(var(--c-date-picker-panel-date-width) + var(--c-date-picker-time-panel-min-width) + 2px)` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-footer-btn-wrapper-padding-horizontal` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-footer-btn-wrapper-padding-vertical` | 公开 | `3px` | 本组件 CSS<br>`padding` |
| `--c-date-picker-footer-extra-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-date-picker-footer-extra-padding-horizontal` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-footer-extra-padding-vertical` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-footer-now-height` | 公开 | `var(--c-size-9)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-date-picker-header-label-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-date-picker-header-label-padding` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-header-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-header-padding-vertical` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-header-title-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-date-picker-header-title-line-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`line-height` |
| `--c-date-picker-panel-background` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background` |
| `--c-date-picker-panel-border` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`border` |
| `--c-date-picker-panel-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-date-picker-panel-cell-bg-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-panel-cell-bg-selected` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-panel-cell-border-radius` | 公开 | `var(--c-date-picker-panel-cell-circle-height)` | 本组件 CSS<br>`border-bottom-left-radius`, `border-bottom-right-radius`, `border-top-left-radius`, `border-top-right-radius` |
| `--c-date-picker-panel-cell-boundary-border-radius` | 公开 | `var(--c-date-picker-panel-cell-circle-height)` | 本组件 CSS<br>`border-bottom-left-radius`, `border-bottom-right-radius`, `border-radius`, `border-top-left-radius`, `border-top-right-radius` |
| `--c-date-picker-panel-cell-circle-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`border-bottom-left-radius`, `border-bottom-right-radius`, `border-radius`, `border-top-left-radius`, `border-top-right-radius`, `height`, `line-height`, `min-width`, `width` |
| `--c-date-picker-panel-cell-padding-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding`, `padding-left`, `padding-right` |
| `--c-date-picker-panel-cell-selected-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-date-picker-panel-cell-text-color-hover` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-date-picker-panel-cell-text-color-selected` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-date-picker-panel-current-time-dot-color` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-panel-date-width` | 公开 | `265px` | 本组件 CSS<br>`flex`, `min-width`, `width` |
| `--c-date-picker-panel-label-bg-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-panel-month-width` | 公开 | `265px` | 本组件 CSS<br>`width` |
| `--c-date-picker-panel-preferred-width` | 公开 | `var(--c-date-picker-popover-width)` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-panel-quarter-width` | 公开 | `265px` | 本组件 CSS<br>`width` |
| `--c-date-picker-panel-radius` | 公开 | `8px` | 本组件 CSS<br>`border-radius` |
| `--c-date-picker-panel-time-cell-spacing-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-panel-time-cell-width` | 公开 | `var(--c-size-9)` | 本组件 CSS<br>`width` |
| `--c-date-picker-panel-time-padding` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-panel-time-padding-horizontal` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding-left` |
| `--c-date-picker-panel-week-width` | 公开 | `298px` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-panel-year-width` | 公开 | `265px` | 本组件 CSS<br>`width` |
| `--c-date-picker-popover-gap` | 公开 | `32px` | 本组件 CSS<br>`max-height`, `max-width` |
| `--c-date-picker-popover-max-height` | 公开 | `calc(50dvh - var(--c-date-picker-popover-gap))` | 本组件 CSS<br>`max-height` |
| `--c-date-picker-popover-width` | 公开 | `calc(var(--c-date-picker-panel-date-width) + 2px)` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-preview-outline` | 公开 | `1px dashed var(--c-color-primary)` | 本组件 CSS<br>`outline` |
| `--c-date-picker-range-panel-min-width` | 公开 | `224px` | 本组件 CSS<br>`min-width` |
| `--c-date-picker-range-popover-width` | 公开 | `calc(var(--c-date-picker-panel-date-width) * 2 + 2px)` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-row-padding-vertical` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-shortcuts-active-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-date-picker-shortcuts-column-width` | 公开 | `128px` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-shortcuts-inline-item-margin-right` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`margin` |
| `--c-date-picker-shortcuts-inline-item-margin-vertical` | 公开 | `5px` | 本组件 CSS<br>`margin` |
| `--c-date-picker-shortcuts-item-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-shortcuts-item-padding-vertical` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-shortcuts-margin-top` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`margin` |
| `--c-date-picker-shortcuts-max-height` | 公开 | `300px` | 本组件 CSS<br>`max-height` |
| `--c-date-picker-shortcuts-placement-item-margin-vertical` | 公开 | `5px` | 本组件 CSS<br>`margin` |
| `--c-date-picker-shortcuts-placement-padding-horizontal` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-date-picker-shortcuts-placement-padding-vertical` | 公开 | `5px` | 本组件 CSS<br>`padding` |
| `--c-date-picker-shortcuts-width` | 公开 | `106px` | 本组件 CSS<br>`width` |
| `--c-date-picker-switch-icon-bg` | 公开 | `var(--c-color-bg-popup)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-switch-icon-bg-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-date-picker-switch-icon-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-date-picker-switch-icon-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-date-picker-switch-icon-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-date-picker-switch-icon-margin` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-date-picker-switch-icon-size` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `width` |
| `--c-date-picker-time-panel-min-width` | 公开 | `160px` | 本组件 CSS<br>`flex`, `min-width`, `width` |
| `--c-date-picker-timepicker-height` | 公开 | `276px` | 本组件 CSS<br>`height` |
| `--c-date-picker-timepicker-title-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-date-picker-timepicker-title-height` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-date-picker-today-dot-offset` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`bottom`, `margin-left` |
| `--c-date-picker-today-dot-size` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`height`, `width` |
| `--c-date-picker-transition-duration-1` | 公开 | `var(--c-transition-duration-1)` | 本组件 CSS<br>`transition` |
| `--c-date-picker-transition-timing-function-linear` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`transition` |
| `--c-date-picker-view-tab-pane-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-date-picker-view-tab-pane-text-color-active` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-date-picker-view-tab-pane-text-color-inactive` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-date-picker-view-tab-pane-text-icon-spacing` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-date-picker-view-tabs-height` | 公开 | `50px` | 本组件 CSS<br>`height`, `line-height` |
| `--c-date-picker-week-list-item-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-date-picker-week-list-item-height` | 公开 | `var(--c-size-8)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-date-picker-week-popover-width` | 公开 | `calc(var(--c-date-picker-panel-week-width) + 2px)` | 本组件 CSS<br>`flex`, `width` |
| `--c-date-picker-week-range-popover-width` | 公开 | `calc(var(--c-date-picker-panel-week-width) * 2 + 2px)` | 本组件 CSS<br>`flex`, `width` |

</div>

## descriptions

声明来源: `src/descriptions/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-descriptions-border-bg-label` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-descriptions-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border`, `border-bottom`, `border-right` |
| `--c-descriptions-border-item-size-lg-padding-horizontal` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `padding-right` |
| `--c-descriptions-border-item-size-lg-padding-vertical` | 公开 | `9px` | 本组件 CSS<br>`padding` |
| `--c-descriptions-border-item-size-md-padding-horizontal` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `padding-right` |
| `--c-descriptions-border-item-size-md-padding-vertical` | 公开 | `5px` | 本组件 CSS<br>`padding` |
| `--c-descriptions-border-item-size-sm-padding-horizontal` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `padding-right` |
| `--c-descriptions-border-item-size-sm-padding-vertical` | 公开 | `3px` | 本组件 CSS<br>`padding` |
| `--c-descriptions-border-item-size-xl-padding-horizontal` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `padding-right` |
| `--c-descriptions-border-item-size-xl-padding-vertical` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-descriptions-border-item-size-xs-padding-horizontal` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `padding-right` |
| `--c-descriptions-border-item-size-xs-padding-vertical` | 公开 | `3px` | 本组件 CSS<br>`padding` |
| `--c-descriptions-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-descriptions-border-style` | 公开 | `solid` | 本组件 CSS<br>`border`, `border-bottom`, `border-right` |
| `--c-descriptions-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `border-bottom`, `border-right` |
| `--c-descriptions-font-size-title` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-descriptions-font-weight-text-label` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-descriptions-font-weight-text-value` | 公开 | `var(--c-font-weight-400)` | 本组件 CSS<br>`font-weight` |
| `--c-descriptions-font-weight-title` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-descriptions-inline-vertical-padding-extra` | 公开 | `5px` | 本组件 CSS<br>`padding` |
| `--c-descriptions-item-label-inline-margin-bottom` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-bottom` |
| `--c-descriptions-item-label-inline-margin-right` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-right` |
| `--c-descriptions-item-label-padding-x` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-descriptions-item-size-lg-spacing-bottom` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding-bottom` |
| `--c-descriptions-item-size-md-spacing-bottom` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding`, `padding-bottom` |
| `--c-descriptions-item-size-sm-spacing-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding-bottom` |
| `--c-descriptions-item-size-xl-spacing-bottom` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding-bottom` |
| `--c-descriptions-item-size-xs-spacing-bottom` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding-bottom` |
| `--c-descriptions-size-lg-font-size-text` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-descriptions-size-lg-title-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-bottom` |
| `--c-descriptions-size-md-font-size-text` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-descriptions-size-md-title-margin-bottom` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-bottom` |
| `--c-descriptions-size-sm-font-size-text` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-descriptions-size-sm-title-margin-bottom` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-bottom` |
| `--c-descriptions-size-xl-font-size-text` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-descriptions-size-xl-title-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-bottom` |
| `--c-descriptions-size-xs-font-size-text` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-descriptions-size-xs-title-margin-bottom` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`margin-bottom` |
| `--c-descriptions-text-color-label` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-descriptions-text-color-value` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-descriptions-title-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |

</div>

## dialog

声明来源: `src/dialog/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-dialog-actions-button-gap` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`margin-left` |
| `--c-dialog-actions-padding` | 公开 | `var(--c-sys-space-7) var(--c-sys-space-8)` | 本组件 CSS<br>`padding` |
| `--c-dialog-animation-duration` | 公开 | `var(--c-sys-motion-duration-slow)` | 本组件 CSS<br>`transition` |
| `--c-dialog-animation-easing` | 公开 | `var(--c-sys-motion-easing-standard)` | 本组件 CSS<br>`transition` |
| `--c-dialog-background` | 公开 | `var(--c-sys-color-surface-raised)` | 本组件 CSS<br>`background-color` |
| `--c-dialog-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-bottom`, `border-top` |
| `--c-dialog-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-dialog-border-width` | 公开 | `1px` | 本组件 CSS<br>`border-bottom`, `border-top` |
| `--c-dialog-close-button-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-dialog-close-button-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-dialog-close-button-inset-inline-end` | 公开 | `var(--c-sys-space-7)` | 本组件 CSS<br>`right` |
| `--c-dialog-close-button-size` | 公开 | `32px` | 本组件 CSS<br>`height`, `width` |
| `--c-dialog-content-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-dialog-content-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-dialog-content-padding` | 公开 | `28px var(--c-sys-space-8)` | 本组件 CSS<br>`padding` |
| `--c-dialog-content-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-dialog-fullscreen-height` | 公开 | `100vh` | 本组件 CSS<br>`height` |
| `--c-dialog-fullscreen-width` | 公开 | `100vw` | 本组件 CSS<br>`width` |
| `--c-dialog-margin-top` | 公开 | `100px` | 本组件 CSS<br>`top` |
| `--c-dialog-overlay-background` | 公开 | `var(--c-sys-color-scrim)` | 本组件 CSS<br>`background-color` |
| `--c-dialog-simple-actions-gap` | 公开 | `32px` | 本组件 CSS<br>`margin-top` |
| `--c-dialog-simple-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-dialog-simple-content-gap` | 公开 | `28px` | 本组件 CSS<br>`margin-bottom` |
| `--c-dialog-simple-padding` | 公开 | `28px 32px 32px` | 本组件 CSS<br>`padding` |
| `--c-dialog-simple-width` | 公开 | `400px` | 本组件 CSS<br>`width` |
| `--c-dialog-status-danger-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-dialog-status-icon-gap` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`margin-right` |
| `--c-dialog-status-icon-size` | 公开 | `18px` | 本组件 CSS<br>`font-size` |
| `--c-dialog-status-info-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-dialog-status-success-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-dialog-status-warning-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-dialog-title-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-dialog-title-font-weight` | 公开 | `var(--c-sys-font-weight-medium)` | 本组件 CSS<br>`font-weight` |
| `--c-dialog-title-justify` | 公开 | `center` | 本组件 CSS<br>`justify-content` |
| `--c-dialog-title-min-height` | 公开 | `48px` | 本组件 CSS<br>`min-height` |
| `--c-dialog-title-padding` | 公开 | `0 var(--c-sys-space-8)` | 本组件 CSS<br>`padding` |
| `--c-dialog-title-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-dialog-width` | 公开 | `520px` | 本组件 CSS<br>`width` |

</div>

## divider

声明来源: `src/divider/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-divider-border-width` | 公开 | `1px` | 本组件 CSS<br>`border-left-width`, `border-top-width` |
| `--c-divider-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-left-color`, `border-top-color` |
| `--c-divider-orientation-horizontal-inset-lg` | 公开 | `32px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start`, `max-width` |
| `--c-divider-orientation-horizontal-inset-md` | 公开 | `24px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start`, `max-width` |
| `--c-divider-orientation-horizontal-inset-sm` | 公开 | `16px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start`, `max-width` |
| `--c-divider-orientation-horizontal-inset-xl` | 公开 | `40px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start`, `max-width` |
| `--c-divider-orientation-horizontal-inset-xs` | 公开 | `12px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start`, `max-width` |
| `--c-divider-orientation-horizontal-spacing-lg` | 公开 | `24px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start` |
| `--c-divider-orientation-horizontal-spacing-md` | 公开 | `16px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start` |
| `--c-divider-orientation-horizontal-spacing-sm` | 公开 | `12px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start` |
| `--c-divider-orientation-horizontal-spacing-xl` | 公开 | `32px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start` |
| `--c-divider-orientation-horizontal-spacing-xs` | 公开 | `8px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start` |
| `--c-divider-orientation-vertical-inset-lg` | 公开 | `8px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start`, `max-height` |
| `--c-divider-orientation-vertical-inset-md` | 公开 | `6px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start`, `max-height` |
| `--c-divider-orientation-vertical-inset-sm` | 公开 | `4px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start`, `max-height` |
| `--c-divider-orientation-vertical-inset-xl` | 公开 | `12px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start`, `max-height` |
| `--c-divider-orientation-vertical-inset-xs` | 公开 | `2px` | 本组件 CSS<br>`margin-block-end`, `margin-block-start`, `max-height` |
| `--c-divider-orientation-vertical-spacing-lg` | 公开 | `16px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start` |
| `--c-divider-orientation-vertical-spacing-md` | 公开 | `12px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start` |
| `--c-divider-orientation-vertical-spacing-sm` | 公开 | `8px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start` |
| `--c-divider-orientation-vertical-spacing-xl` | 公开 | `24px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start` |
| `--c-divider-orientation-vertical-spacing-xs` | 公开 | `4px` | 本组件 CSS<br>`margin-inline-end`, `margin-inline-start` |
| `--c-divider-text-align-inset` | 公开 | `24px` | 本组件 CSS<br>`height`, `width` |
| `--c-divider-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-divider-text-padding` | 公开 | `16px` | 本组件 CSS<br>`padding` |

</div>

## drawer

声明来源: `src/drawer/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-drawer-bg` | 公开 | `var(--c-sys-color-surface-raised)` | 本组件 CSS<br>`background-color` |
| `--c-drawer-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-bottom`, `border-top` |
| `--c-drawer-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border-bottom`, `border-top` |
| `--c-drawer-close-btn-margin-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-drawer-close-icon-font-size` | 公开 | `var(--c-size-3)` | 本组件 CSS<br>`font-size` |
| `--c-drawer-content-padding-vertical` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-drawer-content-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-drawer-footer-button-margin-left` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin-left` |
| `--c-drawer-footer-padding-vertical` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-drawer-header-font-size` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-drawer-header-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-drawer-header-height` | 公开 | `var(--c-size-12)` | 本组件 CSS<br>`height` |
| `--c-drawer-header-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-drawer-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-drawer-overlay-bg` | 公开 | `var(--c-sys-color-scrim)` | 本组件 CSS<br>`background-color` |
| `--c-drawer-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-drawer-transition-duration` | 公开 | `var(--c-transition-duration-3)` | 本组件 CSS<br>`transition` |
| `--c-drawer-transition-timing-function` | 公开 | `var(--c-transition-timing-function-standard)` | 本组件 CSS<br>`transition` |
| `--c-drawer-z-index` | 公开 | `var(--c-z-index-drawer)` | 本组件 CSS<br>`z-index` |

</div>

## menu

声明来源: `src/menu/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-menu-bg` | 公开 | `var(--c-color-bg-popup)` | 本组件 CSS<br>`background-color` |
| `--c-menu-border-color` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color`, `border`, `border-top` |
| `--c-menu-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-menu-box-shadow` | 公开 | `var(--c-shadow2-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-menu-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-menu-group-title-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-menu-group-title-height` | 公开 | `var(--c-size-5)` | 本组件 CSS<br>`line-height` |
| `--c-menu-group-title-margin-top` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-top` |
| `--c-menu-group-title-padding-horizontal` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-menu-group-title-text-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-menu-max-height` | 公开 | `var(--c-size-50)` | 本组件 CSS<br>`max-height` |
| `--c-menu-option-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-menu-option-bg-disabled` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-menu-option-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-menu-option-bg-selected` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-menu-option-bg-selected-hover` | 公开 | `var(--c-menu-option-bg-selected)` | 本组件 CSS<br>`background-color` |
| `--c-menu-option-font-weight-selected` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-menu-option-height` | 公开 | `var(--c-size-9)` | 本组件 CSS<br>`line-height` |
| `--c-menu-option-icon-margin-right` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-right` |
| `--c-menu-option-padding-horizontal` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-menu-option-suffix-icon-margin-left` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin-left` |
| `--c-menu-option-text-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-menu-option-text-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-menu-option-text-color-hover` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-menu-option-text-color-selected` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-menu-padding-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin`, `margin-top`, `padding` |

</div>

## ellipsis

声明来源: `src/ellipsis/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-ellipsis-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-ellipsis-focus-offset` | 公开 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-ellipsis-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |

</div>

## empty

声明来源: `src/empty/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-empty-description-color` | 公开 | `var(--c-sys-color-content-tertiary)` | 本组件 CSS<br>`color` |
| `--c-empty-description-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-empty-description-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-empty-extra-margin-top` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`margin-top` |
| `--c-empty-icon-color` | 公开 | `var(--c-sys-color-content-decorative)` | 本组件 CSS<br>`color` |
| `--c-empty-image-margin-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-bottom` |
| `--c-empty-padding` | 公开 | `var(--c-spacing-5) 0` | 本组件 CSS<br>`padding` |
| `--c-empty-size-lg` | 公开 | `var(--c-size-35)` | 本组件 CSS<br>`font-size`, `height`, `width` |
| `--c-empty-size-md` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`font-size`, `height`, `width` |
| `--c-empty-size-sm` | 公开 | `var(--c-size-20)` | 本组件 CSS<br>`font-size`, `height`, `width` |
| `--c-empty-size-xl` | 公开 | `var(--c-size-45)` | 本组件 CSS<br>`font-size`, `height`, `width` |
| `--c-empty-size-xs` | 公开 | `var(--c-size-15)` | 本组件 CSS<br>`font-size`, `height`, `width` |

</div>

## field-decorator

声明来源: `src/field-decorator/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-field-blur-color` | 公开 | `var(--c-sys-color-content-tertiary)` | 本组件 CSS<br>`border-bottom`, `color` |
| `--c-field-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-field-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `border-bottom`, `margin-inline-start`, `min-height`, `outline`, `outline-offset`, `padding-inline-start` |
| `--c-field-clear-icon-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-field-clear-icon-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-field-clear-padding` | 公开 | `2px` | 本组件 CSS<br>`padding` |
| `--c-field-clear-radius` | 公开 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-field-clear-visibility` | 公开 | `hidden` | 本组件 CSS<br>`visibility` |
| `--c-field-content-gap` | 公开 | `8px` | 本组件 CSS<br>`gap`, `padding-inline-end`, `padding-inline-start` |
| `--c-field-content-padding-vertical` | 公开 | `5px` | 本组件 CSS<br>`top` |
| `--c-field-control-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-field-control-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`-webkit-text-fill-color`, `color` |
| `--c-field-error-color` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`border-bottom-color`, `border-color`, `color` |
| `--c-field-focus-color` | 公开 | `var(--c-sys-color-action-primary)` | 本组件 CSS<br>`border-bottom-color`, `color`, `outline` |
| `--c-field-hint-duration` | 公开 | `0.2s` | 本组件 CSS<br>`transition` |
| `--c-field-hint-scale` | 公开 | `0.75` | 本组件 CSS<br>`font-size`, `top`, `transform` |
| `--c-field-hint-space` | 公开 | `4px` | 本组件 CSS<br>`padding`, `padding-inline-start` |
| `--c-field-icon-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-field-line-height` | 公开 | `1.5` | 本组件 CSS<br>`line-height`, `top` |
| `--c-field-padding-horizontal` | 公开 | `12px` | 本组件 CSS<br>`left`, `margin-inline-end`, `margin-inline-start`, `max-width`, `padding`, `padding-inline-start`, `padding-left`, `padding-right` |
| `--c-field-placeholder-text-color` | 公开 | `var(--c-sys-color-content-tertiary)` | 本组件 CSS<br>`color` |
| `--c-field-prefix-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-field-size-lg-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-field-size-lg-height` | 公开 | `36px` | 本组件 CSS<br>`flex`, `height`, `min-height`, `padding` |
| `--c-field-size-md-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-field-size-md-height` | 公开 | `32px` | 本组件 CSS<br>`flex`, `height`, `min-height`, `padding` |
| `--c-field-size-sm-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-field-size-sm-height` | 公开 | `28px` | 本组件 CSS<br>`flex`, `height`, `min-height`, `padding` |
| `--c-field-size-xl-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-field-size-xl-height` | 公开 | `44px` | 本组件 CSS<br>`flex`, `height`, `min-height` |
| `--c-field-size-xs-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-field-size-xs-height` | 公开 | `24px` | 本组件 CSS<br>`flex`, `height`, `min-height`, `padding` |
| `--c-field-suffix-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-field-variant-filled-background` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-field-variant-filled-background-disabled` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-field-variant-filled-background-error` | 公开 | `var(--c-color-danger-light-1)` | 本组件 CSS<br>`background` |
| `--c-field-variant-filled-background-focus` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background` |
| `--c-field-variant-filled-background-hover` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-field-variant-outline-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border`, `border-color` |
| `--c-field-variant-outline-border-color-disabled` | 公开 | `var(--c-sys-color-border-subtle)` | 本组件 CSS<br>`border-color` |
| `--c-field-variant-outline-border-color-error` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`border-color` |
| `--c-field-variant-outline-border-color-focus` | 公开 | `var(--c-sys-color-action-primary)` | 本组件 CSS<br>`border-color` |
| `--c-field-variant-outline-border-color-hover` | 公开 | `var(--c-sys-color-border-strong)` | 本组件 CSS<br>`border-color` |
| `--c-field-variant-standard-line-color` | 公开 | `var(--c-field-blur-color)` | 本组件 CSS<br>`border-bottom` |
| `--c-field-variant-standard-line-color-disabled` | 公开 | `var(--c-sys-color-border-subtle)` | 本组件 CSS<br>`border-bottom-color` |
| `--c-field-variant-standard-line-color-error` | 公开 | `var(--c-field-error-color)` | 本组件 CSS<br>`border-bottom-color` |
| `--c-field-variant-standard-line-color-focus` | 公开 | `var(--c-field-focus-color)` | 本组件 CSS<br>`border-bottom-color` |
| `--c-field-variant-standard-line-size` | 公开 | `1px` | 本组件 CSS<br>`border-bottom` |
| `--c-field-variant-standard-line-size-focus` | 公开 | `2px` | 本组件 CSS<br>`border-bottom-width` |
| `--c-search-color-icon` | 公开 | `var(--c-color-text-2)` | 跨组件 CSS<br>`color` |
| `--c-search-size-icon` | 公开 | `14px` | 跨组件 CSS<br>`font-size` |

</div>

## filter-form

声明来源: `src/filter-form/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-filter-form-action-offset` | 公开 | `calc(1em * var(--c-form-line-height) + var(--c-form-vertical-label-margin-bottom))` | 本组件 CSS<br>`padding-top` |
| `--c-filter-form-actions-gap` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`gap` |
| `--c-filter-form-background-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color` |
| `--c-filter-form-border-color` | 公开 | `var(--c-sys-color-border-subtle)` | 本组件 CSS<br>`border` |
| `--c-filter-form-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-filter-form-border-width` | 公开 | `1px` | 本组件 CSS<br>`border` |
| `--c-filter-form-collapse-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-filter-form-collapse-gap` | 公开 | `4px` | 本组件 CSS<br>`gap` |
| `--c-filter-form-collapse-hover-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color`, `outline` |
| `--c-filter-form-focus-offset` | 公开 | `3px` | 本组件 CSS<br>`outline-offset` |
| `--c-filter-form-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-filter-form-item-margin-bottom` | 公开 | `0px` | 本组件 CSS<br>`margin-bottom` |
| `--c-filter-form-padding` | 公开 | `var(--c-sys-space-7)` | 本组件 CSS<br>`padding` |

</div>

## form

声明来源: `src/form/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-form-error-text-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-form-extra-margin-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-bottom` |
| `--c-form-extra-margin-top` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-top` |
| `--c-form-extra-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-form-extra-text-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-form-feedback-icon-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-form-feedback-icon-right` | 公开 | `9px` | 本组件 CSS<br>`right` |
| `--c-form-feedback-loading-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-form-has-feedback-control-padding-right` | 公开 | `28px` | 本组件 CSS<br>`padding-right` |
| `--c-form-inline-item-margin-bottom` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-bottom` |
| `--c-form-inline-item-margin-right` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin-right` |
| `--c-form-label-margin-right` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding-right` |
| `--c-form-label-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-form-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height`, `padding-top` |
| `--c-form-required-symbol-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-form-required-symbol-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-form-size-lg-height` | 公开 | `var(--c-size-lg)` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-form-size-lg-item-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`line-height`, `margin-bottom`, `min-height` |
| `--c-form-size-lg-label-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-form-size-md-height` | 公开 | `var(--c-size-md)` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-form-size-md-item-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`line-height`, `margin-bottom`, `min-height` |
| `--c-form-size-md-label-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-form-size-sm-height` | 公开 | `var(--c-size-sm)` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-form-size-sm-item-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`line-height`, `margin-bottom`, `min-height` |
| `--c-form-size-sm-label-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-form-size-xl-height` | 公开 | `var(--c-size-xl)` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-form-size-xl-item-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`line-height`, `margin-bottom`, `min-height` |
| `--c-form-size-xl-label-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-form-size-xs-height` | 公开 | `var(--c-size-xs)` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-form-size-xs-item-margin-bottom` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`line-height`, `margin-bottom`, `min-height` |
| `--c-form-size-xs-label-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-form-status-error-bg` | 公开 | `var(--c-color-danger-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-error-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-error-focus-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-error-focus-border-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border-color` |
| `--c-form-status-error-focus-shadow-color` | 公开 | `var(--c-color-danger-light-2)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-error-focus-shadow-size` | 公开 | `var(--c-shadow-distance-none)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-error-hover-bg` | 公开 | `var(--c-color-danger-light-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-error-hover-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-error-tip-icon-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-form-status-error-tip-text-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-form-status-success-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-success-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-success-focus-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-success-focus-border-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`border-color` |
| `--c-form-status-success-focus-shadow-color` | 公开 | `var(--c-color-success-light-2)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-success-focus-shadow-size` | 公开 | `var(--c-shadow-distance-none)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-success-hover-bg` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-success-hover-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-success-tip-icon-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-form-status-success-tip-text-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-form-status-validating-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-validating-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-validating-focus-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-validating-focus-border-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border-color` |
| `--c-form-status-validating-focus-shadow-color` | 公开 | `var(--c-color-primary-light-2)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-validating-focus-shadow-size` | 公开 | `var(--c-shadow-distance-none)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-validating-hover-bg` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-validating-hover-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-validating-tip-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-form-status-validating-tip-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-form-status-warning-bg` | 公开 | `var(--c-color-warning-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-warning-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-warning-focus-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-warning-focus-border-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`border-color` |
| `--c-form-status-warning-focus-shadow-color` | 公开 | `var(--c-color-warning-light-2)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-warning-focus-shadow-size` | 公开 | `var(--c-shadow-distance-none)` | 本组件 CSS<br>`box-shadow` |
| `--c-form-status-warning-hover-bg` | 公开 | `var(--c-color-warning-light-2)` | 本组件 CSS<br>`background-color` |
| `--c-form-status-warning-hover-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-form-status-warning-tip-icon-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-form-status-warning-tip-text-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-form-tooltip-margin-left` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`margin-inline-start` |
| `--c-form-tooltip-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-form-transition-duration-3` | 公开 | `var(--c-transition-duration-3)` | 本组件 CSS<br>`transition` |
| `--c-form-transition-duration-5` | 公开 | `var(--c-transition-duration-5)` | 本组件 CSS<br>`animation` |
| `--c-form-transition-timing-function-linear` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`animation`, `transition` |
| `--c-form-vertical-label-margin-bottom` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-bottom`, `padding-top` |

</div>

## hover

声明来源: `src/hover/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-hover-overlay-focusing-opacity` | 公开 | `0.12` | 本组件 CSS<br>`opacity` |
| `--c-hover-overlay-opacity` | 公开 | `0.04` | 本组件 CSS<br>`opacity` |
| `--c-hover-transition-duration` | 公开 | `var(--c-sys-motion-duration-fast)` | 本组件 CSS<br>`transition` |

</div>

## icon

声明来源: `src/icon/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-icon-size` | 公开 | `inherit` | 本组件 CSS<br>`font-size` |
| `--c-icon-spin-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |

</div>

## image

声明来源: `src/image/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-image-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-image-description-footer-inner-text-color` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-image-description-footer-outer-text-color` | 公开 | `var(--c-color-neutral-6)` | 本组件 CSS<br>`color` |
| `--c-image-error-bg` | 公开 | `var(--c-color-neutral-1)` | 本组件 CSS<br>`background-color` |
| `--c-image-error-text-color` | 公开 | `var(--c-color-neutral-4)` | 本组件 CSS<br>`color` |
| `--c-image-font-size-description` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-image-font-size-error-icon` | 公开 | `60px` | 本组件 CSS<br>`height`, `width` |
| `--c-image-font-size-error-text` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-image-font-size-loader-spin` | 公开 | `32px` | 本组件 CSS<br>`font-size` |
| `--c-image-font-size-loader-spin-text` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-image-font-size-title` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-image-font-weight-title` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-image-footer-inner-bg` | 公开 | `linear-gradient(360deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)` | 本组件 CSS<br>`background` |
| `--c-image-footer-inner-text-color` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-image-footer-outer-text-color` | 公开 | `var(--c-color-neutral-8)` | 本组件 CSS<br>`color` |
| `--c-image-line-height-error-text` | 公开 | `1.6667` | 本组件 CSS<br>`line-height` |
| `--c-image-loader-bg` | 公开 | `var(--c-color-neutral-1)` | 本组件 CSS<br>`background-color` |
| `--c-image-loader-spin-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-image-loader-spin-text-text-color` | 公开 | `var(--c-color-neutral-6)` | 本组件 CSS<br>`color` |
| `--c-image-padding-footer-inner-horizontal` | 公开 | `16px` | 本组件 CSS<br>`padding` |
| `--c-image-padding-footer-inner-vertical` | 公开 | `9px` | 本组件 CSS<br>`padding` |
| `--c-image-preview-arrow-bg` | 公开 | `rgba(255, 255, 255, 0.3)` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-arrow-bg-disabled` | 公开 | `rgba(255, 255, 255, 0.2)` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-arrow-bg-hover` | 公开 | `rgba(255, 255, 255, 0.5)` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-arrow-font-size` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`font-size` |
| `--c-image-preview-arrow-icon-color` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-image-preview-arrow-icon-color-disabled` | 公开 | `rgba(255, 255, 255, 0.3)` | 本组件 CSS<br>`color` |
| `--c-image-preview-arrow-position` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`left`, `right` |
| `--c-image-preview-arrow-size` | 公开 | `var(--c-size-8)` | 本组件 CSS<br>`height`, `width` |
| `--c-image-preview-border-radius-action` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-image-preview-border-radius-loading` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-image-preview-border-radius-toolbar` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-image-preview-color-action-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-color-action-disabled-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-color-action-disabled-text` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-image-preview-color-action-hover-bg` | 公开 | `var(--c-color-neutral-2)` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-color-action-hover-text` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-image-preview-color-action-text` | 公开 | `var(--c-color-neutral-8)` | 本组件 CSS<br>`color` |
| `--c-image-preview-color-close-btn-bg` | 公开 | `rgba(0, 0, 0, 0.5)` | 本组件 CSS<br>`background` |
| `--c-image-preview-color-close-btn-text` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-image-preview-color-loading-bg` | 公开 | `#232324` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-color-loading-text` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-image-preview-color-scale-value-text` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-image-preview-color-toolbar-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-image-preview-font-size-action` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-image-preview-font-size-loading` | 公开 | `18px` | 本组件 CSS<br>`font-size` |
| `--c-image-preview-margin-action-right` | 公开 | `var(--c-spacing-none)` | 本组件 CSS<br>`margin-right` |
| `--c-image-preview-overlay-bg` | 公开 | `var(--c-color-overlay-bg)` | 跨组件 CSS<br>`background-color` |
| `--c-image-preview-padding-action-content` | 公开 | `13px` | 本组件 CSS<br>`padding` |
| `--c-image-preview-position-close-btn-right` | 公开 | `36px` | 本组件 CSS<br>`right` |
| `--c-image-preview-position-close-btn-top` | 公开 | `36px` | 本组件 CSS<br>`top` |
| `--c-image-preview-position-toolbar-bottom` | 公开 | `46px` | 本组件 CSS<br>`bottom` |
| `--c-image-preview-size-close-btn-width` | 公开 | `32px` | 本组件 CSS<br>`height`, `line-height`, `width` |
| `--c-image-preview-size-close-icon` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-image-preview-size-loading-height` | 公开 | `48px` | 本组件 CSS<br>`height` |
| `--c-image-preview-size-loading-width` | 公开 | `48px` | 本组件 CSS<br>`width` |
| `--c-image-preview-spacing-loading-padding` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-image-preview-spacing-toolbar-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-image-preview-spacing-toolbar-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-image-spacing-actions-left` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding-left` |
| `--c-image-spacing-error-padding` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-image-spacing-footer-top` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-top` |
| `--c-image-title-text-color-footer-inner` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-image-title-text-color-footer-outer` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |

</div>

## infinite-scroll

声明来源: `src/infinite-scroll/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-infinite-scroll-error-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-infinite-scroll-loading-gap` | 公开 | `8px` | 本组件 CSS<br>`gap` |
| `--c-infinite-scroll-status-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-infinite-scroll-status-font-size` | 公开 | `var(--c-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-infinite-scroll-status-min-height` | 公开 | `50px` | 本组件 CSS<br>`min-height` |
| `--c-infinite-scroll-status-padding` | 公开 | `12px 0` | 本组件 CSS<br>`padding` |

</div>

## input

声明来源: `src/input/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-input-control-font-size` | 公开 | `inherit` | 本组件 CSS<br>`font-size` |
| `--c-input-control-height` | 公开 | `auto` | 本组件 CSS<br>`height` |
| `--c-input-control-line-height` | 公开 | `inherit` | 本组件 CSS<br>`line-height` |
| `--c-input-control-padding-horizontal` | 公开 | `0` | 本组件 CSS<br>`padding` |
| `--c-input-counter-color` | 公开 | `var(--c-field-suffix-text-color)` | 本组件 CSS<br>`color` |
| `--c-input-counter-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-input-feedback-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |
| `--c-input-feedback-error-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-input-feedback-success-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-input-feedback-validating-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-input-feedback-warning-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |

</div>

## input-number

声明来源: `src/input-number/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-input-number-addon-background` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-input-number-addon-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-input-number-addon-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-input-number-border-radius` | 公开 | `var(--c-field-border-radius)` | 本组件 CSS<br>`border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-input-number-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `border-inline-end`, `border-inline-start`, `border-top`, `outline`, `outline-offset` |
| `--c-input-number-size-lg-step-button-width` | 公开 | `var(--c-sys-control-height-lg)` | 本组件 CSS<br>`width` |
| `--c-input-number-size-md-step-button-width` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`width` |
| `--c-input-number-size-sm-step-button-width` | 公开 | `var(--c-sys-control-height-sm)` | 本组件 CSS<br>`width` |
| `--c-input-number-size-xl-step-button-width` | 公开 | `var(--c-sys-control-height-xl)` | 本组件 CSS<br>`width` |
| `--c-input-number-size-xs-step-button-width` | 公开 | `var(--c-sys-control-height-xs)` | 本组件 CSS<br>`width` |
| `--c-input-number-step-button-active-background` | 公开 | `var(--c-sys-color-state-selected)` | 本组件 CSS<br>`background` |
| `--c-input-number-step-button-background` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-input-number-step-button-border-color` | 公开 | `var(--c-sys-color-border-subtle)` | 本组件 CSS<br>`border-inline-end`, `border-inline-start`, `border-top` |
| `--c-input-number-step-button-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-input-number-step-button-disabled-color` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-input-number-step-button-hover-background` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-input-number-step-button-icon-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-input-number-step-button-transition-duration` | 公开 | `0.2s` | 本组件 CSS<br>`transition` |
| `--c-input-number-step-button-width` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`width` |

</div>

## input-tag

声明来源: `src/input-tag/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-input-tag-color-text-default` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-input-tag-color-text-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-input-tag-padding-x` | 公开 | `4px` | 本组件 CSS<br>`padding-left`, `padding-right` |
| `--c-input-tag-size-lg-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-input-tag-size-lg-padding-y` | 公开 | `2px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-input-tag-size-lg-tag-height` | 公开 | `28px` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-input-tag-size-md-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-input-tag-size-md-padding-y` | 公开 | `2px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-input-tag-size-md-tag-height` | 公开 | `24px` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-input-tag-size-sm-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-input-tag-size-sm-padding-y` | 公开 | `2px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-input-tag-size-sm-tag-height` | 公开 | `20px` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-input-tag-size-xl-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-input-tag-size-xl-padding-y` | 公开 | `4px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-input-tag-size-xl-tag-height` | 公开 | `32px` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-input-tag-size-xs-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-input-tag-size-xs-padding-y` | 公开 | `0px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-input-tag-size-xs-tag-height` | 公开 | `20px` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-input-tag-tag-color-bg` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background-color` |
| `--c-input-tag-tag-color-bg-disabled` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-input-tag-tag-color-bg-focus` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-input-tag-tag-color-border` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`border-color` |
| `--c-input-tag-tag-color-border-disabled` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`border-color` |
| `--c-input-tag-tag-color-border-focus` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`border-color` |
| `--c-input-tag-tag-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-input-tag-tag-margin-right` | 公开 | `4px` | 本组件 CSS<br>`margin-right` |
| `--c-input-tag-tag-margin-y` | 公开 | `2px` | 本组件 CSS<br>`margin-bottom`, `margin-top` |

</div>

## layout

声明来源: `src/layout/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-layout-border-color` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-layout-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-layout-font-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-layout-font-color-dark` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-layout-sider-background` | 公开 | `var(--c-color-menu-dark-bg)` | 本组件 CSS<br>`background` |
| `--c-layout-sider-background-light` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background` |
| `--c-layout-sider-light-box-shadow` | 公开 | `0 2px 5px 0 rgba(0, 0, 0, 0.08)` | 本组件 CSS<br>`box-shadow` |
| `--c-layout-trigger-dark-color` | 公开 | `rgba(255, 255, 255, 0.2)` | 本组件 CSS<br>`background` |
| `--c-layout-trigger-height` | 公开 | `var(--c-size-12)` | 本组件 CSS<br>`height`, `padding-bottom`, `width` |
| `--c-layout-trigger-light-border-color` | 公开 | `var(--c-color-bg-5)` | 本组件 CSS<br>`border-top` |

</div>

## link

声明来源: `src/link/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-link-bg-active` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-link-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-link-border-radius` | 公开 | `var(--c-sys-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-link-focus-color` | 公开 | `currentColor` | 本组件 CSS<br>`outline` |
| `--c-link-focus-offset` | 公开 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-link-focus-opacity` | 公开 | `0.8` | 本组件 CSS<br>`opacity` |
| `--c-link-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-link-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-link-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-link-margin-icon-right` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`margin-right` |
| `--c-link-padding-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-link-padding-vertical` | 公开 | `1px` | 本组件 CSS<br>`padding` |
| `--c-link-size-icon` | 公开 | `1em` | 本组件 CSS<br>`font-size` |
| `--c-link-size-lg-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-link-size-md-font-size` | 公开 | `var(--c-link-font-size)` | 本组件 CSS<br>`font-size` |
| `--c-link-size-sm-font-size` | 公开 | `var(--c-sys-font-size-sm)` | 本组件 CSS<br>`font-size` |
| `--c-link-size-xl-font-size` | 公开 | `var(--c-sys-font-size-xl)` | 本组件 CSS<br>`font-size` |
| `--c-link-size-xs-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-link-spin-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |
| `--c-link-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-active` | 公开 | `var(--c-link-text-color)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-default` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-error-active` | 公开 | `var(--c-link-text-color-error)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-error-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-error-hover` | 公开 | `var(--c-link-text-color-error)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-error-loading` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-hover` | 公开 | `var(--c-link-text-color)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-info` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-loading` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-primary` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-secondary` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-success` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-success-active` | 公开 | `var(--c-link-text-color-success)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-success-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-success-hover` | 公开 | `var(--c-link-text-color-success)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-success-loading` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-tertiary` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-warning` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-warning-active` | 公开 | `var(--c-link-text-color-warning)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-warning-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-warning-hover` | 公开 | `var(--c-link-text-color-warning)` | 本组件 CSS<br>`color` |
| `--c-link-text-color-warning-loading` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-link-transition-duration` | 公开 | `0.15s` | 本组件 CSS<br>`transition` |

</div>

## list

声明来源: `src/list/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-list-background` | 公开 | `transparent` | 本组件 CSS<br>`background` |
| `--c-list-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border`, `border-bottom`, `border-top` |
| `--c-list-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-list-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `border-bottom`, `border-top` |
| `--c-list-empty-color` | 公开 | `var(--c-list-text-color)` | 本组件 CSS<br>`color` |
| `--c-list-empty-padding` | 公开 | `16px` | 本组件 CSS<br>`padding` |
| `--c-list-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-list-font-size-header` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-list-font-weight-header` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-list-item-prefix-margin-right` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-right` |
| `--c-list-item-suffix-margin-left` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-left` |
| `--c-list-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-list-line-height-header` | 公开 | `1.5` | 本组件 CSS<br>`line-height` |
| `--c-list-loading-padding` | 公开 | `0px` | 本组件 CSS<br>`padding` |
| `--c-list-size-lg-padding-horizontal-footer` | 公开 | `var(--c-list-size-lg-padding-horizontal-item)` | 本组件 CSS<br>`padding` |
| `--c-list-size-lg-padding-horizontal-header` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-list-size-lg-padding-horizontal-item` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-list-size-lg-padding-vertical-footer` | 公开 | `var(--c-list-size-lg-padding-vertical-item)` | 本组件 CSS<br>`padding` |
| `--c-list-size-lg-padding-vertical-header` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-list-size-lg-padding-vertical-item` | 公开 | `17px` | 本组件 CSS<br>`padding` |
| `--c-list-size-md-padding-horizontal-footer` | 公开 | `var(--c-list-size-md-padding-horizontal-item)` | 本组件 CSS<br>`padding` |
| `--c-list-size-md-padding-horizontal-header` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-list-size-md-padding-horizontal-item` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-list-size-md-padding-vertical-footer` | 公开 | `var(--c-list-size-md-padding-vertical-item)` | 本组件 CSS<br>`padding` |
| `--c-list-size-md-padding-vertical-header` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-list-size-md-padding-vertical-item` | 公开 | `13px` | 本组件 CSS<br>`padding` |
| `--c-list-size-sm-padding-horizontal-footer` | 公开 | `var(--c-list-size-sm-padding-horizontal-item)` | 本组件 CSS<br>`padding` |
| `--c-list-size-sm-padding-horizontal-header` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-list-size-sm-padding-horizontal-item` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-list-size-sm-padding-vertical-footer` | 公开 | `var(--c-list-size-sm-padding-vertical-item)` | 本组件 CSS<br>`padding` |
| `--c-list-size-sm-padding-vertical-header` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-list-size-sm-padding-vertical-item` | 公开 | `9px` | 本组件 CSS<br>`padding` |
| `--c-list-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-list-text-color-header` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |

</div>

## loading

声明来源: `src/loading/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-loading-color` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color`, `color` |
| `--c-loading-directive-z-index` | 公开 | `2000` | 本组件 CSS<br>`z-index` |
| `--c-loading-indicator-size` | 公开 | `20px` | 本组件 CSS<br>`font-size` |
| `--c-loading-opacity` | 公开 | `0.38` | 本组件 CSS<br>`opacity` |
| `--c-loading-overlay-background` | 公开 | `color-mix(in srgb, var(--c-color-bg-white) 62%, transparent)` | 本组件 CSS<br>`background` |
| `--c-loading-tip-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-loading-tip-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-loading-tip-margin` | 公开 | `var(--c-spacing-3) 0 0` | 本组件 CSS<br>`margin` |

</div>

## map

声明来源: `src/map/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-map-locate-me-bg` | 公开 | `var(--c-color-bg-white)` | 本组件 CSS<br>`background` |
| `--c-map-locate-me-bottom` | 公开 | `var(--c-spacing-10)` | 本组件 CSS<br>`bottom` |
| `--c-map-locate-me-icon-size` | 公开 | `18px` | 本组件 CSS<br>`height`, `width` |
| `--c-map-locate-me-left` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`left` |
| `--c-map-locate-me-shadow-blur` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`box-shadow` |
| `--c-map-locate-me-shadow-color` | 公开 | `rgb(var(--c-gray-10))` | 本组件 CSS<br>`box-shadow` |
| `--c-map-locate-me-size` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `width` |
| `--c-map-poi-address-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color`, `stroke` |
| `--c-map-poi-address-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-map-poi-bg` | 公开 | `rgb(var(--c-gray-10))` | 本组件 CSS<br>`background-color` |
| `--c-map-poi-border-radius` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`border-radius` |
| `--c-map-poi-edit-margin-left` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-left` |
| `--c-map-poi-name-color` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color` |
| `--c-map-poi-name-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-map-poi-padding-x` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`padding` |
| `--c-map-poi-padding-y` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-map-poi-translate-y` | 公开 | `-7px` | 本组件 CSS<br>`transform` |
| `--c-map-position-current-right` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`right` |
| `--c-map-position-current-size` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `width` |
| `--c-map-position-current-top` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`top` |
| `--c-map-position-dot-margin-left` | 公开 | `calc(-1 * var(--c-spacing-6))` | 本组件 CSS<br>`margin-left` |
| `--c-map-position-dot-margin-top` | 公开 | `calc(-1 * var(--c-size-6))` | 本组件 CSS<br>`margin-top` |
| `--c-map-position-dot-size` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `width` |
| `--c-map-search-box-padding-x` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-map-search-box-padding-y` | 公开 | `7px` | 本组件 CSS<br>`padding` |
| `--c-map-search-empty-padding` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-map-search-item-address-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-map-search-item-name-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-map-search-item-padding-x` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-map-search-item-padding-y` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-map-search-item-selected-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-map-search-margin` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`margin` |
| `--c-map-search-width` | 公开 | `230px` | 本组件 CSS<br>`width` |
| `--c-map-tips-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-map-tips-padding-y` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |

</div>

## mention

声明来源: `src/mention/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |

</div>

## message

声明来源: `src/message/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-message-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-message-border-style` | 公开 | `solid` | 本组件 CSS<br>`border` |
| `--c-message-border-width` | 公开 | `1px` | 本组件 CSS<br>`border` |
| `--c-message-box-shadow` | 公开 | `var(--c-shadow2-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-message-close-btn-margin-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-message-close-icon-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-message-close-icon-hover-opacity` | 公开 | `0.08` | 本组件 CSS<br>`opacity` |
| `--c-message-close-icon-hover-size` | 公开 | `20px` | 本组件 CSS<br>`height`, `width` |
| `--c-message-content-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-message-icon-font-size` | 公开 | `20px` | 本组件 CSS<br>`font-size` |
| `--c-message-icon-margin-right` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-message-margin-bottom` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-bottom` |
| `--c-message-neutral-danger-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-message-neutral-danger-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-message-neutral-danger-close-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-danger-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-danger-icon-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-default-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-message-neutral-default-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-message-neutral-default-close-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-default-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-default-icon-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-info-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-message-neutral-info-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-message-neutral-info-close-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-info-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-info-icon-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-loading-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-message-neutral-loading-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-message-neutral-loading-close-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-loading-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-loading-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-success-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-message-neutral-success-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-message-neutral-success-close-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-success-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-success-icon-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-warning-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-message-neutral-warning-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-message-neutral-warning-close-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-warning-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-neutral-warning-icon-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-message-padding-bottom` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-message-padding-left` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-message-padding-right` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-message-padding-top` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-message-solid-danger-bg` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`background-color` |
| `--c-message-solid-danger-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-solid-danger-close-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-danger-content-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-danger-icon-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-default-bg` | 公开 | `#333` | 本组件 CSS<br>`background-color` |
| `--c-message-solid-default-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-solid-default-close-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-message-solid-default-content-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-message-solid-default-icon-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-message-solid-info-bg` | 公开 | `var(--c-sys-color-status-info)` | 本组件 CSS<br>`background-color` |
| `--c-message-solid-info-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-solid-info-close-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-info-content-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-info-icon-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-loading-bg` | 公开 | `#333` | 本组件 CSS<br>`background-color` |
| `--c-message-solid-loading-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-solid-loading-close-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-message-solid-loading-content-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-message-solid-loading-icon-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-message-solid-success-bg` | 公开 | `var(--c-sys-color-status-success)` | 本组件 CSS<br>`background-color` |
| `--c-message-solid-success-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-solid-success-close-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-success-content-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-success-icon-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-warning-bg` | 公开 | `var(--c-sys-color-status-warning)` | 本组件 CSS<br>`background-color` |
| `--c-message-solid-warning-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-solid-warning-close-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-warning-content-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-solid-warning-icon-color` | 公开 | `var(--c-sys-color-content-on-bright)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-danger-bg` | 公开 | `var(--c-color-danger-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-message-tonal-danger-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-tonal-danger-close-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-danger-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-danger-icon-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-default-bg` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-message-tonal-default-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-tonal-default-close-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-default-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-default-icon-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-info-bg` | 公开 | `rgba(var(--c-blue-6), 0.12)` | 本组件 CSS<br>`background-color` |
| `--c-message-tonal-info-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-tonal-info-close-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-info-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-info-icon-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-loading-bg` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-message-tonal-loading-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-tonal-loading-close-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-loading-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-loading-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-success-bg` | 公开 | `var(--c-color-success-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-message-tonal-success-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-tonal-success-close-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-success-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-success-icon-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-warning-bg` | 公开 | `var(--c-color-warning-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-message-tonal-warning-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-message-tonal-warning-close-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-warning-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-message-tonal-warning-icon-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-message-transition-duration` | 公开 | `var(--c-transition-duration-1)` | 本组件 CSS<br>`animation`, `transition` |
| `--c-message-transition-duration-icon` | 公开 | `var(--c-transition-duration-4)` | 本组件 CSS<br>`animation` |
| `--c-message-transition-timing-function` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`animation`, `transition` |
| `--c-message-transition-timing-function-icon` | 公开 | `var(--c-transition-timing-function-overshoot)` | 本组件 CSS<br>`animation` |
| `--c-message-wrapper-margin-bottom` | 公开 | `var(--c-spacing-12)` | 本组件 CSS<br>`bottom` |
| `--c-message-wrapper-margin-top` | 公开 | `var(--c-spacing-12)` | 本组件 CSS<br>`top` |
| `--c-message-wrapper-padding-horizontal` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-message-z-index` | 公开 | `var(--c-z-index-message)` | 本组件 CSS<br>`z-index` |

</div>

## nav-menu

声明来源: `src/nav-menu/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-nav-menu-arrow-size` | 公开 | `12px` | 本组件 CSS<br>`width` |
| `--c-nav-menu-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-nav-menu-content-gap` | 公开 | `8px` | 本组件 CSS<br>`gap`, `margin`, `padding` |
| `--c-nav-menu-content-padding` | 公开 | `12px` | 本组件 CSS<br>`padding` |
| `--c-nav-menu-dark-bg` | 公开 | `var(--c-color-menu-dark-bg)` | 本组件 CSS<br>`background` |
| `--c-nav-menu-dark-item-bg-hover` | 公开 | `var(--c-color-menu-dark-hover)` | 本组件 CSS<br>`background` |
| `--c-nav-menu-dark-item-bg-selected` | 公开 | `var(--c-color-menu-dark-hover)` | 本组件 CSS<br>`background` |
| `--c-nav-menu-dark-item-text-color` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-nav-menu-dark-item-text-color-disabled` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-nav-menu-dark-item-text-color-selected` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`color`, `outline` |
| `--c-nav-menu-divider-color` | 公开 | `var(--c-color-border-2)` | 本组件 CSS<br>`background`, `border` |
| `--c-nav-menu-divider-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `height`, `width` |
| `--c-nav-menu-focus-offset` | 公开 | `-2px` | 本组件 CSS<br>`outline-offset` |
| `--c-nav-menu-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-nav-menu-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-nav-menu-icon-size` | 公开 | `20px` | 本组件 CSS<br>`font-size` |
| `--c-nav-menu-light-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background` |
| `--c-nav-menu-light-item-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-nav-menu-light-item-bg-selected` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-nav-menu-light-item-text-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-nav-menu-light-item-text-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-nav-menu-light-item-text-color-selected` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color`, `outline` |
| `--c-nav-menu-motion-duration` | 公开 | `150ms` | 本组件 CSS<br>`transition` |
| `--c-nav-menu-panel-width` | 公开 | `min(400px, 100vw)` | 运行时引用（不代表可见性证明）<br>`nav-menu/item.tsx` |
| `--c-nav-menu-popup-max-height` | 公开 | `320px` | 本组件 CSS<br>`max-height` |
| `--c-nav-menu-popup-min-width` | 公开 | `180px` | 本组件 CSS<br>`min-width` |
| `--c-nav-menu-popup-shadow` | 公开 | `0 6px 24px rgba(0, 0, 0, 0.12)` | 本组件 CSS<br>`box-shadow` |
| `--c-nav-menu-row-height` | 公开 | `40px` | 本组件 CSS<br>`min-height` |
| `--c-nav-menu-row-height-lg` | 公开 | `48px` | 本组件 CSS<br>`min-height` |
| `--c-nav-menu-row-height-sm` | 公开 | `32px` | 本组件 CSS<br>`min-height` |
| `--c-nav-menu-row-height-xl` | 公开 | `56px` | 本组件 CSS<br>`min-height` |
| `--c-nav-menu-row-height-xs` | 公开 | `28px` | 本组件 CSS<br>`min-height` |

</div>

## notification

声明来源: `src/notification/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-notification-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-notification-border-style` | 公开 | `solid` | 本组件 CSS<br>`border` |
| `--c-notification-border-width` | 公开 | `1px` | 本组件 CSS<br>`border` |
| `--c-notification-box-shadow` | 公开 | `0 4px 12px rgba(0, 0, 0, 0.15)` | 本组件 CSS<br>`box-shadow` |
| `--c-notification-close-icon-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-notification-close-icon-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-notification-close-icon-hover-size` | 公开 | `20px` | 本组件 CSS<br>`height`, `width` |
| `--c-notification-close-icon-right` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`right` |
| `--c-notification-close-icon-top` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`top` |
| `--c-notification-content-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-notification-error-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-notification-error-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-notification-error-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-error-icon-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-notification-error-title-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-footer-margin-top` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-top` |
| `--c-notification-icon-font-size` | 公开 | `24px` | 本组件 CSS<br>`font-size` |
| `--c-notification-icon-margin-right` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding-right` |
| `--c-notification-info-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-notification-info-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-notification-info-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-info-icon-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-notification-info-title-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-bottom` |
| `--c-notification-normal-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-notification-normal-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-notification-normal-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-normal-icon-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-normal-title-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-padding-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-notification-padding-left` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `width` |
| `--c-notification-padding-right` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding`, `width` |
| `--c-notification-padding-top` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-notification-success-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-notification-success-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-notification-success-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-success-icon-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-notification-success-title-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-title-font-size` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-notification-title-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-notification-title-margin-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-top` |
| `--c-notification-transition-duration` | 公开 | `var(--c-transition-duration-2)` | 本组件 CSS<br>`transition` |
| `--c-notification-transition-duration-enter` | 公开 | `var(--c-transition-duration-4)` | 本组件 CSS<br>`transition` |
| `--c-notification-transition-duration-leave` | 公开 | `var(--c-transition-duration-3)` | 本组件 CSS<br>`transition` |
| `--c-notification-transition-timing-function` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`transition` |
| `--c-notification-transition-timing-function-enter` | 公开 | `var(--c-transition-timing-function-overshoot)` | 本组件 CSS<br>`transition` |
| `--c-notification-transition-timing-function-leave` | 公开 | `var(--c-transition-timing-function-standard)` | 本组件 CSS<br>`transition` |
| `--c-notification-warning-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-notification-warning-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-color` |
| `--c-notification-warning-content-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-warning-icon-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-notification-warning-title-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-notification-width` | 公开 | `300px` | 本组件 CSS<br>`width` |
| `--c-notification-wrapper-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`bottom` |
| `--c-notification-wrapper-margin-left` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`left` |
| `--c-notification-wrapper-margin-right` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`right` |
| `--c-notification-wrapper-margin-top` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`top` |
| `--c-notification-z-index` | 公开 | `var(--c-z-index-notification)` | 本组件 CSS<br>`z-index` |

</div>

## overlay

声明来源: `src/overlay/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-overlay-animation-duration` | 公开 | `var(--c-sys-motion-duration-slow)` | 本组件 CSS<br>`transition` |
| `--c-overlay-background-color` | 公开 | `var(--c-sys-color-scrim)` | 本组件 CSS<br>`background-color` |
| `--c-overlay-content-z-index` | 公开 | `var(--c-sys-layer-raised)` | 本组件 CSS<br>`z-index` |

</div>

## page-header

声明来源: `src/page-header/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-page-header-back-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-page-header-back-hover-bg` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-page-header-back-hover-size` | 公开 | `30px` | 本组件 CSS<br>`height`, `width` |
| `--c-page-header-back-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-page-header-content-margin-top` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-top` |
| `--c-page-header-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-page-header-footer-margin-top` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-top` |
| `--c-page-header-item-gap` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin-left` |
| `--c-page-header-row-gap` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin-bottom` |
| `--c-page-header-subtitle-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-page-header-title-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-page-header-title-font-size` | 公开 | `var(--c-font-size-title-2)` | 本组件 CSS<br>`font-size` |
| `--c-page-header-title-font-weight` | 公开 | `600` | 本组件 CSS<br>`font-weight` |

</div>

## pagination

声明来源: `src/pagination/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-pagination-active-background` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background` |
| `--c-pagination-active-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-pagination-disabled-background` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background` |
| `--c-pagination-disabled-color` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-pagination-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-pagination-focus-offset` | 公开 | `1px` | 本组件 CSS<br>`outline-offset` |
| `--c-pagination-focus-space` | 公开 | `3px` | 本组件 CSS<br>`padding` |
| `--c-pagination-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-pagination-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-pagination-gap` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`gap` |
| `--c-pagination-hover-background` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background` |
| `--c-pagination-icon-size` | 公开 | `16px` | 本组件 CSS<br>`height`, `width` |
| `--c-pagination-input-width` | 公开 | `32px` | 本组件 CSS<br>`width` |
| `--c-pagination-item-background` | 公开 | `transparent` | 本组件 CSS<br>`background` |
| `--c-pagination-item-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-pagination-item-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap`, `padding-left` |
| `--c-pagination-item-padding` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-pagination-select-width` | 公开 | `max-content` | 本组件 CSS<br>`width` |
| `--c-pagination-size-lg` | 公开 | `44px` | 本组件 CSS<br>`height`, `min-height`, `min-width` |
| `--c-pagination-size-md` | 公开 | `36px` | 本组件 CSS<br>`height`, `min-height`, `min-width` |
| `--c-pagination-size-sm` | 公开 | `28px` | 本组件 CSS<br>`height`, `min-height`, `min-width` |
| `--c-pagination-size-xl` | 公开 | `52px` | 本组件 CSS<br>`height`, `min-height`, `min-width` |
| `--c-pagination-size-xs` | 公开 | `24px` | 本组件 CSS<br>`height`, `min-height`, `min-width` |
| `--c-pagination-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-pagination-touch-size` | 公开 | `44px` | 本组件 CSS<br>`height`, `min-height` |

</div>

## paper

声明来源: `src/paper/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-paper-background` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-paper-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-paper-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-paper-border-width` | 公开 | `1px` | 本组件 CSS<br>`border` |
| `--c-paper-transition-duration` | 公开 | `var(--c-sys-motion-duration-slow)` | 本组件 CSS<br>`transition` |

</div>

## popconfirm

声明来源: `src/popconfirm/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-popconfirm-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border` |
| `--c-popconfirm-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-popconfirm-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border` |
| `--c-popconfirm-box-shadow` | 公开 | `var(--c-shadow2-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-popconfirm-button-margin-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-popconfirm-content-bg` | 公开 | `var(--c-color-bg-popup)` | 本组件 CSS<br>`background-color` |
| `--c-popconfirm-content-text-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-popconfirm-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-popconfirm-icon-margin-right` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-right` |
| `--c-popconfirm-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-popconfirm-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-popconfirm-padding-vertical` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-popconfirm-status-danger-title-icon-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-popconfirm-status-info-title-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-popconfirm-status-success-title-icon-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-popconfirm-title-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size`, `height` |
| `--c-popconfirm-title-icon-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-popconfirm-title-icon-size` | 公开 | `18px` | 本组件 CSS<br>`font-size` |
| `--c-popconfirm-title-margin-bottom` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-bottom` |
| `--c-popconfirm-title-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |

</div>

## popover

声明来源: `src/popover/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-popover-animation-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-popover-arrow-z-index` | 公开 | `1` | 本组件 CSS<br>`z-index` |
| `--c-popover-background` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-popover-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-popover-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-popover-border-width` | 公开 | `1px` | 本组件 CSS<br>`border` |
| `--c-popover-box-shadow` | 公开 | `var(--c-shadow2-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-popover-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-popover-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-popover-padding-horizontal` | 公开 | `var(--c-sys-space-7)` | 本组件 CSS<br>`padding` |
| `--c-popover-padding-vertical` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-popover-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-popover-title-content-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`margin-top` |
| `--c-popover-title-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-popover-title-font-weight` | 公开 | `var(--c-sys-font-weight-medium)` | 本组件 CSS<br>`font-weight` |
| `--c-popover-title-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |

</div>

## progress

声明来源: `src/progress/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-internal-progress-highlight` | 内部 | `rgba(255, 255, 255, 0.5)` | 本组件 CSS<br>`background` |
| `--c-progress-animation-duration` | 公开 | `1.5s` | 本组件 CSS<br>`animation`, `animation-delay` |
| `--c-progress-danger-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-progress-default-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-progress-font-size` | 公开 | `var(--c-sys-font-size-sm)` | 本组件 CSS<br>`font-size` |
| `--c-progress-info-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-progress-line-border-radius` | 公开 | `9999px` | 本组件 CSS<br>`border-radius` |
| `--c-progress-primary-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-progress-secondary-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-progress-steps-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap` |
| `--c-progress-success-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-progress-tertiary-color` | 公开 | `var(--c-sys-color-content-tertiary)` | 本组件 CSS<br>`color` |
| `--c-progress-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-progress-text-gap` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`gap` |
| `--c-progress-track-color` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background`, `stroke` |
| `--c-progress-transition-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-progress-warning-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |

</div>

## progress-group

声明来源: `src/progress-group/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-progress-group-dot-size` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`height`, `width` |
| `--c-progress-group-font-size` | 公开 | `var(--c-sys-font-size-sm)` | 本组件 CSS<br>`font-size` |
| `--c-progress-group-gap` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`gap` |
| `--c-progress-group-item-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap` |
| `--c-progress-group-muted-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-progress-group-radius` | 公开 | `9999px` | 本组件 CSS<br>`border-radius`, `clip-path` |
| `--c-progress-group-size-lg-thickness` | 公开 | `12px` | 本组件 CSS<br>`height`, `width` |
| `--c-progress-group-size-md-thickness` | 公开 | `8px` | 本组件 CSS<br>`height`, `width` |
| `--c-progress-group-size-sm-thickness` | 公开 | `4px` | 本组件 CSS<br>`height`, `width` |
| `--c-progress-group-size-xl-thickness` | 公开 | `16px` | 本组件 CSS<br>`height`, `width` |
| `--c-progress-group-size-xs-thickness` | 公开 | `2px` | 本组件 CSS<br>`height`, `width` |
| `--c-progress-group-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-progress-group-text-font-weight` | 公开 | `var(--c-sys-font-weight-medium)` | 本组件 CSS<br>`font-weight` |
| `--c-progress-group-tooltip-bg` | 公开 | `var(--c-sys-color-surface-tooltip)` | 本组件 CSS<br>`background` |
| `--c-progress-group-tooltip-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-progress-group-tooltip-duration` | 公开 | `var(--c-sys-motion-duration-fast)` | 本组件 CSS<br>`animation` |
| `--c-progress-group-tooltip-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-progress-group-tooltip-line-height` | 公开 | `1.4` | 本组件 CSS<br>`line-height` |
| `--c-progress-group-tooltip-max-width` | 公开 | `240px` | 本组件 CSS<br>`max-width` |
| `--c-progress-group-tooltip-offset` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`bottom`, `left` |
| `--c-progress-group-tooltip-padding` | 公开 | `5px var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-progress-group-tooltip-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-progress-group-track-color` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background`, `stroke` |
| `--c-progress-group-transition-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`animation`, `transition` |

</div>

## radio

声明来源: `src/radio/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-internal-radio-focus-offset` | 内部 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-internal-radio-focus-width` | 内部 | `2px` | 本组件 CSS<br>`outline` |
| `--c-internal-radio-mask-height` | 内部 | `var(--c-size-6)` | 本组件 CSS<br>`padding` |
| `--c-internal-radio-segment-bg` | 内部 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-internal-radio-segment-gap` | 内部 | `3px` | 本组件 CSS<br>`gap`, `padding` |
| `--c-internal-radio-segment-group-bg` | 内部 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-internal-radio-segment-height` | 内部 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`line-height`, `min-height` |
| `--c-internal-radio-segment-hover` | 内部 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-internal-radio-segment-padding` | 内部 | `12px` | 本组件 CSS<br>`padding-inline` |
| `--c-internal-radio-segment-radius` | 内部 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-radio-action-padding` | 公开 | `calc((var(--c-internal-radio-mask-height) / 2) - (var(--c-radio-control-size) / 2))` | 本组件 CSS<br>`padding` |
| `--c-radio-animation-duration` | 公开 | `var(--c-transition-duration-3)` | 本组件 CSS<br>`transition` |
| `--c-radio-control-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-radio-control-color-checked` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color`, `outline` |
| `--c-radio-control-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-radio-control-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-radio-control-size` | 公开 | `14px` | 本组件 CSS<br>`font-size`, `height`, `padding`, `width` |
| `--c-radio-group-gap` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`gap` |
| `--c-radio-label-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-radio-label-gap` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-inline-start` |
| `--c-radio-label-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-radio-label-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |

</div>

## rate

声明来源: `src/rate/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-rate-action-padding` | 公开 | `0px` | 本组件 CSS<br>`padding` |
| `--c-rate-active-color` | 公开 | `rgb(var(--c-gold-6))` | 本组件 CSS<br>`color` |
| `--c-rate-active-scale` | 公开 | `1.2` | 本组件 CSS<br>`transform` |
| `--c-rate-disabled-color` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-rate-empty-color` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`color` |
| `--c-rate-error-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-rate-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-rate-focus-offset` | 公开 | `2px` | 本组件 CSS<br>`outline-offset` |
| `--c-rate-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-rate-gap` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-right` |
| `--c-rate-min-height` | 公开 | `var(--c-size-md)` | 本组件 CSS<br>`min-height` |
| `--c-rate-scale-duration` | 公开 | `var(--c-transition-duration-4)` | 本组件 CSS<br>`animation` |
| `--c-rate-size` | 公开 | `var(--c-font-size-title-3)` | 本组件 CSS<br>`font-size` |
| `--c-rate-transition-duration` | 公开 | `var(--c-transition-duration-2)` | 本组件 CSS<br>`transition` |
| `--c-rate-transition-timing-function` | 公开 | `var(--c-transition-timing-function-standard)` | 本组件 CSS<br>`animation`, `transition` |

</div>

## resize-box

声明来源: `src/resize-box/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-resize-box-trigger-bg` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`background-color` |
| `--c-resize-box-trigger-font-size-icon` | 公开 | `12px` | 本组件 CSS<br>`font-size`, `margin` |
| `--c-resize-box-trigger-icon-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |

</div>

## result

声明来源: `src/result/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-result-background` | 公开 | `var(--c-color-bg-white)` | 本组件 CSS<br>`background-color` |
| `--c-result-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-result-content-margin` | 公开 | `var(--c-spacing-8) 0 0` | 本组件 CSS<br>`margin` |
| `--c-result-danger-border-color` | 公开 | `var(--c-color-danger-light-3)` | 本组件 CSS<br>`border-color` |
| `--c-result-danger-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`fill` |
| `--c-result-empty-border-color` | 公开 | `rgb(var(--c-gray-2))` | 本组件 CSS<br>`border-color` |
| `--c-result-empty-color` | 公开 | `rgb(var(--c-gray-5))` | 本组件 CSS<br>`fill` |
| `--c-result-extra-margin` | 公开 | `var(--c-spacing-8) 0 0` | 本组件 CSS<br>`margin` |
| `--c-result-image-size` | 公开 | `80px` | 本组件 CSS<br>`border`, `height`, `width` |
| `--c-result-info-border-color` | 公开 | `var(--c-color-primary-light-3)` | 本组件 CSS<br>`border-color` |
| `--c-result-info-color` | 公开 | `var(--c-color-info)` | 本组件 CSS<br>`fill` |
| `--c-result-padding` | 公开 | `var(--c-spacing-10)` | 本组件 CSS<br>`padding` |
| `--c-result-question-border-color` | 公开 | `rgb(var(--c-gray-2))` | 本组件 CSS<br>`border-color` |
| `--c-result-question-color` | 公开 | `rgb(var(--c-gray-6))` | 本组件 CSS<br>`fill` |
| `--c-result-subtitle-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-result-subtitle-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-result-subtitle-line-height` | 公开 | `1.5715` | 本组件 CSS<br>`line-height` |
| `--c-result-subtitle-margin` | 公开 | `var(--c-spacing-4) 0 0` | 本组件 CSS<br>`margin` |
| `--c-result-success-border-color` | 公开 | `var(--c-color-success-light-3)` | 本组件 CSS<br>`border-color` |
| `--c-result-success-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`fill` |
| `--c-result-title-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-result-title-font-size` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-result-title-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-result-title-margin` | 公开 | `var(--c-spacing-7) 0 0` | 本组件 CSS<br>`margin` |
| `--c-result-warning-border-color` | 公开 | `var(--c-color-warning-light-3)` | 本组件 CSS<br>`border-color` |
| `--c-result-warning-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`fill` |

</div>

## ripple

声明来源: `src/ripple/style/token.less`

expand-duration／fade-duration 消费到 transform／opacity 过渡；运行时再读取实际波纹计算后的 duration/delay，避免提前淡出或删除。两个 250ms 生命周期下限不是 CSS Token。采样边界与清理归属见设计指南；此间接时序消费不冒充运行时字面 var() 引用。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-ripple-color` | 公开 | `currentColor` | 本组件 CSS<br>`background-color` |
| `--c-ripple-cubic-bezier` | 公开 | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` | 本组件 CSS<br>`transition` |
| `--c-ripple-expand-duration` | 公开 | `200ms` | 本组件 CSS<br>`transition` |
| `--c-ripple-fade-duration` | 公开 | `140ms` | 本组件 CSS<br>`transition` |

</div>

## scheduler

声明来源: `src/scheduler/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-scheduler-axis-cell-width` | 公开 | `96px` | 本组件 CSS<br>`min-width` |
| `--c-scheduler-background` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background` |
| `--c-scheduler-border-color` | 公开 | `var(--c-color-border)` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-scheduler-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top`, `height`, `width` |
| `--c-scheduler-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-scheduler-column-min-width` | 公开 | `120px` | 本组件 CSS<br>`grid-template-columns`, `min-width` |
| `--c-scheduler-dependency-width` | 公开 | `2px` | 本组件 CSS<br>`stroke-width` |
| `--c-scheduler-dragging-opacity` | 公开 | `0.3` | 本组件 CSS<br>`opacity` |
| `--c-scheduler-editor-width` | 公开 | `440px` | 运行时引用（不代表可见性证明）<br>`scheduler/components/SchedulerEditor.vue` |
| `--c-scheduler-event-accent-color` | 公开 | `var(--c-scheduler-event-color)` | 本组件 CSS<br>`border-left` |
| `--c-scheduler-event-accent-width` | 公开 | `3px` | 本组件 CSS<br>`border-left` |
| `--c-scheduler-event-background` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background`, `background-color`, `background-image` |
| `--c-scheduler-event-background-image` | 公开 | `linear-gradient(var(--c-scheduler-event-background), var(--c-scheduler-event-background))` | 本组件 CSS<br>`background-image` |
| `--c-scheduler-event-color` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-image`, `border-left`, `color` |
| `--c-scheduler-event-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-scheduler-event-gap` | 公开 | `2px` | 本组件 CSS<br>`gap`, `height`, `margin-bottom`, `padding`, `top` |
| `--c-scheduler-event-min-height` | 公开 | `20px` | 本组件 CSS<br>`min-height`, `min-width` |
| `--c-scheduler-event-padding` | 公开 | `4px` | 本组件 CSS<br>`padding` |
| `--c-scheduler-event-radius` | 公开 | `4px` | 本组件 CSS<br>`border-radius` |
| `--c-scheduler-focus-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`outline` |
| `--c-scheduler-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline`, `outline-offset` |
| `--c-scheduler-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-scheduler-gap` | 公开 | `12px` | 本组件 CSS<br>`gap`, `margin-bottom`, `padding` |
| `--c-scheduler-ghost-opacity` | 公开 | `0.96` | 本组件 CSS<br>`opacity` |
| `--c-scheduler-ghost-padding` | 公开 | `8px 12px` | 本组件 CSS<br>`padding` |
| `--c-scheduler-ghost-z-index` | 公开 | `2000` | 本组件 CSS<br>`z-index` |
| `--c-scheduler-gutter-width` | 公开 | `64px` | 本组件 CSS<br>`grid-template-columns`, `min-width` |
| `--c-scheduler-header-z-index` | 公开 | `4` | 本组件 CSS<br>`z-index` |
| `--c-scheduler-heading-height` | 公开 | `44px` | 本组件 CSS<br>`min-height` |
| `--c-scheduler-lane-height` | 公开 | `38px` | 本组件 CSS<br>`height`, `top` |
| `--c-scheduler-line-height` | 公开 | `1.5` | 本组件 CSS<br>`line-height` |
| `--c-scheduler-max-height` | 公开 | `720px` | 本组件 CSS<br>`max-height` |
| `--c-scheduler-min-height` | 公开 | `560px` | 本组件 CSS<br>`min-height` |
| `--c-scheduler-mode-width` | 公开 | `150px` | 本组件 CSS<br>`width` |
| `--c-scheduler-month-cell-height` | 公开 | `124px` | 本组件 CSS<br>`height`, `min-height` |
| `--c-scheduler-muted-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-scheduler-now-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border-top`, `color` |
| `--c-scheduler-now-width` | 公开 | `2px` | 本组件 CSS<br>`border-top` |
| `--c-scheduler-now-z-index` | 公开 | `3` | 本组件 CSS<br>`z-index` |
| `--c-scheduler-padding` | 公开 | `16px` | 本组件 CSS<br>`margin-bottom`, `padding` |
| `--c-scheduler-preview-duration` | 公开 | `0ms` | 本组件 CSS<br>`transition` |
| `--c-scheduler-preview-opacity` | 公开 | `0.65` | 本组件 CSS<br>`opacity` |
| `--c-scheduler-preview-shadow` | 公开 | `0 4px 16px rgba(0, 0, 0, 0.15)` | 本组件 CSS<br>`box-shadow` |
| `--c-scheduler-preview-z-index` | 公开 | `3` | 本组件 CSS<br>`z-index` |
| `--c-scheduler-radius` | 公开 | `8px` | 本组件 CSS<br>`border-radius` |
| `--c-scheduler-resize-height` | 公开 | `6px` | 本组件 CSS<br>`height` |
| `--c-scheduler-resource-width` | 公开 | `150px` | 本组件 CSS<br>`grid-template-columns`, `min-width`, `width` |
| `--c-scheduler-resource-z-index` | 公开 | `2` | 本组件 CSS<br>`z-index` |
| `--c-scheduler-selected-background` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background` |
| `--c-scheduler-sidebar-width` | 公开 | `220px` | 本组件 CSS<br>`width` |
| `--c-scheduler-slot-height` | 公开 | `36px` | 本组件 CSS<br>`height` |
| `--c-scheduler-stack-focus-step` | 公开 | `1` | 本组件 CSS<br>`z-index` |
| `--c-scheduler-subtle-background` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background` |
| `--c-scheduler-timeline-min-width` | 公开 | `1000px` | 本组件 CSS<br>`min-width` |
| `--c-scheduler-today-background` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background` |
| `--c-scheduler-today-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-scheduler-unavailable-background` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-scheduler-virtual-height` | 公开 | `480px` | 运行时引用（不代表可见性证明）<br>`scheduler/components/SchedulerTimelineRows.vue` |
| `--c-scheduler-weekday-count` | 公开 | `7` | 本组件 CSS<br>`grid-template-columns` |

</div>

## scrollbar

声明来源: `src/scrollbar/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-scrollbar-thumb-bar-bg-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`background-color` |
| `--c-scrollbar-thumb-bar-bg-color-hover` | 公开 | `var(--c-sys-color-border-strong)` | 本组件 CSS<br>`background-color` |
| `--c-scrollbar-thumb-bar-border-radius` | 公开 | `6px` | 本组件 CSS<br>`border-radius` |
| `--c-scrollbar-thumb-bar-size` | 公开 | `9px` | 本组件 CSS<br>`height`, `margin`, `width` |
| `--c-scrollbar-track-bg-color` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-scrollbar-track-border-color` | 公开 | `var(--c-sys-color-border-subtle)` | 本组件 CSS<br>`border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-scrollbar-track-border-size` | 公开 | `1px` | 本组件 CSS<br>`border-bottom`, `border-left`, `border-right`, `border-top`, `margin`, `right` |
| `--c-scrollbar-track-size` | 公开 | `15px` | 本组件 CSS<br>`height`, `margin`, `width` |

</div>

## search

声明来源: `src/search/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-search-action-color-text` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-search-action-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-search-action-spacing-inline-start` | 公开 | `16px` | 本组件 CSS<br>`margin-inline-start` |
| `--c-search-color-bg` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-search-color-icon` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-search-field-color-bg` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-search-field-radius` | 公开 | `4px` | 本组件 CSS<br>`border-radius` |
| `--c-search-field-size-min-height` | 公开 | `32px` | 本组件 CSS<br>`border-radius`, `min-height` |
| `--c-search-field-spacing-padding` | 公开 | `0` | 本组件 CSS<br>`padding` |
| `--c-search-history-item-color-border` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border-bottom` |
| `--c-search-history-item-color-text` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-search-history-item-size-min-height` | 公开 | `44px` | 本组件 CSS<br>`min-height` |
| `--c-search-history-spacing-padding` | 公开 | `8px 16px 24px` | 本组件 CSS<br>`padding` |
| `--c-search-icon-spacing` | 公开 | `8px` | 本组件 CSS<br>`margin-inline-end` |
| `--c-search-label-color-text` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-search-label-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-search-label-spacing-inline-end` | 公开 | `10px` | 本组件 CSS<br>`margin-inline-end` |
| `--c-search-opacity-disabled` | 公开 | `0.6` | 本组件 CSS<br>`opacity` |
| `--c-search-select-icon-size` | 公开 | `18px` | 本组件 CSS<br>`font-size` |
| `--c-search-select-icon-spacing` | 公开 | `2px` | 本组件 CSS<br>`margin-inline-start` |
| `--c-search-select-size-max-width` | 公开 | `120px` | 本组件 CSS<br>`max-width` |
| `--c-search-select-size-min-width` | 公开 | `72px` | 本组件 CSS<br>`min-width` |
| `--c-search-size-icon` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-search-size-min-height` | 公开 | `32px` | 本组件 CSS<br>`min-height` |
| `--c-search-spacing-padding` | 公开 | `0` | 本组件 CSS<br>`padding` |

</div>

## segmented

声明来源: `src/segmented/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-segmented-bg` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-segmented-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-segmented-font-size-lg` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-segmented-font-size-md` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-segmented-font-size-sm` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-segmented-font-size-xl` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-segmented-font-size-xs` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-segmented-height-lg` | 公开 | `var(--c-size-9)` | 本组件 CSS<br>`min-height` |
| `--c-segmented-height-md` | 公开 | `var(--c-size-8)` | 本组件 CSS<br>`min-height` |
| `--c-segmented-height-sm` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`min-height` |
| `--c-segmented-height-xl` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`min-height` |
| `--c-segmented-height-xs` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`min-height` |
| `--c-segmented-item-bg-hover` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-segmented-item-bg-selected` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-segmented-item-border-radius` | 公开 | `calc(var(--c-segmented-border-radius) - 1px)` | 本组件 CSS<br>`border-radius` |
| `--c-segmented-item-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-segmented-item-color-hover` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-segmented-item-color-selected` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-segmented-item-disabled-color` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-segmented-item-font-weight-selected` | 公开 | `500` | 本组件 CSS<br>`font-weight` |
| `--c-segmented-item-padding-lg` | 公开 | `0 14px` | 本组件 CSS<br>`padding` |
| `--c-segmented-item-padding-md` | 公开 | `0 var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-segmented-item-padding-sm` | 公开 | `0 var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-segmented-item-padding-xl` | 公开 | `0 var(--c-spacing-7)` | 本组件 CSS<br>`padding` |
| `--c-segmented-item-padding-xs` | 公开 | `0 var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-segmented-label-gap` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`gap` |
| `--c-segmented-padding` | 公开 | `var(--c-border-width-3)` | 本组件 CSS<br>`padding` |
| `--c-segmented-shadow-selected` | 公开 | `0 1px 2px rgba(0, 0, 0, 0.06)` | 本组件 CSS<br>`box-shadow` |

</div>

## select

声明来源: `src/select/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-select-popup-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-select-popup-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border`, `border-bottom`, `border-top` |
| `--c-select-popup-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-select-popup-box-shadow` | 公开 | `0 4px 10px rgba(0, 0, 0, 0.1)` | 本组件 CSS<br>`box-shadow` |
| `--c-select-popup-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-select-popup-group-title-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-select-popup-group-title-height` | 公开 | `20px` | 本组件 CSS<br>`line-height` |
| `--c-select-popup-group-title-padding-horizontal` | 公开 | `var(--c-select-popup-option-padding-horizontal)` | 本组件 CSS<br>`padding` |
| `--c-select-popup-group-title-padding-top` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`margin-top` |
| `--c-select-popup-group-title-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-select-popup-loading-min-height` | 公开 | `50px` | 本组件 CSS<br>`min-height` |
| `--c-select-popup-max-height` | 公开 | `200px` | 本组件 CSS<br>`max-height` |
| `--c-select-popup-option-bg` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-select-popup-option-bg-disabled` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-select-popup-option-bg-hover` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-select-popup-option-bg-selected` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-select-popup-option-font-weight-selected` | 公开 | `var(--c-sys-font-weight-medium)` | 本组件 CSS<br>`font-weight` |
| `--c-select-popup-option-height` | 公开 | `36px` | 本组件 CSS<br>`line-height` |
| `--c-select-popup-option-icon-margin-right` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`margin-right` |
| `--c-select-popup-option-padding-horizontal` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`padding` |
| `--c-select-popup-option-suffix-icon-margin-left` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`margin-left` |
| `--c-select-popup-option-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-select-popup-option-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-select-popup-option-text-color-hover` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-select-popup-option-text-color-selected` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-select-popup-padding-vertical` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`padding` |

</div>

## skeleton

声明来源: `src/skeleton/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-skeleton-animation-background` | 公开 | `linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent)` | 本组件 CSS<br>`background` |
| `--c-skeleton-animation-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |
| `--c-skeleton-avatar-background-color` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-skeleton-avatar-border-radius` | 公开 | `50%` | 本组件 CSS<br>`border-radius` |
| `--c-skeleton-avatar-margin-right` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`margin-right` |
| `--c-skeleton-avatar-size` | 公开 | `34px` | 本组件 CSS<br>`height`, `width` |
| `--c-skeleton-card-background-color` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-skeleton-card-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-skeleton-card-height` | 公开 | `160px` | 本组件 CSS<br>`height` |
| `--c-skeleton-card-margin-bottom` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`margin-bottom` |
| `--c-skeleton-content-padding` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-skeleton-row-border-radius` | 公开 | `10px` | 本组件 CSS<br>`border-radius` |
| `--c-skeleton-row-height` | 公开 | `12px` | 本组件 CSS<br>`height` |
| `--c-skeleton-row-margin-top` | 公开 | `10px` | 本组件 CSS<br>`margin-top` |
| `--c-skeleton-shape-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-skeleton-shape-size-lg` | 公开 | `60px` | 本组件 CSS<br>`height`, `width` |
| `--c-skeleton-shape-size-md` | 公开 | `48px` | 本组件 CSS<br>`height`, `width` |
| `--c-skeleton-shape-size-sm` | 公开 | `36px` | 本组件 CSS<br>`height`, `width` |
| `--c-skeleton-title-background-color` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-skeleton-title-border-radius` | 公开 | `10px` | 本组件 CSS<br>`border-radius` |
| `--c-skeleton-title-width` | 公开 | `50%` | 本组件 CSS<br>`width` |
| `--c-skeleton-transition-duration` | 公开 | `var(--c-sys-motion-duration-slow)` | 本组件 CSS<br>`transition` |

</div>

## slider

声明来源: `src/slider/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-internal-slider-border-width` | 内部 | `2px` | 本组件 CSS<br>`border`, `outline` |
| `--c-internal-slider-focus-offset` | 内部 | `3px` | 本组件 CSS<br>`outline-offset` |
| `--c-internal-slider-mark-offset` | 内部 | `8px` | 本组件 CSS<br>`left`, `top` |
| `--c-slider-active-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background`, `outline` |
| `--c-slider-control-height` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`height`, `min-height`, `padding-bottom`, `padding-inline-end`, `width` |
| `--c-slider-disabled-color` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`background`, `border-color` |
| `--c-slider-error-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background`, `border-color` |
| `--c-slider-font-size` | 公开 | `var(--c-sys-font-size-sm)` | 本组件 CSS<br>`font-size` |
| `--c-slider-gap` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`bottom`, `gap`, `left`, `padding` |
| `--c-slider-input-width` | 公开 | `80px` | 本组件 CSS<br>`width` |
| `--c-slider-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-slider-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-slider-thumb-border-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border` |
| `--c-slider-thumb-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-slider-thumb-size` | 公开 | `16px` | 本组件 CSS<br>`height`, `width` |
| `--c-slider-tooltip-background` | 公开 | `var(--c-sys-color-surface-tooltip)` | 本组件 CSS<br>`background` |
| `--c-slider-tooltip-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-slider-track-color` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-slider-track-height` | 公开 | `4px` | 本组件 CSS<br>`height`, `width` |
| `--c-slider-transition-duration` | 公开 | `var(--c-sys-motion-duration-fast)` | 本组件 CSS<br>`transition` |

</div>

## space

声明来源: `src/space/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-space-size-lg-column-gap` | 公开 | `var(--c-sys-space-5)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-lg-row-gap` | 公开 | `var(--c-sys-space-6)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-md-column-gap` | 公开 | `var(--c-sys-space-4)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-md-row-gap` | 公开 | `var(--c-sys-space-5)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-sm-column-gap` | 公开 | `var(--c-sys-space-3)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-sm-row-gap` | 公开 | `var(--c-sys-space-4)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-xl-column-gap` | 公开 | `var(--c-sys-space-6)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-xl-row-gap` | 公开 | `var(--c-sys-space-8)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-xs-column-gap` | 公开 | `var(--c-sys-space-2)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |
| `--c-space-size-xs-row-gap` | 公开 | `var(--c-sys-space-2)` | 已审动态运行时<br>`space/space.tsx: getSize -> gapStyle -> style.gap` |

</div>

## split

声明来源: `src/split/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-split-trigger-bg` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`background-color` |
| `--c-split-trigger-font-size-icon` | 公开 | `12px` | 本组件 CSS<br>`font-size`, `margin` |
| `--c-split-trigger-icon-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-split-trigger-size-icon-wrapper` | 公开 | `6px` | 本组件 CSS<br>`height`, `width` |

</div>

## statistic

声明来源: `src/statistic/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-statistic-decimal-font-size` | 公开 | `inherit` | 本组件 CSS<br>`font-size` |
| `--c-statistic-extra-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-statistic-extra-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-statistic-extra-margin-top` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-top` |
| `--c-statistic-prefix-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-statistic-prefix-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-statistic-prefix-spacing` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-right` |
| `--c-statistic-suffix-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-statistic-suffix-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-statistic-suffix-spacing` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-left` |
| `--c-statistic-title-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-statistic-title-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-statistic-title-margin-bottom` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-bottom` |
| `--c-statistic-value-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-statistic-value-font-size` | 公开 | `26px` | 本组件 CSS<br>`font-size` |
| `--c-statistic-value-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |

</div>

## steps

声明来源: `src/steps/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-steps-arrow-item-bg-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background-color`, `border-left` |
| `--c-steps-arrow-item-bg-finish` | 公开 | `var(--c-sys-color-state-selected)` | 本组件 CSS<br>`background-color`, `border-left` |
| `--c-steps-arrow-item-bg-process` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color`, `border-left` |
| `--c-steps-arrow-item-bg-wait` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color`, `border-left` |
| `--c-steps-arrow-item-description-color-error` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-description-color-finish` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-description-color-process` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-description-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-description-margin-top` | 公开 | `0` | 本组件 CSS<br>`margin-top` |
| `--c-steps-arrow-item-gap` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-right` |
| `--c-steps-arrow-item-title-color-error` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-title-color-finish` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-title-color-process` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-title-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-arrow-item-title-font-weight-active` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-steps-arrow-size-md-title-padding-left` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`padding-left` |
| `--c-steps-arrow-size-sm-title-padding-left` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding-left` |
| `--c-steps-changeable-hover-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-horizontal-item-description-margin-top` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-top` |
| `--c-steps-circle-item-bg-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-bg-finish` | 公开 | `var(--c-sys-color-state-selected)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-bg-process` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-bg-wait` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-border-color-error` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-steps-circle-item-border-color-finish` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-steps-circle-item-border-color-process` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-steps-circle-item-border-color-wait` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-steps-circle-item-description-color-error` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-description-color-finish` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-description-color-process` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-description-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-icon-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-steps-circle-item-icon-gap` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`left`, `margin-right`, `padding-right` |
| `--c-steps-circle-item-icon-text-color-error` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-icon-text-color-finish` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-icon-text-color-process` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-icon-text-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-tail-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-tail-color-process` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-tail-color-wait` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`background-color` |
| `--c-steps-circle-item-tail-size` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`height`, `left`, `top`, `width` |
| `--c-steps-circle-item-title-color-error` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-title-color-finish` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-title-color-process` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-title-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-circle-item-title-font-weight-active` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-steps-circle-tail-hack-width` | 公开 | `5000px` | 本组件 CSS<br>`width` |
| `--c-steps-circle-vertical-item-description-margin-top` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-top` |
| `--c-steps-circle-vertical-tail-padding-extra` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-steps-direction-horizontal-description-width` | 公开 | `var(--c-size-35)` | 本组件 CSS<br>`max-width` |
| `--c-steps-dot-horizontal-item-description-margin-top` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-top` |
| `--c-steps-dot-horizontal-item-title-margin-top` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-top` |
| `--c-steps-dot-item-bg-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-bg-finish` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-bg-process` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-bg-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-border-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border-color` |
| `--c-steps-dot-item-border-color-finish` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border-color` |
| `--c-steps-dot-item-border-color-process` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border-color` |
| `--c-steps-dot-item-border-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border-color` |
| `--c-steps-dot-item-description-color-error` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-description-color-finish` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-description-color-process` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-description-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-icon-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-steps-dot-item-icon-gap` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`left`, `margin-right`, `padding-top` |
| `--c-steps-dot-item-icon-margin-left` | 公开 | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-dot-item-icon-size)) / 2)` | 本组件 CSS<br>`left`, `margin-left` |
| `--c-steps-dot-item-icon-size` | 公开 | `var(--c-size-2)` | 本组件 CSS<br>`height`, `left`, `margin-left`, `margin-right`, `margin-top`, `padding-top`, `top`, `width` |
| `--c-steps-dot-item-icon-size-active` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`height`, `margin-left`, `margin-top`, `width` |
| `--c-steps-dot-item-tail-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-tail-color-process` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-tail-color-wait` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`background-color` |
| `--c-steps-dot-item-tail-size` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`height`, `top` |
| `--c-steps-dot-item-title-color-error` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-title-color-finish` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-title-color-process` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-title-color-wait` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-steps-dot-item-title-font-weight-active` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-steps-dot-vertical-item-description-margin-top` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-top` |
| `--c-steps-dot-vertical-item-dot-margin-top` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-top` |
| `--c-steps-dot-vertical-item-dot-margin-top-active` | 公开 | `calc(var(--c-steps-dot-vertical-item-dot-margin-top) - (var(--c-steps-dot-item-icon-size-active) - var(--c-steps-dot-item-icon-size)))` | 本组件 CSS<br>`margin-top` |
| `--c-steps-dot-vertical-item-icon-margin-right` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-right` |
| `--c-steps-dot-vertical-tail-padding-bottom` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding-bottom` |
| `--c-steps-dot-vertical-tail-padding-top-extra` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding-top` |
| `--c-steps-label-vertical-content-width` | 公开 | `100%` | 本组件 CSS<br>`left`, `margin-left` |
| `--c-steps-navigation-arrow-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border` |
| `--c-steps-navigation-arrow-line-width` | 公开 | `var(--c-border-width-2)` | 本组件 CSS<br>`border` |
| `--c-steps-navigation-arrow-right` | 公开 | `30px` | 本组件 CSS<br>`right` |
| `--c-steps-navigation-arrow-size` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`height`, `width` |
| `--c-steps-navigation-arrow-spacing-right` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding-right` |
| `--c-steps-navigation-arrow-top` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`top` |
| `--c-steps-navigation-content-margin-bottom` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-bottom` |
| `--c-steps-navigation-description-padding-right` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding-right` |
| `--c-steps-navigation-ink-bg` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background-color` |
| `--c-steps-navigation-ink-height` | 公开 | `var(--c-border-width-2)` | 本组件 CSS<br>`height` |
| `--c-steps-navigation-ink-spacing-left` | 公开 | `var(--c-spacing-none)` | 本组件 CSS<br>`left` |
| `--c-steps-navigation-ink-spacing-right` | 公开 | `30px` | 本组件 CSS<br>`right` |
| `--c-steps-navigation-margin-right` | 公开 | `var(--c-spacing-10)` | 本组件 CSS<br>`margin-right` |
| `--c-steps-navigation-padding-left` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding-left` |
| `--c-steps-node-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-steps-size-md` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`height`, `left`, `line-height`, `margin-left`, `margin-top`, `padding`, `padding-right`, `top`, `width` |
| `--c-steps-size-md-arrow` | 公开 | `var(--c-size-18)` | 本组件 CSS<br>`border-bottom`, `border-left`, `border-top`, `height`, `padding-left`, `right` |
| `--c-steps-size-md-description-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-steps-size-md-icon-font-size` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`font-size` |
| `--c-steps-size-md-item-icon-margin-left` | 公开 | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-size-md)) / 2)` | 本组件 CSS<br>`left`, `margin-left` |
| `--c-steps-size-md-title-font-size` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-steps-size-sm` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `left`, `line-height`, `margin-left`, `padding`, `padding-right`, `top`, `width` |
| `--c-steps-size-sm-arrow` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`border-bottom`, `border-left`, `border-top`, `height`, `padding-left`, `right` |
| `--c-steps-size-sm-description-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-steps-size-sm-icon-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-steps-size-sm-item-icon-margin-left` | 公开 | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-size-sm)) / 2)` | 本组件 CSS<br>`left`, `margin-left` |
| `--c-steps-size-sm-title-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-steps-transition-duration-1` | 公开 | `var(--c-transition-duration-1)` | 本组件 CSS<br>`transition` |
| `--c-steps-transition-timing-function-linear` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`transition` |
| `--c-steps-vertical-item-min-height` | 公开 | `90px` | 本组件 CSS<br>`min-height` |

</div>

## switch

声明来源: `src/switch/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-switch-disabled-opacity` | 公开 | `0.5` | 本组件 CSS<br>`opacity` |
| `--c-switch-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-switch-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline`, `outline-offset` |
| `--c-switch-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-switch-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`inset-inline-start`, `padding-inline` |
| `--c-switch-handle-background` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-switch-handle-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-switch-handle-size` | 公开 | `16px` | 本组件 CSS<br>`height`, `inset-inline-start`, `padding-inline`, `width` |
| `--c-switch-height` | 公开 | `24px` | 本组件 CSS<br>`height` |
| `--c-switch-hit-area` | 公开 | `0px` | 本组件 CSS<br>`inset` |
| `--c-switch-line-handle-size` | 公开 | `20px` | 本组件 CSS<br>`height`, `inset-inline-start`, `padding-inline`, `width` |
| `--c-switch-line-height` | 公开 | `12px` | 本组件 CSS<br>`height` |
| `--c-switch-loading-duration` | 公开 | `1s` | 本组件 CSS<br>`animation` |
| `--c-switch-radius` | 公开 | `var(--c-sys-radius-pill)` | 本组件 CSS<br>`border-radius` |
| `--c-switch-ripple-duration` | 公开 | `400ms` | 本组件 CSS<br>`animation` |
| `--c-switch-ripple-scale` | 公开 | `2.4` | 本组件 CSS<br>`transform` |
| `--c-switch-round-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-switch-shadow-color` | 公开 | `#0003` | 运行时引用（不代表可见性证明）<br>`switch/Switch.vue` |
| `--c-switch-size-lg-scale` | 公开 | `1.2` | 本组件 CSS<br>`font-size`, `height`, `inset-inline-start`, `min-width`, `padding-inline`, `width` |
| `--c-switch-size-sm-scale` | 公开 | `0.8` | 本组件 CSS<br>`font-size`, `height`, `inset-inline-start`, `min-width`, `padding-inline`, `width` |
| `--c-switch-text-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-switch-tonal-border-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`background`, `border` |
| `--c-switch-tonal-border-width` | 公开 | `2px` | 本组件 CSS<br>`border` |
| `--c-switch-tonal-handle-color` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`color` |
| `--c-switch-tonal-handle-size` | 公开 | `24px` | 本组件 CSS<br>`height`, `inset-inline-start`, `padding-inline`, `width` |
| `--c-switch-tonal-height` | 公开 | `32px` | 本组件 CSS<br>`height` |
| `--c-switch-tonal-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-switch-tonal-track-background` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-switch-tonal-width` | 公开 | `52px` | 本组件 CSS<br>`min-width` |
| `--c-switch-track-active-background` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background`, `outline` |
| `--c-switch-track-background` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`background` |
| `--c-switch-track-error-background` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`background`, `border-color` |
| `--c-switch-width` | 公开 | `40px` | 本组件 CSS<br>`min-width` |

</div>

## table

声明来源: `src/table/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-table-body-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-table-body-cell-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-table-body-cell-text-color` | 公开 | `rgb(var(--c-gray-10))` | 本组件 CSS<br>`color` |
| `--c-table-body-min-height` | 公开 | `40px` | 本组件 CSS<br>`min-height` |
| `--c-table-body-row-active-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-body-row-active-dark-bg` | 公开 | `var(--c-color-neutral-2)` | 本组件 CSS<br>`background-color` |
| `--c-table-body-row-hover-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-body-sorted-cell-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-body-stripe-row-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top`, `box-shadow` |
| `--c-table-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius`, `border-top-left-radius`, `border-top-right-radius` |
| `--c-table-border-style` | 公开 | `solid` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-table-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border`, `border-bottom`, `border-left`, `border-right`, `border-top`, `bottom`, `box-shadow`, `margin` |
| `--c-table-column-handle-right` | 公开 | `-4px` | 本组件 CSS<br>`right` |
| `--c-table-column-handle-width` | 公开 | `8px` | 本组件 CSS<br>`width` |
| `--c-table-column-insert-empty-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-table-column-insert-empty-line-height` | 公开 | `22px` | 本组件 CSS<br>`line-height` |
| `--c-table-column-insert-empty-text-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-table-column-insert-group-margin-top` | 公开 | `16px` | 本组件 CSS<br>`margin-top` |
| `--c-table-column-insert-group-title-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-table-column-insert-group-title-line-height` | 公开 | `20px` | 本组件 CSS<br>`line-height` |
| `--c-table-column-insert-group-title-margin-bottom` | 公开 | `8px` | 本组件 CSS<br>`margin-bottom` |
| `--c-table-column-insert-group-title-text-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-table-column-insert-item-min-height` | 公开 | `32px` | 本组件 CSS<br>`min-height` |
| `--c-table-column-insert-max-height` | 公开 | `calc(100vh - 160px)` | 本组件 CSS<br>`max-height` |
| `--c-table-column-insert-padding` | 公开 | `16px 20px` | 本组件 CSS<br>`padding` |
| `--c-table-drag-handle-col-width` | 公开 | `40px` | 本组件 CSS<br>`max-width`, `min-width`, `width` |
| `--c-table-editable-body-cell-border-color` | 公开 | `var(--c-color-white)` | 本组件 CSS<br>`border` |
| `--c-table-expand-button-border-radius` | 公开 | `2px` | 本组件 CSS<br>`border-radius` |
| `--c-table-expand-button-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-table-expand-button-margin-right` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-right` |
| `--c-table-expand-button-size` | 公开 | `14px` | 本组件 CSS<br>`height`, `line-height`, `width` |
| `--c-table-expand-content-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-expand-content-hover-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-expand-icon-bg` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`background-color` |
| `--c-table-expand-icon-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-table-expand-icon-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border` |
| `--c-table-expand-icon-col-width` | 公开 | `40px` | 本组件 CSS<br>`max-width`, `min-width`, `width` |
| `--c-table-expand-icon-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-table-expand-icon-hover-bg` | 公开 | `var(--c-color-neutral-4)` | 本组件 CSS<br>`background-color` |
| `--c-table-expand-icon-hover-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-table-expand-icon-hover-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-table-expand-loading-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-table-extra-column-icon-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-table-extra-column-icon-hover-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-table-filters-bottom-gap` | 公开 | `8px` | 本组件 CSS<br>`margin-right` |
| `--c-table-filters-bottom-height` | 公开 | `38px` | 本组件 CSS<br>`height` |
| `--c-table-filters-bottom-line-height` | 公开 | `38px` | 本组件 CSS<br>`line-height` |
| `--c-table-filters-bottom-padding` | 公开 | `0 12px` | 本组件 CSS<br>`padding` |
| `--c-table-filters-icon-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-table-filters-icon-hover-bg` | 公开 | `var(--c-color-fill-4)` | 本组件 CSS<br>`background` |
| `--c-table-filters-item-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-table-filters-item-height` | 公开 | `32px` | 本组件 CSS<br>`height` |
| `--c-table-filters-item-line-height` | 公开 | `32px` | 本组件 CSS<br>`line-height` |
| `--c-table-filters-item-padding` | 公开 | `0 12px` | 本组件 CSS<br>`padding` |
| `--c-table-filters-list-padding` | 公开 | `4px 0` | 本组件 CSS<br>`padding` |
| `--c-table-filters-popup-bg` | 公开 | `var(--c-color-bg-5)` | 本组件 CSS<br>`background` |
| `--c-table-filters-popup-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border` |
| `--c-table-filters-popup-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-table-filters-popup-box-shadow` | 公开 | `var(--c-shadow1-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-table-filters-popup-max-height` | 公开 | `200px` | 本组件 CSS<br>`max-height` |
| `--c-table-filters-popup-min-width` | 公开 | `100px` | 本组件 CSS<br>`min-width` |
| `--c-table-filters-text-height` | 公开 | `34px` | 本组件 CSS<br>`height` |
| `--c-table-filters-text-line-height` | 公开 | `32px` | 本组件 CSS<br>`line-height` |
| `--c-table-filters-text-max-width` | 公开 | `160px` | 本组件 CSS<br>`max-width` |
| `--c-table-filters-text-padding-left` | 公开 | `10px` | 本组件 CSS<br>`padding-left` |
| `--c-table-filters-width` | 公开 | `24px` | 本组件 CSS<br>`width` |
| `--c-table-header-cell-action-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-table-header-cell-action-hover-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-table-header-cell-action-margin-left` | 公开 | `2px` | 本组件 CSS<br>`margin-left` |
| `--c-table-header-cell-bg` | 公开 | `var(--c-color-neutral-2)` | 本组件 CSS<br>`background-color` |
| `--c-table-header-cell-text-color` | 公开 | `rgb(var(--c-gray-10))` | 本组件 CSS<br>`color` |
| `--c-table-header-filters-icon-active-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-table-header-filters-icon-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-table-header-filters-icon-hover-bg` | 公开 | `var(--c-color-neutral-4)` | 本组件 CSS<br>`background-color` |
| `--c-table-header-sorted-cell-bg` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`background-color` |
| `--c-table-header-sorted-cell-hover-bg` | 公开 | `rgba(var(--c-gray-4), 0.5)` | 本组件 CSS<br>`background-color` |
| `--c-table-header-sorter-icon-active-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-table-header-sorter-icon-color` | 公开 | `var(--c-color-neutral-5)` | 本组件 CSS<br>`color` |
| `--c-table-header-sorter-icon-down-top` | 公开 | `-3px` | 本组件 CSS<br>`top` |
| `--c-table-header-sorter-icon-font-size` | 公开 | `12px` | 本组件 CSS<br>`font-size` |
| `--c-table-header-sorter-icon-height` | 公开 | `8px` | 本组件 CSS<br>`height`, `line-height` |
| `--c-table-header-sorter-icon-left` | 公开 | `1px` | 本组件 CSS<br>`left` |
| `--c-table-header-sorter-icon-margin-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-table-header-sorter-icon-next-color` | 公开 | `var(--c-color-neutral-6)` | 本组件 CSS<br>`color` |
| `--c-table-header-sorter-icon-up-top` | 公开 | `-2px` | 本组件 CSS<br>`top` |
| `--c-table-header-sorter-icon-width` | 公开 | `14px` | 本组件 CSS<br>`width` |
| `--c-table-header-text-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-table-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-table-pagination-margin` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin-bottom`, `margin-top` |
| `--c-table-pagination-sticky-bg` | 公开 | `var(--c-color-bg-1)` | 本组件 CSS<br>`background-color` |
| `--c-table-pagination-sticky-padding` | 公开 | `12px 0` | 本组件 CSS<br>`padding` |
| `--c-table-resizing-border-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border-right-color` |
| `--c-table-selection-col-width` | 公开 | `40px` | 本组件 CSS<br>`max-width`, `min-width`, `width` |
| `--c-table-shadow-left` | 公开 | `inset 6px 0 8px -3px rgba(0, 0, 0, 0.15)` | 本组件 CSS<br>`box-shadow` |
| `--c-table-shadow-right` | 公开 | `inset -6px 0 8px -3px rgba(0, 0, 0, 0.15)` | 本组件 CSS<br>`box-shadow` |
| `--c-table-shadow-wrapper-width` | 公开 | `10px` | 本组件 CSS<br>`width` |
| `--c-table-size-lg-extra-icon-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-table-size-lg-extra-padding-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-table-size-lg-font-size` | 公开 | `var(--c-table-size-md-font-size)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-lg-header-font-size` | 公开 | `var(--c-table-size-md-header-font-size)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-lg-padding-horizontal` | 公开 | `var(--c-table-size-md-padding-horizontal)` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-lg-padding-vertical` | 公开 | `var(--c-table-size-md-padding-vertical)` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-md-extra-icon-font-size` | 公开 | `16px` | 本组件 CSS<br>`font-size` |
| `--c-table-size-md-extra-padding-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-table-size-md-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-md-header-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-md-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-md-padding-vertical` | 公开 | `9px` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-sm-extra-icon-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-table-size-sm-extra-padding-horizontal` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-table-size-sm-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-sm-header-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-sm-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-sm-padding-vertical` | 公开 | `5px` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-xs-extra-icon-font-size` | 公开 | `14px` | 本组件 CSS<br>`font-size` |
| `--c-table-size-xs-extra-padding-horizontal` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-table-size-xs-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-xs-header-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-table-size-xs-padding-horizontal` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-size-xs-padding-vertical` | 公开 | `2px` | 本组件 CSS<br>`margin`, `padding` |
| `--c-table-tfoot-bg` | 公开 | `var(--c-color-neutral-2)` | 本组件 CSS<br>`background-color` |
| `--c-table-th-actions-margin-left` | 公开 | `8px` | 本组件 CSS<br>`margin-left` |
| `--c-table-transition-duration` | 公开 | `var(--c-transition-duration-1)` | 本组件 CSS<br>`transition` |
| `--c-table-transition-timing-function` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`transition` |

</div>

## tabs

声明来源: `src/tabs/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-tabs-active-font-weight` | 公开 | `var(--c-sys-font-weight-semibold)` | 本组件 CSS<br>`font-weight` |
| `--c-tabs-active-shadow` | 公开 | `0 1px 3px rgba(0, 0, 0, 0.12)` | 本组件 CSS<br>`box-shadow` |
| `--c-tabs-animation-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`animation` |
| `--c-tabs-background` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-tabs-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`background`, `border-color` |
| `--c-tabs-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `bottom`, `height` |
| `--c-tabs-capsule-radius` | 公开 | `var(--c-sys-radius-pill)` | 本组件 CSS<br>`border-radius` |
| `--c-tabs-content-padding` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding-block`, `padding-inline-start` |
| `--c-tabs-control-height` | 公开 | `var(--c-sys-control-height-xs)` | 本组件 CSS<br>`min-height`, `min-width` |
| `--c-tabs-focus-offset` | 公开 | `-3px` | 本组件 CSS<br>`outline-offset` |
| `--c-tabs-focus-width` | 公开 | `2px` | 本组件 CSS<br>`outline` |
| `--c-tabs-group-padding` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`padding` |
| `--c-tabs-header-padding` | 公开 | `var(--c-sys-space-5)` | 本组件 CSS<br>`padding-inline` |
| `--c-tabs-hover-background` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-tabs-icon-gap` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`gap` |
| `--c-tabs-indicator-radius` | 公开 | `1px` | 本组件 CSS<br>`border-radius` |
| `--c-tabs-indicator-size` | 公开 | `2px` | 本组件 CSS<br>`height`, `width` |
| `--c-tabs-muted-background` | 公开 | `var(--c-sys-color-surface-muted)` | 本组件 CSS<br>`background` |
| `--c-tabs-nav-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap` |
| `--c-tabs-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-tabs-size-lg-tab-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-tabs-size-lg-tab-height` | 公开 | `var(--c-sys-control-height-lg)` | 本组件 CSS<br>`min-height` |
| `--c-tabs-size-lg-tab-padding` | 公开 | `10px var(--c-sys-space-7)` | 本组件 CSS<br>`padding` |
| `--c-tabs-size-md-tab-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-tabs-size-md-tab-height` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`min-height` |
| `--c-tabs-size-md-tab-padding` | 公开 | `var(--c-sys-space-4) var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-tabs-size-sm-tab-font-size` | 公开 | `var(--c-sys-font-size-sm)` | 本组件 CSS<br>`font-size` |
| `--c-tabs-size-sm-tab-height` | 公开 | `var(--c-sys-control-height-sm)` | 本组件 CSS<br>`min-height` |
| `--c-tabs-size-sm-tab-padding` | 公开 | `var(--c-sys-space-3) var(--c-sys-space-5)` | 本组件 CSS<br>`padding` |
| `--c-tabs-size-xl-tab-font-size` | 公开 | `var(--c-sys-font-size-xl)` | 本组件 CSS<br>`font-size` |
| `--c-tabs-size-xl-tab-height` | 公开 | `var(--c-sys-control-height-xl)` | 本组件 CSS<br>`min-height` |
| `--c-tabs-size-xl-tab-padding` | 公开 | `var(--c-sys-space-5) var(--c-sys-space-8)` | 本组件 CSS<br>`padding` |
| `--c-tabs-size-xs-tab-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-tabs-size-xs-tab-height` | 公开 | `var(--c-sys-control-height-xs)` | 本组件 CSS<br>`min-height` |
| `--c-tabs-size-xs-tab-padding` | 公开 | `var(--c-sys-space-2) var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-tabs-tab-gap` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap` |
| `--c-tabs-title-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-tabs-title-text-color-active` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`background`, `color`, `outline` |
| `--c-tabs-title-text-color-disabled` | 公开 | `var(--c-sys-color-content-disabled)` | 本组件 CSS<br>`color` |
| `--c-tabs-touch-target` | 公开 | `var(--c-sys-control-touch-target)` | 本组件 CSS<br>`min-height`, `min-width` |

</div>

## tag

声明来源: `src/tag/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-tag-bg-not-checked-hover` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-tag-blue-bg` | 公开 | `rgb(var(--c-blue-1))`<br>`rgba(var(--c-blue-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-blue-bg-hover` | 公开 | `rgb(var(--c-blue-2))`<br>`rgba(var(--c-blue-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-blue-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-blue-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-blue-icon-color` | 公开 | `rgb(var(--c-blue-9))` | 本组件 CSS<br>`color` |
| `--c-tag-blue-text-color` | 公开 | `rgb(var(--c-blue-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-border-radius` | 公开 | `var(--c-sys-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-tag-border-type` | 公开 | `solid` | 本组件 CSS<br>`border` |
| `--c-tag-border-width` | 公开 | `1px` | 本组件 CSS<br>`border`, `line-height` |
| `--c-tag-brand-bg` | 公开 | `rgb(var(--c-brand-1))`<br>`rgba(var(--c-brand-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-brand-bg-hover` | 公开 | `rgb(var(--c-brand-2))`<br>`rgba(var(--c-brand-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-brand-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-brand-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-brand-icon-color` | 公开 | `rgb(var(--c-brand-9))` | 本组件 CSS<br>`color` |
| `--c-tag-brand-text-color` | 公开 | `rgb(var(--c-brand-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-close-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-tag-close-margin-left` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-tag-custom-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-tag-cyan-bg` | 公开 | `rgb(var(--c-cyan-1))`<br>`rgba(var(--c-cyan-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-cyan-bg-hover` | 公开 | `rgb(var(--c-cyan-2))`<br>`rgba(var(--c-cyan-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-cyan-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-cyan-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-cyan-icon-color` | 公开 | `rgb(var(--c-cyan-9))` | 本组件 CSS<br>`color` |
| `--c-tag-cyan-text-color` | 公开 | `rgb(var(--c-cyan-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-default-bg` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background-color` |
| `--c-tag-default-bg-hover` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-tag-default-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-default-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-default-icon-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-tag-default-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-tag-fade-duration` | 公开 | `var(--c-sys-motion-duration-fast)` | 本组件 CSS<br>`transition` |
| `--c-tag-gold-bg` | 公开 | `rgb(var(--c-gold-1))`<br>`rgba(var(--c-gold-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-gold-bg-hover` | 公开 | `rgb(var(--c-gold-2))`<br>`rgba(var(--c-gold-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-gold-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-gold-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-gold-icon-color` | 公开 | `rgb(var(--c-gold-9))` | 本组件 CSS<br>`color` |
| `--c-tag-gold-text-color` | 公开 | `rgb(var(--c-gold-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-gray-bg` | 公开 | `rgb(var(--c-gray-2))`<br>`rgba(var(--c-gray-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-gray-bg-hover` | 公开 | `rgb(var(--c-gray-3))`<br>`rgba(var(--c-gray-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-gray-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-gray-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-gray-icon-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-tag-gray-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-green-bg` | 公开 | `rgb(var(--c-green-1))`<br>`rgba(var(--c-green-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-green-bg-hover` | 公开 | `rgb(var(--c-green-2))`<br>`rgba(var(--c-green-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-green-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-green-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-green-icon-color` | 公开 | `rgb(var(--c-green-9))` | 本组件 CSS<br>`color` |
| `--c-tag-green-text-color` | 公开 | `rgb(var(--c-green-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-icon-margin-right` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-tag-lime-bg` | 公开 | `rgb(var(--c-lime-1))`<br>`rgba(var(--c-lime-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-lime-bg-hover` | 公开 | `rgb(var(--c-lime-2))`<br>`rgba(var(--c-lime-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-lime-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-lime-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-lime-icon-color` | 公开 | `rgb(var(--c-lime-9))` | 本组件 CSS<br>`color` |
| `--c-tag-lime-text-color` | 公开 | `rgb(var(--c-lime-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-magenta-bg` | 公开 | `rgb(var(--c-magenta-1))`<br>`rgba(var(--c-magenta-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-magenta-bg-hover` | 公开 | `rgb(var(--c-magenta-2))`<br>`rgba(var(--c-magenta-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-magenta-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-magenta-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-magenta-icon-color` | 公开 | `rgb(var(--c-magenta-9))` | 本组件 CSS<br>`color` |
| `--c-tag-magenta-text-color` | 公开 | `rgb(var(--c-magenta-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-orange-bg` | 公开 | `rgb(var(--c-orange-1))`<br>`rgba(var(--c-orange-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-orange-bg-hover` | 公开 | `rgb(var(--c-orange-2))`<br>`rgba(var(--c-orange-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-orange-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-orange-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-orange-icon-color` | 公开 | `rgb(var(--c-orange-9))` | 本组件 CSS<br>`color` |
| `--c-tag-orange-text-color` | 公开 | `rgb(var(--c-orange-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-orangered-bg` | 公开 | `rgb(var(--c-orangered-1))`<br>`rgba(var(--c-orangered-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-orangered-bg-hover` | 公开 | `rgb(var(--c-orangered-2))`<br>`rgba(var(--c-orangered-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-orangered-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-orangered-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-orangered-icon-color` | 公开 | `rgb(var(--c-orangered-9))` | 本组件 CSS<br>`color` |
| `--c-tag-orangered-text-color` | 公开 | `rgb(var(--c-orangered-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-padding-horizontal` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-tag-padding-vertical` | 公开 | `0` | 本组件 CSS<br>`line-height`, `padding` |
| `--c-tag-pinkpurple-bg` | 公开 | `rgb(var(--c-pinkpurple-1))`<br>`rgba(var(--c-pinkpurple-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-pinkpurple-bg-hover` | 公开 | `rgb(var(--c-pinkpurple-2))`<br>`rgba(var(--c-pinkpurple-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-pinkpurple-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-pinkpurple-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-pinkpurple-icon-color` | 公开 | `rgb(var(--c-pinkpurple-9))` | 本组件 CSS<br>`color` |
| `--c-tag-pinkpurple-text-color` | 公开 | `rgb(var(--c-pinkpurple-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-purple-bg` | 公开 | `rgb(var(--c-purple-1))`<br>`rgba(var(--c-purple-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-purple-bg-hover` | 公开 | `rgb(var(--c-purple-2))`<br>`rgba(var(--c-purple-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-purple-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-purple-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-purple-icon-color` | 公开 | `rgb(var(--c-purple-9))` | 本组件 CSS<br>`color` |
| `--c-tag-purple-text-color` | 公开 | `rgb(var(--c-purple-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-red-bg` | 公开 | `rgb(var(--c-red-1))`<br>`rgba(var(--c-red-6), 0.2)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-red-bg-hover` | 公开 | `rgb(var(--c-red-2))`<br>`rgba(var(--c-red-6), 0.35)` (`:root[cedar-theme="dark"]`) | 本组件 CSS<br>`background-color` |
| `--c-tag-red-border-color` | 公开 | `transparent` | 本组件 CSS<br>`border` |
| `--c-tag-red-border-color-hover` | 公开 | `transparent` | 本组件 CSS<br>`border-color` |
| `--c-tag-red-icon-color` | 公开 | `rgb(var(--c-red-9))` | 本组件 CSS<br>`color` |
| `--c-tag-red-text-color` | 公开 | `rgb(var(--c-red-9))` | 本组件 CSS<br>`border-color`, `color` |
| `--c-tag-round-radius` | 公开 | `100px` | 本组件 CSS<br>`border-radius` |
| `--c-tag-size-lg` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-tag-size-lg-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-tag-size-md` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-tag-size-md-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-tag-size-sm` | 公开 | `var(--c-size-5)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-tag-size-sm-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-tag-size-xl` | 公开 | `var(--c-size-8)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-tag-size-xl-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-tag-size-xs` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-tag-size-xs-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-tag-status-danger-bg-color` | 公开 | `rgb(var(--c-danger-1))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-danger-text-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-tag-status-info-bg-color` | 公开 | `rgb(var(--c-blue-1))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-info-text-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`color` |
| `--c-tag-status-primary-bg-color` | 公开 | `rgb(var(--c-primary-1))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-primary-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-tag-status-secondary-bg-color` | 公开 | `rgb(var(--c-gray-2))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-secondary-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-tag-status-success-bg-color` | 公开 | `rgb(var(--c-success-1))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-success-text-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-tag-status-tertiary-bg-color` | 公开 | `rgb(var(--c-gray-1))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-tertiary-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-tag-status-warning-bg-color` | 公开 | `rgb(var(--c-warning-1))` | 本组件 CSS<br>`background-color` |
| `--c-tag-status-warning-text-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-tag-text-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-tag-variant-outline-default-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-tag-variant-outline-default-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-tag-variant-outline-status-danger-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`border`, `color` |
| `--c-tag-variant-outline-status-info-color` | 公开 | `var(--c-sys-color-content-info)` | 本组件 CSS<br>`border`, `color` |
| `--c-tag-variant-outline-status-primary-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`border`, `color` |
| `--c-tag-variant-outline-status-secondary-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border`, `color` |
| `--c-tag-variant-outline-status-success-color` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`border`, `color` |
| `--c-tag-variant-outline-status-tertiary-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`border`, `color` |
| `--c-tag-variant-outline-status-warning-color` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`border`, `color` |

</div>

## textarea

声明来源: `src/textarea/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-textarea-counter-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-textarea-counter-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-textarea-counter-margin-top` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`margin-block-start` |
| `--c-textarea-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-textarea-height` | 公开 | `auto` | 本组件 CSS<br>`height` |
| `--c-textarea-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-textarea-min-height` | 公开 | `var(--c-sys-control-height-xl)` | 本组件 CSS<br>`min-height` |
| `--c-textarea-padding-horizontal` | 公开 | `var(--c-sys-space-3)` | 本组件 CSS<br>`padding` |
| `--c-textarea-padding-vertical` | 公开 | `var(--c-sys-space-1)` | 本组件 CSS<br>`padding` |
| `--c-textarea-placeholder-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |

</div>

## time/picker

声明来源: `src/time/picker/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-time-picker-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border`, `border-bottom`, `border-right`, `border-top` |
| `--c-time-picker-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-time-picker-box-shadow` | 公开 | `var(--c-shadow1-down)` | 本组件 CSS<br>`box-shadow` |
| `--c-time-picker-cell-bg-active` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-time-picker-cell-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-time-picker-cell-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-time-picker-cell-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-time-picker-cell-font-weight-active` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-time-picker-cell-height` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-time-picker-cell-padding-left` | 公开 | `var(--c-spacing-9)` | 本组件 CSS<br>`padding-left` |
| `--c-time-picker-cell-spacing` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`height`, `padding` |
| `--c-time-picker-cell-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-time-picker-cell-text-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-time-picker-column-height` | 公开 | `224px` | 本组件 CSS<br>`height` |
| `--c-time-picker-column-width` | 公开 | `var(--c-size-16)` | 本组件 CSS<br>`width` |
| `--c-time-picker-footer-extra-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-time-picker-footer-padding` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-time-picker-popover-body-reserve` | 公开 | `128px` | 本组件 CSS<br>`height` |
| `--c-time-picker-popover-column-max-height` | 公开 | `224px` | 本组件 CSS<br>`height` |
| `--c-time-picker-popover-gap` | 公开 | `32px` | 本组件 CSS<br>`max-width` |
| `--c-time-picker-range-gap` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`gap` |
| `--c-time-picker-range-next-day-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-time-picker-range-panel-title-gap` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`gap` |
| `--c-time-picker-range-panel-title-line-height` | 公开 | `22px` | 本组件 CSS<br>`line-height` |
| `--c-time-picker-range-panel-title-padding-horizontal` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-time-picker-range-panel-title-padding-vertical` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding` |
| `--c-time-picker-range-wrapper-padding` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |

</div>

## timeline

声明来源: `src/timeline/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-timeline-alternate-horizontal-min-height` | 公开 | `var(--c-size-50)` | 本组件 CSS<br>`min-height` |
| `--c-timeline-content-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-timeline-dot-bg` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color`, `border`, `color` |
| `--c-timeline-dot-bg-hollow` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-timeline-dot-border-radius` | 公开 | `var(--c-border-radius-circle)` | 本组件 CSS<br>`border-radius` |
| `--c-timeline-dot-border-width-hollow` | 公开 | `var(--c-border-width-2)` | 本组件 CSS<br>`border` |
| `--c-timeline-dot-size-width` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`bottom`, `height`, `left`, `margin-left`, `margin-top`, `padding-bottom`, `padding-left`, `padding-right`, `padding-top`, `top`, `width` |
| `--c-timeline-font-content-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`bottom`, `font-size`, `height`, `line-height`, `top` |
| `--c-timeline-font-label-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-timeline-horizontal-dot-content-height` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-timeline-horizontal-margin-content-spacing` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-bottom`, `margin-top`, `padding-bottom`, `padding-top` |
| `--c-timeline-horizontal-margin-line-left` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`left` |
| `--c-timeline-horizontal-margin-line-right` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`right` |
| `--c-timeline-item-min-height` | 公开 | `78px` | 本组件 CSS<br>`min-height` |
| `--c-timeline-label-relative-horizontal-margin` | 公开 | `var(--c-size-13)` | 本组件 CSS<br>`margin-bottom`, `margin-top` |
| `--c-timeline-label-relative-margin` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`margin-left`, `margin-right` |
| `--c-timeline-label-relative-max-width` | 公开 | `var(--c-size-25)` | 本组件 CSS<br>`max-width` |
| `--c-timeline-label-text-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-timeline-line-bg` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border-color` |
| `--c-timeline-size-line-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border-left-width`, `border-top-width`, `height`, `width` |
| `--c-timeline-vertical-margin-content-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-bottom` |
| `--c-timeline-vertical-margin-content-left` | 公开 | `var(--c-spacing-7)` | 本组件 CSS<br>`margin-left`, `margin-right`, `padding-left`, `padding-right` |
| `--c-timeline-vertical-margin-line-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`bottom` |
| `--c-timeline-vertical-margin-line-top` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`top` |

</div>

## tooltip

声明来源: `src/tooltip/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-tooltip-animation-duration` | 公开 | `var(--c-sys-motion-duration-standard)` | 本组件 CSS<br>`transition` |
| `--c-tooltip-background` | 公开 | `var(--c-sys-color-surface-tooltip)` | 本组件 CSS<br>`background-color` |
| `--c-tooltip-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-tooltip-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-tooltip-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-tooltip-max-width` | 公开 | `350px` | 本组件 CSS<br>`max-width` |
| `--c-tooltip-opacity` | 公开 | `1` | 本组件 CSS<br>`opacity` |
| `--c-tooltip-padding-horizontal` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding` |
| `--c-tooltip-padding-vertical` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-tooltip-size-xs-font-size` | 公开 | `var(--c-sys-font-size-xs)` | 本组件 CSS<br>`font-size` |
| `--c-tooltip-size-xs-padding-horizontal` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-tooltip-size-xs-padding-vertical` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`padding` |
| `--c-tooltip-status-danger-background` | 公开 | `var(--c-sys-color-status-danger)` | 本组件 CSS<br>`background-color` |
| `--c-tooltip-status-danger-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-tooltip-status-info-background` | 公开 | `var(--c-sys-color-status-info)` | 本组件 CSS<br>`background-color` |
| `--c-tooltip-status-info-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-tooltip-status-primary-background` | 公开 | `var(--c-sys-color-action-primary)` | 本组件 CSS<br>`background-color` |
| `--c-tooltip-status-primary-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-tooltip-status-success-background` | 公开 | `var(--c-sys-color-status-success)` | 本组件 CSS<br>`background-color` |
| `--c-tooltip-status-success-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-tooltip-status-warning-background` | 公开 | `var(--c-sys-color-status-warning)` | 本组件 CSS<br>`background-color` |
| `--c-tooltip-status-warning-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |
| `--c-tooltip-text-color` | 公开 | `var(--c-sys-color-content-on-dark)` | 本组件 CSS<br>`color` |

</div>

## transfer

声明来源: `src/transfer/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-transfer-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border` |
| `--c-transfer-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-transfer-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border`, `margin-left` |
| `--c-transfer-checkbox-padding-left` | 公开 | `var(--c-spacing-3)` | 本组件 CSS<br>`padding-left` |
| `--c-transfer-clear-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-transfer-draggable-list-padding-y` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-transfer-footer-height` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`height` |
| `--c-transfer-footer-padding-horizontal` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding`, `right` |
| `--c-transfer-group-title-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-transfer-group-title-height` | 公开 | `var(--c-size-9)` | 本组件 CSS<br>`height` |
| `--c-transfer-group-title-line-height` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`line-height` |
| `--c-transfer-group-title-padding-top` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-transfer-header-bg` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-transfer-header-count-margin-right` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-right` |
| `--c-transfer-header-flex-basis` | 公开 | `var(--c-size-11)` | 本组件 CSS<br>`flex` |
| `--c-transfer-header-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-transfer-header-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-transfer-header-selected-count-margin-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-transfer-header-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-transfer-header-title-margin-right` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-right` |
| `--c-transfer-header-unit-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-transfer-header-unit-text-color` | 公开 | `var(--c-color-text-3)` | 本组件 CSS<br>`color` |
| `--c-transfer-height` | 公开 | `400px` | 本组件 CSS<br>`height` |
| `--c-transfer-icon-bg` | 公开 | `var(--c-color-fill-3)` | 本组件 CSS<br>`background-color` |
| `--c-transfer-icon-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-transfer-icon-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-transfer-item-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-transfer-item-bg-disabled` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-transfer-item-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-transfer-item-drag-handle-margin-right` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-right` |
| `--c-transfer-item-draggable-bg-blink` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-transfer-item-draggable-bg-dragging` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-transfer-item-draggable-gap-bg` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-transfer-item-draggable-gap-height` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`border-radius`, `bottom`, `height`, `top` |
| `--c-transfer-item-draggable-text-color-dragging` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-transfer-item-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-transfer-item-height` | 公开 | `var(--c-size-9)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-transfer-item-padding-horizontal` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding` |
| `--c-transfer-item-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-transfer-item-text-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-transfer-item-text-color-hover` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-transfer-item-tip-margin-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`margin-left` |
| `--c-transfer-operation-buttons-gap` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`margin-top` |
| `--c-transfer-operation-menu-button-border-radius` | 公开 | `var(--c-border-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-transfer-operation-menu-button-padding-x` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-transfer-operation-menu-button-padding-y` | 公开 | `7px` | 本组件 CSS<br>`padding` |
| `--c-transfer-operation-menu-min-width` | 公开 | `140px` | 本组件 CSS<br>`min-width` |
| `--c-transfer-operation-menu-padding` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-transfer-operation-padding-horizontal` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`padding` |
| `--c-transfer-operation-words-button-padding-x` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-transfer-pagination-input-width` | 公开 | `var(--c-size-6)` | 本组件 CSS<br>`width` |
| `--c-transfer-pagination-separator-gap` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-transfer-search-padding-bottom` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |
| `--c-transfer-search-padding-left` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-transfer-search-padding-right` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`padding` |
| `--c-transfer-search-padding-top` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-transfer-title-height` | 公开 | `var(--c-size-10)` | 本组件 CSS<br>`height`, `line-height` |
| `--c-transfer-transition-timing-function-linear` | 公开 | `var(--c-transition-timing-function-linear)` | 本组件 CSS<br>`animation-timing-function` |

</div>

## tree

声明来源: `src/tree/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-tree-checkbox-margin-right` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`margin-right` |
| `--c-tree-custom-icon-margin-right` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`margin-right` |
| `--c-tree-drag-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-tree-drag-icon-spacing-right` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`right` |
| `--c-tree-drag-icon-spacing-text` | 公开 | `var(--c-spacing-22)` | 本组件 CSS<br>`margin-left` |
| `--c-tree-draggable-gap-bg` | 公开 | `rgb(var(--c-primary-6))` | 本组件 CSS<br>`background-color` |
| `--c-tree-draggable-gap-height` | 公开 | `2px` | 本组件 CSS<br>`border-radius`, `bottom`, `height`, `margin-top`, `top` |
| `--c-tree-loading-icon-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-tree-node-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-tree-showline-line-bg` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border-left` |
| `--c-tree-showline-line-spacing-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`bottom`, `top` |
| `--c-tree-showline-line-style` | 公开 | `solid` | 本组件 CSS<br>`border-left` |
| `--c-tree-showline-line-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`border-left`, `width` |
| `--c-tree-showline-plus-icon-bg` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-tree-showline-plus-icon-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-tree-showline-plus-icon-stroke` | 公开 | `2px` | 本组件 CSS<br>`height`, `margin-left`, `margin-top`, `width` |
| `--c-tree-showline-plus-icon-width` | 公开 | `6px` | 本组件 CSS<br>`height`, `margin-left`, `margin-top`, `width` |
| `--c-tree-showline-switcher-icon-size` | 公开 | `14px` | 本组件 CSS<br>`bottom`, `height`, `padding-left`, `right`, `top`, `width` |
| `--c-tree-size-expand-icon-bg-hover` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`height`, `padding-left`, `width` |
| `--c-tree-size-lg-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-tree-size-lg-icon-size` | 公开 | `var(--c-size-3)` | 本组件 CSS<br>`font-size`, `padding-left`, `width` |
| `--c-tree-size-lg-line-height` | 公开 | `var(--c-size-lg)` | 本组件 CSS<br>`bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-lg-title-padding-vertical` | 公开 | `10px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-tree-size-md-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-tree-size-md-icon-size` | 公开 | `var(--c-size-3)` | 本组件 CSS<br>`font-size`, `padding-left`, `width` |
| `--c-tree-size-md-line-height` | 公开 | `var(--c-size-md)` | 本组件 CSS<br>`bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-md-title-padding-vertical` | 公开 | `8px` | 本组件 CSS<br>`padding` |
| `--c-tree-size-sm-font-size` | 公开 | `var(--c-font-size-body-3)` | 本组件 CSS<br>`font-size` |
| `--c-tree-size-sm-icon-size` | 公开 | `var(--c-size-3)` | 本组件 CSS<br>`font-size`, `padding-left`, `width` |
| `--c-tree-size-sm-line-height` | 公开 | `var(--c-size-sm)` | 本组件 CSS<br>`bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-sm-title-padding-vertical` | 公开 | `6px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-tree-size-xl-font-size` | 公开 | `var(--c-sys-font-size-lg)` | 本组件 CSS<br>`font-size` |
| `--c-tree-size-xl-icon-size` | 公开 | `var(--c-size-4)` | 本组件 CSS<br>`font-size`, `padding-left`, `width` |
| `--c-tree-size-xl-line-height` | 公开 | `var(--c-size-xl)` | 本组件 CSS<br>`bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-xl-title-padding-vertical` | 公开 | `12px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-tree-size-xs-font-size` | 公开 | `var(--c-font-size-body-1)` | 本组件 CSS<br>`font-size` |
| `--c-tree-size-xs-icon-size` | 公开 | `var(--c-size-3)` | 本组件 CSS<br>`font-size`, `padding-left`, `width` |
| `--c-tree-size-xs-line-height` | 公开 | `var(--c-size-xs)` | 本组件 CSS<br>`bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-xs-title-padding-vertical` | 公开 | `2px` | 本组件 CSS<br>`padding-bottom`, `padding-top` |
| `--c-tree-switcher-icon-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`background-color`, `color` |
| `--c-tree-switcher-icon-margin-right` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`margin-right` |
| `--c-tree-title-bg-dragging` | 公开 | `var(--c-color-fill-1)` | 本组件 CSS<br>`background-color` |
| `--c-tree-title-bg-highlight` | 公开 | `var(--c-color-primary-light-1)` | 本组件 CSS<br>`background-color` |
| `--c-tree-title-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-tree-title-padding-horizontal` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-left`, `padding-left`, `padding-right` |
| `--c-tree-title-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-tree-title-text-color-active` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-tree-title-text-color-active-disabled` | 公开 | `var(--c-color-primary-light-3)` | 本组件 CSS<br>`color` |
| `--c-tree-title-text-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-tree-title-text-color-dragging` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-tree-title-text-color-highlight` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-tree-title-text-color-hover` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |

</div>

## tree-select

声明来源: `src/tree-select/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-tree-select-highlight-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-tree-select-option-active-background` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background` |
| `--c-tree-select-option-radius` | 公开 | `var(--c-sys-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-tree-select-popup-padding-left` | 公开 | `var(--c-spacing-5)` | 本组件 CSS<br>`padding-left` |
| `--c-tree-select-popup-padding-right` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding-right` |
| `--c-tree-select-popup-padding-vertical` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`padding` |

</div>

## trigger

声明来源: `src/trigger/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-trigger-arrow-background` | 公开 | `var(--c-sys-color-surface-overlay)` | 本组件 CSS<br>`background-color` |
| `--c-trigger-arrow-radius` | 公开 | `var(--c-sys-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-trigger-arrow-size` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`height`, `width` |
| `--c-trigger-transition-duration` | 公开 | `var(--c-sys-motion-duration-fast)` | 本组件 CSS<br>`transition` |
| `--c-trigger-transition-easing` | 公开 | `var(--c-sys-motion-easing-standard)` | 本组件 CSS<br>`transition` |

</div>

## typography

声明来源: `src/typography/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-typography-blockquote-bg` | 公开 | `var(--c-color-bg-2)` | 本组件 CSS<br>`background-color` |
| `--c-typography-blockquote-border-left-color` | 公开 | `var(--c-color-neutral-6)` | 本组件 CSS<br>`border-left` |
| `--c-typography-blockquote-border-width` | 公开 | `var(--c-border-width-2)` | 本组件 CSS<br>`border-left` |
| `--c-typography-blockquote-padding-left` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding-left` |
| `--c-typography-code-bg` | 公开 | `var(--c-color-neutral-2)` | 本组件 CSS<br>`background-color` |
| `--c-typography-code-border-color` | 公开 | `var(--c-color-neutral-3)` | 本组件 CSS<br>`border` |
| `--c-typography-code-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-typography-code-text-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-typography-edit-border-width` | 公开 | `var(--c-border-width-1)` | 本组件 CSS<br>`left`, `margin-bottom`, `margin-right`, `margin-top` |
| `--c-typography-edit-padding-x` | 公开 | `var(--c-spacing-6)` | 本组件 CSS<br>`left`, `margin-right` |
| `--c-typography-edit-padding-y` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin-bottom`, `margin-top` |
| `--c-typography-expand-margin-x` | 公开 | `var(--c-spacing-2)` | 本组件 CSS<br>`margin` |
| `--c-typography-expand-text-color` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-typography-expand-text-color-hover` | 公开 | `rgb(var(--c-primary-5))` | 本组件 CSS<br>`color` |
| `--c-typography-font-size-h1` | 公开 | `var(--c-font-size-display-1)` | 本组件 CSS<br>`font-size` |
| `--c-typography-font-size-h2` | 公开 | `var(--c-size-8)` | 本组件 CSS<br>`font-size` |
| `--c-typography-font-size-h3` | 公开 | `var(--c-size-7)` | 本组件 CSS<br>`font-size` |
| `--c-typography-font-size-h4` | 公开 | `var(--c-font-size-title-3)` | 本组件 CSS<br>`font-size` |
| `--c-typography-font-size-h5` | 公开 | `var(--c-font-size-title-2)` | 本组件 CSS<br>`font-size` |
| `--c-typography-font-size-h6` | 公开 | `var(--c-font-size-title-1)` | 本组件 CSS<br>`font-size` |
| `--c-typography-heading-font-weight` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-typography-heading-margin-bottom` | 公开 | `0` | 本组件 CSS<br>`margin-bottom` |
| `--c-typography-heading-margin-top` | 公开 | `0` | 本组件 CSS<br>`margin-top` |
| `--c-typography-icon-copy-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-typography-icon-copy-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-typography-icon-copy-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-typography-icon-copy-color-copied` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-typography-icon-copy-color-hover` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-typography-icon-edit-bg` | 公开 | `transparent` | 本组件 CSS<br>`background-color` |
| `--c-typography-icon-edit-bg-hover` | 公开 | `var(--c-color-fill-2)` | 本组件 CSS<br>`background-color` |
| `--c-typography-icon-edit-color` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-typography-icon-edit-color-hover` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-typography-list-item-margin-left` | 公开 | `var(--c-spacing-8)` | 本组件 CSS<br>`margin-left` |
| `--c-typography-operation-border-radius` | 公开 | `var(--c-border-radius-sm)` | 本组件 CSS<br>`border-radius` |
| `--c-typography-operation-margin-left` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin-left` |
| `--c-typography-operation-padding` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |
| `--c-typography-paragraph-line-height` | 公开 | `var(--c-line-height)` | 本组件 CSS<br>`line-height` |
| `--c-typography-paragraph-line-height-close` | 公开 | `1.3` | 本组件 CSS<br>`line-height` |
| `--c-typography-text-bg-mark` | 公开 | `rgb(var(--c-yellow-4))` | 本组件 CSS<br>`background-color` |
| `--c-typography-text-color` | 公开 | `var(--c-color-text-1)` | 本组件 CSS<br>`color` |
| `--c-typography-text-color-disabled` | 公开 | `var(--c-color-text-4)` | 本组件 CSS<br>`color` |
| `--c-typography-text-color-error` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-typography-text-color-primary` | 公开 | `var(--c-sys-color-content-brand)` | 本组件 CSS<br>`color` |
| `--c-typography-text-color-secondary` | 公开 | `var(--c-color-text-2)` | 本组件 CSS<br>`color` |
| `--c-typography-text-color-success` | 公开 | `var(--c-sys-color-content-success)` | 本组件 CSS<br>`color` |
| `--c-typography-text-color-warning` | 公开 | `var(--c-sys-color-content-warning)` | 本组件 CSS<br>`color` |
| `--c-typography-text-font-weight-bold` | 公开 | `var(--c-font-weight-500)` | 本组件 CSS<br>`font-weight` |
| `--c-typography-text-margin-code-horizontal` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`margin` |
| `--c-typography-text-padding-code-horizontal` | 公开 | `var(--c-spacing-4)` | 本组件 CSS<br>`padding` |
| `--c-typography-text-padding-code-vertical` | 公开 | `var(--c-spacing-1)` | 本组件 CSS<br>`padding` |

</div>

## upload

声明来源: `src/upload/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-upload-action-size` | 公开 | `var(--c-sys-control-touch-target)` | 本组件 CSS<br>`height`, `width` |
| `--c-upload-active-color` | 公开 | `var(--c-sys-color-action-primary)` | 本组件 CSS<br>`accent-color`, `border-color`, `outline` |
| `--c-upload-background` | 公开 | `var(--c-sys-color-surface-default)` | 本组件 CSS<br>`background` |
| `--c-upload-border-color` | 公开 | `var(--c-sys-color-border-default)` | 本组件 CSS<br>`border` |
| `--c-upload-border-radius` | 公开 | `var(--c-sys-radius-md)` | 本组件 CSS<br>`border-radius` |
| `--c-upload-card-size` | 公开 | `calc(var(--c-sys-control-height-md) * 2)` | 本组件 CSS<br>`height`, `min-height`, `width` |
| `--c-upload-disabled-opacity` | 公开 | `0.56` | 本组件 CSS<br>`opacity` |
| `--c-upload-error-color` | 公开 | `var(--c-sys-color-content-danger)` | 本组件 CSS<br>`color` |
| `--c-upload-font-size` | 公开 | `var(--c-sys-font-size-md)` | 本组件 CSS<br>`font-size` |
| `--c-upload-gap` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`gap` |
| `--c-upload-hover-background` | 公开 | `var(--c-sys-color-state-hover)` | 本组件 CSS<br>`background` |
| `--c-upload-item-min-height` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`min-height` |
| `--c-upload-item-padding` | 公开 | `var(--c-sys-space-4)` | 本组件 CSS<br>`padding` |
| `--c-upload-progress-height` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`height` |
| `--c-upload-secondary-text-color` | 公开 | `var(--c-sys-color-content-secondary)` | 本组件 CSS<br>`color` |
| `--c-upload-text-color` | 公开 | `var(--c-sys-color-content-primary)` | 本组件 CSS<br>`color` |
| `--c-upload-thumb-size` | 公开 | `var(--c-sys-control-height-lg)` | 本组件 CSS<br>`height`, `width` |
| `--c-upload-trigger-draggable-min-height` | 公开 | `calc(var(--c-sys-control-height-md) * 2)` | 本组件 CSS<br>`min-height` |
| `--c-upload-trigger-min-height` | 公开 | `var(--c-sys-control-height-md)` | 本组件 CSS<br>`min-height` |
| `--c-upload-trigger-padding-horizontal` | 公开 | `var(--c-sys-space-6)` | 本组件 CSS<br>`padding-inline` |

</div>

## verification-code

声明来源: `src/verification-code/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-verification-code-cell-height` | 公开 | `initial` | 本组件 CSS<br>`height` |
| `--c-verification-code-cell-max-width` | 公开 | `initial` | 本组件 CSS<br>`flex` |
| `--c-verification-code-gutter` | 公开 | `var(--c-sys-space-2)` | 本组件 CSS<br>`gap` |
| `--c-verification-code-input-font-size` | 公开 | `initial` | 本组件 CSS<br>`font-size` |

</div>

## watermark

声明来源: `src/watermark/style/token.less`

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 层级 | 声明值／条件 | 消费路径／CSS 属性 |
| --- | --- | --- | --- |
| `--c-watermark-content-color` | 公开 | `rgba(0, 0, 0, 0.15)` | 运行时引用（不代表可见性证明）<br>`watermark/watermark.tsx` |

</div>
