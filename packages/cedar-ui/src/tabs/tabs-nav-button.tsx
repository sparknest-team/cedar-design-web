import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import IconHover from '../_components/icon-hover.vue'
import { IconLeft } from '@cedarjs/icons-vue/icon-left'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
import { IconUp } from '@cedarjs/icons-vue/icon-up'
import { IconDown } from '@cedarjs/icons-vue/icon-down'
import { createNamespace } from '../_utils/global-config'

type ButtonTypes = 'previous' | 'next'

export default defineComponent({
  name: createNamespace('tabs-nav-button').name,
  props: {
    type: {
      type: String as PropType<ButtonTypes>,
      default: 'next',
    },
    orientation: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function as PropType<(type: ButtonTypes, ev: Event) => void>,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { classes, n } = createNamespace('tabs-nav-button')

    const handleClick = (ev: Event) => {
      if (!props.disabled) {
        emit('click', props.type, ev)
      }
    }

    const renderIcon = () => {
      if (props.orientation === 'vertical') {
        if (props.type === 'next') {
          return <IconRight />
        }
        return <IconLeft />
      }
      if (props.type === 'next') {
        return <IconDown />
      }
      return <IconUp />
    }

    const cls = computed(() =>
      classes(
        n(),
        [props.disabled, n('--disabled')],
        [props.orientation === 'vertical' && props.type === 'previous', n('--left')],
        [props.orientation === 'vertical' && props.type === 'next', n('--right')],
        [props.orientation === 'horizontal' && props.type === 'previous', n('--up')],
        [props.orientation === 'horizontal' && props.type === 'next', n('--down')],
      ),
    )

    return () => (
      <button type="button" class={cls.value} onClick={handleClick}>
        <IconHover prefix="c-tabs" disabled={props.disabled}>
          {renderIcon()}
        </IconHover>
      </button>
    )
  },
})
