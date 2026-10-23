---
permalink: /components/notification/
---

# Notification 通知提醒框

全局展示通知提醒，将信息及时有效的传达给用户。

## 案例

### 基本用法

基本用法。

<demo src="./__demos__/basic.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

clear 同步释放条目与 ID，随后即使在同一个更新周期重加相同 ID，也会使用独立内部实例和新的完整展示计时；活动 ID 的普通更新仍原位更新。内部实例键不作为公共变量／API 暴露，clear 仍不额外触发业务 onClose。组件样式入口在减少动效下关闭 opacity／左右进入、appear、离开过渡及起始位移，不依赖全局极短时长兜底；静态布局／配色、业务展示期限不变。真实 OS 与浏览器矩阵另行验收。

duration（默认 3000ms，0 持续显示）是业务展示计时，不是 CSS 动效时长。close 每个挂载实例只通知一次，立即取消计时器；离场期间的更新／重复关闭不再安排自动关闭。reset-on-update 只重启活动且未关闭实例的计时。KeepAlive 停用取消计时，重新激活从完整配置时长计时；卸载和已失效回调不会补发 close。列表仍通过实际 TransitionGroup 的离场完成卸载，不按 duration 等待 CSS 动画。现有六项 transition-* Token 控制 opacity／左右进入／离开效果，不改变自动关闭期限；正常消费者覆写检查不等于真实 OS 减少动效验收。

### `Notification` 全局方法

`Notification` 提供的全局方法，可以通过以下三种方法使用：

1. 通过 `this.$notification` 调用
2. 在 Composition API 中，通过 `getCurrentInstance().appContext.config.globalProperties.$notification` 调用
3. 导入 `Notification`，通过 `Notification` 本身调用

当通过 `import` 方式使用时，组件没有办法获取当前的 Vue Context，如 i18n 或 route 等注入在 AppContext
上的内容无法在内部使用，需要在调用时手动传入 AppContext，或者为组件全局指定 AppContext

```ts
import { createApp } from 'vue'
import { Notification } from '@cedarjs/ui'

const app = createApp(App)
Notification._context = app._context
```

### NotificationMethod

| 参数名  | 描述                   | 类型                                                                                             | 默认值 |
| ------- | ---------------------- | ------------------------------------------------------------------------------------------------ | :----: |
| info    | 显示信息提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| success | 显示成功提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| warning | 显示警告提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| error   | 显示错误提醒框         | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` |  `-`   |
| remove  | 清除对应 `id` 的提醒框 | `(id: string) => void`                                                                           |  `-`   |
| clear   | 清除全部提醒框         | `(position?: NotificationPosition) => void`                                                      |  `-`   |

### NotificationConfig

| 参数名           | 描述                        | 类型                                                 | 默认值  | 版本   |
| ---------------- | --------------------------- | ---------------------------------------------------- | :-----: | :----- |
| content          | 内容                        | `RenderContent`                                      |   `-`   |        |
| title            | 标题                        | `RenderContent`                                      |   `-`   |        |
| icon             | 图标                        | `RenderFunction`                                     |   `-`   |        |
| id               | 唯一id                      | `string`                                             |   `-`   |        |
| style            | 样式                        | `CSSProperties`                                      |   `-`   |        |
| class            | 样式类名                    | `ClassName`                                          |   `-`   |        |
| position         | 位置                        | `'topLeft'\|'topRight'\|'bottomLeft'\|'bottomRight'` |   `-`   |        |
| showIcon         | 是否显示图标                | `boolean`                                            | `true`  |        |
| closable         | 是否可关闭                  | `boolean`                                            | `false` |        |
| duration         | 显示的持续时间，单位为 `ms` | `number`                                             | `3000`  |        |
| footer           | 底部内容                    | `RenderFunction`                                     |   `-`   | 2.25.0 |
| closeIcon        | 关闭按钮图标                | `RenderFunction`                                     |   `-`   |        |
| closeIconElement | 关闭按钮元素                | `RenderFunction`                                     |   `-`   |        |
| onClose          | 关闭时的回调函数            | `(id: number \| string) => void`                     |   `-`   |        |

### NotificationReturn

| 参数名 | 描述               | 类型         | 默认值 |
| ------ | ------------------ | ------------ | :----: |
| close  | 关闭当前通知提醒框 | `() => void` |  `-`   |

### 类型定义

组件导出以下类型定义

```ts
import type { NotificationInstance, NotificationConfig, NotificationReturn } from '@cedarjs/ui'
```

## 公开 CSS 变量

面板使用 surface-overlay，正文／标题使用 content-primary，关闭按钮使用 content-secondary，边框使用 border-default。状态图标使用可读 content 状态色；info 不再引用品牌填充色，loading 使用 content-brand。颜色变量按状态分组；自定义背景须同时检查内容、图标与关闭按钮。纯文本 action／footer 继承面板正文色；自带样式的插槽内容由业务负责。

wrapper-* 控制列表位置／留白；padding-*、margin-* 控制面板布局；icon-*、title-*、content-* 控制各部分排版；close-* 控制关闭按钮；border-*、box-shadow 控制边框／阴影；transition-* 控制动效；z-index 控制层级。本阶段保留几何与动效默认值。下表列出实际声明，未声明所有历史几何变量均已验证消费。

| 变量 | 默认值 |
| --- | --- |
| `--c-notification-wrapper-margin-top` | `var(--c-spacing-8)` |
| `--c-notification-wrapper-margin-bottom` | `var(--c-spacing-8)` |
| `--c-notification-wrapper-margin-left` | `var(--c-spacing-8)` |
| `--c-notification-wrapper-margin-right` | `var(--c-spacing-8)` |
| `--c-notification-z-index` | `var(--c-z-index-notification)` |
| `--c-notification-border-radius` | `var(--c-border-radius-md)` |
| `--c-notification-margin-bottom` | `var(--c-spacing-8)` |
| `--c-notification-width` | `300px` |
| `--c-notification-padding-top` | `var(--c-spacing-8)` |
| `--c-notification-padding-bottom` | `var(--c-spacing-8)` |
| `--c-notification-padding-left` | `var(--c-spacing-8)` |
| `--c-notification-padding-right` | `var(--c-spacing-8)` |
| `--c-notification-icon-font-size` | `24px` |
| `--c-notification-title-font-size` | `var(--c-font-size-title-1)` |
| `--c-notification-title-font-weight` | `var(--c-font-weight-500)` |
| `--c-notification-content-font-size` | `var(--c-font-size-body-3)` |
| `--c-notification-icon-margin-right` | `var(--c-spacing-7)` |
| `--c-notification-title-margin-bottom` | `var(--c-spacing-2)` |
| `--c-notification-footer-margin-top` | `var(--c-spacing-7)` |
| `--c-notification-box-shadow` | `0 4px 12px rgba(0, 0, 0, 0.15)` |
| `--c-notification-border-width` | `1px` |
| `--c-notification-border-style` | `solid` |
| `--c-notification-close-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-notification-close-icon-font-size` | `12px` |
| `--c-notification-close-icon-top` | `var(--c-spacing-6)` |
| `--c-notification-close-icon-right` | `var(--c-spacing-6)` |
| `--c-notification-close-icon-hover-size` | `20px` |
| `--c-notification-normal-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-normal-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-normal-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-normal-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-normal-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-info-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-notification-info-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-info-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-info-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-success-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-notification-success-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-success-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-success-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-warning-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-notification-warning-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-warning-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-warning-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-error-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-error-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-notification-error-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-error-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-error-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-transition-duration` | `var(--c-transition-duration-2)` |
| `--c-notification-transition-duration-enter` | `var(--c-transition-duration-4)` |
| `--c-notification-transition-duration-leave` | `var(--c-transition-duration-3)` |
| `--c-notification-transition-timing-function` | `var(--c-transition-timing-function-linear)` |
| `--c-notification-transition-timing-function-enter` | `var(--c-transition-timing-function-overshoot)` |
| `--c-notification-transition-timing-function-leave` | `var(--c-transition-timing-function-standard)` |

Teleport 后主题变量按实际 DOM 祖先继承；放在内容内部的变量不会向上传到服务创建的容器。
