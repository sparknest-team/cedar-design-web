# @cedar-design/ui-vue

## 1.4.7

### Patch Changes

- [#43](https://github.com/sparknest-team/cedar-design-web/pull/43) [`21c67ea`](https://github.com/sparknest-team/cedar-design-web/commit/21c67eab0e29ea11b22aece23269101242718d95) Thanks [@sparknest-team](https://github.com/sparknest-team)! - 修复 Table 的选择、展开或拖拽列随右侧固定列自动冻结时，表格左边缘多显示一道阴影的问题。
- Updated dependencies []:
  - @cedar-design/icons-vue@1.4.7
  - @cedar-design/shared-vue@1.4.7
  - @cedar-design/use-vue@1.4.7

## 1.4.6

### Patch Changes

- [#37](https://github.com/sparknest-team/cedar-design-web/pull/37) [`d14560b`](https://github.com/sparknest-team/cedar-design-web/commit/d14560b3999b220424403b64414333232c333661) Thanks [@sparknest-team](https://github.com/sparknest-team)! - PC 端弹层移除触摸监听，改用 overscroll-behavior 拦截边界链式滚动：modal-focus 不再在 document 上注册 touchstart/touchmove，dialog/drawer 的可滚动容器补 overscroll-behavior: contain。

- [#40](https://github.com/sparknest-team/cedar-design-web/pull/40) [`827c050`](https://github.com/sparknest-team/cedar-design-web/commit/827c050336e6fa18a51b3c7a153f719908952902) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Section 标题默认使用 h4，调整正文间距、状态底色和整段色条圆角。Card 的长标题示例支持悬停或键盘聚焦查看全文。

- [#34](https://github.com/sparknest-team/cedar-design-web/pull/34) [`3bd00a7`](https://github.com/sparknest-team/cedar-design-web/commit/3bd00a7070694e29e90e031e35132f88210169fa) Thanks [@sparknest-team](https://github.com/sparknest-team)! - 同步 Maple 的共享基础模块（trigger 定位、弹层栈、焦点管理、滚动锁、树/级联数据、输入合成等），消除 design-ui 共享基础漂移检查失败。

- Updated dependencies []:
  - @cedar-design/icons-vue@1.4.6
  - @cedar-design/shared-vue@1.4.6
  - @cedar-design/use-vue@1.4.6

## 1.4.5

### Patch Changes

- [#27](https://github.com/sparknest-team/cedar-design-web/pull/27) [`9120382`](https://github.com/sparknest-team/cedar-design-web/commit/912038251152f8585603b2f15a52d559eef6de5a) Thanks [@sparknest-team](https://github.com/sparknest-team)! - section: `show-marker` 改为显式默认 `false`，去掉按表单上下文推断

  `Section` 原来在未传 `show-marker` 时，会根据祖先是否存在 `Form` 自行决定是否显示标题色条
  （`props.showMarker ?? !!form`），使同一份调用代码在表单内外视觉不同。现改为
  `default: false`，需要色条时显式传入。`form` 上下文仍用于 `--form` 类名与 inline 布局。

- Updated dependencies []:
  - @cedar-design/icons-vue@1.4.5
  - @cedar-design/shared-vue@1.4.5
  - @cedar-design/use-vue@1.4.5

## 1.4.4

### Patch Changes

- [#24](https://github.com/sparknest-team/cedar-design-web/pull/24) [`5e7c655`](https://github.com/sparknest-team/cedar-design-web/commit/5e7c655526feb53ac6cf0531ed977935e39b4405) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Section 标题默认使用 h4，调整正文间距、状态底色和整段色条圆角。Card 的长标题示例支持悬停或键盘聚焦查看全文。

- Updated dependencies []:
  - @cedar-design/icons-vue@1.4.4
  - @cedar-design/shared-vue@1.4.4
  - @cedar-design/use-vue@1.4.4

## 1.4.3

### Patch Changes

- [#19](https://github.com/sparknest-team/cedar-design-web/pull/19) [`7c39ab7`](https://github.com/sparknest-team/cedar-design-web/commit/7c39ab7c78e54506a9b088a57bd26fd5dbb7abac) Thanks [@sparknest-team](https://github.com/sparknest-team)! - 验证 npm Trusted Publishing（OIDC）配置：通过 GitHub Actions 真实发布一次以完成 trusted publisher 绑定验证，无功能性变更。
  （注意：该仓库 .changeset/config.json 的 fixed 分组会把全部 8 个 @cedar-design/* 包一起抬到同一 patch 版本，这是预期行为。）
- Updated dependencies []:
  - @cedar-design/icons-vue@1.4.3
  - @cedar-design/shared-vue@1.4.3
  - @cedar-design/use-vue@1.4.3

## 1.4.2

### Patch Changes

- chore(release): 全仓版本号统一（fixed 组），未变更包同步升版

- Updated dependencies []:
  - @cedar-design/icons-vue@1.4.2
  - @cedar-design/shared-vue@1.4.2
  - @cedar-design/use-vue@1.4.2

## 1.4.1

### Patch Changes

- [#12](https://github.com/sparknest-team/cedar-design-web/pull/12) [`c631d6b`](https://github.com/sparknest-team/cedar-design-web/commit/c631d6be8846674e0bf220358b6c436945ad65cb) Thanks [@sparknest-team](https://github.com/sparknest-team)! - 重生成 token 参考表，并按 demo 控制项策略规范化 3 个示例。

  - `docs/guide/design-token-reference.md` 由 `renderCatalog` 编译生成，此前落后于当前 token 声明；
    design-ui 的 `check:token-reference` 会断言生成物与声明一致。
  - `field-decorator/control-sizes.en-US`、`theme-provider/local-theme`（中英）的 Select
    作为配置项必须包在 `form-item` 内，此前未规范化。

## 1.4.0

### Minor Changes

- [`3fdee8b`](https://github.com/sparknest-team/cedar-design-web/commit/3fdee8b656ca0f6ba0feadb722b56f4de82d4ac0) - 构建工具链统一到 Node 26 / pnpm 10，与 Maple、design-ui 保持同一套运行时：

  - `engines.node` 下限 20 → `>=26.13.1`，`.nvmrc` / `.node-version` / `.npmrc use-node-version` / Volta 全部固定 26.13.1
  - pnpm `9.6.0` → `10.23.0`：pnpm 10 不再读 `package.json` 的 `pnpm` 字段，`pnpm.overrides` 与 `patchedDependencies` 全部迁到 `pnpm-workspace.yaml`；否则 `@sparknest/*` 的 `link:` 覆盖会静默失效、VuePress 补丁不再应用
  - 新增 `onlyBuiltDependencies`（`@parcel/watcher` / `core-js` / `esbuild` / `loca-boot-*`）：pnpm 10 默认拦截依赖的安装脚本，需显式放行
  - `pnpm-lock.yaml` 按 pnpm 10 重新归一化：`overrides` 段补齐工作区级覆盖、`patchedDependencies` 哈希改为 sha256；解析结果与版本号不变

## 1.3.0

### Minor Changes

- [#8](https://github.com/loca-spirit/cedar-design-web/pull/8) [`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69) Thanks [@loca-spirit](https://github.com/loca-spirit)! - Add opt-in TableCore JS, types and styles for native flat-data rendering, adaptive widths and frozen columns. Provide separate headless filter/sort state and explicit client processing entries. Extract shared rendering and private capability modules while preserving the complete Table API, default behavior and desktop interactions.

- [#8](https://github.com/loca-spirit/cedar-design-web/pull/8) [`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69) Thanks [@loca-spirit](https://github.com/loca-spirit)! - Support logical start and end alignment through the Table pagination configuration.

  Table now renders its pagination bar below the rows. Replace the former `page-position` option with `pagination.align` when selecting the start or end edge.

### Patch Changes

- [#8](https://github.com/loca-spirit/cedar-design-web/pull/8) [`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69) Thanks [@loca-spirit](https://github.com/loca-spirit)! - Extract Table column-width allocation and frozen-column offsets into dependency-free layout modules while preserving the existing Table API and behavior. Add compatibility and production-consumer bundle baselines for the refactor.

- [#8](https://github.com/loca-spirit/cedar-design-web/pull/8) [`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69) Thanks [@loca-spirit](https://github.com/loca-spirit)! - Extract Table summary data, span/render orchestration and virtual row planning/list adaptation into private feature modules. Preserve the public API, default pipeline, slots, events, refs and lazy detail evaluation, and add published-format compatibility and bundle regressions.

- [#8](https://github.com/loca-spirit/cedar-design-web/pull/8) [`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69) Thanks [@loca-spirit](https://github.com/loca-spirit)! - Fix native form label targeting and nested field feedback, Cascader keyboard and search ownership, popup reference motion tracking, and inherited reading direction. Align Checkbox and Radio theme tokens and refresh their documentation.

- [#8](https://github.com/loca-spirit/cedar-design-web/pull/8) [`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69) Thanks [@loca-spirit](https://github.com/loca-spirit)! - Remove the FilterForm padding, border, corner radius and background tokens. FilterForm has zero outer margin and padding and no border across themes. Wrap it in Card for a bordered panel.

- Updated dependencies [[`059ce60`](https://github.com/loca-spirit/cedar-design-web/commit/059ce60c8f5aafb2f913a5ffd246ef114c6e9d69)]:
  - @cedar-design/use-vue@1.2.2

## 1.2.0

### Minor Changes

- [#6](https://github.com/sparknest-team/cedar-design-web/pull/6) [`6620155`](https://github.com/sparknest-team/cedar-design-web/commit/6620155abe7d3bb91703996e62a3fe8eeb518b14) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Release the public packages together at 1.2.0 so applications can install matching versions.

- [#1](https://github.com/sparknest-team/cedar-design-web/pull/1) [`38eb17b`](https://github.com/sparknest-team/cedar-design-web/commit/38eb17b7aeb14ce04638b3e51c8286d7dab5787d) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Replace CFormSection and Form.Section with CSection. Import Section and its types from the Section entry and rename c-form-section CSS overrides to c-section. Inside Form, Section retains the previous field layout and appearance.

- [`c3b76e0`](https://github.com/sparknest-team/cedar-design-web/commit/c3b76e0d3578aecf4b446e527400d2ce12a78618) - Develop with Vue 3.5.45 while supporting consumers on Vue 3.2.47 and later Vue 3 releases. Preserve compatible component IDs and public declarations, and gate releases on packed runtime and type compatibility checks.

  The peer minimum is explicitly Vue 3.2.47. Consumers on Vue 3.2.0–3.2.46 must update to 3.2.47 or later in the Vue 3 line. No release is performed by this change.

### Patch Changes

- [#6](https://github.com/sparknest-team/cedar-design-web/pull/6) [`6620155`](https://github.com/sparknest-team/cedar-design-web/commit/6620155abe7d3bb91703996e62a3fe8eeb518b14) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Keep a standard Textarea without a suffix within the field's width.

- [#6](https://github.com/sparknest-team/cedar-design-web/pull/6) [`6620155`](https://github.com/sparknest-team/cedar-design-web/commit/6620155abe7d3bb91703996e62a3fe8eeb518b14) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Fix keyboard listener types in Trigger while preserving Escape handling and listener cleanup across document windows.

- Updated dependencies [[`6620155`](https://github.com/sparknest-team/cedar-design-web/commit/6620155abe7d3bb91703996e62a3fe8eeb518b14)]:
  - @cedar-design/icons-vue@1.2.0
  - @cedar-design/shared-vue@1.2.0
  - @cedar-design/use-vue@1.2.0

- [#5](https://github.com/sparknest-team/cedar-design-web/pull/5) [`60c9c1a`](https://github.com/sparknest-team/cedar-design-web/commit/60c9c1a504108fde2acfde47e84554770e57835b) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Fix native form label targeting and nested field feedback, Cascader keyboard and search ownership, popup reference motion tracking, and inherited reading direction. Align Checkbox and Radio theme tokens and refresh their documentation.

- [#1](https://github.com/sparknest-team/cedar-design-web/pull/1) [`38eb17b`](https://github.com/sparknest-team/cedar-design-web/commit/38eb17b7aeb14ce04638b3e51c8286d7dab5787d) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Close an open menu branch when another menu is opened from the keyboard.

- [#1](https://github.com/sparknest-team/cedar-design-web/pull/1) [`38eb17b`](https://github.com/sparknest-team/cedar-design-web/commit/38eb17b7aeb14ce04638b3e51c8286d7dab5787d) Thanks [@sparknest-team](https://github.com/sparknest-team)! - Remove patch-package from the published component library's runtime dependencies. Documentation-only dependency patches are managed by pnpm during development installation.

- Updated dependencies [[`60c9c1a`](https://github.com/sparknest-team/cedar-design-web/commit/60c9c1a504108fde2acfde47e84554770e57835b), [`c3b76e0`](https://github.com/sparknest-team/cedar-design-web/commit/c3b76e0d3578aecf4b446e527400d2ce12a78618)]:
  - @cedar-design/use-vue@1.2.0
  - @cedar-design/icons-vue@1.2.0
    permalink: /changelog/

---

[//]: # 'template'
[//]: # '## 1.1.2'
[//]: # '#### Feature'
[//]: # '#### Fix'
[//]: # '#### Style'
[//]: # '#### Breaking Change'
[//]: # '#### Remove'

## Unreleased

#### Breaking Change

- **List / InfiniteScroll** 与移动端 (`maple-design-mobile`) 完成分层：
  - `List` 收口为纯展示组件，移除 `bottomOffset`、`reach-bottom` 与 `scroll-loading`
  - `size` 仅保留 `sm | md | lg`
  - 无限加载改用独立 `InfiniteScroll`，以 `v-model:status` 管理 `idle | loading | error | finished`
- **Steps** 与移动端 (`maple-design-mobile`) 完成 API 对齐：
  - 事件改为 listener prop：`onChange` / `onUpdate:current`（模板 `@change` / `v-model:current` 仍可用）
  - 抽出 `props.ts`，补齐 `StepsProps` / `StepProps` / `StepStatus` / `StepsType` 等类型导出
- **Alert** 与移动端 (`maple-design-mobile`) 完成 API 对齐：
  - `type="error"` → `type="danger"`（与 `Status` 枚举统一）
  - `type="normal"` → `type="default"`
  - `closeable` → `closable`（拼写修正）
  - `#close-element` slot → `#close-icon` slot

#### Feature

- 新增 **InfiniteScroll**：支持 `bottomOffset`、`immediate`、`disabled`、`target`、`load` / `retry`、`check()` / `retry()` 与同步防重。
- **Steps** 修 `vertical` demo（`direction="vertical"`）、`changeable` demo（`setCurrent` 参数遮蔽）
- **Alert** 新增 `variant`（`standard` / `tonal` / `outlined`）、`color`、`elevation` 属性；新增 `default` 类型；新增 `after-close` 事件。
- **Alert** 样式重构为完全 CSS 变量驱动（`style/token.less`），覆盖 5 类型 × 3 变体颜色矩阵。

## 1.2.82

#### Feature

**Tabs 组件**

- `Tabs`组件样式优化

**Upload 组件**

- `Upload`组件样式优化

## 1.2.76

#### Feature

**FilterForm 组件**

- `FilterForm`组件Input类型输入框防抖优化、多选框动画优化。

**Dialog 组件**

- `Dialog`组件空内容样式优化

## 1.2.75

#### Feature

**Table 组件**

- 新增`Table`组件分页条底部吸底支持数字传入。
- 优化`InputNumber`、`Button`组件的边框，`Card`、`Tabs`组件的圆角。

#### Bug Fix

**Upload 组件**

- 修复`Upload`组件超出限制后，上传按钮仍显示的问题。

## 1.2.74

#### Feature

**Button 组件**

- 修改`Button`组件默认按钮的颜色为白色。

**SassPage 组件**

- 新增`SassPage`组件。

## 1.2.72

#### Feature

**Class UI 库**

- `border-radius` 补充demo。

#### Fix

**People 组件**

- 修复`People`组件fetch组件引用类型问题。

## 1.2.71

#### Fix

**Drawer 组件**

- 修复`drawer`组件背景滚动锁定失效问题。

**Table 组件**

- 修复`table`组件在滚动状态时，border阴影显示异常的问题。

**Class UI 库**

- 调整 `.text-number-1-bold`、`.text-number-2-bold`、`.text-number-3-bold`、`.text-number-4-bold` 的 `line-height`为`24px`、`29px`、`38px`、`48px`。

## 1.2.70

#### Feature

**Typography 组件**

- 新增 `line-height` 变量， 新增 `line-height-default` 变量默认行高、新增 `line-height-1` 变量一倍行高。同时调整 `text-number-4-bold`、`text-number-3-bold`、`text-number-2-bold`、`text-number-1-bold` 行高为 `line-height-1`。
- 调整 `saas-header-nav`的`left-prefix`插槽的布局。
- 修复 `table` 在通过 `title` 函数自定义表头搜索时，无法搜索到 `title` 的问题。

## 1.2.67

#### Feature

**MapSelect 组件**

- 新增 `popupContainer` 属性，支持自定义弹窗容器。

#### Fix

**Map 组件**

- 修复 `geocoderHandler` 在 `google` 地图中无法正常使用的问题。
- 修复 `google` 地图根据ID获取地址详情失败的问题。

## 1.2.65

#### Feature

**样式**

- 新增 完善数字类型的字体样式，增加regular字体。

#### Fix

**Table 组件**

- 修改 TableColumn `v-if`无效的问题。
- 修改 Dropdown 按钮的样式问题。
- 调整 Button 次要按钮的禁用样式的清晰度。

**Collapse 组件**

- 修复 Collapse 组件 `key` 无法传入的问题。

## 1.2.64

#### Feature

**主题**

- 新增 全面适配所有组件的暗黑模式。
- 修改 将`成功色`映射关系统一调整为 green。green的色板调整为冷色调。

**Table 组件**

- 优化 针对 Table 组件自定义表头弹窗，进行文字溢出优化。当表头内容较长时，会出现tooltip进行提示。

#### Fix

**Map 组件**

- 修改 地图组件初始化无法打开弹窗的问题。

## 1.2.61

#### Feature

**Card 组件**

- 新增 `title-ellipsis` 属性，实现标题文本溢出时自动省略。
- 新增 `title-tooltip` 属性，实现标题文本溢出时，鼠标悬停时是否显示完整标题内容的提示。
- 新增 `description-ellipsis` 属性，实现描述文本溢出时自动省略。
- 新增 `description-tooltip` 实现描述文本溢出时，鼠标悬停时是否显示完整描述内容的提示。

**Dialog 组件**

- 新增 `size` 属性，支持自定义弹窗尺寸 (small, medium, large)，提供更多布局选择。
- 新增最大高度限制，当弹窗内容高度超过视窗高度时，弹窗内容区域可滚动。

**Drawer 组件**

- 新增 `size` 属性，支持自定义弹窗尺寸 (small, medium, large)，提供更多布局选择。

**Tree 组件**

- 优化 `block-node` 样式，提升节点展示的视觉效果和用户体验。

**Breadcrumb 面包屑组件**

- 新增固定（sticky）功能，启用后背景色由透明自动切换为白色，确保导航栏在滚动时保持清晰可见。

**Class UI 库**

- 新增样式库示例（Demo），帮助开发者更直观地了解和使用各类样式。

**指令**

- 新增 `v-loading` 指令，方便在组件中集成加载状态显示。
- 新增 `v-tooltip` 指令，简化悬浮提示信息的添加与管理。

#### Fix

**MapSelect 组件**

- 修复初始化时 `modelValue` 仅包含经纬度导致回显失败的问题。
- 修复 `v-model` 绑定值为 `undefined` 时，偶尔不触发更新的问题。

**Breadcrumb 组件**

- 修复面包屑在特定情况下文本换行的问题。

#### Breaking Change

**CardHeader 组件**

- 插槽和属性 `subtitle` 重命名为 `description`。

---

## 1.2.54

#### Feature

- 新增 `Spacing` --- 增加 1~64 所有尺寸的边距。

---

## 1.2.50

#### Feature

- **Empty 组件**
  - 新增默认图标尺寸属性。
  - 修复图标尺寸不可调整的问题。
  - 调整默认 SVG 样式以移除边框。

---

## 1.2.47

#### Feature

**Card 组件**

- 新增 `bodyPadding` 属性，增加标准化适配。
- 新增 `header` 和 `actions` 属性。
- 新增 `loading` 属性。
- `header` 新增 `subtitle` 属性。

**Tabs 组件**

- 新增 `bodyPadding` 属性。

**Dialog 组件**

- 新增 `bodyPadding` 属性。
- 修复组件弹出后页面出现双层滚动条的问题。

**Descriptions 组件**

- 自动减少底部边距。

---

## 1.2.41

#### Feature

**FilterForm 组件**

- 表单的默认背景色设置为白色。

**Table 组件**

- 优化表格自带分页条底部多余间距问题。

**Card 组件**

- 自动减少未包含头部或顶部分割线情况下的间距。

**Descriptions 组件**

- 优化不同尺寸下的间距问题。

**Breadcrumb 面包屑组件**

- 优化默认样式。

**样式库**

- 新增工具类样式，包括边距设置等。

#### Fix

**FilterForm 组件**

- 修复记忆选项导致表单底部间距异常的问题。

**Search 组件**

- 修复搜索组件重置后无法重置搜索类型的问题。

---

## 1.2.3

#### Breaking Change

**Search 和 FilterForm 组件**

- `model` 属性需通过 `v-model:model` 设置，才能同步 `model` 属性。

**FilterForm 组件**

- 重构，需参考 `demo` 和 `API` 进行调整。

---

## 1.1.3

#### Breaking Change

**Map 和 MapSelect 组件**

- 事件 `init` 参数由 `{value: object, fixedValue: object}` 调整为 `scopeValue`，其中 `scopeValue` 为全量数据。
- 属性 `value` 调整为 `modelValue`，支持 `v-model` 双向绑定且类型不丢失。
- 移除属性 `style`，调整为 `mapStyle`。
- 事件 `init` 和 `change` 的参数限制在 `scopeValue` 范围内。

#### Feature

- 新增 `valueKeyAlias` 和 `valueKeyScope` 属性。
- 新增 `enableGisSearch` 属性。
