## 1. PC 端补齐（cedar-design-web）

- [x] 1.1 修复 `src/button/style/index.less` outline hover 写死的 `border-color: red` 调试遗留（恢复为 `var(...)`）
- [ ] 1.2 检查 `src/button/style/token.less`，为 `status="default"` 补齐 `--c-button-status-default-text-color` / `--c-button-status-default-bg-color` / 各变体衍生 token，避免主样式 `var()` 落空
- [ ] 1.3 复核 `src/button/index.ts` 是否齐备：`default` / `ButtonGroup` / `ButtonInstance` / `ButtonGroupInstance` / `ButtonProps` / `ButtonGroupProps` / `ButtonVariant` / `buttonProps` / `buttonGroupProps` / `_ButtonComponent`
- [ ] 1.4 复核 `src/button/button.vue` 与 `button-group.vue` 注册名是否使用 `createNamespace('button').name` / `createNamespace('button-group').name`
- [ ] 1.5 复核 `src/button/props.ts` 是否复用 `_utils/constant.ts` 的 `Status` / `Size`，移除任何字面量联合
- [ ] 1.6 跑 `yarn vitest run src/button` 全绿（如 token 调整导致快照变化，`-u` 一次并 diff review）
- [ ] 1.7 更新 `src/button/README.md` props 表，明确 `status` / `variant` / `size` / `htmlType` 完整枚举与默认值

## 2. 移动端 props.ts 重写（packages/ui）

- [ ] 2.1 在 `src/button/props.ts` 移除 `type: ButtonType`，新增 `status: PropType<Status>`（导入移动端的 `Status` 等价类型，如无则在 `utils/constant.ts` 新增并与 PC 对齐）
- [ ] 2.2 移除 `text: Boolean` / `outline: Boolean`，新增 `variant: PropType<ButtonVariant>`（`default | text | outline | tonal`）
- [ ] 2.3 重命名 `size` 枚举：导出 `ButtonSize = 'xs' | 'sm' | 'md' | 'lg'`
- [ ] 2.4 重命名 `nativeType` 为 `htmlType`，类型不变
- [ ] 2.5 新增 `component: 'button' | 'a'`，默认 `'button'`
- [ ] 2.6 新增 `stacked: { type: Boolean, default: undefined }`
- [ ] 2.7 `disabled` 默认值改为 `default: undefined`（与 PC / Group 兜底语义一致）
- [ ] 2.8 顶部为每个 prop 加中文 JSDoc
- [ ] 2.9 导出 `buttonProps`、`ButtonProps`、`ButtonVariant`、`ButtonStatus`、`ButtonSize`

## 3. 移动端 ButtonGroup 同步

- [ ] 3.1 `props.ts` 中 `buttonGroupProps`：`type` → `status`，`size` 取值改为 `xs|sm|md|lg`，`variant` 加入并默认 `'default'`
- [ ] 3.2 `provide.ts`（如无则新建）：用 `computed(() => props.x)` 而非 `toRefs` 暴露 `status / variant / size / disabled / stacked / vertical / elevation / color / textColor`
- [ ] 3.3 `ButtonGroup.vue` 注册名内联 `createNamespace('button-group').name`

## 4. 移动端 Button.vue 实现重写

- [ ] 4.1 切到 `<script setup lang="ts">`（如已是则跳过）
- [ ] 4.2 `defineOptions({ name: createNamespace('button').name })`
- [ ] 4.3 模板根元素改为 `:is="component"`，根据 `component === 'button'` 决定是否渲染原生 `type` 属性
- [ ] 4.4 替换所有 `props.type` 为 `props.status`；替换 `props.text` / `props.outline` 为 `props.variant === 'text' / 'outline'`
- [ ] 4.5 替换 `props.nativeType` 为 `props.htmlType`
- [ ] 4.6 类组装一律 `classes(n(), n('$--box'), [cond, n('--xxx')], …)`，禁止字符串拼接
- [ ] 4.7 子读取 group 配置加 `??` 兜底：`props.size ?? group.size?.value ?? 'md'`、`props.status ?? group.status?.value ?? 'default'` 等
- [ ] 4.8 loading 节点 / icon 节点位置与 PC 行为一致

## 5. 移动端样式与 token

- [ ] 5.1 `src/button/button.less` 中所有 `&--<old type>` 选择器改名为 `&--status-<status>`
- [ ] 5.2 `&--text` / `&--outline` 选择器改为 `&--variant-text` / `&--variant-outline`，新增 `&--variant-tonal` / `&--variant-default`
- [ ] 5.3 `&--mini` / `&--small` / `&--normal` / `&--large` 改为 `&--size-xs/sm/md/lg`
- [ ] 5.4 检查 CSS 自定义属性，全部以 `--mp-button-*` 前缀，集中在 `:root` / 主题文件
- [ ] 5.5 不要把 BEM modifier 当 token 加 `mp-` 前缀（参见仓库历史教训）

## 6. 移动端入口与导出

- [ ] 6.1 `src/button/index.ts` 导出齐备：`default` / `ButtonGroup` / `ButtonInstance` / `ButtonGroupInstance` / `ButtonProps` / `ButtonGroupProps` / `ButtonVariant` / `ButtonStatus` / `ButtonSize` / `buttonProps` / `buttonGroupProps` / `_ButtonComponent` / `_ButtonGroupComponent`

## 7. 移动端 demo / 文档 / 测试

- [ ] 7.1 `example/index.vue`：所有 `type=` 改 `status=`、布尔 `text` / `outline` 改 `variant=`、`size` 取值改新枚举
- [ ] 7.2 `docs/zh-CN.md`：props 表全量刷新，顶部加 BREAKING 迁移表（参考 `design.md` Migration Plan）
- [ ] 7.3 `__tests__/button.spec.js`：用例与快照同步迁移；执行 `... vitest run src/button -u` 一次刷快照并 diff review
- [ ] 7.4 仓库内全局 grep 是否有其它 demo 或测试残留 `type="primary"` 等旧用法

## 8. 跨仓库联动与发布前

- [ ] 8.1 在 `cedar-design-web/CHANGELOG.md` 与 `maple-design-mobile/CHANGELOG.md` 各加一条 BREAKING 段
- [ ] 8.2 跑两端完整测试套件：
  - PC：`yarn vitest run`
  - 移动：`cd packages/ui && npx vitest run --config /Users/shuaimeng/Workspace/maple-design-mobile/packages/cli/lib/node/config/vitest.config.js`
- [ ] 8.3 `openspec verify --change align-button-spec` / `openspec status --change align-button-spec` 全绿后 archive
