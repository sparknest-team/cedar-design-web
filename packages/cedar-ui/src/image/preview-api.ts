import { createApp, h, nextTick, reactive, type App } from 'vue'
import ImagePreview from './preview.vue'
import ImagePreviewGroup from './preview-group.vue'
import { imagePlatformConfig } from './platform.config'
import type { ImagePreviewOptions, UserImagePreviewOptions } from './types.unified'
import { normalizePreviewOptions } from './utils/normalizePreviewOptions'
import { resolveLoop, resolvePopupContainer } from './utils/resolvePreviewOptions'

let singletonApp: App | null = null
let singletonHost: HTMLElement | null = null
let singletonOptions: ImagePreviewOptions | null = null
let defaultOptions: ImagePreviewOptions = {}

function unmountSingleton() {
  if (singletonApp && singletonHost) {
    singletonApp.unmount()
    singletonHost.parentNode?.removeChild(singletonHost)
  }

  singletonApp = null
  singletonHost = null
  singletonOptions = null
}

function previewImage(options: UserImagePreviewOptions) {
  if (typeof window === 'undefined') {
    return
  }

  previewImage.close()

  const imagePreviewOptions = normalizePreviewOptions(options, defaultOptions)
  const reactiveOptions = reactive({
    ...imagePreviewOptions,
    open: true,
    closable: imagePreviewOptions.closable ?? imagePlatformConfig.defaultClosable,
    maskClosable: imagePreviewOptions.maskClosable ?? imagePlatformConfig.defaultMaskClosable,
    actionsLayout: imagePreviewOptions.actionsLayout ?? imagePlatformConfig.toolbarActions,
  })

  singletonOptions = reactiveOptions

  const images = reactiveOptions.images ?? []
  const useGroup = images.length > 1
  const loop = resolveLoop(reactiveOptions, imagePlatformConfig.defaultLoop)
  const popupContainer = resolvePopupContainer(reactiveOptions) as string | HTMLElement | undefined

  singletonHost = document.createElement('div')
  document.body.appendChild(singletonHost)

  singletonApp = createApp({
    setup() {
      return () => {
        if (useGroup) {
          return h(ImagePreviewGroup, {
            images,
            open: reactiveOptions.open,
            current: reactiveOptions.current ?? 0,
            loop,
            closable: reactiveOptions.closable,
            maskClosable: reactiveOptions.maskClosable,
            actionsLayout: reactiveOptions.actionsLayout,
            popupContainer,
            previewProps: reactiveOptions,
            'onUpdate:open': (value: boolean) => {
              reactiveOptions.open = value
              if (!value) {
                callClose()
              }
            },
            onOpenChange: (value: boolean) => {
              reactiveOptions.onOpenChange?.(value)
              if (!value) {
                callClose()
              }
            },
            onChange: (index: number) => {
              reactiveOptions.current = index
              reactiveOptions.onChange?.(index)
            },
          })
        }

        return h(ImagePreview, {
          src: images[0] ?? reactiveOptions.src,
          open: reactiveOptions.open,
          closable: reactiveOptions.closable,
          maskClosable: reactiveOptions.maskClosable,
          actionsLayout: reactiveOptions.actionsLayout,
          popupContainer,
          wheelZoom: reactiveOptions.wheelZoom ?? true,
          keyboard: reactiveOptions.keyboard ?? true,
          escToClose: reactiveOptions.escToClose,
          onClose: () => {
            reactiveOptions.onClose?.()
            callClose()
          },
          onOpenChange: (value: boolean) => {
            reactiveOptions.onOpenChange?.(value)
          },
        })
      }
    },
  })

  singletonApp.mount(singletonHost)

  function callClose() {
    reactiveOptions.onClosed?.()
    unmountSingleton()
  }
}

previewImage.close = () => {
  if (singletonOptions != null) {
    const prevOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevOptions.open = false
      unmountSingleton()
    })
  }
}

previewImage.setDefaultOptions = (options: ImagePreviewOptions) => {
  defaultOptions = options
}

previewImage.resetDefaultOptions = () => {
  defaultOptions = {}
}

previewImage.Component = ImagePreview
previewImage.Group = ImagePreviewGroup

export { previewImage, ImagePreview, ImagePreviewGroup }
export type { ImagePreviewOptions, UserImagePreviewOptions }

export default previewImage

export { previewImage as ImagePreviewFn }
