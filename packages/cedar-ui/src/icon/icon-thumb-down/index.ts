import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconThumbDown from './icon-thumb-down.vue';

export const IconThumbDown = Object.assign(_IconThumbDown, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconThumbDown.name, _IconThumbDown);
  }
});

export default IconThumbDown;
