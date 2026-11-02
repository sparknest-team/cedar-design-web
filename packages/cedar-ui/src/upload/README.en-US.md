---
lang: en-US
permalink: /en/components/upload/
---

# Upload

Upload UI and a headless useUploader composable. The application owns transport and server file deletion.

## Replacement and video metadata

Enable reupload for per-item replacement, or call replace(file, replacementFile). Validation and beforeRemove rejection preserve the original item. An accepted replacement occupies the same position with a new UID and emits replace/change, not remove. A failed new upload can be retried; it does not automatically restore the old server file or delete it.

Video duration is expressed in seconds and rendered as mm:ss or h:mm:ss. Local files are inspected; remote echoes provide duration from application metadata. Temporary resources are released on success, error, cancellation and disposal.

| Variable                                | Default                                  |
| --------------------------------------- | ---------------------------------------- |
| --c-upload-gap                          | var(--c-sys-space-4)                     |
| --c-upload-trigger-min-height           | var(--c-sys-control-height-md)           |
| --c-upload-trigger-padding-horizontal   | var(--c-sys-space-6)                     |
| --c-upload-trigger-draggable-min-height | calc(var(--c-sys-control-height-md) * 2) |
| --c-upload-card-size                    | calc(var(--c-sys-control-height-md) * 2) |
| --c-upload-item-min-height              | var(--c-sys-control-height-md)           |
| --c-upload-item-padding                 | var(--c-sys-space-4)                     |
| --c-upload-thumb-size                   | var(--c-sys-control-height-lg)           |
| --c-upload-border-radius                | var(--c-sys-radius-md)                   |
| --c-upload-border-color                 | var(--c-sys-color-border-default)        |
| --c-upload-background                   | var(--c-sys-color-surface-default)       |
| --c-upload-text-color                   | var(--c-sys-color-content-primary)       |
| --c-upload-secondary-text-color         | var(--c-sys-color-content-secondary)     |
| --c-upload-hover-background             | var(--c-sys-color-state-hover)           |
| --c-upload-active-color                 | var(--c-sys-color-action-primary)        |
| --c-upload-error-color                  | var(--c-sys-color-content-danger)        |
| --c-upload-action-size                  | var(--c-sys-control-touch-target)        |
| --c-upload-progress-height              | var(--c-sys-space-2)                     |
| --c-upload-disabled-opacity             | .56                                      |
| --c-upload-font-size                    | var(--c-sys-font-size-md)                |

## Basic examples

### Read Only

<demo src="./__demos__/read-only.vue"></demo>

## Appearance and states

### State Controls

<demo src="./__demos__/state-controls.vue"></demo>

### State Lab

<demo src="./__demos__/state-lab.vue"></demo>

### Api Review

### Props

| Prop                                                         | Type                                                     | Default/Description                                                               |
| ------------------------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| model-value / default-value                                  | UploadFileItem[]                                         | Controlled value / initial uncontrolled value []                                  |
| accept / capture                                             | string / native capture                                  | Unspecified                                                                       |
| multiple / directory / draggable                             | boolean                                                  | false                                                                             |
| disabled / readonly                                          | boolean                                                  | undefined; inherits Form; explicit false wins                                     |
| action / method                                              | string                                                   | None / post                                                                       |
| headers / data                                               | object or async(file) => object                          | Request preparation remains cancellable                                           |
| name                                                         | string / (file) => string                                | file                                                                              |
| with-credentials                                             | boolean                                                  | false                                                                             |
| custom-request                                               | (UploadRequestOptions) => UploadRequest / Promise / void | Custom transport; may return an abort handle                                      |
| auto-upload                                                  | boolean                                                  | true; starts only when action or custom-request is provided                       |
| max-files / max-file-size / max-total-size                   | number                                                   | Unspecified; sizes are bytes; max-files applies when greater than zero            |
| resolve-type                                                 | file / data-url / object-url                             | object-url; all files get a URL and images also get thumbnailUrl                  |
| create-thumbnail-url                                         | (options) => string / Promise                            | Custom URLs are caller-owned and are not automatically revoked                    |
| before-add                                                   | async(files) => File[]                                   | Filter or replace a batch                                                         |
| before-read                                                  | async(file) => boolean / File                            | false/rejection rejects; replacement files are revalidated                        |
| before-upload                                                | async(item) => boolean / File / Blob                     | false/rejection cancels preparation; replacements are revalidated                 |
| before-remove                                                | async(item,list) => boolean                              | false/rejection keeps the file                                                    |
| is-success-response                                          | (xhr,item) => boolean                                    | HTTP 2xx by default                                                               |
| request-choose                                               | (chooseFile,event) => void / Promise                     | Own file selection; errors do not automatically fall back to a native file picker |
| list-type                                                    | text / picture / picture-card                            | text; supported on both platforms                                                 |
| image-fit                                                    | fill / contain / cover / none / scale-down               | cover; item.fit takes priority                                                    |
| preview                                                      | boolean                                                  | true                                                                              |
| show-file-list / show-upload-button / show-remove-button     | boolean                                                  | true                                                                              |
| show-retry-button / show-cancel-button / show-preview-button | boolean                                                  | true                                                                              |
| show-download-button                                         | boolean                                                  | false; unavailable while interaction is disabled                                  |
| elevation / ripple                                           | boolean or number / boolean                              | false / true                                                                      |

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

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Prop                                                         | Type                                                     | Default / description                                                        |
| ------------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| model-value / default-value                                  | UploadFileItem[]                                         | Controlled value / uncontrolled initial []                                   |
| accept / capture                                             | string / native capture                                  | Unspecified                                                                  |
| multiple / directory / draggable                             | boolean                                                  | false                                                                        |
| disabled / readonly                                          | boolean                                                  | undefined inherits Form; explicit false overrides                            |
| action / method                                              | string                                                   | None / post                                                                  |
| headers / data                                               | object or async(file) => object                          | Cancelable during request preparation                                        |
| name                                                         | string / (file) => string                                | file                                                                         |
| with-credentials                                             | boolean                                                  | false                                                                        |
| custom-request                                               | (UploadRequestOptions) => UploadRequest / Promise / void | Custom transport; may return abort                                           |
| auto-upload                                                  | boolean                                                  | true; requires action or custom-request to start                             |
| max-files / max-file-size / max-total-size                   | number                                                   | Unspecified; sizes use bytes, max-files applies when >0                      |
| resolve-type                                                 | file / data-url / object-url                             | object-url; all files get url, images also get thumbnailUrl                  |
| create-thumbnail-url                                         | (options) => string / Promise                            | Custom URLs belong to callers and are not automatically revoked              |
| before-add                                                   | async(files) => File[]                                   | Batch filtering/replacement                                                  |
| before-read                                                  | async(file) => boolean / File                            | false/rejection rejects; replacements are revalidated                        |
| before-upload                                                | async(item) => boolean / File / Blob                     | false/rejection cancels preparation; replacements are revalidated            |
| before-remove                                                | async(item,list) => boolean                              | false/rejection prevents removal                                             |
| is-success-response                                          | (xhr,item) => boolean                                    | HTTP 2xx by default                                                          |
| request-choose                                               | (chooseFile,event) => void / Promise                     | Own the selection entry; exceptions do not automatically open a file chooser |
| list-type                                                    | text / picture / picture-card                            | text; supported on both platforms                                            |
| image-fit                                                    | fill / contain / cover / none / scale-down               | cover; item.fit overrides                                                    |
| preview                                                      | boolean                                                  | true                                                                         |
| show-file-list / show-upload-button / show-remove-button     | boolean                                                  | true                                                                         |
| show-retry-button / show-cancel-button / show-preview-button | boolean                                                  | true                                                                         |
| show-download-button                                         | boolean                                                  | false; disabled prevents interaction                                         |
| elevation / ripple                                           | boolean or number / boolean                              | false / true                                                                 |

UploadFileItem requires uid, status and percent. name/size/type/file/url/thumbnailUrl/fit/response/error are optional. status is ready/reading/uploading/success/error/canceled/removed.

### Events

- update:model-value(files), change(files, changedFile?): queue proposal order; Form receives one change notification per change, including progress/state updates.
- read(item): reading completed; business code may take over uploading. It does not indicate server success.
- rejected(UploadRejectedFile[]): reason is accept/before-add/before-read/read-error/max-file-size/max-total-size/max-files.
- exceed(nativeFiles, acceptedList): file-count limit exceeded.
- progress(item,event?), success(item), error(item): active-request notifications. Stale/canceled callbacks have no effect.
- remove(item): removal proposal after removal hooks accept it.
- preview(item, UploadPreviewEvent): event.preventDefault() cancels built-in image/video preview. Programmatic previews are cancelable too; originalEvent is optional.

### Slots

- trigger({chooseFile,dragOver,disabled}): custom selection entry.
- item({file,index,remove,retry,abort}): custom complete item.
- remove-button({file,index,remove,retry,abort}): custom removal action.

### Expose

chooseFile(), submit(file?), abort(file?), retry(file), remove(file), reset(), clearSuccess(), clearError(), getFiles(status?), preview(file), closePreview(). useUploader(options) supplies matching UI-free logic plus addFiles(files) and input/drag handlers.

### Controlled state and lifecycle

If a controlled parent rejects an addition, only read/list proposals emit; automatic upload waits until that uid is accepted, then runs once. Same-tick proposals merge transactionally; across ticks, the actual parent list is authoritative. Rejected entries do not count toward total size. Parents own consistency of late list replacements. Explicit removal of rejected items, reset or unmount releases generated URLs; external URLs are never revoked. Built-in preview retains its own URL ownership until closing and does not close another component's later preview.

Cancellation covers before-upload, asynchronous headers/data/name and asynchronous custom-request handles. Retrying or replacing a File under the same uid invalidates old callbacks. before-read/before-upload replacements recheck limits. max-total-size counts accepted entries and the current valid prepared batch/request only. Disabled/readonly block selection, removal, submission and other mutations; readonly allows preview/download. KeepAlive deactivation cancels preparation/requests; reactivation allows new operations.

## Type definitions

UploadProps、UploadEmits、UploadSlots、UploadExpose、UploadPublicMethods、UploadFileItem、UploadStatus、UploadListType、UploadResolveType、UploadImageFit、UploadCapture、UploadRejectedFile、UploadRejectedReason、UploadRequestOptions、UploadRequest、UploadCustomRequest、UploadProgressEvent、UploadData、UploadHeaders、UploadBeforeRead、UploadBeforeUpload、UploadBeforeRemove、UploadCreateThumbnailUrl、UploadIsSuccessResponse、UploadRequestChoose、UploadPreviewEvent、UseUploaderOptions、UploadInstance。

## Style variables

Public variable suffixes match across platforms; all defaults appear below with c/mp prefixes respectively.

| Variable                                | Default                                  |
| --------------------------------------- | ---------------------------------------- |
| --c-upload-gap                          | var(--c-sys-space-4)                     |
| --c-upload-trigger-min-height           | var(--c-sys-control-height-md)           |
| --c-upload-trigger-padding-horizontal   | var(--c-sys-space-6)                     |
| --c-upload-trigger-draggable-min-height | calc(var(--c-sys-control-height-md) * 2) |
| --c-upload-card-size                    | calc(var(--c-sys-control-height-md) * 2) |
| --c-upload-item-min-height              | var(--c-sys-control-height-md)           |
| --c-upload-item-padding                 | var(--c-sys-space-4)                     |
| --c-upload-thumb-size                   | var(--c-sys-control-height-lg)           |
| --c-upload-border-radius                | var(--c-sys-radius-md)                   |
| --c-upload-border-color                 | var(--c-sys-color-border-default)        |
| --c-upload-background                   | var(--c-sys-color-surface-default)       |
| --c-upload-text-color                   | var(--c-sys-color-content-primary)       |
| --c-upload-secondary-text-color         | var(--c-sys-color-content-secondary)     |
| --c-upload-hover-background             | var(--c-sys-color-state-hover)           |
| --c-upload-active-color                 | var(--c-sys-color-action-primary)        |
| --c-upload-error-color                  | var(--c-sys-color-content-danger)        |
| --c-upload-action-size                  | var(--c-sys-control-touch-target)        |
| --c-upload-progress-height              | var(--c-sys-space-2)                     |
| --c-upload-disabled-opacity             | .56                                      |
| --c-upload-font-size                    | var(--c-sys-font-size-md)                |

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

Attachment confirmation commits file-list relationships; it cannot undo completed remote uploads or permanent deletion. To defer network side effects, set `auto-upload="false"` and upload after the final business submission.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

## Cover attachments and video duration

`reupload` (default false) enables a per-item replacement action, including when maxFiles has been reached. `replace(file, replacement?: File): Promise<void>` opens a single-file chooser or validates the supplied File. It respects readonly/disabled and the chooser hook. Validation and beforeRemove run before an atomic in-place replacement proposal with a new UID; count and total size exclude the old item. Cancellation, rejection, guard veto and stale targets preserve the old item. A controlled parent decides acceptance. The `replace(next, previous)` event is a model proposal, not remote success or removal; remove is not emitted. Once accepted, obsolete transport callbacks are ignored; new upload failures can be retried. The item slot also exposes replace().

`UploadFileItem.duration?: number` uses seconds, displayed as mm:ss / h:mm:ss; unknown/invalid durations are hidden. Metadata reads local File objects only, waits at most 5 seconds and cleans temporary resources. Business code supplies remote durations. Video previews use popupContainer.

Duration-badge variables: `--c-upload-duration-background: var(--c-sys-color-surface-tooltip)`, `--c-upload-duration-color: var(--c-sys-color-content-on-dark)`, `--c-upload-duration-radius: var(--c-sys-radius-sm)`, `--c-upload-duration-padding: var(--c-sys-space-1) var(--c-sys-space-2)`, `--c-upload-duration-font-size: var(--c-sys-font-size-sm)`.

### Before-hook waiting feedback

Before-hook waits show visible feedback and aria-busy. Rejected or failed operations recover; duplicate submissions do not start another copy. Notification event Promises never drive loading. Independent file operations retain concurrency and share aggregate hook feedback.

`useUploader()` exposes readonly `guardPending`, aggregating currently awaited before hooks. It does not represent upload progress.
