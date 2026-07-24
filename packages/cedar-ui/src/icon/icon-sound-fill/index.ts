import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSoundFill from './icon-sound-fill.vue';

export const IconSoundFill = Object.assign(_IconSoundFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSoundFill.name, _IconSoundFill);
  }
});

export default IconSoundFill;
