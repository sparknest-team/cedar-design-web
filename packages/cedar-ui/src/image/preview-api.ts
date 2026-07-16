import { createApp, h, nextTick, reactive, type App } from 'vue'
import ImagePreview from './preview.vue'
import ImagePreviewGroup from './preview-group.vue'
import { imagePlatformConfig } from './platform.config'
import type { ImagePreviewOptions, UserImagePreviewOptions } from './types.unified'
import { normalizePreviewOptions } from './utils/normalizePreviewOptions'
import { resolveLoop, resolveTeleport } from './utils/resolvePreviewAliases'

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
    visible: true,
    show: true,
    closable: imagePreviewOptions.closable ?? imagePlatformConfig.defaultClosable,
    maskClosable: imagePreviewOptions.maskClosable ?? imagePlatformConfig.defaultMaskClosable,
    actionsLayout: imagePreviewOptions.actionsLayout ?? imagePlatformConfig.toolbarActions,
  })

  singletonOptions = reactiveOptions

  const images = reactiveOptions.images ?? []
  const useGroup = images.length > 1
  const loop = resolveLoop(reactiveOptions, imagePlatformConfig.defaultLoop)
  const popupContainer = resolveTeleport(reactiveOptions)

  singletonHost = document.createElement('div')
  document.body.appendChild(singletonHost)

  singletonApp = createApp({
    setup() {
      return () => {
        if (useGroup) {
          return h(ImagePreviewGroup, {
            images,
            srcList: images,
            visible: reactiveOptions.visible,
            current: reactiveOptions.current ?? 0,
            loop,
            infinite: loop,
            closable: reactiveOptions.closable,
            maskClosable: reactiveOptions.maskClosable,
            actionsLayout: reactiveOptions.actionsLayout,
            popupContainer,
            teleport: popupContainer,
            previewProps: reactiveOptions,
            'onUpdate:visible': (value: boolean) => {
              reactiveOptions.visible = value
              reactiveOptions.show = value
              if (!value) {
                callClose()
              }
            },
            onPreviewVisibleChange: (value: boolean) => {
              reactiveOptions.onPreviewVisibleChange?.(value)
              if (!value) {
                callClose()
              }
            },
            onVisibleChange: (value: boolean) => {
              reactiveOptions.onVisibleChange?.(value)
            },
            onChange: (index: number) => {
              reactiveOptions.current = index
              reactiveOptions.onChange?.(index)
            },
          })
        }

        return h(ImagePreview, {
          src: images[0] ?? reactiveOptions.src,
          visible: reactiveOptions.visible,
          show: reactiveOptions.show,
          closable: reactiveOptions.closable,
          maskClosable: reactiveOptions.maskClosable,
          actionsLayout: reactiveOptions.actionsLayout,
          popupContainer,
          teleport: popupContainer,
          wheelZoom: reactiveOptions.wheelZoom,
          keyboard: reactiveOptions.keyboard,
          escToClose: reactiveOptions.escToClose ?? reactiveOptions.closeOnKeyEscape,
          closeOnKeyEscape: reactiveOptions.closeOnKeyEscape ?? reactiveOptions.escToClose,
          onClose: () => {
            reactiveOptions.onClose?.()
            callClose()
          },
          onPreviewVisibleChange: (value: boolean) => {
            reactiveOptions.onPreviewVisibleChange?.(value)
          },
          onVisibleChange: (value: boolean) => {
            reactiveOptions.onVisibleChange?.(value)
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
      prevOptions.visible = false
      prevOptions.show = false
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
