<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><circle cx="24" cy="24" r="7"></circle><path d="M23 7h2v2h-2zM23 39h2v2h-2zM41 23v2h-2v-2zM9 23v2H7v-2zM36.73 35.313l-1.415 1.415-1.414-1.415 1.414-1.414zM14.099 12.686l-1.414 1.415-1.414-1.415 1.414-1.414zM12.687 36.728l-1.414-1.415 1.414-1.414 1.414 1.414zM35.314 14.1 33.9 12.686l1.414-1.414 1.415 1.414z"></path><path fill="currentColor" stroke="none" d="M23 7h2v2h-2zM23 39h2v2h-2zM41 23v2h-2v-2zM9 23v2H7v-2zM36.73 35.313l-1.415 1.415-1.414-1.415 1.414-1.414zM14.099 12.686l-1.414 1.415-1.414-1.415 1.414-1.414zM12.687 36.728l-1.414-1.415 1.414-1.414 1.414 1.414zM35.314 14.1 33.9 12.686l1.414-1.414 1.415 1.414z"></path></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconSun',
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
    const cls = computed(() => [prefixCls, `${prefixCls}-sun`, { [`${prefixCls}-spin`]: props.spin }]);
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
