import { defineComponent, PropType, computed, reactive, provide, VNode, toRefs, CSSProperties } from 'vue'
import { createNamespace, formatElevation } from '../_utils/global-config'
import Spin from '../spin'
import { useSize } from '../_hooks/use-size'
import Divider from '../divider'

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

const { name, n, classes } = createNamespace('card')

export default defineComponent({
  name,
  components: {
    Spin,
  },
  props: {
    /**
     * @zh 是否有边框
     * @en Whether to render the border
     */
    variant: {
      type: String as PropType<'default' | 'outlined' | 'tonal'>,
      default: 'default',
    },
    /**
     * @zh 是否为加载中
     * @en Loading status
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否可悬浮
     * @en Can be hovered
     */
    hoverable: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 卡片尺寸
     * @en Size of card
     * @values 'md', 'sm'
     * @defaultValue 'md'
     */
    size: {
      type: String as PropType<'md' | 'sm'>,
    },
    /**
     * @zh 自定义标题区域样式
     * @en The additional css style to apply to card head
     */
    titleStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    /**
     * @zh 卡片标题
     * @en Title of card
     */
    title: {
      type: String,
    },
    /**
     * @zh 卡片副标题
     * @en Subtitle of card
     */
    subTitle: {
      type: String,
    },
    /**
     * @zh 卡片描述
     * @en Description of card
     */
    description: {
      type: String,
    },
    /**
     * @zh 是否有上分割线
     * @en Whether to render the top divider
     */
    topDivider: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否有下分割线
     * @en Whether to render the bottom divider
     */
    bottomDivider: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 卡片布局
     * @en Layout of card
     * @values 'row', 'column', 'row-reverse'
     * @defaultValue 'column'
     */
    direction: {
      type: String as PropType<'row' | 'column' | 'row-reverse'>,
      default: 'column',
    },
    /**
     * @zh 卡片阴影
     * @en Elevation of card
     * @values 0-9
     * @defaultValue 1
     */
    elevation: {
      type: [Boolean, Number, String],
      default: true,
    },
  },
  /**
   * @zh 卡片标题
   * @en Title of card
   * @slot title
   */
  /**
   * @zh 卡片封面
   * @en Cover of card
   * @slot cover
   */
  /**
   * @zh 卡片右上角的操作区域
   * @en The action which shows at the top-right corner of the card
   * @slot titleAction
   */
  /**
   * @zh 卡片底部
   * @en The action which shows at the bottom of the Card
   * @slot action
   */
  /**
   * @zh 卡片副标题
   * @en Subtitle of card
   * @slot subTitle
   */
  /**
   * @zh 卡片描述
   * @en Description of card
   * @slot description
   */
  /**
   * @zh 卡片内容
   * @en The content of card
   * @slot default
   */
  setup(props, { slots }) {
    const { size } = toRefs(props)
    const { mergedSize: _mergedSize } = useSize(size)
    const mergedSize = computed(() => {
      if (_mergedSize.value === 'sm' || _mergedSize.value === 'xs') {
        return 'sm'
      }
      return 'md'
    })

    return () => {
      const hasTitle = Boolean(slots.title ?? props.title)
      const hasSubTitle = Boolean(props.subTitle ?? slots['sub-title'])
      const hasDescription = Boolean(props.description ?? slots.description)
      const hasContent = Boolean(slots.default?.())
      const hasTitleAction = Boolean(slots['title-action'])
      return (
        <div
          class={classes(
            n(),
            n(`--size-${mergedSize.value}`),
            n(`--variant-${props.variant}`),
            [props.variant === 'default', formatElevation(props.elevation, 0)],
            [props.loading, n('--loading')],
            [props.hoverable, n('--hoverable')],
            [props.direction === 'row' || props.direction === 'row-reverse', n('--direction-row')],
            [props.direction === 'row-reverse', n('--direction-row-reverse')],
          )}
        >
          <div class={classes(n('floater'))}>
            {slots.cover && <div class={classes(n('cover'))}>{slots.cover?.()}</div>}
            <div class={classes(n('container'))}>
              {(hasTitle || hasTitleAction) && (
                <div class={classes(n('title'))} style={props.titleStyle}>
                  {slots.title?.() ?? props.title}
                  {hasTitleAction && <div class={classes(n('title-action'))}>{slots['title-action']?.()}</div>}
                </div>
              )}
              {hasSubTitle && <div class={classes(n('sub-title'))}>{slots['sub-title']?.() ?? props.subTitle}</div>}
              {props.topDivider && <Divider class={classes(n('divider'))} />}
              {hasContent && <div class={classes(n('content'))}>{props.loading ? <Spin /> : slots.default?.()}</div>}
              {hasDescription && (
                <div class={classes(n('description'))}>{slots.description?.() ?? props.description}</div>
              )}
              {props.bottomDivider && <Divider class={classes(n('divider'))} />}
              {slots.action && <div class={classes(n('action'))}> {slots.action?.()} </div>}
            </div>
          </div>
          <div
            class={classes(n('holder'))}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
          <span class={classes(n('underlay'))}></span>
        </div>
      )
    }
  },
})
