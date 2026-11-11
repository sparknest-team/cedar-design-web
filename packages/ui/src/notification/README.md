---
permalink: /components/notification/
---

# Notification 通知提醒框

全局展示通知提醒，将信息及时有效的传达给用户。

## 基础示例

### 基本用法

基本用法。

<demo src="./__demos__/basic.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。弹出角落显式命名的 left/right 保持物理侧；图标、内容、关闭与底部动作采用阅读方向。函数式调用应使用明确方向或文档方向，不借用其他应用实例的上下文。

## 使用说明

### 配置说明

Teleport 后主题变量按实际 DOM 祖先继承；放在内容内部的变量不会向上传到服务创建的容器。

close/closed 通知回调抛错不会保留已关闭项目或空管理器宿主，资源清理独立于通知回调执行。

## API

clear 同步移除条目并释放 ID；随后重新添加相同 ID 会创建新条目，并从完整展示时长开始计时。活动条目的普通更新保持原位，clear 不额外触发业务 onClose。启用减少动态效果时，关闭内置进出场过渡和位移，保留静态布局、颜色及业务展示时长。

duration（默认 3000ms，0 持续显示）是业务展示计时，不是 CSS 动效时长。close 每个挂载实例只通知一次，立即取消计时器；离场期间的更新／重复关闭不再安排自动关闭。reset-on-update 只重启活动且未关闭实例的计时。KeepAlive 停用取消计时，重新激活从完整配置时长计时；卸载和已失效回调不会补发 close。列表仍通过实际 TransitionGroup 的离场完成卸载，不按 duration 等待 CSS 动画。现有六项 transition-* Token 控制 opacity／左右进入／离开效果，不改变自动关闭期限。

### Notification Methods

`Notification` 提供的全局方法，可以通过以下三种方法使用：

1. 通过 `this.$notification` 调用
2. 在 Composition API 中，通过 `getCurrentInstance().appContext.config.globalProperties.$notification` 调用
3. 导入 `Notification`，通过 `Notification` 本身调用

以上入口都支持 `remove` 和 `clear`。服务端没有可用的 DOM 时，通知方法返回可安全调用 `close()` 的空句柄，不创建通知，也不会在客户端自动补发。

当通过 `import` 方式使用时，组件没有办法获取当前的 Vue Context，如 i18n 或 route 等注入在 AppContext
上的内容无法在内部使用，需要在调用时手动传入 AppContext，或者为组件全局指定 AppContext

```ts
import { createApp } from 'vue'
import { Notification } from '@cedar-design/ui-vue'

const app = createApp(App)
Notification._context = app._context
```

## Types

### NotificationMethod

| 参数名  | 描述                   | 类型                                                                                             | 默认值 |
| ------- | ---------------------- | ------------------------------------------------------------------------------------------------ | :----: |
| info    | 显示信息提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| success | 显示成功提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| warning | 显示警告提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| error   | 显示错误提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| remove  | 清除对应 `id` 的提醒框 | `(id: string) => void`                                                                           |  `-`   |
| clear   | 清除全部提醒框         | `(position?: NotificationPosition) => void`<br>`NotificationPosition: 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` |  `-`   |

### NotificationConfig

| 参数名           | 描述                        | 类型                                                 | 默认值  | 版本   |
| ---------------- | --------------------------- | ---------------------------------------------------- | :-----: | :----- |
| content          | 内容                        | `RenderContent`                                      |   `-`   |        |
| title            | 标题                        | `RenderContent`                                      |   `-`   |        |
| icon             | 图标                        | `RenderFunction`                                     |   `-`   |        |
| id               | 唯一id                      | `string`                                             |   `-`   |        |
| style            | 样式                        | `CSSProperties`                                      |   `-`   |        |
| class            | 样式类名                    | `ClassName`                                          |   `-`   |        |
| position         | 通知自身在可视区域中的物理角落，默认 top-right；四角使用上下在前的 kebab-case 拼写 | `'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'` | `top-right` |        |
| showIcon         | 是否显示图标                | `boolean`                                            | `true`  |        |
| closable         | 是否可关闭                  | `boolean`                                            | `false` |        |
| duration         | 显示的持续时间，单位为 `ms` | `number`                                             | `3000`  |        |
| footer           | 底部内容                    | `RenderFunction`                                     |   `-`   | 2.25.0 |
| closeIcon        | 关闭按钮图标                | `RenderFunction`                                     |   `-`   |        |
| closeIconElement | 关闭按钮元素                | `RenderFunction`                                     |   `-`   |        |
| closeButtonAriaLabel | 关闭按钮的无障碍名称 | `string` | `Close notification` | |
| onClose          | 关闭时的回调函数            | `(id: number \| string) => void`                     |   `-`   |        |

`NotificationConfig` 是服务调用配置；`NotificationProps` 对应底层视图的 `type`、`showIcon`、`closable`、`duration`、`resetOnUpdate` 和 `closeButtonAriaLabel`，不等同于服务配置。同一 ID 的通知更新时，仅显式传入 `duration` 会重启计时；未传时继续当前计时。

### NotificationReturn

| 参数名 | 描述               | 类型         | 默认值 |
| ------ | ------------------ | ------------ | :----: |
| close  | 关闭当前通知提醒框 | `() => void` |  `-`   |

组件导出以下类型定义

```ts
import type { NotificationInstance, NotificationConfig, NotificationReturn } from '@cedar-design/ui-vue'
```

## CSS Variables

面板使用 surface-overlay，正文／标题使用 content-primary，关闭按钮使用 content-secondary，边框使用 border-default。状态图标使用可读 content 状态色；info 使用信息状态色，loading 使用 content-brand。颜色变量按状态分组；自定义背景须同时检查内容、图标与关闭按钮。纯文本 action／footer 继承面板正文色；自带样式的插槽内容由业务负责。

wrapper-* 控制列表位置／留白；padding-*、margin-* 控制面板布局；icon-*、title-*、content-* 控制各部分排版；close-* 控制关闭按钮；border-*、box-shadow 控制边框／阴影；transition-* 控制动效；z-index 控制层级。本阶段保留几何与动效默认值。下表列出实际声明，未声明所有历史几何变量均已验证消费。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-notification-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-notification-border-style` | `solid` | `border` |
| `--c-notification-border-width` | `1px` | `border` |
| `--c-notification-box-shadow` | `0 4px 12px rgba(0, 0, 0, 0.15)` | `box-shadow` |
| `--c-notification-close-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-notification-close-icon-font-size` | `12px` | `font-size` |
| `--c-notification-close-icon-hover-size` | `20px` | `height`, `width` |
| `--c-notification-close-icon-right` | `var(--c-spacing-6)` | `inset-inline-end` |
| `--c-notification-close-icon-top` | `var(--c-spacing-6)` | `top` |
| `--c-notification-content-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-notification-error-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-error-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-error-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-error-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-notification-error-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-footer-margin-top` | `var(--c-spacing-7)` | `margin-top` |
| `--c-notification-icon-font-size` | `24px` | `font-size` |
| `--c-notification-icon-margin-right` | `var(--c-spacing-7)` | `padding-inline-end` |
| `--c-notification-info-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-info-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-info-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-info-icon-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-notification-info-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-notification-normal-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-normal-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-notification-normal-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-normal-icon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-normal-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-padding-bottom` | `var(--c-spacing-8)` | `padding` |
| `--c-notification-padding-left` | `var(--c-spacing-8)` | `padding`, `width` |
| `--c-notification-padding-right` | `var(--c-spacing-8)` | `padding`, `width` |
| `--c-notification-padding-top` | `var(--c-spacing-8)` | `padding` |
| `--c-notification-success-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-success-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-success-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-success-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-notification-success-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-notification-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-notification-title-margin-bottom` | `var(--c-spacing-2)` | `margin-top` |
| `--c-notification-transition-duration` | `var(--c-transition-duration-2)` | `transition` |
| `--c-notification-transition-duration-enter` | `var(--c-transition-duration-4)` | `transition` |
| `--c-notification-transition-duration-leave` | `var(--c-transition-duration-3)` | `transition` |
| `--c-notification-transition-timing-function` | `var(--c-transition-timing-function-linear)` | `transition` |
| `--c-notification-transition-timing-function-enter` | `var(--c-transition-timing-function-overshoot)` | `transition` |
| `--c-notification-transition-timing-function-leave` | `var(--c-transition-timing-function-standard)` | `transition` |
| `--c-notification-warning-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-warning-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-warning-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-warning-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-notification-warning-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-width` | `300px` | `width` |
| `--c-notification-wrapper-margin-bottom` | `var(--c-spacing-8)` | `bottom` |
| `--c-notification-wrapper-margin-left` | `var(--c-spacing-8)` | `left` |
| `--c-notification-wrapper-margin-right` | `var(--c-spacing-8)` | `right` |
| `--c-notification-wrapper-margin-top` | `var(--c-spacing-8)` | `top` |
| `--c-notification-z-index` | `var(--c-z-index-notification)` | `z-index` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-notification-border-radius: var(--c-border-radius-md);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
