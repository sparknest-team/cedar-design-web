import { defineComponent, inject, computed } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import IconEmpty from '../icon/icon-empty'
import { useI18n } from '../locale'
import { configProviderInjectionKey } from '../config-provider/context'


const { name } = createNamespace('empty')

export type EmptySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    /**
     * @zh 描述内容
     * @en Description
     */
    description: String,
    /**
     * @zh 自定义图片的地址
     * @en The src of the Custom Image
     */
    imgSrc: String,
    /**
     * @zh 自定义图标名
     * @en Custom icon name
     */
    icon: String,
    /**
     * @zh 图片/图标尺寸，可选值为 `xs` `sm` `md` `lg` `xl`，或具体数值
     * @en Image/Icon size, optional values are `xs` `sm` `md` `lg` `xl`, or a specific number
     */
    imageSize: {
      type: [String, Number],
      default: 'md',
    },
    /**
     * @zh 是否在 ConfigProvider 中使用
     * @en Whether to use in ConfigProvider
     * @version 2.47.0
     */
    inConfigProvider: {
      type: Boolean,
      default: false,
    },
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
  setup(props, { slots, attrs }) {
    const prefixCls = getPrefixCls('empty')
    const { t } = useI18n()
    const configCtx = inject(configProviderInjectionKey, undefined)

    const imageSizeClass = computed(() => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      const val = props.imageSize
      if (typeof val === 'string' && sizes.includes(val)) {
        return `${prefixCls}-image--${val}`
      }
      return ''
    })

    const imageStyle = computed(() => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      const val = props.imageSize
      if (typeof val === 'string' && sizes.includes(val)) {
        return {}
      }
      const size = typeof val === 'number' ? `${val}px` : val
      return { width: size, height: size, fontSize: size }
    })

    return () => {
      if (!props.inConfigProvider && configCtx?.slots.empty && !(slots.image || props.imgSrc || props.description)) {
        return configCtx.slots.empty({ component: 'empty' })
      }

      return (
        <div class={prefixCls} {...attrs}>
          <div class={[`${prefixCls}-image`, imageSizeClass.value]} style={imageStyle.value}>
            {slots.image?.() ??
              (props.imgSrc ? (
                <img src={props.imgSrc} alt={props.description || 'empty'} />
              ) : props.icon ? (
                <span class={`${prefixCls}-icon`}>{props.icon}</span>
              ) : (
                <IconEmpty />
              ))}
          </div>
          <div class={`${prefixCls}-description`}>
            {slots.default?.() ?? (props.description || t('empty.description'))}
          </div>
          {slots.extra?.() && <div class={`${prefixCls}-extra`}>{slots.extra()}</div>}
        </div>
      )
    }
  },
})
