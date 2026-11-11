## Context

两端公共 API 应对齐，以 PC（Cedar）为基线；但 Cedar 内 Dialog=`show`、Drawer=`visible`、Trigger 族=`popupVisible` 三套并存。Upload 用 `fileList` 不符合 Vue 表单控件惯例。Maple 日期用 `allowedDates`（true=可选），Cedar 用 `disabledDate`（true=禁用），极性相反。

既有先例：`align-button-spec`（`type`→`status`、无 alias）、`align-alert-spec`。

## Decisions

### 1. 开合统一为 `open`

选 Ant Design 5 的 `open`，而不是继续 Arco `popupVisible` 或 Vant `show`。理由：一词覆盖 Dialog/Drawer/Select/Tooltip；顺带消掉 Cedar 内部分歧。

排除：Badge.`show`、Tag.`visible`（不是浮层开合）。

### 2. 挂载用 `popupContainer`

跟现有 Cedar/Arco。Maple `teleport` 改名；实现仍可走 `<Teleport>`。

### 3. 遮罩用 `mask*`

跟 Cedar Drawer / Ant。Dialog、Maple Popup 从 `overlay*` 迁过来。

### 4. Upload 用 `modelValue`，不用 `fileList`

表单控件应走 Vue 标准 `v-model`（`modelValue` + `update:modelValue`），并保留 `change`/`onChange` 供表单监听。Cedar 现有 `fileList` **改为** `modelValue`；Maple Uploader 已是 `modelValue`，保持。内部队列变量名可仍叫 fileList。

### 5. `disabledDate` 极性（true = 禁用）

跟 Ant/Arco/Cedar。Maple 从 `allowedDates` 迁移时必须：

- 重命名 prop
- **翻转**内部判断（`!allowedDates(x)` → `disabledDate(x)`）
- **翻转**文档/示例回调（原「返回 true 表示可选」→「返回 true 表示禁用」）

`allowedTime` 与 Cedar `disabledTime` 结构不同（函数形状不一致），本变更先对齐 `disabledDate`；`disabledTime` 另开任务做 API 形状迁移，不在本批假装纯改名。

### 6. 钩子 `before*`；事件 `on*` / emit

拦截器 prop 不加 `on` 前缀（`beforeChange`、`beforeClose`）。emit / listener 仍可用 `onChange` 形式（Cedar `defineListenerProp`）。

### 7. 无 alias

0.x，BREAKING + CHANGELOG 迁移表 + 可选 codemod。

## Risks

- Trigger.`popupVisible`→`open` 波及面大 → 先改 Trigger，再扫消费方。
- `disabledDate` 示例若只改名不改逻辑会行为反转 → 单测与 demo 必须同步翻转。
- Dialog 同时改开合 + 遮罩命名 → 一次改完避免二次破坏。
