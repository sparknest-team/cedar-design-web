---
lang: en-US
permalink: /en/components/upload/
---

# Upload

Disabled downloads match Link/Button link mode: remove href while retaining the link role, `aria-disabled` and `tabindex=-1`, and cancel the default click action. `readonly` still allows downloading. Re-enabling restores the original file URL and download filename.

Upload UI and a headless useUploader composable. The application owns transport and server file deletion.

## Replacement and video metadata

Enable reupload for per-item replacement, or call replace(file, replacementFile). Validation and beforeRemove rejection preserve the original item. An accepted replacement occupies the same position with a new UID and emits replace/change, not remove. A failed new upload can be retried; it does not automatically restore the old server file or delete it.

Video duration is expressed in seconds and rendered as mm:ss or h:mm:ss. Local files are inspected; remote echoes provide duration from application metadata. Temporary resources are released on success, error, cancellation and disposal.

| Variable | Default |
| --------------------------------------- | ---------------------------------------- |
| --c-upload-gap | var(--c-sys-space-4) |
| --c-upload-trigger-min-height | var(--c-sys-control-height-md) |
| --c-upload-trigger-padding-horizontal | var(--c-sys-space-6) |
| --c-upload-trigger-draggable-min-height | calc(var(--c-sys-control-height-md) * 2) |
| --c-upload-card-size | calc(var(--c-sys-control-height-md) * 2) |
| --c-upload-item-min-height | var(--c-sys-control-height-md) |
| --c-upload-item-padding | var(--c-sys-space-4) |
| --c-upload-thumb-size | var(--c-sys-control-height-lg) |
| --c-upload-border-radius | var(--c-sys-radius-md) |
| --c-upload-border-color | var(--c-sys-color-border-default) |
| --c-upload-background | var(--c-sys-color-surface-default) |
| --c-upload-text-color | var(--c-sys-color-content-primary) |
| --c-upload-secondary-text-color | var(--c-sys-color-content-secondary) |
| --c-upload-hover-background | var(--c-sys-color-state-hover) |
| --c-upload-active-color | var(--c-sys-color-action-primary) |
| --c-upload-error-color | var(--c-sys-color-content-danger) |
| --c-upload-action-size | var(--c-sys-control-touch-target) |
| --c-upload-progress-height | var(--c-sys-space-2) |
| --c-upload-disabled-opacity | .56 |
| --c-upload-font-size | var(--c-sys-font-size-md) |

## Basic examples

### Read Only

<demo src="./__demos__/read-only.vue"></demo>

## Appearance and states

### State Controls

<demo src="./__demos__/state-controls.vue"></demo>

### State Lab

<demo src="./__demos__/state-lab.vue"></demo>

### Custom Surface

<demo src="./__demos__/custom-surface.vue"></demo>

## File sources and validation

### Directory

<demo src="./__demos__/directory.vue"></demo>

### Clipboard

<demo src="./__demos__/clipboard.vue"></demo>

### Replacement Validation

<demo src="./__demos__/replacement-validation.vue"></demo>

## Queues and progress

### External State

<demo src="./__demos__/external-state.vue"></demo>

### Queue Request

<demo src="./__demos__/queue-request.vue"></demo>

## Async hooks and requests

### Before Remove

<demo src="./__demos__/before-remove.vue"></demo>

### Prepare Request

<demo src="./__demos__/prepare-request.vue"></demo>

### Metadata Request

<demo src="./__demos__/metadata-request.vue"></demo>

### Late Request

<demo src="./__demos__/late-request.vue"></demo>

## Usage notes

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

Attachment confirmation commits file-list relationships; it cannot undo completed remote uploads or permanent deletion. To defer network side effects, set `auto-upload="false"` and upload after the final business submission.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

### Configuration

Public variable suffixes match across platforms; all defaults appear below with c/mp prefixes respectively.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Upload Props

| Prop | Type | Default / description |
| ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------- |
| model-value / default-value | UploadFileItem[] | Controlled value / uncontrolled initial [] |
| accept / capture | `string / UploadCapture`<br>`UploadCapture: boolean \| 'user' \| 'environment' \| undefined` | Unspecified |
| multiple / directory / draggable | boolean | false |
| disabled / readonly | boolean | undefined inherits Form; explicit false overrides |
| action / method | string | None / post |
| headers / data | object or async(file) => object | Cancelable during request preparation |
| name | string / (file) => string | file |
| with-credentials | boolean | false |
| custom-request | (UploadRequestOptions) => UploadRequest / Promise / void | Custom transport; may return abort |
| auto-upload | boolean | true; requires action or custom-request to start |
| max-files / max-file-size / max-total-size | number | Unspecified; sizes use bytes, max-files applies when >0 |
| resolve-type | file / data-url / object-url | object-url; all files get url, images also get thumbnailUrl |
| create-thumbnail-url | (options) => string / Promise | Custom URLs belong to callers and are not automatically revoked |
| before-add | async(files) => File[] | Batch filtering/replacement |
| before-read | async(file) => boolean / File | false/rejection rejects; replacements are revalidated |
| before-upload | async(item) => boolean / File / Blob | false keeps ready; throw/rejection reports error; replacements are revalidated |
| before-remove | async(item,list) => boolean | false/rejection prevents removal |
| is-success-response | (xhr,item) => boolean | HTTP 2xx by default |
| request-choose | (chooseFile,event) => void / Promise | Own the selection entry; exceptions do not automatically open a file chooser |
| list-type | text / picture / picture-card | text; supported on both platforms |
| image-fit | fill / contain / cover / none / scale-down | cover; item.fit overrides |
| preview | boolean | true |
| show-file-list / show-upload-button / show-remove-button | boolean | true |
| show-retry-button / show-cancel-button / show-preview-button | boolean | true |
| show-download-button | boolean | false; disabled prevents interaction |
| elevation / ripple | boolean or number / boolean | false / true |

UploadFileItem requires uid, status and percent. name/size/type/file/url/thumbnailUrl/fit/response/error are optional. status is ready/reading/uploading/success/error/canceled/removed.

### Upload Events

- update:model-value(files), change(files, changedFile?): queue proposal order; Form receives one change notification per change, including progress/state updates.
- read(item): reading completed; business code may take over uploading. It does not indicate server success.
- rejected(UploadRejectedFile[]): reason is accept/before-add/before-read/read-error/max-file-size/max-total-size/max-files.
- exceed(nativeFiles, acceptedList): file-count limit exceeded.
- progress(item,event?), success(item), error(item): active-request notifications. Stale/canceled callbacks have no effect.
- remove(item): removal proposal after removal hooks accept it.
- preview(item, UploadPreviewEvent): event.preventDefault() cancels built-in image/video preview. Programmatic previews are cancelable too; originalEvent is optional.

### Upload Slots

- trigger({chooseFile,dragOver,disabled,describedBy}): custom selection entry.

Display-only content uses the wrapper button role and Enter/Space entry. Interactive custom content owns its keyboard behavior; the wrapper adds no button role or Tab stop. Bind the slot disabled value to your button. To associate the button itself with form errors and Upload’s aria-describedby, bind the slot’s describedBy to the button’s aria-describedby; it updates as errors appear and clear. Calling chooseFile directly needs no .stop: bubbling does not choose again or also invoke requestChoose. Custom buttons relying on bubbling can still use requestChoose.

```vue
<c-upload aria-describedby="upload-hint">
  <template #trigger="{ chooseFile, disabled, describedBy }">
    <button type="button" :disabled="disabled" :aria-describedby="describedBy" @click="chooseFile">Choose file</button>
  </template>
</c-upload>
<p id="upload-hint">Choose a file</p>
```

Use requestChoose for asynchronous decisions, or synchronously call event.preventDefault() before awaiting and invoking chooseFile yourself. Click listener Promises are not collected. Each requestChoose callback selects at most once and expires on unmount or KeepAlive deactivation, even after reopening.
- item({file,index,remove,retry,abort,replace}): customize a whole file item.
- remove-button({file,index,remove,retry,abort,replace}): customize removal actions.
- read({value,text}): field reading content; value is the nullable file model and text is formatted content. This differs from the file-read completion event.

### Upload Methods

Provides chooseFile(), replace(file,replacement?), submit(file?), abort(file?), retry(file), remove(file), reset(), clearSuccess(), clearError(), getFiles(status?), preview(file) and closePreview(). useUploader(options) provides headless upload logic, addFiles(files), and input/drag handlers.

chooseFile, replace, submit, retry and remove return `Promise<void>` for their preparation stages. submit/retry await preparation hooks and request-factory creation, without guaranteeing network completion; success/error events report results. chooseFile completion does not mean the user has selected a file, and remove completion does not mean a controlled parent accepted its proposal. Item/remove-button remove, retry and replace, and trigger chooseFile retain the same Promise types.

All public methods are callable before the editor first mounts. When it is unmounted, closed or deactivated, getFiles(status?) returns shallow snapshots of the accepted model filtered by status; asynchronous mutations settle as no-ops and synchronous mutations are no-ops. To perform an operation, first open and mount the editor through field interaction or controlled open, or use editMode="direct". Stored method references forward to the current instance after closing/reopening; cancelling an editor preserves the accepted model.

### Controlled state and lifecycle

If a controlled parent rejects an addition, only read/list proposals emit; automatic upload waits until that uid is accepted, then runs once. Same-tick proposals merge transactionally; across ticks, the actual parent list is authoritative. Rejected entries do not count toward total size. Parents own consistency of late list replacements. Explicit removal of rejected items, reset or unmount releases generated URLs; external URLs are never revoked. Built-in preview retains its own URL ownership until closing and does not close another component's later preview.

Cancellation covers before-upload, asynchronous headers/data/name and asynchronous custom-request handles. Retrying or replacing a File under the same uid invalidates old callbacks. before-read/before-upload replacements recheck limits. max-total-size counts accepted entries and the current valid prepared batch/request only. Disabled/readonly block selection, removal, submission and other mutations; readonly allows preview/download. KeepAlive deactivation cancels preparation/requests; reactivation allows new operations.

## Types

UploadProps、UploadEmits、UploadSlots、UploadExpose、UploadPublicMethods、UploadFileItem、UploadStatus、UploadListType、UploadResolveType、UploadImageFit、UploadCapture、UploadRejectedFile、UploadRejectedReason、UploadRequestOptions、UploadRequest、UploadCustomRequest、UploadProgressEvent、UploadData、UploadHeaders、UploadBeforeRead、UploadBeforeUpload、UploadBeforeRemove、UploadCreateThumbnailUrl、UploadIsSuccessResponse、UploadRequestChoose、UploadPreviewEvent、UseUploaderOptions、UploadInstance。

## Cover attachments and video duration

`reupload` (default false) enables a per-item replacement action, including when maxFiles has been reached. `replace(file, replacement?: File): Promise<void>` opens a single-file chooser or validates the supplied File. It respects readonly/disabled and the chooser hook. Validation and beforeRemove run before an atomic in-place replacement proposal with a new UID; count and total size exclude the old item. Cancellation, rejection, guard veto and stale targets preserve the old item. A controlled parent decides acceptance. The `replace(next, previous)` event is a model proposal, not remote success or removal; remove is not emitted. Once accepted, obsolete transport callbacks are ignored; new upload failures can be retried. The item slot also exposes replace().

`UploadFileItem.duration?: number` uses seconds, displayed as mm:ss / h:mm:ss; unknown/invalid durations are hidden. Metadata reads local File objects only, waits at most 5 seconds and cleans temporary resources. Business code supplies remote durations. Video previews use popupContainer.

Duration-badge variables: `--c-upload-duration-background: var(--c-sys-color-surface-tooltip)`, `--c-upload-duration-color: var(--c-sys-color-content-on-dark)`, `--c-upload-duration-radius: var(--c-sys-radius-sm)`, `--c-upload-duration-padding: var(--c-sys-space-1) var(--c-sys-space-2)`, `--c-upload-duration-font-size: var(--c-sys-font-size-sm)`.

### Async operation feedback

Awaited before-* hooks show loading feedback and aria-busy. Rejection/failure restores interaction, and repeated input does not restart the same operation. Ordinary event return Promises do not participate. Files remain concurrent; feedback aggregates all current guard tasks without treating change/progress notifications as tasks.

`useUploader()` exposes readonly `guardPending`, aggregating currently awaited before hooks. It does not represent upload progress.

### Preparation vetoes and exceptions

`beforeUpload` returning `false` or resolving to `false` is a business veto: no transport starts, the item stays `ready`, and neither `error` nor `rejected` is emitted. Throwing or rejecting is a preparation failure: no transport starts, the item becomes `error`, and the existing `error(item)` event reports the original cause as `item.error` exactly once. This event covers preparation and transport failures; it does not imply an HTTP request was sent. Both outcomes permit a later submission with a valid hook result. Notification return Promises do not hold the preparation task open. Obsolete or canceled attempts cannot report a new `error`.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
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

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-upload-action-size: var(--c-sys-control-touch-target);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
