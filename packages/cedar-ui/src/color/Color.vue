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
    :disabled="blocked"
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
import { computed, defineComponent, toRefs } from 'vue'
import ColorPicker from '../color-picker'
import { createNamespace } from '../_utils/global-config'
import { colorProps } from './props'
import { useFormItem } from '../_hooks/use-form-item'

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
    const { disabled, readonly } = toRefs(props)
    const form = useFormItem({ disabled, readonly })
    const blocked = computed(() => form.mergedDisabled.value || form.mergedReadonly.value)

    return {
      pickerProps,
      blocked,
      onUpdateModelValue: (value: string | undefined) => { if (!blocked.value) emit('update:modelValue', value) },
      onChange: (value: string) => { if (!blocked.value) emit('change', value) },
    }
  },
})
</script>
