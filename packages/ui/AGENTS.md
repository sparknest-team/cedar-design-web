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

工具链：Node 26.13.1（`.nvmrc` / `.node-version` / Volta；pnpm 通过 `.npmrc` 固定脚本和子进程运行时），pnpm 9.6.0，Vitest / UI / V8 coverage 5.1.0，Vite 8.3.8。仓库根目录执行下列命令。

| 用途 | 命令 |
| --- | --- |
| 安装依赖 | `pnpm install` |
| 跑单测 | `pnpm test` |
| 跑指定组件 | `pnpm --dir packages/ui exec vitest run src/<component>` |
| 启动文档 | `pnpm dev` |
| 构建 npm 包（根目录含依赖包） | `pnpm build:lib` |
| 构建文档 | `pnpm build:doc` |
| 构建 npm 包及文档 | `pnpm build` |
| 完整本地 CI（含 lint、测试、CLI / resolver、构建与发布包检查） | 仓库根目录 `pnpm quality`；先按同级目录安装 Cedar、Maple、design-ui，契约检查依赖两端源码 |
| CLI 入口生成与样式依赖回归 | 仓库根目录 `pnpm check:cli` |
| Resolver 真实自动导入回归 | 仓库根目录 `pnpm check:resolver` |
| 文档生成、源码资产及开发生命周期回归 | 仓库根目录 `pnpm check:doc-pipeline` |
| 生产文档亮暗主题、交互和源码回归 | 先 `pnpm build:doc`，再于仓库根目录运行 `pnpm check:docs-theme`；首次运行需 `pnpm exec playwright install chromium`，CI 自动安装浏览器 |
| 全组件生产浏览器回归 | 构建后运行 `pnpm check:docs-components`；显式覆盖清单见 `design-ui/browser/contracts.mjs`，新增组件必须补行为契约；输出 `artifacts/docs-components/cedar/coverage.json` |
| 全库运行时依赖与 HMR 兜底门禁 | 仓库根目录 `pnpm check:runtime-dependencies`（公共契约见 `design-ui/standards/component-anatomy.md`） |
| shared 发布运行时、类型和体积回归 | 仓库根目录 `pnpm check:shared`（公共契约见 `design-ui/standards/shared-foundation.md`） |

构建环境、发布产物消费行为与 CI 工具链遵守 `design-ui/standards/build-and-ci.md`；不能用自定义 NODE_ENV 编译发布包，也不能把入口版本当成子进程版本的证明。

## 与移动端（Maple Design Mobile）的关系

公共 API（如 `Space` 的 `size` 枚举、`Button` 的 `variant` 等）应**两端同步**，以本仓库（PC）为准。
移动端见 `/Users/shuaimeng/Workspace/maple-design-mobile/AGENTS.md`。

正式发布前处于 API 收敛期：组件改造确定最终 API 后，应同步迁移两端源码、调用方、Demo、文档、类型和测试并直接删除旧 API；不要保留 deprecated alias、双写或运行时兼容分支。正式发布后再恢复 SemVer 弃用周期，具体以 `design-ui/standards/release-and-compatibility.md` 为准。

## 反模式速查

- ❌ 写死 `defineOptions({ name: 'CXxx' })`
- ❌ camelCase demo 文件名
- ❌ 主样式直接写颜色 / 间距常量
- ❌ `props` 内重写联合字面量代替 `_utils/constant.ts` 的 `SemanticStatus` / `ComponentSize` / `Direction`
- ❌ 残留 `console.log`

## 历史教训（不要重蹈）

### Demo / 样例

- demo 里的 icon 必须用 kebab + `c-` 前缀，如 `<c-icon-more />`，**禁止**裸 PascalCase `<More />`——`CedarResolver` 只匹配 `^C[A-Z]`，不会解析裸 `Icon`。
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

- 跑单组件：`pnpm --dir packages/ui exec vitest run src/<component>`。
- Vitest 非隔离模式的 Vue/jsdom 批次要求见 `docs/practices/component-spec.md` §9；回归入口为仓库根目录 `pnpm check:test-environment`。

更多细节见 [docs/practices/component-spec.md](docs/practices/component-spec.md)。

## 浏览器兼容性

构建后执行 `pnpm check:compatibility`，运行三引擎完整生产回归。原生版本和移动真机发布验收见 `design-ui/standards/browser-compatibility.md`（同级仓库）。使用 `pnpm compatibility:native:init` 创建待验收报告，`pnpm check:compatibility:release` 核对最终发布产物与原生证据。模拟手机不等于真机通过。

## 包名与框架边界

包目录使用职责名，所有内部包（含私有包）以 -vue 结尾；与 React 的源码、CSS、token、preset、shared 和构建依赖完全独立。`pnpm check:packages` 验证目录、名称和直接依赖边界。

## Vue 运行时版本兼容

开发环境使用 catalog 固定的 Vue 稳定版，发布最低兼容 Vue 3.2.47。源码检查运行 `pnpm check:vue-compat:source`；构建后运行 `pnpm check:vue-compat`。新语法、声明降级、消费版本矩阵与 SSR 边界统一见同级 `design-ui/standards/build-and-ci.md` 的「Vue 开发版本与消费兼容性」。
