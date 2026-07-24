import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconPenFill from './icon-pen-fill.vue';

export const IconPenFill = Object.assign(_IconPenFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPenFill.name, _IconPenFill);
  }
});

export default IconPenFill;
