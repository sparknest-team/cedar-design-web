import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconArrowDown from './icon-arrow-down.vue';

export const IconArrowDown = Object.assign(_IconArrowDown, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconArrowDown.name, _IconArrowDown);
  }
});

export default IconArrowDown;
