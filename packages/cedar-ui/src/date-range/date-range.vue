<template>
  <DateRangePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :popup-visible="popupVisible"
    :default-popup-visible="defaultPopupVisible"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
    :separator="separator"
    :placeholder="placeholder"
    :disabled-date="disabledDate"
    :mode="type"
    :format="format"
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
  </DateRangePicker>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { DateRangePicker } from '../date-picker'
import { createNamespace } from '../_utils/global-config'
import type { Size } from '../_utils/constant'
import type { CalendarValue, Mode, RangeDisabledDate } from '../date-picker/types'

const { name } = createNamespace('date-range')

/**
 * 表单日期范围字段。内部使用 DateRangePicker（带触发器）。
 * 面板能力请直接使用 DateRangePicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    DateRangePicker,
  },
  inheritAttrs: false,
  props: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: Array as PropType<CalendarValue[]>,
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: Array as PropType<CalendarValue[]>,
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
    disabled: {
      type: [Boolean, Array] as PropType<boolean | boolean[]>,
    },
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
     * @zh 范围分隔符
     * @en Range separator
     */
    separator: String,
    /**
     * @zh 提示文案
     * @en Placeholder
     */
    placeholder: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 不可选日期
     * @en Disabled date
     */
    disabledDate: {
      type: Function as PropType<RangeDisabledDate>,
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
     * @zh 展示日期的格式
     * @en Display format
     */
    format: String,
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
     * @zh 透传给 DateRangePicker 的其余属性
     * @en Extra props passed to DateRangePicker
     */
    dateRangePickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  emits: {
    'update:modelValue': (value: CalendarValue[] | undefined) => true,
    'update:popupVisible': (visible: boolean) => true,
    change: (value: CalendarValue[] | undefined) => true,
    clear: () => true,
    'popup-visible-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.dateRangePickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: CalendarValue[] | undefined) => emit('update:modelValue', value),
      onUpdatePopupVisible: (visible: boolean) => emit('update:popupVisible', visible),
      onChange: (value: CalendarValue[] | undefined) => emit('change', value),
      onClear: () => emit('clear'),
      onPopupVisibleChange: (visible: boolean) => emit('popup-visible-change', visible),
    }
  },
})
</script>
