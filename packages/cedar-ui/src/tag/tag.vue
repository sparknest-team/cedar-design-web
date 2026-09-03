<template>
  <span
    v-if="computedShow"
    :class="cls"
    :style="style"
    :role="checkable ? 'checkbox' : undefined"
    :aria-checked="checkable ? computedChecked : undefined"
    :tabindex="checkable ? 0 : undefined"
    @click="handleClick"
    @keydown.enter.prevent="handleKeyboardActivation"
    @keydown.space.prevent="handleKeyboardActivation"
  >
    <span v-if="$slots.icon" :class="classes(n('icon'))">
      <slot name="icon" />
    </span>
    <span v-if="nowrap" :class="classes(n('text'))">
      <slot />
    </span>
    <slot v-else />
    <icon-hover
      v-if="closable && !loading"
      role="button"
      aria-label="IconClose"
      tabindex="0"
      :prefix="n()"
      :class="classes(n('close-btn'))"
      @click.stop="handleClose"
      @keydown.enter.prevent.stop="handleKeyboardActivation"
      @keydown.space.prevent.stop="handleKeyboardActivation"
    >
      <slot name="close-icon">
        <icon-close />
      </slot>
    </icon-hover>
    <span v-if="loading" :class="classes(n('loading-icon'))">
      <icon-loading />
    </span>
  </span>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue'
import { computed, defineComponent, ref, toRefs, inject } from 'vue'
import { createNamespace } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { TAG_COLORS } from './types'
import { useSize } from '../_hooks/use-size'
import { configProviderInjectionKey } from '../config-provider/context'
import { tagProps } from './props'

export default defineComponent({
  name: createNamespace('tag').name,
  components: {
    IconHover,
    IconClose,
    IconLoading,
  },
  props: tagProps,
  emits: {
    'update:show': (show: boolean) => true,
    'update:checked': (checked: boolean) => true,
    /**
     * @zh 点击关闭按钮时触发
     * @en Emitted when the close button is clicked
     * @param {MouseEvent} ev
     */
    close: (ev: MouseEvent) => true,
    /**
     * @zh 用户选中时触发（仅在可选中模式下触发）
     * @en Emitted when the user check (emit only in the checkable mode)
     * @param {boolean} checked
     * @param {MouseEvent} ev
     */
    check: (checked: boolean, ev: MouseEvent) => true,
  },
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  /**
   * @zh 关闭按钮的图标
   * @en IconClose button icon
   * @slot close-icon
   */
  setup(props, { emit }) {
    const { n, classes } = createNamespace('tag')
    const { size } = toRefs(props)
    const isBuiltInColor = computed(() => props.color && TAG_COLORS.includes(props.color as any))
    const isCustomColor = computed(() => props.color && !TAG_COLORS.includes(props.color as any))
    const _show = ref(props.defaultShow)
    const _checked = ref(props.defaultChecked)
    const computedShow = computed(() => props.show ?? _show.value)
    const computedChecked = computed(() => (props.checkable ? (props.checked ?? _checked.value) : true))
    const { mergedSize: _mergedSize } = useSize(size)
    const mergedSize = _mergedSize

    const handleClose = (ev: MouseEvent) => {
      if (props.loading) return
      _show.value = false
      emit('update:show', false)
      emit('close', ev)
    }

    const handleClick = (ev: MouseEvent) => {
      if (props.checkable && !props.loading) {
        const newChecked = !computedChecked.value
        _checked.value = newChecked
        emit('update:checked', newChecked)
        emit('check', newChecked, ev)
      }
    }

    const handleKeyboardActivation = (ev: KeyboardEvent) => {
      ;(ev.currentTarget as HTMLElement).click()
    }

    const configCtx = inject(configProviderInjectionKey, undefined)
    const rtl = computed(() => configCtx?.rtl ?? false)
    const cls = computed(() => {
      return classes(
        n(),
        n(`--size-${mergedSize.value}`),
        n(`--variant-${props.variant}`),
        [props.status && !isBuiltInColor.value && !isCustomColor.value, n(`--status-${props.status}`)],
        [props.loading, n('--loading')],
        [!computedShow.value, n('--hide')],
        [isBuiltInColor.value, n(`--${props.color}`)],
        [props.checkable, n('--checkable')],
        [computedChecked.value, n('--checked')],
        [props.nowrap, n('--nowrap')],
        [props.round, n('--round')],
        [isCustomColor.value, n('--custom-color')],
        [rtl.value, n('--rtl')],
      )
    })

    const style = computed(() => {
      if (isCustomColor.value || props.textColor) {
        if (props.variant === 'outline') {
          return {
            color: props.textColor || props.color,
            borderColor: props.color,
            backgroundColor: 'transparent',
          } as CSSProperties
        }
        return {
          background: props.color,
          color: props.textColor,
          borderColor: props.color,
        } as CSSProperties
      }
      return undefined
    })

    return {
      cls,
      style,
      computedShow,
      computedChecked,
      n,
      classes,
      handleClick,
      handleClose,
      handleKeyboardActivation,
    }
  },
})
</script>
