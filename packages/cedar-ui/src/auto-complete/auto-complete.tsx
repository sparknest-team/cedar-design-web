import type { StyleValue } from "vue";
import { computed, defineComponent, inject, ref, toRefs, watch } from "vue";
import Input from "../input";
import Trigger from "../trigger";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import type {
  FilterOption,
  SelectOptionData,
  SelectOptionInfo,
} from "../select/types";
import { isFunction, isNull, isUndefined } from "../_utils/is";
import SelectDropdown from "../select/select-dropdown.vue";
import Option from "../select/option.vue";
import { useSelect } from "../select/hooks/use-select";
import { getKeyFromValue } from "../select/utils";
import { useFormItem } from "../_hooks/use-form-item";
import VirtualList from "../_components/virtual-list-v2";
import type { GroupFieldContext } from "../input/context";
import { fieldInjectionKey } from "../input/context";
import { autoCompleteProps } from "./props";
import type { AutoCompleteOptionData, AutoCompleteOptionInfo } from "./props";

const { name, n, classes } = createNamespace("auto-complete");
let autoCompleteId = 0;

export default defineComponent({
  name,
  inheritAttrs: false,
  props: autoCompleteProps,
  emits: {
    "update:modelValue": (value: string) => true,
    input: (value: string, ev: Event) => true,
    search: (value: string, ev: Event) => true,
    change: (value: string, ev: Event) => true,
    select: (value: string, option: AutoCompleteOptionInfo, ev: Event) => true,
    clear: (ev: Event) => true,
    focus: (ev: FocusEvent) => true,
    blur: (ev: FocusEvent) => true,
    dropdownScroll: (ev: Event) => true,
    dropdownReachBottom: (ev: Event) => true,
  },
  setup(props, { emit, attrs, slots, expose }) {
    const prefixCls = getPrefixCls("auto-complete");
    const groupContext = inject<GroupFieldContext>(
      fieldInjectionKey,
      {} as GroupFieldContext,
    );
    const { size, disabled, variant, modelValue, options, fieldNames } =
      toRefs(props);
    const mergedSizeProp = computed(
      () => size.value ?? groupContext?.size ?? "md",
    );
    const mergedDisabledProp = computed(() =>
      Boolean(disabled.value ?? groupContext?.disabled ?? false),
    );
    const mergedVariant = computed(
      () => variant.value ?? groupContext?.variant ?? "outlined",
    );
    const { mergedSize, mergedDisabled, eventHandlers } = useFormItem({
      size: mergedSizeProp,
      disabled: mergedDisabledProp,
    });

    const inputRef = ref<InstanceType<typeof Input>>();
    const dropdownRef = ref();
    const virtualListRef = ref();
    const optionRefs = ref<Record<string, HTMLElement>>({});
    const focused = ref(false);
    const open = ref(false);
    const innerValue = ref(props.defaultValue);
    const computedValue = computed(() => props.modelValue ?? innerValue.value);
    let committedValue = computedValue.value;

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) innerValue.value = "";
    });

    watch(computedValue, (value) => {
      if (!focused.value) committedValue = value;
    });

    const computedValueKeys = computed(() =>
      computedValue.value ? [getKeyFromValue(computedValue.value)] : [],
    );
    const component = computed(() => (props.virtualListProps ? "div" : "li"));

    const strictFilterOption = (inputValue: string, option: SelectOptionData) =>
      Boolean(String(option.label ?? "").includes(inputValue));

    const mergedFilterOption = computed<FilterOption>(() => {
      const filterOption = props.filterOption;
      if (isFunction(filterOption)) {
        return (inputValue: string, option: SelectOptionData) =>
          filterOption(inputValue, option as AutoCompleteOptionData);
      }
      if (filterOption === false) return false;
      if (props.strict) return strictFilterOption;
      return true;
    });

    const editable = computed(() => !mergedDisabled.value && !props.readonly);
    const computedOpen = computed(
      () => editable.value && open.value && validOptionInfos.value.length > 0,
    );
    const listboxId = `${prefixCls}-listbox-${++autoCompleteId}`;
    const getOptionId = (key: string) =>
      `${listboxId}-option-${encodeURIComponent(key)}`;

    const handleOpenChange = (nextOpen: boolean) => {
      open.value = nextOpen && editable.value;
    };

    const closeDropdown = () => {
      open.value = false;
    };

    const openDropdown = () => {
      if (editable.value) open.value = true;
    };

    const updateValue = (value: string) => {
      const changed = value !== computedValue.value;
      innerValue.value = value;
      if (changed) emit("update:modelValue", value);
      return changed;
    };

    const emitChange = (value: string, ev: Event, notifyForm = false) => {
      if (value === committedValue) return false;
      committedValue = value;
      emit("change", value, ev);
      if (notifyForm) eventHandlers.value?.onChange?.(ev);
      return true;
    };

    const getOptionInfo = (item: SelectOptionInfo): AutoCompleteOptionInfo => ({
      value: String(item.value),
      label: String(item.label),
      disabled: Boolean(item.disabled),
      raw: item.raw as AutoCompleteOptionData,
    });

    const handleSelect = (key: string, ev: Event) => {
      const item = optionInfoMap.get(key);
      if (!item || item.disabled || !editable.value) return;

      const option = getOptionInfo(item);
      const changed = updateValue(option.value);
      emit("select", option.value, option, ev);
      if (changed) emitChange(option.value, ev, true);
      closeDropdown();
    };

    const handleInput = (value: string, ev: Event) => {
      if (!editable.value) return;
      emit("input", value, ev);
      emit("search", value, ev);
      openDropdown();
    };

    const handleChange = (value: string, ev: Event) => {
      if (ev.defaultPrevented) return;
      emitChange(value, ev);
    };

    const handleClear = (ev: Event) => {
      committedValue = "";
      closeDropdown();
      emit("clear", ev);
    };

    const handleFocus = (ev: FocusEvent) => {
      focused.value = true;
      openDropdown();
      emit("focus", ev);
    };

    const handleBlur = (ev: FocusEvent) => {
      focused.value = false;
      closeDropdown();
      emit("blur", ev);
    };

    const handleDropdownScroll = (ev: Event) => emit("dropdownScroll", ev);
    const handleDropdownReachBottom = (ev: Event) =>
      emit("dropdownReachBottom", ev);

    const {
      validOptions,
      optionInfoMap,
      validOptionInfos,
      activeKey,
      handleKeyDown,
    } = useSelect({
      options,
      inputValue: computedValue,
      filterOption: mergedFilterOption,
      fieldNames,
      open: computedOpen,
      valueKeys: computedValueKeys,
      component,
      dropdownRef,
      optionRefs,
      virtualListRef,
      onSelect: handleSelect,
      onOpenChange: handleOpenChange,
      enterToOpen: false,
    });

    const handleInputKeydown = (ev: KeyboardEvent) => {
      if (ev.key === "Tab") {
        closeDropdown();
        return;
      }
      handleKeyDown(ev);
    };

    const getOptionContent = (item: SelectOptionInfo) => {
      if (isFunction(slots.option)) {
        const data = getOptionInfo(item);
        return () => slots.option?.({ data });
      }
      return () => item.label;
    };

    const renderOption = (item: SelectOptionInfo) => (
      <Option
        ref={(instance: any) => {
          if (instance?.$el) optionRefs.value[item.key] = instance.$el;
        }}
        key={item.key}
        {...({
          id: getOptionId(item.key),
          role: "option",
          "aria-selected": activeKey.value === item.key,
          "aria-disabled": Boolean(item.disabled),
          onMousedown: (ev: MouseEvent) => ev.preventDefault(),
        } as any)}
        value={item.value}
        disabled={item.disabled}
        internal
        v-slots={{ default: getOptionContent(item) }}
      />
    );

    const renderDropdown = () => (
      <SelectDropdown
        ref={dropdownRef}
        {...({ id: listboxId, role: "listbox" } as any)}
        class={classes(`${prefixCls}-dropdown`)}
        virtualList={Boolean(props.virtualListProps)}
        onScroll={handleDropdownScroll}
        onReachBottom={handleDropdownReachBottom}
        v-slots={{
          default: () =>
            validOptions.value.map((item) =>
              renderOption(item as SelectOptionInfo),
            ),
          "virtual-list": () => (
            <VirtualList
              {...(props.virtualListProps as any)}
              ref={virtualListRef}
              data={validOptions.value}
              v-slots={{
                item: ({ item }: { item: SelectOptionInfo }) =>
                  renderOption(item),
              }}
            />
          ),
          footer: slots.footer,
        }}
      />
    );

    const { class: className, style, ...restAttrs } = attrs;
    const mergedInputAttrs = computed(() => ({
      ...props.inputAttrs,
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-expanded": computedOpen.value,
      "aria-controls": listboxId,
      "aria-activedescendant":
        computedOpen.value && activeKey.value
          ? getOptionId(activeKey.value)
          : undefined,
      autocomplete: "off",
    }));

    const render = () => (
      <Trigger
        trigger="focus"
        placement="bl"
        animationName="slide-dynamic-origin"
        autoFitTransformOrigin
        open={computedOpen.value}
        clickToClose={false}
        preventFocus
        popupOffset={4}
        disabled={!editable.value}
        autoFitPopupWidth
        popupContainer={props.popupContainer ?? undefined}
        {...props.triggerProps}
        onOpenChange={handleOpenChange}
        onUpdate:open={handleOpenChange}
        v-slots={{ content: renderDropdown }}
      >
        <div class={[classes(n()), className]} style={style as StyleValue}>
          <Input
            {...restAttrs}
            ref={inputRef}
            modelValue={computedValue.value}
            defaultValue={props.defaultValue}
            size={mergedSize.value}
            variant={mergedVariant.value}
            disabled={mergedDisabled.value}
            readonly={props.readonly}
            error={props.error}
            clearable={props.clearable}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            showWordLimit={props.showWordLimit}
            wordLength={props.wordLength}
            wordSlice={props.wordSlice}
            inputAttrs={mergedInputAttrs.value}
            v-slots={{
              prefix: slots.prefix,
              suffix: slots.suffix,
              "clear-icon": slots["clear-icon"],
            }}
            onUpdate:modelValue={updateValue}
            onInput={handleInput}
            onChange={handleChange}
            onClear={handleClear}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeydown={handleInputKeydown}
          />
        </div>
      </Trigger>
    );

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    });

    return render;
  },
});
