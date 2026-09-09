import { defineComponent, computed, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { HSV } from './types'
import Panel from './panel'
import Trigger from '../trigger'
import useState from '../_hooks/use-state'
import { formatInputToHSVA, hsvToRgb, rgbaToHex, rgbToHex } from '../_utils/color'
import { colorPickerProps } from './props'


const { name } = createNamespace('color-picker')

export default defineComponent({
  name,
  props: colorPickerProps,
  emits: {
    'update:modelValue': (value: string) => true,
    /**
     * @zh 颜色值改变时触发
     * @en Triggered when the color value changes
     * @param {string} value
     */
    change: (value: string) => true,
    /**
     * @zh 颜色面板展开和收起时触发
     * @en Triggered when the color panel is expanded and collapsed
     * @param {boolean} visible
     * @param {string} value
     */
    'open-change': (visible: boolean, value: string) => true,
  },
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('color-picker')
    const mergeValue = computed(() => {
      return props.modelValue ?? props.defaultValue
    })

    const formatInput = computed(() => {
      return formatInputToHSVA(mergeValue.value || '')
    })

    const [alpha, setAlpha] = useState(formatInput.value.a)
    const [hsv, setHsv] = useState({
      h: formatInput.value.h,
      s: formatInput.value.s,
      v: formatInput.value.v,
    })

    watch(
      () => formatInput.value,
      (value) => {
        if (mergeValue.value !== formatValue.value) {
          setAlpha(value.a)
          setHsv({
            h: value.h,
            s: value.s,
            v: value.v,
          })
        }
      },
    )

    const color = computed(() => {
      const rgb = hsvToRgb(hsv.value.h, hsv.value.s, hsv.value.v)
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b)
      return {
        hsv: hsv.value,
        rgb,
        hex,
      }
    })

    const colorString = computed(() => {
      const { r, g, b } = color.value.rgb
      return `rgba(${r}, ${g}, ${b}, ${alpha.value.toFixed(2)})`
    })

    const formatValue = computed(() => {
      const { r, g, b } = color.value.rgb
      if (props.format === 'rgb') {
        return alpha.value < 1 && !props.disabledAlpha
          ? `rgba(${r}, ${g}, ${b}, ${alpha.value.toFixed(2)})`
          : `rgb(${r}, ${g}, ${b})`
      }
      return alpha.value < 1 && !props.disabledAlpha ? `#${rgbaToHex(r, g, b, alpha.value)}` : `#${rgbToHex(r, g, b)}`
    })

    watch(formatValue, (value) => {
      emit('update:modelValue', value)
      emit('change', value)
    })

    const onHsvChange = (_value: HSV) => {
      !props.disabled && setHsv(_value)
    }

    const onAlphaChange = (_value: number) => {
      !props.disabled && setAlpha(_value)
    }

    const handleOpenChange = (open: boolean) => {
      emit('open-change', open, formatValue.value)
    }

    const renderInput = () => {
      return (
        <div
          class={{
            [prefixCls]: true,
            [`${prefixCls}-size-${props.size}`]: props.size,
            [`${prefixCls}-disabled`]: props.disabled,
          }}
        >
          <div class={`${prefixCls}-preview`} style={{ backgroundColor: formatValue.value }} />
          {props.showText && <div class={`${prefixCls}-value`}>{formatValue.value}</div>}
          <input class={`${prefixCls}-input`} value={formatValue.value} disabled={props.disabled} />
        </div>
      )
    }

    const renderPanel = () => {
      return (
        <Panel
          color={color.value}
          alpha={alpha.value}
          colorString={colorString.value}
          historyColors={props.historyColors}
          presetColors={props.presetColors}
          showHistory={props.showHistory}
          showPreset={props.showPreset}
          disabled={props.disabled}
          disabledAlpha={props.disabledAlpha}
          format={props.format}
          onHsvChange={onHsvChange}
          onAlphaChange={onAlphaChange}
        />
      )
    }

    return () => {
      return props.hideTrigger ? (
        renderPanel()
      ) : (
        <Trigger
          v-slots={{ content: renderPanel }}
          trigger="click"
          placement="bottom-start"
          animationName="slide-dynamic-origin"
          popupOffset={4}
          disabled={props.disabled}
          onUpdate:open={handleOpenChange}
          {...props.triggerProps}
        >
          {slots.default ? slots.default() : renderInput()}
        </Trigger>
      )
    }
  },
})
