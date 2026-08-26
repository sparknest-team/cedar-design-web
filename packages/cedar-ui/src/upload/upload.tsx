import { computed, defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { previewImage } from '../image'
import { IconCheckCircleFill } from '@cedarjs/icons-vue/icon-check-circle-fill'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { IconCloseCircleFill } from '@cedarjs/icons-vue/icon-close-circle-fill'
import { IconDownload } from '@cedarjs/icons-vue/icon-download'
import { IconEye } from '@cedarjs/icons-vue/icon-eye'
import { IconFile } from '@cedarjs/icons-vue/icon-file'
import { IconRefresh } from '@cedarjs/icons-vue/icon-refresh'
import { uploadProps } from './props'
import { useUploader } from './composables/use-uploader'
import type { UploadFileItem, UploadItemSlotProps, UploadPublicMethods, UploadTriggerSlotProps } from './interfaces'

const { name } = createNamespace('upload')

function formatSize(size?: number) {
  if (size === undefined) {
    return ''
  }

  if (size < 1024) {
    return `${size} B`
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`
  }

  return `${(size / 1024 / 1024).toFixed(1)} MB`
}

export default defineComponent({
  name,
  props: uploadProps,
  emits: [
    'update:modelValue',
    'read',
    'change',
    'rejected',
    'exceed',
    'progress',
    'success',
    'error',
    'remove',
    'preview',
  ],
  setup(props, { emit, expose, slots }) {
    const prefixCls = getPrefixCls('upload')
    const uploader = useUploader({
      modelValue: () => props.modelValue,
      defaultValue: () => props.defaultValue,
      accept: () => props.accept,
      capture: () => props.capture,
      multiple: () => props.multiple,
      directory: () => props.directory,
      draggable: () => props.draggable,
      disabled: () => props.disabled,
      readonly: () => props.readonly,
      action: () => props.action,
      method: () => props.method,
      headers: () => props.headers,
      data: () => props.data,
      name: () => props.name,
      withCredentials: () => props.withCredentials,
      customRequest: () => props.customRequest,
      autoUpload: () => props.autoUpload,
      maxFiles: () => props.maxFiles,
      maxFileSize: () => props.maxFileSize,
      maxTotalSize: () => props.maxTotalSize,
      resolveType: () => props.resolveType,
      createThumbnailUrl: () => props.createThumbnailUrl,
      beforeAdd: props.beforeAdd,
      beforeRead: () => props.beforeRead,
      onRead: (file) => emit('read', file),
      beforeUpload: () => props.beforeUpload,
      beforeRemove: () => props.beforeRemove,
      isSuccessResponse: () => props.isSuccessResponse,
      onUpdateModelValue: (files) => emit('update:modelValue', files),
      onChange: (files, file) => emit('change', files, file),
      onRejected: (files) => emit('rejected', files),
      onExceed: (files, fileList) => emit('exceed', files, fileList),
      onProgress: (file, event) => emit('progress', file, event),
      onSuccess: (file) => emit('success', file),
      onError: (file) => emit('error', file),
      onRemove: (file) => emit('remove', file),
      onPreview: (file, event) => {
        emit('preview', file, event)
        if (event.defaultPrevented || props.listType === 'text') {
          return
        }

        const images = uploader.fileList.value
          .map((item) => item.thumbnailUrl || item.url)
          .filter((url): url is string => Boolean(url))
        const currentUrl = file.thumbnailUrl || file.url
        if (currentUrl) {
          previewImage({ images, current: Math.max(images.indexOf(currentUrl), 0) })
        }
      },
      listType: () => props.listType,
    })

    const inputAttrs = computed(() => ({
      accept: props.accept,
      capture: props.capture,
      multiple: props.multiple || props.directory,
      disabled: uploader.disabled.value,
      webkitdirectory: props.directory ? 'webkitdirectory' : undefined,
      directory: props.directory ? 'directory' : undefined,
    }))

    const publicMethods: UploadPublicMethods = {
      chooseFile: uploader.chooseFile,
      submit: uploader.submit,
      abort: uploader.abort,
      retry: uploader.retry,
      remove: uploader.remove,
      reset: uploader.reset,
      clearSuccess: uploader.clearSuccess,
      clearError: uploader.clearError,
      getFiles: uploader.getFiles,
    }
    expose(publicMethods)

    function renderTrigger() {
      if (!props.showUploadButton || uploader.maxReached.value) {
        return null
      }

      const slotProps: UploadTriggerSlotProps = {
        chooseFile: uploader.chooseFile,
        dragOver: uploader.dragOver.value,
        disabled: uploader.disabled.value,
      }

      return (
        <div
          class={[
            `${prefixCls}-trigger`,
            {
              [`${prefixCls}-trigger-draggable`]: props.draggable,
              [`${prefixCls}-trigger-dragover`]: uploader.dragOver.value,
              [`${prefixCls}-trigger-disabled`]: uploader.disabled.value,
              [`${prefixCls}-trigger-card`]: props.listType === 'picture-card',
            },
          ]}
          tabindex={uploader.disabled.value ? undefined : 0}
          role="button"
          aria-disabled={uploader.disabled.value}
          onClick={uploader.chooseFile}
          onDragover={props.draggable ? uploader.handleDragOver : undefined}
          onDragleave={props.draggable ? uploader.handleDragLeave : undefined}
          onDrop={props.draggable ? uploader.handleDrop : undefined}
          onKeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              uploader.chooseFile()
            }
          }}
        >
          {slots.trigger?.(slotProps) || (
            <>
              <span class={`${prefixCls}-trigger-icon`}>+</span>
              <span class={`${prefixCls}-trigger-text`}>{props.draggable ? 'Drop files here or browse' : 'Upload'}</span>
            </>
          )}
        </div>
      )
    }

    function renderActions(file: UploadFileItem) {
      return (
        <span class={`${prefixCls}-actions`}>
          {props.showPreviewButton && props.preview && file.url && (
            <button type="button" class={`${prefixCls}-action`} title="Preview" aria-label="Preview" onClick={(event) => uploader.preview(file, event)}>
              <IconEye />
            </button>
          )}
          {props.showDownloadButton && file.url && (
            <a class={`${prefixCls}-action`} href={file.url} download={file.name} title="IconDownload" aria-label="IconDownload">
              <IconDownload />
            </a>
          )}
          {props.showCancelButton && file.status === 'uploading' && (
            <button type="button" class={`${prefixCls}-action`} title="Cancel" aria-label="Cancel" onClick={() => uploader.abort(file)}>
              <IconClose />
            </button>
          )}
          {props.showRetryButton && (file.status === 'error' || file.status === 'canceled') && (
            <button type="button" class={`${prefixCls}-action`} title="Retry" aria-label="Retry" onClick={() => uploader.retry(file)}>
              <IconRefresh />
            </button>
          )}
          {props.showRemoveButton && (
            <button type="button" class={`${prefixCls}-action`} title="Remove" aria-label="Remove" onClick={() => uploader.remove(file)}>
              <IconClose />
            </button>
          )}
        </span>
      )
    }

    function renderProgress(file: UploadFileItem) {
      if (file.status !== 'uploading') {
        return null
      }

      return (
        <span class={`${prefixCls}-progress`}>
          <span class={`${prefixCls}-progress-bar`} style={{ width: `${file.percent}%` }} />
        </span>
      )
    }

    function renderFile(file: UploadFileItem, index: number) {
      const slotProps: UploadItemSlotProps = {
        file,
        index,
        remove: () => uploader.remove(file),
        retry: () => uploader.retry(file),
        abort: () => uploader.abort(file),
      }

      if (slots.item) {
        return slots.item(slotProps)
      }

      const isPicture = props.listType === 'picture' || props.listType === 'picture-card'
      const thumbnailUrl = file.thumbnailUrl || file.url

      return (
        <div class={[`${prefixCls}-item`, `${prefixCls}-item-${props.listType}`, `${prefixCls}-item-${file.status}`]} key={file.uid}>
          {isPicture && (
            <button type="button" class={`${prefixCls}-thumb`} onClick={(event) => props.preview && uploader.preview(file, event)}>
              {thumbnailUrl ? (
                <img src={thumbnailUrl} alt={file.name} style={{ objectFit: props.imageFit }} />
              ) : (
                <span>{file.name?.slice(0, 1) || 'F'}</span>
              )}
            </button>
          )}
          {!isPicture && <IconFile class={`${prefixCls}-file-icon`} />}
          <span class={`${prefixCls}-meta`}>
            <span class={`${prefixCls}-name`}>{file.name}</span>
            <span class={`${prefixCls}-size`}>{formatSize(file.size)}</span>
            {file.status === 'success' && <IconCheckCircleFill class={[`${prefixCls}-status-icon`, `${prefixCls}-status-icon-success`]} />}
            {file.status === 'error' && <IconCloseCircleFill class={[`${prefixCls}-status-icon`, `${prefixCls}-status-icon-error`]} />}
            {renderProgress(file)}
          </span>
          {renderActions(file)}
        </div>
      )
    }

    function renderList() {
      if (!props.showFileList) {
        return null
      }

      return <div class={[`${prefixCls}-list`, `${prefixCls}-list-${props.listType}`]}>{uploader.fileList.value.map(renderFile)}</div>
    }

    return () => (
      <div class={[prefixCls, `${prefixCls}-${props.listType}`]}>
        <input ref={uploader.inputRef} class={`${prefixCls}-input`} type="file" {...inputAttrs.value} onChange={uploader.handleInputChange} />
        {props.listType === 'picture-card' ? (
          <div class={`${prefixCls}-picture-grid`}>
            {renderList()}
            {renderTrigger()}
          </div>
        ) : (
          <>
            {renderTrigger()}
            {renderList()}
          </>
        )}
      </div>
    )
  },
})
