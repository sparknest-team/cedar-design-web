import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconGift from './icon-gift.vue';

export const IconGift = Object.assign(_IconGift, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconGift.name, _IconGift);
  }
});

export default IconGift;
