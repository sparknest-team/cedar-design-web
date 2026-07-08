import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPause from './icon-pause.vue';

export const IconPause = Object.assign(_IconPause, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPause.name, _IconPause);
  }
});

export default IconPause;
