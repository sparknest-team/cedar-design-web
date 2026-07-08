import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconBackward from './icon-backward.vue';

export const IconBackward = Object.assign(_IconBackward, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBackward.name, _IconBackward);
  }
});

export default IconBackward;
