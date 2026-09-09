import { computed, defineComponent, nextTick, ref } from "vue";
import type { StyleValue } from "vue";
import { IconLoading } from "@cedarjs/icons-vue/icon-loading";
import { IconSearch } from "@cedarjs/icons-vue/icon-search";
import { createNamespace } from "../_utils/global-config";
import { useSize } from "../_hooks/use-size";
import Button from "../button";
import Input from "../input/input";
import InputGroup from "../input/input-group.vue";
import Menu, { MenuOption } from "../menu";
import Select from "../select";
import { searchProps } from "./props";
import type { SearchField } from "./props";
import type { SearchResult } from "./result";

export default defineComponent({
  name: createNamespace("search").name,
  inheritAttrs: false,
  props: searchProps,
  emits: {
    "update:modelValue": (value: string) => true,
    "update:modelField": (value: string) => true,
    "update:model": (value: Record<string, unknown>) => true,
    input: (value: string, ev: Event) => true,
    change: (value: string, ev: Event) => true,
    clear: (ev: Event) => true,
    search: (data: SearchResult, ev: Event) => true,
    focus: (ev: FocusEvent) => true,
    blur: (ev: FocusEvent) => true,
  },
  setup(props, { emit, slots, attrs }) {
    const { classes, n } = createNamespace("search");
    const { mergedSize } = useSize(computed(() => props.size));

    const inputRef = ref<InstanceType<typeof Input>>();
    const selectRef = ref<InstanceType<typeof Select>>();
    const historyVisible = ref(false);
    const value = ref(props.defaultValue);
    const field = ref(props.defaultField ?? props.fields[0]?.value);

    const computedValue = computed(() => props.modelValue ?? value.value);
    const computedField = computed(() => props.modelField ?? field.value);
    const computedPlaceholder = computed(() => {
      const selected = props.fields.find(
        (item) => item.value === computedField.value,
      );
      return selected?.placeholder ?? props.placeholder;
    });
    const searchDisabled = computed(() =>
      Boolean(props.disabled || props.readonly || props.loading),
    );

    const clearModel = () => {
      if (!props.model || !props.fields.length) return false;

      props.fields.forEach((item: SearchField) => {
        props.model![item.value] = undefined;
      });
      return true;
    };

    const updateModel = (nextValue: string) => {
      if (!clearModel()) return;

      if (computedField.value) {
        props.model![computedField.value] = nextValue;
      }
      emit("update:model", props.model!);
    };

    const updateValue = (nextValue: string) => {
      value.value = nextValue;
      emit("update:modelValue", nextValue);
      updateModel(nextValue);
    };

    const getRecentSearches = (nextValue: string) => {
      const keyword = nextValue.trim();
      const searches = props.recentSearches.filter((item) => item !== keyword);

      if (keyword) searches.unshift(keyword);
      return searches.slice(0, Math.max(0, props.maxSearchHistoryCount));
    };

    const getResult = (nextValue = computedValue.value): SearchResult => ({
      modelField: computedField.value,
      modelValue: nextValue,
      model: props.model,
      recentSearches: getRecentSearches(nextValue),
    });

    const closeHistory = () => {
      historyVisible.value = false;
    };

    const openHistory = () => {
      if (
        !props.disabled &&
        !props.readonly &&
        !props.loading &&
        props.recentSearches.length
      ) {
        historyVisible.value = true;
      }
    };

    const handleInput = (nextValue: string, ev: Event) => {
      updateValue(nextValue);
      emit("input", nextValue, ev);
      openHistory();
    };

    const handleChange = (nextValue: string, ev: Event) => {
      emit("change", nextValue, ev);
    };

    const handleClear = (ev: Event) => {
      updateValue("");
      emit("clear", ev);
      openHistory();
    };

    const handleSearch = (ev: Event) => {
      if (searchDisabled.value) return;

      closeHistory();
      emit("search", getResult(), ev);
    };

    const handleFieldChange = (nextField: unknown, ev?: Event) => {
      const normalizedField = String(nextField);
      field.value = normalizedField;
      emit("update:modelField", normalizedField);
      updateValue("");
      emit("change", "", ev ?? new Event("change"));
      nextTick(() => inputRef.value?.focus());
    };

    const handleHistoryVisibleChange = (open: boolean) => {
      historyVisible.value =
        open &&
        !props.disabled &&
        !props.readonly &&
        !props.loading &&
        props.recentSearches.length > 0;
    };

    const handleHistorySelect = (
      nextValue: unknown,
      _option: Record<string, unknown>,
      ev: Event,
    ) => {
      const normalizedValue = String(nextValue);
      updateValue(normalizedValue);
      closeHistory();
      emit("search", getResult(normalizedValue), ev);
    };

    const handleFocus = (ev: FocusEvent) => {
      openHistory();
      emit("focus", ev);
    };

    const handleBlur = (ev: FocusEvent) => {
      emit("blur", ev);
    };

    const renderSuffix = () => (
      <>
        <button
          type="button"
          class={classes(n("icon-button"))}
          disabled={searchDisabled.value}
          aria-label={props.buttonText ?? "Search"}
          onClick={handleSearch}
        >
          {props.loading ? <IconLoading /> : <IconSearch />}
        </button>
        {slots.suffix?.()}
      </>
    );

    const renderButton = () => {
      const buttonSlots =
        props.buttonText || slots["button-default"] || slots["button-icon"]
          ? {
              default:
                slots["button-default"] ??
                (props.buttonText ? () => props.buttonText : undefined),
              icon: slots["button-icon"],
            }
          : { icon: () => <IconSearch /> };

      return (
        <Button
          {...props.buttonProps}
          v-slots={buttonSlots}
          status="primary"
          class={classes(n("btn"))}
          disabled={Boolean(props.disabled || props.readonly)}
          size={mergedSize.value}
          loading={props.loading}
          aria-label={props.buttonText ?? "Search"}
          onClick={handleSearch}
        />
      );
    };

    const { class: className, style, ...inputAttrs } = attrs;

    const render = () => (
      <div class={[classes(n()), className]} style={style as StyleValue}>
        <InputGroup
          size={mergedSize.value}
          disabled={Boolean(props.disabled)}
          variant={props.variant}
        >
          {props.fields.length > 0 && (
            <Select
              ref={selectRef}
              modelValue={computedField.value}
              options={props.fields}
              style={props.selectStyle}
              disabled={Boolean(props.disabled || props.readonly)}
              v-slots={{
                prefix: slots.prefix,
                suffix: props.searchButton ? slots.suffix : renderSuffix,
              }}
              onChange={handleFieldChange}
            />
          )}
          <Menu
            open={historyVisible.value}
            trigger="focus"
            placement="bl"
            autoFitPopupWidth
            popupContainer={inputRef.value?.$el}
            onOpenChange={handleHistoryVisibleChange}
            onUpdate:open={handleHistoryVisibleChange}
            onSelect={handleHistorySelect}
            v-slots={{
              content: () =>
                props.recentSearches.map((item) => (
                  <MenuOption value={item} label={item} />
                )),
            }}
          >
            <Input
              {...inputAttrs}
              ref={inputRef}
              modelValue={computedValue.value}
              placeholder={computedPlaceholder.value}
              size={mergedSize.value}
              disabled={props.disabled}
              readonly={props.readonly}
              variant={props.variant}
              clearable={props.clearable}
              v-slots={{
                prefix: slots.prefix,
                suffix: props.searchButton ? slots.suffix : renderSuffix,
                "clear-icon": slots["clear-icon"],
              }}
              onInput={handleInput}
              onChange={handleChange}
              onClear={handleClear}
              onPressEnter={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Menu>
          {props.searchButton && renderButton()}
        </InputGroup>
      </div>
    );

    return { inputRef, render };
  },
  methods: {
    focus() {
      this.inputRef?.focus();
    },
    blur() {
      this.inputRef?.blur();
    },
  },
  render() {
    return this.render();
  },
});
