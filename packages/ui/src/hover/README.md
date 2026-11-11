---
permalink: /components/hover/
---

# Hover 悬停反馈

`v-hover` 通过鼠标进入和离开更新样式或通知回调；`HoverOverlay` 根据显式的悬停与聚焦状态绘制装饰遮层。两者可独立组合，遮层不接管点击和键盘语义。

## 基础示例

### 悬停与焦点

将鼠标移入按钮，观察悬停状态；再通过 Tab 聚焦，观察焦点状态。示例使用原生按钮语义，悬停指令自身只处理 mouseenter / mouseleave，键盘焦点由宿主事件传入。

<demo src="./__demos__/basic.vue"></demo>

## API

### 指令

| 用法 | 说明 |
| --- | --- |
| `v-hover="callback"` | 鼠标进入和离开时通知 `(hovering: boolean) => void` |
| `v-hover="styleObject"` | 鼠标进入时应用样式，离开时恢复 |
| `v-hover:desktop` / `v-hover:mobile` | 按指令的端侧判断启用，不代表支持真实触屏悬停 |

### HoverOverlay Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| hovering | boolean | false | 悬停装饰状态 |
| focusing | boolean | false | 焦点装饰状态 |

`useHoverOverlay()` 返回 `hovering` 与 `handleHovering`，可连接指令回调。遮层不提供声明事件、插槽或业务实例方法，不接管交互；遮层使用绝对定位，宿主需提供定位上下文；独立使用时引入 `@cedar-design/ui-vue/hover/style`。

对象样式只覆盖传入的属性，离开或停用时恢复这些属性原有的内联值和 `!important` 优先级；动态切换 desktop/mobile 参数会清理旧监听。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-hover-overlay-focusing-opacity` | `0.12` | `opacity` |
| `--c-hover-overlay-opacity` | `0.04` | `opacity` |
| `--c-hover-transition-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-hover-overlay-focusing-opacity: 0.12;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
