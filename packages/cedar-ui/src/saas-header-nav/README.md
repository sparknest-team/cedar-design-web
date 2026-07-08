---
permalink: /components/saas-header-nav/
---

# SaasHeaderNav

SaaS平台通用头部导航

## 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### SaasHeaderNav Props

| 属性                 | 说明                                                                                      | 类型                    | 默认值                                                      |
| -------------------- | ----------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------- |
| fixed                | 是否开启悬浮定位                                                                          | boolean                 | `true`                                                      |
| showTenantInfo       | 是否显示租户/企业信息（包括logo/name）                                                    | boolean                 | `true`                                                      |
| showWorkbench        | （v1.2.27）是否显示我的应用列表/工作台入口                                                | boolean                 | `false`                                                     |
| showAccountBasicInfo | （v1.2.27）右侧用户模块下拉框内是否显示“个人中心”入口口                                   | boolean                 | `false`                                                     |
| showTenantSwitch     | 是否显示切换租户/企业入口（在右侧用户信息下拉框内，当可切换企业/租户数量大于 1 时才有效） | boolean                 | `true`                                                      |
| showLogout           | 右侧用户模块下拉框是否显示“退出登录”                                                      | boolean \| 'auto'       | 默认 'auto'，自动适配：对外SaaS显示，非对外SaaS隐藏         |
| showToMgmt           | 右侧用户模块下拉框是否显示“进入管理平台”（该内容是否显示同时也收到权限影响）              | boolean \| 'auto'       | 默认 'auto'，自动适配：对外SaaS平台且有权限时显示，否则隐藏 |
| userActions          | 自定义右侧用户模块的下拉操作内容                                                          |                         |                                                             |
| fetch                | 内部发请求用（目前主要推出登录需要）                                                      | Function                | -                                                           |
| mfeSdk               | 内部各种逻辑判定及查询配置信息需要                                                        | { Auth, Env, SaaSConf } | -                                                           |

### SaasHeaderNav Events

| 事件名     | 说明           | 参数                                          |
| ---------- | -------------- | --------------------------------------------- |
| userSelect | 点击触发的事件 | `(action: string, event: MouseEvent) => void` |

### SaasHeaderNav Slots

| 插槽名           | 说明                            |
| ---------------- | ------------------------------- |
| left-prefix      | 导航左侧租户/企业信息的前置内容 |
| user-info        | 用户信息区域                    |
| user-info-prefix | 用户信息区域左侧的前置内容      |

## 类型定义

组件导出以下类型定义

```ts
import type { SaasHeaderNavProps } from '@cedar/ui'
```
