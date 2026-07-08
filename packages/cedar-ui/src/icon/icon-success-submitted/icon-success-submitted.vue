<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-opacity="0" viewBox="0 0 120 120" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><ellipse cx="60" cy="112.836" fill="url(#a)" rx="60" ry="7.164"></ellipse><rect width="56.418" height="62.641" x="38.144" y="20.852" fill="#F0F3FA" rx="4" transform="rotate(15 38.144 20.852)"></rect><rect width="23.179" height="7.06" x="54.995" y="22.177" fill="#B1B9CC" rx="1.5" transform="rotate(15 54.995 22.177)"></rect><rect width="8.851" height="8.851" x="46.961" y="34.858" rx="1.5" transform="rotate(15 46.961 34.858)"></rect><rect width="8.851" height="8.851" x="43.021" y="49.563" rx="1.5" transform="rotate(15 43.021 49.563)"></rect><rect width="8.851" height="8.851" x="39.081" y="64.268" rx="1.5" transform="rotate(15 39.08 64.268)"></rect><path d="m56.239 46.15 16.435 4.403M52.298 60.854l16.436 4.404M48.358 75.56l16.435 4.403M47.435 39.757l.906 1.57a1 1 0 0 0 1.366.366l3.466-2M43.53 54.34l.907 1.57a1 1 0 0 0 1.366.366l3.465-2M39.673 69.211l.907 1.57a1 1 0 0 0 1.366.366l3.465-2"></path><path fill="#fff" d="M83.164 93.269c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15"></path><path d="m76 78.79 5.432 5.432M81.432 84.27 91.702 74"></path><defs><linearGradient id="a" x1="60" x2="60" y1="101.821" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#F0F3FA"></stop></linearGradient></defs></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconSuccessSubmitted',
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
    const cls = computed(() => [prefixCls, `${prefixCls}-success-submitted`, { [`${prefixCls}-spin`]: props.spin }]);
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
