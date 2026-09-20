import {
  computed,
  defineComponent,
  PropType,
  ref,
  toRefs,
  StyleValue,
} from 'vue'
import { createNamespace } from '../_utils/global-config'
import IconHover from '../_components/IconHover.vue'
import { IconSearch } from '@cedarjs/icons-vue/icon-search'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import Button, { ButtonProps } from '../button'
import Input from '../input/input'
import InputGroup from '../input/InputGroup.vue'
import type { ComponentSize } from '../_utils/constant'
import { useSize } from '../_hooks/use-size'
import { SelectOptionData } from '../select'
import Select from '../select'
import type { SearchResult } from './result'
import DropdownMenu, { MenuOption } from '../dropdown-menu'

function searchHistoryLocal(max: number) {
  const maxLength = max

  function search(element: string | undefined, list: string[]) {
    if (!element) return
    const index = list.indexOf(element)
    if (index !== -1) {
      list.splice(index, 1)
      list.unshift(element)
    } else {
      list.unshift(element)
    }
  }

  function push(element: string | undefined, list: string[]) {
    const next = [...list]
    search(element, next)
    if (next.length > maxLength) {
      next.pop()
    }
    return next
  }

  return {
    push,
  }
}

export default defineComponent({
  name: createNamespace('search').name,
  props: {
    modelValue: String,
    defaultValue: String,
    searchButton: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
    },
    variant: {
      type: String as PropType<'filled' | 'outline' | 'standard'>,
    },
    size: {
      type: String as PropType<ComponentSize>,
    },
    buttonText: {
      type: String,
    },
    buttonProps: {
      type: Object as PropType<ButtonProps>,
    },
    recentSearches: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    fields: {
      type: Array as PropType<SelectOptionData[]>,
      default: () => [],
    },
    selectStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
    },
    defaultField: {
      type: String,
    },
    modelField: {
      type: String,
    },
    model: {
      type: Object as PropType<Record<string, any>>,
    },
    maxSearchHistoryCount: {
      type: Number,
      default: 5,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
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
          <DropdownMenu
            open={historyVisible.value}
            trigger="focus"
            placement="bottom-start"
            autoFitPopupWidth
            popupContainer={inputRef.value?.$el}
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
              onPress-enter={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </DropdownMenu>
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
