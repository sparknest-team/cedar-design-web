<template>
  <div :class="cls">
    <span :class="`${prefixCls}-main`">
      <slot name="prefix"> </slot>
      <span :class="`${prefixCls}-title`">
        <slot name="title">
          <typography-title :class="`${prefixCls}-title-text`" :heading="4" :ellipsis="ellipsis"
            >{{ title }}
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
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { type EllipsisConfig } from '../typography/types'
import { getPrefixCls } from '../_utils/global-config'
import CIconHover from '../_components/icon-hover.vue'
import { TypographyTitle } from '../typography'

export default defineComponent({
  name: 'PageHeader',
  components: { CIconHover, TypographyTitle },
  props: {
    /**
     * @zh 页头的主标题
     * @en Main title
     */
    title: String,
    /**
     * @zh 页头的次标题
     * @en Subtitle
     */
    subtitle: String,
    /**
     * @zh 是否显示返回按钮
     * @en Whether to show the back button
     */
    showBack: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    /**
     * @zh 点击返回按钮时触发
     * @en Emitted when the back button is clicked
     * @property {Event} event
     */
    'back',
  ],
  /**
   * @zh 返回按钮
   * @en Back icon
   * @slot back-icon
   * @version 2.36.0
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
   * @zh 额外的展示内容
   * @en Extra content
   * @slot extra
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

    const cls = computed(() => [prefixCls])

    return {
      prefixCls,
      cls,
      handleBack,
      ellipsis,
    }
  },
})
</script>
