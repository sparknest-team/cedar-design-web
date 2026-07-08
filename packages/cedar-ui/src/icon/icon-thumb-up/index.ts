import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconThumbUp from './icon-thumb-up.vue';

export const IconThumbUp = Object.assign(_IconThumbUp, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconThumbUp.name, _IconThumbUp);
  }
});

export default IconThumbUp;
