import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCopyright from './icon-copyright.vue';

export const IconCopyright = Object.assign(_IconCopyright, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCopyright.name, _IconCopyright);
  }
});

export default IconCopyright;
