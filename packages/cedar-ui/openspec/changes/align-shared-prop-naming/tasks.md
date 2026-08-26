## 1. 规范落盘

- [x] 1.1 更新 `docs/practices/component-spec.md` §4.3
- [x] 1.2 `specs/shared-prop-naming/spec.md` MUST / MUST NOT
- [x] 1.3 `MIGRATION.md` 迁移表 + codemod 草案

## 2. Cedar P0：开合 + 遮罩 + Upload

- [x] 2.1–2.6 Trigger/Dialog/Drawer/Upload 及消费方（见前批）

## 3. Maple P0：开合 + 挂载 + 遮罩 + 大小写 + 钩子

- [x] 3.1–3.5 Popup 基础及消费方；maxLength；beforeChange
- [x] 3.6 Menu 去掉 `popupVisible`/`position` 双 API，只留 `open`/`placement`

## 4. Maple P1：日期/时间极性

- [x] 4.1–4.2 `allowedDates`→`disabledDate`（极性翻转）
- [x] 4.3 `allowedTime`→`disabledTime`（极性翻转；移动端保持 `(n)=>boolean` 形状）
- [x] 4.4 Uploader `maxlength`→`maxFiles`

## 5. 后续批次（已完成）

- [x] 5.1 Trigger 族 `position`→`placement`；Popover `escToClose`；Cascader `update:open`
- [x] 5.2 Maple Switch `active*`→`checked*`
- [x] 5.3 `fieldNames` 统一；Progress/Avatar/Carousel/Rate/BackTop/Watermark/Result/Empty/Badge.mode/Link.status/Loading.tip
- [x] 5.4 Image Preview 去 alias；Search/Transfer 去兼容别名
- [x] 5.5 Drawer/Popconfirm 组件 props `beforeOk`/`beforeCancel`；Config `onBefore*` 保留并文档区分
- [x] 5.6 审计残留清零：Trigger `onOpenChange`、Maple ImagePreview `open`、Dialog/Uploader `before*`、Search↔Menu、Checkbox/Radio `value`、types/docs

## 刻意保留的端差异 / 例外

- Badge.`show` / Tag.`visible`
- Maple `DisabledTime` 形状 vs Cedar DatePicker Date-based `disabledTime`（同名同极性，签名不同）
- Maple 端专属：elevation / ripple / safeArea / FieldDecorator 色
- Cedar 端专属：default* 非受控 / filterable(Select) / virtualList / word-limit
- DrawerConfig / 命令式 config 的 `onBeforeOk` 字段（映射到组件 `beforeOk`）
- Signature.`lineWidth`（笔触宽度，非 Progress）
- `site/` / `umd/` 需重新 build
