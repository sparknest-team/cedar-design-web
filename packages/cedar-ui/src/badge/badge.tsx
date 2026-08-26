import { defineComponent, computed, toRefs, CSSProperties, inject } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { configProviderInjectionKey } from '../config-provider/context'
import { badgeProps } from './props'

const { name } = createNamespace('badge')

export default defineComponent({
  name,
  props: badgeProps,
  setup(props, { slots }) {
    const { n, classes } = createNamespace('badge')
    const configCtx = inject(configProviderInjectionKey, undefined)
    const {
      show,
      textColor,
      color,
      offsetX,
      offsetY,
      dot,
      max,
      content,
      mode,
      position,
      inlinePosition,
      status,
      variant,
      size,
    } = toRefs(props)
    const dotComputed = computed(() => (typeof content.value === 'undefined' ? true : dot?.value))
    const rtl = computed(() => configCtx?.rtl ?? false)
    const computedMode = computed(() => (!slots?.default && !props.description ? 'inline' : mode.value))
    const wrapperClassName = computed(() =>
      classes(
        n(),
        [computedMode.value === 'floating' && position.value, n(`--position-${position.value}`)],
        [computedMode.value === 'inline' && inlinePosition.value, n(`--inline-position-${inlinePosition.value}`)],
        [computedMode.value, n(`--mode-${computedMode.value}`)],
        [dotComputed.value, n('--dot')],
        [rtl.value, n('--rtl')],
        [size.value, n(`--size-${size.value}`)],
        [status.value, n(`--status-${status.value}`)],
        [variant.value, n(`--variant-${variant.value}`)],
      ),
    )
    const computedContentWrapperStyleRef = computed(() => {
      const mergedWrapperStyle: CSSProperties = {}

      // 根据 mode、position 和 inlinePosition 动态调整 margin 属性
      if (computedMode.value === 'floating') {
        // floating 类型根据 position 调整
        const pos = position.value
        if (offsetX.value) {
          if (pos === 'top-left' || pos === 'bottom-left' || pos === 'left') {
            mergedWrapperStyle.marginInlineStart = `${offsetX.value}px`
          } else if (pos === 'top-right' || pos === 'bottom-right' || pos === 'right') {
            mergedWrapperStyle.marginInlineEnd = `${offsetX.value}px`
          }
        }
        if (offsetY.value) {
          if (pos === 'top-left' || pos === 'top-right') {
            mergedWrapperStyle.marginBlockStart = `${offsetY.value}px`
          } else if (pos === 'bottom-left' || pos === 'bottom-right') {
            mergedWrapperStyle.marginBlockEnd = `${offsetY.value}px`
          }
        }
      } else {
        // inline 类型根据 inlinePosition 调整
        if (offsetY.value) {
          if (inlinePosition.value === 'start') {
            mergedWrapperStyle.marginBlockStart = `${offsetY.value}px`
          } else if (inlinePosition.value === 'end') {
            mergedWrapperStyle.marginBlockEnd = `${offsetY.value}px`
          }
        }
      }

      return {
        mergedWrapperStyle,
      }
    })
    const computedStyleRef = computed(() => {
      const computedColorStyle = !color?.value ? {} : { backgroundColor: color.value }
      const computedTextColorStyle = !textColor?.value ? {} : { color: textColor.value }
      const mergedStyle = {
        ...computedColorStyle,
        ...computedTextColorStyle,
      } as CSSProperties

      return {
        mergedStyle,
        computedColorStyle,
      }
    })
    const countValue = computed(() => (typeof content.value === 'number' ? content.value : null))
    const hasCount = computed(() => countValue.value !== null)
    const showValue = computed(() => {
      if (!show.value) {
        return false
      }
      if (hasCount.value) {
        return props.showZero ? true : ((countValue.value && countValue.value > 0) ?? false)
      }
      return true
    })

    const getDot = () => {
      const { mergedStyle } = computedStyleRef.value
      const { mergedWrapperStyle } = computedContentWrapperStyleRef.value

      if (!showValue.value) {
        return null
      }

      // 自定义内容
      if (slots.content) {
        return <span class={classes(n('custom-dot'), n('content-wrapper'))}>{slots.content()}</span>
      }

      // 小红点
      if (dotComputed.value) {
        return (
          <span class={classes(n('content-wrapper'))} style={mergedWrapperStyle}>
            <div class={classes(n('dot-content'))} style={mergedStyle} />
          </span>
        )
      }

      // 字符串直接显示，数字超过max显示为max+
      if (typeof content.value !== 'undefined') {
        return (
          <span class={classes(n('content-wrapper'))} style={mergedWrapperStyle}>
            <span class={classes(n('content'))} style={mergedStyle}>
              {typeof content.value === 'string'
                ? content.value
                : max.value && hasCount.value && countValue.value && countValue.value > max.value
                  ? `${max.value}+`
                  : countValue.value}
            </span>
          </span>
        )
      }
    }

    return () => {
      return (
        <span class={wrapperClassName.value}>
          <div class={classes(n('wrapper'))}>
            {getDot()}
            {(slots.default || props.description) && (
              <span class={classes(n('description-wrapper'))}>
                {slots.default ? slots.default() : props.description}
              </span>
            )}
          </div>
        </span>
      )
    }
  },
})
