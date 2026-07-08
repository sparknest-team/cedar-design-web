<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 48 48" :class="cls" :style="innerStyle" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" @click="onClick"><path fill="currentColor" stroke="none" d="M32.571 33.526c-2.084 1.92-4.927 3.05-8.322 3.05a12.57 12.57 0 0 1-12.572-12.577A12.58 12.58 0 0 1 24.25 11.416a12.1 12.1 0 0 1 8.414 3.277L29.061 18.3a6.79 6.79 0 0 0-4.807-1.88c-3.277 0-6.045 2.213-7.037 5.186a7.6 7.6 0 0 0-.394 2.392c0 .833.144 1.638.394 2.391.992 2.973 3.763 5.187 7.032 5.187 1.696 0 3.133-.449 4.254-1.202a5.78 5.78 0 0 0 2.513-3.8h-6.767V21.71h11.844q.226 1.238.227 2.57c0 3.835-1.371 7.055-3.749 9.246M24 1A23 23 0 1 0 24 47 23 23 0 0 0 24 1"></path></svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed, type PropType } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

export default defineComponent({
  name: 'IconGoogleCircleFill',
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
    const cls = computed(() => [prefixCls, `${prefixCls}-google-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
