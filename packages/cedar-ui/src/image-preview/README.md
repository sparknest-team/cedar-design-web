---
permalink: /components/image-preview/
---

# ImagePreview

图片预览、多图切换与命令式调用。

## 案例

### 自定义预览操作栏

通过设置 `actionsLayout` 可以调整预览操作栏中功能按钮的顺序，同时可以过滤功能按钮，只有在 `actionsLayout` 中的按钮才会出现。

<demo src="../image/__demos__/custom-preview-actions.vue"></demo>

### 多图预览（包裹 Image）

<demo src="../image/__demos__/preview-group.vue"></demo>

### 多图预览（数据驱动 images）

<demo src="../image/__demos__/component-preview-group.vue"></demo>

### 多图预览（命令式 / 受控）

<demo src="./__demos__/images-alias-group.vue"></demo>

### 单独使用预览组件

`image-preview` 可单独使用，需要手动控制 `open`。

<demo src="../image/__demos__/component-preview.vue"></demo>

### 挂载节点

可以通过 `popupContainer` 指定预览挂载的父级节点。

<demo src="../image/__demos__/preview-popup-container.vue"></demo>

### 命令式预览

通过 `previewImage` 函数可在任意位置打开预览，适合上传、消息流等场景。

<demo src="../image/__demos__/imperative-preview.vue"></demo>

### 预览配置透传

通过 `preview-props` 为 Image 内嵌预览传递配置。

<demo src="./__demos__/preview-props.vue"></demo>

### 受控预览状态

<demo src="./__demos__/controlled-preview.vue"></demo>

## API

详见 [Image 文档](/components/image/) 中的 `<image-preview>`、`<image-preview-group>` 与 `previewImage` 章节。
