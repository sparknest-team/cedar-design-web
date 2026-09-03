import { defineComponent, inject, computed } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { IconEmpty } from '@cedarjs/icons-vue/icon-empty'
import { useI18n } from '../locale'
import { configProviderInjectionKey } from '../config-provider/context'
import { componentSizes } from '../_utils/constant'
import { emptyProps } from './props'

const { name } = createNamespace('empty')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: emptyProps,
  emits: {
    /**
     * @zh 点击回调
     * @en Callback when clicked
     * @param {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true,
  },
  /**
   * @zh 图片/图标
   * @en Image/Icon
   * @slot image
   */
  /**
   * @zh 额外操作
   * @en Extra actions
   * @slot extra
   */
  setup(props, { slots, attrs, emit }) {
    const prefixCls = getPrefixCls('empty')
    const { t } = useI18n()
    const configCtx = inject(configProviderInjectionKey, undefined)

    const imageSizeClass = computed(() => {
      const val = props.imageSize
      if (typeof val === 'string' && componentSizes.includes(val as any)) {
        return `${prefixCls}-image--${val}`
      }
      return ''
    })

    const imageStyle = computed(() => {
      const val = props.imageSize
      if (typeof val === 'string' && componentSizes.includes(val as any)) {
        return {}
      }
      const size = typeof val === 'number' ? `${val}px` : val
      return { width: size, height: size, fontSize: size }
    })

    const onClick = (ev: MouseEvent) => {
      emit('click', ev)
    }

    return () => {
      if (!props.inConfigProvider && configCtx?.slots.empty && !(slots.image || props.imageUrl || props.description)) {
        return configCtx.slots.empty({ component: 'empty' })
      }

      return (
        <div class={prefixCls} {...attrs} onClick={onClick}>
          {props.showIcon && (
            <div class={[`${prefixCls}-image`, imageSizeClass.value]} style={imageStyle.value}>
              {slots.image?.() ??
                (props.imageUrl ? (
                  <img src={props.imageUrl} alt={props.alt} />
                ) : props.icon ? (
                  <span class={`${prefixCls}-icon`}>{props.icon}</span>
                ) : (
                  <IconEmpty />
                ))}
            </div>
          )}
          {props.showDescription && (
            <div class={`${prefixCls}-description`}>
              {slots.default?.() ?? (props.description || t('empty.description'))}
            </div>
          )}
          {slots.extra?.() && <div class={`${prefixCls}-extra`}>{slots.extra()}</div>}
        </div>
      )
    }
  },
})
