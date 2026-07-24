<template>
  <DatePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :mode="type"
    :format="format"
    :popup-visible="popupVisible"
    :default-popup-visible="defaultPopupVisible"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
    :placeholder="placeholder"
    :disabled-date="disabledDate"
    :show-time="showTime"
    :error="error"
    :hide-trigger="false"
    @update:model-value="onUpdateModelValue"
    @update:popup-visible="onUpdatePopupVisible"
    @change="onChange"
    @clear="onClear"
    @popup-visible-change="onPopupVisibleChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </DatePicker>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import DatePicker from '../date-picker'
import { createNamespace } from '../_utils/global-config'
import type { Size } from '../_utils/constant'
import type { CalendarValue, Mode } from '../date-picker/types'

const { name } = createNamespace('date')

const TYPE_FORMAT: Partial<Record<Mode, string>> = {
  week: 'gggg-wo',
  month: 'YYYY-MM',
  year: 'YYYY',
  quarter: 'YYYY-[Q]Q',
}

/**
 * 表单日期字段。内部使用 DatePicker（带触发器）。
 * 面板能力请直接使用 DatePicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    DatePicker,
  },
  inheritAttrs: false,
  props: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: [Object, String, Number] as PropType<CalendarValue>,
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: [Object, String, Number] as PropType<CalendarValue>,
    },
    /**
     * @zh 选择类型
     * @en Picker type
     */
    type: {
      type: String as PropType<Mode>,
      default: 'date',
    },
    /**
     * @zh 是否显示弹出框
     * @en Popup visibility
     */
    popupVisible: {
      type: Boolean as PropType<boolean | undefined>,
      default: undefined,
    },
    /**
     * @zh 弹出框默认是否可见
     * @en Default popup visibility
     */
    defaultPopupVisible: Boolean,
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     */
    clearable: Boolean,
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: Boolean,
    /**
     * @zh 是否只读
     * @en Whether readonly
     */
    readonly: Boolean,
    /**
     * @zh 输入框尺寸
     * @en Input size
     */
    size: {
      type: String as PropType<Size>,
    },
    /**
     * @zh 提示文案
     * @en Placeholder
     */
    placeholder: String,
    /**
     * @zh 不可选日期
     * @en Disabled date
     */
    disabledDate: {
      type: Function as PropType<(current?: Date) => boolean>,
    },
    /**
     * @zh 展示日期的格式
     * @en Display format
     */
    format: {
      type: [String, Function] as PropType<string | ((current: Date) => string)>,
    },
    /**
     * @zh 是否增加时间选择
     * @en Whether to show time
     */
    showTime: Boolean,
    /**
     * @zh 是否为错误状态
     * @en Error status
     */
    error: Boolean,
    /**
     * @zh 透传给 DatePicker 的其余属性
     * @en Extra props passed to DatePicker
     */
    datePickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  emits: {
    'update:modelValue': (value: CalendarValue | undefined) => true,
    'update:popupVisible': (visible: boolean) => true,
    change: (value: CalendarValue | undefined) => true,
    clear: () => true,
    'popup-visible-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const format = computed(() => {
      if (props.format !== undefined) return props.format
      return TYPE_FORMAT[props.type]
    })

    const pickerProps = computed(() => props.datePickerProps || {})

    return {
      format,
      pickerProps,
      onUpdateModelValue: (value: CalendarValue | undefined) => emit('update:modelValue', value),
      onUpdatePopupVisible: (visible: boolean) => emit('update:popupVisible', visible),
      onChange: (value: CalendarValue | undefined) => emit('change', value),
      onClear: () => emit('clear'),
      onPopupVisibleChange: (visible: boolean) => emit('popup-visible-change', visible),
    }
  },
})
</script>
