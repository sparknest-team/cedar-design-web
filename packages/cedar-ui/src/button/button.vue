<template>
  <component
    :is="component"
    v-ripple="ripple"
    v-hover:desktop="handleHovering"
    v-bind="attrs"
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--size-${states.size}`),
        [states.stacked, n('--stacked')],
        n(`--status-${states.status}`),
        n(`--variant-${states.variant}`),
        [states.block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
        [round, n('--round')],
        [loading || pending, n('--loading')],
        [states.disabled, n('--disabled')],
        [hovering, n('--hovering')],
        [isFocusing, n('--focus')],
      )
    "
    :style="computedStyle"
    :type="component === 'button' ? htmlType : undefined"
    :disabled="component === 'button' ? blocked : undefined"
    :aria-disabled="component === 'a' && blocked ? true : undefined"
    :aria-busy="loading || pending || undefined"
    :tabindex="component === 'a' && blocked ? -1 : undefined"
    :autofocus="autofocus"
    @click="handleClick"
    @focus="handleFocus"
    @blur="isFocusing = false"
  >
    <!-- 加载中 loading -->
    <div v-if="loading || pending" :class="classes(n(`--loading-${loadingType}`))">
      <icon-loading v-if="loadingType === 'default'" :spin="true" />
      <div v-else-if="loadingType === 'fill'">
        <icon-loading :size="24" :spin="true" />
      </div>
      <div v-else-if="loadingType === 'line'">
        <Progress indeterminate :showText="false" :strokeWidth="3" />
      </div>
    </div>

    <!-- icon图标 -->
    <span v-if="$slots.icon" :class="classes(n('--icon'))">
      <slot name="icon" />
    </span>

    <!-- 内容 -->
    <span :class="classes(n('content'), [(loading || pending) && loadingType === 'fill', n('--hidden')])">
      <slot />
    </span>

    <!-- 底色 -->
    <div :class="`${n('--underlay')}`" :style="computedUnderlayStyle"></div>

    <!-- 上色 -->
    <div :class="`${n('--overlay')}`"></div>

    <!-- 边框 -->
    <div :class="classes(n('border'))" :style="computedBorderStyle"></div>
    <div :class="classes(n('border-state'))" :style="computedBorderStyle"></div>
  </component>
</template>

<script lang="ts" setup>
import { computed, ref, type CSSProperties, useAttrs } from 'vue'
import { call, normalizeToArray } from '@cedarjs/shared'
import { buttonProps } from './props'
import { formatElevation } from '../_utils/maple/components'
import { useHoverOverlay } from '../hover-overlay'
import vHover from '../hover'
import vRipple from '../ripple'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import Progress from '../progress'
import { createNamespace } from '../_utils/global-config'
import { useButtonGroup } from './provide'

defineOptions({
  name: createNamespace('button').name,
})

const { n, classes } = createNamespace('button')
const props = defineProps(buttonProps)

const emit = defineEmits(['click', 'touchstart'])

const attrs = useAttrs()

const { buttonGroup } = useButtonGroup()
const isFocusing = ref(false)
const pending = ref(false)
const blocked = computed(() => Boolean(props.loading || pending.value || states.value.disabled))

const states = computed(() => {
  if (!buttonGroup) {
    return {
      status: props.status ?? 'default',
      variant: props.variant ?? 'default',
      size: props.size ?? 'md',
      elevation: formatElevation(props.elevation, 2),
      color: props.color,
      iconContainer: props.iconContainer,
      textColor: props.textColor,
      stacked: props.stacked ?? false,
      disabled: props.disabled ?? false,
      block: props.block,
    }
  }

  const { status, size, color, textColor, variant, stacked, disabled } = buttonGroup ?? {}

  return {
    variant: props.variant ?? variant.value,
    status: props.status ?? status.value,
    size: props.size ?? size.value,
    color: props.color ?? color.value,
    textColor: props.textColor ?? textColor.value,
    stacked: props.stacked ?? stacked.value,
    disabled: props.disabled ?? disabled.value,
    elevation: '',
  }
})
const { hovering, handleHovering } = useHoverOverlay()

const computedUnderlayStyle = computed(() => {
  const { color } = states.value
  if (color && states.value.variant !== 'default') {
    return { background: color }
  }
  return {}
})

const computedStyle = computed(() => {
  const { textColor, color } = states.value
  const styleObj: CSSProperties = {}
  if (textColor) {
    styleObj.color = textColor
  }
  if (color && states.value.variant === 'default') {
    styleObj.background = color
  }
  return styleObj
})

const computedBorderStyle = computed(() => {
  const { textColor } = states.value
  const styleObj: CSSProperties = {}
  if (textColor && states.value.variant === 'outline') {
    styleObj.borderColor = textColor
  }
  return styleObj
})

function attemptAutoLoading(result: any) {
  if (props.autoLoading) {
    pending.value = true

    Promise.all(normalizeToArray(result))
      .then(() => {
        pending.value = false
      })
      .catch(() => {
        pending.value = false
      })
  }
}

const handleClick = (e: MouseEvent) => {
  const { loading, disabled, onClick } = props
  if (loading || disabled || pending.value) {
    e.preventDefault()
    return
  }
  if (!onClick) {
    return
  }

  attemptAutoLoading(call(onClick, e))
}

function handleFocus() {
  if (!props.focusable) {
    return
  }

  isFocusing.value = true
}
</script>
