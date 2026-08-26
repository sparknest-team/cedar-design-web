<template>
  <div :class="wrapperClassNames" :style="wrapperStyles">
    <img
      ref="refImg"
      :class="`${prefixCls}-img`"
      v-bind="imgProps"
      :style="{ ...imgStyle, ...fitStyle }"
      :title="title"
      :alt="alt"
      @load="onImgLoaded"
      @error="onImgLoadError"
      @click="onImgClick"
    />
    <div v-if="!isLoaded" :class="`${prefixCls}-overlay`">
      <slot v-if="isError" name="error">
        <div :class="`${prefixCls}-error`">
          <div :class="`${prefixCls}-error-icon`">
            <slot name="error-icon">
              <IconImageClose />
            </slot>
          </div>
          <div v-if="alt || description" :class="`${prefixCls}-error-alt`">
            {{ alt || description }}
          </div>
        </div>
      </slot>
      <slot v-if="isLoading && (showLoader || $slots.loader)" name="loader">
        <div :class="[`${prefixCls}-loader`]">
          <div :class="`${prefixCls}-loader-spin`">
            <IconLoading />
            <div :class="`${prefixCls}-loader-spin-text`">
              {{ t('image.loading') }}
            </div>
          </div>
        </div>
      </slot>
    </div>
    <ImageFooter
      v-if="showFooter"
      :class="footerClass"
      :prefix-cls="prefixCls"
      :title="title"
      :description="description"
    >
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
    </ImageFooter>
    <ImagePreview
      v-if="isLoaded && mergePreview"
      :src="src"
      v-bind="previewProps"
      :open="mergedPreviewOpen"
      :render-to-body="renderToBody"
      @close="onPreviewClose"
    >
      <template #actions>
        <slot name="preview-actions" />
      </template>
    </ImagePreview>
  </div>
</template>
<script lang="ts">
import { imageProps } from './props'
import { createNamespace } from '../_utils/global-config'
import {
  defineComponent,
  PropType,
  toRefs,
  computed,
  watchEffect,
  ref,
  reactive,
  inject,
  StyleValue,
  CSSProperties,
} from 'vue'
import type { ImagePreviewProps } from './types'
import { IconImageClose } from '@cedarjs/icons-vue/icon-image-close'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import ImageFooter from './image-footer.vue'
import ImagePreview from './preview.vue'
import { getPrefixCls } from '../_utils/global-config'
import useImageLoadState from './hooks/use-image-load-status'
import { isServerRendering } from '../_utils/dom'
import { normalizeImageSizeProp } from './utils'
import { omit } from '../_utils/omit'
import useMergeState from '../_hooks/use-merge-state'
import { PreviewGroupInjectionKey } from './context'
import { useI18n } from '../locale'
import { isBoolean } from '../_utils/is'

let uuid = 0

export default defineComponent({
  name: createNamespace("image").name,
  components: {
    IconImageClose,
    IconLoading,
    ImageFooter,
    ImagePreview,
  },
  inheritAttrs: false,
  props: imageProps,
  emits: [
    /**
     * @zh 预览的打开和关闭事件
     * @en Preview opening and closing events
     * @param {boolean} open
     */
    'previewOpenChange',
    'update:previewOpen',
  ],
  /**
   * @zh 自定义错误状态的图标
   * @en Customize the icon of error content.
   * @slot error-icon
   */
  /**
   * @zh 自定义错误状态内容
   * @en Customize error content.
   * @slot error
   */
  /**
   * @zh 自定义加载状态效果
   * @en Customize loading effect.
   * @slot loader
   */
  /**
   * @zh 底部额外内容
   * @en Extra content at the bottom
   * @slot extra
   */
  setup(props, { attrs, slots, emit }) {
    const { t } = useI18n()
    const {
      height,
      width,
      hideFooter,
      title,
      description,
      src,
      footerPosition,
      defaultPreviewOpen,
      previewOpen,
      preview,
      previewProps,
    } = toRefs(props)

    const groupContext = inject(PreviewGroupInjectionKey, undefined)

    const prefixCls = getPrefixCls('image')

    const refImg = ref()

    const { isLoaded, isError, isLoading, setLoadStatus } = useImageLoadState()

    const sizeStyle = computed(() => ({
      width: normalizeImageSizeProp(width?.value),
      height: normalizeImageSizeProp(height?.value),
    }))

    const fitStyle = computed<CSSProperties>(() => {
      if (props.fit) {
        return { objectFit: props.fit }
      }
      return {}
    })

    const wrapperClassNames = computed(() => [
      `${prefixCls}`,
      {
        [`${prefixCls}-loading`]: isLoading.value,
        [`${prefixCls}-loading-error`]: isError.value,
        [`${prefixCls}-with-footer-inner`]: isLoaded && showFooter && footerPosition.value === 'inner',
        [`${prefixCls}-with-footer-outer`]: isLoaded && showFooter && footerPosition.value === 'outer',
      },
      attrs.class,
    ])

    const wrapperStyles = computed<StyleValue[]>(() => [sizeStyle.value, attrs.style as StyleValue])

    const showFooter = computed(() => {
      if (!(title?.value || description?.value || slots.extra)) {
        return false
      }
      if (isBoolean(hideFooter.value)) return !hideFooter.value && isLoaded.value
      return hideFooter.value === 'never'
    })

    const imgProps = computed(() => omit(attrs, ['class', 'style']))

    const [mergedPreviewOpen, setPreviewOpen] = useMergeState(
      defaultPreviewOpen.value,
      reactive({
        value: previewOpen,
      }),
    )

    const mergePreview = computed(() => !groupContext?.preview && preview.value)

    watchEffect(() => {
      if (isServerRendering || !refImg.value) return
      refImg.value.src = src?.value
      setLoadStatus('loading')
    })

    const imageId = uuid++
    watchEffect((onInvalidate) => {
      const unRegister = groupContext?.registerImageUrl?.(
        imageId,
        (previewProps?.value?.src ?? src?.value) || '',
        preview.value,
      )
      onInvalidate(() => {
        unRegister?.()
      })
    })

    function onImgLoaded() {
      setLoadStatus('loaded')
    }

    function onImgLoadError() {
      setLoadStatus('error')
    }

    function onImgClick() {
      if (!preview.value) return
      if (groupContext?.preview) {
        groupContext.preview(imageId)
      } else {
        emit('previewOpenChange', true)
        emit('update:previewOpen', true)
        setPreviewOpen(true)
      }
    }

    function onPreviewClose() {
      emit('previewOpenChange', false)
      emit('update:previewOpen', false)
      setPreviewOpen(false)
    }

    return {
      t,
      refImg,
      prefixCls,
      wrapperClassNames,
      wrapperStyles,
      showFooter,
      imgProps,
      imgStyle: sizeStyle,
      isLoaded,
      isError,
      isLoading,
      mergedPreviewOpen,
      mergePreview,
      onImgLoaded,
      onImgLoadError,
      onImgClick,
      onPreviewClose,
      fitStyle,
    }
  },
})
</script>
