<template>
  <div :class="`${prefixCls}-input`">
    <template v-if="range">
      <input-number
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :model-value="modelValue[0] as number"
        mode="input"
        @change="(value) => $emit('start-change', value)"
      />
      <div :class="`${prefixCls}-input-hyphens`" />
    </template>
    <input-number
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :model-value="modelValue[1] as number"
      mode="input"
      @change="(value) => $emit('end-change', value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import InputNumber from "../input-number";
import { createNamespace, getPrefixCls } from "../_utils/global-config";

export default defineComponent({
  name: createNamespace("slider-input").name,
  components: {
    InputNumber,
  },
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
    },
    disabled: {
      type: Boolean,
    },
    range: {
      type: Boolean,
    },
  },
  emits: ["start-change", "end-change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("slider");

    return {
      prefixCls,
    };
  },
});
</script>
