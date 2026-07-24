import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconEmpty from './icon-empty.vue';

export const IconEmpty = Object.assign(_IconEmpty, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEmpty.name, _IconEmpty);
  }
});

export default IconEmpty;
