---
permalink: /components/ripple/
---

# Ripple 水波指令

在元素上添加点击、触摸或键盘水波效果。

## 基础示例

### 基本使用

支持触摸、鼠标主键和宿主 Enter / Space。鼠标水波从按下位置扩散，松开或窗口失焦时结束；忽略非主键及触摸产生的兼容鼠标事件。键盘水波从中心扩散，建议使用原生按钮承载交互。

<demo src="./__demos__/basic.vue"></demo>

## 选项

| 选项 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 水波颜色 | `string` | `currentColor` |
| disabled | 禁止产生水波，并取消待执行动画 | `boolean` | `false` |

使用 `v-ripple="{ color, disabled }"`。组件卸载会取消动画与定时器并移除事件监听；键盘状态由每个元素独立维护。

## 样式

直接注册指令时，引入 `@cedar-design/ui-vue/ripple/style`；运行时代码不导入 CSS，以支持 SSR 包导入。样式名使用 `--c-ripple-*`，声明见 `style/token.less`。主题默认值无需强行与移动端同值，动画规则与消费协议保持一致。

| 变量 | 默认值 | 职责 |
| --- | --- | --- |
| --c-ripple-color | currentColor | 波纹背景；color 选项优先 |
| --c-ripple-cubic-bezier | cubic-bezier(0.68, 0.01, 0.62, 0.6) | transform 扩散曲线 |
| --c-ripple-expand-duration | 200ms | transform 扩散时长 |
| --c-ripple-fade-duration | 140ms | opacity 显现／消退时长，线性 |

变量设置在实际指令宿主，由波纹继承；以上默认值目前两端一致。250ms 分别为节点创建后的最小展示和开始淡出后的最小移除等待，不是视觉时长或总生命周期。运行时读取实际波纹的 computed transition duration/delay；淡出等待创建+250ms 或激活+扩散时长的较晚者，删除等待 max(250ms, 消退时长)。长时长覆写不再截断，0ms／无样式仍保留清理下限。reduce 隐藏装饰波纹；扩散在创建／激活、消退在开始淡出时采样，不保证任意中途 CSS 改动或 animation。

重复释放只排队一次；禁用／卸载清理所属定时器与直接子波纹，不误删嵌套实例。文档事件绑定／移除使用挂载时 ownerDocument，不承诺跨文档搬迁自动重绑。仅本宿主 Enter／Space 与对应 keyup 或 blur 参与；指令不为普通 div 提供按钮语义、可访问名称或点击业务能力。

绑定值类型 `RippleDirectiveValue` 可从组件库根入口或 Ripple 入口导入，包含可选 `color` 和 `disabled`。颜色更新作用于之后创建的波纹；`disabled` 只关闭装饰，不禁用宿主交互。全局 `Context.enableRipple` 关闭时不创建新波纹，已有波纹按原生命周期结束。波纹显示期间会临时设置宿主裁切及必要的定位和层叠样式；最后一个波纹结束、禁用或卸载时恢复指令仍持有的样式，业务期间改写的值保留。坐标支持轴向缩放；旋转或倾斜变换不保证精确。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-ripple-color` | `currentColor` | `background-color` |
| `--c-ripple-cubic-bezier` | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` | `transition` |
| `--c-ripple-expand-duration` | `200ms` | `transition` |
| `--c-ripple-fade-duration` | `140ms` | `transition` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-ripple-color: currentColor;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
