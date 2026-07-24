import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCopy from './icon-copy.vue';

export const IconCopy = Object.assign(_IconCopy, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCopy.name, _IconCopy);
  }
});

export default IconCopy;
