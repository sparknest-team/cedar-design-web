# Design

## 1. 最终公开契约

Watermark 只负责把文字或图片生成不可交互的视觉标记层；默认插槽承载被覆盖的页面内容。

| API | 最终类型 / 默认值 | 说明 |
| --- | --- | --- |
| `content` | `string \| string[]` | 单行或多行文字；空内容不生成标记 |
| `image` | `string` | 图片优先于文字；加载失败时若有文字则回退文字 |
| `width` / `height` | `number`，默认自动测量 | 显式标记尺寸；不继续使用 Maple 固定 `100` |
| `gap` | `[number, number] = [90, 90]` | 旋转后标记边界之间的水平/垂直间距 |
| `offset` | `[number, number]`，默认 `gap / 2` | 第一块标记相对容器左上角的偏移 |
| `rotate` | `number = -22` | 角度制旋转 |
| `font` | `WatermarkFont` | `color/fontSize/fontFamily/fontStyle/fontWeight/textAlign/lineHeight` |
| `zIndex` | `number = 6` | 标记层级；不再接受数字字符串 |
| `alpha` | `number = 1` | 整个标记透明度，限制在 `0..1`；默认文字颜色自身包含透明度 |
| `antiTamper` | `boolean = true` | 标记节点被移除或关键属性被修改时恢复 |
| `grayscale` | `boolean = false` | 对最终文字或图片 tile 做灰阶处理 |
| `repeat` | `boolean = true` | 关闭后只绘制一块标记 |
| `staggered` | `boolean = true` | 仅在 repeat 时生效，相邻行水平错开半个 tile |
| `fullscreen` | `boolean = false` | 标记层挂到 `body` 并固定覆盖视口；默认插槽仍留在原位置 |

事件只新增 `error`，用于图片加载、Canvas 读取或序列化失败，载荷为 `{ source: 'image' | 'canvas'; error: unknown }`。Expose 统一为 `redraw()`，表达重新生成背景；Maple 原 `resize()` 直接删除，不保留别名。

插槽只保留 `default`。Maple 的水印 `content` 插槽依赖 SVG `foreignObject` 和 DOM 序列化，在浏览器、CSP、字体与跨域环境中结果不稳定，且无法与 Canvas 灰阶、自动测量和防篡改形成一致契约，因此删除。复杂品牌标记应先生成图片或 Data URL 后通过 `image` 传入。

## 2. 同源文件边界

两库独立维护。以下文件在职责和端侧行为相同的前提下采用同源复制，并由门禁比较：

- `Watermark.vue`：wrapper、默认插槽、ARIA 与公开方法；
- `props.ts`、`types.ts`：最终 API、事件和类型；
- `renderer.ts`：文字/图片测量、旋转、DPR、灰阶、tile 合成；
- `use-watermark.ts`：响应式调度、异步版本控制、DOM 所有权和生命周期；
- `observer.ts`：防篡改与主题依赖观察；
- `style/implementation.less`：本地/全屏层结构规则；
- 配对契约测试。

不新增 `platform.ts` 或同类配置文件。命名空间、本库 StyleProvider 的根主题属性、全局 style 元素 id、token 前缀及本地 import，直接写在各库对应职责文件中。CSS token 后缀保持一致，仅使用 `c-` / `mp-` 前缀和各端语义 token 值。

同源表示维护方式和逻辑来源一致，不要求为通过逐字比较而制造抽象层。纯 `renderer.ts`、Props/types 和确实一致的生命周期逻辑应保持同源；少量端侧差异允许留在各自的 Vue、observer 或样式文件中，并由契约测试保证行为一致。如果后续证明桌面端与移动端在 DOM、主题或交互上差异较大，则只统一公开契约、纯算法和生命周期原则，不强行统一组件主体，也不得把这种状态标记为完整“已同源”。

## 3. 渲染算法

1. 在客户端生成独立 mark canvas，文字先测量多行宽高；`lineHeight` 默认由 `fontSize` 推导。
2. 根据旋转角计算外接矩形，扩大画布后再旋转，避免当前实现裁切边角。
3. 所有像素画布按当前 `devicePixelRatio` 绘制，CSS `background-size` 始终使用逻辑像素。
4. 普通重复使用一个 tile；错列模式生成两行 tile，第二行水平偏移半个 tile，不复制整张画布形成对角假错列。
5. `repeat=false` 使用单张背景且不扩展错列画布。
6. 图片设置 `crossOrigin/referrerPolicy` 后再赋值 `src`。每次生成持有递增版本号；旧图片晚到不得覆盖新 Props 的结果。
7. 图片失败且存在 `content` 时回退文字，同时发出 `error`；没有回退内容时清空旧背景，禁止继续展示过期水印。
8. `toDataURL/getImageData` 等安全异常必须捕获并发出 `error`，不得让 watch Promise 产生未处理拒绝。

## 4. DOM、主题与生命周期

标记层由组件明确持有：局部模式挂到 wrapper，全屏模式挂到 `document.body`。切换 `fullscreen` 时移动同一个职责节点并重新绑定观察目标；标记层设置 `aria-hidden="true"`、`pointer-events:none`，不进入可访问性树也不阻断页面操作。

防篡改分别观察宿主的直接子节点变化和标记层关键属性变化，只对当前实例拥有的节点作出反应。内部更新设置抑制标记，避免自身写 style 触发递归恢复。`antiTamper=false` 时不创建观察器。

默认文字颜色来自 `--c/mp-watermark-content-color`。两库在各自 observer 中直接使用本库的主题属性和 StyleProvider 标识，观察 document 主题属性、全局 StyleProvider style 节点以及最近的局部 StyleProvider `style/class` 变化，自动读取最终计算色并重绘；Demo 不再手动监听主题后调用方法。

所有 DOM、Canvas、Image、MutationObserver 只在 mounted 后创建。deactivate/unmount 时取消待执行任务、递增异步版本、断开所有观察器并移除组件拥有的节点；activate 后按当前 Props 重建。SSR 只输出 wrapper 与默认插槽，不访问 `window` 或 `document`。

## 5. 样式与 Token

结构统一为 `watermark` 和 `watermark__layer`，全屏使用 `watermark__layer--fullscreen`。主体规则只消费组件 token；第一版公共 token 为：

- `watermark-content-color`

位置、尺寸、背景图、background-size、repeat、offset 和 z-index 均为运行时结果，不制造无意义 token。局部 wrapper 保持 `position:relative`；是否裁切由明确的结构规则和 Demo 验证，不通过行内常量散落两端。

## 6. 明确删除与迁移

- Maple 删除 `content` 水印插槽，默认插槽继续作为被覆盖内容；
- Maple `resize()` 改为 `redraw()`，Demo 删除手动主题刷新；
- Maple `zIndex/alpha` 从 `number | string` 收紧为 `number`；
- Maple `width/height/gap/offset/alpha` 默认值迁移到统一契约；
- Cedar 增加 `fullscreen` 和 `error`；
- Cedar/Maple 统一导出 `WatermarkFont`、`WatermarkError`、`WatermarkProps`、`WatermarkInstance`；
- 不添加旧名 alias、deprecated 分支或运行时兼容判断。

## 7. 验收边界

必须覆盖：文本/多行/图片优先级与失败回退、快速切换图片的竞态、旋转不裁切、DPR、重复/单块/错列、灰阶、动态 Props、主题和局部 StyleProvider、局部/全屏切换、防篡改开关、多个实例隔离、SSR、KeepAlive、卸载清理、异常事件和无障碍属性。

双端完成组件测试、类型检查、lint、库构建和文档构建后，把 Props、renderer、确实自然一致的 composable/observer/结构样式和配对测试加入 `copied-components-check.mjs`。存在合理端侧差异的文件改做契约或结构检查，不通过引入适配配置来伪造逐字一致。最后根据实际达到的同源范围更新 `component-reuse.json` 并同步两端菜单。
