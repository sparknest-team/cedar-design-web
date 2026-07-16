// @sync-with: maple-ui/src/image/types.ts

export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface ImagePreviewProps {
  /** 预览是否可见（主命名） */
  visible?: boolean
  /** @alias visible */
  show?: boolean
  defaultVisible?: boolean
  src?: string
  images?: string[]
  /** @alias images */
  srcList?: string[]
  current?: number
  /** @alias current（预览初始索引） */
  initialIndex?: number
  closable?: boolean
  /** @alias closable */
  closeable?: boolean
  maskClosable?: boolean
  loop?: boolean
  /** @alias loop */
  infinite?: boolean
  zoom?: number | string
  wheelZoom?: boolean
  keyboard?: boolean
  actions?: string[]
  /** @alias actions */
  actionsLayout?: string[]
  teleport?: string | Element | false
  /** @alias teleport */
  popupContainer?: string | HTMLElement
  lockScroll?: boolean
  closeOnKeyEscape?: boolean
  /** @alias closeOnKeyEscape */
  escToClose?: boolean
  imagePreventDefault?: boolean
  indicator?: boolean
  renderToBody?: boolean
  defaultScale?: number
  zoomRate?: number
  inGroup?: boolean
  groupArrowProps?: Record<string, any>
  onChange?: (index: number) => void
  onClose?: () => void
  onLongPress?: (index: number) => void
  onPreviewVisibleChange?: (visible: boolean) => void
}

export interface ImageProps {
  src?: string
  previewSrc?: string
  width?: string | number
  height?: string | number
  fit?: ImageFit
  position?: string
  radius?: string | number
  alt?: string
  title?: string
  description?: string
  lazy?: boolean
  loading?: string
  error?: string
  showLoader?: boolean
  ripple?: boolean
  block?: boolean
  preview?: boolean
  previewVisible?: boolean
  defaultPreviewVisible?: boolean
  previewProps?: Partial<ImagePreviewProps>
  hideFooter?: boolean | 'never'
  footerPosition?: 'inner' | 'outer'
  footerClass?: string | string[] | Record<string, any>
  renderToBody?: boolean
}

export interface ImagePreviewGroupProps extends Omit<ImagePreviewProps, 'src' | 'onClose'> {
  images?: string[]
  /** @alias images */
  srcList?: string[]
  defaultCurrent?: number
  /** @alias defaultCurrent */
  initialIndex?: number
  previewProps?: Partial<ImagePreviewProps>
}

export interface ImagePreviewOptions extends ImagePreviewProps {
  onOpen?: () => void
  onOpened?: () => void
  onClosed?: () => void
  onKeyEscape?: () => void
}

export type UserImagePreviewOptions = ImagePreviewOptions | string | string[]

export interface ImageUrlRecord {
  url: string
  canPreview: boolean
}

export interface PreviewGroupContext {
  registerImageUrl: (id: number, url: string, canPreview: boolean) => () => void
  preview: (imageId: number) => void
}
