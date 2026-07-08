import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconStamp from './icon-stamp.vue';

export const IconStamp = Object.assign(_IconStamp, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconStamp.name, _IconStamp);
  }
});

export default IconStamp;
