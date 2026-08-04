import { computed, onBeforeUnmount } from 'vue'
import { useFilePicker } from './use-file-picker'
import { useUploadQueue } from './use-upload-queue'
import { uploadRequest } from '../utils/request'
import { resolveThumbnailUrl, revokeThumbnailUrl } from '../utils/thumbnail'
import { createUploadUid } from '../utils/uid'
import type {
  UploadBeforeRead,
  UploadBeforeRemove,
  UploadBeforeUpload,
  UploadCapture,
  UploadCreateThumbnailUrl,
  UploadCustomRequest,
  UploadData,
  UploadFileItem,
  UploadHeaders,
  UploadIsSuccessResponse,
  UploadListType,
  UploadRejectedFile,
  UploadRequest,
  UploadResolveType,
} from '../interfaces'

export interface UseUploaderOptions {
  fileList?: () => UploadFileItem[] | undefined
  defaultFileList?: () => UploadFileItem[] | undefined
  accept?: () => string | undefined
  capture?: () => UploadCapture
  multiple?: () => boolean
  directory?: () => boolean
  draggable?: () => boolean
  disabled?: () => boolean
  readonly?: () => boolean
  action?: () => string | undefined
  method?: () => string
  headers?: () => UploadHeaders | undefined
  data?: () => UploadData | undefined
  name?: () => string | ((file: UploadFileItem) => string)
  withCredentials?: () => boolean
  customRequest?: () => UploadCustomRequest | undefined
  autoUpload?: () => boolean
  maxFiles?: () => number | undefined
  maxFileSize?: () => number | undefined
  maxTotalSize?: () => number | undefined
  resolveType?: () => UploadResolveType
  createThumbnailUrl?: () => UploadCreateThumbnailUrl | undefined
  beforeAdd?: (files: File[]) => File[] | Promise<File[]>
  beforeRead?: () => UploadBeforeRead | undefined
  onRead?: (file: UploadFileItem) => void
  beforeUpload?: () => UploadBeforeUpload | undefined
  beforeRemove?: () => UploadBeforeRemove | undefined
  isSuccessResponse?: () => UploadIsSuccessResponse | undefined
  onUpdateFileList?: (files: UploadFileItem[]) => void
  onChange?: (files: UploadFileItem[], file: UploadFileItem) => void
  onRejected?: (files: UploadRejectedFile[]) => void
  onExceed?: (files: File[], fileList: UploadFileItem[]) => void
  onProgress?: (file: UploadFileItem, event?: ProgressEvent) => void
  onSuccess?: (file: UploadFileItem) => void
  onError?: (file: UploadFileItem) => void
  onRemove?: (file: UploadFileItem) => void
  onPreview?: (file: UploadFileItem, event: MouseEvent) => void
  listType?: () => UploadListType
}

const defaultMethod = 'post'
const defaultName = 'file'
const defaultResolveType: UploadResolveType = 'object-url'

export function useUploader(options: UseUploaderOptions) {
  const requests = new Map<string, UploadRequest>()

  const disabled = computed(() => Boolean(options.disabled?.() || options.readonly?.()))
  const queue = useUploadQueue({
    fileList: options.fileList,
    defaultFileList: options.defaultFileList,
    onChange: options.onChange,
    onUpdateFileList: options.onUpdateFileList,
  })

  const picker = useFilePicker({
    accept: () => options.accept?.(),
    directory: () => Boolean(options.directory?.()),
    disabled: () => disabled.value,
    onFiles: addFiles,
  })

  const maxReached = computed(() => {
    const maxFiles = options.maxFiles?.()
    return maxFiles !== undefined && maxFiles > 0 && queue.fileList.value.length >= maxFiles
  })

  function emitRejected(rejected: UploadRejectedFile[]) {
    if (rejected.length) {
      options.onRejected?.(rejected)
    }
  }

  async function applyFilters(files: File[], initialRejected: UploadRejectedFile[]) {
    const rejected = [...initialRejected]
    let nextFiles = [...files]

    if (options.beforeAdd) {
      const acceptedFiles = await options.beforeAdd(nextFiles)
      const acceptedFileSet = new Set(acceptedFiles)
      nextFiles.forEach((file) => {
        if (!acceptedFileSet.has(file)) {
          rejected.push({ file, reason: 'before-add' })
        }
      })
      nextFiles = acceptedFiles
    }

    const maxFileSize = options.maxFileSize?.()
    if (maxFileSize !== undefined) {
      const validFiles = nextFiles.filter((file) => {
        if (file.size > maxFileSize) {
          rejected.push({ file, reason: 'max-file-size' })
          return false
        }
        return true
      })
      nextFiles = validFiles
    }

    const maxTotalSize = options.maxTotalSize?.()
    if (maxTotalSize !== undefined) {
      let totalSize = queue.fileList.value.reduce((sum, file) => sum + (file.size || 0), 0)
      nextFiles = nextFiles.filter((file) => {
        totalSize += file.size
        if (totalSize > maxTotalSize) {
          rejected.push({ file, reason: 'max-total-size' })
          return false
        }
        return true
      })
    }

    const maxFiles = options.maxFiles?.()
    if (maxFiles !== undefined && maxFiles > 0 && queue.fileList.value.length + nextFiles.length > maxFiles) {
      options.onExceed?.(nextFiles, queue.fileList.value)
      const allowedCount = Math.max(maxFiles - queue.fileList.value.length, 0)
      nextFiles.slice(allowedCount).forEach((file) => rejected.push({ file, reason: 'max-files' }))
      nextFiles = nextFiles.slice(0, allowedCount)
    }

    return { files: nextFiles, rejected }
  }

  async function createFileItem(file: File): Promise<UploadFileItem | undefined> {
    const beforeRead = options.beforeRead?.()
    let nextFile = file

    if (beforeRead) {
      const result = await beforeRead(file)
      if (!result) {
        emitRejected([{ file, reason: 'before-read' }])
        return undefined
      }
      if (result instanceof File) {
        nextFile = result
      }
    }

    const fileItem: UploadFileItem = {
      uid: createUploadUid(),
      name: nextFile.name,
      size: nextFile.size,
      type: nextFile.type,
      file: nextFile,
      status: 'reading',
      percent: 0,
    }

    const thumbnailUrl = await resolveThumbnailUrl({
      file: nextFile,
      fileItem,
      resolveType: options.resolveType?.() || defaultResolveType,
      createThumbnailUrl: options.createThumbnailUrl?.(),
    })

    return {
      ...fileItem,
      url: thumbnailUrl,
      thumbnailUrl,
      status: 'ready',
    }
  }

  async function addFiles(files: File[], initialRejected: UploadRejectedFile[]) {
    if (disabled.value) {
      return
    }

    const { files: filteredFiles, rejected } = await applyFilters(files, initialRejected)
    emitRejected(rejected)

    const fileItems = (await Promise.all(filteredFiles.map(createFileItem))).filter(Boolean) as UploadFileItem[]
    if (!fileItems.length) {
      return
    }

    queue.append(fileItems)
    fileItems.forEach((file) => options.onRead?.(file))

    if (options.autoUpload?.() !== false && (options.action?.() || options.customRequest?.())) {
      submitMany(fileItems)
    }
  }

  async function submitMany(files: UploadFileItem[]) {
    files.forEach(submit)
  }

  async function submit(file?: UploadFileItem) {
    const targets = file ? [file] : queue.fileList.value.filter((item) => item.status === 'ready' || item.status === 'error' || item.status === 'canceled')
    if (!targets.length || disabled.value) {
      return
    }

    targets.forEach(uploadFile)
  }

  async function uploadFile(file: UploadFileItem) {
    const beforeUpload = options.beforeUpload?.()
    let uploadFileItem = file

    if (beforeUpload) {
      const result = await beforeUpload(file)
      if (!result) {
        return
      }
      if (result instanceof File || result instanceof Blob) {
        uploadFileItem = {
          ...file,
          file: result instanceof File ? result : new File([result], file.name || 'file', { type: result.type }),
          size: result.size,
          type: result.type,
        }
      }
    }

    queue.patch(file.uid, { ...uploadFileItem, status: 'uploading', percent: 0, error: undefined })

    const handleProgress = (event: { percent: number } & ProgressEvent) => {
      queue.patch(file.uid, { status: 'uploading', percent: event.percent })
      const latest = queue.fileList.value.find((item) => item.uid === file.uid)
      if (latest) {
        options.onProgress?.(latest, event)
      }
    }

    const handleSuccess = (response?: unknown) => {
      queue.patch(file.uid, { status: 'success', percent: 100, response })
      requests.delete(file.uid)
      const latest = queue.fileList.value.find((item) => item.uid === file.uid)
      if (latest) {
        options.onSuccess?.(latest)
      }
    }

    const handleError = (error?: unknown) => {
      queue.patch(file.uid, { status: 'error', percent: 0, error })
      requests.delete(file.uid)
      const latest = queue.fileList.value.find((item) => item.uid === file.uid)
      if (latest) {
        options.onError?.(latest)
      }
    }

    const requestOptions = {
      action: options.action?.(),
      method: options.method?.() ?? defaultMethod,
      headers: options.headers?.(),
      data: options.data?.(),
      name: options.name?.() ?? defaultName,
      withCredentials: Boolean(options.withCredentials?.()),
      isSuccessResponse: options.isSuccessResponse?.(),
      file: uploadFileItem,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
    }

    const request = await (options.customRequest?.() ? options.customRequest?.()(requestOptions) : uploadRequest(requestOptions))
    if (request) {
      requests.set(file.uid, request)
    }
  }

  function abort(file?: UploadFileItem) {
    const targets = file ? [file] : queue.fileList.value.filter((item) => item.status === 'uploading')
    targets.forEach((target) => {
      requests.get(target.uid)?.abort?.()
      requests.delete(target.uid)
      queue.patch(target.uid, { status: 'canceled', percent: 0 })
    })
  }

  async function remove(file: UploadFileItem) {
    const beforeRemove = options.beforeRemove?.()
    if (beforeRemove && !(await beforeRemove(file, queue.fileList.value))) {
      return
    }

    abort(file)
    queue.remove(file)
    options.onRemove?.(file)
  }

  function retry(file: UploadFileItem) {
    if (file.status === 'error' || file.status === 'canceled') {
      submit(file)
    }
  }

  function preview(file: UploadFileItem, event: MouseEvent) {
    options.onPreview?.(file, event)
  }

  function reset() {
    abort()
    queue.reset()
  }

  onBeforeUnmount(() => {
    abort()
    queue.fileList.value.forEach(revokeThumbnailUrl)
  })

  return {
    fileList: queue.fileList,
    maxReached,
    disabled,
    inputRef: picker.inputRef,
    dragOver: picker.dragOver,
    chooseFile: picker.chooseFile,
    handleInputChange: picker.handleInputChange,
    handleDragOver: picker.handleDragOver,
    handleDragLeave: picker.handleDragLeave,
    handleDrop: picker.handleDrop,
    submit,
    abort,
    retry,
    remove,
    preview,
    reset,
    clearSuccess: () => queue.clearByStatus('success'),
    clearError: () => queue.clearByStatus('error'),
    getFiles: queue.getFiles,
  }
}
