---
"@cedar-design/ui": patch
---

清理 Textarea 同源迁移后不再使用的私有尺寸声明和旧 Less 尺寸 mixin；InputTag 直接调用现有原生样式 mixin，ColorPicker 改用同值公开字号 Token，避免跨组件依赖私有变量。
