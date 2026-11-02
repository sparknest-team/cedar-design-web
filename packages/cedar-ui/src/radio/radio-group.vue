<script setup lang="ts">
import { useOptionRequest } from "../_hooks/use-option-request";
import { computed, provide, reactive, useSlots } from "vue";
import { createNamespace } from "../_utils/global-config";
import { ChoiceLabel } from "../checkbox/choice-label";
import { normalizeChoiceOptions } from "../checkbox/choice-options";
import { useChoiceState } from "../checkbox/choice-state";
import type { RadioModel } from "../checkbox/choice-value-props";
import { radioGroupProps } from "./props";
import { radioGroupKey } from "./context";
import { useRadioForm } from "./form-adapter";
import { useRadioNavigation } from "./use-radio-navigation";
import Radio from "./presentation";
defineOptions({ name: createNamespace("radio-group").name });
const { n, classes } = createNamespace("radio-group");
const props = defineProps(radioGroupProps);
const slots = useSlots();
const emit = defineEmits<{
  "load-error": [error: unknown];
  "update:modelValue": [value: RadioModel];
  change: [value: RadioModel, event?: Event];
}>();
const {
  mergedDisabled,
  mergedReadonly,
  mergedError,
  mergedSize,
  eventHandlers,
} = useRadioForm(props);
const source = useOptionRequest(
  () => props.options,
  () => mergedDisabled.value || mergedReadonly.value || !!props.readPretty,
  (error) => emit("load-error", error),
  () => 0,
  radioGroupProps,
);
const { value, commit } = useChoiceState(
  () => props.modelValue,
  props.defaultValue,
  (next, event) => {
    emit("update:modelValue", next);
    emit("change", next, event);
    eventHandlers.value.onChange?.(event);
  },
  () => mergedDisabled.value || mergedReadonly.value,
);
const options = computed(() =>
  normalizeChoiceOptions(source.options.value, props.fieldNames),
);
const navigation = useRadioNavigation(() => value.value !== null);
provide(
  radioGroupKey,
  reactive({
    navigation,
    value,
    size: mergedSize,
    variant: computed(() => props.variant),
    name: computed(() => props.name),
    disabled: mergedDisabled,
    readonly: mergedReadonly,
    error: mergedError,
    slots,
    handleChange: commit,
  }),
);
</script>
<template>
  <div
    :aria-busy="source.loading.value || undefined"
    role="radiogroup"
    :aria-label="ariaLabel"
    :aria-disabled="mergedDisabled || undefined"
    :aria-readonly="mergedReadonly || undefined"
    :aria-invalid="mergedError || undefined"
    :class="
      classes(n(), n(`--${orientation}`), n(`--size-${mergedSize}`), [
        variant === 'button',
        n('--button'),
      ])
    "
    @keydown="navigation.keydown"
  >
    <template v-if="props.options !== undefined">
      <Radio
        v-for="option in options"
        :key="`${typeof option.value}:${String(option.value)}`"
        edit-mode="direct"
        :value="option.value"
        :disabled="option.disabled"
        :readonly="option.readonly"
      >
        <template #default="{ checked }">
          <slot name="label" :data="option" :checked="checked">
            <choice-label
              :content="
                typeof option.label === 'function'
                  ? option.label(option, checked)
                  : option.label
              "
            />
          </slot>
        </template>
      </Radio>
    </template>
    <slot v-else />

  </div>
</template>
