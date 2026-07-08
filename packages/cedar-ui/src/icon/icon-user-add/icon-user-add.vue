<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path d="M25 27h-8c-5.523 0-10 4.477-10 10v4h18m11-14v8m0 0v8m0-8h8m-8 0h-8m3-21a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconUserAdd',
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
    const cls = computed(() => [prefixCls, `${prefixCls}-user-add`, { [`${prefixCls}-spin`]: props.spin }]);
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
