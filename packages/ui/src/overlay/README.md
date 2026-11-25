---
permalink: /components/overlay/
---

# Overlay 背景层

用于在页面内容上方创建背景层，并可承载需要强调的内容。

## 基础示例

### 基本使用

通过 `v-model:open` 控制显示状态。默认点击背景区域或按 Escape 会关闭；点击默认插槽内容不会关闭。

<demo src="./__demos__/basic.vue"></demo>

## 使用说明

### 配置说明

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

## API

### Overlay Props

| 参数               | 说明                                         | 类型                             | 默认值   |
| ------------------ | -------------------------------------------- | -------------------------------- | -------- |
| `v-model:open`     | 是否显示                                     | `boolean`                        | `false`  |
| `default-open`     | 非受控模式下是否默认显示                     | `boolean`                        | `false`  |
| `overlay-closable` | 点击背景区域是否关闭                         | `boolean`                        | `true`   |
| `lock-scroll`      | 打开时锁定挂载容器的滚动。原地渲染时锁定所在文档的 body。 | `boolean`                        | `true`   |
| `unmount-on-close` | 关闭后是否卸载插槽内容                       | `boolean`                        | `true`   |
| `esc-to-close`     | 是否按 Escape 关闭                           | `boolean`                        | `true`   |
| `popup-container`  | Teleport 挂载位置；`false` 表示原地渲染       | `string \| HTMLElement \| false` | `'body'` |
| `z-index`          | 自定义层级                                   | `number`                         | `-`      |

### Overlay Events

| 事件名        | 说明         | 参数            |
| ------------- | ------------ | --------------- |
| `update:open` | 显示状态变化 | `boolean`       |
| `open`        | 开始打开     | `-`             |
| `opened`      | 打开动画结束 | `-`             |
| `close`       | 开始关闭     | `-`             |
| `closed`      | 关闭动画结束 | `-`             |
| `click`       | 点击背景区域 | `MouseEvent`    |
| `key-escape`  | 按下 Escape  | `KeyboardEvent` |

### Overlay Slots

| 插槽名    | 说明             |
| --------- | ---------------- |
| `default` | 背景层上方的内容 |

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-overlay-animation-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |
| `--c-overlay-background-color` | `var(--c-sys-color-scrim)` | `background-color` |
| `--c-overlay-content-z-index` | `var(--c-sys-layer-raised)` | `z-index` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-overlay-background-color: var(--c-sys-color-scrim);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 减少动态效果

内置 CSS 过渡遵循 `prefers-reduced-motion: reduce`。关闭过渡不改变最终显隐、选中／展开状态及事件语义；插槽内自定义动画由应用自行控制。
