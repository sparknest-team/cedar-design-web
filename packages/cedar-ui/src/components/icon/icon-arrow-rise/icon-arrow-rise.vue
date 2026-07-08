<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016z"></path><path fill="currentColor" stroke="none" d="m24 6 10 12H14z"></path><path d="M26 42h-4V16h4z"></path><path fill="currentColor" stroke="none" d="M26 42h-4V16h4z"></path></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconArrowRise',
  props: {
    size: {
      type: [Number, String],
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String as PropType<'butt' | 'round' | 'square'>,
      default: 'butt',
      required: false,
      validator: (value: any) => {
        return ['butt', 'round', 'square'].includes(value);
      }
    },
    strokeLinejoin: {
      type: String as PropType<any>,
      default: 'miter',
      required: false,
      validator: (value: any) => {
        return ['arcs', 'bevel', 'miter', 'miter-clip', 'round'].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('icon');
    const cls = computed(() => [prefixCls, `${prefixCls}-arrow-rise`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev: MouseEvent) => {
      emit('click', ev);
    };

    return {
      cls,
      innerStyle,
      onClick,
    };
  }
});
</script>
