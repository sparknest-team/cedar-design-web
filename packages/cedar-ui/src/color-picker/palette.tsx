import { defineComponent, computed, PropType, toRefs, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { hsvToRgb } from '../_utils/color'
import { Color } from './types'
import { useControlBlock } from './hooks/use-control-block'
import { useI18n } from '../locale'


const { name } = createNamespace('palette')

export default defineComponent({
  name,
  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
    onChange: Function as PropType<(s: number, v: number) => void>,
    disabled: Boolean,
  },
  setup(props) {
    const prefixCls = getPrefixCls('color-picker')
    const { t } = useI18n()
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
        tabindex={props.disabled ? -1 : 0}
        aria-disabled={props.disabled || undefined}
        aria-label={t('colorPicker.palette')}
        aria-valuetext={`${t('colorPicker.saturation')} ${Math.round(hsv.value.s * 100)}%, ${t('colorPicker.brightness')} ${Math.round(hsv.value.v * 100)}%`}
        class={`${prefixCls}-palette`}
        style={{ backgroundColor: hueColor.value }}
        onMousedown={(event: MouseEvent) => { if (!props.disabled) onMouseDown(event) }}
        onKeydown={(event: KeyboardEvent) => {
          if (props.disabled) return
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
