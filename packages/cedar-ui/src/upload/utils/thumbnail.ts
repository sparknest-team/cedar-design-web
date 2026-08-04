import type { UploadCreateThumbnailUrl, UploadFileItem, UploadResolveType } from '../interfaces'

function readAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export async function resolveThumbnailUrl(options: {
  file: File
  fileItem: UploadFileItem
  resolveType: UploadResolveType
  createThumbnailUrl?: UploadCreateThumbnailUrl
}) {
  const customUrl = await options.createThumbnailUrl?.(options)
  if (customUrl) {
    return customUrl
  }

  if (!options.file.type.startsWith('image/')) {
    return undefined
  }

  if (options.resolveType === 'data-url') {
    return readAsDataUrl(options.file)
  }

  if (options.resolveType === 'object-url') {
    return URL.createObjectURL(options.file)
  }

  return undefined
}

export function revokeThumbnailUrl(file: UploadFileItem) {
  if (file.thumbnailUrl?.startsWith('blob:')) {
    URL.revokeObjectURL(file.thumbnailUrl)
  }
}
