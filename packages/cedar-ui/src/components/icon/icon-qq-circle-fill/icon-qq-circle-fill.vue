<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path fill="currentColor" stroke="none" d="M24.007 1C11.281 1 1 11.281 1 24.007c0 13.23 11.216 23.87 24.733 22.936 11.288-.791 20.49-9.994 21.21-21.354C47.877 12.144 37.237 1 24.007 1m11.36 29.263s-.79 2.228-2.3 4.241c0 0 2.66.935 2.444 3.236 0 0 .072 2.66-5.68 2.444 0 0-4.026-.287-5.248-2.013h-1.079c-1.222 1.726-5.248 2.013-5.248 2.013-5.752.216-5.68-2.444-5.68-2.444-.216-2.373 2.444-3.236 2.444-3.236-1.51-2.013-2.3-4.241-2.3-4.241-3.596 5.895-3.236-.791-3.236-.791.647-3.955 3.523-6.543 3.523-6.543-.431-3.595 1.078-4.242 1.078-4.242.216-11.072 9.707-10.929 9.922-10.929.216 0 9.707-.215 9.994 10.929 0 0 1.51.647 1.079 4.242 0 0 2.876 2.588 3.523 6.543 0 0 .36 6.686-3.236.79"></path></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconQqCircleFill',
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
    const cls = computed(() => [prefixCls, `${prefixCls}-qq-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
