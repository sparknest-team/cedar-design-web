---
permalink: /themes/
---

# 主题定制

使用 ThemeProvider 统一管理应用根部和局部区域的主题。theme 接收 light/dark 或品牌预设，style-vars 接收自定义变量；不修改 html。

统一管理主题与 CSS 变量。包裹整个应用时是应用全局主题，包裹子树时是局部主题；两者使用相同的继承规则，不修改 html，也不会影响其他应用根节点。

## 内置主题

| 品牌 | 亮色 | 暗色 |
| --- | --- | --- |
| 默认青绿色 | Themes.default.light | Themes.default.dark |
| 枫叶 | Themes.maple.light | Themes.maple.dark |

## 基础示例

### 预设切换

<demo src="./__demos__/toggle.vue"></demo>

### 变量覆盖

<demo src="../theme-provider/__demos__/basic.vue"></demo>

## 局部主题

### 根部与嵌套

<demo src="../theme-provider/__demos__/local-theme.vue"></demo>

```vue
<template>
  <c-theme-provider :theme="mode">
    <App />
    <c-theme-provider theme="light">
      <Preview />
    </c-theme-provider>
  </c-theme-provider>
</template>
```

`theme` 支持 light/dark 或 Themes 预设对象；省略时继承外层。显式主题替换继承的预设，style-vars 定制仍向内继承。`style-vars` 覆盖主题默认变量，内层同名变量优先，null 清除本层覆盖。显式主题边界会重新计算已加载组件的变量别名。Provider 保留真实包裹元素，可通过 tag 修改；放入已有 Flex/Grid 布局时，可选择合适容器或设置 display: contents。

库内声明式菜单、对话框和浮动内容通过 Vue 上下文继承所属 Provider，挂到 body、自定义 popup-container 或行内都适用。脱离 Provider 创建的命令式服务需要将 popup-container 指向主题区域；第三方 Teleport 需要自行放置主题宿主。跨文档目标需加载该库样式。

## 主题预设

```vue
<script setup lang="ts">
import { Themes } from '@cedar-design/ui'
</script>

<c-theme-provider :theme="Themes.maple.dark">
  <App />
</c-theme-provider>
```

从库根入口导入 Themes。预设和自定义变量通过响应式 Props 更新，不提供直接修改文档根节点的静态方法。显式 style-vars 的优先级高于主题默认值，固定颜色覆盖也会向内继承。

## 安装与默认值

```ts
import { ThemeProvider } from '@cedar-design/ui'
app.use(ThemeProvider)
ThemeProvider.setPropsDefaults({ theme: 'light', tag: 'section', styleVars: () => ({}) })
```

默认值用于之后创建的实例，显式 Props 优先。对象变量为每个实例复制；SSR 输出与客户端相同的主题边界，不持有跨请求的主题状态。

## API

### ThemeProvider Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 亮暗模式或主题预设，省略时继承 | `ThemeProviderTheme` | — |
| style-vars | 本层 CSS 变量，null 清空覆盖 | `StyleVars \| null` | `{}` |
| tag | 包裹元素标签 | `string` | `'div'` |

默认插槽为组件内容，无事件。

## Types

导出 ThemeProvider、themeProviderProps、ThemeProviderProps、ThemeProviderInstance、ThemeProviderDefaults、ThemeProviderTheme、ThemeProviderMode、StyleVarName、StyleVars。变量支持完整 --c- 名称及库前缀驼峰名称；值为 CSS 字符串，尺寸需要单位。

## CSS Variables

| 变量名 | 说明 |
| --- | --- |
| `--c-primary-1` … `--c-primary-10` | 主色阶（映射 brand） |
| `--c-brand-1` … `--c-brand-10` | Brand 色阶 |
| `--c-success-*` / `--c-danger-*` / `--c-warning-*` / `--c-link-*` | 功能色阶 |
| `--c-gray-1` … `--c-gray-10` | 中性色阶 |
| `--c-color-text-1` … `--c-color-text-4` | 文本语义（`c-text-1` … `c-text-4`） |
| `--c-color-bg-1` … `--c-color-bg-5` | 背景语义 |
| `--c-color-fill-1` … `--c-color-fill-4` | 填充语义 |
| `--c-color-border-1` … `--c-color-border-4` | 边框语义 |
| `--c-color-scheme` / `--c-color-body` / `--c-color-text` | 主题切换 / body |

完整色阶见 [色板 Palette](/components/palette/)，语义工具类见 [颜色 Color](/components/style/color/)。

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->
