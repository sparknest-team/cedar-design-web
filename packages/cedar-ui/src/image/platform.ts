import { computed, defineComponent, h } from 'vue'
import { IconClose as PreviewCloseIcon } from '@cedarjs/icons-vue/icon-close'
import { IconFullscreen } from '@cedarjs/icons-vue/icon-fullscreen'
import { IconImageClose as ImageErrorIcon } from '@cedarjs/icons-vue/icon-image-close'
import { IconLoading as ImageLoadingIcon } from '@cedarjs/icons-vue/icon-loading'
import { IconOriginalSize } from '@cedarjs/icons-vue/icon-original-size'
import { IconRotateLeft } from '@cedarjs/icons-vue/icon-rotate-left'
import { IconRotateRight } from '@cedarjs/icons-vue/icon-rotate-right'
import { IconZoomIn } from '@cedarjs/icons-vue/icon-zoom-in'
import { IconZoomOut } from '@cedarjs/icons-vue/icon-zoom-out'
import { createNamespace } from '../_utils/global-config'
import { toSizeUnit } from '../_utils/maple/elements'
import { useI18n } from '../locale'
import type { ImagePreviewActionName } from './api'

const Glyph = (char: string) => defineComponent({ setup: () => () => h('span', char) })
export const IconPrev = Glyph('‹')
export const IconNext = Glyph('›')
export const IconDownload = Glyph('↓')

export {
  ImageErrorIcon,
  ImageLoadingIcon,
  PreviewCloseIcon,
  IconFullscreen,
  IconOriginalSize,
  IconRotateLeft,
  IconRotateRight,
  IconZoomIn,
  IconZoomOut,
  toSizeUnit,
}

export const DefaultLoader = defineComponent({
  name: 'ImageDefaultLoader',
  setup() {
    const { n } = createNamespace('image')
    const { t } = useI18n()
    return () =>
      h('div', { class: n('loader') }, [
        h('div', { class: n('loader-spin') }, [
          h(ImageLoadingIcon),
          h('div', { class: n('loader-spin-text') }, t('image.loading')),
        ]),
      ])
  },
})

export function useActionLabels() {
  const { t } = useI18n()
  return computed<Record<ImagePreviewActionName, string>>(() => ({
    prev: '‹',
    next: '›',
    fullScreen: t('imagePreview.fullScreen'),
    rotateLeft: t('imagePreview.rotateLeft'),
    rotateRight: t('imagePreview.rotateRight'),
    originalSize: t('imagePreview.originalSize'),
    zoomOut: t('imagePreview.zoomOut'),
    zoomIn: t('imagePreview.zoomIn'),
    download: 'Download',
    close: 'Close',
  }))
}
