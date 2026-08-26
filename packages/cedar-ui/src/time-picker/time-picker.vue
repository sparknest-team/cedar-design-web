<template>
  <Trigger
    v-if="!hideTrigger"
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :placement="placement"
    :disabled="mergedDisabled || readonly"
    :popup-offset="4"
    :open="panelVisible"
    :prevent-focus="true"
    :unmount-on-close="unmountOnClose"
    :popup-container="popupContainer"
    v-bind="{ ...triggerProps }"
    @openChange="onPanelVisibleChange"
  >
    <component
      :is="isRange ? 'DateRangeInput' : 'DateInput'"
      v-bind="{
        ...$attrs,
        ...inputProps,
      }"
      ref="refInput"
      :input-value="inputValue"
      :value="panelValue"
      :size="size"
      :variant="variant"
      :focused="panelVisible"
      :format="computedFormat"
      :visible="panelVisible"
      :disabled="mergedDisabled"
      :error="error"
      :readonly="readonly"
      :editable="!readonly"
      :clearable="clearable && !readonly"
      :placeholder="computedPlaceholder"
      @clear="onInputClear"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix"> </slot>
      </template>
      <template #suffix-icon>
        <slot name="suffix-icon">
          <IconClockCircle />
        </slot>
      </template>
    </component>
    <template #content>
      <div :class="`${prefixCls}-container`" @click="onPanelClick">
        <component
          :is="isRange ? 'RangePanel' : 'Panel'"
          v-bind="{ ...panelProps, ...(isRange ? { showNextDay } : {}) }"
          :value="panelValue"
          :visible="panelVisible"
          :format="computedFormat"
          :use12-hours="computedUse12Hours"
          :step="step"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
          :hide-disabled-options="hideDisabledOptions"
          :hide-footer="disableConfirm"
          @select="onPanelSelect"
          @confirm="onPanelConfirm"
        >
          <template v-if="$slots.extra" #extra-footer>
            <slot name="extra" />
          </template>
        </component>
      </div>
    </template>
  </Trigger>
  <div v-else :class="`${prefixCls}-container`">
    <component
      :is="isRange ? 'RangePanel' : 'Panel'"
      v-bind="{ ...$attrs, ...panelProps, ...(isRange ? { showNextDay } : {}) }"
      :value="panelValue"
      :visible="true"
      :format="computedFormat"
      :use12-hours="computedUse12Hours"
      :step="step"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      :hide-disabled-options="hideDisabledOptions"
      :hide-footer="disableConfirm"
      @select="onPanelSelect"
      @confirm="onPanelConfirm"
    >
      <template v-if="$slots.extra" #extra-footer>
        <slot name="extra" />
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, reactive, ref, toRefs, watch } from 'vue'
import type { Dayjs } from 'dayjs'
import { dayjs, getSortedDayjsArray, isValueChange, getDateValue } from '../_utils/date'
import { isArray, isUndefined } from '../_utils/is'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Trigger from '../trigger'
import DateInput from '../_components/picker/input.vue'
import DateRangeInput from '../_components/picker/input-range.vue'
import { IconClockCircle } from '@cedarjs/icons-vue/icon-clock-circle'
import useState from '../_hooks/use-state'
import useTimeFormat from './hooks/use-time-format'
import useTimeState from './hooks/use-time-state'
import { getFormattedValue, isValidInputValue, isValidRangeValue, isTimeRangeNextDay } from './utils'
import Panel from './panel.vue'
import RangePanel from './range-panel.vue'
import useIsDisabledTime from './hooks/use-is-disabled-time'
import useMergeState from '../_hooks/use-merge-state'
import { useI18n } from '../locale'
import { useFormItem } from '../_hooks/use-form-item'
import { timePickerProps } from './props'

export default defineComponent({
  name: createNamespace('time-picker').name,
  components: {
    Trigger,
    DateInput,
    DateRangeInput,
    Panel,
    RangePanel,
    IconClockCircle,
  },
  inheritAttrs: false,
  props: timePickerProps,
  emits: {
    /**
     * @zh 组件值发生改变
     * @en The component value changes
     * @param {string | Array<string | undefined> | undefined} timeString
     * @param {date | Array<date | undefined> | undefined} time
     */
    change: (
      timeString: string | Array<string | undefined> | undefined,
      time: Date | Array<Date | undefined> | undefined,
    ) => true,
    'update:modelValue': (timeString: string | Array<string | undefined> | undefined) => true,
    /**
     * @zh 选择时间但未触发组件值变化
     * @en Select time but do not trigger component value change
     * @param {string | Array<string | undefined>} timeString
     * @param {Date | Array<Date | undefined>} time
     */
    select: (timeString: string | Array<string | undefined>, time: Date | Array<Date | undefined>) => true,
    /**
     * @zh 点击清除按钮
     * @en Click the clear button
     * */
    clear: () => true,
    /**
     * @zh 弹出框展开和收起
     * @en Pop-up box expand and collapse
     * @param {boolean} visible
     */
    'open-change': (visible: boolean) => true,
    'update:open': (visible: boolean) => true,
  },
  /**
   * @zh 输入框前缀
   * @en Input box prefix
   * @slot prefix
   * @version 2.41.0
   */
  /**
   * @zh 输入框后缀图标
   * @en Input box suffix icon
   * @slot suffix-icon
   */
  /**
   * @zh 额外的页脚
   * @en Extra footer
   * @slot extra
   */
  setup(props, { emit }) {
    const {
      type,
      format,
      use12Hours,
      modelValue,
      defaultValue,
      open,
      defaultOpen,
      disabled,
      placeholder,
      disableConfirm,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      hideTrigger,
    } = toRefs(props)

    const { mergedDisabled, eventHandlers } = useFormItem({ disabled })

    const isRange = computed(() => type.value === 'time-range')
    const prefixCls = getPrefixCls('timepicker')
    const refInput = ref()

    const { format: computedFormat, use12Hours: computedUse12Hours } = useTimeFormat(
      reactive({
        format,
        use12Hours,
      }),
    )

    const { computedValue, panelValue, inputValue, setValue, setPanelValue, setInputValue } = useTimeState(
      reactive({
        modelValue,
        defaultValue,
        isRange,
        format: computedFormat,
      }),
    )

    // 选择面板是否可见
    const [panelVisible, setLocalVisible] = useMergeState(defaultOpen.value, reactive({ value: open }))
    const setPanelVisible = (newVisible: boolean) => {
      if (newVisible !== panelVisible.value) {
        setLocalVisible(newVisible)
        emit('open-change', newVisible)
        emit('update:open', newVisible)
      }
    }
    const { t } = useI18n()

    // 当前焦点所在的 input
    const [focusedInputIndex, setFocusedInputIndex] = useState(0)

    // placeholder
    const computedPlaceholder = computed(() => {
      const _placeholder = placeholder?.value
      // 单个
      if (!isRange.value) {
        return !isUndefined(_placeholder) ? _placeholder : t('datePicker.placeholder.time')
      }
      // 范围
      if (isUndefined(_placeholder)) {
        return t('datePicker.rangePlaceholder.time')
      }
      if (!isArray(_placeholder)) {
        return [_placeholder, _placeholder]
      }
      return _placeholder
    })

    const isDisabledTime = useIsDisabledTime(
      reactive({
        disabledHours,
        disabledMinutes,
        disabledSeconds,
      }),
    )

    function emitChange(value: Dayjs | Array<Dayjs | undefined> | undefined) {
      if (isValueChange(value, computedValue.value)) {
        const formattedValue = getFormattedValue(value as any, computedFormat.value)
        const dateValue = getDateValue(value as any)
        emit('update:modelValue', formattedValue)
        emit('change', formattedValue, dateValue)
        eventHandlers.value?.onChange?.()
      }
    }

    function confirm(value: Dayjs | Array<Dayjs | undefined> | undefined, showPanel: boolean) {
      if (isDisabledTime(value)) return

      let newValue = value

      if (isArray(value)) {
        const now = dayjs()
        newValue = value.map((item) => {
          if (item) {
            item = item.year(now.year())
            item = item.month(now.month())
            item = item.date(now.date())
          }
          return item
        })
        if (isValidRangeValue(newValue) && !props.showNextDay) {
          newValue = getSortedDayjsArray(newValue as Dayjs[])
        }
        if (newValue?.length === 0) {
          newValue = undefined
        }
      }

      emitChange(newValue)
      setValue(newValue)

      // 面板模式保持展开
      const nextVisible = hideTrigger.value ? true : showPanel
      if (nextVisible !== panelVisible.value) {
        setPanelVisible(nextVisible)
      }
    }

    function select(value: Dayjs | Array<Dayjs | undefined>, showPanel: boolean) {
      setPanelValue(value)

      if (showPanel !== panelVisible.value) {
        setPanelVisible(showPanel)
      }
    }

    function focusInput(index?: number) {
      refInput.value && refInput.value.focus && refInput.value.focus(index)
    }

    function onPanelVisibleChange(newVisible: boolean) {
      if (mergedDisabled.value) return
      setPanelVisible(newVisible)

      if (newVisible) {
        nextTick(() => {
          focusInput(focusedInputIndex.value)
        })
      }
    }

    function onPanelSelect(value: Dayjs | Array<Dayjs | undefined>) {
      // 先触发 select 事件
      const formattedValue = getFormattedValue(value as any, computedFormat.value)
      const dateValue = getDateValue(value as any)
      emit('select', formattedValue as any, dateValue)

      if (disableConfirm.value && (!isRange.value || isValidRangeValue(value))) {
        confirm(value, true)
      } else {
        select(value, true)
        setInputValue(undefined)
      }
    }

    function onPanelConfirm(value: Dayjs | Dayjs[]) {
      confirm(value, false)
    }

    function onInputPressEnter() {
      confirm(panelValue.value || computedValue.value, false)
    }

    function onRangeInputPressEnter() {
      if (isValidRangeValue(panelValue.value)) {
        confirm(panelValue.value, false)
      } else {
        const newFocusedInputIndex = (focusedInputIndex.value + 1) % 2
        setFocusedInputIndex(newFocusedInputIndex)
        focusInput(newFocusedInputIndex)
      }
    }

    function onInputChange(e: any) {
      setPanelVisible(true)

      const targetValue = e.target.value
      setInputValue(targetValue)

      if (!isValidInputValue(targetValue, computedFormat.value)) return

      const newValue = dayjs(targetValue, computedFormat.value)

      if (isDisabledTime(newValue)) return

      if (disableConfirm.value) {
        confirm(newValue, true)
      } else {
        select(newValue, true)
      }
    }

    function onRangeInputChange(e: any) {
      setPanelVisible(true)

      const targetValue = e.target.value
      const newInputValue = isArray(inputValue.value)
        ? [...inputValue.value]
        : (isArray(panelValue.value) &&
            (getFormattedValue(panelValue.value, computedFormat.value) as Array<string | undefined>)) ||
          []
      newInputValue[focusedInputIndex.value] = targetValue

      setInputValue(newInputValue)

      if (!isValidInputValue(targetValue, computedFormat.value)) return

      const targetValueDayjs = dayjs(targetValue, computedFormat.value)

      if (isDisabledTime(targetValueDayjs)) return

      const newValue = isArray(panelValue.value) ? [...panelValue.value] : []
      newValue[focusedInputIndex.value] = targetValueDayjs

      if (disableConfirm.value && isValidRangeValue(newValue)) {
        confirm(newValue, true)
      } else {
        select(newValue, true)
      }
    }

    function onClear(e: Event) {
      e.stopPropagation()
      setPanelValue(undefined)
      confirm(undefined, isRange.value)
    }

    // 1. 每次打开关闭重新赋值 panelValue
    watch(panelVisible, (curVal, preVal) => {
      if (curVal !== preVal) {
        setPanelValue(computedValue.value)
      }
      if (!curVal) {
        setInputValue(undefined)
      }
    })

    const inputProps = computed(() => {
      if (isRange.value) {
        const range = panelValue.value as Array<Dayjs | undefined> | undefined
        return {
          focusedIndex: focusedInputIndex.value,
          onFocusedIndexChange: (index: number) => {
            setFocusedInputIndex(index)
          },
          onChange: onRangeInputChange,
          onPressEnter: onRangeInputPressEnter,
          showNextDayLabel: props.showNextDay && isTimeRangeNextDay(range?.[0], range?.[1]),
          nextDayText: t('datePicker.nextDay'),
        }
      }
      return {
        onChange: onInputChange,
        onPressEnter: onInputPressEnter,
      }
    })

    const panelProps = computed(() => {
      if (isRange.value) {
        return {
          displayIndex: focusedInputIndex.value,
          onDisplayIndexChange: (index: number) => {
            setFocusedInputIndex(index)
            focusInput(index)
          },
        }
      }
      return {}
    })

    return {
      refInput,
      isRange,
      prefixCls,
      panelVisible,
      focusedInputIndex,
      computedPlaceholder,
      panelValue,
      inputValue,
      computedFormat,
      computedUse12Hours,
      inputProps,
      panelProps,
      mergedDisabled,
      hideTrigger,
      showNextDay: computed(() => props.showNextDay),
      onPanelVisibleChange: onPanelVisibleChange as any,
      onInputClear: onClear,
      onPanelSelect,
      onPanelConfirm,
      onPanelClick: () => {
        focusInput(focusedInputIndex.value)
      },
    }
  },
})
</script>
