import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconThunderbolt from './icon-thunderbolt.vue';

export const IconThunderbolt = Object.assign(_IconThunderbolt, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconThunderbolt.name, _IconThunderbolt);
  }
});

export default IconThunderbolt;
