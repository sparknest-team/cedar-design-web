---
"@cedar-design/ui": patch
"@cedar-design/cli": patch
---

统一按需样式入口依赖，移除跨组件 Less 的重复 CSS，抽离 FieldDecorator 纯 mixin；发布依赖图由构建器直接保留，不再依赖构建后的入口补写。
