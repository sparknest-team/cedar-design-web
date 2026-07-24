<template>
  <div :class="cls">
    <div :class="`${prefixCls}-wrapper`">
      <div v-if="$slots.breadcrumb" :class="`${prefixCls}-breadcrumb`">
        <slot name="breadcrumb" />
      </div>
      <div :class="`${prefixCls}-header`">
        <span :class="[`${prefixCls}-main`, { [`${prefixCls}-main-with-back`]: showBack }]">
          <icon-hover
            v-if="showBack"
            :class="`${prefixCls}-back-btn`"
            :prefix="prefixCls"
            @click="handleBack"
          >
            <slot name="back-icon">
              <icon-left />
            </slot>
          </icon-hover>
          <span :class="`${prefixCls}-title`">
            <slot name="title">
              <typography-title
                v-if="title"
                :class="`${prefixCls}-title-text`"
                :heading="4"
                :ellipsis="ellipsis"
              >
                {{ title }}
              </typography-title>
            </slot>
          </span>
          <span v-if="$slots.subtitle || subtitle" :class="`${prefixCls}-divider`" />
          <span v-if="$slots.subtitle || subtitle" :class="`${prefixCls}-subtitle`">
            <slot name="subtitle">{{ subtitle }}</slot>
          </span>
        </span>
        <span v-if="$slots.extra" :class="`${prefixCls}-extra`">
          <slot name="extra" />
        </span>
      </div>
    </div>
    <div v-if="$slots.default" :class="`${prefixCls}-content`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { EllipsisConfig } from '../typography/types'
import { getPrefixCls } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import IconLeft from '../icon/icon-left'
import { TypographyTitle } from '../typography'
import { pageHeaderProps } from './props'

export default defineComponent({
  name: 'PageHeader',
  components: { IconHover, IconLeft, TypographyTitle },
  props: pageHeaderProps,
  emits: {
    /**
     * @zh 点击返回按钮时触发
     * @en Emitted when the back button is clicked
     * @property {Event} event
     */
    back: (event: Event) => true,
  },
  /**
   * @zh 返回按钮
   * @en Back icon
   * @slot back-icon
   */
  /**
   * @zh 主标题
   * @en Main title
   * @slot title
   */
  /**
   * @zh 次标题
   * @en Subtitle
   * @slot subtitle
   */
  /**
   * @zh 面包屑
   * @en Breadcrumb
   * @slot breadcrumb
   */
  /**
   * @zh 额外的展示内容
   * @en Extra content
   * @slot extra
   */
  /**
   * @zh 页头下方内容区
   * @en Content below the header
   * @slot default
   */
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('page-header')
    const ellipsis = ref<boolean | EllipsisConfig>({
      css: true,
      showTooltip: false,
    })

    const handleBack = (e: Event) => {
      emit('back', e)
    }

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-with-breadcrumb`]: Boolean(slots.breadcrumb),
        [`${prefixCls}-with-content`]: Boolean(slots.default),
      },
    ])

    return {
      prefixCls,
      cls,
      handleBack,
      ellipsis,
    }
  },
})
</script>
