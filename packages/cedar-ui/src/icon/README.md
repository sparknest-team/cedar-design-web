---
permalink: /components/icon/
---

# Icon

图标以独立 SVG Vue 组件提供。推荐通过 Resolver 自动按需导入；需要统一尺寸、颜色或旋转时，使用 Icon 容器包裹图标。

## 案例

### 基础用法

<demo src="./__demos__/basic-usage.vue"></demo>

### 图标尺寸

<demo src="./__demos__/size.vue"></demo>

### 图标颜色

<demo src="./__demos__/color.vue"></demo>

### 旋转与持续旋转

`rotate` 设置静态角度，`spin` 开启持续旋转动画，两者可以组合使用。

<demo src="./__demos__/rotate-spin.vue"></demo>

### 点击事件

<demo src="./__demos__/click.vue"></demo>

### 自定义图标

在默认插槽内放入自定义 SVG，尺寸和颜色由 Icon 容器统一控制。

<demo src="./__demos__/custom.vue"></demo>

### 动态名称

`name` 使用短横线名称（例如 `arrow-left`），只查找当前 Vue 应用已注册的图标，不会自动加载图标全集。点击“切换图标”查看名称与图形同步变化。设置默认插槽时，优先显示插槽内容，`name` 不再决定图形。

<demo src="./__demos__/dynamic-name.vue"></demo>

### 全部图标

两端使用同一套规范名称。搜索忽略首尾空格和大小写，清空后恢复全部图标。卡片放大展示图标，完整名称可换行；点击或按 Enter / Space 复制对应标签。复制使用浏览器 Clipboard API，需要安全上下文及剪贴板权限；失败时显示错误反馈。

<demo src="./__demos__/catalog.vue"></demo>

### 名称切换与生命周期

<demo src="./__demos__/lifecycle.vue"></demo>

<!-- api-review:start -->
### 功能调试

启用 `name` 控件后，从已注册名称中选择图标，预览会随之切换。

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### Icon Props

| 属性            | 说明                   | 类型             | 默认值 |
| --------------- | ---------------------- | ---------------- | ------ |
| name            | 已显式注册的图标名称   | string           | -      |
| size            | `inherit` | number \| string | -      |
| color           | 图标颜色               | string           | -      |
| rotate          | 旋转角度               | number           | -      |
| spin            | 是否持续旋转           | boolean          | false  |
| transition      | 名称切换动画时长（ms） | number \| string | 0      |
| animation-class | 自定义切换动画类名     | string           | -      |

### Icon-xxx Props

| 属性            | 说明       | 类型                                       | 默认值  |
| --------------- | ---------- | ------------------------------------------ | ------- |
| size            | `inherit` | number \| string                            | -       |
| color           | 图标颜色   | string                                     | -       |
| rotate          | 旋转角度   | number                                     | -       |
| spin            | 是否旋转   | boolean                                    | false   |
| title           | 无障碍标题 | string                                     | -       |
| stroke-width    | 线宽       | number                                     | 4       |
| stroke-linecap  | 端点类型   | 'butt' \| 'round' \| 'square'              | 'butt'  |
| stroke-linejoin | 拐角类型   | 'bevel' \| 'inherit' \| 'miter' \| 'round' | 'miter' |

### Icon Events

| 事件名 | 说明           | 参数                        |
| ------ | -------------- | --------------------------- |
| click  | 点击触发的事件 | (event: MouseEvent) => void |

### Icon Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### 类型定义

组件导出以下类型定义

```ts
import type { IconProps } from "@cedar-design/ui";
```

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

只解析本应用已注册的图标；连续切换 name 会取消过期定时器，卸载后不再执行切换。各库注册前缀和历史 spin 类由本地适配保留，图标资源不跨库引用。

两端 Icon 默认继承宿主字号。需要固定 20px 的场景请显式设置 size="20" 或 icon-size 变量；size 属性优先于变量，颜色默认继承宿主。

### 动效变量

| Token | Default |
| --- | --- |
| `--c-icon-spin-duration` | `1s` |

内置动效遵循 prefers-reduced-motion: reduce：保留内容与状态反馈，关闭装饰性旋转、扫光和波纹。Icon 名称切换直接显示最新值并取消未结束阶段，CSS与JS时长保持一致；自定义动画类由调用方负责适配。Ripple的时长与清理策略以Ripple组件文档为准，不将其历史250ms规则当作Icon的时长上限。
