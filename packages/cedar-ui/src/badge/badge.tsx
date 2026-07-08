import { defineComponent, computed, toRefs, CSSProperties, PropType, inject } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { configProviderInjectionKey } from '../config-provider/context'

const { name, n, classes } = createNamespace('badge')

export default defineComponent({
  name,
  props: {
    /**
     * @zh 徽标的描述文本
     * @en Set the description text of the badge
     */
    description: {
      type: String,
    },
    /**
     * @zh 显示为小红点
     * @en Whether to display a red dot instead of `count`
     */
    dot: {
      type: Boolean,
    },
    /**
     * @zh 徽标最大显示数值，如果 content 超过这个数值会显示为`${max}+`，content 为数字时有效。
     * @en Max value to show. If content is larger than this value, it will be displayed as `${max}+`
     */
    max: {
      type: Number,
      default: 99,
    },
    /**
     * @zh 是否显示徽标
     * @en Whether to display the badge
     */
    show: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 徽标为0时是否显示
     * @en Whether to display when the badge is 0
     */
    showZero: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 设置徽标位置的偏移X，type为inline时无效。
     * @en Set offset of the badge dot X
     */
    offsetX: {
      type: Number,
      default: 0,
    },
    /**
     * @zh 设置徽标位置的偏移Y
     * @en Set offset of the badge dot Y
     */
    offsetY: {
      type: Number,
      default: 0,
    },
    /**
     * @zh 徽标的背景色，也可以设置自定义色值
     * @en Background color of the badge, some built-in colors are available, or you can set a custom color value
     */
    color: {
      type: String as PropType<string>,
    },
    /**
     * @zh 徽标显示的内容
     * @en Content to show in badge
     */
    content: {
      type: [Number, String],
    },
    /**
     * @zh 徽标显示的内容颜色
     * @en Content color of the badge
     */
    textColor: {
      type: String as PropType<string>,
    },
    /**
     * @zh 徽标的类型
     * @en Badge type
     * @values 'floating', 'inline'
     */
    type: {
      type: String as PropType<'floating' | 'inline'>,
      default: 'floating',
    },
    /**
     * @zh 徽标的位置，type 为 floating 时有效
     * @en Position of the badge, valid when type is 'floating'
     * @values 'top-right', 'top-left', 'bottom-right', 'bottom-left'
     */
    position: {
      type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'left' | 'right'>,
      default: 'top-right',
    },
    /**
     * @zh 徽标的位置，type 为 inline 时有效
     * @en Position of the badge, valid when type is 'inline'
     * @values 'start', 'end'
     */
    inlinePosition: {
      type: String as PropType<'start' | 'end'>,
      default: 'end',
    },
    /**
     * @zh 徽标的尺寸
     * @en Size of the badge
     * @values 'xs', 'sm', 'md', 'lg', 'xl'
     */
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
      default: 'md',
    },
    /**
     * @zh 徽标的状态
     * @en Status of the badge
     * @values 'default', 'success', 'warning', 'danger'
     */
    status: {
      type: String as PropType<'default' | 'success' | 'warning' | 'danger'>,
      default: 'default',
    },
    /**
     * @zh 徽标的变体
     * @en Variant of the badge
     * @values 'outline', 'default'
     */
    variant: {
      type: String as PropType<'outline' | 'default'>,
      default: 'default',
    },
  },
  setup(props, { slots }) {
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
      type,
      position,
      inlinePosition,
      status,
      variant,
      size,
    } = toRefs(props)
    const dotComputed = computed(() => (typeof content.value === 'undefined' ? true : dot?.value))
    const rtl = computed(() => configCtx?.rtl ?? false)
    const typecomputed = computed(() => (!slots?.default && !props.description ? 'inline' : type.value))
    const wrapperClassName = computed(() =>
      classes(
        n(),
        [typecomputed.value === 'floating' && position.value, n(`--position-${position.value}`)],
        [typecomputed.value === 'inline' && inlinePosition.value, n(`--inline-position-${inlinePosition.value}`)],
        [typecomputed.value, n(`--type-${typecomputed.value}`)],
        [dotComputed.value, n('--dot')],
        [rtl.value, n('--rtl')],
        [size.value, n(`--size-${size.value}`)],
        [status.value, n(`--status-${status.value}`)],
        [variant.value, n(`--variant-${variant.value}`)],
      ),
    )
    const computedContentWrapperStyleRef = computed(() => {
      const mergedWrapperStyle: CSSProperties = {}

      // 根据 type、position 和 inlinePosition 动态调整 margin 属性
      if (typecomputed.value === 'floating') {
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
