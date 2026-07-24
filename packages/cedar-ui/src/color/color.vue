<template>
  <ColorPicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :format="format"
    :size="size"
    :show-text="showText"
    :show-history="showHistory"
    :show-preset="showPreset"
    :disabled="disabled"
    :disabled-alpha="disabledAlpha"
    :history-colors="historyColors"
    :preset-colors="presetColors"
    :hide-trigger="false"
    @update:model-value="onUpdateModelValue"
    @change="onChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </ColorPicker>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import ColorPicker from '../color-picker'
import { createNamespace } from '../_utils/global-config'
import type { Size } from '../_utils/constant'

const { name } = createNamespace('color')

/**
 * 表单颜色字段。内部使用 ColorPicker（带触发器）。
 * 面板能力请直接使用 ColorPicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    ColorPicker,
  },
  inheritAttrs: false,
  props: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: String,
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: String,
    /**
     * @zh 颜色值的格式
     * @en Color value format
     */
    format: {
      type: String as PropType<'hex' | 'rgb'>,
    },
    /**
     * @zh 尺寸
     * @en Size
     */
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    /**
     * @zh 显示颜色值
     * @en Show color value
     */
    showText: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 显示历史颜色
     * @en Show history colors
     */
    showHistory: Boolean,
    /**
     * @zh 显示预设颜色
     * @en Show preset colors
     */
    showPreset: Boolean,
    /**
     * @zh 禁用
     * @en Disabled
     */
    disabled: Boolean,
    /**
     * @zh 禁用透明通道
     * @en Disable alpha
     */
    disabledAlpha: Boolean,
    /**
     * @zh 历史颜色
     * @en History colors
     */
    historyColors: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 预设颜色
     * @en Preset colors
     */
    presetColors: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 透传给 ColorPicker 的其余属性
     * @en Extra props passed to ColorPicker
     */
    colorPickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  emits: {
    'update:modelValue': (value: string | undefined) => true,
    change: (value: string) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.colorPickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: string | undefined) => emit('update:modelValue', value),
      onChange: (value: string) => emit('change', value),
    }
  },
})
</script>
