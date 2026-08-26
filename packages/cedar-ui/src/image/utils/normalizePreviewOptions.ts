import { isArray, isString } from '../../_utils/is'
import type { ImagePreviewOptions, UserImagePreviewOptions } from '../types.unified'
import {
  resolveActionsLayout,
  resolveEscToClose,
  resolveLoop,
  resolvePopupContainer,
  resolvePreviewImages,
} from './resolvePreviewOptions'

function toNumber(value: number | string): number {
  return typeof value === 'number' ? value : Number(value)
}

/** Normalize preview options to the canonical public field names. */
export function normalizePreviewOptions(
  options: UserImagePreviewOptions = {},
  defaultOptions: ImagePreviewOptions = {},
): ImagePreviewOptions {
  let merged: ImagePreviewOptions

  if (isString(options)) {
    merged = {
      ...defaultOptions,
      images: [options],
    }
  } else if (isArray(options)) {
    merged = {
      ...defaultOptions,
      images: options,
    }
  } else {
    const images = resolvePreviewImages(options)
    merged = {
      ...defaultOptions,
      ...options,
      images: images.length ? images : options.images,
    }
  }

  const images = resolvePreviewImages(merged)
  const loop = resolveLoop(merged, false)
  const popupContainer = resolvePopupContainer(merged)
  const current =
    merged.current !== undefined
      ? toNumber(merged.current)
      : merged.current
  const actionsLayout = resolveActionsLayout(merged)
  const escToClose = resolveEscToClose(merged)

  return {
    ...merged,
    images: images.length ? images : merged.images,
    loop,
    popupContainer: popupContainer as HTMLElement | string | undefined,
    closable: merged.closable,
    open: merged.open,
    current,
    actionsLayout,
    escToClose,
  }
}
