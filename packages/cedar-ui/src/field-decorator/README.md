# FieldDecorator

表单触发器外壳（与 Maple `FieldDecorator` **同名同职责骨架**）。

## 职责

- variant / size / disabled / error / focus
- prefix / default / suffix 槽
- 边框层（`__border` / `__border-state`）

## 消费者

Input、Textarea、InputTag、InputLabel（Select/Cascader 经 SelectView）、**DatePicker / TimePicker 触发器**（`_components/picker`）。

内容（原生 input、tags、展示文本、range 双输入）放入 default slot；**不要在消费者里再画 `__border`**。

## 与 Maple 的对齐 / 平台差

| 项 | Cedar | Maple | 说明 |
|---|---|---|---|
| 组件名 | `FieldDecorator` | `FieldDecorator` | 对齐 |
| variant | `filled` \| `outlined` \| `standard`，默认 **filled** | 同枚举，默认 **standard** | 默认值平台差 |
| size | `xs` \| `sm` \| `md` \| `lg` \| `xl`，默认 `md` | 壳：`small` \| `normal` | 映射：`sm↔small`，`md↔normal` |
| 浮动 hint / line | 无（Form.Item 外置 label） | 有 | 平台差 |
| clear | 消费者绘制 | 壳内置 | 平台差 |
| Token | `--c-field-*` | `--mp-field-*` | 共享语义键对齐，hint 几何留 Maple |

## Token 共享语义（两侧同后缀）

`color-text` / `placeholder-text` / `text-disabled` / `focus` / `blur` / `error` / `prefix-text` / `suffix-text` / `icon-clear`  
`border-radius` / `border-width` / `padding-x` / `size-icon` / `size-icon-clear`  
`variant-filled-bg(+-hover|-focus|-disabled|-error)`  
`variant-outlined-border-color(+-hover|-focus|-disabled|-error)`  
`variant-standard-line-size(+-focus)` / `variant-standard-line-color(+-focus|-error|-disabled)`
