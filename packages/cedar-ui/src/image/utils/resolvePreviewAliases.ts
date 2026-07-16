// @sync-with: maple-ui/src/image/utils/resolvePreviewAliases.ts

import type { ImagePreviewOptions, ImagePreviewProps } from '../types.unified'

type TeleportTarget = string | Element | false | HTMLElement | undefined

function toNumber(value: number | string): number {
  return typeof value === 'number' ? value : Number(value)
}

export function resolvePreviewImages(source: {
  images?: string[]
  srcList?: string[]
  src?: string
}): string[] {
  if (source.images?.length) {
    return source.images
  }

  if (source.srcList?.length) {
    return source.srcList
  }

  if (source.src) {
    return [source.src]
  }

  return []
}

export function resolvePreviewVisible(
  source: { visible?: boolean; show?: boolean; defaultVisible?: boolean },
  localVisible?: boolean,
): boolean {
  if (source.visible !== undefined) {
    return source.visible
  }

  if (source.show !== undefined) {
    return source.show
  }

  return localVisible ?? source.defaultVisible ?? false
}

export function resolvePreviewCurrent(
  source: { current?: number | string; initialIndex?: number | string; defaultCurrent?: number },
  localCurrent?: number,
): number {
  if (source.current !== undefined) {
    return toNumber(source.current)
  }

  if (localCurrent !== undefined) {
    return localCurrent
  }

  if (source.initialIndex !== undefined) {
    return toNumber(source.initialIndex)
  }

  return source.defaultCurrent ?? 0
}

export function resolveClosable(
  source: { closable?: boolean; closeable?: boolean },
  fallback: boolean,
): boolean {
  return source.closable ?? source.closeable ?? fallback
}

export function resolveMaskClosable(
  source: { maskClosable?: boolean },
  fallback: boolean,
): boolean {
  return source.maskClosable ?? fallback
}

export function resolveLoop(
  source: { loop?: boolean; infinite?: boolean },
  fallback: boolean,
): boolean {
  if (source.loop !== undefined) {
    return source.loop
  }

  if (source.infinite !== undefined) {
    return source.infinite
  }

  return fallback
}

export function resolveTeleport(source: {
  teleport?: TeleportTarget
  popupContainer?: TeleportTarget
}): TeleportTarget {
  return source.teleport ?? source.popupContainer
}

export function resolveEscToClose(
  source: { closeOnKeyEscape?: boolean; escToClose?: boolean },
  fallback = true,
): boolean {
  return source.closeOnKeyEscape ?? source.escToClose ?? fallback
}

export function resolveActionsLayout(
  source: { actionsLayout?: string[]; actions?: string[] },
  fallback: string[] = [],
): string[] {
  return source.actionsLayout ?? source.actions ?? fallback
}

export function mergePreviewProps<T extends Partial<ImagePreviewProps>>(
  platformDefaults: Partial<ImagePreviewProps>,
  previewProps?: Partial<ImagePreviewProps>,
  directProps?: Partial<ImagePreviewProps>,
): T {
  return {
    ...platformDefaults,
    ...previewProps,
    ...directProps,
  } as T
}

export function normalizePreviewOptionAliases(options: ImagePreviewOptions): ImagePreviewOptions {
  const images = resolvePreviewImages(options)
  const loop = resolveLoop(options, options.loop ?? options.infinite ?? false)
  const teleport = resolveTeleport(options)
  const closable = options.closable ?? options.closeable
  const visible = options.visible ?? options.show
  const current =
    options.current !== undefined
      ? toNumber(options.current)
      : options.initialIndex !== undefined
        ? toNumber(options.initialIndex)
        : options.current
  const actionsLayout = resolveActionsLayout(options)
  const closeOnKeyEscape = resolveEscToClose(options)

  return {
    ...options,
    images: images.length ? images : options.images,
    loop,
    infinite: loop,
    teleport,
    popupContainer: teleport as HTMLElement | string | undefined,
    closable,
    closeable: closable,
    visible,
    show: visible,
    current,
    initialIndex: current,
    actionsLayout,
    actions: actionsLayout,
    closeOnKeyEscape,
    escToClose: closeOnKeyEscape,
  }
}
