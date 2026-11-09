---
permalink: /components/upload/
---

# Upload 上传

禁用下载与 Link/Button 的链接模式一致：移除 href，同时保留链接角色、`aria-disabled` 和 `tabindex=-1`，点击不执行默认下载。`readonly` 不禁用下载；恢复非禁用状态后保留原文件地址及下载文件名。

未配置 action / custom-request 时，组件仅读取文件，进度和结果由业务管理。

## 基础示例

### 基础用法

选择本地文件后显示文件列表；未配置 action/custom-request 时仅读取，不发送请求。

<demo src="./__demos__/read-only.vue"></demo>

## 外观与状态

### 动态只读与禁用

预置本地合成图片，启用 readPrettyonly 与 disabled，比较预览、删除和选择入口的行为。选择按钮只记录 request-choose 次数，不调用原生文件框或请求接口。只读保留预览，禁用同时阻止预览；解除限制后可重新操作。恢复示例由父级更新模型，不是 Upload 的公开重置方法。

<demo src="./__demos__/state-controls.vue"></demo>

### 交互状态切换

适用于附件列表展示与本地选取。调整禁用、只读，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

### 图卡、插槽与自定义预览

<demo src="./__demos__/custom-surface.vue"></demo>

## 文件来源与约束

### 目录选择与多文件回退

使用 directory 选择文件夹，普通多选入口可作为移动设备的替代路径。

<demo src="./__demos__/directory.vue"></demo>

### 剪贴板图片与读取校验

通过现有 useUploader.addFiles 接入 paste 事件，复用数量、大小和类型限制。这是应用层组合，不新增 Upload 的 paste 属性。

<demo src="./__demos__/clipboard.vue"></demo>

### 替换后的约束校验

反向返回顺序：旧任务等待时重置并加入新文件，先点“返回最新缩略图”接受新项，再“拒绝最早缩略图”。旧失败只结清旧任务，不能再显示read-error、删除新项或增加解码数；最后重置清空列表和计数。这仍是本地回调竞争，不是原生读取器异常。

开启 FileReader / data-url 后，接受的 File 会读取为 data URL。Data URLs 显示当前 data-url 项目数，Decoded images 显示重置以来累计的 load 次数。删除项目不会减少累计次数；重置清零两者，类型拒绝发生在读取之前。

开关仅影响后续新增项，不会重新读取既有项目；可按 file/data-url/file 顺序混合加入三项。满额后再加入会报告 max-files，图片和解码计数不变；删除 data-url 项后重新加入会读取新文件，累计解码数继续增加，重置清空整个混合队列。

<demo src="./__demos__/replacement-validation.vue"></demo>

## 队列与进度

### 外部管理进度

可直接加入本地示例项观察 40% 的外部进度，再模拟完成。完成操作只更新仍在上传的项；取消项保持 canceled，已删除的项不会重新出现。外部托管模式隐藏内置请求重试按钮，使用“模拟外部重试”恢复取消或失败项，再由业务端完成。示例不发送网络请求。

<demo src="./__demos__/external-state.vue"></demo>

### 手动队列和可取消请求

可直接“加入示例文件”，也可选择本地文件；两种方式均不访问网络。点击提交后观察进度，取消会停止活动请求，重试会重新上传。开启“首次请求失败”时，同一文件首次失败、重试成功。活动请求数在完成、取消、失败及离开 Demo 后清零。

<demo src="./__demos__/queue-request.vue"></demo>

## 异步钩子与请求

### 删除前确认

未勾选时，`before-remove` 拒绝移除并保留文件；勾选后再次删除才更新队列。示例使用本地预置数据，不访问网络。

开启“手动异步确认”后忽略同步允许开关，删除等待“确认删除 / 取消删除”。同一文件等待时重复点击不会新增钩子；取消保留文件，等待中禁用后再确认也不会删除，解除禁用后需重新发起。计数核对列表、等待任务、钩子和 remove 通知；停用或卸载结清本地等待。

With manual async confirmation enabled, the synchronous allow switch is ignored. Repeated removal of a pending file invokes one hook. Cancel keeps the file; resolving after disabling also keeps it, and a fresh removal is required after re-enabling. Counters expose the list, pending tasks, hook calls and remove notifications. Deactivation/unmount settles local tasks without network requests.

新增操作均不访问网络：“异常拒绝删除”拒绝本地Promise，文件保留且后续可重试；“替换同 UID 文件”生成新的本地File，旧删除确认不得移除替换项。“重置上传队列”调用公开reset，旧确认不再产生remove；“激活上传组件”通过KeepAlive停用/恢复Upload，等待任务保留在外层Demo用于手动返回，旧结果不得影响恢复后的实例。停用Upload不等于取消外部业务Promise；离开整个Demo才结清其本地等待。

All extra controls are local. Reject removal rejects the pending Promise, keeps the file and allows a fresh attempt. Replace same UID file creates a new local File; an old confirmation must not remove that replacement. Reset upload queue invokes public reset without a late remove notification. Activate upload suspends/restores Upload through KeepAlive; the outer Demo keeps pending jobs for manual completion, whose old results must stay invalid after activation. Suspending Upload does not physically cancel external business Promises; leaving the whole Demo settles its local jobs.

<demo src="./__demos__/before-remove.vue"></demo>

### 上传前准备与取消竞争

取消后重试合计大小组合：双项进入准备后取消，再次提交会保留四个待返回任务（含两次已失效尝试）。统一返回时仍只启动一次有效请求；超限项保留取消前的原文件和 `canceled` 状态，不误算为新失败或自动恢复为 ready。删除成功项后可再次提交剩余项并成功；旧准备结果不占用额外容量。

合计大小组合：空队列选择“每项替换600B，合计上限1024B”，连续加入两个62B合成图片，再准备并统一完成。每项均满足单文件1024B限制，但两项替换后总量超限，因此只有一项发起本地请求，另一项保留ready原文件并报告max-total-size。删除成功项后，再准备剩余项可成功；重置清空队列、等待和请求计数。此处验证本地before-upload替换，不涉及原生文件选择或真实网络上传。

点击“准备并提交”后，`before-upload` 保持等待；重复提交不会重复创建同一尝试。取消准备后可以再次提交，再点击“完成准备”同时返回旧、新结果，只有当前有效尝试能发起请求。选择文本或超大图片替换时会再次检查类型和 1 KiB 大小限制，拒绝后保持 ready，可改为有效副本后重试。本示例使用公开 useUploader 和本地即时请求，不访问网络；重置、停用和卸载会释放等待任务。

<demo src="./__demos__/prepare-request.vue"></demo>

### 异步请求元数据

填写你控制的本地接收接口后，分别手动返回 headers 和 data，观察默认 XHR 的准备与取消。只返回一项时仍不发送；取消后再返回另一项不得启动请求。成功响应显示在示例下方，可由接收端核对 `X-Demo-Upload`、`auditMarker` 和 `attachment` 文件字段。接口地址默认留空，不预设外部上传服务；接收器必须允许文档站来源的 CORS。本例仅使用生成的合成文本，不选择真实文件。

使用“拒绝 headers / 拒绝 data”模拟准备失败，当前尝试只进入一次 error。可在另一项旧 Promise 未结清时重试，观察旧结果不会覆盖新尝试；取消后再拒绝不增加错误计数。返回/拒绝按钮会结清该类所有等待任务（包括旧尝试），便于验证竞争；重置会释放等待任务。准备失败不等同 HTTP 错误。

<demo src="./__demos__/metadata-request.vue"></demo>

### 请求句柄迟到与取消

本地模拟 custom-request 返回 Promise。取消后再返回旧句柄会立即调用其 abort；返回旧成功回调不会恢复已取消项。取消后再次发起、统一返回句柄和成功回调时，只接受当前尝试一次。计数展示回调是否被内核接受，不代表真实传输；本例不访问网络，重置/停用/卸载释放本地等待。

<demo src="./__demos__/late-request.vue"></demo>

## 使用说明

### 编辑与确认

通过 `edit-mode` 配置编辑方式；未指定时依次继承 FormItem、Form，默认 `direct`。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

附件确认提交的是文件列表关系，无法撤销已经发生的远程上传或永久删除；需要延迟网络副作用时配置 `auto-upload="false"`，由业务在最终提交后执行上传。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

### 配置说明

两端公共后缀一致，所有默认值见下表（前缀分别为c/mp）。

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Upload Props

| 属性                                                         | 类型                                                     | 默认值/说明                                       |
| ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------- |
| model-value / default-value                                  | UploadFileItem[]                                         | 受控值 / 非受控初值[]                             |
| accept / capture                                             | `string / UploadCapture`<br>`UploadCapture: boolean \| 'user' \| 'environment' \| undefined` | 未指定                                            |
| multiple / directory / draggable                             | boolean                                                  | false                                             |
| disabled / readonly                                          | boolean                                                  | undefined，继承Form，显式false优先                |
| action / method                                              | string                                                   | 无 / post                                         |
| headers / data                                               | object 或 async(file) => object                          | 请求准备阶段仍可取消                              |
| name                                                         | string / (file) => string                                | file                                              |
| with-credentials                                             | boolean                                                  | false                                             |
| custom-request                                               | (UploadRequestOptions) => UploadRequest / Promise / void | 自定义transport，可返回abort                      |
| auto-upload                                                  | boolean                                                  | true；必须同时有action或custom-request才启动      |
| max-files / max-file-size / max-total-size                   | number                                                   | 未指定；大小单位字节，max-files>0生效             |
| resolve-type                                                 | file / data-url / object-url                             | object-url；所有文件生成url，图片生成thumbnailUrl |
| create-thumbnail-url                                         | (options) => string / Promise                            | 自定义URL归调用方所有，不自动回收                 |
| before-add                                                   | async(files) => File[]                                   | 批次筛选/替换                                     |
| before-read                                                  | async(file) => boolean / File                            | false/reject拒绝；替换后重新校验                  |
| before-upload                                                | async(item) => boolean / File / Blob                     | false 保留 ready；抛错/reject 进入 error；替换后重新校验              |
| before-remove                                                | async(item,list) => boolean                              | false/reject不删除                                |
| is-success-response                                          | (xhr,item) => boolean                                    | 默认HTTP2xx                                       |
| request-choose                                               | (chooseFile,event) => void / Promise                     | 接管选择入口，异常不会自动打开文件框              |
| list-type                                                    | text / picture / picture-card                            | text，两端均支持                                  |
| image-fit                                                    | fill / contain / cover / none / scale-down               | cover；item.fit优先                               |
| preview                                                      | boolean                                                  | true                                              |
| show-file-list / show-upload-button / show-remove-button     | boolean                                                  | true                                              |
| show-retry-button / show-cancel-button / show-preview-button | boolean                                                  | true                                              |
| show-download-button                                         | boolean                                                  | false；禁用时不可操作                             |
| elevation / ripple                                           | boolean或number / boolean                                | false / true                                      |

UploadFileItem 的 uid、status、percent 必填，name/size/type/file/url/thumbnailUrl/fit/response/error 可选。status为ready/reading/uploading/success/error/canceled/removed。

### Upload Events

- update:model-value(files)，change(files, changedFile?)：队列提议顺序，Form每次change仅一次。进度与状态更新也属于change。
- read(item)：读取完成，可自行接管业务上传；不是服务端成功。
- rejected(UploadRejectedFile[])：reason为accept/before-add/before-read/read-error/max-file-size/max-total-size/max-files。
- exceed(nativeFiles, acceptedList)：超过数量时通知。
- progress(item,event?)、success(item)、error(item)：当前有效请求通知；旧请求/取消回调不生效。
- remove(item)：通过删除钩子后的删除提议。
- preview(item, UploadPreviewEvent)：调用event.preventDefault()取消内建图片/视频预览；程序调用也可取消，originalEvent可选。

### Upload Slots

- trigger({chooseFile,dragOver,disabled})：自定义选择入口。

纯展示内容由外层提供按钮角色和 Enter/Space 入口；包含按钮、链接等交互内容时，外层不再增加按钮角色或 Tab 停靠点。自定义按钮应绑定插槽的 disabled，并负责自己的键盘行为。点击时直接调用 chooseFile 即可，无需 .stop；同次点击的冒泡不会再次选择，也不会额外调用 requestChoose。依赖默认冒泡的自定义按钮仍可使用 requestChoose。

异步选择判断请使用 requestChoose，或先同步 event.preventDefault() 取消默认选择，再自行等待并调用 chooseFile；普通点击事件的 Promise 不会被收集。requestChoose 收到的选择回调每次操作至多执行一次，卸载或 KeepAlive 停用后的旧回调不会在重开时恢复。
- item({file,index,remove,retry,abort,replace})：自定义整项。
- remove-button({file,index,remove,retry,abort,replace})：自定义删除操作。
- read({value,text})：字段阅读内容；value 为文件模型或 null，text 为格式化文字，与读取完成的 read 事件不同。

### Upload Methods

提供 chooseFile()、replace(file,replacement?)、submit(file?)、abort(file?)、retry(file)、remove(file)、reset()、clearSuccess()、clearError()、getFiles(status?)、preview(file)、closePreview()。useUploader(options) 提供不含界面的上传逻辑，以及 addFiles(files) 和输入、拖放处理接口。

chooseFile、replace、submit、retry、remove 返回 `Promise<void>`，保留各自准备阶段的等待；submit/retry 等待准备钩子和请求工厂创建，不承诺网络传输结束，结果由 success/error 事件报告。chooseFile 的完成不表示用户已选完文件；remove 完成也不表示受控父级已接受删除提议。item/remove-button 的 remove、retry、replace 以及 trigger 的 chooseFile 保留相同 Promise 类型。

所有公开方法在编辑器首次挂载前即保持可调用。未挂载、已关闭或停用时，getFiles(status?) 返回已接受模型的浅拷贝快照并按状态筛选；异步修改命令以空操作完成，同步修改命令为空操作。需要执行时，先通过字段交互或受控 open 打开编辑器并等待挂载，或使用 editMode="direct"。保存的方法引用在关闭/重开后转发到当前实例，编辑器取消会保留已接受模型。

### 受控与生命周期

受控父级拒绝新增时只发读取与列表提议，不自动上传；后续父级接受该uid才会自动上传一次。同tick提议事务合并，跨tick仍以实际父级列表为真源，拒绝项目不占总大小；父级负责迟到列表替换的一致性。显式remove未接受项、reset或卸载会释放其生成URL；任意外部URL不会被回收。内建预览保留自己的URL使用权至关闭，不关闭其他组件后来打开的预览。

取消覆盖before-upload、异步headers/data/name及异步custom-request句柄阶段；重试和外部同uid换File令旧回调失效。before-read和before-upload的替换会复查限制，max-total-size只累计已接受项及当前正在准备的合法批次/请求。禁用/只读禁止选择、移除、提交等更改；只读允许预览/下载。KeepAlive停用取消当前准备/请求，恢复后允许新操作。

## Types

UploadProps、UploadEmits、UploadSlots、UploadExpose、UploadPublicMethods、UploadFileItem、UploadStatus、UploadListType、UploadResolveType、UploadImageFit、UploadCapture、UploadRejectedFile、UploadRejectedReason、UploadRequestOptions、UploadRequest、UploadCustomRequest、UploadProgressEvent、UploadData、UploadHeaders、UploadBeforeRead、UploadBeforeUpload、UploadBeforeRemove、UploadCreateThumbnailUrl、UploadIsSuccessResponse、UploadRequestChoose、UploadPreviewEvent、UseUploaderOptions、UploadInstance。

## 覆盖附件和视频时长

`reupload` 默认 false，开启逐项替换。`replace(file, replacement?: File): Promise<void>` 打开单文件选择器或校验传入 File。替换先校验读取和限制，再调用 beforeRemove；数量/总大小扣除旧项。取消、校验失败、守卫拒绝与目标过期均保留旧项。通过后以新 UID 在原位提出模型更新，发出 `replace(next, previous)`、change，不发出 remove，不删除服务端文件。受控父级接纳后旧请求失效，新请求失败可重试。item 插槽暴露 replace()。

`UploadFileItem.duration?: number` 为秒，显示 mm:ss / h:mm:ss；未知或无效时隐藏。元数据仅尝试读取本地 File，最多等待 5 秒，并清理临时资源。远端回显由业务提供 duration。视频预览使用 popupContainer。

时长角标公开变量：`--c-upload-duration-background: var(--c-sys-color-surface-tooltip)`、`--c-upload-duration-color: var(--c-sys-color-content-on-dark)`、`--c-upload-duration-radius: var(--c-sys-radius-sm)`、`--c-upload-duration-padding: var(--c-sys-space-1) var(--c-sys-space-2)`、`--c-upload-duration-font-size: var(--c-sys-font-size-sm)`。

### 异步操作反馈

before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。不同文件保持并发，加载反馈汇总所有当前守卫任务，不把普通 change/progress 事件当成任务。

`useUploader()` 提供只读 `guardPending`，汇总当前 before 钩子的等待状态；它不代表文件上传进度。

### 准备否决与异常

`beforeUpload` 返回 `false` 或兑现为 `false` 属于业务否决：不发起请求，文件保持 `ready`，不触发 `error` 或 `rejected`。同步抛错或 Promise 拒绝属于准备异常：不发起请求，文件变为 `error`，通过已有 `error(item)` 事件报告一次，原始原因保存在 `item.error`。该事件覆盖准备和传输失败，并不代表已经发送 HTTP 请求。两种结果都允许后续以合法守卫结果重新提交；普通通知返回的 Promise 不延长准备任务，旧尝试或取消后的异常不得报告为新错误。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-upload-action-size` | `var(--c-sys-control-touch-target)` | `height`, `width` |
| `--c-upload-active-color` | `var(--c-sys-color-action-primary)` | `accent-color`, `border-color`, `outline` |
| `--c-upload-background` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-upload-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-upload-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-upload-card-size` | `calc(var(--c-sys-control-height-md) * 2)` | `height`, `min-height`, `width` |
| `--c-upload-disabled-opacity` | `0.56` | `opacity` |
| `--c-upload-duration-background` | `var(--c-sys-color-surface-tooltip)` | `background` |
| `--c-upload-duration-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-upload-duration-font-size` | `var(--c-sys-font-size-sm)` | `font-size` |
| `--c-upload-duration-padding` | `var(--c-sys-space-1) var(--c-sys-space-2)` | `padding` |
| `--c-upload-duration-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-upload-error-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-upload-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-upload-gap` | `var(--c-sys-space-4)` | `gap` |
| `--c-upload-hover-background` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-upload-item-min-height` | `var(--c-sys-control-height-md)` | `min-height` |
| `--c-upload-item-padding` | `var(--c-sys-space-4)` | `padding` |
| `--c-upload-progress-height` | `var(--c-sys-space-2)` | `height` |
| `--c-upload-secondary-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-upload-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-upload-thumb-size` | `var(--c-sys-control-height-lg)` | `height`, `width` |
| `--c-upload-trigger-draggable-min-height` | `calc(var(--c-sys-control-height-md) * 2)` | `min-height` |
| `--c-upload-trigger-min-height` | `var(--c-sys-control-height-md)` | `min-height` |
| `--c-upload-trigger-padding-horizontal` | `var(--c-sys-space-6)` | `padding-inline` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-upload-action-size: var(--c-sys-control-touch-target);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
