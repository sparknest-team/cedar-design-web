import { computed, ref, watch } from 'vue'
import { revokeThumbnailUrl } from '../utils/thumbnail'
import type { UploadFileItem, UploadStatus } from '../interfaces'

function cloneFile(file: UploadFileItem): UploadFileItem {
  return {
    ...file,
    status: file.status || 'success',
    percent: file.percent ?? (file.status === 'error' ? 0 : 100),
  }
}

export function useUploadQueue(options: {
  fileList?: () => UploadFileItem[] | undefined
  defaultFileList?: () => UploadFileItem[] | undefined
  onChange?: (files: UploadFileItem[], file: UploadFileItem) => void
  onUpdateFileList?: (files: UploadFileItem[]) => void
}) {
  const innerFileList = ref<UploadFileItem[]>((options.defaultFileList?.() || []).map(cloneFile))
  const mergedFileList = computed(() => options.fileList?.() || innerFileList.value)

  watch(
    () => options.fileList?.(),
    (files) => {
      if (files) {
        innerFileList.value = files.map(cloneFile)
      }
    },
    { deep: true },
  )

  function commit(next: UploadFileItem[], changedFile: UploadFileItem) {
    if (!options.fileList?.()) {
      innerFileList.value = next
    }

    options.onUpdateFileList?.(next)
    options.onChange?.(next, changedFile)
  }

  function append(files: UploadFileItem[]) {
    const next = [...mergedFileList.value, ...files]
    files.forEach((file) => commit(next, file))
  }

  function patch(uid: string, patcher: Partial<UploadFileItem> | ((file: UploadFileItem) => Partial<UploadFileItem>)) {
    const next = mergedFileList.value.map((file) => {
      if (file.uid !== uid) {
        return file
      }

      const patch = typeof patcher === 'function' ? patcher(file) : patcher
      return { ...file, ...patch }
    })
    const changedFile = next.find((file) => file.uid === uid)
    if (changedFile) {
      commit(next, changedFile)
    }
  }

  function remove(file: UploadFileItem) {
    revokeThumbnailUrl(file)
    const removedFile = { ...file, status: 'removed' as const }
    const next = mergedFileList.value.filter((item) => item.uid !== file.uid)
    commit(next, removedFile)
  }

  function clearByStatus(status: UploadStatus) {
    const removing = mergedFileList.value.filter((file) => file.status === status)
    removing.forEach(revokeThumbnailUrl)
    const next = mergedFileList.value.filter((file) => file.status !== status)
    if (removing[0]) {
      commit(next, { ...removing[0], status: 'removed' })
    }
  }

  function reset() {
    mergedFileList.value.forEach(revokeThumbnailUrl)
    innerFileList.value = []
    options.onUpdateFileList?.([])
  }

  function getFiles(status?: UploadStatus) {
    return status ? mergedFileList.value.filter((file) => file.status === status) : [...mergedFileList.value]
  }

  return {
    fileList: mergedFileList,
    append,
    patch,
    remove,
    reset,
    clearByStatus,
    getFiles,
  }
}
