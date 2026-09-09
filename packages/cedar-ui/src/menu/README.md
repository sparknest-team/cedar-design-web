---
permalink: /components/menu/
---

# Menu 下拉菜单

页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。

---

## 案例

### 基础用法

使用默认插槽传入触发元素，通过 `content` 插槽定义菜单选项。菜单开启后会为触发元素添加 `c-menu-open` 类名。

<demo src="./__demos__/basic.vue"></demo>

<br/><br/>

### 选中值与选择事件

使用 `v-model` 管理选中值。`select` 返回本次操作的选项值、原始选项信息和事件；先触发 `update:modelValue`，再触发 `select`。

<demo src="./__demos__/selection.vue"></demo>

<br/><br/>

### 选项树与多选

`options` 支持 `label/value/children/disabled`，可与 content 插槽同时使用；`fieldNames` 可以映射字段。`multiple` 模式下 modelValue 为数组，缺省按空数组处理。选中分支会联动未禁用的后代，不要求子菜单已经展开；部分选中分支再次点击会取消该分支的选择。禁用分支及其后代不会参与联动。

<demo src="./__demos__/options-multiple.vue"></demo>

选中态完全由 modelValue 决定；父组件不接受更新时，行和复选框均保持原状态。异步 options 暂时没有包含的已选值会保留。多选不会因为 hideOnSelect 自动关闭菜单。

根菜单支持上下键、Home/End、Enter；关闭时在触发元素按上下键可打开并定位首尾选项。子菜单通过右键进入、左键或 Escape 返回；Escape 每次只关闭最上层并恢复焦点。

### 触发方式

支持点击和悬浮触发；默认为 `click`。

<demo src="./__demos__/trigger.vue"></demo>

<br/><br/>

### 禁用状态

可以禁用整个菜单，也可以只禁用某个选项。

<demo src="./__demos__/disabled.vue"></demo>

<br/><br/>

### 选项分组

使用 `<menu-group>` 对相关选项进行分组。

<demo src="./__demos__/group.vue"></demo>

<br/><br/>

### 多级菜单

使用 `<menu-submenu>` 创建多级菜单，子菜单也可以单独设置触发方式。

<demo src="./__demos__/submenu.vue"></demo>

<br/><br/>

### 自定义选项内容

通过 `icon` 和 `suffix` 插槽添加图标、快捷键等辅助内容。

<demo src="./__demos__/option-content.vue"></demo>

<br/><br/>

### 高度限制

`popup-max-height` 支持默认限制、自定义像素高度以及不限制高度。

<demo src="./__demos__/popup-height.vue"></demo>

<br/><br/>

### 受控打开状态

使用 `v-model:open` 从外部控制菜单的打开状态。

<demo src="./__demos__/controlled.vue"></demo>

<br/><br/>

### 页脚

通过 `footer` 插槽在菜单底部插入自定义内容。

<demo src="./__demos__/footer.vue"></demo>

<br/><br/>

### 弹出方向

通过 `placement` 支持指定 6 种弹出方位，分别是：top: 向上, tl: 左上, tr: 右上, bottom: 下方(默认), bl: 左下, br: 右下。

<demo src="./__demos__/placement.vue"></demo>

### 右键菜单

移入区域后，可点击鼠标右键触发。需要同时设置 `trigger="contextMenu"` 和 `align-point`。

<demo src="./__demos__/context-menu.vue"></demo>

## API

### `<menu>` Props

| 参数名                      | 描述                             | 类型                                                |   默认值   |
| --------------------------- | -------------------------------- | --------------------------------------------------- | :--------: |
| options | 选项树 | `MenuOptionData[]` | `[]` |
| field-names | 选项字段映射 | `MenuFieldNames` | `-` |
| multiple | 是否多选 | `boolean` | `false` |
| model-value **(v-model)**   | 选中的值                         | `string \| number \| boolean \| Record<string, any> \| any[]`           |    `-`     |
| open **(v-model)** | 弹出框是否可见                   | `boolean`                                           |    `-`     |
| default-open       | 弹出框默认是否可见（非受控模式） | `boolean`                                           |  `false`   |
| trigger                     | 触发方式                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`    | `'click'`  |
| placement                    | 弹出位置                         | `MenuPosition`（标准十二方位） | `'bottom'` |
| popup-container             | 弹出框的挂载容器                 | `string \| HTMLElement \| false`                             |    `-`     |
| popup-max-height            | 弹出框最大高度；`true` 使用默认高度，`false` 不限制，传入 `number` 为像素值 | `boolean \| number`                  |   `true`   |
| hide-on-select              | 是否在用户选择菜单项后隐藏弹出框 | `boolean`                                           |   `true`   |
| auto-fit-popup-width        | 是否将弹出框宽度设置为触发器宽度 | `boolean`                                           |  `false`   |
| disabled                    | 是否禁用                         | `boolean`                                           |  `false`   |
| align-point                 | 弹出层是否跟随鼠标               | `boolean`                                           |  `false`   |

### `<menu>` Events

| 事件名               | 描述                         | 参数                                                                          |
| -------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| update:model-value   | 选中值请求更新时触发；多选返回数组 | value: `MenuValue`                 |
| open-change | 下拉框显示状态发生改变时触发 | open: `boolean`                                                            |
| select               | 用户选择菜单项时触发；受控模式下是否产生选中态取决于 `model-value` 是否更新 | value: `string \| number \| Record<string, any> \| undefined`<br>option: `{ value, label?, disabled? }`<br>ev: `Event` |

### `<menu>` Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 触发元素 | -    |
| content | 内容 | -    |
| footer  | 页脚 | -    |

### `<menu-option>` Props

| 参数名   | 描述                                      | 类型                     | 默认值  |
| -------- | ----------------------------------------- | ------------------------ | :-----: |
| label    | 选项显示内容，不传 `value` 时也作为选项值 | `string\|number`         |   `-`   |
| value    | 选项值                                    | `string\|number\|object` |   `-`   |
| disabled | 是否禁用                                  | `boolean`                | `false` |

### `<menu-option>` Events

| 事件名 | 描述           | 参数             |
| ------ | -------------- | ---------------- |
| click  | 点击选项时触发 | ev: `MouseEvent` |

### `<menu-option>` Slots

| 插槽名  | 描述     | 参数 |
| ------ | :------: | ---- |
| default | 选项内容 | -    |
| icon   | 图标     | -    |
| suffix | 后缀     | -    |

### `<menu-group>` Props

| 参数名 | 描述     | 类型     | 默认值 |
| ------ | -------- | -------- | :----: |
| title  | 分组标题 | `string` |  `-`   |

### `<menu-group>` Slots

| 插槽名 |   描述   | 参数 |
| ------ | :------: | ---- |
| title  | 分组标题 | -    |
| default | 分组内容 | -    |

### `<menu-submenu>` Props

| 参数名                      | 描述                             | 类型                 |  默认值   |
| --------------------------- | -------------------------------- | -------------------- | :-------: |
| disabled                    | 是否禁用                         | `boolean`            |  `false`  |
| trigger                     | 触发方式                         | `'hover' \| 'click'` | `'click'` |
| placement                    | 弹出位置                         | `'right-start' \| 'left-start'`       |  `'right-start'`   |
| open **(v-model)** | 弹出框是否可见                   | `boolean`            |    `-`    |
| default-open       | 弹出框默认是否可见（非受控模式） | `boolean`            |  `false`  |
| option-props                | 自定义选项属性                   | `object`             |    `-`    |

### `<menu-submenu>` Events

| 事件名               | 描述                         | 参数               |
| -------------------- | ---------------------------- | ------------------ |
| open-change | 下拉框显示状态发生改变时触发 | open: `boolean` |

### `<menu-submenu>` Slots

| 插槽名  |    描述    | 参数 |
| ------- | :--------: | ---- |
| default | 子菜单触发内容 | `-`  |
| icon    |    图标    | `-`  |
| content | 子菜单内容 | `-`  |
| footer  |    页脚    | `-`  |


### 浮层偏移与实例方法

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| popup-class | 浮层类名 | `string \| array \| object` | - |
| offset-x | 屏幕水平偏移，数字为 px | `string \| number` | 0 |
| offset-y | 屏幕垂直偏移，数字为 px | `string \| number` | 0 |

长度字符串使用现有长度工具转换。上述偏移是屏幕坐标轴偏移，保留菜单原有的 4px 主轴间距，不改变 Trigger.popupOffset 的语义。

实例提供 `open()`、`close()`、`resize()`。open 在禁用时不执行；受控 open 只发出更新请求，resize 重新计算定位。


## 同源主体与子菜单

Menu、MenuOption、MenuGroup、MenuSubmenu 和内部面板使用对应的同源主体，各库独立发布；保留本库的原生样式及交互默认值。`options` 递归与 `content` 插槽可混用，子菜单共享选择上下文和同层关闭逻辑。

| 新增/对齐 API | 说明 | 默认值 |
| --- | --- | --- |
| `Menu.Submenu` / `MenuSubmenu` | 公开子菜单；`default` 为触发项，`content` 为子项，支持 icon/suffix/footer 插槽 | — |
| `unmount-on-close` | Menu 与 MenuSubmenu 关闭后卸载内容 | `true` |
| 子菜单 `trigger` | 支持 click/hover/focus/contextMenu，与根菜单相同的触发类型 | `click` |
| `close-on-click-reference` | 根菜单打开时再次点击参考元素是否关闭 | `true` |
| `setReference(reference?)` | 根菜单设置外部参考元素；不传恢复默认参考元素 | — |

根菜单提供 open/close/resize/setReference 方法；子菜单提供 open/close/allowClose 方法。导出 MenuOptionProps、MenuGroupProps、MenuSubmenuProps、MenuSubmenuInstance。根菜单统一分发 open/opened/close/closed、click-outside 和 key-escape；`update:open` 与 `open-change` 仍是请求，父级拒绝更新时不修改受控状态。

ArrowRight 展开并聚焦子项，ArrowLeft/Escape 关闭当前层并恢复焦点；空格键松开时选择一次。函数 label 接收原始 option 和 checked，无 label/value 的插槽选项回退到文本。原有 select(value, option, event) 与 MenuOption click 事件保持兼容。
