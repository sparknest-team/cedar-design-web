---
permalink: /components/icon/
---

# Icon

图标以独立 SVG Vue 组件提供。推荐通过 Resolver 自动按需导入；需要统一尺寸、颜色或旋转时，使用 Icon 容器包裹图标。

## 基础示例

### 基础用法

<demo src="./__demos__/basic-usage.vue"></demo>

## 外观与状态

### 图标尺寸与颜色

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | `inherit` | 图标尺寸与颜色 |
| `color` | 图标颜色 | 图标尺寸与颜色 |
<!-- demo-config-notes:end -->

比较相同图标的尺寸和颜色，旋转/动画与点击行为另行展示。

<demo src="./__demos__/appearance-comparison.vue"></demo>

## 内容与展示

### 旋转与持续旋转

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | `inherit` | 旋转与持续旋转 |
| `rotate` | 旋转角度 | 旋转与持续旋转 |
| `spin` | 是否持续旋转 | 旋转与持续旋转 |
<!-- demo-config-notes:end -->

`rotate` 设置静态角度，`spin` 开启持续旋转动画，两者可以组合使用。

<demo src="./__demos__/rotate-spin.vue"></demo>

### 全部图标

两端使用同一套规范名称。搜索忽略首尾空格和大小写，清空后恢复全部图标。卡片放大展示图标，完整名称可换行；点击或按 Enter / Space 复制对应标签。复制使用浏览器 Clipboard API，需要安全上下文及剪贴板权限；失败时显示错误反馈。

<demo src="./__demos__/catalog.vue"></demo>

## 自定义与插槽

### 自定义图标

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | `inherit` | 自定义图标 |
| `color` | 图标颜色 | 自定义图标 |
<!-- demo-config-notes:end -->

在默认插槽内放入自定义 SVG，尺寸和颜色由 Icon 容器统一控制。

<demo src="./__demos__/custom.vue"></demo>

### 接入 IconPark 自定义项目

IconPark 自定义项目提供的 **SVG Symbol JS** 和 **Web Component JS** 都可以直接接入，不需要逐个导出 SVG，也不需要为每个图标生成 Vue 组件。它们是 SVG 资源方案，与通过 `@font-face` 加载文字字体不同。

`@icon-park/vue-next` 提供的公共图标组件与自定义项目 JS 是不同的资源入口；安装公共图标包不会自动包含团队上传或维护的自定义图标。

| 方式 | 图标资源来源 | 使用方式 | 加载粒度 |
| --- | --- | --- | --- |
| SVG Symbol JS | 自定义项目生成的 JS | 默认插槽放入 `svg` / `use` | 该 JS 包含的图标集合 |
| Web Component JS | 自定义项目生成的 JS | 默认插槽放入自定义元素 | 以生成产物的实现为准，不能假定逐图标加载 |
| 独立 SVG Vue 组件 | 本地图标文件或组件包 | 默认插槽放入 Vue 图标组件 | 按模块导入，具体取决于打包配置 |

建议先使用 SVG Symbol：它可以复用 Icon 容器，并且不需要配置 Vue 自定义元素识别。

**当前 API 边界：** `CIcon` 没有 `symbol` 属性，也不会自动下载、注册或注入 IconPark 资源。本文通过现有默认插槽接入；`name` 只解析当前 Vue 应用已注册的图标组件，不能用于查找 Symbol ID 或 Web Component 图标名称。默认插槽优先于 `name`。

#### SVG Symbol：加载项目 JS

从 IconPark 自定义项目复制 **SVG Symbol** 类型的 JS 地址，在业务应用的 HTML 入口加载一次。例如 Vite 应用的 `index.html`：

```html
<!-- 示例路径：替换为自定义项目生成的 JS 地址，或部署到此路径的本地副本 -->
<script src="/icons/project-symbol.js" defer></script>
```

脚本执行后，应在页面中注入带有 `symbol` 节点的 SVG 集合。组件库不内置业务项目地址；由应用决定使用远程地址还是随应用部署的静态文件。Web Component 和 Symbol 两种 JS 按选定方式加载即可，不需要为了同一个图标集合同时引入两份。

#### SVG Symbol：引用图标

假设脚本注入了 `<symbol id="project-home" viewBox="0 0 48 48">`，可以这样使用。以下路径和 ID 均为示例，以实际生成产物为准。

```vue
<script setup lang="ts">
import { Icon as CIcon } from '@cedar-design/ui-vue'
import '@cedar-design/ui-vue/icon/style'
</script>

<template>
  <c-icon :size="24" color="#1677ff">
    <svg width="1em" height="1em" aria-hidden="true">
      <use href="#project-home" />
    </svg>
  </c-icon>
</template>
```

`href` 指向页面中的完整 Symbol ID，包含 `#`。显示名称、组件库的 `name`、项目中的图标名称不一定等于 Symbol ID；不要自行添加或移除前缀。可在开发者工具中检查 `symbol[id]`。这里使用的是 JS 注入的页面内资源，不能写成 `href="项目.js#project-home"`。

`size` 控制外层字号，内部 SVG 使用 `1em` 跟随尺寸；`rotate`、`spin` 作用于整个容器。没有显式 `size` 时沿用 Icon 的尺寸继承规则。Symbol 应保留生成产物中的 `viewBox`，避免图形裁剪或缩放异常。

#### 在业务层封装简写

如果需要按 ID 传参，可以增加一个业务组件 `ProjectIcon.vue`，无需修改组件库或生成每个图标的 Vue 文件：

```vue
<script setup lang="ts">
import { Icon as CIcon } from '@cedar-design/ui-vue'
import '@cedar-design/ui-vue/icon/style'

defineProps<{ symbol: string }>()
</script>

<template>
  <c-icon>
    <svg width="1em" height="1em" aria-hidden="true">
      <use :href="`#${symbol}`" />
    </svg>
  </c-icon>
</template>
```

业务调用：

```vue
<script setup lang="ts">
import ProjectIcon from './ProjectIcon.vue'
</script>

<template>
  <ProjectIcon symbol="project-home" :size="24" color="#1677ff" />
</template>
```

这里的 `symbol` 属于业务组件 `ProjectIcon`，传值不包含 `#`；`size`、`color`、`rotate`、`spin` 等未声明属性通过 Vue 的单根属性透传交给 `CIcon`。若封装组件增加多个根节点或关闭 `inheritAttrs`，需要显式转发 `$attrs`。`transition` 目前只控制 `CIcon` 的 `name` 切换，不会为插槽内的 Symbol 引用切换提供动画。

#### Web Component：加载与编译配置

也可以加载自定义项目提供的 **Web Component JS**，然后在插槽中使用其注册的元素。以下假设生成产物使用 `iconpark-icon` 标签和 `name` 属性，实际名称、属性及可配置主题以项目生成的使用说明为准。

```html
<!-- 放在业务应用的 HTML 入口；这是 Web Component 版本的 JS -->
<script src="/icons/project-web-component.js" defer></script>
```

在使用该标签的 Vue SFC 的构建配置中，将它识别为自定义元素。Vite 示例：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'iconpark-icon',
        },
      },
    }),
  ],
})
```

把配置合并到现有的 Vue 插件配置中，不要重复添加插件。`isCustomElement` 是编译时选项；使用构建工具时，仅设置 `app.config.compilerOptions` 不能替代上面的配置。如果组件库内部封装了该标签，应在组件库编译时配置；业务源码直接使用时，应在业务构建中配置。

```vue
<template>
  <c-icon :size="24" color="#1677ff">
    <iconpark-icon name="project-home" size="1em"></iconpark-icon>
  </c-icon>
</template>
```

示例沿用项目已有的 `c-icon` 导入或注册配置。外层 `CIcon` 不会自动把主题、线宽等属性传给插槽中的元素；请按生成产物支持的 API 直接设置。若元素使用 Shadow DOM，外部 `.c-icon svg` 样式不能直接设置内部 SVG；尺寸和颜色应通过该元素支持的属性、继承样式或 CSS 变量设置。

#### 尺寸、颜色与多色图标

| 配置 | 实际效果与限制 |
| --- | --- |
| `size` | Symbol 示例通过 `1em` 继承容器尺寸；Web Component 需要确认自身尺寸 API |
| `color` | 只有图形使用 `currentColor` 或支持相应继承机制时才生效 |
| 固定 `fill` / `stroke` | 图形内部写死的颜色不会被外层 `color` 自动覆盖 |
| 多色图标 | 保留原有颜色，不建议对所有路径统一强制覆盖 `fill` 或 `stroke` |
| 主题与线宽 | 取决于生成产物能力，不能把公共 Vue 图标包的属性直接套用到项目 JS |

#### 按需加载与体积

组件的按需引入与图标资源的加载是两件事。使用插槽不会让 `CIcon` 自动依赖整个 IconPark 包，现有 Resolver 的按需导入方式仍然适用；Resolver 也不会根据 `use` 的 ID 自动加载图标资源。

对于一次性注入集合的 Symbol JS，加载单位是整个文件。例如项目文件包含 200 个图标，即使页面只引用 3 个，也会下载并注入该文件中的 200 个图标。`href="#project-home"` 只选择要显示的图形，不会触发单个图标的网络请求。静态脚本不进入业务模块的 tree-shaking 分析，字符串 ID 也不会让未使用的 Symbol 被自动裁剪。

| 目标 | 做法 |
| --- | --- |
| 集合较小、多个页面频繁复用 | 应用入口加载一次，按文件版本复用浏览器缓存 |
| 集合较大、模块之间差异明显 | 在资源侧拆分公共集合和业务集合，在对应路由或模块需要时加载 |
| 希望先渲染页面，再加载图标 | 业务维护加载完成、失败和占位状态，资源可用后显示图标 |
| 必须逐个图标参与打包裁剪 | 使用独立 SVG 模块或 Vue 组件，并验证组件包导出和构建工具的裁剪结果 |

远程 JS 不会进入组件库 npm 包，但仍计入应用实际下载体积。新增或删除图标后需要更新项目产物并处理缓存版本；不要只依据组件库的构建体积判断页面成本。

#### 加载时机、SSR 与可访问性

- 静态脚本应在需要使用图标时可用；动态加载应等待脚本成功执行。Web Component 还可通过 `customElements.whenDefined('iconpark-icon')` 等待元素注册，该方法不负责下载脚本，也不表示资源加载失败会自动结束等待。
- 一个应用统一加载相同资源一次，避免组件每次挂载都创建脚本。多个集合中的 Symbol ID 应保持唯一，避免同名图形互相覆盖或引用错误。
- SSR 环境中，不要在服务端执行依赖 `window`、`document`、`customElements` 的项目脚本。通过 HTML 脚本或客户端生命周期加载；需要条件渲染时，让服务端和客户端首次渲染的占位内容一致。图形资源尚未注入时不会显示，严格要求首屏图标的场景需另行准备服务端内联 Symbol 或独立 SVG。
- 装饰性 SVG 使用 `aria-hidden="true"`。独立传递信息的 SVG 应设置 `role="img"` 和可访问名称；只有图标的按钮应给按钮设置 `aria-label`，不能仅靠图标表达操作。

#### 常见问题

| 问题 | 检查项 |
| --- | --- |
| 图标空白 | 脚本是否成功执行、是否选对 JS 类型、完整 ID 是否存在、容器尺寸是否为零 |
| `Failed to resolve component: iconpark-icon` | 使用标签的源码是否在编译时配置了 `isCustomElement` |
| 图标颜色不变 | 图形是否使用固定颜色，或 Web Component 是否提供了颜色设置接口 |
| 尺寸不跟随 `CIcon` | 内部 SVG / 自定义元素是否使用 `1em`，是否存在固定像素尺寸 |
| 更新项目后仍显示旧图标 | 页面是否加载了新版本 JS，浏览器或 CDN 缓存是否已更新 |
| 本地正常，部署后空白 | 检查静态资源基础路径、网络请求、CSP 的 `script-src` 及脚本执行错误 |
| 多项目图标显示错误 | 检查 Symbol ID 冲突和重复加载，使用资源产物实际提供的唯一 ID |

参考：[Vue 与 Web Components](https://cn.vuejs.org/guide/extras/web-components)、[SVG use 元素](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Reference/Element/use)。

## 交互与控制

### 点击事件

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | `inherit` | 点击事件、动态名称 |
| `color` | 图标颜色 | 点击事件 |
| `name` | 已显式注册的图标名称 | 动态名称 |
| `transition` | 名称切换动画时长（ms） | 动态名称 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/click.vue"></demo>

### 动态名称

`name` 使用短横线名称（例如 `arrow-left`），只查找当前 Vue 应用已注册的图标，不会自动加载图标全集。点击“切换图标”查看名称与图形同步变化。设置默认插槽时，优先显示插槽内容，`name` 不再决定图形。

<demo src="./__demos__/dynamic-name.vue"></demo>

## 生命周期与边界

### 名称切换与生命周期

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `name` | 已显式注册的图标名称 | 名称切换与生命周期 |
| `transition` | 名称切换动画时长（ms） | 名称切换与生命周期 |
| `size` | `inherit` | 名称切换与生命周期 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/lifecycle.vue"></demo>

## API

### 独立图标样式与使用边界

Resolver 自动导入独立图标时会一并引入轻量旋转样式；`importStyle: false` 时由业务自行引入。UI Icon 的样式入口也包含这份样式，不需要加载全部图标。

手动导入独立 SVG 组件时，若使用 `spin`，请在应用入口引入一次：

```ts
import '@cedar-design/icons-vue/style.css'
```

`rotate` 与 `spin` 可以组合；内置旋转遵循减少动态效果设置。`transition` 只控制注册名称的切换，以毫秒数值或数字字符串传入（如 `200` / `"200"`），不解析 `"200ms"` / `"1s"`。默认插槽接管内容后不执行名称切换动画，移除插槽时立即显示最新名称。自定义 `animation-class` 应避免覆盖持续旋转使用的 `transform`，并自行适配减少动态效果设置。

`name` 只查找当前应用在渲染前显式注册的图标，不自动下载资源；挂载后补注册不会自动刷新。容器的原生 `title` 不会传给内部 SVG，需要图像名称时在独立图标上设置 `title`；作为操作入口时使用带可访问名称的 Button。`click` 是普通通知事件，支持 Vue 的 `.once`，不会根据监听器返回的 Promise 管理等待状态。`stroke-*` 只作用于描边，填充或固定多色资源不保证随这些属性变化。


### Icon Props

| 属性            | 说明                   | 类型             | 默认值 |
| --------------- | ---------------------- | ---------------- | ------ |
| name            | 已显式注册的图标名称   | string           | -      |
| size            | `inherit` | number \| string | -      |
| color           | 图标颜色               | string           | -      |
| rotate          | 旋转角度               | number           | -      |
| spin            | 是否持续旋转           | boolean          | false  |
| transition      | 名称切换动画时长（ms） | number \| string | 0      |
| animation-class | 自定义切换动画类名     | string           | -      |

### IconXxx Props

| 属性            | 说明       | 类型                                       | 默认值  |
| --------------- | ---------- | ------------------------------------------ | ------- |
| size            | `inherit` | number \| string                            | -       |
| color           | 图标颜色   | string                                     | -       |
| rotate          | 旋转角度   | number                                     | -       |
| spin            | 是否旋转   | boolean                                    | false   |
| title           | 无障碍标题 | string                                     | -       |
| stroke-width    | 线宽       | number                                     | 4       |
| stroke-linecap  | 端点类型   | 'butt' \| 'round' \| 'square'              | 'butt'  |
| stroke-linejoin | 拐角类型   | 'bevel' \| 'inherit' \| 'miter' \| 'round' | 'miter' |

### Icon Events

| 事件名 | 说明           | 参数                        |
| ------ | -------------- | --------------------------- |
| click  | 点击触发的事件 | (event: MouseEvent) => void |

### Icon Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Types

组件导出以下类型定义

```ts
import type { IconProps, IconInstance } from "@cedar-design/ui-vue";
```

## 使用说明



只解析当前应用已注册的图标。连续切换 name 时只展示最新请求的图标，卸载后停止切换。

两端 Icon 默认继承宿主字号。需要固定 20px 的场景请显式设置 size="20" 或 icon-size 变量；size 属性优先于变量，颜色默认继承宿主。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-icon-size` | `inherit` | `font-size` |
| `--c-icon-spin-duration` | `1s` | `animation` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-icon-size: inherit;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 动效

内置动效遵循 prefers-reduced-motion: reduce：保留内容与状态反馈，关闭装饰性旋转、扫光和波纹。Icon 名称切换直接显示最新值并取消未结束阶段，CSS与JS时长保持一致；自定义动画类由调用方负责适配。自定义动画应遵循用户的减少动态效果偏好。
