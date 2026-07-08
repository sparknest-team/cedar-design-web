import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconTwitter from './icon-twitter.vue';

export const IconTwitter = Object.assign(_IconTwitter, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTwitter.name, _IconTwitter);
  }
});

export default IconTwitter;
