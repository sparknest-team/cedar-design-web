<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path fill="currentColor" stroke="none" d="M23.997 21.054h19.42a19.5 19.5 0 0 1 .321 3.428q0 5.813-2.437 10.38Q38.863 39.429 34.35 42q-4.514 2.572-10.353 2.572-4.205 0-8.009-1.621-3.803-1.62-6.562-4.38-2.76-2.758-4.38-6.562A20.2 20.2 0 0 1 3.426 24q0-4.205 1.62-8.009 1.62-3.803 4.38-6.562t6.562-4.38a20.2 20.2 0 0 1 8.01-1.62q8.035 0 13.794 5.384l-5.598 5.384q-3.295-3.188-8.197-3.188-3.455 0-6.388 1.741a12.83 12.83 0 0 0-4.648 4.728Q11.247 20.464 11.247 24t1.714 6.523a12.83 12.83 0 0 0 4.648 4.727q2.933 1.74 6.388 1.741 2.33 0 4.286-.643 1.955-.642 3.214-1.607a11.6 11.6 0 0 0 2.197-2.196q.937-1.232 1.38-2.33a10 10 0 0 0 .602-2.09H23.997z"></path></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconGoogle',
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
    const cls = computed(() => [prefixCls, `${prefixCls}-google`, { [`${prefixCls}-spin`]: props.spin }]);
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
