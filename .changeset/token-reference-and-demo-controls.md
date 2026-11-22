---
'@cedar-design/ui-vue': patch
---

重生成 token 参考表，并按 demo 控制项策略规范化 3 个示例。

- `docs/guide/design-token-reference.md` 由 `renderCatalog` 编译生成，此前落后于当前 token 声明；
  design-ui 的 `check:token-reference` 会断言生成物与声明一致。
- `field-decorator/control-sizes.en-US`、`theme-provider/local-theme`（中英）的 Select
  作为配置项必须包在 `form-item` 内，此前未规范化。
