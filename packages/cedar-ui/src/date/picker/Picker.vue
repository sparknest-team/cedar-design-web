<template>
  <PickerPanel v-bind="{ ...$attrs, ...panelProps }" />
</template>

<script lang="ts">
import type { Dayjs } from "dayjs";
import {
  computed,
  defineComponent,
  reactive,
  ref,
  toRefs,
  watch,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
} from "vue";
import {
  dayjs,
  getNow,
  isValueChange,
  getDateValue,
} from "../../_utils/date";
import { createNamespace, getPrefixCls } from "../../_utils/global-config";
import useState from "../../_hooks/use-state";
import { CalendarValue, FormatFunc, ShortcutType } from "./types";
import usePickerState from "./hooks/use-picker-state";
import { getFormattedValue, isValidInputValue } from "../../time/picker/utils";
import PickerPanel from "./PickerPanel.vue";
import pick from "../../_utils/pick";
import useFormat from "./hooks/use-format";
import { isFunction, isBoolean } from "../../_utils/is";
import useIsDisabledDate from "./hooks/use-is-disabled-date";
import useMergeState from "../../_hooks/use-merge-state";
import useProvideDatePickerTransform from "./hooks/use-provide-datepicker-transform";
import useHeaderValue from "./hooks/use-header-value";
import { omit } from "../../_utils/omit";
import useTimePickerValue from "./hooks/use-time-picker-value";
import { mergeValueWithTime } from "./utils";
import { useReturnValue } from "./hooks/use-value-format";
import { pickerProps } from "./props";

/**
 * @display-name Common
 * @no-brackets
 */
export default defineComponent({
  name: createNamespace("date-picker-base").name,
  components: {
    PickerPanel,
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
    change: (
      value: CalendarValue | undefined,
      date: Date | undefined,
      dateString: string | undefined,
    ) => true,
    "update:modelValue": (value: CalendarValue | undefined) => true,
    /**
     * @zh 选中日期发生改变但组件值未改变
     * @en The selected date has changed but the component value has not changed
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    select: (
      value: CalendarValue | undefined,
      date: Date | undefined,
      dateString: string | undefined,
    ) => true,
    /**
     * @zh 打开或关闭弹出框
     * @en Open or close the pop-up box
     * @param {boolean} visible
     */
    "open-change": (visible: boolean) => true,
    "update:open": (visible: boolean) => true,
    /**
     * @zh 点击确认按钮
     * @en Click the confirm button
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    ok: (
      value: CalendarValue | undefined,
      date: Date | undefined,
      dateString: string | undefined,
    ) => true,
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
    "select-shortcut": (shortcut: ShortcutType) => true,
    /**
     * @zh 面板日期改变
     * @en Panel date change
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    "picker-value-change": (
      value: CalendarValue,
      date: Date,
      dateString: string,
    ) => true,
    "update:pickerValue": (value: CalendarValue) => true,
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
      pickerValue,
      defaultPickerValue,
      dayStartOfWeek,
      previewShortcut,
      showConfirmBtn,
    } = toRefs(props);


    const mergedDisabled = computed(() => Boolean(disabled.value));

    const datePickerT = useProvideDatePickerTransform();

    const prefixCls = getPrefixCls("picker");

    const computedPlaceholder = computed(
      () =>
        placeholder?.value ||
        {
          date: datePickerT("datePicker.placeholder.date"),
          month: datePickerT("datePicker.placeholder.month"),
          year: datePickerT("datePicker.placeholder.year"),
          week: datePickerT("datePicker.placeholder.week"),
          quarter: datePickerT("datePicker.placeholder.quarter"),
        }[mode.value] ||
        datePickerT("datePicker.placeholder.date"),
    );

    const {
      format: computedFormat,
      valueFormat: returnValueFormat,
      parseValueFormat,
    } = useFormat(reactive({ format, mode, showTime, valueFormat }));

    const inputFormat = computed(() =>
      format && isFunction(format.value)
        ? (value: Dayjs) => (format.value as FormatFunc)?.(getDateValue(value))
        : computedFormat.value,
    );

    const getReturnValue = useReturnValue(
      reactive({
        format: returnValueFormat,
      }),
    );

    const isDisabledDate = useIsDisabledDate(
      reactive({
        mode,
        disabledDate,
        disabledTime,
        showTime,
      }),
    );

    const needConfirm = computed(() => !props.disableConfirm && (showTime.value || showConfirmBtn.value));
    const confirmBtnDisabled = computed(
      () =>
        needConfirm.value &&
        (!forSelectedValue.value || isDisabledDate(forSelectedValue.value)),
    );

    const isDateTime = computed(() => mode.value === "date" && showTime.value);

    // 确认选中的值
    const { value: selectedValue, setValue: setSelectedValue } = usePickerState(
      reactive({
        modelValue,
        defaultValue,
        format: parseValueFormat,
      }),
    );
    // 操作过程中的选中值
    const [processValue, setProcessValue] = useState<Dayjs | undefined>();
    // 预览用的值
    const [previewValue, setPreviewValue] = useState<Dayjs | undefined>();
    // 待确认的值
    const forSelectedValue = computed(
      () => processValue.value ?? selectedValue.value,
    );
    // panel 展示用的值
    const panelValue = computed(
      () => previewValue.value ?? processValue.value ?? selectedValue.value,
    );

    // input 操作使用的值
    const [inputValue, setInputValue] = useState<string | undefined>();

    // 选择面板是否可见
    const [panelVisible, setLocalPanelVisible] = useMergeState(
      defaultOpen.value,
      reactive({ value: open }),
    );
    const setPanelVisible = (newVisible: boolean) => {
      if (panelVisible.value !== newVisible) {
        setLocalPanelVisible(newVisible);
        emit("open-change", newVisible);
        emit("update:open", newVisible);
      }
    };

    // 生成当前面板内容
    const { headerValue, setHeaderValue, headerOperations, resetHeaderValue } =
      useHeaderValue(
        reactive({
          mode,
          value: pickerValue,
          defaultValue: defaultPickerValue,
          selectedValue: panelValue,
          format: parseValueFormat,
          onChange: (newVal: Dayjs) => {
            const returnValue = getReturnValue(newVal);
            const formattedValue = getFormattedValue(
              newVal,
              parseValueFormat.value,
            );
            const dateValue = getDateValue(newVal);
            emit("picker-value-change", returnValue, dateValue, formattedValue);
            emit("update:pickerValue", returnValue);
          },
        }),
      );

    const [timePickerValue, , resetTimePickerValue] = useTimePickerValue(
      reactive({
        timePickerProps,
        selectedValue: panelValue,
      }),
    );

    const inputEditable = computed(
      () => !readonly.value && !isFunction(inputFormat.value),
    );

    const headerMode = ref<"year" | "month" | undefined>();

    watch(panelVisible, (newVisible) => {
      setProcessValue(undefined);
      setPreviewValue(undefined);
      headerMode.value = undefined;

      // open
      if (newVisible) {
        resetHeaderValue();
        resetTimePickerValue();
      }

      // close
      if (!newVisible) {
        setInputValue(undefined);
      }
    });

    function emitChange(value: Dayjs | undefined, emitOk?: boolean) {
      const returnValue = value ? getReturnValue(value) : undefined;
      const formattedValue = getFormattedValue(value, parseValueFormat.value);
      const dateValue = getDateValue(value);
      if (isValueChange(value, selectedValue.value)) {
        emit("update:modelValue", returnValue);
        emit("change", returnValue, dateValue, formattedValue);
      }

      if (emitOk) {
        emit("ok", returnValue, dateValue, formattedValue);
      }
    }

    function confirm(
      value: Dayjs | undefined,
      showPanel?: boolean,
      emitOk?: boolean,
    ) {
      if (mergedDisabled.value || props.readonly) return;
      if (isDisabledDate(value)) {
        return;
      }

      emitChange(value, emitOk);
      setSelectedValue(value);
      setProcessValue(undefined);
      setPreviewValue(undefined);
      setInputValue(undefined);
      headerMode.value = undefined;
      if (isBoolean(showPanel)) {
        setPanelVisible(showPanel);
      }
    }

    function select(value: Dayjs | undefined, emitSelect?: boolean) {
      if (mergedDisabled.value || props.readonly) return;
      setProcessValue(value);
      setPreviewValue(undefined);
      setInputValue(undefined);
      headerMode.value = undefined;

      if (emitSelect) {
        const returnValue = value ? getReturnValue(value) : undefined;
        const formattedValue = getFormattedValue(value, parseValueFormat.value);
        const dateValue = getDateValue(value);
        emit("select", returnValue, dateValue, formattedValue);
      }
    }

    function getMergedOpValue(date: Dayjs, time?: Dayjs) {
      if (!isDateTime.value && !timePickerProps.value) return date;
      return mergeValueWithTime(getNow(), date, time);
    }

    function onPanelVisibleChange(visible: boolean) {
      if (mergedDisabled.value) return;
      setPanelVisible(visible);
    }

    function onPanelSelect(value: Dayjs) {
      if (needConfirm.value) {
        select(value, true);
      } else {
        confirm(value, false);
      }
    }

    function onPanelCellClick(value: Dayjs) {
      const newValue = getMergedOpValue(value, timePickerValue.value);
      onPanelSelect(newValue);
    }

    function onTimePickerSelect(time: Dayjs) {
      const newValue = getMergedOpValue(panelValue.value || getNow(), time);
      onPanelSelect(newValue);
    }

    function onPanelConfirm() {
      confirm(panelValue.value, false, true);
    }

    let clearPreviewTimer: ReturnType<typeof setTimeout> | undefined;
    let previewGeneration = 0;
    let previewMounted = false;
    let previewActive = true;
    let previewDisposed = false;
    const canPreview = () => previewMounted && previewActive && !previewDisposed &&
      panelVisible.value && previewShortcut.value && !mergedDisabled.value && !readonly.value;
    const cancelPreviewClear = () => {
      previewGeneration++;
      if (clearPreviewTimer !== undefined) clearTimeout(clearPreviewTimer);
      clearPreviewTimer = undefined;
    };
    const resetPreview = () => {
      cancelPreviewClear();
      setPreviewValue(undefined);
    };
    onMounted(() => { previewMounted = true; });
    onActivated(() => { previewActive = true; });
    onDeactivated(() => { previewActive = false; resetPreview(); });
    onBeforeUnmount(() => { previewDisposed = true; resetPreview(); });
    watch([panelVisible, mergedDisabled, readonly, previewShortcut, modelValue], resetPreview, { flush: "sync" });

    function onPanelShortcutMouseEnter(value: Dayjs) {
      if (!canPreview()) return;
      cancelPreviewClear();
      const request = previewGeneration;
      setPreviewValue(value);
      if (!canPreview() || request !== previewGeneration) return;
      setInputValue(undefined);
    }

    function onPanelShortcutMouseLeave() {
      if (!canPreview()) return;
      cancelPreviewClear();
      const request = previewGeneration;
      let pending = true;
      clearPreviewTimer = setTimeout(() => {
        if (!pending || request !== previewGeneration || !canPreview()) return;
        pending = false;
        clearPreviewTimer = undefined;
        setPreviewValue(undefined);
      }, 100);
    }

    function onPanelShortcutClick(value: Dayjs, shortcut: ShortcutType) {
      emit("select-shortcut", shortcut);
      confirm(value, false);
    }

    function onPanelHeaderLabelClick(type: "year" | "month") {
      headerMode.value = type;
    }

    function onMonthHeaderClick() {
      headerMode.value = "year";
    }

    function onPanelHeaderSelect(date: Dayjs) {
      let newValue = headerValue.value;
      newValue = newValue.set("year", date.year());
      if (headerMode.value === "month") {
        newValue = newValue.set("month", date.month());
      }
      setHeaderValue(newValue);
      if (mode.value === "quarter" || mode.value === "month") {
        // 季度选择器特殊处理，月份选完后关闭headerMode
        headerMode.value = undefined;
        return;
      }
      headerMode.value = headerMode.value === "year" ? "month" : undefined; // 年选择完后选择月
    }

    const computedTimePickerProps = computed(() => ({
      format: computedFormat.value,
      ...omit(timePickerProps?.value || {}, ["defaultValue"]),
      visible: panelVisible.value,
    }));

    const panelProps = computed(() => ({
      ...pick(props, [
        "mode",
        "shortcuts",
        "shortcutsPosition",
        "dayStartOfWeek",
        "disabledDate",
        "disabledTime",
        "showTime",

        "abbreviation",
      ]),
      showNowButton: props.showNowButton && mode.value === "date",
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
        prev: slots["icon-prev"],
        prevDouble: slots["icon-prev-double"],
        next: slots["icon-next"],
        nextDouble: slots["icon-next-double"],
      },
      headerOperations: headerOperations.value,
      timePickerValue: timePickerValue.value,
      headerMode: headerMode.value,
      onCellClick: onPanelCellClick,
      onTimePickerSelect,
      onConfirm: onPanelConfirm,
      onShortcutClick: onPanelShortcutClick,
      onShortcutMouseEnter: previewShortcut.value
        ? onPanelShortcutMouseEnter
        : undefined,
      onShortcutMouseLeave: previewShortcut.value
        ? onPanelShortcutMouseLeave
        : undefined,
      onTodayBtnClick: onPanelSelect,
      onHeaderLabelClick: onPanelHeaderLabelClick,
      onHeaderSelect: onPanelHeaderSelect,
      onMonthHeaderClick,
    }));

    return {
      prefixCls,
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
    };
  },
});
</script>
