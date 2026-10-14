---
permalink: /components/ripple/
---

# Ripple 水波指令

在元素上添加点击、触摸或键盘水波效果。指令主体与 Maple 独立复制同源，不共享实例或运行时；本地包依赖、命名空间与 Token 默认值独立维护。

## 基本使用

<demo src="./__demos__/basic.vue"></demo>

## 选项

| 选项 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 水波颜色 | `string` | `currentColor` |
| disabled | 禁止产生水波，并取消待执行动画 | `boolean` | `false` |

使用 `v-ripple="{ color, disabled }"`。组件卸载会取消动画与定时器并移除事件监听；键盘状态由每个元素独立维护。

## 样式

直接注册指令时，引入 `@cedarjs/ui/ripple/style`；运行时代码不导入 CSS，以支持 SSR 包导入。样式名使用 `--c-ripple-*`，声明见 `style/token.less`。主题默认值无需强行与移动端同值，动画规则与消费协议保持一致。

| 变量 | 默认值 | 职责 |
| --- | --- | --- |
| --c-ripple-color | currentColor | 波纹背景；color 选项优先 |
| --c-ripple-cubic-bezier | cubic-bezier(0.68, 0.01, 0.62, 0.6) | transform 扩散曲线 |
| --c-ripple-expand-duration | 200ms | transform 扩散时长 |
| --c-ripple-fade-duration | 140ms | opacity 显现／消退时长，线性 |

变量设置在实际指令宿主，由波纹继承；以上默认值目前两端一致。250ms 分别为节点创建后的最小展示和开始淡出后的最小移除等待，不是视觉时长或总生命周期。运行时读取实际波纹的 computed transition duration/delay；淡出等待创建+250ms 或激活+扩散时长的较晚者，删除等待 max(250ms, 消退时长)。长时长覆写不再截断，0ms／无样式仍保留清理下限。reduce 隐藏装饰波纹；扩散在创建／激活、消退在开始淡出时采样，不保证任意中途 CSS 改动或 animation。

重复释放只排队一次；禁用／卸载清理所属定时器与直接子波纹，不误删嵌套实例。文档事件绑定／移除使用挂载时 ownerDocument，不承诺跨文档搬迁自动重绑。仅本宿主 Enter／Space 与对应 keyup 或 blur 参与；指令不为普通 div 提供按钮语义、可访问名称或点击业务能力。真实触摸设备／OS 偏好另行验收。
