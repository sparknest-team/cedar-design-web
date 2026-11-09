import { defineComponent, PropType, toRefs, computed } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { Color } from './types'
import { useControlBlock } from './hooks/use-control-block'
import { useI18n } from '../locale'


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
    disabled: Boolean,
    onChange: Function as PropType<(x: number) => void>,
  },
  setup(props) {
    const prefixCls = getPrefixCls('color-picker')
    const { t } = useI18n()
    const rgb = computed(() => props.color.rgb)

    const { blockRef, handlerRef, onMouseDown } = useControlBlock({
      value: [props.x, 0],
      onChange: (pos) => props.onChange?.(pos[0]),
    })

    const handleKeydown = (event: KeyboardEvent) => {
      if (props.disabled) return
      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault()
        props.onChange?.(event.key === 'Home' ? 0 : 1)
        return
      }
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
              tabindex={props.disabled ? -1 : 0}
              aria-disabled={props.disabled || undefined}
              aria-label={t('colorPicker.opacity')}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(props.x * 100)}
              class={[`${prefixCls}-control-bar`, `${prefixCls}-control-bar-alpha`]}
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b}))`,
              }}
              onMousedown={(event: MouseEvent) => { if (!props.disabled) onMouseDown(event) }}
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
          tabindex={props.disabled ? -1 : 0}
          aria-disabled={props.disabled || undefined}
          aria-label={t('colorPicker.hue')}
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(props.x * 360)}
          class={[`${prefixCls}-control-bar`, `${prefixCls}-control-bar-hue`]}
          onMousedown={(event: MouseEvent) => { if (!props.disabled) onMouseDown(event) }}
          onKeydown={(event: KeyboardEvent) => handleKeydown(event)}
        >
          {renderHandler()}
        </div>
      )
    }
  },
})
