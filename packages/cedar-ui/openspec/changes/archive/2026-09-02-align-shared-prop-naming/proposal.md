## Why

Maple（移动）与 Cedar（PC）公共 API 属性命名长期分叉：浮层开合有 `show` / `visible` / `popupVisible` 三套；挂载有 `teleport` vs `popupContainer`；遮罩有 `overlay*` vs `mask*`；钩子有 `onBefore*` vs `before*`；表单值 Upload 用 `fileList` 而非 `modelValue`；日期限制极性 `allowedDates` vs `disabledDate` 相反。两端 `AGENTS.md` 要求公共 API 以 PC 为准，但 Cedar 自身也不统一，需要先收口再同步 Maple。

## What Changes

### 规范（写入 `docs/practices/component-spec.md` §4.3）

| 概念 | 规范名 | 备注 |
| --- | --- | --- |
| 浮层/模态开合 | `open` / `defaultOpen` / `update:open` | 不含 Badge.`show`、Tag.`visible` |
| 挂载容器 | `popupContainer` | |
| 遮罩 | `mask` / `maskClass` / `maskStyle` / `maskClosable` / `escToClose` | |
| 语义色 | `status` | 已有 Button/Alert |
| 布局形态 | `mode` | 勿用 `type` |
| 拦截钩子 | `before*` | 不加 `on` 前缀；`on*` 留给 emit |
| 表单值 | `modelValue` / `update:modelValue` + `change`/`onChange` | **含 Upload**（不用 `fileList`） |
| 多词属性 | camelCase（`maxLength`/`autoPlay`） | |
| 浮层方位 | `placement` | Tooltip 从 `position` 迁过来 |
| 开关取值 | `checkedValue` / `uncheckedValue` | |
| 字段映射 | `fieldNames` | |
| 日期/时间限制 | `disabledDate` / `disabledTime` | **极性：返回 true = 禁用** |

**BREAKING：无 alias。**

### 实现范围

- Cedar：先统一内部分歧（Dialog/Drawer/Trigger 族/`popupVisible`→`open`；Dialog 遮罩对齐；Upload `fileList`→`modelValue`）。
- Maple：同步上述规范；`allowedDates`→`disabledDate` 时**翻转调用逻辑与文档示例**（不是纯改名）。

### Non-goals

- 不统一端专属 prop（Maple `elevation`/`ripple`/`safeArea`；Cedar `filterable`/`virtualList`/`default*` 非受控可保留）。
- 不把 Table/Form/Select 能力集拉齐，只对齐重叠命名。
- 不引入兼容层。

## Capabilities

### New Capabilities

- `shared-prop-naming`: 跨组件公共 prop 命名契约（开合、挂载、遮罩、表单值、禁用极性、钩子、大小写）。

### Modified Capabilities

（无既有 shared-prop spec。）

## Impact

- cedar-ui / maple-ui 大量组件 props、demos、tests、README。
- 业务调用方需按迁移表改 `v-model:show`→`v-model:open`、Upload `v-model:file-list`→`v-model`、日期回调极性取反等。
