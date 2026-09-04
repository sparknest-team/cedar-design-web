import { timelineProps } from './props'
import { defineComponent, PropType, provide, reactive, computed, toRefs } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import type { ModeType, LabelPositionType } from './types'
import { timelineInjectionKey } from './context'
import Item from './item.vue'
import Spin from '../spin'
import { Direction } from '../_utils/constant'
import { useChildrenComponents } from '../_hooks/use-children-components'


const { name } = createNamespace('timeline')

export default defineComponent({
  name,
  components: {
    Item,
    Spin,
  },
  props: timelineProps,
  /**
   * @zh 幽灵节点
   * @en Custom dot
   * @slot dot
   */
  setup(props, { slots }) {
    const prefixCls = getPrefixCls('timeline')
    const hasPending = computed(() => {
      return props.pending || slots.pending
    })
    const { children, components } = useChildrenComponents(Item.name!)
    const {
      reverse: reverseRef,
      direction: directionRef,
      labelPosition: labelPositionRef,
      mode: modeRef,
    } = toRefs(props)

    const timelineContext = reactive({
      items: components,
      direction: directionRef,
      reverse: reverseRef,
      labelPosition: labelPositionRef,
      mode: modeRef,
    })
    provide(timelineInjectionKey, timelineContext)

    const cls = computed(() => {
      return [
        prefixCls,
        `${prefixCls}-${props.mode}`,
        `${prefixCls}-direction-${props.direction}`,
        {
          [`${prefixCls}-is-reverse`]: props.reverse,
        },
      ]
    })

    return () => {
      if (hasPending.value) {
        children.value = slots.default?.().concat(
          <Item
            v-slots={{
              dot: () => slots.dot?.() ?? <Spin size={12} />,
            }}
            lineType="dashed"
          >
            {props.pending !== true && <div>{props.pending}</div>}
          </Item>,
        )
      } else {
        children.value = slots.default?.()
      }

      return (
        <div role="list" class={cls.value}>
          {children.value}
        </div>
      )
    }
  },
})
