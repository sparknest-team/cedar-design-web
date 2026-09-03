<template>
  <div
    :class="
      classes(
        n(),
        [variant, `${n(`--variant-${variant}`)}`],
        [vertical, n('--vertical'), n('--horizontal')],
        [variant === 'default', formatElevation(elevation, 2)],
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { createNamespace, formatElevation } from "../_utils/global-config";
import { buttonGroupProps } from "./props";
import { useButtons, type ButtonGroupProvider } from "./provide";

defineOptions({
  name: createNamespace("button-group").name,
});

const { n, classes } = createNamespace("button-group");

const props = defineProps(buttonGroupProps);

const { bindButtons } = useButtons();

const buttonGroupProvider: ButtonGroupProvider = {
  status: computed(() => props.status),
  variant: computed(() => props.variant),
  size: computed(() => props.size),
  color: computed(() => props.color),
  textColor: computed(() => props.textColor),
  stacked: computed(() => props.stacked),
  disabled: computed(() => props.disabled),
  vertical: computed(() => props.vertical),
};

bindButtons(buttonGroupProvider);

defineExpose({
  buttonGroupProvider,
});
</script>
