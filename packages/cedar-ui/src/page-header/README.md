---
permalink: /components/page-header/
---

# PageHeader 页头

返回按钮只派发 `back` 事件，不自动调用路由或浏览器历史。示例通过 Message 显示通知；真实返回目的地由调用方处理。原生按钮支持点击、Enter 和空格。

展示当前页面的标题、上下文和相关操作。API 参照 Naive UI；组件不负责固定定位、背景等业务布局与皮肤能力，可通过 `class` / `style` 实现。

## 案例

### 基础用法

使用 Card 承载页头、Space 排列操作。桌面端将标题、副标题和右侧“关注”“创建任务”横向展示，点击操作查看消息反馈。

<demo src="./__demos__/basic.vue"></demo>

### 页头上方内容

使用 Card 承载页头，通过 `header` 插槽在标题上方展示面包屑，区分页面路径与当前页面信息。

<demo src="./__demos__/breadcrumb.vue"></demo>

### 完整结构

使用 Card 承载页头，通过 Space、Row / Col、Descriptions、Grid、Statistic 和 Divider 组合项目资料、统计和底部信息，无需自定义样式。桌面端标题与操作横向排列，资料和统计随栅格断点换行。

<demo src="./__demos__/content.vue"></demo>

### 透明底色

页头默认透明。使用 Card 的 `tonal` 变体提供底色，展示页头自然融入外层表面，无需自定义背景样式。

<demo src="./__demos__/transparent.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### PageHeader Props

| 属性     | 说明             | 类型      | 默认值  |
| -------- | ---------------- | --------- | ------- |
| show-back | 是否显示返回按钮 | `boolean` | `false` |
| title    | 页头的主标题     | `string`  | `-`     |
| subtitle | 页头的次标题     | `string`  | `-`     |
| extra    | 右侧附加内容     | `string`  | `-`     |

### PageHeader Events

| 事件名 | 说明               | 参数           |
| ------ | ------------------ | -------------- |
| back   | 点击返回按钮时触发 | event: `Event` |

### PageHeader Slots

| 插槽名   | 说明           | 参数 |
| -------- | -------------- | ---- |
| header   | 页头上方内容   | -    |
| back     | 自定义返回图标 | -    |
| avatar   | 头像           | -    |
| title    | 主标题         | -    |
| subtitle | 次标题         | -    |
| extra    | 右侧额外内容   | -    |
| default  | 页头正文内容   | -    |
| footer   | 页头底部内容   | -    |

## 类型定义

```ts
import type { PageHeaderProps } from '@cedar-design/ui'
```

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

返回按钮统一使用原生 button，支持键盘触发并派发 back(MouseEvent)。Cedar 内部类名由 c-page-header-xxx 调整为 c-page-header__xxx；图标资源仍由本库提供。

### 返回交互变量

`--c-page-header-back-hover-size`（30px）控制反馈圆尺寸，不推动标题布局；`--c-page-header-back-hover-bg`（`var(--c-sys-color-state-hover)`）控制反馈背景。hover 仅应用于支持悬停的精细指针，所有输入模式均保留键盘 focus-visible 反馈。
