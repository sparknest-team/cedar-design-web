import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconAt from './icon-at.vue';

export const IconAt = Object.assign(_IconAt, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconAt.name, _IconAt);
  }
});

export default IconAt;
