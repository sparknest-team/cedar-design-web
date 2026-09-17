import { defineComponent, h, type PropType } from 'vue'
import { IconCaretLeft } from '@cedarjs/icons-vue/icon-caret-left'
import { IconCaretRight } from '@cedarjs/icons-vue/icon-caret-right'
import { createNamespace } from '../_utils/global-config'
import type { ExpandIconPosition } from './props'

const { n } = createNamespace('collapse-item')

export const DefaultExpandIcon = defineComponent({
  name: 'DefaultExpandIcon',
  props: {
    active: Boolean,
    disabled: Boolean,
    position: String as PropType<ExpandIconPosition>,
  },
  setup(props) {
    return () => h(props.position === 'right' ? IconCaretLeft : IconCaretRight, { class: n('expand-icon') })
  },
})
