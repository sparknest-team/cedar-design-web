---
permalink: /components/upload/
---

# Upload

## 案例

### 基础用法

<br>

<demo src="./__demos__/basic.vue"></demo>

### 已上传的文件列表

可以指定默认的已上传文件列表

<demo src="./__demos__/upload-list.vue"></demo>

### 照片墙

通过设置`list-type="picture-card"`开启照片墙模式

<demo src="./__demos__/picture-card.vue"></demo>

### 拖拽上传

通过设置`draggable`开启对拖拽的支持
<demo src="./__demos__/draggable.vue"></demo>

### 图标列表样式

通过设置`list-type="picture"`开启图片列表样式

<demo src="./__demos__/picture.vue"></demo>

### 上传前校验

`beforeUpload`会在每一个文件上传之前执行，如果返回`false`或Promise.reject，那么将会取消当前文件的上传。

<demo src="./__demos__/before-upload.vue"></demo>

### 移除前校验

`on-before-remove`会在每一个文件移除之前执行。如果返回`false`或者`Promise.reject`那么会取消当前文件的操作。

### 限制上传数量

通过`limit`限制上传的最大数量。超出后上传按钮会隐藏。

<demo src="./__demos__/limit.vue"></demo>

### 自定义上传节点

可以通过插槽`upload-button`传入自定义内容作为文件上传的触发节点。

<demo src="./__demos__/custom-upload-node.vue"></demo>

### 自定义图标

自定义图标

<demo src="./__demos__/custom-icon.vue"></demo>

### 自定义上传请求

可以通过 custom-request 实现自定义上传请求

<demo src="./__demos__/custom-request.vue"></demo>

### 自定义预览

通过设置`show-link`为`false`，可以关闭链接打开功能，并通过`file-name`插槽自定义预览

<demo src="./__demos__/custom-preview.vue"></demo>

### 文件夹上传

可以通过`directory`开启文件夹上传

<demo src="./__demos__/directory.vue"></demo>

### 批量/手动上传

通过设置`custom-request`，并调用`upload`的`submit`方法，可以实现手动上传

<demo src="./__demos__/batch.vue"></demo>

## API

### Upload Props

| 属性                    | 说明                                                                                                                                      | 类型                                                                                        | 默认值                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| file-list **(v-model)** | 文件列表                                                                                                                                  | `FileItem[]`                                                                                | `-`                                                                    |
| default-file-list       | 默认的文件列表（非受控状态）                                                                                                              | `FileItem[]`                                                                                | `[]`                                                                   |
| accept                  | 接收的上传文件类型，具体参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#htmlattrdefaccept '_blank') | `string`                                                                                    | `-`                                                                    |
| action                  | 上传的 URL                                                                                                                                | `string`                                                                                    | `-`                                                                    |
| disabled                | 是否禁用                                                                                                                                  | `boolean`                                                                                   | `false`                                                                |
| multiple                | 是否支持多文件上传                                                                                                                        | `boolean`                                                                                   | `false` <br>若`limit=1`则固定为false                                   |
| directory               | 是否支持文件夹上传（需要浏览器支持）                                                                                                      | `boolean`                                                                                   | `false`                                                                |
| draggable               | 是否支持拖拽上传                                                                                                                          | `boolean`                                                                                   | `false`                                                                |
| tip                     | 提示文字                                                                                                                                  | `string`                                                                                    | `-`                                                                    |
| headers                 | 上传请求附加的头信息                                                                                                                      | `Record<string, string>`                                                                    | `-`                                                                    |
| data                    | 上传请求附加的数据                                                                                                                        | `Record<string, string \| Blob>\| ((fileItem: FileItem) => Record<string, string \| Blob>)` | `-`                                                                    |
| name                    | 上传的文件名                                                                                                                              | `string \| ((fileItem: FileItem) => string)`                                                | `-`                                                                    |
| with-credentials        | 上传请求是否携带 cookie                                                                                                                   | `boolean`                                                                                   | `false`                                                                |
| custom-request          | 自定义上传行为                                                                                                                            | `(option: RequestOption) => UploadRequest`                                                  | `-`                                                                    |
| limit                   | 限制上传文件的数量。`0`表示不限制                                                                                                         | `number`                                                                                    | `0`                                                                    |
| auto-upload             | 是否自动上传文件                                                                                                                          | `boolean`                                                                                   | `false`                                                                |
| show-file-list          | 是否显示文件列表                                                                                                                          | `boolean`                                                                                   | `true`                                                                 |
| show-remove-button      | 是否显示删除按钮                                                                                                                          | `boolean`                                                                                   | `true`                                                                 |
| show-retry-button       | 是否显示重试按钮                                                                                                                          | `boolean`                                                                                   | `true`                                                                 |
| show-cancel-button      | 是否显示取消按钮                                                                                                                          | `boolean`                                                                                   | `true`                                                                 |
| show-upload-button      | 是否显示上传按钮                                                                                                                          | `boolean \| { showOnExceedLimit: boolean }`                                                 | `true` <br>若开启了 `draggable` 则默认为 `{ showOnExceedLimit: true }` |
| show-preview-button     | 照片墙是否显示预览按钮                                                                                                                    | `boolean`                                                                                   | `true`                                                                 |
| download                | 是否在 `<a>` 链接上添加 download 属性                                                                                                     | `boolean`                                                                                   | `false`                                                                |
| show-link               | 在列表模式下，如果上传的文件存在 URL 则展示链接。如果关闭仅展示文字并且点击可以触发 `preview` 事件。                                      | `boolean`                                                                                   | `true`                                                                 |
| image-loading           | `<img>` 的原生 HTML 属性，需要浏览器支持                                                                                                  | `'eager' \| 'lazy'`                                                                         | `-`                                                                    |
| list-type               | 图片列表类型                                                                                                                              | `'text' \| 'picture' \| 'picture-card'`                                                     | `'text'`                                                               |
| response-url-key        | Response 中获取图片 URL 的 key，开启后会用上传的图片替换预加载的图片                                                                      | `string \| ((fileItem: FileItem) => string)`                                                | `-`                                                                    |
| custom-icon             | 自定义图标                                                                                                                                | `CustomIcon`                                                                                | `-`                                                                    |
| image-preview           | 是否使用 ImagePreview 组件进行预览                                                                                                        | `boolean`                                                                                   | `false`                                                                |
| on-before-upload        | 上传文件前触发                                                                                                                            | `(file: File) => boolean \| Promise<boolean \| File>`                                       | `-`                                                                    |
| on-before-remove        | 移除文件前触发                                                                                                                            | `(fileItem: FileItem) => Promise<boolean>`                                                  | `-`                                                                    |
| on-button-click         | 点击上传按钮触发（如果返回 Promise 则会关闭默认 input 上传）                                                                              | `(event: Event) => Promise<FileList> \| void`                                               | `-`                                                                    |
| progress-mode           | 上传进度模式                                                                                                                              | `'loading' \| 'progress'`                                                                   | `'loading'`                                                            |

<br>

### Upload Events

| 事件名       | 描述                         | 参数                                           |
| ------------ | ---------------------------- | ---------------------------------------------- |
| exceed-limit | 上传的文件超出限制后触发     | fileList: `FileItem[]`<br>files: `File[]`      |
| change       | 上传的文件状态发生改变时触发 | fileList: `FileItem[]`<br>fileItem: `fileItem` |
| progress     | 上传中的文件进度改变时触发   | fileItem: `fileItem`<br>ev: `ProgressEvent`    |
| preview      | 点击图片预览时的触发         | fileItem: `FileItem`                           |
| success      | 上传成功时触发               | fileItem: `FileItem`                           |
| error        | 上传失败时触发               | fileItem: `FileItem`                           |

<br>

### Upload Methods

| 方法名     | 描述                         | 参数                        | 返回值 |
| ---------- | ---------------------------- | --------------------------- | ------ |
| submit     | 上传文件(已初始化完成的文件) | `fileItem:FileItem`         | `-`    |
| abort      | 中止上传                     | `fileItem:FileItem`         | `-`    |
| uploadFile | 更新文件                     | `id:string`<br/>`file:File` | `-`    |
| upload     | 上传文件                     | `files:File[]`              | `-`    |

### Upload Slots

| 插槽名        |                     描述                      | 参数                                    |
| ------------- | :-------------------------------------------: | --------------------------------------- |
| extra-button  |               上传列表额外按钮                | fileItem: `FileItem`                    |
| image         |                  自定义图片                   | fileItem: `FileItem`                    |
| file-name     |                   文件名称                    | -                                       |
| file-icon     |                   文件图标                    | -                                       |
| remove-icon   |                   删除图标                    | -                                       |
| preview-icon  |                   预览图标                    | -                                       |
| cancel-icon   |                   取消图标                    | -                                       |
| start-icon    |                   开始图标                    | -                                       |
| error-icon    |                   失败图标                    | -                                       |
| success-icon  |                   成功图标                    | -                                       |
| retry-icon    |                   重试图标                    | -                                       |
| upload-button |                   上传按钮                    | -                                       |
| upload-item   |                上传列表的项目                 | fileItem: `FileItem`<br>index: `number` |
| tip           | 上传列表的项目（仅当开启 `draggable` 时生效） |                                         |

<br>

## 类型定义

组件导出以下类型定义

```ts
import type { FileItem, FileStatus, RequestOption, UploadRequest } from '@cedar/ui'
```

<br>

### FileItem

| 参数名   | 描述                       | 类型         | 默认值 |
| -------- | -------------------------- | ------------ | :----: |
| uid      | 当前上传文件的唯一标示     | `string`     |  `-`   |
| status   | 当前上传文件的状态         | `FileStatus` |  `-`   |
| file     | 文件对象                   | `File`       |  `-`   |
| percent  | 上传进度百分比             | `number`     |  `-`   |
| response | 当前文件上传请求返回的响应 | `any`        |  `-`   |
| url      | 文件地址                   | `string`     |  `-`   |
| name     | 文件名                     | `string`     |  `-`   |

<br>

### RequestOption

| 参数名          | 描述                                                                                          | 类型                                                                                         | 默认值  |
| --------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | :-----: |
| action          | 上传的 URL                                                                                    | `string`                                                                                     |   `-`   |
| headers         | 请求报文的头信息                                                                              | `Record<string, string>`                                                                     |   `-`   |
| name            | 上传文件的文件名                                                                              | `string \| ((fileItem: FileItem) => string)`                                                 |   `-`   |
| fileItem        | 上传文件                                                                                      | `FileItem`                                                                                   |   `-`   |
| data            | 附加的请求信息                                                                                | `Record<string, string \| Blob> \| ((fileItem: FileItem) => Record<string, string \| Blob>)` |   `-`   |
| withCredentials | 是否携带 cookie 信息                                                                          | `boolean`                                                                                    | `false` |
| onProgress      | 更新当前文件的上传进度。percent: 当前上传进度百分比                                           | `(percent: number, event?: ProgressEvent) => void`                                           |   `-`   |
| onSuccess       | 上传成功后，调用 onSuccess 方法，传入的 response 参数将会附加到当前上传文件的 response 字段上 | `(response?: any) => void`                                                                   |   `-`   |
| onError         | 上传失败后，调用 onError 方法，传入的 response 参数将会附加到当前上传文件的 response 字段上   | `(response?: any) => void`                                                                   |   `-`   |

<br>

### UploadRequest

| 参数名 | 描述     | 类型         | 默认值 |
| ------ | -------- | ------------ | :----: |
| abort  | 终止上传 | `() => void` |  `-`   |
