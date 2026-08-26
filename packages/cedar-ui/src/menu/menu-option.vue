<template>
  <li
    ref="liRef"
    :class="[cls, { [`${prefixCls}-has-suffix`]: Boolean($slots.suffix) }]"
    @click="handleClick"
  >
    <span v-if="$slots.icon" :class="`${prefixCls}-icon`">
      <slot name="icon" />
    </span>
    <span :class="`${prefixCls}-content`">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="$slots.suffix" :class="`${prefixCls}-suffix`">
      <slot name="suffix" />
    </span>
  </li>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, inject, ref } from "vue";
import { getPrefixCls } from "../_utils/global-config";
import { menuInjectionKey } from "./context";

export default defineComponent({
  name: createNamespace("menu-option").name,
  props: {
    /**
     * @zh 选项值
     * @en Value
     */
    value: {
      type: [String, Number, Object],
    },
    /**
     * @zh 选项显示内容，不传 value 时也作为选项值
     * @en Option label. Used as option value when value is not provided
     */
    label: {
      type: [String, Number],
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    // private
    active: Boolean,
    uninjectContext: Boolean,
  },
  emits: {
    /**
     * @zh 点击选项时触发
     * @en Emitted when the option is clicked
     * @param {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true,
  },
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  /**
   * @zh 选项内容
   * @en Option content
   * @slot default
   */
  /**
   * @zh 后缀
   * @en Suffix
   * @slot suffix
   */
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("menu-option");
    const liRef = ref<HTMLElement>();

    const computedValue = computed(
      () => props.value ?? props.label ?? liRef.value?.textContent ?? undefined,
    );

    const menuCtx = !props.uninjectContext
      ? inject(menuInjectionKey, undefined)
      : undefined;

    const handleClick = (ev: MouseEvent) => {
      if (!props.disabled) {
        emit('click', ev)
        menuCtx?.onOptionClick(
          computedValue.value,
          {
            value: computedValue.value,
            label: props.label,
            disabled: props.disabled,
          },
          ev,
        )
      }
    }

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-active`]: props.active,
        [`${prefixCls}-selected`]:
          menuCtx?.modelValue?.value === computedValue.value,
      },
    ]);

    return {
      prefixCls,
      cls,
      liRef,
      handleClick,
    };
  },
});
</script>
