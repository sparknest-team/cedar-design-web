## 1. Cedar (PC) — alert 重构

- [ ] 1.1 新建 `src/alert/props.ts`：定义 `AlertType` / `AlertVariant`，导出 `alertProps`（含 `type` / `variant` / `title` / `message` / `showIcon` / `closable` / `banner` / `center` / `color` / `elevation` / `onClose` / `onAfterClose`），所有 prop 写中文 JSDoc。
- [ ] 1.2 重写 `src/alert/alert.vue` 为 `<script setup lang="ts">`，`defineOptions({ name: createNamespace('alert').name })` 内联；模板根元素用 `classes(n(), n(\`--\${type}\`), n(\`--\${variant}\`), [banner, n('--banner')], [center, n('--center')], …)` 组装；保留 `<transition>` 退出动画并发出 `onAfterClose`。
- [ ] 1.3 关闭按钮槽统一为 `close-icon`，删除旧 `close-element` slot；`type='default'` 在无 `icon` slot 时不渲染 icon 容器；`color` 通过内联 `background-color` 注入。
- [ ] 1.4 新建 `src/alert/style/`：`index.ts`（仅 `import '../../style/index.less'; import './index.less'`）+ `index.less`（按 `--c-alert-*` var 写主样式）+ `token.less`（声明所有 `--c-alert-*` 变量，覆盖 5 种 type × 3 种 variant 的颜色组合，使用 mixin 批量生成）。
- [ ] 1.5 重写 `src/alert/index.ts`：导出 `default` / `AlertInstance` / `AlertProps` / `AlertType` / `AlertVariant` / `alertProps` / `_AlertComponent`。
- [ ] 1.6 更新 `src/alert/__demos__/`：现有 demo 文件中的 `type="error"` → `"danger"`、`type="normal"` → `"default"`、`closeable` → `closable`、`close-element` slot → `close-icon`；新增 demo 演示 `variant`、`color`、`elevation`。
- [ ] 1.7 更新 `src/alert/README.md`：刷新 props / events / slots 表，新增 `variant` / `color` / `elevation` / `default` 类型说明，标注 BREAKING 迁移点。
- [ ] 1.8 重写 `src/alert/__tests__/alert.test.tsx`：基础 mount 快照 + 五种 type modifier 类断言 + 三种 variant modifier 类断言 + `closable=true` 点击触发 `onClose` / `onAfterClose` + `showIcon=false` 不渲染 icon + `banner` / `center` modifier。
- [ ] 1.9 在 `src/components.ts` / `src/resolver.ts`（如有命名变更）确认注册无影响；运行 `yarn vitest run src/alert` 通过。

## 2. Maple (Mobile) — alert 同步对齐

- [ ] 2.1 改 `packages/maple-ui/src/alert/props.ts`：`closeable` → `closable`；`AlertType` 加入 `'default'`；新增 `showIcon`（默认 `true`）/ `banner` / `center` / `onAfterClose`；保留 `variant` / `color` / `elevation`；所有 prop 补中文 JSDoc。
- [ ] 2.2 改 `packages/maple-ui/src/alert/Alert.vue` 为 `<script setup lang="ts">`，`defineOptions({ name: createNamespace('alert').name })` 内联；补 `action` slot、关闭区 slot 重命名为 `close-icon`；`type='default'` 无 icon slot 时不渲染 icon 容器；包裹关闭过渡（`<transition>` 或 collapse-transition）并发出 `onAfterClose`。
- [ ] 2.3 改 `packages/maple-ui/src/alert/alert.less`：补 `--banner` / `--center` / `--default` 三组 modifier 样式；新增 token 在 `:root` 下声明（保持 `--mp-alert-*` 前缀，**不要**误前缀化 `&--xxx` BEM 修饰符）。
- [ ] 2.4 检查 `packages/maple-ui/src/alert/index.ts`：导出齐 `default` / `AlertInstance` / `AlertProps` / `AlertType` / `AlertVariant` / `alertProps` / `_AlertComponent`（缺 `AlertInstance` 需补）。
- [ ] 2.5 更新 `packages/maple-ui/src/alert/example/index.vue`：`closeable` → `closable`；新增 `default` 类型 / `banner` / `center` / `action` slot / `onAfterClose` 示例。
- [ ] 2.6 更新 `packages/maple-ui/src/alert/docs/zh-CN.md`：props 表新增条目、BREAKING 迁移说明、案例区演示。
- [ ] 2.7 更新 `packages/maple-ui/src/alert/__tests__/alert.spec.js`：补 `default` 类型 / `closable` 拼写 / `banner` / `center` / `onClose` / `onAfterClose` 用例。
- [ ] 2.8 在 `packages/maple-ui` 下运行 `npx vitest run --config /Users/shuaimeng/Workspace/maple-design-mobile/packages/maple-cli/lib/node/config/vitest.config.js src/alert` 通过。

## 3. 收尾与文档

- [ ] 3.1 cedar `CHANGELOG.md` 添加条目，标注 BREAKING：`type="error"`→`"danger"`、`type="normal"`→`"default"`、`close-element` slot 移除（用 `close-icon`）、`emits.close/afterClose` 改为 `onClose`/`onAfterClose` listener prop。
- [ ] 3.2 mobile `CHANGELOG.md` 添加条目，标注 BREAKING：`closeable`→`closable`、新增 `default` 类型 / `banner` / `center` / `showIcon` / `onAfterClose` / `action` slot / `close-icon` slot。
- [ ] 3.3 在 `docs/practices/component-spec.md` 末尾追加"Alert 两端对齐案例"短章节，链回本 change 路径，作为后续组件对齐参考。
- [ ] 3.4 运行 `openspec validate align-alert-spec --strict` 通过；准备 archive。
