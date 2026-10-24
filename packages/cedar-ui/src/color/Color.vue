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
import { computed, defineComponent } from 'vue'
import ColorPicker from '../color-picker'
import { createNamespace } from '../_utils/global-config'
import { colorProps } from './props'

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
  props: colorProps,
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
