# AGENTS.md — Cedar Design Web

> 此文件是 AI 编码代理（GitHub Copilot / Claude / Cursor 等）在本仓库工作的统一入口。
> 仓库定位：基于 Vue 3 + TypeScript + Less 的桌面端组件库，注册前缀 `C`，CSS 前缀 `c-`。

## 必读文档（按优先级）

1. **[docs/practices/component-spec.md](docs/practices/component-spec.md)** —— 组件开发规范，所有 `src/<component>/` 下的修改必须先读。
2. **[.github/copilot-instructions.md](.github/copilot-instructions.md)** —— Copilot 自动加载的精简版规范。
3. **[docs/practices/ai-collaboration.md](docs/practices/ai-collaboration.md)** —— AI 协作 / 入口文件机制说明（什么时候该更新哪个文件）。
4. **[openspec/](openspec/)** —— OpenSpec 规范变更工作流；新增 / 修改组件 API 需要走 spec 流程。

## 项目结构速览

```
src/<component>/
  <component>.vue            # 主组件
  index.ts                   # 入口聚合
  props.ts                   # props + 类型
  style/
    index.less               # 主样式
    token.less               # CSS 变量
  __demos__/*.vue            # 文档 demo（kebab-case）
  __tests__/*.test.tsx       # 单测
  README.md                  # 文档（带 frontmatter permalink）
```

## 关键约束（高频踩坑）

- 组件注册名统一用 `createNamespace('<kebab>').name`，不要写死 `'CXxx'`，更不要裸 `'Xxx'`（会与 `<component :is>` 触发自递归 → `RangeError: Invalid string length`）。
- BEM 修饰符必须显式带 `--`：`n('--ghost')` → `c-button--ghost`。
- `classes([cond, truthy, falsy])` **不会自动 unwrap Vue Ref**，写 `block.value` 不要写 `block`。
- CSS 变量必须以 `--c-<component>-` 开头，集中放 `style/token.less`。
- 主样式只读 CSS 变量，颜色/间距常量必须落到 `token.less`。
- `index.ts` 必须导出：`default`、`CompInstance`、`CompProps`、`compProps`、`_CompComponent`。

## 开发命令

| 用途 | 命令 |
| --- | --- |
| 安装依赖 | `yarn` |
| 跑单测 | `yarn vitest run` |
| 跑指定组件 | `yarn vitest run src/<component>` |
| 启动文档 | `yarn dev` |
| 构建 | `yarn build` |

## 与移动端（Maple Design Mobile）的关系

公共 API（如 `Space` 的 `size` 枚举、`Button` 的 `variant` 等）应**两端同步**，以本仓库（PC）为准。
移动端见 `/Users/shuaimeng/Workspace/maple-design-mobile/AGENTS.md`。

## 反模式速查

- ❌ Options-style `defineComponent({ setup() {...} })`
- ❌ 写死 `defineOptions({ name: 'CXxx' })`
- ❌ camelCase demo 文件名
- ❌ 主样式直接写颜色 / 间距常量
- ❌ `props` 内重写联合字面量代替 `_utils/constant.ts` 的 `Status` / `Size` / `Direction`
- ❌ 残留 `console.log`

## 历史教训（不要重蹈）

### Demo / 样例

- demo 里的 icon 必须用 kebab + `c-` 前缀，如 `<c-icon-more />`，**禁止**裸 PascalCase `<IconMore />`——`CedarResolver` 只匹配 `^C[A-Z]`，不会解析裸 `Icon`。
- demo 文件名 kebab-case；`<demo src="./__demos__/xxx.vue">` 路径同名。

### 组件内部

- **Provider 字段忘 `.value`** 会渲染 `[object Object]`（参考 `breadcrumb-item separator` bug）。
- **父子 group 通信不要用 `toRefs(props)`**，类型对不上 `ComputedRef`；用 `computed(() => props.x)`（参考 button-group）。
- **`classes` 不 unwrap Vue Ref**：条件位要写 `block.value`。
- **裸 PascalCase 名与 HTML tag 同名** 会触发 Vue 自递归 → `RangeError: Invalid string length`；统一用 `createNamespace('xxx').name`。

### 批量重命名 / 替换

- 大批量 sed/perl 替换 CSS 变量名、class 名、import 路径时，**正则必须排除**已加前缀、BEM modifier 子串、模板字符串里的 BEM 片段、固定字面量功能类（如 icon 字体激活类）。
- 只匹配 `:root { ... }` 块内、`var(--xxx)` 内、inline `style="--xxx: ..."` 内。

### 测试

- 跑单组件：`yarn vitest run src/<component>`。

更多细节见 [docs/practices/component-spec.md](docs/practices/component-spec.md)。
