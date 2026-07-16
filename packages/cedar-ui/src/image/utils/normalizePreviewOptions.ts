import { isArray, isString } from '../../_utils/is'
import type { ImagePreviewOptions, UserImagePreviewOptions } from '../types.unified'
import { normalizePreviewOptionAliases, resolvePreviewImages } from './resolvePreviewAliases'

export function normalizePreviewOptions(
  options: UserImagePreviewOptions = {},
  defaultOptions: ImagePreviewOptions = {},
): ImagePreviewOptions {
  if (isString(options)) {
    return normalizePreviewOptionAliases({
      ...defaultOptions,
      images: [options],
    })
  }

  if (isArray(options)) {
    return normalizePreviewOptionAliases({
      ...defaultOptions,
      images: options,
    })
  }

  const images = resolvePreviewImages(options)
  const merged = {
    ...defaultOptions,
    ...options,
    images: images.length ? images : options.images,
  }

  return normalizePreviewOptionAliases(merged)
}
