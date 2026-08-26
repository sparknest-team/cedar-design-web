---
permalink: /components/upload/
---

# Upload

`Upload` manages file selection, validation, preview and request lifecycle. The built-in request is standards-only `XMLHttpRequest` with `FormData`; use `custom-request` when the application owns the network client.

## Examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Picture card

<demo src="./__demos__/picture-card.vue"></demo>

### Picture list and default files

<demo src="./__demos__/picture.vue"></demo>

<demo src="./__demos__/upload-list.vue"></demo>

### Desktop selection

<demo src="./__demos__/draggable.vue"></demo>

<demo src="./__demos__/directory.vue"></demo>

### Validation and limits

<demo src="./__demos__/limit.vue"></demo>

<demo src="./__demos__/before-upload.vue"></demo>

<demo src="./__demos__/before-remove.vue"></demo>

### Custom trigger, item and preview

<demo src="./__demos__/custom-upload-node.vue"></demo>

<demo src="./__demos__/custom-icon.vue"></demo>

<demo src="./__demos__/custom-preview.vue"></demo>

### Custom request

<demo src="./__demos__/custom-request.vue"></demo>

### Manual upload

<demo src="./__demos__/manual.vue"></demo>

## API

The component uses `v-model` with `UploadFileItem[]`. A file uses `url` for its final resource and optional `thumbnailUrl` for its display image. Status is one of `ready`, `reading`, `uploading`, `success`, `error`, `canceled`, or `removed`; progress is always `0-100`.

Core props are `action`, `method`, `headers`, `data`, `name`, `custom-request`, `auto-upload`, `max-files`, `max-file-size`, `max-total-size`, `list-type`, `image-fit`, `before-add`, `before-read`, `before-upload`, and `before-remove`.
