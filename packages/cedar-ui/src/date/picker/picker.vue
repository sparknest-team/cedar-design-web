<template>
  <Trigger
    v-if="!hideTrigger"
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :click-to-close="false"
    :popup-offset="4"
    v-bind="triggerProps"
    :placement="placement"
    :disabled="mergedDisabled || readonly"
    :prevent-focus="true"
    :open="panelVisible"
    :unmount-on-close="unmountOnClose"
    :popup-container="popupContainer"
    @openChange="onPanelVisibleChange"
  >
    <slot>
      <DateInput
        v-bind="$attrs"
        ref="refInput"
        :size="size"
        :variant="variant"
        :focused="panelVisible"
        :visible="panelVisible"
        :error="error"
        :disabled="mergedDisabled"
        :readonly="!inputEditable || disabledInput"
        :clearable="clearable && !readonly"
        :placeholder="computedPlaceholder"
        :input-value="inputValue"
        :value="needConfirm ? panelValue : selectedValue"
        :format="inputFormat"
        @clear="onInputClear"
        @change="onInputChange"
        @pressEnter="onInputPressEnter"
        @blur="onInputBlur"
      >
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
        </template>
        <template #suffix-icon>
          <slot name="suffix-icon">
            <IconCalendar />
          </slot>
        </template>
      </DateInput>
    </slot>
    <template #content>
      <PickerPanel v-bind="panelProps" @click="onPanelClick" />
    </template>
  </Trigger>
  <PickerPanel v-else v-bind="{ ...$attrs, ...panelProps }" />
</template>

<script lang="ts">
import type { Dayjs } from 'dayjs'
import { computed, defineComponent, reactive, ref, toRefs, watch, watchEffect, onUnmounted } from 'vue'
import { dayjs, getNow, isValueChange, getDateValue, initializeDateLocale } from '../../_utils/date'
import { createNamespace, getPrefixCls } from '../../_utils/global-config'
import useState from '../../_hooks/use-state'
import { CalendarValue, FormatFunc, ShortcutType } from './types'
import usePickerState from './hooks/use-picker-state'
import DateInput from '../../_components/picker/input.vue'
import Trigger from '../../trigger'
import { getFormattedValue, isValidInputValue } from '../../time/picker/utils'
import PickerPanel from './picker-panel.vue'
import pick from '../../_utils/pick'
import useFormat from './hooks/use-format'
import { isFunction, isBoolean } from '../../_utils/is'
import { IconCalendar } from '@cedarjs/icons-vue/icon-calendar'
import useIsDisabledDate from './hooks/use-is-disabled-date'
import useMergeState from '../../_hooks/use-merge-state'
import useProvideDatePickerTransform from './hooks/use-provide-datepicker-transform'
import useHeaderValue from './hooks/use-header-value'
import { omit } from '../../_utils/omit'
import useTimePickerValue from './hooks/use-time-picker-value'
import { mergeValueWithTime } from './utils'
import { useReturnValue } from './hooks/use-value-format'
import { useFormItem } from '../../_hooks/use-form-item'
import { useI18n } from '../../locale'
import { pickerProps } from './props'

/**
 * @displayName Common
 * @noBrackets
 */
export default defineComponent({
  name: createNamespace('date-picker-base').name,
  components: {
    DateInput,
    Trigger,
    PickerPanel,
    IconCalendar,
  },
  inheritAttrs: false,
  props: pickerProps,
  emits: {
    /**
     * @zh 组件值发生改变
     * @en The component value changes
     * @param {Date | string | number | undefined} value
     * @param {Date | undefined} date
     * @param {string | undefined} dateString
     */
    change: (value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => true,
    'update:modelValue': (value: CalendarValue | undefined) => true,
    /**
     * @zh 选中日期发生改变但组件值未改变
     * @en The selected date has changed but the component value has not changed
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    select: (value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => true,
    /**
     * @zh 打开或关闭弹出框
     * @en Open or close the pop-up box
     * @param {boolean} visible
     */
    'open-change': (visible: boolean) => true,
    'update:open': (visible: boolean) => true,
    /**
     * @zh 点击确认按钮
     * @en Click the confirm button
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    ok: (value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => true,
    /**
     * @zh 点击清除按钮
     * @en Click the clear button
     */
    clear: () => true,
    /**
     * @zh 点击快捷选项
     * @en Click on the shortcut option
     * @param {ShortcutType} shortcut
     */
    'select-shortcut': (shortcut: ShortcutType) => true,
    /**
     * @zh 面板日期改变
     * @en Panel date change
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    'picker-value-change': (value: CalendarValue, date: Date, dateString: string) => true,
    'update:pickerValue': (value: CalendarValue) => true,
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
  /**
   * @zh 自定义日期单元格的内容
   * @en Customize the contents of the date cell
   * @slot cell
   * @binding {Date} date
   */
  /**
   * @zh 单箭头往前翻页图标
   * @en Single arrow page forward icon
   * @slot icon-prev
   */
  /**
   * @zh 单箭头往后翻页图标
   * @en Single arrow page backward icon
   * @slot icon-next
   */
  /**
   * @zh 双箭头往前翻页图标
   * @en Double arrow page forward icon
   * @slot icon-prev-double
   */
  /**
   * @zh 双箭头往后翻页图标
   * @en Double arrow page backward icon
   * @slot icon-next-double
   */
  setup(props, { emit, slots }) {
    const {
      mode,
      modelValue,
      defaultValue,
      format,
      valueFormat,
      placeholder,
      open,
      defaultOpen,
      disabled,
      showTime,
      timePickerProps,
      disabledDate,
      disabledTime,
      readonly,
      locale,
      pickerValue,
      defaultPickerValue,
      dayStartOfWeek,
      previewShortcut,
      showConfirmBtn,
    } = toRefs(props)

    const { locale: globalLocal } = useI18n()
    watchEffect(() => {
      initializeDateLocale(globalLocal.value, dayStartOfWeek.value)
    })

    const { mergedDisabled, eventHandlers } = useFormItem({ disabled })

    const datePickerT = useProvideDatePickerTransform(
      reactive({
        locale,
      }),
    )

    const prefixCls = getPrefixCls('picker')

    const refInput = ref()

    const computedPlaceholder = computed(
      () =>
        placeholder?.value ||
        {
          date: datePickerT('datePicker.placeholder.date'),
          month: datePickerT('datePicker.placeholder.month'),
          year: datePickerT('datePicker.placeholder.year'),
          week: datePickerT('datePicker.placeholder.week'),
          quarter: datePickerT('datePicker.placeholder.quarter'),
        }[mode.value] ||
        datePickerT('datePicker.placeholder.date'),
    )

    const {
      format: computedFormat,
      valueFormat: returnValueFormat,
      parseValueFormat,
    } = useFormat(reactive({ format, mode, showTime, valueFormat }))

    const inputFormat = computed(() =>
      format && isFunction(format.value)
        ? (value: Dayjs) => (format.value as FormatFunc)?.(getDateValue(value))
        : computedFormat.value,
    )

    const getReturnValue = useReturnValue(
      reactive({
        format: returnValueFormat,
      }),
    )

    const isDisabledDate = useIsDisabledDate(
      reactive({
        mode,
        disabledDate,
        disabledTime,
        showTime,
      }),
    )

    const needConfirm = computed(() => showTime.value || showConfirmBtn.value)
    const confirmBtnDisabled = computed(
      () => needConfirm.value && (!forSelectedValue.value || isDisabledDate(forSelectedValue.value)),
    )

    const isDateTime = computed(() => mode.value === 'date' && showTime.value)

    // 确认选中的值
    const { value: selectedValue, setValue: setSelectedValue } = usePickerState(
      reactive({
        modelValue,
        defaultValue,
        format: parseValueFormat,
      }),
    )
    // 操作过程中的选中值
    const [processValue, setProcessValue] = useState<Dayjs | undefined>()
    // 预览用的值
    const [previewValue, setPreviewValue] = useState<Dayjs | undefined>()
    // 待确认的值
    const forSelectedValue = computed(() => processValue.value ?? selectedValue.value)
    // panel 展示用的值
    const panelValue = computed(() => previewValue.value ?? processValue.value ?? selectedValue.value)

    // input 操作使用的值
    const [inputValue, setInputValue] = useState<string | undefined>()

    // 选择面板是否可见
    const [panelVisible, setLocalPanelVisible] = useMergeState(
      defaultOpen.value,
      reactive({ value: open }),
    )
    const setPanelVisible = (newVisible: boolean) => {
      if (panelVisible.value !== newVisible) {
        setLocalPanelVisible(newVisible)
        emit('open-change', newVisible)
        emit('update:open', newVisible)
      }
    }

    // 生成当前面板内容
    const { headerValue, setHeaderValue, headerOperations, resetHeaderValue } = useHeaderValue(
      reactive({
        mode,
        value: pickerValue,
        defaultValue: defaultPickerValue,
        selectedValue: panelValue,
        format: parseValueFormat,
        onChange: (newVal: Dayjs) => {
          const returnValue = getReturnValue(newVal)
          const formattedValue = getFormattedValue(newVal, parseValueFormat.value)
          const dateValue = getDateValue(newVal)
          emit('picker-value-change', returnValue, dateValue, formattedValue)
          emit('update:pickerValue', returnValue)
        },
      }),
    )

    const [timePickerValue, , resetTimePickerValue] = useTimePickerValue(
      reactive({
        timePickerProps,
        selectedValue: panelValue,
      }),
    )

    const inputEditable = computed(() => !readonly.value && !isFunction(inputFormat.value))

    const headerMode = ref<'year' | 'month' | undefined>()

    watch(panelVisible, (newVisible) => {
      setProcessValue(undefined)
      setPreviewValue(undefined)
      headerMode.value = undefined

      // open
      if (newVisible) {
        resetHeaderValue()
        resetTimePickerValue()
      }

      // close
      if (!newVisible) {
        setInputValue(undefined)
      }
    })

    function emitChange(value: Dayjs | undefined, emitOk?: boolean) {
      const returnValue = value ? getReturnValue(value) : undefined
      const formattedValue = getFormattedValue(value, parseValueFormat.value)
      const dateValue = getDateValue(value)
      if (isValueChange(value, selectedValue.value)) {
        emit('update:modelValue', returnValue)
        emit('change', returnValue, dateValue, formattedValue)
        eventHandlers.value?.onChange?.()
      }

      if (emitOk) {
        emit('ok', returnValue, dateValue, formattedValue)
      }
    }

    function confirm(value: Dayjs | undefined, showPanel?: boolean, emitOk?: boolean) {
      if (isDisabledDate(value)) {
        return
      }

      emitChange(value, emitOk)
      setSelectedValue(value)
      setProcessValue(undefined)
      setPreviewValue(undefined)
      setInputValue(undefined)
      headerMode.value = undefined
      if (isBoolean(showPanel)) {
        setPanelVisible(showPanel)
      }
    }

    function select(value: Dayjs | undefined, emitSelect?: boolean) {
      setProcessValue(value)
      setPreviewValue(undefined)
      setInputValue(undefined)
      headerMode.value = undefined

      if (emitSelect) {
        const returnValue = value ? getReturnValue(value) : undefined
        const formattedValue = getFormattedValue(value, parseValueFormat.value)
        const dateValue = getDateValue(value)
        emit('select', returnValue, dateValue, formattedValue)
      }
    }

    function focusInput(index?: number) {
      refInput.value && refInput.value.focus && refInput.value.focus(index)
    }

    function getMergedOpValue(date: Dayjs, time?: Dayjs) {
      if (!isDateTime.value && !timePickerProps.value) return date
      return mergeValueWithTime(getNow(), date, time)
    }

    function onPanelVisibleChange(visible: boolean) {
      if (mergedDisabled.value) return
      setPanelVisible(visible)
    }

    function onInputClear(e: Event) {
      e.stopPropagation()
      confirm(undefined)
      emit('clear')
    }

    function onInputBlur() {
      eventHandlers.value?.onBlur?.()
    }

    function onInputChange(e: any) {
      setPanelVisible(true)

      const targetValue = e.target.value
      setInputValue(targetValue)

      if (!isValidInputValue(targetValue, computedFormat.value)) return

      const newValue = dayjs(targetValue, computedFormat.value)

      if (isDisabledDate(newValue)) return

      if (needConfirm.value) {
        select(newValue)
      } else {
        confirm(newValue, true)
      }
    }

    function onInputPressEnter() {
      confirm(panelValue.value, false)
    }

    function onPanelSelect(value: Dayjs) {
      if (needConfirm.value) {
        select(value, true)
      } else {
        confirm(value, false)
      }
    }

    function onPanelCellClick(value: Dayjs) {
      const newValue = getMergedOpValue(value, timePickerValue.value)
      onPanelSelect(newValue)
    }

    function onTimePickerSelect(time: Dayjs) {
      const newValue = getMergedOpValue(panelValue.value || getNow(), time)
      onPanelSelect(newValue)
    }

    function onPanelConfirm() {
      confirm(panelValue.value, false, true)
    }

    function onPanelClick() {
      if (props.disabledInput) {
        focusInput()
      }
    }

    let clearPreviewTimer: any
    onUnmounted(() => {
      clearTimeout(clearPreviewTimer)
    })

    function onPanelShortcutMouseEnter(value: Dayjs) {
      clearTimeout(clearPreviewTimer)
      setPreviewValue(value)
      setInputValue(undefined)
    }

    function onPanelShortcutMouseLeave() {
      clearTimeout(clearPreviewTimer)
      clearPreviewTimer = setTimeout(() => {
        setPreviewValue(undefined)
      }, 100)
    }

    function onPanelShortcutClick(value: Dayjs, shortcut: ShortcutType) {
      emit('select-shortcut', shortcut)
      confirm(value, false)
    }

    function onPanelHeaderLabelClick(type: 'year' | 'month') {
      headerMode.value = type
    }

    function onMonthHeaderClick() {
      headerMode.value = 'year'
    }

    function onPanelHeaderSelect(date: Dayjs) {
      let newValue = headerValue.value
      newValue = newValue.set('year', date.year())
      if (headerMode.value === 'month') {
        newValue = newValue.set('month', date.month())
      }
      setHeaderValue(newValue)
      if (mode.value === 'quarter' || mode.value === 'month') {
        // 季度选择器特殊处理，月份选完后关闭headerMode
        headerMode.value = undefined
        return
      }
      headerMode.value = headerMode.value === 'year' ? 'month' : undefined // 年选择完后选择月
    }

    const computedTimePickerProps = computed(() => ({
      format: computedFormat.value,
      ...omit(timePickerProps?.value || {}, ['defaultValue']),
      visible: panelVisible.value,
    }))

    const panelProps = computed(() => ({
      ...pick(props, [
        'mode',
        'shortcuts',
        'shortcutsPosition',
        'dayStartOfWeek',
        'disabledDate',
        'disabledTime',
        'showTime',
        'hideTrigger',
        'abbreviation',
      ]),
      showNowBtn: props.showNowBtn && mode.value === 'date',
      prefixCls,
      format: parseValueFormat.value,
      value: panelValue.value,
      visible: panelVisible.value,
      showConfirmBtn: needConfirm.value,
      confirmBtnDisabled: confirmBtnDisabled.value,
      timePickerProps: computedTimePickerProps.value,
      extra: slots.extra,
      dateRender: slots.cell,
      headerValue: headerValue.value,
      headerIcons: {
        prev: slots['icon-prev'],
        prevDouble: slots['icon-prev-double'],
        next: slots['icon-next'],
        nextDouble: slots['icon-next-double'],
      },
      headerOperations: headerOperations.value,
      timePickerValue: timePickerValue.value,
      headerMode: headerMode.value,
      onCellClick: onPanelCellClick,
      onTimePickerSelect,
      onConfirm: onPanelConfirm,
      onShortcutClick: onPanelShortcutClick,
      onShortcutMouseEnter: previewShortcut.value ? onPanelShortcutMouseEnter : undefined,
      onShortcutMouseLeave: previewShortcut.value ? onPanelShortcutMouseLeave : undefined,
      onTodayBtnClick: onPanelSelect,
      onHeaderLabelClick: onPanelHeaderLabelClick,
      onHeaderSelect: onPanelHeaderSelect,
      onMonthHeaderClick,
    }))

    return {
      prefixCls,
      refInput,
      panelProps,
      panelValue,
      inputValue,
      selectedValue,
      inputFormat,
      computedPlaceholder,
      panelVisible,
      inputEditable,
      needConfirm,
      mergedDisabled,
      onPanelVisibleChange,
      onInputClear,
      onInputChange,
      onInputPressEnter,
      onInputBlur,
      onPanelClick,
    }
  },
})
</script>
