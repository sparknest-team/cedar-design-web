# Cedar Design Token 规范

## 命名冻结

以下约定为正式命名标准。同一语义只保留一个正式名，**不提供旧名别名或 fallback**。

### 1. 全局 primitive

定义于 `src/style/theme/css-variables.less`（颜色见 `src/style/color/css-variables.less`），格式：

```text
--c-<category>-<name>
```

常见 category：`size`、`spacing`、`border-width`、`border-radius`、`font-size`、`font-weight`、`transition-*`、`z-index`、`shadow`，以及色板/语义色 `color` / `c-text-1` 等。

Less 仅负责组织和编译样式，不再维护 `@__size-*` 原始值或 `@size-*` 映射层。组件应直接消费 `--c-*`，默认值只在 `css-variables.less` 中声明一次。

### 2. 组件 token

```text
--c-<component>-…
```

- 必须带 `c-` 前缀，禁止 `--tabs-*`、`--button-*` 这类无前缀变量。
- 不得直接引用另一组件的 token（例如 Button 不得读 `--c-input-*`）。
- 表单共享外壳约定使用 `--c-field-*`（Input / Textarea / InputTag / SelectView 等共用）。

### 3. 片段顺序

```text
component → variant/status/size → interaction state → property
```

示例：

```css
--c-button-size-md-height
--c-button-status-primary-bg
--c-button-variant-outline-status-primary-hover-border-color
--c-field-variant-filled-bg-hover
```

### 4. 属性与状态用词

| 偏好                                           | 避免（新 token）                |
| ---------------------------------------------- | ------------------------------- |
| `border-radius`                                | 裸 `radius`                     |
| `bg`（背景色简写）                             | 与 `background-color` 混用      |
| `-hover-` / `-disabled-` / `-focus-`（连字符） | `_hover`、`_disabled`、`_focus` |

### 5. ColorPicker 前缀

组件 token 统一为 `--c-color-picker-*`。

`--c-color-*` 保留给全局色板与语义色，不得用作 ColorPicker 组件前缀。

### 6. 主样式消费方式

`style/index.less` 只通过组件 `--c-*` 消费：

```less
color: var(~"--c-button-status-primary-bg");
```

- 静态变量优先使用标准 CSS 形式 `var(--c-…)`；只有 Less 插值生成变量名时使用 `var(~'--c-…')`。
- 已迁移组件禁止新增 `@comp-*` 类 Less token。
- 禁止为颜色、尺寸、间距、圆角、阴影、时长写魔法数字；结构性零值、百分比与布局算法值可直接写。

Token 在 `style/token.less` 集中声明；主样式只读 token。BEM modifier（如 `&--disabled`）不是 token，不得加 token 前缀。

### 7. 重命名

Token 重命名必须同步：**源码 + 文档 + 测试**。同一语义只留一个正式名，不做向后兼容别名。

---

## Token 层级（摘要）

| 层级                    | 形态                    | 落点                                                               |
| ----------------------- | ----------------------- | ------------------------------------------------------------------ |
| 全局 primitive / 语义色 | `--c-<category>-<name>` | `style/theme/css-variables.less`、`style/color/css-variables.less` |
| 组件 token              | `--c-<component>-…`     | 各组件 `style/token.less`                                          |

新增组件不得创建无 `--c-` 前缀的 token。
