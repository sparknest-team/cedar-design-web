import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconVoice from './icon-voice.vue';

export const IconVoice = Object.assign(_IconVoice, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconVoice.name, _IconVoice);
  }
});

export default IconVoice;
