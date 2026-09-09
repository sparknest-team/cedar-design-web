<template>
  <FieldDecorator
    v-bind="wrapperAttrs"
    :class="wrapperCls"
    :variant="mergedVariant"
    :size="mergedSize"
    :disabled="mergedDisabled"
    :error="mergedError"
    :focused="focused"
    @mousedown="handleMousedown"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>

    <div
      v-if="autoSize"
      ref="mirrorRef"
      :class="classes(n('mirror'))"
      :style="mirrorStyle"
    >
      {{ `${computedValue}\n` }}
    </div>
    <resize-observer @resize="handleResize">
      <textarea
        ref="textareaRef"
        v-bind="mergedTextareaAttrs"
        :class="classes(n('inner'))"
        :style="textareaStyle"
        :value="computedValue"
        :disabled="mergedDisabled"
        :readonly="readonly"
        :rows="rows"
        :maxlength="undefined"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
        :aria-invalid="mergedError || undefined"
        :autofocus="autofocus"
        :enterkeyhint="enterkeyhint"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
      />
    </resize-observer>

    <template v-if="hasSuffix" #suffix>
      <slot v-if="showClearBtn" name="clear-icon" :clear="handleClear">
        <button
          type="button"
          :class="classes(n('clear-btn'))"
          :aria-label="t('common.clear')"
          @click="handleClear"
        >
          <icon-hover>
            <icon-close aria-hidden="true" />
          </icon-hover>
        </button>
      </slot>
      <span
        v-if="computedMaxLength && showWordLimit"
        :class="classes(n('word-limit'))"
      >
        {{ valueLength }}/{{ computedMaxLength }}
      </span>
      <slot name="suffix" />
    </template>
  </FieldDecorator>
</template>

<script lang="ts">
import type { CSSProperties } from "vue";
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  toRefs,
  watch,
} from "vue";
import { IconClose } from "@cedarjs/icons-vue/icon-close";
import ResizeObserver from "../_components/resize-observer";
import IconHover from "../_components/icon-hover.vue";
import { INPUT_EVENTS } from "../_utils/constant";
import { createNamespace } from "../_utils/global-config";
import { isFunction, isNull, isObject, isUndefined } from "../_utils/is";
import { omit } from "../_utils/omit";
import pick from "../_utils/pick";
import { useFormItem } from "../_hooks/use-form-item";
import { useCursor } from "../_hooks/use-cursor";
import FieldDecorator from "../field-decorator";
import { useI18n } from "../locale";
import { textareaProps } from "./props";
import { getNativeTextareaAttrs, getSizeStyles } from "./utils";

export default defineComponent({
  name: createNamespace("textarea").name,
  components: { ResizeObserver, IconHover, IconClose, FieldDecorator },
  inheritAttrs: false,
  props: textareaProps,
  emits: {
    "update:modelValue": (value: string) => true,
    input: (value: string, ev: Event) => true,
    change: (value: string, ev: Event) => true,
    keydown: (ev: KeyboardEvent) => true,
    clear: (ev: Event) => true,
    focus: (ev: FocusEvent) => true,
    blur: (ev: FocusEvent) => true,
  },
  setup(props, { emit, attrs, slots }) {
    const { n, classes } = createNamespace("textarea");
    const { t } = useI18n();
    const { size, variant, disabled, modelValue } = toRefs(props);
    const { formItemCtx, eventHandlers } = useFormItem();
    const mergedDisabled = computed(() =>
      Boolean(disabled.value ?? formItemCtx.disabled),
    );
    const mergedSize = computed(() => size.value ?? "md");
    const mergedVariant = computed(() => variant.value ?? "outlined");

    const textareaRef = ref<HTMLTextAreaElement>();
    const mirrorRef = ref<HTMLElement>();
    const mirrorStyle = ref<CSSProperties>();
    const autoSizeStyle = ref<CSSProperties>();
    const [recordCursor, setCursor] = useCursor(textareaRef);

    const _value = ref(props.defaultValue);
    const computedValue = computed(() => modelValue.value ?? _value.value);
    const focused = ref(false);
    let preValue = computedValue.value;

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = "";
      }
    });

    const computedMaxLength = computed(() =>
      isObject(props.maxLength) ? props.maxLength.length : props.maxLength,
    );
    const maxLengthErrorOnly = computed(
      () => isObject(props.maxLength) && Boolean(props.maxLength.errorOnly),
    );
    const getValueLength = (value: string) =>
      isFunction(props.wordLength) ? props.wordLength(value) : value.length;
    const valueLength = computed(() => getValueLength(computedValue.value));
    const mergedError = computed(
      () =>
        Boolean(formItemCtx.error) ||
        props.error ||
        Boolean(
          computedMaxLength.value &&
          maxLengthErrorOnly.value &&
          valueLength.value > computedMaxLength.value,
        ),
    );

    const showClearBtn = computed(
      () =>
        props.clearable &&
        !props.readonly &&
        !mergedDisabled.value &&
        Boolean(computedValue.value),
    );
    const hasSuffix = computed(
      () =>
        showClearBtn.value ||
        Boolean(computedMaxLength.value && props.showWordLimit) ||
        Boolean(slots.suffix),
    );

    const isComposition = ref(false);

    const keepControl = () => {
      recordCursor();
      nextTick(() => {
        if (
          textareaRef.value &&
          computedValue.value !== textareaRef.value.value
        ) {
          textareaRef.value.value = computedValue.value;
          setCursor();
        }
      });
    };

    const sliceValue = (value: string) =>
      props.wordSlice?.(value, computedMaxLength.value) ??
      value.slice(0, computedMaxLength.value);

    const normalizeValue = (value: string) => {
      if (
        computedMaxLength.value &&
        !maxLengthErrorOnly.value &&
        getValueLength(value) > computedMaxLength.value
      ) {
        return sliceValue(value);
      }
      return value;
    };

    const updateValue = (value: string) => {
      const nextValue = normalizeValue(value);
      _value.value = nextValue;
      emit("update:modelValue", nextValue);
      keepControl();
      return nextValue;
    };

    const emitChange = (value: string, ev: Event) => {
      if (value !== preValue) {
        preValue = value;
        emit("change", value, ev);
        eventHandlers.value?.onChange?.(ev);
      }
    };

    const withTrim = (value: string) =>
      props.modelModifiers.trim ? value.trim() : value;

    const commitValue = (ev: Event) => {
      const value = withTrim(computedValue.value);
      if (value !== computedValue.value) {
        _value.value = value;
        emit("update:modelValue", value);
        keepControl();
      }
      emitChange(value, ev);
    };

    const handleFocus = (ev: FocusEvent) => {
      focused.value = true;
      preValue = computedValue.value;
      emit("focus", ev);
      eventHandlers.value?.onFocus?.(ev);
    };

    const handleBlur = (ev: FocusEvent) => {
      focused.value = false;
      commitValue(ev);
      emit("blur", ev);
      eventHandlers.value?.onBlur?.(ev);
    };

    const processInput = (ev: Event) => {
      const nextValue = updateValue((ev.target as HTMLTextAreaElement).value);
      emit("input", nextValue, ev);
      eventHandlers.value?.onInput?.(ev);
    };

    const handleCompositionStart = () => {
      isComposition.value = true;
    };

    const handleCompositionEnd = (ev: CompositionEvent) => {
      if (!isComposition.value) return;
      isComposition.value = false;
      processInput(ev);
    };

    const handleInput = (ev: Event) => {
      if (!isComposition.value) processInput(ev);
    };

    const handleKeydown = (ev: KeyboardEvent) => {
      emit("keydown", ev);
    };

    const handleClear = (ev: Event = new Event("clear")) => {
      if (!showClearBtn.value) return;
      const value = updateValue("");
      preValue = value;
      emit("clear", ev);
      nextTick(() => textareaRef.value?.focus());
    };

    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const rootTextareaAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const mergedTextareaAttrs = computed(() => ({
      ...getNativeTextareaAttrs(rootTextareaAttrs.value),
      ...getNativeTextareaAttrs(props.textareaAttrs),
    }));

    const isScroll = ref(false);
    const wrapperCls = computed(() =>
      classes(n(), [isScroll.value, n("--scroll")]),
    );
    const textareaStyle = computed<CSSProperties>(() => ({
      resize: props.autoSize ? "none" : props.resize ? "vertical" : "none",
      ...autoSizeStyle.value,
    }));

    const computeIsScroll = () => {
      if (textareaRef.value) {
        isScroll.value =
          textareaRef.value.scrollHeight > textareaRef.value.offsetHeight;
      }
    };

    const syncAutoSize = () => {
      if (!props.autoSize) {
        autoSizeStyle.value = undefined;
        nextTick(computeIsScroll);
        return;
      }
      if (
        !textareaRef.value ||
        !mirrorRef.value ||
        typeof window === "undefined"
      )
        return;

      const styles = getSizeStyles(window.getComputedStyle(textareaRef.value));
      const fontSize = Number.parseFloat(styles["font-size"]) || 0;
      const lineHeight =
        Number.parseFloat(styles["line-height"]) || fontSize * 1.5;
      const outerHeight =
        (Number.parseFloat(styles["border-width"]) || 0) * 2 +
        (Number.parseFloat(styles["padding-top"]) || 0) +
        (Number.parseFloat(styles["padding-bottom"]) || 0);
      mirrorStyle.value = styles;

      nextTick(() => {
        const options = isObject(props.autoSize) ? props.autoSize : undefined;
        const minHeight = options?.minRows
          ? options.minRows * lineHeight + outerHeight
          : 0;
        const maxHeight = options?.maxRows
          ? options.maxRows * lineHeight + outerHeight
          : 0;
        let height = mirrorRef.value?.offsetHeight ?? 0;
        let overflow: CSSProperties["overflow"] = "hidden";

        if (minHeight && height < minHeight) height = minHeight;
        if (maxHeight && height > maxHeight) {
          height = maxHeight;
          overflow = "auto";
        }

        autoSizeStyle.value = { height: `${height}px`, overflow };
        nextTick(computeIsScroll);
      });
    };

    const handleResize = () => {
      syncAutoSize();
      computeIsScroll();
    };

    const handleMousedown = (ev: MouseEvent) => {
      if (
        mergedDisabled.value ||
        !textareaRef.value ||
        ev.target === textareaRef.value
      )
        return;
      ev.preventDefault();
      textareaRef.value.focus();
    };

    watch(computedValue, (value) => {
      if (!focused.value) {
        preValue = value;
      }
      nextTick(syncAutoSize);
      nextTick(computeIsScroll);
    });
    watch(
      () => props.autoSize,
      () => nextTick(syncAutoSize),
      { deep: true },
    );

    onMounted(() => {
      syncAutoSize();
      computeIsScroll();
    });

    return {
      n,
      classes,
      t,
      textareaRef,
      mirrorRef,
      mirrorStyle,
      textareaStyle,
      computedValue,
      computedMaxLength,
      valueLength,
      mergedDisabled,
      mergedError,
      mergedSize,
      mergedVariant,
      focused,
      showClearBtn,
      hasSuffix,
      wrapperAttrs,
      wrapperCls,
      mergedTextareaAttrs,
      handleInput,
      handleFocus,
      handleBlur,
      handleKeydown,
      handleCompositionStart,
      handleCompositionEnd,
      handleClear,
      handleResize,
      handleMousedown,
    };
  },
  methods: {
    focus() {
      (this.textareaRef as HTMLTextAreaElement)?.focus();
    },
    blur() {
      (this.textareaRef as HTMLTextAreaElement)?.blur();
    },
  },
});
</script>
