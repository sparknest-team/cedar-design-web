import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMute from './icon-mute.vue';

export const IconMute = Object.assign(_IconMute, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMute.name, _IconMute);
  }
});

export default IconMute;
