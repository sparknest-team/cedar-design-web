import { defineComponent, PropType, toRefs, computed } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { Color } from './types'
import { useControlBlock } from './hooks/use-control-block'


const { name } = createNamespace('control-bar')

export default defineComponent({
  name,
  props: {
    x: {
      type: Number,
      required: true,
    },
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
    colorString: String,
    type: String as PropType<'hue' | 'alpha'>,
    onChange: Function as PropType<(x: number) => void>,
  },
  setup(props) {
    const prefixCls = getPrefixCls('color-picker')
    const rgb = computed(() => props.color.rgb)

    const { blockRef, handlerRef, onMouseDown } = useControlBlock({
      value: [props.x, 0],
      onChange: (pos) => props.onChange?.(pos[0]),
    })

    const handleKeydown = (event: KeyboardEvent) => {
      const delta = event.key === 'ArrowRight' || event.key === 'ArrowUp'
        ? 0.01
        : event.key === 'ArrowLeft' || event.key === 'ArrowDown'
          ? -0.01
          : 0
      if (delta) {
        event.preventDefault()
        props.onChange?.(Math.min(1, Math.max(0, props.x + delta)))
      }
    }

    const renderHandler = () => {
      return (
        <div
          ref={handlerRef}
          class={`${prefixCls}-handler`}
          style={{
            left: `${props.x * 100}%`,
            color: props.colorString,
          }}
        />
      )
    }

    return () => {
      if (props.type === 'alpha') {
        return (
          <div class={`${prefixCls}-control-bar-bg`}>
            <div
              ref={blockRef}
              role="slider"
              tabindex={0}
              aria-label="Opacity"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(props.x * 100)}
              class={[`${prefixCls}-control-bar`, `${prefixCls}-control-bar-alpha`]}
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b}))`,
              }}
              onMousedown={onMouseDown}
              onKeydown={(event: KeyboardEvent) => handleKeydown(event)}
            >
              {renderHandler()}
            </div>
          </div>
        )
      }
      return (
        <div
          ref={blockRef}
          role="slider"
          tabindex={0}
          aria-label="Hue"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(props.x * 360)}
          class={[`${prefixCls}-control-bar`, `${prefixCls}-control-bar-hue`]}
          onMousedown={onMouseDown}
          onKeydown={(event: KeyboardEvent) => handleKeydown(event)}
        >
          {renderHandler()}
        </div>
      )
    }
  },
})
