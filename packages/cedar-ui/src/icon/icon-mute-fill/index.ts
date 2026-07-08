import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMuteFill from './icon-mute-fill.vue';

export const IconMuteFill = Object.assign(_IconMuteFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMuteFill.name, _IconMuteFill);
  }
});

export default IconMuteFill;
