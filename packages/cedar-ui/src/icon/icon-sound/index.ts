import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSound from './icon-sound.vue';

export const IconSound = Object.assign(_IconSound, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSound.name, _IconSound);
  }
});

export default IconSound;
