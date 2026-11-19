# Cedar Design Web 组件开发规范

> 适用范围：`src/<component>/` 下所有新增 / 重构组件。  
> 本规范由 `button` 与 `divider` 两个组件提炼而来，作为后续组件实现的统一参考。  
> **凡是新组件 PR，必须按本规范落实；若有偏离，需在 PR 描述中说明原因。**
>
> Cedar/Maple 共用的 API、Token、测试、可访问性、SSR 与版本规则以
> `design-ui/standards/` 为准；本文只补充 Cedar 的目录和实现约定。

> 新增 / 调整方向、位置或方位 API，必须先读共享 API 命名规范（工作区文件 `design-ui/standards/api-design.md`），登记语义与值域，并运行仓库根目录 `pnpm check:api-naming`；既有待迁移项不能作为新组件命名先例。

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

背景：本地 `@cedar-design/shared-vue` 的 `createNamespaceFn` 内部把 `'<prefix>-<kebab>'` 转成 PascalCase 作为 `name`，所以 `createNamespace('button').name === 'CButton'`。两端实现遵守 `design-ui/standards/shared-foundation.md`，不再整包转出 rattail。这个值带 `C` 前缀，**天然避开了与 HTML 标签同名时 Vue `<component :is>` 触发的自递归解析**（如果 `name === 'Button'`，Vue 在解析 `<component :is="'button'">` 时会把 `'button'` normalize 成 `'Button'` 命中自身组件，导致无限递归）。

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
- **demo 文件**：`__demos__/<kebab-case>.vue`，例如 `controlled-loading.vue`、`button-group.vue`、`size-inset.vue`。**不允许 camelCase**。

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

Button/SplitButton 的 click 使用普通 Emits 通知，支持 async 监听器，但不使用监听器返回值驱动加载。业务通过 loading（SplitButton 通过 buttonProps.loading）控制等待，并在 finally 中恢复；错误处理使用正常的 Vue 事件错误链。基础 Button 不提供 action 或 autoLoading 任务入口。

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

- **`inset` / `spacing`（divider）**：按分割线方向描述间距。
  - `inset` 是沿分割线方向的两端缩进：水平时左右，竖直时上下；默认不缩进。
  - `spacing` 是垂直于分割线方向的外间距：水平时上下，竖直时左右；默认 `md`。
  - 两者支持五档预设、数值（px）、CSS 长度与 `[start, end]`；标量对称应用，水平方向遵循逻辑起止位置与 RTL。
  - 两端同步迁移源码、类型、调用方、示例、文档、样式和 token；不提供旧属性或 token 别名。
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

需要父子配置继承时（如 `ButtonGroup` ↔ `Button`），统一使用 `@cedar-design/use-vue` 的 `useChildren` / `useParent`：

```ts
// provide.ts
import type { ComputedRef } from "vue";
import { useChildren, useParent } from "@cedar-design/use-vue";

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

API 标题遵守共享 组件结构规范（工作区文件 `design-ui/standards/component-anatomy.md` 的「API 文档标题」章节），中英文均采用 `ComponentName Props / Events / Slots / Methods`，组件名不加尖括号或反引号。每页只保留一个 API 入口，子组件分类平级排列；共享属性按实际组件完整展示，配置类型归入 Types。

示例分组遵守 `design-ui/standards/demo-design.md`：同类功能放在一起，每张案例最多组合三个相关维度，基础案例在前，功能调试在后；两端同步案例名称、说明和源码引用。

固定段落顺序：

````markdown
---
permalink: /components/<component>/
---

# ComponentName

一句话简介。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 组件功能分组

### 同类功能案例

... 按组件能力由简单到复杂、由静态到动态分组

## API

### ComponentName Props

| 属性 | 说明 | 类型 | 默认值 |

### ComponentName Events

### ComponentName Slots

### ComponentGroup Props // 如有

## Types

组件导出以下类型定义

```ts
import type { ComponentProps } from "@cedar-design/ui-vue";
```
````

## CSS Variables

| 变量名 | 默认值 |

````

要求：

- 所有 `<demo src="...">` 路径必须是 `kebab-case`。
- 共享中英文结构的 Demo 通过 `src/__demos__/locale` 的 `useDemoLocale` 读取示例字典，直接跟随文档顶部切换同步的全局语言；中英文文档引用同一个 Demo，不通过 `english` / `locale` 参数或英文包装组件选择语言。
- VuePress 站点入口同步 Cedar 的全局语言，`useDemoLocale(scope)` 已通过 `getLocale()` 响应其变化。Demo 的脚本和模板直接消费该计算值，避免监听语言后赋给本地 ref，或自行比较语言码来选择文案。可参考 `src/section/__demos__/plain.vue`。
- 示例文案按场景维护在 `src/__demos__/locale/zh-cn.ts`、`en-us.ts`，包含标签、选项、说明、无障碍名称及带参数的提示；英文字典通过 `DemoMessages` 校验结构。组件中不混写中英文判断，也不将示例业务文案加入组件库公共语言包。
- 用计算属性读取当前字典中的选项和展示数据；可编辑模型从字典复制初始值，切换语言不得覆盖用户已编辑的数据或修改字典对象。
- 不通过双语 `<span lang>` 或 CSS `[lang]` 选择器实现 Demo 翻译；比较场景标题、公共对比提示统一维护在示例字典的 `comparison-zh-cn.ts` / `comparison-en-us.ts`。日期、时间和数字展示使用同模块的 `formatDemoDate` / `formatDemoTime` / `formatDemoDateTime` / `formatDemoNumber`，跟随顶部语言，避免写死地区或依赖操作系统语言。
- `src/__demos__/locale/__tests__/global-language-audit.spec.ts` 全量检查组件 Demo 的上述约束；生成器输出也须使用相同字典入口，新增比较场景时同步登记字典键。
- 当组件存在"父级配置 + 子级覆盖"机制时，必须在表格下方加 **注意** 段说明继承关系（参考 button README）。
- `orientation` / `inset` / `spacing` 这类有方向语义的 prop，必须显式说明切换 orientation 后的视觉表现。

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
- Vitest 5 使用原生 worker 生命周期，不再维护 0.22 的 jsdom 补丁。默认隔离并行；`pnpm check:test-environment` 验证默认隔离、forks / threads 非隔离，以及同一进程连续重跑时 Vue DOM 与当前 jsdom 的构造器、选择器和点击事件一致。修改测试工具链时必须保留此门禁。
- Vitest 模块缓存放在各测试 root 的 `.cache/vitest/modules`，与工作区其他项目和临时环境门禁隔离；Demo 交互测试按场景动态导入真实组件并注册所需依赖，避免筛选一个测试仍在收集阶段转换整库。
- 单测通过 `scripts/testing/source-dependencies.mjs` 解析工作区 use/shared/icons 源码，图标根包命名导入按实际图标拆分；发布构建产物的契约由发布消费门禁验证，避免单测受清理或重建 `es` / `lib` 目录影响。
- 新增或修改 Demo 后执行 `pnpm check:demo-i18n`：全量扫描 Demo 语言反模式、编译已迁移示例、验证顶部语言切换后的真实组件状态与交互，并验证测试加载环境和 Demo 生成器。目录级收集会自动包含新增的语言回归测试。
- `pnpm quality` 首先执行上述门禁；GitHub `Quality` 工作流在所有 PR 和合并队列上运行，保留检查名 `quality`。CI 契约测试会拦截路径过滤、条件跳过、允许失败以及移除检查的配置变更。仓库管理员须在目标分支的保护规则 / Ruleset 中将 `quality`（GitHub Actions）设为 required status check，才能禁止失败时合并；仅提交工作流不会自动建立远端保护规则。
- 纯文件系统 / 源码契约测试使用 `@vitest-environment node`；同时需要 DOM 和源码读取时，用 `resolve(import.meta.dirname, ...)` 定位文件。Vite 8 会把 `new URL(..., import.meta.url)` 识别为浏览器资源 URL，不能直接交给 Node 文件 API。
- 同级 `afterEach` 默认逆序执行；需要先卸载组件再清空 DOM 时，将这两个步骤放在同一个清理钩子中，避免破坏 Teleport 锚点。

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
- ❌ 组件内部用 `marginTop` / `marginLeft` 等"视觉方位"命名间距 prop 配合 `orientation` 切换 —— 应使用沿线缩进与线外间距命名（`inset` / `spacing`）。

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

- 进度 prop：`modelValue` / `defaultValue`（**1-based**）；不用 `active`。
- 状态：`status: wait | process | finish | error`；子项可覆盖；推导规则 `step < current → finish`。
- 点击：`changeable` 门控 + `onChange(step, ev)` / 普通 `v-model`。
- Step 内容：`title` / `description` / `disabled` + `#icon` / `#description`。
- PC 独有：`type` / `labelPlacement` / `small` / `showLine` / `#node`（移动不实现）。
- 移动移除：`activeColor` / 三态 icon props / `click-step`。

OpenSpec change：`openspec/changes/align-steps-spec/`。

### 主值与非受控初始值约定

主值采用 modelValue/update:modelValue，非受控初始值采用 defaultValue。Tabs、Collapse、Pagination、Steps 支持普通 v-model；Collapse 仍为 name 数组，Pagination 与 Steps 仍从 1 开始。defaultValue 仅创建时读取，不监听后续更新，也不在初始化时回写父级。Pagination 的 pageSize、选择器的 inputValue/open 保留独立具名模型。选项对象默认使用 value/label（树形使用 children），不与组件主值混淆。

主值命名审查范围见 design-ui/audits/primary-model-naming.md：Carousel/TabBar、可选 Tag、图片预览组采用 modelValue/defaultValue；Carousel 与图片预览组公开序号从 1 开始，FloatingPanel 停靠高度采用 modelValue/defaultValue 与普通 v-model；Image 内嵌预览统一 open/defaultOpen。声明式子项 name 不替代选项数据 value/label 或原生表单 name。
