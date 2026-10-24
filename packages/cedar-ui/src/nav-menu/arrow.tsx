import { defineComponent, h, type PropType } from 'vue'
import { IconRight } from '@cedar-design/icons-vue/icon-right'
import { createNamespace } from '../_utils/global-config'
import type { TriggerPosition } from '../_utils/constant'
const { n } = createNamespace('nav-menu')

/** Arrow follows the panel direction; inline branches expand downwards. */
export default defineComponent({
  name: createNamespace('nav-menu-arrow').name,
  props: {
    placement: { type: String as PropType<TriggerPosition>, default: 'right-start' },
    open: Boolean,
    inline: Boolean,
  },
  setup(props) {
    return () => {
      const side = props.placement.split('-')[0]
      const closed = side === 'bottom' ? 'down' : side === 'top' ? 'up' : side
      const opposite = { down: 'up', up: 'down', left: 'right', right: 'left' } as const
      const direction = props.inline ? (props.open ? 'down' : 'right') : props.open ? opposite[closed as keyof typeof opposite] : closed
      return h(IconRight, { class: [n('arrow'), n(`--arrow-${direction}`)], 'aria-hidden': 'true' })
    }
  },
})
