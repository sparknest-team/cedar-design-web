import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconShrink from './icon-shrink.vue';

export const IconShrink = Object.assign(_IconShrink, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconShrink.name, _IconShrink);
  }
});

export default IconShrink;
