# Cedar Design Web 组件开发规范

> 适用范围：`src/<component>/` 下所有新增 / 重构组件。  
> 本规范由 `button` 与 `divider` 两个组件提炼而来，作为后续组件实现的统一参考。  
> **凡是新组件 PR，必须按本规范落实；若有偏离，需在 PR 描述中说明原因。**
>
> Cedar/Maple 共用的 API、Token、测试、可访问性、SSR 与版本规则以
> `design-ui/standards/` 为准；本文只补充 Cedar 的目录和实现约定。

---

## 1. 目录结构

每个组件遵循同一骨架（不需要的文件可省略，但**已列出的文件名不得改名**）：

```
src/<component>/
  <component>.vue            # 主组件（必备）
  <component>-group.vue      # 可选：组合组件（如有）
  index.ts                   # 入口：聚合 install + 类型 + 默认导出
  props.ts                   # 集中放 props 与类型定义
  provide.ts                 # 可选：父子上下文 (useChildren / useParent)
  README.md                  # 文档，含 frontmatter `permalink`
  __demos__/*.vue            # 文档用 demo（kebab-case 文件名）
  __tests__/<component>.test.tsx
  __tests__/__snapshots__/   # vitest 快照
  style/
    index.ts                 # 仅做样式入口聚合
    index.less               # 主样式（BEM）
    token.less               # CSS 变量声明
    <subcomp>.less           # 可选：子组件样式
```

---

## 2. 命名规范

### 2.1 组件命名（关键）

**统一**使用 `createNamespace('<kebab-name>')` 返回的 `name` 作为 `defineOptions` / `defineComponent` 的 name，与仓库现有 50+ 个组件保持一致。

背景：rattail 的 `createNamespaceFn` 内部把 `'<prefix>-<kebab>'` 转成 PascalCase 作为 `name`，所以 `createNamespace('button').name === 'CButton'`。这个值带 `C` 前缀，**天然避开了与 HTML 标签同名时 Vue `<component :is>` 触发的自递归解析**（如果 `name === 'Button'`，Vue 在解析 `<component :is="'button'">` 时会把 `'button'` normalize 成 `'Button'` 命中自身组件，导致无限递归）。

#### TSX / 普通 `<script>` 组件

```tsx
import { createNamespace } from '../_utils/global-config'

const { name, n, classes } = createNamespace('breadcrumb')

export default defineComponent({
  name, // => 'CBreadcrumb'
  setup() { ... },
})
```

#### `<script setup>` SFC

`<script setup>` 中 `defineOptions(...)` 的参数会被编译时提升到 setup 之外，**不能引用 `<script setup>` 里 `const` 出来的局部变量**。要么内联调用 `createNamespace(...).name`，要么单独再 destructure 一次：

```vue
<script lang="ts" setup>
import { createNamespace } from "../_utils/global-config";

defineOptions({
  name: createNamespace("button").name, // 内联调用，避免引用局部变量
});

const { n, classes } = createNamespace("button");
</script>
```

**不要**：

- ❌ `defineOptions({ name: 'CButton' })`：写死字符串会随重命名漂移；且若有人误写成 `'Button'`（无 `C` 前缀）会触发上述 `<component :is>` 自递归。
- ❌ `defineOptions({ name: 'Button' })` / 任何与 HTML 标签同名（裸 PascalCase）的写法。
- ❌ 在 `<script setup>` 顶部 `const { name } = createNamespace(...); defineOptions({ name })` —— 编译报 `defineOptions() cannot reference locally declared variables`。

install 时统一拼前缀（`getComponentPrefix(options)` 默认 `'C'`）：

```ts
app.component(componentPrefix + _Button.name, _Button);
```

### 2.2 命名空间与样式前缀

| 项目         | 规则                                                |
| ------------ | --------------------------------------------------- |
| 组件注册名   | `C<PascalName>`，由 install 时 `prefix + name` 拼接 |
| CSS 类前缀   | `c-` （default `CLASS_PREFIX = 'c'`）               |
| Block        | `.c-<component>`                                    |
| Element      | `.c-<component>__<el>`，由 `n('xxx')` 生成          |
| Modifier     | `.c-<component>--<mod>`，由 `n('--xxx')` 生成       |
| CSS 变量前缀 | `--c-<component>-...`                               |

### 2.3 类型 / 文件命名

- **类型名**：标准 PascalCase，缩写也大写。`ButtonVariant`（**不是** `Buttonvariant`）。
- **props 文件**：`props.ts`，导出 `xxxProps`（运行时定义）与 `XxxProps`（`ExtractPropTypes`）。
- **demo 文件**：`__demos__/<kebab-case>.vue`，例如 `auto-loading.vue`、`button-group.vue`、`size-inset.vue`。**不允许 camelCase**。

---

## 3. SFC 写法

**统一使用 `<script setup lang="ts">`**，禁止使用 `defineComponent({ setup() {...} })` 的 Options-style 写法。

```vue
<template>
  <div :class="classes(n(), [variant, n(`--variant-${variant}`)])">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { createNamespace } from "../_utils/global-config";
import { componentProps } from "./props";

defineOptions({
  name: createNamespace("component-name").name,
});

const { n, classes } = createNamespace("component-name");

const props = defineProps(componentProps);
</script>
```

模板根元素 class 一律通过 `classes(n(), [cond, n('--xxx')], …)` 组装，**禁止**手写字符串拼接 class。组件必需的布局与 `box-sizing` 写在组件自身样式中，不依赖全局工具类或可选的原子化 preset。

---

## 4. Props 规范

### 4.1 文件结构

`props.ts`：

```ts
import type { ExtractPropTypes, PropType } from "vue";
import { Status, Size } from "../_utils/constant";
import { defineListenerProp } from "../_utils/components";

export type ButtonVariant = "default" | "text" | "outline" | "tonal";

export const buttonProps = {
  /**
   * 按钮主题色
   */
  status: {
    type: String as PropType<Status>,
  },
  // ...
  onClick: defineListenerProp<(e: Event) => void | Promise<any>>(),
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
```

### 4.2 通用约定

| 项目                | 规则                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| 注释                | 每个 prop 上方写中文 JSDoc，说明用途                                                               |
| 复用枚举            | `Status` / `Size` / `Direction` 等优先从 `_utils/constant.ts` 导入，**不要**在组件里再写一遍字面量 |
| 普通通知事件        | 在 `emits` 中声明并通过 `emit` 触发；不得再声明同名 `onXxx` Prop                                   |
| 控制回调 Prop       | 仅返回值会控制后续流程时使用 `defineListenerProp<...>()`，统一命名 `beforeXxx` / `request`         |
| 父子继承的布尔 prop | `default: undefined`（如 `disabled` / `stacked`），让子组件能识别"未显式传入"再回退到 group 配置   |
| 普通布尔 prop       | `default: false`                                                                                   |
| 颜色 / 文案类       | `String` 类型，默认值 `''` 或不写（保持 `undefined`，便于 `??` 回退）                              |

### 4.3 通用 prop 语义（必须遵守）

Button 和 SplitButton 的 `onClick` 是消费 Promise 返回值以驱动 `autoLoading` 的控制回调例外，保留 `@click` 用法，不同时 emit click；SplitButton 直接透传两组点击回调给 Button。

某些 prop 在多个组件中反复出现，**必须保持一致语义**，组件不得自行赋予不同含义：

| Prop                                   | 类型                                            | 含义                                                                                                                           |
| -------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `status`                               | `Status`                                        | 主题色（primary / secondary / info / success / warning / danger / tertiary）                                                   |
| `variant`                              | 组件自有联合类型                                | 视觉变体（default / outline / text / tonal …）                                                                                 |
| `mode`                                 | 组件自有联合类型                                | 布局/形态互斥（如 Badge `floating\|inline`、Progress `line\|circle`）；**勿用 `type` 表示布局**                                |
| `size`                                 | `Size` (`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`) | 尺寸，默认 `'md'`                                                                                                              |
| `disabled`                             | `boolean`                                       | 禁用，子组件 `default: undefined` 用于继承父级                                                                                 |
| `block`                                | `boolean`                                       | 是否撑满父容器宽度                                                                                                             |
| `loading`                              | `boolean`                                       | 加载中态，禁止触发 click                                                                                                       |
| `autoLoading`                          | `boolean`                                       | onClick 返回 Promise 时自动接管 loading 态                                                                                     |
| `round`                                | `boolean`                                       | 圆形                                                                                                                           |
| `color`                                | `string`                                        | 自定义背景色（透传到 CSS 变量或 inline style）                                                                                 |
| `textColor`                            | `string`                                        | 自定义文字色                                                                                                                   |
| `elevation`                            | `boolean \| number`                             | 阴影/海拔等级，`true` = 默认等级，`false` = 无阴影，`0~24` = 显式等级                                                          |
| `vertical`                             | `boolean`                                       | 是否垂直排列                                                                                                                   |
| `orientation`                          | `'horizontal' \| 'vertical'`                    | 方向，默认 `'horizontal'`                                                                                                      |
| `open`                                 | `boolean`                                       | 浮层/模态/下拉开合（受控）；非受控用 `defaultOpen`；v-model 事件 `update:open`。**不含** Tag/Badge 等内容显隐（那些用 `show`） |
| `show`                                 | `boolean`                                       | **内容**显隐（Tag、Badge 等）；非受控用 `defaultShow`；v-model 事件 `update:show`。**勿**用于浮层开合                          |
| `popupContainer`                       | `string \| HTMLElement \| …`                    | Portal 挂载目标；**勿**用公开名 `teleport`                                                                                     |
| `overlay` / `overlayClosable` / `escToClose` | `boolean`                                  | 模态背景层显示 / 点背景层关闭 / ESC 关闭；配套 `overlayClass`/`overlayStyle`。真正的字符或裁剪掩码仍使用 `mask`                  |
| `modelValue`                           | 组件自有                                        | 表单主值（**含 Upload**）；配合 `update:modelValue` 与 `change`/`onChange`。Upload **勿**用 `fileList` 作 v-model              |
| `placement`                            | 组件自有联合类型                                | 锚点浮层的首选方位，或 Drawer 的进入侧；通常参与 flip/shift 等定位算法                                                         |
| `position`                             | 组件自有                                        | 自身布局上下文、屏幕区域或坐标位置；Badge、Notification、Timeline 可使用                                                       |
| `disabledDate`                         | `(date) => boolean`                             | 返回 `true` = **禁用**该日期；**勿**用 `allowedDates`（极性相反）                                                              |
| `before*`                              | `Function`                                      | 拦截钩子（`beforeChange`/`beforeClose`/…）；**勿**用 `onBefore*` 作拦截器 prop 名                                              |
| 多词属性                               | 定义使用 camelCase，模板与 Props 表展示使用 kebab-case | TypeScript 中写 `maxLength`、`autoPlay`；模板与文档 Props 表写 `max-length`、`auto-play`                                      |

> 公共 API 与 Maple 对齐时以本仓库（PC）为准；破坏性重命名不保留 alias。详见 `openspec/changes/align-shared-prop-naming/`。

文档中的组件 Props 与 Events 表描述的是 Vue 模板 API，属性名和事件名必须展示为 kebab-case。命令式配置对象、类型字段和 JavaScript/TypeScript 示例仍使用 camelCase。

### 4.4 特殊 prop 语义说明

- **`sizeX` / `sizeY`（divider）**：命名锚定**几何方向**而非视觉方向 ——
  - `sizeX` 始终代表"沿 x 轴方向上的间距"（即左右间距），`sizeY` 始终代表"沿 y 轴方向上的间距"（即上下间距）。
  - 当 `orientation='horizontal'` 时，分割线视觉上呈水平延伸，"沿 x 轴的间距"对应**两端 inset**，"沿 y 轴的间距"对应**上下 margin**。
  - 当 `orientation='vertical'` 时，分割线视觉上呈竖直延伸，二者视觉上"互换"。
  - **这是有意行为**，规范要求：当组件存在"方向 + 双轴间距"两类 prop 时，**间距 prop 按几何轴命名**（`sizeX` / `sizeY`），并在 README 显式说明 `orientation` 切换后视觉表现如何变化。
  - 反例：`marginTop` / `marginBottom` / `marginLeft` / `marginRight` 这种按"视觉方位"命名的 prop 在带 `orientation` 切换时会语义错乱，**禁止**使用。
- **`hairline` 与 `thickness` 互斥**：同时出现时以 `hairline` 优先，组件内必须显式判断（参考 [src/divider/divider.vue](src/divider/divider.vue)）。

---

## 5. Index 入口规范

`index.ts` 必须按以下模板编写，所有列出的导出都需保留：

```ts
import type { App } from "vue";
import type { CedarOptions } from "../_utils/types";
import { setGlobalConfig, getComponentPrefix } from "../_utils/global-config";
import _Comp from "./comp.vue";
import _CompSub from "./comp-sub.vue"; // 可选
import { compProps, compSubProps } from "./props";

const Comp = Object.assign(_Comp, {
  Sub: _CompSub, // 可选：把子组件挂为静态成员
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Comp.name, _Comp);
    app.component(componentPrefix + _CompSub.name, _CompSub);
  },
});

// 实例类型
export type CompInstance = InstanceType<typeof _Comp>;
export type CompSubInstance = InstanceType<typeof _CompSub>;

// props 类型与公共类型
export type { CompProps, CompSubProps, CompVariant } from "./props";

// 运行时 props 与子组件命名导出
export { compProps, compSubProps };
export { _CompSub as CompSub };

// 内部组件别名（resolver / 内部引用使用）
export const _CompComponent = Comp;

export default Comp;
```

> `_CompComponent` 与 `compProps` 等命名导出是 resolver / 内部组件互相引用时的入口，**必须导出**。

---

## 6. 父子组件通信

需要父子配置继承时（如 `ButtonGroup` ↔ `Button`），统一使用 `@cedarjs/use` 的 `useChildren` / `useParent`：

```ts
// provide.ts
import type { ComputedRef } from "vue";
import { useChildren, useParent } from "@cedarjs/use";

export interface XxxGroupProvider {
  status: ComputedRef<Status>;
  variant: ComputedRef<XxxVariant>;
  // ...
}

export const XXX_GROUP_BIND_KEY = Symbol("XXX_GROUP_BIND_KEY");

export function useXxxs() {
  const { bindChildren, childProviders, length } = useChildren<
    XxxGroupProvider,
    null
  >(XXX_GROUP_BIND_KEY);
  return { length, items: childProviders, bindItems: bindChildren };
}

export function useXxxGroup() {
  const { bindParent, parentProvider, index } = useParent<
    XxxGroupProvider,
    null
  >(XXX_GROUP_BIND_KEY);
  return { index, group: parentProvider, bindGroup: bindParent };
}
```

子组件读取 group 配置时必须用 `??` 兜底：`props.size ?? group.size.value`。

---

## 7. 样式规范

### 7.1 文件组织

- `style/index.ts` **只做引入**，不要写逻辑：
  ```ts
  import "../../style/index.less";
  import "./index.less";
  ```
- `style/index.less` 顺序：`@import './token.less'` → 主体样式 → 末尾可 `@import './子模块.less'`。
- `style/token.less` 顶部 `@import '../../style/theme/index.less'`，在 `:root` 下声明所有 `--c-<component>-*` 变量。

### 7.2 写法约定

- 公共基础与依赖组件只在 `style/index.ts` 中 import，不在 Less 再次内嵌相同 CSS。Less 只聚合自身规则及纯变量 / mixin；复用 mixin 单独拆文件。开发与发布保持相同依赖图，详见 `design-ui/standards/styling-and-bem.md`。

- 主体样式**只读 CSS 变量，不写常量值**；颜色 / 间距常量必须落到 `token.less` 的 CSS 变量上。
- 主题色 / 暗色用 `@color-primary-6` 等 less 变量 + CSS 变量双层落地，方便主题切换。
- 重复的 status / size / variant 组合用 Less mixin 批量生成（参考 button 的 `.status() / .size()`、divider 的 `.generate-size-styles()`）。
- 交互态选择器抽出可读 alias，例如：
  ```less
  @interactive-selector: ~":not(.c-button--disabled):not(.c-button--loading)";
  ```
- BEM 写法严格按 `&--modifier` / `&__element`，不要写 `.c-button.c-button--xxx` 之类的全名嵌套。

---

## 8. 文档规范（README.md）

固定段落顺序：

````markdown
---
permalink: /components/<component>/
---

# ComponentName

一句话简介。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>
... 其他案例

## API

### `<Component>` Props

| 属性 | 说明 | 类型 | 默认值 |

### `<Component>` Events

### `<Component>` Slots

### `<ComponentGroup>` Props // 如有

## 类型定义

组件导出以下类型定义

```ts
import type { ComponentProps } from "@cedarjs/ui";
```
````

### 样式变量

| 变量名 | 默认值 |

````

要求：

- 所有 `<demo src="...">` 路径必须是 `kebab-case`。
- 当组件存在"父级配置 + 子级覆盖"机制时，必须在表格下方加 **注意** 段说明继承关系（参考 button README）。
- `orientation` / `sizeX` / `sizeY` 这类有方向语义的 prop，必须显式说明切换 orientation 后的视觉表现。

---

## 9. 测试规范

每个组件至少包含：

```tsx
// __tests__/<component>.test.tsx
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Component } from '../index'

describe('Component', () => {
  test('render', async () => {
    const wrapper = mount(Component)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
````

- 文件后缀统一 `.test.tsx`。
- 基础渲染快照必须有；后续可以追加交互 / props 切换测试。

---

## 10. 反模式清单（请勿出现）

- ❌ `defineOptions({ name: 'CButton' })` 写死前缀，install 时会重复拼成 `CCButton`。
- ❌ `defineComponent({ name, ... })` 中 `name` 取自 `createNamespace().name`（值是 BEM 类名而非组件名）。
- ❌ 在 `defineOptions` / 模块顶层调用 `createNamespace()` 后取 `name` 用作组件 name —— 见第 2.1 节解释。
- ❌ Options-style `defineComponent({ setup() {...} })`（统一用 `<script setup lang="ts">`）。
- ❌ camelCase demo 文件名（如 `autoLoading.vue`）。
- ❌ 类型名小写缩写（如 `Buttonvariant`）。
- ❌ 直接在主样式里写颜色 / 间距常量，绕过 `token.less` 的 CSS 变量。
- ❌ 在 props 中直接写联合字面量而不复用 `Status` / `Size` 等公共枚举。
- ❌ 提交残留的 `console.log`。
- ❌ `index.ts` 漏导出 `xxxProps` / `_XxxComponent`。
- ❌ 组件内部用 `marginTop` / `marginLeft` 等"视觉方位"命名间距 prop 配合 `orientation` 切换 —— 必须用几何轴命名（`sizeX` / `sizeY`）。

## 附录 A：跨端对齐案例 — Alert

Alert 是首个走完 OpenSpec 流程完成 PC ↔ Mobile API 对齐的组件，可作为后续组件双端对齐的参考样本。

**核心约定**：

- 类型枚举与 `Status` 对齐：`info | success | warning | danger | default`（不再用 `error`，状态色统一使用 `danger`；`Message` 的 `type` 才使用 `error`）。
- 视觉变体三档：`standard`（浅色填充 + 描边）、`tonal`（浅色填充无描边）、`outlined`（透明 + 描边）。
- 通用属性：`color` / `elevation` / `closable`（注意拼写）/ `showIcon` / `banner` / `center` / `title` / `message`。
- 通用插槽：`default` / `icon` / `title` / `action` / `close-icon`（统一命名，废弃 `close-element`）。
- 通用事件：`close(e)` / `after-close()`。
- 样式实现：5 类型 × 3 变体颜色矩阵全部走 `--c-alert-*` / `--mp-alert-*` token，主样式不写常量。
- 类型导出齐备：`AlertProps` / `AlertType` / `AlertVariant` / `AlertInstance` 与 `alertProps` / `_AlertComponent`。

OpenSpec change：`openspec/changes/align-alert-spec/`。

## 附录 B：跨端对齐案例 — Steps

Steps 按 Pagination 语义完成 PC ↔ Mobile API 对齐（进度序号，不是 Tabs 的 key 选中）。

**核心约定**：

- 进度 prop：`current` / `defaultCurrent`（**1-based**）；不用 `active`。
- 状态：`status: wait | process | finish | error`；子项可覆盖；推导规则 `step < current → finish`。
- 点击：`changeable` 门控 + `onChange(step, ev)` / `v-model:current`。
- Step 内容：`title` / `description` / `disabled` + `#icon` / `#description`。
- PC 独有：`type` / `labelPlacement` / `small` / `showLine` / `#node`（移动不实现）。
- 移动移除：`activeColor` / 三态 icon props / `click-step`。

OpenSpec change：`openspec/changes/align-steps-spec/`。
