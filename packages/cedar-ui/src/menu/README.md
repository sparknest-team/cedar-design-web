---
permalink: /components/menu/
---

# Menu 下拉菜单

页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。

---

## 案例

### 基础用法

下拉菜单的基本用法。下拉菜单开启后会为触发元素添加 `c-menu-open` 类名。

<demo src="./__demos__/basic.vue"></demo>

<br/><br/>

### 按钮下拉框

可以使用 `<menu-button>` 组件用来展示右边是额外相关功能菜单的按钮。

<demo src="./__demos__/button.vue"></demo>

<br/><br/>

### 弹出方向

通过 `position` 支持指定 6 种弹出方位，分别是：top: 向上, tl: 左上, tr: 右上, bottom: 下方(默认), bl: 左下, br: 右下。

<demo src="./__demos__/position.vue"></demo>

### 右键菜单

移入区域后，可点击鼠标右键触发。

<demo src="./__demos__/context-menu.vue"></demo>

## API

### `<menu>` Props

| 参数名                      | 描述                             | 类型                                                |   默认值   |
| --------------------------- | -------------------------------- | --------------------------------------------------- | :--------: |
| model-value **(v-model)**   | 选中的值                         | `string \| number \| Record<string, any>`           |    `-`     |
| popup-visible **(v-model)** | 弹出框是否可见                   | `boolean`                                           |    `-`     |
| default-popup-visible       | 弹出框默认是否可见（非受控模式） | `boolean`                                           |  `false`   |
| trigger                     | 触发方式                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`    | `'click'`  |
| position                    | 弹出位置                         | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | `'bottom'` |
| popup-container             | 弹出框的挂载容器                 | `string \| HTMLElement`                             |    `-`     |
| hide-on-select              | 是否在用户选择菜单项后隐藏弹出框 | `boolean`                                           |   `true`   |
| auto-fit-popup-width        | 是否将弹出框宽度设置为触发器宽度 | `boolean`                                           |  `false`   |

### `<menu>` Events

| 事件名               | 描述                         | 参数                                                                          |
| -------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| update:model-value   | 选中值请求更新时触发         | value: `string \| number \| Record<string, any> \| undefined`                 |
| popup-visible-change | 下拉框显示状态发生改变时触发 | visible: `boolean`                                                            |
| select               | 用户选择菜单项时触发；受控模式下是否产生选中态取决于 `model-value` 是否更新 | value: `string \| number \| Record<string, any> \| undefined `<br>ev: `Event` |

### `<menu>` Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
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
| click  | 点击按钮时触发 | ev: `MouseEvent` |

### `<menu-option>` Slots

| 插槽名 | 描述 | 参数 |
| ------ | :--: | ---- |
| icon   | 图标 | -    |

### `<menu-group>` Props

| 参数名 | 描述     | 类型     | 默认值 |
| ------ | -------- | -------- | :----: |
| title  | 分组标题 | `string` |  `-`   |

### `<menu-group>` Slots

| 插槽名 |   描述   | 参数 |
| ------ | :------: | ---- |
| title  | 分组标题 | -    |

### `<menu-submenu>` Props

| 参数名                      | 描述                             | 类型                 |  默认值   |
| --------------------------- | -------------------------------- | -------------------- | :-------: |
| disabled                    | 是否禁用                         | `boolean`            |  `false`  |
| trigger                     | 触发方式                         | `'hover' \| 'click'` | `'click'` |
| position                    | 弹出位置                         | `'rt' \| 'lt'`       |  `'rt'`   |
| popup-visible **(v-model)** | 弹出框是否可见                   | `boolean`            |    `-`    |
| default-popup-visible       | 弹出框默认是否可见（非受控模式） | `boolean`            |  `false`  |
| option-props                | 自定义选项属性                   | `object`             |    `-`    |

### `<menu-submenu>` Events

| 事件名               | 描述                         | 参数               |
| -------------------- | ---------------------------- | ------------------ |
| popup-visible-change | 下拉框显示状态发生改变时触发 | visible: `boolean` |

### `<menu-submenu>` Slots

| 插槽名  |    描述    | 参数 |
| ------- | :--------: | ---- |
| icon    |    图标    | `-`  |
| content | 子菜单内容 | `-`  |
| footer  |    页脚    | `-`  |

### `<menu-button>` Props

| 参数名                      | 描述                             | 类型                                                |  默认值   |
| --------------------------- | -------------------------------- | --------------------------------------------------- | :-------: |
| popup-visible **(v-model)** | 弹出框是否可见                   | `boolean`                                           |    `-`    |
| default-popup-visible       | 弹出框默认是否可见（非受控模式） | `boolean`                                           |  `false`  |
| trigger                     | 触发方式                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`    | `'click'` |
| position                    | 弹出位置                         | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` |  `'br'`   |
| popup-container             | 弹出框的挂载容器                 | `string \| HTMLElement`                             |    `-`    |
| disabled                    | 是否禁用                         | `boolean`                                           |  `false`  |
| type                        | 按钮类型                         | `string`                                            |    `-`    |
| size                        | 按钮大小                         | `string`                                            |    `-`    |
| button-props                | 按钮属性                         | `ButtonProps`                                       |    `-`    |
| hide-on-select              | 是否在用户选择菜单项后隐藏弹出框 | `boolean`                                           |  `true`   |

### `<menu-button>` Events

| 事件名               | 描述                         | 参数                                                                         |
| -------------------- | ---------------------------- | ---------------------------------------------------------------------------- |
| popup-visible-change | 下拉框显示状态发生改变时触发 | visible: `boolean`                                                           |
| click                | 点击按钮时触发               | ev: `MouseEvent`                                                             |
| select               | 用户选择菜单项时触发；受控模式下是否产生选中态取决于 `model-value` 是否更新 | value: `string \| number \| Record<string, any> \| undefined`<br>ev: `Event` |

### `<menu-button>` Slots

| 插槽名  |   描述   | 参数                    |
| ------- | :------: | ----------------------- |
| icon    | 按钮图标 | popupVisible: `boolean` |
| content |   内容   | -                       |
