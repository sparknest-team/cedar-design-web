import { useOptionRequest } from '../_hooks/use-option-request'
import { resolveEmptyValue } from "../_utils/empty-value";
import { mentionProps } from "./props";
import {
  computed,
  defineComponent,
  PropType,
  ref,
  toRefs,
  ComponentPublicInstance,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  watch,
  nextTick,
  toRef,
} from "vue";
import Textarea from "../textarea";
import Input from "../input";
import Trigger from "../trigger";
import SelectDropdown from "../select/SelectDropdown.vue";
import Option from "../select/Option.vue";
import { MeasureInfo } from "./types";
import {
  getLastMeasureIndex,
  getTextBeforeSelection,
  isValidSearch,
} from "./utils";
import {
  SelectOptionData,
  SelectOptionGroup,
  SelectOptionInfo,
} from "../select/types";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import { getSizeStyles } from "../textarea/utils";
import ResizeObserver from "../_components/resize-observer";
import { isFunction, isNull, isUndefined } from "../_utils/is";
import { useSelect } from "../select/hooks/use-select";
import { getKeyFromValue } from "../select/utils";
import { useFormItem } from "../_hooks/use-form-item";

const { name } = createNamespace("mention");

export default defineComponent({
  name,
  inheritAttrs: false,
  props: mentionProps,
  emits: {
    "load-error": (error: unknown) => true,
    "update:modelValue": (value: string | null) => true,
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @property {string} value
     */
    change: (value: string | null) => true,
    /**
     * @zh 动态搜索时触发，2.47.0 版本增加 prefix 参数
     * @en Trigger on dynamic search prefix, version 2.47.0 adds prefix param
     * @property {string} value
     * @property {string} prefix
     */
    search: (value: string | null, prefix: string) => true,
    /**
     * @zh 选择下拉选项时触发
     * @en Triggered when the drop-down option is selected
     * @property {string | number | Record<string, any> | undefined} value
     */
    select: (value: string | number | Record<string, any> | undefined) => true,
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     */
    clear: (ev: Event) => true,
    /**
     * @zh 文本框获取焦点时触发
     * @en Emitted when the text box gets focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true,
    /**
     * @zh 文本框失去焦点时触发
     * @en Emitted when the text box loses focus
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true,
  },
  /**
   * @zh 选项内容
   * @en Display content of options
   * @slot option
   * @binding {OptionInfo} data
   */
  setup(props, { emit, attrs, slots }) {
    const prefixCls = getPrefixCls("mention");

    const active = ref(true);
    let disposed = false;
    const lifecycleEpoch = ref(0);
    const available = () => active.value && !disposed;
    let mirrorGeneration = 0;
    let styleGeneration = 0;
    const invalidateMirror = () => {
      mirrorGeneration++;
    };

    const { mergedDisabled, mergedReadonly, eventHandlers } = useFormItem({
      disabled: toRef(props, "disabled"),
      readonly: toRef(props, "readonly"),
    });

    const { modelValue } = toRefs(props);
    const source = useOptionRequest(() => props.data, () => !available() || mergedDisabled.value || mergedReadonly.value, error => emit('load-error', error), () => 0, mentionProps);
    const effectiveLoading = computed(() => props.loading || source.loading.value);
    const data = source.options;
    const dropdownRef = ref();
    const optionRefs = ref<Record<string, HTMLElement>>({});
    const _value = ref<string | null>(props.defaultValue);
    const computedValue = computed(() => props.modelValue === null ? '' : props.modelValue ?? _value.value ?? '');

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = "";
      }
    });

    const computedValueKeys = computed(() =>
      computedValue.value ? [getKeyFromValue(computedValue.value)] : [],
    );
    const measureInfo = ref<MeasureInfo>({
      measuring: false,
      location: -1,
      prefix: "",
      text: "",
    });

    const resetMeasureInfo = () => {
      measureInfo.value = {
        measuring: false,
        location: -1,
        prefix: "",
        text: "",
      };
    };

    const inputRef = ref<{
      textareaRef?: HTMLTextAreaElement;
      focus?: () => void;
      blur?: () => void;
    }>();

    const measureText = computed(() => measureInfo.value.text);
    const filterOption = computed(() => !source.remote.value);

    let clearEvent: Event | undefined;
    const handleInput = (value: string | null, e: Event) => {
      if (e === clearEvent) { clearEvent = undefined; return }
      if (!available() || mergedDisabled.value || mergedReadonly.value) return;
      const text = getTextBeforeSelection(e.target as HTMLInputElement);
      const lastMeasure = getLastMeasureIndex(text, props.prefix);
      if (lastMeasure.location > -1) {
        const measureText = text.slice(
          lastMeasure.location + lastMeasure.prefix.length,
        );
        if (isValidSearch(measureText, props.split)) {
          _open.value = true;
          measureInfo.value = {
            measuring: true,
            text: measureText,
            ...lastMeasure,
          };
          emit("search", measureText, lastMeasure.prefix);
          void source.search(measureText);
        } else if (measureInfo.value.location > -1) {
          resetMeasureInfo();
        }
      } else if (measureInfo.value.location > -1) {
        resetMeasureInfo();
      }
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value);
      eventHandlers.value?.onChange?.();
    };

    const handleClear = (ev: Event) => {
      clearEvent = ev;
      resetMeasureInfo();
      if (!available() || mergedDisabled.value || mergedReadonly.value) return;
      const next = resolveEmptyValue(props, "");
      _value.value = next;
      emit("update:modelValue", next);
      emit("change", next);
      eventHandlers.value?.onChange?.();
      emit("clear", ev);
    };

    const _open = ref(false);
    const computedOpen = computed(
      () =>
        available() &&
        !mergedDisabled.value &&
        _open.value &&
        measureInfo.value.measuring &&
        validOptionInfos.value.length > 0,
    );

    const handleResize = () => {
      if (!available() || props.type !== "textarea") return;
      const element = inputRef.value?.textareaRef;
      const view = element?.ownerDocument.defaultView;
      if (!element || !view) return;
      const generation = ++styleGeneration;
      const current = () =>
        available() &&
        generation === styleGeneration &&
        props.type === "textarea" &&
        element === inputRef.value?.textareaRef;
      const declaration = view.getComputedStyle(element);
      if (!current()) return;
      const styles = getSizeStyles(declaration);
      if (current()) mirrorStyle.value = styles;
    };

    const handleOpenChange = (open: boolean) => {
      if (!available() || mergedDisabled.value || mergedReadonly.value) return;
      _open.value = open;
    };

    const handleSelect = (key: string, e: Event) => {
      if (!available() || mergedDisabled.value || mergedReadonly.value) return;
      const { value } = optionInfoMap.get(key) ?? {};
      const measureStart = measureInfo.value.location;
      const measureEnd =
        measureInfo.value.location + measureInfo.value.text.length;
      let head = (_value.value ?? '').slice(0, measureStart);
      let tail = (_value.value ?? '').slice(measureEnd + 1);
      // 如过匹配内容之前或者之后已经存在内容，需要添加分割字符
      head +=
        !head || head.endsWith(props.split) || head.endsWith("\n")
          ? ""
          : props.split;
      tail =
        (!tail || tail.startsWith(props.split) || tail.startsWith("\n")
          ? ""
          : props.split) + tail;

      const match = `${measureInfo.value.prefix}${value}`;
      const nextValue = `${head}${match}${tail}`;

      _value.value = nextValue;
      emit(
        "select",
        value as string | number | Record<string, any> | undefined,
      );
      emit("update:modelValue", nextValue);
      emit("change", nextValue);
      resetMeasureInfo();
      eventHandlers.value?.onChange?.();
    };

    const { validOptions, optionInfoMap, validOptionInfos, handleKeyDown } =
      useSelect({
        options: data,
        inputValue: measureText,
        filterOption,
        open: computedOpen,
        valueKeys: computedValueKeys,
        dropdownRef,
        optionRefs,
        onSelect: handleSelect,
        onOpenChange: handleOpenChange,
        enterToOpen: false,
      });

    const mirrorStyle = ref();

    onMounted(handleResize);

    const getOptionContentFunc = (item: SelectOptionInfo) => {
      if (isFunction(slots.option) && item.value) {
        const optionInfo = optionInfoMap.get(item.key);
        const optionSlot = slots.option;
        return () => optionSlot({ data: optionInfo });
      }
      return () => item.label;
    };

    const renderOption = (item: SelectOptionInfo) => {
      return (
        <Option
          // @ts-ignore
          ref={(ref: ComponentPublicInstance) => {
            if (ref?.$el) {
              optionRefs.value[item.key] = ref.$el;
            }
          }}
          v-slots={{ default: getOptionContentFunc(item) }}
          key={item.key}
          value={item.value}
          disabled={item.disabled}
          internal
        />
      );
    };

    const renderDropdown = () => {
      return (
        <SelectDropdown ref={dropdownRef}>
          {validOptions.value.map((info) =>
            renderOption(info as SelectOptionInfo),
          )}
        </SelectDropdown>
      );
    };

    const mirrorRef = ref<HTMLElement>();

    const mirrorSources = [
      computedOpen,
      computedValue,
      measureInfo,
      validOptionInfos,
      () => props.type,
      mergedDisabled,
    ];
    watch(
      mirrorSources,
      () => {
        invalidateMirror();
        styleGeneration++;
      },
      { flush: "sync" },
    );
    // Capture the rendered textarea/mirror pair, not a previous mode's refs.
    watch(
      mirrorSources,
      () => {
        if (!available() || props.type !== "textarea") return;
        handleResize();
        if (!computedOpen.value) return;
        const input = inputRef.value;
        const element = input?.textareaRef;
        const mirror = mirrorRef.value;
        if (!element || !mirror) return;
        const generation = ++mirrorGeneration;
        const current = () =>
          available() &&
          generation === mirrorGeneration &&
          computedOpen.value &&
          props.type === "textarea" &&
          input === inputRef.value &&
          element === inputRef.value?.textareaRef &&
          mirror === mirrorRef.value;
        nextTick(() => {
          if (!current()) return;
          // Consume once, before a geometry getter or native method can reenter.
          mirrorGeneration++;
          const consumedGeneration = mirrorGeneration;
          const top = element.scrollTop;
          if (
            !available() ||
            consumedGeneration !== mirrorGeneration ||
            !computedOpen.value ||
            input !== inputRef.value ||
            element !== inputRef.value?.textareaRef ||
            mirror !== mirrorRef.value
          )
            return;
          if (Number.isFinite(top)) mirror.scrollTo(0, Math.max(0, top));
        });
      },
      { flush: "post" },
    );

    onDeactivated(() => {
      active.value = false;
      lifecycleEpoch.value++;
      invalidateMirror();
      styleGeneration++;
    });
    onBeforeUnmount(() => {
      disposed = true;
      active.value = false;
      lifecycleEpoch.value++;
      invalidateMirror();
      styleGeneration++;
    });
    onActivated(() => {
      if (active.value || disposed) return;
      lifecycleEpoch.value++;
      active.value = true;
    });

    /** Make the input focus while its owner is active and enabled. @public */
    const focus = () => {
      if (available() && !mergedDisabled.value) inputRef.value?.focus?.();
    };
    /** Make the input blur while its owner is active. @public */
    const blur = () => {
      if (available()) inputRef.value?.blur?.();
    };
    const onKeydown = (event: KeyboardEvent) => {
      if (available() && !mergedDisabled.value) handleKeyDown(event);
    };

    const onFocus = (ev: FocusEvent) => {
      if (!available() || mergedDisabled.value || mergedReadonly.value) return;
      emit("focus", ev);
    };
    const onBlur = (ev: FocusEvent) => {
      if (!available()) return;
      emit("blur", ev);
    };

    const render = () => {
      const epoch = lifecycleEpoch.value;
      if (props.type === "textarea") {
        return (
          <div class={prefixCls}>
            <ResizeObserver
              onResize={() => {
                if (epoch === lifecycleEpoch.value) handleResize();
              }}
            >
              <Textarea
                {...attrs}
                loading={effectiveLoading.value}
                ref={inputRef}
                clearable={props.clearable}
                emptyValue={props.emptyValue}
                modelValue={computedValue.value}
                disabled={mergedDisabled.value}
                readonly={mergedReadonly.value}
                onInput={handleInput}
                onClear={handleClear}
                onFocus={onFocus}
                onBlur={onBlur}
                // @ts-ignore
                onKeydown={onKeydown}
              />
            </ResizeObserver>
            {measureInfo.value.measuring &&
              validOptionInfos.value.length > 0 && (
                <div
                  ref={mirrorRef}
                  style={mirrorStyle.value}
                  class={`${prefixCls}-measure`}
                >
                  {computedValue.value?.slice(0, measureInfo.value.location)}
                  <Trigger
                    v-slots={{ content: renderDropdown }}
                    trigger="focus"
                    placement="bottom-start"
                    popupOffset={4}
                    preventFocus={true}
                    open={computedOpen.value}
                    closeOnClickReference={false}
                    onUpdate:open={handleOpenChange}
                  >
                    <span>@</span>
                  </Trigger>
                </div>
              )}
          </div>
        );
      }

      return (
        <Trigger
          v-slots={{ content: renderDropdown }}
          trigger="focus"
          placement="bottom-start"
          animationName="slide-dynamic-origin"
          popupOffset={4}
          preventFocus={true}
          open={computedOpen.value}
          closeOnClickReference={false}
          autoFitPopupWidth
          autoFitTransformOrigin
          disabled={mergedDisabled.value || mergedReadonly.value}
          onUpdate:open={handleOpenChange}
        >
          <Input
            loading={effectiveLoading.value}
            v-slots={slots}
            {...attrs}
            ref={inputRef}
            clearable={props.clearable}
            emptyValue={props.emptyValue}
            modelValue={computedValue.value}
            disabled={mergedDisabled.value}
                readonly={mergedReadonly.value}
            onInput={handleInput}
            onClear={handleClear}
            onFocus={onFocus}
            onBlur={onBlur}
            // @ts-ignore
            onKeydown={onKeydown}
          />
        </Trigger>
      );
    };

    return {
      inputRef,
      focus,
      blur,
      render,
    };
  },
  render() {
    return this.render();
  },
});
