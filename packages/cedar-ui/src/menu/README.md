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

使用 `v-model` 管理选中值。`select` 事件会返回选中值、选项信息和原始事件。

<demo src="./__demos__/selection.vue"></demo>

<br/><br/>

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
| model-value **(v-model)**   | 选中的值                         | `string \| number \| Record<string, any>`           |    `-`     |
| open **(v-model)** | 弹出框是否可见                   | `boolean`                                           |    `-`     |
| default-open       | 弹出框默认是否可见（非受控模式） | `boolean`                                           |  `false`   |
| trigger                     | 触发方式                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`    | `'click'`  |
| placement                    | 弹出位置                         | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | `'bottom'` |
| popup-container             | 弹出框的挂载容器                 | `string \| HTMLElement`                             |    `-`     |
| popup-max-height            | 弹出框最大高度；`true` 使用默认高度，`false` 不限制，传入 `number` 为像素值 | `boolean \| number`                  |   `true`   |
| hide-on-select              | 是否在用户选择菜单项后隐藏弹出框 | `boolean`                                           |   `true`   |
| auto-fit-popup-width        | 是否将弹出框宽度设置为触发器宽度 | `boolean`                                           |  `false`   |
| disabled                    | 是否禁用                         | `boolean`                                           |  `false`   |
| align-point                 | 弹出层是否跟随鼠标               | `boolean`                                           |  `false`   |

### `<menu>` Events

| 事件名               | 描述                         | 参数                                                                          |
| -------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| update:model-value   | 选中值请求更新时触发         | value: `string \| number \| Record<string, any> \| undefined`                 |
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
| placement                    | 弹出位置                         | `'rt' \| 'lt'`       |  `'rt'`   |
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
