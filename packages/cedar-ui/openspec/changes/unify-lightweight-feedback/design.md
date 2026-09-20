# Design

## 1. 目标与原则

`Loading` 表达“过程仍在进行”，`Result` 表达“过程已结束并给出结果”。同源后两端必须具有相同的公共 Props、插槽、默认 DOM 语义和状态选择逻辑；允许不同的只有产品前缀、本地图标实现、安装入口与主题 token 数值。

本轮仍采用“两库各自持有完整源码”的同源模式，不抽取跨库共享运行时。主体源码通过配对检查防止漂移，平台差异收敛在 `platform.ts`、样式 token 和入口文件。

## 2. Loading

### 2.1 最终公共 API

| 类型 | 名称 | 语义 |
| --- | --- | --- |
| Prop | `type` | `'circle' \| 'wave' \| 'cube' \| 'rect' \| 'disappear'`，默认 `circle` |
| Prop | `size` | 通用组件尺寸或 number；number 按 px 解释 |
| Prop | `radius` | 仅调整 `circle` 的半径；未设置时由 `size` 决定 |
| Prop | `color` | 指示器和提示文字的自定义颜色 |
| Prop | `loading` | 有默认插槽时控制遮罩和指示器；无默认插槽时始终渲染独立指示器 |
| Prop | `tip` | 提示文案 |
| Prop | `hideIcon` | 隐藏指示器，但保留 `tip` 和包裹内容的加载态 |
| Slot | `default` | 被加载遮罩包裹的真实内容 |
| Slot | `icon` | 替换内置指示器 |
| Slot | `tip` | 替换 `tip` 文案 |

`v-c-loading` / `v-mp-loading` 的对象选项与组件 Props 保持同名，另保留指令容器所需的 `fullscreen` 和 `background`。指令必须复用组件渲染，不复制第二套指示器 DOM。

### 2.2 删除的旧能力

- 删除 `dot` Prop。它绕过 `type` 的单一选择模型，且会形成 `dot + type` 的优先级问题。点状加载不进入本轮最终 API；若未来有稳定产品需求，应作为 `type` 的新枚举值单独评审。
- 删除 `element` 插槽。它与 `icon` 的渲染位置和能力完全重叠。
- 不将 Cedar `ConfigProvider.slots.loading` 作为 `Loading` 公共契约的一部分。全局默认指示器属于 Cedar 平台适配；Maple 无需为同源而暴露空的配置入口。

`hideIcon` 保留，因为“只显示文字与遮罩”无法用其他 Prop 稳定表达，也不应依赖一个返回空 VNode 的 `icon` 插槽。

### 2.3 渲染与可访问性

- 无默认插槽时，根节点直接渲染 body；有默认插槽时，始终渲染 content，仅在 `loading=true` 时渲染 overlay 和 body。
- 指示器选择顺序为：`hideIcon` → `icon` 插槽 → Cedar 全局指示器适配 → `type` 内置指示器。
- 容器加载时根节点设置 `aria-busy="true"`；纯指示器使用 `role="status"` 和 `aria-live="polite"`。装饰 SVG 设置 `aria-hidden="true"`。
- `hideIcon=true` 且无 `tip` 时仍允许遮罩业务内容，但不渲染空 body。
- 动画在 `prefers-reduced-motion: reduce` 下停止；不再增加第二个组件级动画开关。

## 3. Result

### 3.1 最终公共 API

| 类型 | 名称 | 语义 |
| --- | --- | --- |
| Prop | `status` | `'info' \| 'success' \| 'warning' \| 'danger' \| 'question' \| 'empty' \| '403' \| '404' \| '500'`，默认 `info` |
| Prop | `title` | 标题文案 |
| Prop | `subtitle` | 补充说明 |
| Prop | `imageSize` | string 或 number，number 按 px 解释；控制整个状态图形的外接尺寸 |
| Prop | `animation` | 是否允许状态图形自带的动画，默认 `true` |
| Slot | `icon` | 替换整个状态图形区 |
| Slot | `title` | 替换标题内容，仍由组件提供标题容器 |
| Slot | `subtitle` | 替换副标题内容，仍由组件提供副标题容器 |
| Slot | `extra` | 操作区，通常放置 Button / Link |
| Slot | `default` | 附加的结果详情区 |

`imageSize` 保留现有名字，因为 403/404/500/empty 是插画而非单色图标；改名 `iconSize` 会错误缩小语义。`animation` 保留，用于截图、测试、低动效场景和品牌规范。当系统匹配 `prefers-reduced-motion: reduce` 时，即使 `animation=true` 也必须停止动画。

### 3.2 状态图形与平台边界

- 九种 `status` 在两端使用相同的图形结构、viewBox、尺寸计算和动画开关逻辑，以避免“同状态不同产品含义”。
- 简单语义状态 `info/success/warning/danger` 与插画状态 `question/empty/403/404/500` 共用统一外层 image container，不再保留 Cedar 的 icon-tip 特例 DOM。
- SVG 组件主体可整文件同步；产品色、默认尺寸和间距必须从本地 CSS token 取值，不在主体源码写死 Cedar/Maple 变量。
- `imageSize` 只设置外层图形尺寸 CSS 变量；内部线宽由图形按比例计算，避免每个状态分别解析尺寸。
- 内置状态图形是装饰性内容，设置 `aria-hidden="true"`；语义信息由标题和副标题承担。

### 3.3 插槽取舍与渲染契约

- 删除 Maple `image` 插槽，统一使用 `icon`。`icon` 是设计系统反馈组件的通用名称，且与 `Loading` 保持一致。
- 删除 Maple `footer` 插槽，统一使用 `extra`。`extra` 明确表达主内容之外的操作区，并避免将其误解为卡片式页脚。
- `title` / `subtitle` 插槽只替换内容，不替换布局容器。只要对应 Prop 有值或插槽存在，容器就渲染。
- `default` 始终是附加详情，`extra` 始终是操作区；两者不合并，渲染顺序固定为：图形 → 标题 → 副标题 → extra → default。
- 自定义 `icon` 插槽存在时完全取代内置状态图形；`imageSize` 不强制约束插槽内容，但作为 slot prop 传出归一化后的 `size` 供消费者使用。

## 4. 实现结构

- 两组件均改为 `<script setup lang="ts">`，Props 从 `props.ts` 集中导出，根 class 统一经 `createNamespace` 生成。
- `Result` 增加 `platform.ts`，只负责将状态映射到两库的本地图形组件；状态判断、DOM 和尺寸逻辑留在同源主体。
- `Loading` 的 Cedar 全局自定义 loading 通过 `platform.ts` 读取；Maple 适配函数返回 `undefined`。
- 主样式保持同源结构，token 文件分端维护默认值。主样式只读 `--c-*` / `--mp-*` 变量，由配对检查归一化前缀后比较。
- 不保留旧 class 名兼容层；对外契约是 Props、插槽、事件和 CSS token，不是内部 DOM class。

## 5. 验证策略

### Loading 配对契约

- 五种 type、通用尺寸与 number 尺寸、circle radius、color。
- 独立指示器、包裹内容的 loading true/false、遮罩、tip Prop/插槽。
- icon 插槽优先级、hideIcon 与 tip 组合、空 body 不渲染。
- 指令布尔值/对象值、动态更新、fullscreen、background、卸载清理、SSR。
- aria-busy / role / aria-live 与 reduced-motion 样式。

### Result 配对契约

- 九种 status 均渲染非空图形，未知 status 由 prop validator 拒绝。
- title/subtitle 的 Prop 与插槽，extra/default 布局顺序。
- icon 插槽完全替换内置图形，并收到 size slot prop。
- imageSize 对 string/number 的单位归一化，所有状态采用相同外接尺寸。
- animation true/false 及 prefers-reduced-motion。
- SSR 输出稳定，不依赖 `window` / `document`。

验收要求包括：两端原有组件测试、新增配对契约测试、类型检查、Less 编译、组件文档示例和同源脚本全部通过。

## 6. 迁移与风险

- Maple 使用 `image` 的地方直接改为 `icon`，使用 `footer` 的地方直接改为 `extra`。
- Cedar 使用 `dot` 的地方改用现有 type 中最接近的动画，或显式自定义 `icon`；使用 `element` 的地方改为 `icon`。
- 因为正式发布前处于 API 收敛期，不提供 alias 和 deprecation 过渡。实现前必须先扫描两库内所有调用方并在同一变更中迁移。
- 状态图形同源可能引起视觉快照大量变化；快照更新只允许落在 Loading / Result 及它们的直接 Demo，不借机批量更新范围外快照。
