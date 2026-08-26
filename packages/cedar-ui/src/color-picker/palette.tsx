import { defineComponent, computed, PropType, toRefs, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { hsvToRgb } from '../_utils/color'
import { Color } from './types'
import { useControlBlock } from './hooks/use-control-block'


const { name } = createNamespace('palette')

export default defineComponent({
  name,
  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
    onChange: Function as PropType<(s: number, v: number) => void>,
  },
  setup(props) {
    const prefixCls = getPrefixCls('color-picker')
    const hsv = computed(() => props.color.hsv)

    const { blockRef, handlerRef, onMouseDown } = useControlBlock({
      value: [hsv.value.s, 1 - hsv.value.v],
      onChange: (value) => props.onChange?.(value[0], 1 - value[1]),
    })

    const hueColor = computed(() => {
      const rgb = hsvToRgb(hsv.value.h, 1, 1)
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    })

    return () => (
      <div
        ref={blockRef}
        role="application"
        tabindex={0}
        aria-label="Color saturation and brightness"
        aria-valuetext={`Saturation ${Math.round(hsv.value.s * 100)}%, brightness ${Math.round(hsv.value.v * 100)}%`}
        class={`${prefixCls}-palette`}
        style={{ backgroundColor: hueColor.value }}
        onMousedown={onMouseDown}
        onKeydown={(event: KeyboardEvent) => {
          const step = event.shiftKey ? 0.1 : 0.01
          const nextS = Math.min(1, Math.max(0, hsv.value.s + (event.key === 'ArrowRight' ? step : event.key === 'ArrowLeft' ? -step : 0)))
          const nextV = Math.min(1, Math.max(0, hsv.value.v + (event.key === 'ArrowUp' ? step : event.key === 'ArrowDown' ? -step : 0)))
          if (nextS !== hsv.value.s || nextV !== hsv.value.v) {
            event.preventDefault()
            props.onChange?.(nextS, nextV)
          }
        }}
      >
        <div
          ref={handlerRef}
          class={`${prefixCls}-handler`}
          style={{
            top: `${(1 - hsv.value.v) * 100}%`,
            left: `${hsv.value.s * 100}%`,
          }}
        />
      </div>
    )
  },
})
