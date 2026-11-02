---
permalink: /components/overlay/
---

# Overlay 背景层

用于在页面内容上方创建背景层，并可承载需要强调的内容。

## 基础示例

### 基本使用

通过 `v-model:open` 控制显示状态。默认点击背景区域或按 Escape 会关闭；点击默认插槽内容不会关闭。

<demo src="./__demos__/basic.vue"></demo>

## API

### Props

| 参数               | 说明                                         | 类型                             | 默认值   |
| ------------------ | -------------------------------------------- | -------------------------------- | -------- |
| `v-model:open`     | 是否显示                                     | `boolean`                        | `false`  |
| `default-open`     | 非受控模式下是否默认显示                     | `boolean`                        | `false`  |
| `overlay-closable` | 点击背景区域是否关闭                         | `boolean`                        | `true`   |
| `lock-scroll`      | 是否锁定挂载容器滚动                         | `boolean`                        | `true`   |
| `unmount-on-close` | 关闭后是否卸载插槽内容                       | `boolean`                        | `true`   |
| `esc-to-close`     | 是否按 Escape 关闭                           | `boolean`                        | `true`   |
| `popup-container`  | Teleport 挂载位置；`false` 表示原地渲染       | `string \| HTMLElement \| false` | `'body'` |
| `z-index`          | 自定义层级                                   | `number`                         | `-`      |

### Events

| 事件名        | 说明         | 参数            |
| ------------- | ------------ | --------------- |
| `update:open` | 显示状态变化 | `boolean`       |
| `open`        | 开始打开     | `-`             |
| `opened`      | 打开动画结束 | `-`             |
| `close`       | 开始关闭     | `-`             |
| `closed`      | 关闭动画结束 | `-`             |
| `click`       | 点击背景区域 | `MouseEvent`    |
| `key-escape`  | 按下 Escape  | `KeyboardEvent` |

### Slots

| 插槽名    | 说明             |
| --------- | ---------------- |
| `default` | 背景层上方的内容 |

## 公开 CSS 变量

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

| 变量 | 默认值 | 意义与场景 |
| --- | --- | --- |
| `--c-overlay-background-color` | `var(--c-sys-color-scrim)` | 仅遮罩背景，不影响前景内容透明度 |
| `--c-overlay-animation-duration` | `var(--c-sys-motion-duration-slow)` | 组件入退场时长；reduced-motion 可覆盖 |
| `--c-overlay-content-z-index` | `var(--c-sys-layer-raised)` | 内容高于遮罩的局部层级 |

### 减少动态效果

内置 CSS 过渡遵循 `prefers-reduced-motion: reduce`。关闭过渡不改变最终显隐、选中／展开状态及事件语义；插槽内自定义动画由应用自行控制。
