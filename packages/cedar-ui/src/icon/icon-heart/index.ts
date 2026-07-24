import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconHeart from './icon-heart.vue';

export const IconHeart = Object.assign(_IconHeart, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconHeart.name, _IconHeart);
  }
});

export default IconHeart;
