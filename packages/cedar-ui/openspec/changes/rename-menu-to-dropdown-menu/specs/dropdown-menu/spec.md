# DropdownMenu

## Requirements

### Requirement: 临时命令菜单

DropdownMenu MUST 通过任意参考元素打开临时浮层，并由 options 命令树组成命令列表；MenuOption MAY 用于追加手写内容。

#### Scenario: 激活命令

- **WHEN** 用户激活可用菜单项
- **THEN** 组件先请求更新 `modelValue`，再触发 `select(value, option, event)`
- **AND** `hideOnSelect=true` 时请求关闭浮层

### Requirement: 单值状态

DropdownMenu MAY 使用 `modelValue` 标记当前菜单项，但 MUST NOT 暴露 `multiple`、复选框菜单项或父子选择联动。

#### Scenario: 层级 options

- **WHEN** options 含 children
- **THEN** children 生成子菜单
- **AND** 激活叶子项只请求该叶子值，不联动祖先或后代

### Requirement: 数据驱动结构与内容

DropdownMenu MUST 使用 `type: item/group/divider` 与 `children` 描述结构，并允许 label、icon、extra 使用 VNode 或接收 `{ option, active, level }` 的渲染函数。组件 MUST NOT 导出 MenuGroup 或 MenuSubmenu。

#### Scenario: 统一定制选项

- **WHEN** 使用 option-label、option-icon 或 option-extra 作用域插槽
- **THEN** 每个适用选项获得相同的渲染入口和上下文

### Requirement: 破坏性重命名

Cedar MUST 导出 DropdownMenu、DropdownMenuProps 与 DropdownMenuInstance，并提供 `@cedarjs/ui/dropdown-menu` 子路径。旧 Menu 根组件及 `@cedarjs/ui/menu` 子路径 MUST NOT 作为兼容 alias 保留。

#### Scenario: 组件注册

- **WHEN** 安装 Cedar 或单独安装 DropdownMenu
- **THEN** Vue 注册名为 `CDropdownMenu`
- **AND** MenuOption 仍可独立注册和组合使用
- **AND** 样式类、CSS 变量和内部 DOM 标记使用 DropdownMenu 命名
